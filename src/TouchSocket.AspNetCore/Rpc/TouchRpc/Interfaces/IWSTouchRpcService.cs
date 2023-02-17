//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://www.yuque.com/rrqm/touchsocket/index
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using TouchSocket.Core;

namespace TouchSocket.Rpc.TouchRpc.AspNetCore
{
    /// <summary>
    /// WSTouchRpcService服务器接口
    /// </summary>
    public interface IWSTouchRpcService : ITouchRpcService, IPluginObject
    {
        /// <summary>
        /// 配置项
        /// </summary>
        TouchSocketConfig Config { get; }

        /// <summary>
        /// 连接验证口令
        /// </summary>
        string VerifyToken { get; }

        /// <summary>
        /// 转换客户端
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        Task SwitchClientAsync(HttpContext  context);

        /// <summary>
        /// 重置ID
        /// </summary>
        /// <param name="oldID"></param>
        /// <param name="newID"></param>
        void ResetID(string oldID, string newID);
    }
}