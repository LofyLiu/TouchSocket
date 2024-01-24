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

using System.Threading;

namespace TouchSocket.Core
{
    /// <summary>
    /// SystemThreadingExtension
    /// </summary>
    public static class SystemThreadingExtension
    {
        /// <summary>
        /// 创建一个可释放的读取锁
        /// </summary>
        /// <param name="lockSlim"></param>
        /// <returns></returns>
        public static ReadLock CreateReadLock(this ReaderWriterLockSlim lockSlim)
        {
            return new ReadLock(lockSlim);
        }

        /// <summary>
        /// 创建一个可释放的写入锁
        /// </summary>
        /// <param name="lockSlim"></param>
        /// <returns></returns>
        public static WriteLock CreateWriteLock(this ReaderWriterLockSlim lockSlim)
        {
            return new WriteLock(lockSlim);
        }
    }
}