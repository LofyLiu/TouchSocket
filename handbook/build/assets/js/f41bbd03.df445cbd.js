"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[8541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var o=2;o<l;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const l={id:"httpservice",title:"\u521b\u5efaHttpService"},a=void 0,s={unversionedId:"httpservice",id:"httpservice",title:"\u521b\u5efaHttpService",description:"\u5b9a\u4e49",source:"@site/docs/httpservice.mdx",sourceDirName:".",slug:"/httpservice",permalink:"/touchsocket/docs/current/httpservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/httpservice.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1705754519,formattedLastUpdatedAt:"Jan 20, 2024",frontMatter:{id:"httpservice",title:"\u521b\u5efaHttpService"},sidebar:"docs",previous:{title:"\u9002\u914d\u5668\u5b8c\u6574\u6027\u3001\u6027\u80fd\u6d4b\u8bd5",permalink:"/touchsocket/docs/current/dataadaptertester"},next:{title:"\u521b\u5efaHttpClient",permalink:"/touchsocket/docs/current/httpclient"}},p={},o=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4ea7\u54c1\u7279\u70b9",id:"\u4e8c\u4ea7\u54c1\u7279\u70b9",level:2},{value:"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:2},{value:"\u56db\u3001\u670d\u52a1\u5668\u67b6\u6784",id:"\u56db\u670d\u52a1\u5668\u67b6\u6784",level:2},{value:"\u4e94\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u4e94\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"\u516d\u3001\u4f7f\u7528HttpService",id:"\u516d\u4f7f\u7528httpservice",level:2},{value:"6.1 \u521b\u5efaHttpService",id:"61-\u521b\u5efahttpservice",level:3},{value:"6.2 \u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42\u53c2\u6570",id:"62-\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42\u53c2\u6570",level:3},{value:"6.2.1 Query\u53c2\u6570",id:"621-query\u53c2\u6570",level:4},{value:"6.2.2 Header\u53c2\u6570",id:"622-header\u53c2\u6570",level:4},{value:"6.2.3 Form\u53c2\u6570",id:"623-form\u53c2\u6570",level:4},{value:"6.3 \u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42",id:"63-\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42",level:3},{value:"6.3.1 Get\u8bf7\u6c42",id:"631-get\u8bf7\u6c42",level:4},{value:"6.3.2 Get\u6587\u4ef6\u8bf7\u6c42",id:"632-get\u6587\u4ef6\u8bf7\u6c42",level:4},{value:"6.3.3 Get\u9875\u9762\u8bf7\u6c42",id:"633-get\u9875\u9762\u8bf7\u6c42",level:4},{value:"6.3.4 Post\u6587\u4ef6\u8bf7\u6c42",id:"634-post\u6587\u4ef6\u8bf7\u6c42",level:4},{value:"\u4e03\u3001\u521b\u5efa\u52a0\u5bc6Ssl\u7684HttpsService",id:"\u4e03\u521b\u5efa\u52a0\u5bc6ssl\u7684httpsservice",level:2}],u={toc:o},c="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(c,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,i.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Http ",(0,i.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Http"},"TouchSocket.Http.dll")),(0,i.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HttpService"),"\u662f\u80fd\u591f\u63d0\u4f9bHttp\u76f8\u5173\u670d\u52a1\u7684\u57fa\u7840\u7c7b\u578b\u3002"),(0,i.kt)("h2",{id:"\u4e8c\u4ea7\u54c1\u7279\u70b9"},"\u4e8c\u3001\u4ea7\u54c1\u7279\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301HTTPS\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u591a\u79cd\u6570\u636e\u63a5\u6536\u6a21\u5f0f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u591a\u5730\u5740\u76d1\u542c"),"\uff08\u53ef\u4ee5\u4e00\u6b21\u6027\u76d1\u542c\u591a\u4e2aIP\u53ca\u7aef\u53e3\uff09")),(0,i.kt)("h2",{id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f"},"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP\u57fa\u7840\u4f7f\u7528\u573a\u666f\uff1a\u53ef\u8de8\u5e73\u53f0\u3001\u8de8\u8bed\u8a00\u4f7f\u7528\u3002")),(0,i.kt)("h2",{id:"\u56db\u670d\u52a1\u5668\u67b6\u6784"},"\u56db\u3001\u670d\u52a1\u5668\u67b6\u6784"),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u5728\u6536\u5230\u65b0\u5ba2\u6237\u7aef\u8fde\u63a5\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2aHttpSocketClient\u7684\u6d3e\u751f\u7c7b\u5b9e\u4f8b\uff0c\u4e0e\u8fdc\u7a0bHttpClient\u5bf9\u5e94\uff0c\u540e\u7eed\u7684\u6570\u636e\u901a\u4fe1\u5747\u7531\u6b64\u5b9e\u4f8b\u8d1f\u8d23\u3002"),(0,i.kt)("img",{src:n(3948).Z,width:"500"}),(0,i.kt)("h2",{id:"\u4e94\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u4e94\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,i.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,i.kt)("strong",{parentName:"p"},"IHttpPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\u6216\u8005\u7ee7\u627f\u81ea",(0,i.kt)("strong",{parentName:"p"},"HttpPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u65b9\u6cd5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IHttpPlugin"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230\u6240\u6709Http\u8bf7\u6c42\u65f6\u3002")))),(0,i.kt)("h2",{id:"\u516d\u4f7f\u7528httpservice"},"\u516d\u3001\u4f7f\u7528HttpService"),(0,i.kt)("p",null,"HttpService\u7684\u521b\u5efa\uff0c\u57fa\u672c\u548cTcpService\u4e00\u81f4\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\u5b9e\u73b0\uff0c\u4e0b\u5217\u4ec5\u6f14\u793a\u6700\u7b80\u5355\u5b9e\u73b0\u3002"),(0,i.kt)("p",null,"HttpService\u7684\u76f8\u5173\u4e8b\u52a1\uff0c\u4f1a\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"\u63d2\u4ef6"),"\u89e6\u53d1\u3002"),(0,i.kt)("h3",{id:"61-\u521b\u5efahttpservice"},"6.1 \u521b\u5efaHttpService"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .SetListenIPHosts(7789)\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        //\u4ee5\u4e0b\u5373\u662f\u63d2\u4ef6\n        a.Add<MyHttpPlug1>();\n        a.Add<MyHttpPlug2>();\n        a.Add<MyHttpPlug3>();\n        a.Add<MyHttpPlug4>();\n\n        //default\u63d2\u4ef6\u5e94\u8be5\u6700\u540e\u6dfb\u52a0\uff0c\u5176\u4f5c\u7528\u662f\n        //1\u3001\u4e3a\u627e\u4e0d\u5230\u7684\u8def\u7531\u8fd4\u56de404\n        //2\u3001\u5904\u7406header\u4e3aOption\u7684\u63a2\u89c6\u8de8\u57df\u8bf7\u6c42\u3002\n        a.UseDefaultHttpServicePlugin();\n    }));\n    \nservice.Start();\n")),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"DefaultHttpServicePlugin\u63d2\u4ef6\u6700\u597d\u6dfb\u52a0\u5728\u63d2\u4ef6\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u6dfb\u52a0\u7684\u8bdd\uff0c\u6700\u597d\u81ea\u5df1\u505a\u597d\u7f3a\u7701\u8def\u7531\u548c\u8de8\u57df\u914d\u7f6e\u3002")),(0,i.kt)("h3",{id:"62-\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42\u53c2\u6570"},"6.2 \u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42\u53c2\u6570"),(0,i.kt)("h4",{id:"621-query\u53c2\u6570"},"6.2.1 Query\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'string value = e.Context.Request.Query["key"];\n')),(0,i.kt)("h4",{id:"622-header\u53c2\u6570"},"6.2.2 Header\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'string value = e.Context.Request.Headers["key"];\n')),(0,i.kt)("p",null,"\u4ea6\u6216\u8005"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"string value = e.Context.Request.Headers[HttpHeaders.Cookie];\n")),(0,i.kt)("h4",{id:"623-form\u53c2\u6570"},"6.2.3 Form\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'string value = e.Context.Request.Forms["key"];\n')),(0,i.kt)("h3",{id:"63-\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42"},"6.3 \u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u8bf7\u6c42"),(0,i.kt)("h4",{id:"631-get\u8bf7\u6c42"},"6.3.1 Get\u8bf7\u6c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class MyHttpPlug1 : PluginBase, IHttpPlugin<IHttpSocketClient>\n{\n    public async Task OnHttpRequest(IHttpSocketClient client, HttpContextEventArgs e)\n    {\n        if (e.Context.Request.IsGet())\n        {\n            if (e.Context.Request.UrlEquals("/success"))\n            {\n                //\u76f4\u63a5\u54cd\u5e94\u6587\u5b57\n                e.Context.Response.FromText("Success").Answer();//\u76f4\u63a5\u56de\u5e94\n                Console.WriteLine("\u5904\u7406\u5b8c\u6bd5");\n                return;\n            }\n        }\n\n        //\u65e0\u6cd5\u5904\u7406\uff0c\u8c03\u7528\u4e0b\u4e00\u4e2a\u63d2\u4ef6\n        await e.InvokeNext();\n    }\n}\n')),(0,i.kt)("h4",{id:"632-get\u6587\u4ef6\u8bf7\u6c42"},"6.3.2 Get\u6587\u4ef6\u8bf7\u6c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class MyHttpPlug2 : PluginBase, IHttpPlugin<IHttpSocketClient>\n{\n    public async Task OnHttpRequest(IHttpSocketClient client, HttpContextEventArgs e)\n    {\n        if (e.Context.Request.IsGet())\n        {\n            if (e.Context.Request.UrlEquals("/file"))\n            {\n                try\n                {\n                    //\u76f4\u63a5\u56de\u5e94\u6587\u4ef6\u3002\n                    e.Context.Response\n                        .SetStatus()//\u5fc5\u987b\u8981\u6709\u72b6\u6001\n                        .FromFile(@"D:\\System\\Windows.iso", e.Context.Request);\n                }\n                catch (Exception ex)\n                {\n                    e.Context.Response.SetStatus(403)\n                        .FromText(ex.Message)\n                        .Answer();\n                }\n\n                return;\n            }\n        }\n        await e.InvokeNext();\n    }\n}\n')),(0,i.kt)("h4",{id:"633-get\u9875\u9762\u8bf7\u6c42"},"6.3.3 Get\u9875\u9762\u8bf7\u6c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class MyHttpPlug3 : PluginBase, IHttpPlugin<IHttpSocketClient>\n{\n    public async Task OnHttpRequest(IHttpSocketClient client, HttpContextEventArgs e)\n    {\n        if (e.Context.Request.IsGet())\n        {\n            if (e.Context.Request.UrlEquals("/html"))\n            {\n                //\u56de\u5e94html\n                var stringBuilder = new StringBuilder();\n                stringBuilder.AppendLine("<!DOCTYPE html>");\n                stringBuilder.AppendLine("<html>");\n                stringBuilder.AppendLine("<head>");\n                stringBuilder.AppendLine("<meta charset=\\"utf-8\\"/>");\n                stringBuilder.AppendLine("<title>TouchSocket</title>");\n                stringBuilder.AppendLine("</head>");\n                stringBuilder.AppendLine("<body>");\n                stringBuilder.AppendLine("<div id=\\"kuang\\" style=\\"width: 50%;height: 85%;left: 25%;top:15%;position: absolute;\\">");\n                stringBuilder.AppendLine("<a id=\\"MM\\"  style=\\"font-size: 30px;font-family: \u5fae\u8f6f\u96c5\u9ed1;width: 100%;\\">\u738b\u4e8c\u9ebb\u5b50</a>");\n                stringBuilder.AppendLine("<input type=\\"text\\" id=\\"NN\\" value=\\"\\" style=\\"font-size: 30px;width:100%;position: relative;top: 30px;\\"/>");\n                stringBuilder.AppendLine("<input type=\\"button\\" id=\\"XX\\" value=\\"\u6211\u597d\\" style=\\"font-size: 30px;width: 100%;position: relative;top: 60px;\\" onclick=\\"javascript:jump()\\" />");\n                stringBuilder.AppendLine("</div>");\n                stringBuilder.AppendLine("</body>");\n                stringBuilder.AppendLine("</html>");\n\n                e.Context.Response\n                         .SetStatus()//\u5fc5\u987b\u8981\u6709\u72b6\u6001\n                         .SetContentTypeByExtension(".html")\n                         .SetContent(stringBuilder.ToString());\n                e.Context.Response.Answer();\n                return;\n            }\n        }\n\n        await e.InvokeNext();\n    }\n}\n')),(0,i.kt)("h4",{id:"634-post\u6587\u4ef6\u8bf7\u6c42"},"6.3.4 Post\u6587\u4ef6\u8bf7\u6c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class MyHttpPlug4 : PluginBase, IHttpPlugin<IHttpSocketClient>\n{\n    public async Task OnHttpRequest(IHttpSocketClient client, HttpContextEventArgs e)\n    {\n        if (e.Context.Request.IsPost())\n        {\n            if (e.Context.Request.UrlEquals("/uploadfile"))\n            {\n                try\n                {\n                    if (e.Context.Request.TryGetContent(out var bodys))//\u4e00\u6b21\u6027\u83b7\u53d6\u8bf7\u6c42\u4f53\n                    {\n                        return;\n                    }\n\n                    while (true)//\u5f53\u6570\u636e\u592a\u5927\u65f6\uff0c\u53ef\u6301\u7eed\u8bfb\u53d6\n                    {\n                        var buffer = new byte[1024 * 64];\n                        var r = e.Context.Request.Read(buffer, 0, buffer.Length);\n                        if (r == 0)\n                        {\n                            return;\n                        }\n\n                        //\u8fd9\u91cc\u53ef\u4ee5\u4e00\u76f4\u5904\u7406\u8bfb\u5230\u7684\u6570\u636e\u3002\n                    }\n\n                    //\u4e0b\u9762\u903b\u8f91\u662f\u63a5\u6536\u5c0f\u6587\u4ef6\u3002\n\n                    if (e.Context.Request.ContentLength > 1024 * 1024 * 100)//\u5168\u90e8\u6570\u636e\u4f53\u8d85\u8fc7100Mb\u5219\u76f4\u63a5\u62d2\u7edd\u63a5\u6536\u3002\n                    {\n                        e.Context.Response\n                            .SetStatus(403, "\u6570\u636e\u8fc7\u5927")\n                            .Answer();\n                        return;\n                    }\n\n                    //\u6b64\u64cd\u4f5c\u4f1a\u5148\u63a5\u6536\u5168\u90e8\u6570\u636e\uff0c\u7136\u540e\u518d\u5206\u5272\u6570\u636e\u3002\n                    //\u6240\u4ee5\u4e0a\u4f20\u6587\u4ef6\u4e0d\u5b9c\u8fc7\u5927\uff0c\u4e0d\u7136\u4f1a\u5185\u5b58\u6ea2\u51fa\u3002\n                    var multifileCollection = e.Context.Request.GetMultifileCollection();\n\n                    foreach (var item in multifileCollection)\n                    {\n                        var stringBuilder = new StringBuilder();\n                        stringBuilder.Append($"\u6587\u4ef6\u540d={item.FileName}\\t");\n                        stringBuilder.Append($"\u6570\u636e\u957f\u5ea6={item.Length}");\n                        client.Logger.Info(stringBuilder.ToString());\n                    }\n\n                    e.Context.Response\n                            .SetStatus()\n                            .FromText("Ok")\n                            .Answer();\n                }\n                catch (Exception ex)\n                {\n                    client.Logger.Exception(ex);\n                }\n            }\n        }\n        await e.InvokeNext();\n    }\n}\n')),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u64cd\u4f5c\u652f\u6301\u5927\u578b\u6587\u4ef6\uff0c\u4e5f\u652f\u6301\u65ad\u70b9\u7eed\u4f20\u3001\u652f\u6301\u8fc5\u96f7\u52a0\u901f\u7b49\u3002")),(0,i.kt)("h2",{id:"\u4e03\u521b\u5efa\u52a0\u5bc6ssl\u7684httpsservice"},"\u4e03\u3001\u521b\u5efa\u52a0\u5bc6Ssl\u7684HttpsService"),(0,i.kt)("p",null,"Https\u670d\u52a1\u5668\uff0c\u548chttp\u670d\u52a1\u5668\u51e0\u4e4e\u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7\u589e\u52a0\u4e86\u4e00\u4e2aSsl\u7684\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'.SetServiceSslOption(new ServiceSslOption() \n{ \n    Certificate = new X509Certificate2("Socket.pfx", "Socket"), \n    SslProtocols = SslProtocols.Tls12 \n})\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/Http"},"\u672c\u6587\u793a\u4f8bDemo")))}d.isMDXComponent=!0},3948:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/createhttpservice-1-4b8f923700c533fb1182b7775268246c.png"}}]);