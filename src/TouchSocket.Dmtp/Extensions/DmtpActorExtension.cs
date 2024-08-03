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
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Dmtp.FileTransfer;

namespace TouchSocket.Dmtp
{
    /// <summary>
    /// 适用于<see cref="IDmtpActor"/>的扩展。
    /// </summary>
    public static class DmtpActorExtension
    {
        #region Ping

        /// <inheritdoc cref="IDmtpActor.PingAsync(int)"/>
        public static bool Ping(this IDmtpActorObject client, int millisecondsTimeout = 5000)
        {
            return client.DmtpActor.PingAsync(millisecondsTimeout).GetFalseAwaitResult();
        }

        /// <inheritdoc cref="IDmtpActor.PingAsync(string, int)"/>
        public static bool Ping(this IDmtpActorObject client, string targetId, int millisecondsTimeout = 5000)
        {
            return client.DmtpActor.PingAsync(targetId, millisecondsTimeout).GetFalseAwaitResult();
        }

        /// <inheritdoc cref="IDmtpActor.PingAsync(int)"/>
        public static Task<bool> PingAsync(this IDmtpActorObject client, int millisecondsTimeout = 5000)
        {
            return client.DmtpActor.PingAsync(millisecondsTimeout);
        }

        /// <inheritdoc cref="IDmtpActor.PingAsync(string,int)"/>
        public static Task<bool> PingAsync(this IDmtpActorObject client, string targetId, int millisecondsTimeout = 5000)
        {
            return client.DmtpActor.PingAsync(targetId, millisecondsTimeout);
        }

        #endregion Ping

        #region IDmtpChannel

        /// <inheritdoc cref="IDmtpActor.ChannelExisted(int)"/>
        public static bool ChannelExisted(this IDmtpActorObject client, int id)
        {
            return client.DmtpActor.ChannelExisted(id);
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(Metadata)"/>
        public static IDmtpChannel CreateChannel(this IDmtpActorObject client, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(metadata).GetFalseAwaitResult();
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(int, Metadata)"/>
        public static IDmtpChannel CreateChannel(this IDmtpActorObject client, int id, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(id, metadata).GetFalseAwaitResult();
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(string, int, Metadata)"/>
        public static IDmtpChannel CreateChannel(this IDmtpActorObject client, string targetId, int id, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(targetId, id, metadata).GetFalseAwaitResult();
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(string, Metadata)"/>
        public static IDmtpChannel CreateChannel(this IDmtpActorObject client, string targetId, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(targetId, metadata).GetFalseAwaitResult();
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(Metadata)"/>
        public static Task<IDmtpChannel> CreateChannelAsync(this IDmtpActorObject client, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(metadata);
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(int, Metadata)"/>
        public static Task<IDmtpChannel> CreateChannelAsync(this IDmtpActorObject client, int id, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(id, metadata);
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(string, int, Metadata)"/>
        public static Task<IDmtpChannel> CreateChannelAsync(this IDmtpActorObject client, string targetId, int id, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(targetId, id, metadata);
        }

        /// <inheritdoc cref="IDmtpActor.CreateChannelAsync(string, Metadata)"/>
        public static Task<IDmtpChannel> CreateChannelAsync(this IDmtpActorObject client, string targetId, Metadata metadata = default)
        {
            return client.DmtpActor.CreateChannelAsync(targetId, metadata);
        }

        /// <inheritdoc cref="IDmtpActor.TrySubscribeChannel(int, out IDmtpChannel)"/>
        public static bool TrySubscribeChannel(this IDmtpActorObject client, int id, out IDmtpChannel channel)
        {
            return client.DmtpActor.TrySubscribeChannel(id, out channel);
        }

        #endregion IDmtpChannel

        #region 尝试异步发送

        /// <summary>
        /// 尝试发送
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol"></param>
        /// <param name="buffer"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        /// <returns></returns>
        public static async Task<bool> TrySendAsync(this IDmtpActorObject client, ushort protocol, ReadOnlyMemory<byte> memory)
        {
            try
            {
                await client.DmtpActor.SendAsync(protocol, memory).ConfigureAwait(false);
                return true;
            }
            catch
            {
                return false;
            }
        }

        /// <summary>
        /// 尝试发送
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol"></param>
        /// <returns></returns>
        public static async Task<bool> TrySendAsync(this IDmtpActorObject client, ushort protocol)
        {
            try
            {
                await client.DmtpActor.SendAsync(protocol, ReadOnlyMemory<byte>.Empty).ConfigureAwait(false);
                return true;
            }
            catch
            {
                return false;
            }
        }

        #endregion 尝试异步发送

        #region 发送Package

        ///// <summary>
        ///// 发送<see cref="IPackage"/>
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol">协议</param>
        ///// <param name="package">包</param>
        ///// <param name="maxSize">估计的包最大值，其作用是用于<see cref="ByteBlock"/>的申请。</param>
        //public static void Send(this IDmtpActorObject client, ushort protocol, IPackage package, int maxSize)
        //{
        //    using (var byteBlock = new ByteBlock(maxSize))
        //    {
        //        var block = byteBlock;
        //        package.Package(ref block);
        //        client.DmtpActor.SendAsync(protocol, byteBlock.Memory).GetFalseAwaitResult();
        //    }
        //}

        ///// <summary>
        ///// 发送估计小于64K的<see cref="IPackage"/>
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol">协议</param>
        ///// <param name="package">包</param>
        //public static void Send(this IDmtpActorObject client, ushort protocol, IPackage package)
        //{
        //    Send(client, protocol, package, 1024 * 64);
        //}

        /// <summary>
        /// 发送<see cref="IPackage"/>
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol">协议</param>
        /// <param name="package">包</param>
        /// <param name="maxSize">估计的包最大值，其作用是用于<see cref="ByteBlock"/>的申请。</param>
        public static async Task SendAsync(this IDmtpActorObject client, ushort protocol, IPackage package, int maxSize)
        {
            using (var byteBlock = new ByteBlock(maxSize))
            {
                var block = byteBlock;
                package.Package(ref block);
                await client.DmtpActor.SendAsync(protocol, byteBlock.Memory).ConfigureAwait(false);
            }
        }

        /// <summary>
        /// 发送估计小于64K的<see cref="IPackage"/>
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol">协议</param>
        /// <param name="package">包</param>
        public static Task SendAsync(this IDmtpActorObject client, ushort protocol, IPackage package)
        {
            return SendAsync(client, protocol, package, 1024 * 64);
        }

        #endregion 发送Package

        #region 尝试发送Package

        ///// <summary>
        ///// 发送<see cref="IPackage"/>
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol">协议</param>
        ///// <param name="package">包</param>
        ///// <param name="maxSize">估计的包最大值，其作用是用于<see cref="ByteBlock"/>的申请。</param>
        //public static bool TrySend(this IDmtpActorObject client, ushort protocol, IPackage package, int maxSize)
        //{
        //    try
        //    {
        //        Send(client, protocol, package, maxSize);
        //        return true;
        //    }
        //    catch
        //    {
        //        return false;
        //    }
        //}

        ///// <summary>
        ///// 发送估计小于64K的<see cref="IPackage"/>
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol">协议</param>
        ///// <param name="package">包</param>
        //public static bool TrySend(this IDmtpActorObject client, ushort protocol, IPackage package)
        //{
        //    try
        //    {
        //        Send(client, protocol, package, 1024 * 64);
        //        return true;
        //    }
        //    catch
        //    {
        //        return false;
        //    }
        //}

        /// <summary>
        /// 发送<see cref="IPackage"/>
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol">协议</param>
        /// <param name="package">包</param>
        /// <param name="maxSize">估计的包最大值，其作用是用于<see cref="ByteBlock"/>的申请。</param>
        public static async Task<bool> TrySendAsync(this IDmtpActorObject client, ushort protocol, IPackage package, int maxSize)
        {
            try
            {
                await SendAsync(client, protocol, package, maxSize).ConfigureAwait(false);
                return true;
            }
            catch
            {
                return false;
            }
        }

        /// <summary>
        /// 发送估计小于64K的<see cref="IPackage"/>
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol">协议</param>
        /// <param name="package">包</param>
        public static async Task<bool> TrySendAsync(this IDmtpActorObject client, ushort protocol, IPackage package)
        {
            try
            {
                await SendAsync(client, protocol, package, 1024 * 64).ConfigureAwait(false);
                return true;
            }
            catch
            {
                return false;
            }
        }

        #endregion 尝试发送Package

        #region 发送

        ///// <summary>
        ///// 发送
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol"></param>
        ///// <param name="buffer"></param>
        //public static void Send(this IDmtpActorObject client, ushort protocol, byte[] buffer)
        //{
        //    client.DmtpActor.SendAsync(protocol, buffer, 0, buffer.Length).GetFalseAwaitResult();
        //}

        ///// <summary>
        ///// 发送
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol"></param>
        ///// <param name="buffer"></param>
        ///// <param name="offset"></param>
        ///// <param name="length"></param>
        //public static void Send(this IDmtpActorObject client, ushort protocol, ReadOnlyMemory<byte> memory)
        //{
        //    client.DmtpActor.SendAsync(protocol, buffer, offset, length).GetFalseAwaitResult();
        //}

        ///// <summary>
        /////  发送
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol"></param>
        //public static void Send(this IDmtpActorObject client, ushort protocol)
        //{
        //    client.DmtpActor.SendAsync(protocol, TouchSocketCoreUtility.ZeroBytes, 0, 0).GetFalseAwaitResult();
        //}

        ///// <summary>
        /////  发送
        ///// </summary>
        ///// <param name="client"></param>
        ///// <param name="protocol"></param>
        ///// <param name="byteBlock"></param>
        //public static void Send(this IDmtpActorObject client, ushort protocol, ByteBlock byteBlock)
        //{
        //    client.DmtpActor.SendAsync(protocol, byteBlock.Buffer, 0, byteBlock.Length).GetFalseAwaitResult();
        //}

        /// <summary>
        /// 发送
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol"></param>
        /// <param name="buffer"></param>
        /// <returns></returns>
        public static Task SendAsync(this IDmtpActorObject client, ushort protocol, ReadOnlyMemory<byte> memory)
        {
            return client.DmtpActor.SendAsync(protocol, memory);
        }

        /// <summary>
        /// 发送
        /// </summary>
        /// <param name="client"></param>
        /// <param name="protocol"></param>
        /// <returns></returns>
        public static Task SendAsync(this IDmtpActorObject client, ushort protocol)
        {
            return client.DmtpActor.SendAsync(protocol, ReadOnlyMemory<byte>.Empty);
        }

        #endregion 发送

        /// <summary>
        /// 转为ResultCode
        /// </summary>
        /// <param name="channelStatus"></param>
        /// <returns></returns>
        public static ResultCode ToResultCode(this ChannelStatus channelStatus)
        {
            return channelStatus switch
            {
                ChannelStatus.Default => ResultCode.Default,
                ChannelStatus.Overtime => ResultCode.Overtime,
                ChannelStatus.Cancel => ResultCode.Canceled,
                ChannelStatus.Completed => ResultCode.Success,
                _ => ResultCode.Error,
            };
        }
    }
}