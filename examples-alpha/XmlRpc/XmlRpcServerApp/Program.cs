﻿using System;
using System.IO;
using TouchSocket.Core;
using TouchSocket.Http;
using TouchSocket.Rpc;
using TouchSocket.Sockets;
using TouchSocket.XmlRpc;

namespace XmlRpcServerApp
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var service = new HttpService();

            service.SetupAsync(new TouchSocketConfig()
                .ConfigureContainer(a =>
                {
                    a.AddConsoleLogger();
                    a.AddRpcStore(store =>
                    {
                        store.RegisterServer<XmlServer>();

#if DEBUG
                        File.WriteAllText("../../../RpcProxy.cs", store.GetProxyCodes("RpcProxy", new Type[] { typeof(XmlRpcAttribute) }));
                        ConsoleLogger.Default.Info("成功生成代理");
#endif
                    });
                })
                .ConfigurePlugins(a =>
                {
                    a.UseXmlRpc()
                    .SetXmlRpcUrl("/xmlRpc");
                })
                .SetListenIPHosts(7789));
            service.StartAsync();

            service.Logger.Info("服务器已启动");
            Console.ReadKey();
        }

        private static void a()
        {
        }
    }

    public partial class XmlServer : RpcServer
    {
        [XmlRpc(true)]
        public int Sum(int a, int b)
        {
            return a + b;
        }

        [XmlRpc(true)]
        public int TestClass(MyClass myClass)
        {
            return myClass.A + myClass.B;
        }
    }

    public class MyClass
    {
        public int A { get; set; }
        public int B { get; set; }
    }
}