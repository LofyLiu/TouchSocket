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

namespace TouchSocket.Core
{
    internal class StringFastBinaryConverter : FastBinaryConverter<string>
    {
        protected override string Read(byte[] buffer, int offset, int len)
        {
            var byteBlock = new ValueByteBlock(buffer)
            {
                Pos = offset
            };
            return byteBlock.ReadString();
        }

        protected override int Write(ByteBlock byteBlock, string obj)
        {
            var pos = byteBlock.Pos;
            byteBlock.Write(obj);
            return byteBlock.Pos - pos;
        }
    }
}