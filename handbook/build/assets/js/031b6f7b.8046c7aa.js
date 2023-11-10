"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,b=c["".concat(o,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(b,p(p({ref:t},u),{},{components:n})):r.createElement(b,p({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"webapi",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},p=void 0,l={unversionedId:"webapi",id:"webapi",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",description:"\u5b9a\u4e49",source:"@site/docs/webapi.mdx",sourceDirName:".",slug:"/webapi",permalink:"/touchsocket/docs/current/webapi",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/webapi.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1698890191,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{id:"webapi",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"Redis\u7f13\u5b58",permalink:"/touchsocket/docs/current/dmtpredis"},next:{title:"Swagger\u9875\u9762",permalink:"/touchsocket/docs/current/swagger"}},o={},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9",id:"\u4e8c\u7279\u70b9",level:2},{value:"\u4e09\u3001\u5b9a\u4e49\u670d\u52a1",id:"\u4e09\u5b9a\u4e49\u670d\u52a1",level:2},{value:"\u56db\u3001\u89c4\u5219",id:"\u56db\u89c4\u5219",level:2},{value:"4.1 Get\u89c4\u5219",id:"41-get\u89c4\u5219",level:3},{value:"4.2 Post\u89c4\u5219",id:"42-post\u89c4\u5219",level:3},{value:"4.3 \u8def\u7531\u89c4\u5219",id:"43-\u8def\u7531\u89c4\u5219",level:3},{value:"\u4e94\u3001\u542f\u52a8\u670d\u52a1\u5668",id:"\u4e94\u542f\u52a8\u670d\u52a1\u5668",level:2},{value:"\u516d\u3001\u8c03\u7528\u670d\u52a1",id:"\u516d\u8c03\u7528\u670d\u52a1",level:2},{value:"6.1 \u76f4\u63a5\u8c03\u7528",id:"61-\u76f4\u63a5\u8c03\u7528",level:3},{value:"6.2 \u5185\u7f6eHttpClient\u8c03\u7528",id:"62-\u5185\u7f6ehttpclient\u8c03\u7528",level:3},{value:"6.3 Dotnet\u81ea\u5e26HttpClient\u8c03\u7528",id:"63-dotnet\u81ea\u5e26httpclient\u8c03\u7528",level:3},{value:"6.4 \u751f\u6210\u4ee3\u7406\u8c03\u7528",id:"64-\u751f\u6210\u4ee3\u7406\u8c03\u7528",level:3},{value:"6.5 \u4f7f\u7528DispatchProxy\u4ee3\u7406\u8c03\u7528",id:"65-\u4f7f\u7528dispatchproxy\u4ee3\u7406\u8c03\u7528",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,i.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.WebApi ",(0,i.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.WebApi"},"TouchSocket.WebApi.dll")),(0,i.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,i.kt)("p",null,"WebApi\u662f",(0,i.kt)("strong",{parentName:"p"},"\u901a\u7528"),"\u7684Rpc\u8c03\u7528\uff0c\u4e0e",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u7a0b\u8bed\u8a00\u65e0\u5173"),"\uff0c\u4e0e",(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7cfb\u7edf\u65e0\u5173"),"\u3002\u5176\u8def\u7531\u673a\u5236\u6a21\u4effAspNetCore\uff0c\u53ef\u5b9e\u73b0\u5f88\u591a\u8def\u7531\u673a\u5236\u3002\u4f46\u662f\u56e0\u4e3ahttp\u517c\u5bb9\u6027\u9519\u7efc\u590d\u6742\uff0c\u6240\u4ee5\u76ee\u524dTouchSocket\u7684WebApi\u4ec5\u652f\u6301",(0,i.kt)("strong",{parentName:"p"},"GET"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"POST"),"\u51fd\u6570\u3002\u4f7f\u7528\u4f53\u9a8c\u63a5\u8fd1\u4e8eAspNetCore\u3002"),(0,i.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff0c100\u4e2a\u5ba2\u6237\u7aef\uff0c10w\u6b21\u8c03\u7528\uff0c\u4ec5\u7528\u65f617s\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5168\u5f02\u5e38\u53cd\u9988")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5927\u90e8\u5206\u8def\u7531\u89c4\u5219\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301js\u3001Android\u7b49\u8c03\u7528\u3002")),(0,i.kt)("h2",{id:"\u4e09\u5b9a\u4e49\u670d\u52a1"},"\u4e09\u3001\u5b9a\u4e49\u670d\u52a1"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u7aef\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627f\u4e8e",(0,i.kt)("strong",{parentName:"p"},"RpcServer"),"\u7c7b\uff08\u6216\u5b9e\u73b0IRpcServer\uff09\uff0c\u7136\u540e\u5728\u8be5\u7c7b\u4e2d\u5199",(0,i.kt)("strong",{parentName:"p"},"\u516c\u5171\u65b9\u6cd5"),"\uff0c\u5e76\u7528",(0,i.kt)("strong",{parentName:"p"},"WebApi"),"\u5c5e\u6027\u6807\u7b7e\u6807\u8bb0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class ApiServer : RpcServer\n{\n    private readonly ILog m_logger;\n\n    public ApiServer(ILog logger)\n    {\n        this.m_logger = logger;\n    }\n\n    [Origin(AllowOrigin = "*")]//\u8de8\u57df\u8bbe\u7f6e\n    [Router("[api]/[action]ab")]//\u6b64\u8def\u7531\u4f1a\u4ee5"/Server/Sumab"\u5b9e\u73b0\n    [Router("[api]/[action]")]//\u6b64\u8def\u7531\u4f1a\u4ee5"/Server/Sum"\u5b9e\u73b0\n    [WebApi(HttpMethodType.GET)]\n    public int Sum(int a, int b)\n    {\n        return a + b;\n    }\n\n    [WebApi(HttpMethodType.POST)]\n    public int TestPost(MyClass myClass)\n    {\n        return myClass.A + myClass.B;\n    }\n\n    /// <summary>\n    /// \u4f7f\u7528\u8c03\u7528\u4e0a\u4e0b\u6587\uff0c\u54cd\u5e94\u6587\u4ef6\u4e0b\u8f7d\u3002\n    /// </summary>\n    /// <param name="callContext"></param>\n    [WebApi(HttpMethodType.GET)]\n    public Task<string> DownloadFile(IWebApiCallContext callContext, string id)\n    {\n        if (id == "rrqm")\n        {\n            callContext.HttpContext.Response.FromFile(@"D:\\System\\Windows.iso", callContext.HttpContext.Request);\n            return Task.FromResult("ok");\n        }\n        return Task.FromResult("id\u4e0d\u6b63\u786e\u3002");\n    }\n\n    /// <summary>\n    /// \u4f7f\u7528\u8c03\u7528\u4e0a\u4e0b\u6587\uff0c\u83b7\u53d6\u5b9e\u9645\u8bf7\u6c42\u4f53\u3002\n    /// </summary>\n    /// <param name="callContext"></param>\n    [WebApi(HttpMethodType.POST)]\n    [Router("[api]/[action]")]\n    public Task<string> PostContent(IWebApiCallContext callContext)\n    {\n        if (callContext.Caller is ISocketClient socketClient)\n        {\n            this.m_logger.Info($"IP:{socketClient.IP},Port:{socketClient.Port}");//\u83b7\u53d6Ip\u548c\u7aef\u53e3\n        }\n        if (callContext.HttpContext.Request.TryGetContent(out var content))\n        {\n            this.m_logger.Info($"\u5171\u8ba1\uff1a{content.Length}");\n        }\n\n        return Task.FromResult("ok");\n    }\n}\n\npublic class MyClass\n{\n    public int A { get; set; }\n    public int B { get; set; }\n}\n')),(0,i.kt)("h2",{id:"\u56db\u89c4\u5219"},"\u56db\u3001\u89c4\u5219"),(0,i.kt)("h3",{id:"41-get\u89c4\u5219"},"4.1 Get\u89c4\u5219"),(0,i.kt)("p",null,"\u4f7f\u7528Get\u8fdb\u884c\u8bf7\u6c42\u65f6\uff0c\u670d\u52a1\u65b9\u6cd5\u53ef\u4ee5\u58f0\u660e\u591a\u4e2a\u53c2\u6570\uff0c\u4f46\u662f\u6bcf\u4e2a\u53c2\u6570\u90fd\u5fc5\u987b\u662f\u57fa\u7840\u7c7b\u578b\u6216\u8005\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"[WebApi(HttpMethodType.GET)]\npublic int Get(int a)\n{\n    return a;\n}\n\n[WebApi(HttpMethodType.GET)]\npublic int Sum(int a, int b)\n{\n    return a + b;\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u8981\u83b7\u53d6\u5b9e\u9645\u8bf7\u6c42\u7684\u8c03\u7528\u4e0a\u4e0b\u6587\uff08\u5728\u4e0a\u4e0b\u6587\u4e2d\u53ef\u4ee5\u83b7\u53d6IP\uff0c\u7aef\u53e3\u7b49\u4fe1\u606f\uff09\uff0c\u53ef\u4ee5\u5c06\u7b2c\u4e00\u4e2a\u53c2\u6570\u58f0\u660e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"IWebApiCallContext"),"\u7c7b\u578b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'/// <summary>\n/// \u4f7f\u7528\u8c03\u7528\u4e0a\u4e0b\u6587\uff0c\u54cd\u5e94\u6587\u4ef6\u4e0b\u8f7d\u3002\n// </summary>\n/// <param name="callContext"></param>\n[WebApi(HttpMethodType.GET)]\npublic Task<string> DownloadFile(IWebApiCallContext callContext, string id)\n{\n    if (id == "rrqm")\n    {\n        callContext.HttpContext.Response.FromFile(@"D:\\System\\Windows.iso", callContext.HttpContext.Request);\n        return Task.FromResult("ok");\n    }\n    return Task.FromResult("id\u4e0d\u6b63\u786e\u3002");\n}\n')),(0,i.kt)("h3",{id:"42-post\u89c4\u5219"},"4.2 Post\u89c4\u5219"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Post"),"\u8fdb\u884c\u8bf7\u6c42\u65f6\uff0c\u670d\u52a1\u65b9\u6cd5\u53ef\u4ee5\u58f0\u660e\u591a\u4e2a\u53c2\u6570\uff0c\u4f46\u662f\u5f53\u53c2\u6570\u662f\u57fa\u7840\u7c7b\u578b\u6216\u8005\u5b57\u7b26\u4e32\u7c7b\u578b\u65f6\uff0c\u5b83\u4e5f\u4f1a\u6765\u6e90\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"\u53c2\u6570\uff0c\u540c\u65f6\uff0c\u6709\u4e14\u53ea\u6709\u5f53\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4e3a\u5176\u4ed6\u7c7b\u578b\u65f6\uff0c\u624d\u4f1a\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"Body"),"\u89e3\u6790\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u53c2\u6570\u4f9d\u7136\u6765\u81eaQuery\uff0cBody\u4e3a\u7a7a\u4e5f\u53ef\u4ee5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"[WebApi(HttpMethodType.Post)]\npublic int Sum(int a, int b)\n{\n    return a + b;\n}\n")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u53c2\u6570\uff0c\u524d\u4e24\u4e2a\u6765\u81eaQuery\uff0cMyClass\u5c06\u4eceBody\u89e3\u6790\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"[WebApi(HttpMethodType.Post)]\npublic int Sum(int a, int b, MyClass myClass)\n{\n    return a + b;\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u8981\u83b7\u53d6\u5b9e\u9645\u8bf7\u6c42\u7684\u8c03\u7528\u4e0a\u4e0b\u6587\uff08\u5728\u4e0a\u4e0b\u6587\u4e2d\u53ef\u4ee5\u83b7\u53d6IP\uff0c\u7aef\u53e3\u7b49\u4fe1\u606f\uff09\uff0c\u53ef\u4ee5\u5c06\u7b2c\u4e00\u4e2a\u53c2\u6570\u58f0\u660e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"IWebApiCallContext"),"\u7c7b\u578b\u3002"),(0,i.kt)("h3",{id:"43-\u8def\u7531\u89c4\u5219"},"4.3 \u8def\u7531\u89c4\u5219"),(0,i.kt)("p",null,"\u6846\u67b6\u7684\u8def\u7531\u89c4\u5219\u6bd4\u8f83\u7b80\u5355\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ee5\u670d\u52a1\u7684\u540d\u79f0+\u65b9\u6cd5\u540d\u79f0\u4f5c\u4e3a\u8def\u7531\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4e0b\u5217\uff1a"),(0,i.kt)("p",null,"\u5c06\u4f1a\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"/ApiServer/Sum"),"\u4e3a\u8bf7\u6c42url\uff08\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"public class ApiServer : RpcServer\n{\n    [WebApi(HttpMethodType.GET)]\n    public int Sum(int a, int b)\n    {\n        return a + b;\n    }\n}\n")),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u5b9a\u5236\u8def\u7531\u6d88\u606f\u65f6\uff0c\u53ef\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"[api]"),"\u66ff\u4ee3\u670d\u52a1\u540d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"[action]"),"\u66ff\u4ee3\u65b9\u6cd5\u540d\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4e0b\u5217\uff1a"),(0,i.kt)("p",null,"\u5c06\u4f1a\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"user/ApiServer/test/Sum"),"\u4e3a\u8bf7\u6c42url\uff08\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'[Router("/user/[api]/test/[action]")]\npublic class ApiServer : RpcServer\n{\n    [WebApi(HttpMethodType.GET)]\n    public int Sum(int a, int b)\n    {\n        return a + b;\n    }\n}\n')),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Router"),"\u7279\u6027\u4e0d\u4ec5\u53ef\u4ee5\u7528\u4e8e\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u65b9\u6cd5\u3002\u800c\u4e14\u53ef\u4ee5\u591a\u4e2a\u4f7f\u7528\u3002")),(0,i.kt)("h2",{id:"\u4e94\u542f\u52a8\u670d\u52a1\u5668"},"\u4e94\u3001\u542f\u52a8\u670d\u52a1\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},' var service = new HttpService();\nservice.Setup(new TouchSocketConfig()\n   .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n   .ConfigurePlugins(a =>\n   {\n       a.UseCheckClear();\n\n       a.UseWebApi()\n       .ConfigureRpcStore(store =>\n       {\n           store.RegisterServer<ApiServer>();//\u6ce8\u518c\u670d\u52a1\n\n\n           //\u4e0b\u5217\u4ee3\u7801\uff0c\u4f1a\u751f\u6210\u5ba2\u6237\u7aef\u7684\u8c03\u7528\u4ee3\u7801\u3002\n           var codeString = store.GetProxyCodes("WebApiProxy", typeof(WebApiAttribute));\n           File.WriteAllText("../../../WebApiProxy.cs", codeString);\n\n       });\n\n       //\u6b64\u63d2\u4ef6\u662fhttp\u7684\u515c\u5e95\u63d2\u4ef6\uff0c\u5e94\u8be5\u6700\u540e\u6dfb\u52a0\u3002\u4f5c\u7528\u662f\u5f53\u6240\u6709\u8def\u7531\u4e0d\u5339\u914d\u65f6\u8fd4\u56de404.\u4e14\u5185\u90e8\u4e5f\u4f1a\u5904\u7406Option\u8bf7\u6c42\u3002\u53ef\u4ee5\u66f4\u597d\u7684\u5904\u7406\u6765\u81ea\u6d4f\u89c8\u5668\u7684\u8de8\u57df\u63a2\u6d4b\u3002\n       a.UseDefaultHttpServicePlugin();\n   }));\n\nservice.Start();\n\nConsole.WriteLine("\u4ee5\u4e0b\u8fde\u63a5\u7528\u4e8e\u6d4b\u8bd5webApi");\nConsole.WriteLine($"\u4f7f\u7528\uff1ahttp://127.0.0.1:7789/ApiServer/Sum?a=10&b=20");\n')),(0,i.kt)("h2",{id:"\u516d\u8c03\u7528\u670d\u52a1"},"\u516d\u3001\u8c03\u7528\u670d\u52a1"),(0,i.kt)("h3",{id:"61-\u76f4\u63a5\u8c03\u7528"},"6.1 \u76f4\u63a5\u8c03\u7528"),(0,i.kt)("p",null,"\u76f4\u63a5\u8c03\u7528\uff0c\u5219\u662f\u4e0d\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4ee3\u7406"),"\uff0c\u76f4\u63a5Call RPC\uff0c\u4f7f\u7528\u6bd4\u8f83\u7b80\u5355\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668"),"\u4e5f\u80fd\u76f4\u63a5\u8c03\u7528\u5b9e\u73b0\u3002"),(0,i.kt)("p",null,"\u3010Url\u8bf7\u6c42\u3011"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scheme"},"http://127.0.0.1:7789/ApiServer/Sum?a=10&b=20\n")),(0,i.kt)("h3",{id:"62-\u5185\u7f6ehttpclient\u8c03\u7528"},"6.2 \u5185\u7f6eHttpClient\u8c03\u7528"),(0,i.kt)("p",null,"\u5185\u7f6eWebApi\u7684\u5ba2\u6237\u7aef\u548c\u5927\u5bb6\u6240",(0,i.kt)("strong",{parentName:"p"},"\u719f\u8bc6"),"\u7684\u6709\u4e00\u4e9b\u5dee\u8ddd\uff0cTouchSocket\u7684WebApi\u4f7f\u7528\u7684\u662f",(0,i.kt)("strong",{parentName:"p"},"\u5148\u8fde\u63a5"),"\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u540e\u8bf7\u6c42"),"\u7684\u903b\u8f91\u3002\u8bf7\u6c42\u65f6\uff0c\u5148\u6807\u8bb0",(0,i.kt)("strong",{parentName:"p"},"GET/POST"),"\u7684\u51fd\u6570\u3002\u5982\u679c\u662f",(0,i.kt)("strong",{parentName:"p"},"GET"),"\uff0c\u5219\u5fc5\u987b",(0,i.kt)("strong",{parentName:"p"},"\u7559\u7a7aURL"),"\uff0c\u5982\u679c\u662f",(0,i.kt)("strong",{parentName:"p"},"POST"),"\uff0c\u5219\u53ea\u5199URL\u5373\u53ef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'private static WebApiClient CreateWebApiClient()\n{\n    var client = new WebApiClient();\n    client.Connect("127.0.0.1:7789");\n    Console.WriteLine("\u8fde\u63a5\u6210\u529f");\n    return client;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var client = CreateWebApiClient();\n\nint sum1 = client.InvokeT<int>("GET:/ApiServer/Sum?a={0}&b={1}", null, 10, 20);\nConsole.WriteLine($"Get\u8c03\u7528\u6210\u529f\uff0c\u7ed3\u679c\uff1a{sum1}");\n\nint sum2 = client.InvokeT<int>("POST:/ApiServer/TestPost", null, new MyClass() { A = 10, B = 20 });\nConsole.WriteLine($"Post\u8c03\u7528\u6210\u529f\uff0c\u7ed3\u679c\uff1a{sum2}");\n')),(0,i.kt)("h3",{id:"63-dotnet\u81ea\u5e26httpclient\u8c03\u7528"},"6.3 Dotnet\u81ea\u5e26HttpClient\u8c03\u7528"),(0,i.kt)("p",null,"Dotnet\u81ea\u5e26HttpClient\u5219\u662f\u901a\u8fc7\u8fde\u63a5\u6c60\u7684\u65b9\u5f0f\u8bbf\u95ee\u3002\u8be6\u60c5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/dotnet/api/system.net.http.httpclient"},"HttpClient")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'private static WebApiClientSlim CreateWebApiClientSlim()\n{\n    var client = new WebApiClientSlim(new System.Net.Http.HttpClient());\n    client.Setup(new TouchSocketConfig()\n        .SetRemoteIPHost("http://127.0.0.1:7789")\n        .ConfigurePlugins(a =>\n        {\n        }));\n    return client;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var client = CreateWebApiClientSlim();\n\nint sum1 = client.InvokeT<int>("GET:/ApiServer/Sum?a={0}&b={1}", null, 10, 20);\nConsole.WriteLine($"Get\u8c03\u7528\u6210\u529f\uff0c\u7ed3\u679c\uff1a{sum1}");\n\nint sum2 = client.InvokeT<int>("POST:/ApiServer/TestPost", null, new MyClass() { A = 10, B = 20 });\nConsole.WriteLine($"Post\u8c03\u7528\u6210\u529f\uff0c\u7ed3\u679c\uff1a{sum2}");\n')),(0,i.kt)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6309\u7167\u5fae\u8f6f\u5efa\u8bae\uff0cHttpClient\u5e94\u8be5\u4fdd\u8bc1\u6574\u4e2a\u7a0b\u5e8f\u4e2d\u5355\u5b9e\u4f8b\u4f7f\u7528\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"WebApiClientSlim"),"\u6784\u9020\u51fd\u6570\u4e2d\u4f20\u5165\u5df2\u5b58\u5728\u7684\u5bf9\u8c61\u3002")),(0,i.kt)("h3",{id:"64-\u751f\u6210\u4ee3\u7406\u8c03\u7528"},"6.4 \u751f\u6210\u4ee3\u7406\u8c03\u7528"),(0,i.kt)("p",null,"\u5728\u670d\u52a1\u5668\u7aef\uff0c\u6ce8\u518c\u5b8c\u670d\u52a1\u540e\uff0c\u5c31\u53ef\u4ee5\u751f\u6210\u5ba2\u6237\u7aef\u8c03\u7528\u4ee3\u7801\u4e86\u3002\u8be6\u7ec6\u7684\u64cd\u4f5c\u53ef\u4ee5\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/touchsocket/docs/current/generateproxyfromserver"},"\u670d\u52a1\u7aef\u4ee3\u7406\u751f\u6210")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{8-9}","{8-9}":!0},'a.UseWebApi()\n.ConfigureRpcStore(store =>\n{\n    store.RegisterServer<ApiServer>();//\u6ce8\u518c\u670d\u52a1\n\n#if DEBUG\n    //\u4e0b\u5217\u4ee3\u7801\uff0c\u4f1a\u751f\u6210\u5ba2\u6237\u7aef\u7684\u8c03\u7528\u4ee3\u7801\u3002\n    var codeString = store.GetProxyCodes("WebApiProxy", typeof(WebApiAttribute));\n    File.WriteAllText("../../../WebApiProxy.cs", codeString);\n#endif\n});\n')),(0,i.kt)("p",null,"\u7136\u540e\u628a\u751f\u6210\u7684.cs\u6587\u4ef6\u590d\u5236\uff08\u6216\u94fe\u63a5\uff09\u5230\u5ba2\u6237\u7aef\u9879\u76ee\u3002\u7136\u540e\u5ba2\u6237\u7aef\u76f4\u63a5\u4f7f\u7528\u540c\u540d",(0,i.kt)("inlineCode",{parentName:"p"},"\u6269\u5c55\u65b9\u6cd5"),"\u5373\u53ef\u8c03\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"var sum3 = client.Sum(10,20);\n")),(0,i.kt)("h3",{id:"65-\u4f7f\u7528dispatchproxy\u4ee3\u7406\u8c03\u7528"},"6.5 \u4f7f\u7528DispatchProxy\u4ee3\u7406\u8c03\u7528"),(0,i.kt)("p",null,"\u4f7f\u7528DispatchProxy\u4ee3\u7406\u8c03\u7528\uff0c\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u4ee3\u7406\uff0c\u8be6\u60c5\u8bf7\u770b",(0,i.kt)("a",{parentName:"p",href:"/touchsocket/docs/current/generateproxyfromdispatchproxy"},"DispatchProxy\u4ee3\u7406\u751f\u6210")),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u58f0\u660e\u4e00\u4e2a\u57fa\u7c7b\uff0c\u7528\u4e8e\u901a\u8baf\u57fa\u7840\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'/// <summary>\n/// \u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627fWebApiDispatchProxy\uff0c\u4ea6\u6216\u8005RpcDispatchProxy\u57fa\u7c7b\u3002\n/// \u7136\u540e\u5b9e\u73b0\u62bd\u8c61\u65b9\u6cd5\uff0c\u4e3b\u8981\u662f\u80fd\u83b7\u53d6\u5230\u8c03\u7528\u7684IRpcClient\u6d3e\u751f\u63a5\u53e3\u3002\n/// </summary>\nclass MyWebApiDispatchProxy : WebApiDispatchProxy\n{\n    private readonly WebApiClient m_client;\n\n    public MyWebApiDispatchProxy()\n    {\n        this.m_client = CreateWebApiClient();\n    }\n\n    private static WebApiClient CreateWebApiClient()\n    {\n        var client = new WebApiClient();\n        client.Setup(new TouchSocketConfig()\n            .SetRemoteIPHost("127.0.0.1:7789")\n            .ConfigurePlugins(a =>\n            {\n                a.UseReconnection();\n            }));\n        client.Connect();\n        Console.WriteLine("\u8fde\u63a5\u6210\u529f");\n        return client;\n    }\n\n    public override IWebApiClientBase GetClient()\n    {\n        return m_client;\n    }\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u6309\u7167\u670d\u52a1\uff0c\u5b9a\u4e49\u4e00\u4e2a\u76f8\u540c\u7684\u4ee3\u7406\u63a5\u53e3\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'interface IApiServer\n{\n    [Router("ApiServer/[action]")]\n    [WebApi(HttpMethodType.GET)]\n    int Sum(int a, int b);\n}\n')),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8def\u7531\u89c4\u5219\u548c\u670d\u52a1\u7aef\u76f8\u540c\u3002")),(0,i.kt)("p",null,"\u6700\u540e\u751f\u6210\u4ee3\u7406\uff0c\u5e76\u6309\u7167\u63a5\u53e3\u8c03\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{1}","{1}":!0},"IApiServer api = MyWebApiDispatchProxy.Create<IApiServer, MyWebApiDispatchProxy>();\nwhile (true)\n{\n    Console.WriteLine(\"\u8bf7\u8f93\u5165\u4e24\u4e2a\u6570\uff0c\u4e2d\u95f4\u7528\u7a7a\u683c\u9694\u5f00\uff0c\u56de\u8f66\u786e\u8ba4\");\n    string str = Console.ReadLine();\n    var strs = str.Split(' ');\n    int a = int.Parse(strs[0]);\n    int b = int.Parse(strs[1]);\n\n    var sum = api.Sum(a, b);\n    Console.WriteLine(sum);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/WebApi"},"\u672c\u6587\u793a\u4f8bDemo")))}m.isMDXComponent=!0}}]);