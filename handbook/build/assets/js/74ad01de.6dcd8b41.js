"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=s(n),d=o,g=k["".concat(i,".").concat(d)]||k[d]||u[d]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"websocketverify",title:"\u8fde\u63a5\u9a8c\u8bc1"},l=void 0,c={unversionedId:"websocketverify",id:"websocketverify",title:"\u8fde\u63a5\u9a8c\u8bc1",description:"\u5b9a\u4e49",source:"@site/docs/websocketverify.mdx",sourceDirName:".",slug:"/websocketverify",permalink:"/touchsocket/docs/websocketverify",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/websocketverify.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1691304938,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{id:"websocketverify",title:"\u8fde\u63a5\u9a8c\u8bc1"},sidebar:"docs",previous:{title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",permalink:"/touchsocket/docs/websocketclient"},next:{title:"Websocket\u5fc3\u8df3\u8bbe\u7f6e",permalink:"/touchsocket/docs/websocketheartbeat"}},i={},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u670d\u52a1\u7aef\u9a8c\u8bc1",id:"\u4e8c\u670d\u52a1\u7aef\u9a8c\u8bc1",level:2},{value:"2.1 \u5e38\u89c4\u63d2\u4ef6\u9a8c\u8bc1",id:"21-\u5e38\u89c4\u63d2\u4ef6\u9a8c\u8bc1",level:3},{value:"2.2 WebApi\u8fde\u63a5\u9a8c\u8bc1",id:"22-webapi\u8fde\u63a5\u9a8c\u8bc1",level:3},{value:"\u4e09\u3001\u5ba2\u6237\u7aef\u8bf7\u6c42\u9a8c\u8bc1",id:"\u4e09\u5ba2\u6237\u7aef\u8bf7\u6c42\u9a8c\u8bc1",level:2},{value:"3.1 Url\u5305\u542b\u8bf7\u6c42\u53c2\u6570",id:"31-url\u5305\u542b\u8bf7\u6c42\u53c2\u6570",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Http.WebSockets ",(0,o.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Http"},"TouchSocket.Http.dll")),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e3a\u5b89\u5168\u9a8c\u8bc1\uff0cwebsocket\u90fd\u4f1a\u5728\u8fde\u63a5\u65f6\u8fdb\u884c\u9a8c\u8bc1\uff0c\u53ef\u80fd\u901a\u8fc7\u8d26\u53f7\u3001\u5bc6\u7801\uff0c\u4e5f\u53ef\u80fd\u901a\u8fc7token\u7b49\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u670d\u52a1\u7aef\u9a8c\u8bc1"},"\u4e8c\u3001\u670d\u52a1\u7aef\u9a8c\u8bc1"),(0,o.kt)("h3",{id:"21-\u5e38\u89c4\u63d2\u4ef6\u9a8c\u8bc1"},"2.1 \u5e38\u89c4\u63d2\u4ef6\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u63d2\u4ef6\uff0c\u7528\u4e8e\u5904\u7406\u8fde\u63a5\u9a8c\u8bc1\u3002\u540c\u65f6\u4e5f\u5904\u7406\u6536\u5230\u7684\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyWebSocketPlugin : WebSocketPluginBase<HttpSocketClient>\n{\n    protected override void OnHandshaking(HttpSocketClient client, HttpContextEventArgs e)\n    {\n        if (e.Context.Request.Query["token"]!="123")\n        {\n            e.IsPermitOperation = false; //\u53c2\u6570\u4e0d\u7b26\u5408\uff0c\u76f4\u63a5\u62d2\u7edd\n            e.Handled = true;//\u8868\u793a\u8be5\u6761\u6d88\u606f\u5df2\u88ab\u672c\u63d2\u4ef6\u5904\u7406\uff0c\u4e0d\u9700\u8981\u5728\u5411\u5176\u4ed6\u63d2\u4ef6\u6295\u9012\u4e86\u3002\n            return;\n\n            //\u6216\u8005\u76f4\u63a5\u56de\u590d\uff0c\u6b64\u5904\u90e8\u5206\u548chttp\u64cd\u4f5c\u4e00\u81f4\u3002\n            e.Context.Response\n                .SetStatus("400", "\u53e3\u4ee4\u4e0d\u6b63\u786e")\n                .Answer();\n\n        }\n        base.OnHandshaking(client, e);\n    }\n\n    protected override void OnHandleWSDataFrame(HttpSocketClient client, WSDataFrameEventArgs e)\n    {\n        if (e.DataFrame.Opcode == WSDataType.Text)//\u6587\u672c\u6570\u636e\n        {\n            client.Logger.Info($"\u6536\u5230\u4fe1\u606f\uff1a{e.DataFrame.ToText()}");\n        }\n        else if (e.DataFrame.Opcode == WSDataType.Binary)//\u4e8c\u8fdb\u5236\n        {\n            byte[] data = e.DataFrame.PayloadData.ToArray();\n        }\n    }\n}\n\n')),(0,o.kt)("p",null,"\u521b\u5efa\u670d\u52a1\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseWebSocket()//\u6dfb\u52a0WebSocket\u529f\u80fd\n               .SetWSUrl("/ws");\n        //.SetCallback(WSCallback);//WSCallback\u56de\u8c03\u51fd\u6570\u662f\u5728WS\u6536\u5230\u6570\u636e\u65f6\u89e6\u53d1\u56de\u8c03\u7684\u3002\u4e0b\u9762\u4f1a\u7528\u63d2\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\n        a.Add<MyWebSocketPlugin>();//MyWebSocketPlugin\u662f\u7ee7\u627f\u81eaWebSocketPluginBase\u7684\u63d2\u4ef6\u3002\n    }))\n    .Start();\n\nservice.Logger.Info("Http\u670d\u52a1\u5668\u5df2\u542f\u52a8");\nservice.Logger.Info("\u8fde\u63a5url\uff1aws://127.0.0.1:7789/ws?token=123");\n')),(0,o.kt)("h3",{id:"22-webapi\u8fde\u63a5\u9a8c\u8bc1"},"2.2 WebApi\u8fde\u63a5\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aWebApi\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyServer : RpcServer\n{\n    private readonly ILog m_logger;\n\n    public MyServer(ILog logger)\n    {\n        this.m_logger = logger;\n    }\n\n    [WebApi(HttpMethodType.GET, MethodFlags = MethodFlags.IncludeCallContext)]\n    public void ConnectWS(IWebApiCallContext callContext, string token)\n    {\n        if (token != "123")\n        {\n            callContext.HttpContext.Response\n                .SetStatus("400", "\u53e3\u4ee4\u4e0d\u6b63\u786e")\n                .Answer();\n            return;\n        }\n        //\u4e0b\u9762\u8fdb\u884c\u8fde\u63a5\n        if (callContext.Caller is HttpSocketClient socketClient)\n        {\n            if (socketClient.SwitchProtocolToWebSocket(callContext.HttpContext))\n            {\n                m_logger.Info("WS\u901a\u8fc7WebApi\u8fde\u63a5");\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigureRpcStore(a =>\n    {\n        a.RegisterServer<MyServer>();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseWebApi();\n        a.UseWebSocket();//\u4e0d\u7528\u8bbe\u7f6e\u8fde\u63a5url\n    }))\n    .Start();\n\nConsole.WriteLine("\u670d\u52a1\u5668\u5df2\u542f\u52a8\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u5730\u5740\u8fde\u63a5");\nConsole.WriteLine("ws://127.0.0.1:7789/MyServer/ConnectWS?token=123");\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528WebApi\u8fdb\u884cWebsocket\u8fde\u63a5\u9a8c\u8bc1\u65f6\uff0c\u662f\u6700\u7075\u6d3b\u7684\uff0c\u800c\u4e14\u5982\u679c\u53ef\u80fd\uff0cWebsocket\u4e5f\u53ef\u4ee5\u901a\u8fc7Post\u8fde\u63a5\u9a8c\u8bc1\u3002")),(0,o.kt)("h2",{id:"\u4e09\u5ba2\u6237\u7aef\u8bf7\u6c42\u9a8c\u8bc1"},"\u4e09\u3001\u5ba2\u6237\u7aef\u8bf7\u6c42\u9a8c\u8bc1"),(0,o.kt)("h3",{id:"31-url\u5305\u542b\u8bf7\u6c42\u53c2\u6570"},"3.1 Url\u5305\u542b\u8bf7\u6c42\u53c2\u6570"),(0,o.kt)("p",null,"\u8bf7\u6c42\u9a8c\u8bc1\u65f6\uff0c\u8bf7\u6c42\u7684\u53c2\u6570\u5168\u90e8\u5305\u542b\u5728"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'WebSocketClient myWSClient = new WebSocketClient();\nmyWSClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("ws://127.0.0.1:7789/ws?token=1232")\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    }));\nvar result= myWSClient.TryConnect();\n\nmyWSClient.Logger.Info(result.ToString());\n\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/WebSocket%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B/WS%E8%BF%9E%E6%8E%A5%E9%AA%8C%E8%AF%81/WSVerifyConsoleApp"},"Websocket\u8fde\u63a5\u9a8c\u8bc1\u793a\u4f8b")))}u.isMDXComponent=!0}}]);