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

using TouchSocket.Core;

namespace TouchSocket.Dmtp.FileTransfer
{
    /// <summary>
    /// 远程访问结果
    /// </summary>
    public struct RemoteFileInfoResult : IResult
    {
        /// <summary>
        /// 远程访问结果
        /// </summary>
        /// <param name="fileInfo"></param>
        /// <param name="resultCode"></param>
        /// <param name="message"></param>
        public RemoteFileInfoResult(RemoteFileInfo fileInfo, ResultCode resultCode, string message)
        {
            this.FileInfo = fileInfo;
            this.ResultCode = resultCode;
            this.Message = message;
        }

        /// <summary>
        /// 文件信息
        /// </summary>
        public RemoteFileInfo FileInfo { get; private set; }

        /// <summary>
        /// 结果
        /// </summary>
        public ResultCode ResultCode { get; private set; }

        /// <summary>
        /// 消息
        /// </summary>
        public string Message { get; private set; }
    }
}