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

#if Unsafe
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading;

namespace TouchSocket.Core
{
    public partial class ValueByteBlock
    {
        /// <summary>
        /// 转换有效数据为<see cref="Span{T}"/>类型。
        /// </summary>
        /// <returns></returns>
        public Span<byte> AsSpan()
        {
            return new Span<byte>(this.m_buffer,0,this.Len);
        }

        /// <summary>
        /// 转换从<see cref="Position"/>到结束的有效数据为<see cref="Span{T}"/>类型。
        /// </summary>
        /// <returns></returns>
        public Span<byte> AsSurplusSpan()
        {
            return new Span<byte>(this.m_buffer, this.Pos, this.CanReadLen);
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private void WriteSize(int size)
        {
            this.ThrowIfDisposed();

            if (this.m_position >= int.MaxValue)
            {
                throw new ArgumentOutOfRangeException($"{nameof(this.Position)}不能大于{int.MaxValue}的值。");
            }
            if (this.m_buffer.Length - this.m_position < size)
            {
                var need = this.m_buffer.Length + size - ((int)(this.m_buffer.Length - this.m_position));
                long lend = this.m_buffer.Length;
                while (need > lend)
                {
                    lend *= 2;
                }

                if (lend > int.MaxValue)
                {
                    lend = Math.Min(need + 1024 * 1024 * 100, int.MaxValue);
                }

                this.SetCapacity((int)lend, true);
            }
           
        }
      
        #region Int32

        /// <summary>
        /// 写入默认端序的<see cref="int"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(int value)
        {
            var size = 4;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position],value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入指定端序的<see cref="int"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(int value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion Int32

        #region Int16

        
        /// <summary>
        /// 写入默认端序的<see cref="short"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(short value)
        {
            var size = 2;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="short"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(short value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion Int16

        #region Int64

        
        /// <summary>
        /// 写入默认端序的<see cref="long"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(long value)
        {
            var size = 8;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="long"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(long value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion Int64

        #region Boolean

       
        /// <summary>
        /// 写入<see cref="bool"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(bool value)
        {
            var size = 1;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入bool数组。
        /// </summary>
        /// <param name="values"></param>
        public void Write(bool[] values)
        {
            this.Write(TouchSocketBitConverter.Default.GetBytes(values));
        }

        #endregion Boolean

        #region Byte

        /// <summary>
        /// 写入<see cref="byte"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public void Write(byte value)
        {
            var size = 1;
            this.WriteSize(size);
            this.m_buffer[this.m_position] = value;
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        #endregion Byte

        #region Char
        /// <summary>
        /// 写入默认端序的<see cref="char"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(char value)
        {
            var size = 2;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="char"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(char value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion Char

        #region Double
        /// <summary>
        /// 写入默认端序的<see cref="double"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(double value)
        {
            var size = 8;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="double"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(double value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion Double

        #region Float
        /// <summary>
        /// 写入默认端序的<see cref="float"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(float value)
        {
            var size = 4;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="float"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(float value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion Float

        #region UInt16
        /// <summary>
        /// 写入默认端序的<see cref="ushort"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(ushort value)
        {
            var size = 2;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="ushort"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(ushort value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion UInt16

        #region UInt32
        /// <summary>
        /// 写入默认端序的<see cref="uint"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(uint value)
        {
            var size = 4;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="uint"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(uint value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion UInt32

        #region UInt64
        /// <summary>
        /// 写入默认端序的<see cref="ulong"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(ulong value)
        {
            var size = 8;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="ulong"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(ulong value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion UInt64

        #region Decimal
        /// <summary>
        /// 写入默认端序的<see cref="decimal"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(decimal value)
        {
            var size = 16;
            this.WriteSize(size);
            TouchSocketBitConverter.Default.GetBytes(ref this.m_buffer[this.m_position], value);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        /// <summary>
        /// 写入<see cref="decimal"/>值
        /// </summary>
        /// <param name="value"></param>
        /// <param name="endianType">指定端序</param>
        public void Write(decimal value, EndianType endianType)
        {
            this.Write(TouchSocketBitConverter.GetBitConverter(endianType).GetBytes(value));
        }

        #endregion Decimal

        #region DateTime
        /// <summary>
        /// 写入<see cref="DateTime"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(DateTime value)
        {
            var size = 8;
            this.WriteSize(size);
            TouchSocketBitConverter.BigEndian.GetBytes(ref this.m_buffer[this.m_position], value.ToBinary());
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        #endregion DateTime

        #region TimeSpan
        /// <summary>
        /// 写入<see cref="TimeSpan"/>值
        /// </summary>
        /// <param name="value"></param>
        public void Write(TimeSpan value)
        {
            var size = 8;
            this.WriteSize(size);
            TouchSocketBitConverter.BigEndian.GetBytes(ref this.m_buffer[this.m_position], value.Ticks);
            this.m_position += size;
            this.m_length = Math.Max(this.m_position, this.m_length);
        }

        #endregion TimeSpan
    }
}
#endif
