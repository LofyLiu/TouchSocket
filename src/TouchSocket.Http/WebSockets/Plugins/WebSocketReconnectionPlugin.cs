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
using TouchSocket.Sockets;

namespace TouchSocket.Http.WebSockets
{
    internal sealed class WebSocketReconnectionPlugin<TClient> : ReconnectionPlugin<TClient> where TClient : IWebSocketClient
    {
        public override Func<TClient, int, Task<bool?>> ActionForCheck { get; set; }

        public WebSocketReconnectionPlugin()
        {
            this.ActionForCheck = (c, i) =>
            {
                return Task.FromResult<bool?>(c.Online);
            };
        }

        protected override void Loaded(IPluginManager pluginManager)
        {
            base.Loaded(pluginManager);
            pluginManager.Add<IWebSocket, ClosedEventArgs>(typeof(IWebSocketClosedPlugin), this.OnClosed);
        }

        private async Task OnClosed(IWebSocket client, ClosedEventArgs e)
        {
            await e.InvokeNext().ConfigureAwait(false);

            if (client is not TClient tClient)
            {
                return;
            }

            _ = Task.Run(async () =>
            {
                if (e.Manual)
                {
                    return;
                }

                while (true)
                {
                    if (await this.ActionForConnect.Invoke(tClient).ConfigureAwait(false))
                    {
                        return;
                    }
                }
            });
        }
    }
}
