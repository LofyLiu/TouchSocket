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

namespace TouchSocket.Dmtp
{
    /// <summary>
    /// DmtpConfigExtensions
    /// </summary>
    public static class DmtpConfigExtension
    {
        /// <summary>
        /// 设置Dmtp相关配置。
        /// </summary>
        public static readonly DependencyProperty<DmtpOption> DmtpOptionProperty =
            new("DmtpOption", new DmtpOption());

        /// <summary>
        /// 设置Dmtp相关配置。
        /// </summary>
        /// <param name="config"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static TouchSocketConfig SetDmtpOption(this TouchSocketConfig config, DmtpOption value)
        {
            config.SetValue(DmtpOptionProperty, value);
            return config;
        }
    }
}