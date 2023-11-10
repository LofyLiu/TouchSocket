"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5124],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),i=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,d=u["".concat(a,".").concat(m)]||u[m]||k[m]||s;return t?r.createElement(d,p(p({ref:n},l),{},{components:t})):r.createElement(d,p({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,p=new Array(s);p[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[u]="string"==typeof e?e:o,p[1]=c;for(var i=2;i<s;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const s={id:"jsonrpc",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},p=void 0,c={unversionedId:"jsonrpc",id:"jsonrpc",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",description:"\u5b9a\u4e49",source:"@site/docs/jsonrpc.mdx",sourceDirName:".",slug:"/jsonrpc",permalink:"/touchsocket/docs/current/jsonrpc",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/jsonrpc.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1698890191,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{id:"jsonrpc",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"Swagger\u9875\u9762",permalink:"/touchsocket/docs/current/swagger"},next:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/current/xmlrpc"}},a={},i=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9\uff1a",id:"\u4e8c\u7279\u70b9",level:2},{value:"\u4e09\u3001\u5b9a\u4e49\u670d\u52a1",id:"\u4e09\u5b9a\u4e49\u670d\u52a1",level:2},{value:"\u56db\u3001\u542f\u52a8\u670d\u52a1\u5668",id:"\u56db\u542f\u52a8\u670d\u52a1\u5668",level:2},{value:"4.1 \u4ee5Tcp\u4e3a\u57fa\u7840\u534f\u8bae",id:"41-\u4ee5tcp\u4e3a\u57fa\u7840\u534f\u8bae",level:3},{value:"4.2 \u4f7f\u7528Http\u534f\u8bae\u670d\u52a1\u5668",id:"42-\u4f7f\u7528http\u534f\u8bae\u670d\u52a1\u5668",level:3},{value:"4.3 \u4f7f\u7528WebSocket\u534f\u8bae\u670d\u52a1\u5668",id:"43-\u4f7f\u7528websocket\u534f\u8bae\u670d\u52a1\u5668",level:3},{value:"\u4e94\u3001\u901a\u7528\u8c03\u7528",id:"\u4e94\u901a\u7528\u8c03\u7528",level:2},{value:"5.1 Tcp\u534f\u8bae\u76f4\u63a5\u8c03\u7528",id:"51-tcp\u534f\u8bae\u76f4\u63a5\u8c03\u7528",level:3},{value:"5.2 Http\u534f\u8bae\u76f4\u63a5\u8c03\u7528",id:"52-http\u534f\u8bae\u76f4\u63a5\u8c03\u7528",level:3},{value:"5.3 Websocket\u534f\u8bae\u76f4\u63a5\u8c03\u7528",id:"53-websocket\u534f\u8bae\u76f4\u63a5\u8c03\u7528",level:3},{value:"\u516d\u3001\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528",id:"\u516d\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528",level:2},{value:"6.1 Tcp\u534f\u8bae",id:"61-tcp\u534f\u8bae",level:3},{value:"6.2 Http\u534f\u8bae",id:"62-http\u534f\u8bae",level:3},{value:"6.3 Websocket\u534f\u8bae",id:"63-websocket\u534f\u8bae",level:3},{value:"6.4 \u751f\u6210\u4ee3\u7406\u8c03\u7528",id:"64-\u751f\u6210\u4ee3\u7406\u8c03\u7528",level:3},{value:"6.5 \u4f7f\u7528DispatchProxy\u4ee3\u7406\u8c03\u7528",id:"65-\u4f7f\u7528dispatchproxy\u4ee3\u7406\u8c03\u7528",level:3},{value:"\u4e03\u3001\u53cd\u5411Rpc\uff08\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef\uff09",id:"\u4e03\u53cd\u5411rpc\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef",level:2}],l={toc:i},u="wrapper";function k(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.JsonRpc ",(0,o.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.JsonRpc"},"TouchSocket.JsonRpc.dll")),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"JsonRpc\u662f",(0,o.kt)("strong",{parentName:"p"},"\u901a\u7528"),"\u7684Rpc\u89c4\u8303\uff0c\u4e0e",(0,o.kt)("strong",{parentName:"p"},"\u7f16\u7a0b\u8bed\u8a00\u65e0\u5173\u3001\u64cd\u4f5c\u7cfb\u7edf\u65e0\u5173"),"\u3002\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JsonRpc 2.0 \u5b98\u65b9\u6587\u6863"),"\uff0c\u5728TouchSocket\u4e2d\u5c01\u88c5\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u524d\u540e\u7aef"),"\uff0c\u4f7f\u5176\u4f7f\u7528\u66f4\u52a0\u65b9\u4fbf\u3001\u9ad8\u6548\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u652f\u6301Tcp\u3001Http\u3001Websocket\u4e09\u79cd\u534f\u8bae\u8c03\u7528\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5f02\u5e38\u53cd\u9988")," \u3002"),(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u652f\u6301\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u7c7b\u578b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u7c7b\u578b\u5d4c\u5957\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301js\u3001Android\u7b49\u8c03\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef")),(0,o.kt)("h2",{id:"\u4e09\u5b9a\u4e49\u670d\u52a1"},"\u4e09\u3001\u5b9a\u4e49\u670d\u52a1"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u7aef\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627f\u4e8e",(0,o.kt)("strong",{parentName:"p"},"RpcServer"),"\u7c7b\uff08\u6216\u5b9e\u73b0IRpcServer\uff09\uff0c\u7136\u540e\u5728\u8be5\u7c7b\u4e2d\u5199",(0,o.kt)("strong",{parentName:"p"},"\u516c\u5171\u65b9\u6cd5"),"\uff0c\u5e76\u7528",(0,o.kt)("strong",{parentName:"p"},"JsonRpc"),"\u5c5e\u6027\u6807\u7b7e\u6807\u8bb0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class JsonRpcServer : RpcServer\n{\n    /// <summary>\n    /// \u4f7f\u7528\u8c03\u7528\u4e0a\u4e0b\u6587\u3002\n    /// \u53ef\u4ee5\u4ece\u4e0a\u4e0b\u6587\u83b7\u53d6\u8c03\u7528\u7684SocketClient\u3002\u4ece\u800c\u83b7\u5f97IP\u548cPort\u7b49\u76f8\u5173\u4fe1\u606f\u3002\n    /// </summary>\n    /// <param name="callContext"></param>\n    /// <param name="str"></param>\n    /// <returns></returns>\n    [JsonRpc(MethodInvoke =true)]\n    public string TestGetContext(ICallContext callContext, string str)\n    {\n        if (callContext.Caller is IHttpSocketClient socketClient)\n        {\n            if (socketClient.Protocol == Protocol.WebSocket)\n            {\n                Console.WriteLine("WebSocket\u8bf7\u6c42");\n                var client = callContext.Caller as IHttpSocketClient;\n                var ip = client.IP;\n                var port = client.Port;\n                Console.WriteLine($"WebSocket\u8bf7\u6c42{ip}:{port}");\n            }\n            else\n            {\n                Console.WriteLine("HTTP\u8bf7\u6c42");\n                var client = callContext.Caller as IHttpSocketClient;\n                var ip = client.IP;\n                var port = client.Port;\n                Console.WriteLine($"HTTP\u8bf7\u6c42{ip}:{port}");\n            }\n        }\n        else if (callContext.Caller is ISocketClient)\n        {\n            Console.WriteLine("Tcp\u8bf7\u6c42");\n            var client = callContext.Caller as ISocketClient;\n            var ip = client.IP;\n            var port = client.Port;\n            Console.WriteLine($"Tcp\u8bf7\u6c42{ip}:{port}");\n        }\n        return "RRQM" + str;\n    }\n\n    [JsonRpc(MethodInvoke = true)]\n    public JObject TestJObject(JObject obj)\n    {\n        return obj;\n    }\n\n    [JsonRpc(MethodInvoke = true)]\n    public string TestJsonRpc(string str)\n    {\n        return "RRQM" + str;\n    }\n}\n')),(0,o.kt)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"MethodInvoke = true"),"\uff0c\u5373\u4ee5\u65b9\u6cd5\u540d\u4f5c\u4e3a\u8c03\u7528\u952e\uff0c\u8fd9\u4e5f\u662fJsonRpc\u89c4\u8303\u6240\u89c4\u5b9a\u3002\u4f46\u540c\u65f6\u6846\u67b6\u5185\u90e8\u8fd8\u652f\u6301\u53e6\u4e00\u79cd\u65b9\u5f0f\uff0c\u5373\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528\u65b9\u6cd5\u7684",(0,o.kt)("strong",{parentName:"p"},"\u5168\u540d\u79f0\u5c0f\u5199"),"\u4f5c\u4e3a\u8c03\u7528\u952e\uff08\u5373\uff1a\u547d\u540d\u7a7a\u95f4.\u7c7b\u540d.\u65b9\u6cd5\u540d\uff09")),(0,o.kt)("h2",{id:"\u56db\u542f\u52a8\u670d\u52a1\u5668"},"\u56db\u3001\u542f\u52a8\u670d\u52a1\u5668"),(0,o.kt)("p",null,"JsonRpc\u652f\u6301\u591a\u4e2a\u57fa\u672c\u534f\u8bae\u7684\u670d\u52a1\u5668\uff0c\u6240\u4ee5\u4e0b\u9762\u5c06\u4e00\u4e00\u4ecb\u7ecd\u3002"),(0,o.kt)("h3",{id:"41-\u4ee5tcp\u4e3a\u57fa\u7840\u534f\u8bae"},"4.1 \u4ee5Tcp\u4e3a\u57fa\u7840\u534f\u8bae"),(0,o.kt)("p",null,"\u5f53\u4ee5Tcp\u4e3a\u57fa\u7840\u534f\u8bae\u65f6\uff0c\u652f\u6301Tcp\u7684\u4efb\u4f55\u64cd\u4f5c\u3002\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"\u8bbe\u7f6e\u9002\u914d\u5668"),"\u7b49\u3002"),(0,o.kt)("p",null,"\u4e0b\u5217\u4ee3\u7801\u521b\u5efa\u7684\u5c31\u662f\u4e00\u4e2a\u6700\u666e\u901aTcp\u534f\u8bae\u4e0b\u7684JsonRpc\u670d\u52a1\u5668\u3002\u8be5\u670d\u52a1\u652f\u6301\u4efb\u4f55\u672a\u5904\u7406\u7684Tcp\u534f\u8bae\u7684JsonRpc\u6570\u636e\u5305\u8c03\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"var service = new TcpService();\nservice.Setup(new TouchSocketConfig()\n    .SetListenIPHosts(7705)\n    .ConfigurePlugins(a =>\n    {\n        /*\n         \u4f7f\u7528tcp\u670d\u52a1\u5668\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u628a\u6240\u6709\u8fde\u63a5\u7684\u534f\u8bae\u90fd\u8f6c\u6362\u4e3aJsonRpcUtility.TcpJsonRpc\u3002\n         \u8fd9\u6837\u6240\u6709\u7684\u6570\u636e\u90fd\u4f1a\u88ab\u5c1d\u8bd5\u89e3\u91ca\u4e3aJsonRpc\u3002\n         \u5982\u679c\u4e0d\u9700\u8981\u8be5\u529f\u80fd\uff0c\u53ef\u4ee5\u8c03\u7528NoSwitchProtocol()\u3002\n         */\n        a.UseTcpJsonRpc()\n        //.NoSwitchProtocol()\n        .ConfigureRpcStore(store =>\n        {\n            store.RegisterServer<JsonRpcServer>();\n        });\n    }));\n\nservice.Start();\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a\u4e0a\u8ff0\u670d\u52a1\u5668\u4e2d\u6ca1\u6709\u4f7f\u7528\u4efb\u4f55\u9002\u914d\u5668\uff0c\u6240\u4ee5\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u6570\u636e\u5305\u7c98\u5305\u3001\u5206\u5305\u7b49\u95ee\u9898\u3002\u6240\u4ee5\u4e0d\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\u3002\u8981\u60f3\u6295\u5165\u751f\u4ea7\u4f7f\u7528\uff0c\u6700\u7b80\u5355\u4e5f\u5efa\u8bae\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},'.SetTcpDataHandlingAdapter(() => new TerminatorPackageAdapter("\\r\\n"))'),"\u6362\u884c\u7b26\u5206\u5272\u7b49\u9002\u914d\u5668\u3002")),(0,o.kt)("h3",{id:"42-\u4f7f\u7528http\u534f\u8bae\u670d\u52a1\u5668"},"4.2 \u4f7f\u7528Http\u534f\u8bae\u670d\u52a1\u5668"),(0,o.kt)("p",null,"\u521b\u5efa\u540e\uff0c\u5982\u679c\u60f3\u4f7f\u7528Http\u8c03\u7528\uff0c\u53ea\u9700\u8981\u4ee5Post\u65b9\u5f0f\uff0c\u5c06\u8c03\u7528Json\u5b57\u7b26\u4e32\u8def\u7531\u5230\u8bbe\u5b9a\u8def\u7531\u5730\u5740\u5373\u53ef\uff08\u4e0b\u6587\u793a\u4f8b\u201c/jsonRpc\u201d\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var service = new HttpService();\n\nservice.Setup(new TouchSocketConfig()\n     .SetListenIPHosts(7706)\n     .ConfigurePlugins(a =>\n     {\n         a.UseHttpJsonRpc()\n         .ConfigureRpcStore(store =>\n         {\n             store.RegisterServer<JsonRpcServer>();\n         })\n         .SetJsonRpcUrl("/jsonRpc");\n     }));\n\nservice.Start();\n')),(0,o.kt)("h3",{id:"43-\u4f7f\u7528websocket\u534f\u8bae\u670d\u52a1\u5668"},"4.3 \u4f7f\u7528WebSocket\u534f\u8bae\u670d\u52a1\u5668"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528Websocket\u8c03\u7528\uff0c\u53ea\u9700\u8981\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u6587\u672c"),"\u5f62\u5f0f\uff0c\u4f20\u9012\u5230\u670d\u52a1\u5668\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var service = new HttpService();\n\nservice.Setup(new TouchSocketConfig()\n     .SetListenIPHosts(7707)\n     .ConfigurePlugins(a =>\n     {\n         a.UseWebSocket()\n         .SetWSUrl("/ws");\n\n         a.UseWebSocketJsonRpc()\n         .SetAllowJsonRpc((socketClient, context) =>\n         {\n             //\u6b64\u5904\u7684\u4f5c\u7528\u662f\uff0c\u901a\u8fc7\u8fde\u63a5\u7684\u4e00\u4e9b\u4fe1\u606f\u5224\u65ad\u8be5ws\u662f\u5426\u6267\u884cJsonRpc\u3002\n             //\u5f53\u7136\u9664\u4e86\u6b64\u5904\u53ef\u4ee5\u8bbe\u7f6e\u5916\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7socketClient.SetJsonRpc(true)\u76f4\u63a5\u8bbe\u7f6e\u3002\n             return true;\n         })\n         .ConfigureRpcStore(store =>\n         {\n             store.RegisterServer<JsonRpcServer>();\n         });\n     }));\n\nservice.Start();\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"WebSocket"),"\u534f\u8bae\u670d\u52a1\u5668\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Http"),"\u534f\u8bae\u670d\u52a1\u5668\u53ef\u4ee5\u5408\u5e76\u4e3a\u4e00\u4e2a\u3002")),(0,o.kt)("h2",{id:"\u4e94\u901a\u7528\u8c03\u7528"},"\u4e94\u3001\u901a\u7528\u8c03\u7528"),(0,o.kt)("p",null,"\u56e0\u4e3aJsonRpc\u662f\u901a\u7528\u8c03\u7528\u534f\u8bae\uff0c\u6240\u4ee5\u53ea\u8981",(0,o.kt)("strong",{parentName:"p"},"\u9002\u914d\u57fa\u7840\u534f\u8bae"),"\uff0c\u5373\u53ef\u76f4\u63a5\u4f7f\u7528Json\u5b57\u7b26\u4e32\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5b57\u7b26\u4e32\u53ea\u662f\u793a\u4f8b\uff0c\u5177\u4f53\u7684method\u53c2\u6570\uff0c\u5e94\u5f53\u9075\u5faa\u5f53\u524d\u8def\u7531\u3002"),(0,o.kt)("h3",{id:"51-tcp\u534f\u8bae\u76f4\u63a5\u8c03\u7528"},"5.1 Tcp\u534f\u8bae\u76f4\u63a5\u8c03\u7528"),(0,o.kt)("p",null,"\u5728Tcp\u534f\u8bae\u65f6\uff0c\u6309\u7167\u9002\u914d\u5668\uff0c\u9009\u62e9\u6027\u7684\u662f\u5426\u4ee5\\r\\n\u7ed3\u5c3e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'{"jsonrpc": "2.0", "method": "testjsonrpc", "params":["RRQM"], "id": 1}\n')),(0,o.kt)("h3",{id:"52-http\u534f\u8bae\u76f4\u63a5\u8c03\u7528"},"5.2 Http\u534f\u8bae\u76f4\u63a5\u8c03\u7528"),(0,o.kt)("p",null,"\u5728Http\u534f\u8bae\u65f6\uff0c\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Url+Post"),"\u65b9\u5f0f\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'{"jsonrpc": "2.0", "method": "testjsonrpc", "params":["RRQM"], "id": 1}\n')),(0,o.kt)("h3",{id:"53-websocket\u534f\u8bae\u76f4\u63a5\u8c03\u7528"},"5.3 Websocket\u534f\u8bae\u76f4\u63a5\u8c03\u7528"),(0,o.kt)("p",null,"\u5728Websocket\u534f\u8bae\u65f6\uff0c\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"\u6587\u672c\u7c7b\u578b"),"\uff0c\u76f4\u63a5\u53d1\u9001\u5230\u670d\u52a1\u5668\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'{"jsonrpc": "2.0", "method": "testjsonrpc", "params":["RRQM"], "id": 1}\n')),(0,o.kt)("h2",{id:"\u516d\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528"},"\u516d\u3001\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528"),(0,o.kt)("p",null,"\u6846\u67b6\u5185\u90e8\u63d0\u4f9b\u4e86JsonRpc\u7684\u4e13\u5c5e\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\uff0c\u4e5f\u53ef\u4ee5\u751f\u6210\u4ee3\u7406\u8c03\u7528\u3002\u4e0b\u5217\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,o.kt)("h3",{id:"61-tcp\u534f\u8bae"},"6.1 Tcp\u534f\u8bae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var jsonRpcClient = new TcpJsonRpcClient();\njsonRpcClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7705"));\njsonRpcClient.Connect();\n\nstring result = jsonRpcClient.InvokeT<string>("TestJsonRpc", InvokeOption.WaitInvoke, "RRQM");\n')),(0,o.kt)("h3",{id:"62-http\u534f\u8bae"},"6.2 Http\u534f\u8bae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var jsonRpcClient = new HttpJsonRpcClient();\njsonRpcClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("http://127.0.0.1:7706/jsonrpc"));\njsonRpcClient.Connect();\n\nstring result = jsonRpcClient.InvokeT<string>("TestJsonRpc", InvokeOption.WaitInvoke, "RRQM");\n')),(0,o.kt)("h3",{id:"63-websocket\u534f\u8bae"},"6.3 Websocket\u534f\u8bae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var jsonRpcClient = new WebSocketJsonRpcClient();\njsonRpcClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("ws://127.0.0.1:7707/ws"));//\u6b64url\u5c31\u662f\u80fd\u8fde\u63a5\u5230websocket\u7684\u8def\u5f84\u3002\njsonRpcClient.Connect();\n\nstring result = jsonRpcClient.InvokeT<string>("TestJsonRpc", InvokeOption.WaitInvoke, "RRQM");\n')),(0,o.kt)("h3",{id:"64-\u751f\u6210\u4ee3\u7406\u8c03\u7528"},"6.4 \u751f\u6210\u4ee3\u7406\u8c03\u7528"),(0,o.kt)("p",null,"\u5728\u670d\u52a1\u5668\u7aef\uff0c\u6ce8\u518c\u5b8c\u670d\u52a1\u540e\uff0c\u5c31\u53ef\u4ee5\u751f\u6210\u5ba2\u6237\u7aef\u8c03\u7528\u4ee3\u7801\u4e86\u3002\u8be6\u7ec6\u7684\u64cd\u4f5c\u53ef\u4ee5\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/touchsocket/docs/current/generateproxyfromserver"},"\u670d\u52a1\u7aef\u4ee3\u7406\u751f\u6210")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{8-9}","{8-9}":!0},'a.UseTcpJsonRpc()\n.ConfigureRpcStore(store =>\n{\n    store.RegisterServer<JsonRpcServer>();//\u6ce8\u518c\u670d\u52a1\n\n#if DEBUG\n    //\u4e0b\u5217\u4ee3\u7801\uff0c\u4f1a\u751f\u6210\u5ba2\u6237\u7aef\u7684\u8c03\u7528\u4ee3\u7801\u3002\n    var codeString = store.GetProxyCodes("JsonRpcServerProxy", typeof(JsonRpcAttribute));\n    File.WriteAllText("../../../JsonRpcServerProxy.cs", codeString);\n#endif\n});\n')),(0,o.kt)("p",null,"\u7136\u540e\u628a\u751f\u6210\u7684.cs\u6587\u4ef6\u590d\u5236\uff08\u6216\u94fe\u63a5\uff09\u5230\u5ba2\u6237\u7aef\u9879\u76ee\u3002\u7136\u540e\u5ba2\u6237\u7aef\u76f4\u63a5\u4f7f\u7528\u540c\u540d",(0,o.kt)("inlineCode",{parentName:"p"},"\u6269\u5c55\u65b9\u6cd5"),"\u5373\u53ef\u8c03\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var sum3 = client.TestJsonRpc("RRQM");\n')),(0,o.kt)("h3",{id:"65-\u4f7f\u7528dispatchproxy\u4ee3\u7406\u8c03\u7528"},"6.5 \u4f7f\u7528DispatchProxy\u4ee3\u7406\u8c03\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528DispatchProxy\u4ee3\u7406\u8c03\u7528\uff0c\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u4ee3\u7406\uff0c\u8be6\u60c5\u8bf7\u770b",(0,o.kt)("a",{parentName:"p",href:"/touchsocket/docs/current/generateproxyfromdispatchproxy"},"DispatchProxy\u4ee3\u7406\u751f\u6210")),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u58f0\u660e\u4e00\u4e2a\u57fa\u7c7b\uff0c\u7528\u4e8e\u901a\u8baf\u57fa\u7840\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'/// <summary>\n/// \u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627fJsonRpcDispatchProxy\uff0c\u4ea6\u6216\u8005RpcDispatchProxy\u57fa\u7c7b\u3002\n/// \u7136\u540e\u5b9e\u73b0\u62bd\u8c61\u65b9\u6cd5\uff0c\u4e3b\u8981\u662f\u80fd\u83b7\u53d6\u5230\u8c03\u7528\u7684IRpcClient\u6d3e\u751f\u63a5\u53e3\u3002\n/// </summary>\nclass MyJsonRpcDispatchProxy : JsonRpcDispatchProxy\n{\n    private readonly IJsonRpcClient m_client;\n\n    public MyJsonRpcDispatchProxy()\n    {\n        this.m_client = CreateJsonRpcClientByTcp();\n    }\n    public override IJsonRpcClient GetClient()\n    {\n        return this.m_client;\n    }\n\n    private static IJsonRpcClient CreateJsonRpcClientByTcp()\n    {\n        var client = new TcpJsonRpcClient();\n        client.Setup(new TouchSocketConfig()\n            .SetRemoteIPHost("127.0.0.1:7705")\n            .SetTcpDataHandlingAdapter(() => new TerminatorPackageAdapter("\\r\\n")));\n        client.Connect();\n\n        Console.WriteLine("\u8fde\u63a5\u6210\u529f");\n        return client;\n    }\n}\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u5176\u4ed6\u534f\u8bae\u7684JsonRpc\u4e5f\u662f\u5b8c\u5168\u652f\u6301\u7684\u3002")),(0,o.kt)("p",null,"\u7136\u540e\u6309\u7167\u670d\u52a1\uff0c\u5b9a\u4e49\u4e00\u4e2a\u76f8\u540c\u7684\u4ee3\u7406\u63a5\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"interface IJsonRpcServer\n{\n    [JsonRpc(MethodInvoke = true)]\n    string TestJsonRpc(string str);\n}\n")),(0,o.kt)("p",null,"\u6700\u540e\u751f\u6210\u4ee3\u7406\uff0c\u5e76\u6309\u7167\u63a5\u53e3\u8c03\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{1}","{1}":!0},"var rpc = MyJsonRpcDispatchProxy.Create<IJsonRpcServer, MyJsonRpcDispatchProxy>();\n\nwhile (true)\n{\n    var result = rpc.TestJsonRpc(Console.ReadLine());\n    Console.WriteLine(result);\n}\n")),(0,o.kt)("h2",{id:"\u4e03\u53cd\u5411rpc\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef"},"\u4e03\u3001\u53cd\u5411Rpc\uff08\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef\uff09"),(0,o.kt)("p",null,"\u6846\u67b6\u63d0\u4f9b\u4e86\u53cd\u5411Rpc\uff0c\u5373\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef\u3002\u8be5\u529f\u53ef\u4ee5\u7528\u4e8eweb\u7b49\u591a\u7aef\u3002\u5177\u4f53\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u50cf\u5e38\u89c4Rpc\u4e00\u6837\u58f0\u660e\u4e00\u4e2aRpc\u670d\u52a1\u3002\u7136\u540e\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"JsonRpc"),"\u7279\u6027\u8868\u793a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"public class ReverseJsonRpcServer : RpcServer\n{\n    [JsonRpc(MethodInvoke = true)]\n    public int Add(int a, int b)\n    {\n        return a + b;\n    }\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u5728\u63d2\u4ef6\u6ce8\u518c\u5168\u5c40",(0,o.kt)("inlineCode",{parentName:"p"},"RpcStore"),"\u3002\u5e76\u6ce8\u518c\u670d\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var jsonRpcClient = new WebSocketJsonRpcClient();\njsonRpcClient.Setup(new TouchSocketConfig()\n    .ConfigurePlugins(a =>\n    {\n        a.UseGlobalRpcStore()\n        .ConfigureRpcStore(store =>\n        {\n            store.RegisterServer<ReverseJsonRpcServer>();\n        });\n    })\n    .SetRemoteIPHost("ws://127.0.0.1:7707/ws"));//\u6b64url\u5c31\u662f\u80fd\u8fde\u63a5\u5230websocket\u7684\u8def\u5f84\u3002\njsonRpcClient.Connect();\n')),(0,o.kt)("p",null,"\u5728\u670d\u52a1\u5668\u7aef\u4e2d\uff0c\u62ff\u5230IHttpSocketClient\u5bf9\u8c61\u3002\u7136\u540e\u8c03\u7528GetJsonRpcActionClient\u6269\u5c55\u65b9\u6cd5\u83b7\u53d6\u5230jsonRpcClient\u3002\u7136\u540e\u8c03\u7528Invoke\u7b49\u3002"),(0,o.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\u6f14\u793a\u7684\u662f\uff0c\u5f53WebSocket\u8fde\u63a5\u4e0a\u65f6\uff0c\u670d\u52a1\u5668\u4e3b\u52a8\u8c03\u7528\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'class MyPluginClass : PluginBase, IWebSocketHandshakedPlugin<IHttpSocketClient>\n{\n    public async Task OnWebSocketHandshaked(IHttpSocketClient client, HttpContextEventArgs e)\n    {\n        try\n        {\n            //\u83b7\u53d6JsonRpcActionClient\uff0c\u7528\u4e8e\u6267\u884c\u53cd\u5411Rpc\n            var jsonRpcClient = client.GetJsonRpcActionClient();\n\n            var result = await jsonRpcClient.InvokeTAsync<int>("Add", InvokeOption.WaitInvoke, 10, 20);\n            Console.WriteLine(result);\n        }\n        catch (Exception ex)\n        {\n            Console.WriteLine(ex.Message);\n        }\n        await e.InvokeNext();\n    }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u53cd\u5411JsonRpc\u4e5f\u80fd\u4f7f\u7528\u4ee3\u7406\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/JsonRpc"},"\u672c\u6587\u793a\u4f8bDemo")))}k.isMDXComponent=!0}}]);