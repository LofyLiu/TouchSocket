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
using System.Collections.Generic;
using System.Net;
using TouchSocket.Core;
using TouchSocket.Resources;

namespace TouchSocket.Sockets
{
    /// <summary>
    /// IP解析映射
    /// </summary>
    public class IPHost : Uri
    {
        private EndPoint m_endPoint;

        /// <summary>
        /// IP解析映射
        /// <para>
        /// 支持端口，ip，域名等。具体格式如下：
        /// <list type="bullet">
        /// <item>端口：直接按<see cref="int"/>入参，该操作一般在监听时使用。</item>
        /// <item>IPv4：按"127.0.0.1:7789"入参。</item>
        /// <item>IPv6：按"[*::*]:7789"入参。</item>
        /// <item>域名(1)："tcp://127.0.0.1:7789"</item>
        /// <item>域名(2)："tcp://[*::*]:7789"</item>
        /// <item>域名(3)："http://touchsocket.net"</item>
        /// <item>域名(4)："http://touchsocket.net:7789"</item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="uriString"></param>
        public IPHost(string uriString) : base(VerifyUri(uriString))
        {
        }

        /// <summary>
        /// 从端口号创建IPv4的Any地址。
        /// </summary>
        /// <param name="port"></param>
        public IPHost(int port) : this($"0.0.0.0:{port}")
        {
        }

        /// <summary>
        /// 从<see cref="IPAddress"/>
        /// </summary>
        /// <param name="address"></param>
        /// <param name="port"></param>
        public IPHost(IPAddress address, int port)
            : this(address.AddressFamily == System.Net.Sockets.AddressFamily.InterNetworkV6 ? $"[{address}]:{port}" : $"{address}:{port}")
        {
        }

        /// <summary>
        /// 获取终结点。
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public EndPoint EndPoint
        {
            get
            {
                if (this.m_endPoint != null)
                {
                    return this.m_endPoint;
                }
                if (this.HostNameType == UriHostNameType.Unknown || this.HostNameType == UriHostNameType.Basic)
                {
                    throw new Exception(TouchSocketResource.UnableToObtainEndpoint);
                }

                this.m_endPoint = this.HostNameType == UriHostNameType.Dns
                    ? new DnsEndPoint(this.DnsSafeHost, this.Port)
                    : new IPEndPoint(IPAddress.Parse(this.DnsSafeHost), this.Port);
                return this.m_endPoint;
            }
        }

        /// <summary>
        /// 端口号
        /// </summary>
        public new int Port
        {
            get
            {
                if (this.IsDefaultPort)
                {
                    switch (this.Scheme.ToLower())
                    {
                        case "http": return 80;
                        case "https": return 443;
                        case "tcp": return 8080;
                        default:
                            break;
                    }
                }
                return base.Port;
            }
        }

        #region Implicit

        /// <summary>
        /// 由字符串向<see cref="IPHost"/>转换
        /// </summary>
        /// <param name="value"></param>
        public static implicit operator IPHost(string value) => new IPHost(value);

        /// <summary>
        /// 由端口向<see cref="IPHost"/>转换
        /// </summary>
        /// <param name="value"></param>
        public static implicit operator IPHost(int value) => new IPHost(value);

        #endregion Implicit

        /// <summary>
        /// 解析一个组的地址。
        /// </summary>
        /// <param name="ipHostStrings"></param>
        /// <returns></returns>
        public static IPHost[] ParseIPHosts(string[] ipHostStrings)
        {
            var iPs = new List<IPHost>();
            foreach (var item in ipHostStrings)
            {
                iPs.Add(new IPHost(item));
            }
            return iPs.ToArray();
        }

        private static string VerifyUri(string uriString)
        {
            return TouchSocketCoreUtility.IsURL(uriString) ? uriString : $"tcp://{uriString}";
        }
    }
}