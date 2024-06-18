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
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Sockets;

namespace TouchSocket.Http
{
    /// <summary>
    /// Http客户端基类
    /// </summary>
    public abstract class HttpClientBase : TcpClientBase, IHttpSession
    {
        #region 字段

        private readonly SemaphoreSlim m_semaphoreForRequest = new SemaphoreSlim(1, 1);
        //private readonly AsyncAutoResetEvent m_waitRelease = new AsyncAutoResetEvent();
        private readonly WaitDataAsync<HttpResponse> m_waitResponseDataAsync = new WaitDataAsync<HttpResponse>();
        private bool m_getContent;
        HttpClientDataHandlingAdapter m_dataHandlingAdapter;
        #endregion 字段

        internal Task InternalSendAsync(ReadOnlyMemory<byte> memory)
        {
            return this.ProtectedDefaultSendAsync(memory);
        }

        /// <inheritdoc/>
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                this.m_semaphoreForRequest.Dispose();
                //this.m_waitRelease.Dispose();
                this.m_waitResponseDataAsync.Dispose();
            }
            base.Dispose(disposing);
        }

        protected void SetWarpAdapter(SingleStreamDataHandlingAdapter adapter)
        {
            this.m_dataHandlingAdapter.WarpAdapter = adapter;
        }

        #region Request

        private void ReleaseLock()
        {
            this.m_semaphoreForRequest.Release();
            m_dataHandlingAdapter.SetComplateLock();
            //this.m_waitRelease.Set();
        }

        /// <summary>
        /// 异步发送Http请求，并仅等待响应头
        /// </summary>
        /// <param name="request"></param>
        /// <param name="millisecondsTimeout"></param>
        /// <param name="token"></param>
        /// <returns></returns>
        /// <exception cref="TimeoutException"></exception>
        /// <exception cref="OperationCanceledException"></exception>
        /// <exception cref="Exception"></exception>
        protected async Task<HttpResponseResult> ProtectedRequestAsync(HttpRequest request, int millisecondsTimeout = 10 * 1000, CancellationToken token = default)
        {
            await this.m_semaphoreForRequest.WaitTimeAsync(millisecondsTimeout, token);
            try
            {
                this.m_getContent = false;
                using (var byteBlock = new ByteBlock())
                {
                    request.Build(byteBlock);

                    this.Reset(token);
                    await this.ProtectedDefaultSendAsync(byteBlock.Memory).ConfigureFalseAwait();

                    var status = await this.m_waitResponseDataAsync.WaitAsync(millisecondsTimeout).ConfigureFalseAwait();

                    status.ThrowIfNotRunning();

                    return new HttpResponseResult(this.m_waitResponseDataAsync.WaitResult, this.ReleaseLock);
                }
            }
            catch
            {
                this.m_semaphoreForRequest.Release();
                throw;
            }
        }

        /// <summary>
        /// 异步发送Http请求，并等待全部响应
        /// </summary>
        /// <param name="request"></param>
        /// <param name="millisecondsTimeout"></param>
        /// <param name="token"></param>
        /// <returns></returns>
        /// <exception cref="TimeoutException"></exception>
        /// <exception cref="OperationCanceledException"></exception>
        /// <exception cref="Exception"></exception>
        protected async Task<HttpResponseResult> ProtectedRequestContentAsync(HttpRequest request, int millisecondsTimeout = 10 * 1000, CancellationToken token = default)
        {
            await this.m_semaphoreForRequest.WaitTimeAsync(millisecondsTimeout, token).ConfigureFalseAwait();
            try
            {
                this.m_getContent = true;
                using (var byteBlock = new ByteBlock())
                {
                    request.Build(byteBlock);

                    this.Reset(token);

                    await this.ProtectedDefaultSendAsync(byteBlock.Memory).ConfigureFalseAwait();

                    var status = await this.m_waitResponseDataAsync.WaitAsync(millisecondsTimeout).ConfigureFalseAwait();

                    status.ThrowIfNotRunning();

                    return new HttpResponseResult(this.m_waitResponseDataAsync.WaitResult, this.ReleaseLock);
                }
            }
            catch
            {
                this.m_semaphoreForRequest.Release();
                throw;
            }
        }

        #endregion Request

        #region override

        /// <inheritdoc/>
        protected override Task OnTcpConnecting(ConnectingEventArgs e)
        {
            this.Protocol = Protocol.Http;
            m_dataHandlingAdapter = new HttpClientDataHandlingAdapter();
            this.SetAdapter(m_dataHandlingAdapter);
            return EasyTask.CompletedTask;
        }

        /// <inheritdoc/>
        protected override Task OnTcpClosed(ClosedEventArgs e)
        {
            this.m_waitResponseDataAsync.Cancel();
            return EasyTask.CompletedTask;
        }

        /// <inheritdoc/>
        protected override async Task OnTcpReceived(ReceivedDataEventArgs e)
        {
            if (e.RequestInfo is HttpResponse response)
            {
                if (this.m_getContent)
                {
                    await response.GetContentAsync(CancellationToken.None).ConfigureAwait(false);
                }
                this.m_waitResponseDataAsync.Set(response);
                //await this.SetAsync(response).ConfigureFalseAwait();
            }
        }

        #endregion override

        private void Reset(in CancellationToken token)
        {
            //this.m_waitRelease.Reset();
            this.m_waitResponseDataAsync.Reset();
            this.m_waitResponseDataAsync.SetCancellationToken(token);
        }

        //private async Task SetAsync(HttpResponse response)
        //{


        //    await this.m_waitRelease.WaitOneAsync().ConfigureFalseAwait();
        //}
    }
}