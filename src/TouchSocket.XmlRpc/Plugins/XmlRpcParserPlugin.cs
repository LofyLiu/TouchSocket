//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://touchsocket.net/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------

using System;
using System.Net.Sockets;
using System.Threading.Tasks;
using System.Xml;
using TouchSocket.Core;
using TouchSocket.Http;
using TouchSocket.Rpc;
using TouchSocket.Sockets;

namespace TouchSocket.XmlRpc
{
    /// <summary>
    /// XmlRpc解析器
    /// </summary>
    [PluginOption(Singleton = true)]
    public class XmlRpcParserPlugin : PluginBase, IHttpPlugin
    {
        private readonly IRpcServerProvider m_rpcServerProvider;
        private readonly IResolver m_resolver;
        private string m_xmlRpcUrl = "/xmlrpc";

        /// <summary>
        /// 构造函数
        /// </summary>
        public XmlRpcParserPlugin(IRpcServerProvider rpcServerProvider,IResolver resolver)
        {
            this.ActionMap = new ActionMap(true);
            this.RegisterServer(rpcServerProvider.GetMethods());
            this.m_rpcServerProvider = rpcServerProvider;
            this.m_resolver = resolver;
        }

        /// <summary>
        /// XmlRpc调用
        /// </summary>
        public ActionMap ActionMap { get; private set; }

        /// <summary>
        /// 所属服务器
        /// </summary>
        public RpcStore RpcStore { get; private set; }

        /// <summary>
        /// 当挂载在<see cref="HttpService"/>时，匹配Url然后响应。当设置为null或空时，会全部响应。
        /// </summary>
        public string XmlRpcUrl
        {
            get => this.m_xmlRpcUrl;
            set => this.m_xmlRpcUrl = string.IsNullOrEmpty(value) ? "/" : value;
        }

        /// <inheritdoc/>
        public async Task OnHttpRequest(IHttpSocketClient client, HttpContextEventArgs e)
        {
            if (e.Context.Request.Method == HttpMethod.Post)
            {
                if (this.m_xmlRpcUrl == "/" || e.Context.Request.UrlEquals(this.m_xmlRpcUrl))
                {
                    e.Handled = true;

                    var xml = new XmlDocument();
                    var xmlstring = e.Context.Request.GetBody();
                    xml.LoadXml(xmlstring);
                    var methodName = xml.SelectSingleNode("methodCall/methodName");
                    var actionKey = methodName.InnerText;

                    object[] ps = null;
                    var invokeResult = new InvokeResult();
                    XmlRpcCallContext callContext = null;

                    if (this.ActionMap.TryGetMethodInstance(actionKey, out var methodInstance))
                    {
                        if (methodInstance.IsEnable)
                        {
                            try
                            {
                                callContext = new XmlRpcCallContext(client,methodInstance,this.m_resolver,e.Context,xmlstring);

                                ps = new object[methodInstance.ParameterNames.Length];
                                var paramsNode = xml.SelectSingleNode("methodCall/params");
                                if (methodInstance.IncludeCallContext)
                                {
                                    ps[0] = callContext;
                                    var index = 1;
                                    foreach (XmlNode paramNode in paramsNode.ChildNodes)
                                    {
                                        var valueNode = paramNode.FirstChild.FirstChild;
                                        ps[index] = (XmlDataTool.GetValue(valueNode, methodInstance.ParameterTypes[index]));
                                        index++;
                                    }
                                }
                                else
                                {
                                    var index = 0;
                                    foreach (XmlNode paramNode in paramsNode.ChildNodes)
                                    {
                                        var valueNode = paramNode.FirstChild.FirstChild;
                                        ps[index] = (XmlDataTool.GetValue(valueNode, methodInstance.ParameterTypes[index]));
                                        index++;
                                    }
                                }
                            }
                            catch (Exception ex)
                            {
                                invokeResult.Status = InvokeStatus.Exception;
                                invokeResult.Message = ex.Message;
                            }
                        }
                        else
                        {
                            invokeResult.Status = InvokeStatus.UnEnable;
                            invokeResult.Message = "服务不可用";
                        }
                    }
                    else
                    {
                        invokeResult.Status = InvokeStatus.UnFound;
                        invokeResult.Message = "没有找到这个服务。";
                    }

                    if (invokeResult.Status == InvokeStatus.Ready)
                    {
                        invokeResult = await this.m_rpcServerProvider.ExecuteAsync(callContext, ps);
                    }

                    var httpResponse = e.Context.Response;

                    var byteBlock = new ByteBlock();

                    if (invokeResult.Status == InvokeStatus.Success)
                    {
                        XmlDataTool.CreatResponse(httpResponse, invokeResult.Result);
                    }
                    else
                    {
                        httpResponse.StatusCode = 201;
                        httpResponse.StatusMessage = invokeResult.Message;
                    }
                    try
                    {
                        httpResponse.Answer();
                    }
                    finally
                    {
                        byteBlock.Dispose();
                    }

                    if (!e.Context.Request.KeepAlive)
                    {
                        client.TryShutdown(SocketShutdown.Both);
                    }
                }
            }

            await e.InvokeNext();
        }

        /// <summary>
        /// 当挂载在<see cref="HttpService"/>时，匹配Url然后响应。当设置为null或空时，会全部响应。
        /// </summary>
        /// <param name="xmlRpcUrl"></param>
        /// <returns></returns>
        public XmlRpcParserPlugin SetXmlRpcUrl(string xmlRpcUrl)
        {
            this.XmlRpcUrl = xmlRpcUrl;
            return this;
        }

        private void RegisterServer(MethodInstance[] methodInstances)
        {
            foreach (var methodInstance in methodInstances)
            {
                if (methodInstance.GetAttribute<XmlRpcAttribute>() is XmlRpcAttribute attribute)
                {
                    this.ActionMap.Add(attribute.GetInvokenKey(methodInstance), methodInstance);
                }
            }
        }
    }
}