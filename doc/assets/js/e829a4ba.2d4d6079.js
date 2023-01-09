"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4038],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(t),k=r,N=d["".concat(l,".").concat(k)]||d[k]||u[k]||i;return t?a.createElement(N,p(p({ref:n},s),{},{components:t})):a.createElement(N,p({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905)),i=t(4996);const p={id:"singlefile",title:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03",sidebar_label:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03"},o=void 0,l={unversionedId:"singlefile",id:"singlefile",title:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 3.5.2 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/singlefile.mdx",sourceDirName:".",slug:"/singlefile",permalink:"/docs/singlefile",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/singlefile.mdx",tags:[],version:"current",frontMatter:{id:"singlefile",title:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03",sidebar_label:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03"},sidebar:"docs",previous:{title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",permalink:"/docs/virtual-deploy"},next:{title:"34.6 pm2 \u90e8\u7f72",permalink:"/docs/pm2"}},m={},s=[{value:"34.5.1 \u5386\u53f2\u80cc\u666f",id:"3451-\u5386\u53f2\u80cc\u666f",level:2},{value:"34.5.2 \u5fc5\u8981\u914d\u7f6e",id:"3452-\u5fc5\u8981\u914d\u7f6e",level:2},{value:"34.5.3 \u53d1\u5e03",id:"3453-\u53d1\u5e03",level:2},{value:"34.5.4 \u81ea\u5b9a\u4e49\u542f\u52a8\u7aef\u53e3",id:"3454-\u81ea\u5b9a\u4e49\u542f\u52a8\u7aef\u53e3",level:2},{value:"34.5.5 <code>pm2</code> \u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72",id:"3455-pm2-\u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72",level:2},{value:"34.5.5.1 \u8fd0\u884c\u5f0a\u7aef",id:"34551-\u8fd0\u884c\u5f0a\u7aef",level:3},{value:"34.5.5.2 <code>pm2</code> \u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72",id:"34552-pm2-\u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72",level:3},{value:"\u5fc5\u8981\u6761\u4ef6",id:"\u5fc5\u8981\u6761\u4ef6",level:4},{value:"34.5.5.3 <code>pm2</code> \u5e38\u89c1\u64cd\u4f5c",id:"34553-pm2-\u5e38\u89c1\u64cd\u4f5c",level:3},{value:"34.5.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3456-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion 3.5.2 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"3451-\u5386\u53f2\u80cc\u666f"},"34.5.1 \u5386\u53f2\u80cc\u666f"),(0,r.kt)("p",null,"\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},".NET Core 3")," \u8d77\uff0c\u5fae\u8f6f\u5c31\u63d0\u4f9b\u4e86\u5355\u6587\u4ef6\u53d1\u5e03\u7684\u6280\u672f\u652f\u6301\uff0c\u4f46\u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},".NET")," \u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"CLR")," \u90fd\u652f\u6301\u5355\u6587\u4ef6\u53d1\u5e03\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.Extensions.DependencyModel")," \u5305\u672c\u8eab\u4e0d\u652f\u6301\u5355\u6587\u4ef6\u53d1\u5e03\uff0c\u539f\u56e0\u662f\u5185\u90e8\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Assembley.CodeBase"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u597d\u5de7\u4e0d\u5de7"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\u62db\u4e86\uff0c\u5728\u8fc7\u53bb\u4e24\u5e74\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u4f9d\u8d56\u8be5\u5305\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"DependencyContext.Default")," \u7279\u6027\u8fdb\u884c\u7a0b\u5e8f\u96c6\u626b\u63cf\uff0c\u6240\u4ee5\u5355\u6587\u4ef6\u53d1\u5e03\u4e5f\u5c31\u6210\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e0d\u613f\u63d0\u8d77\u7684\u75db\uff01\uff01\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u4e8e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Furion v3.5.2+")," \u7248\u672c\u60f3\u51fa\u4e86\u65b0\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u81ea\u6b64\u5f7b\u5e95\u89e3\u51b3\u4e86\u5355\u6587\u4ef6\u53d1\u5e03\u7684\u95ee\u9898\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},".NET")," \u5b98\u65b9\u5355\u6587\u4ef6\u53d1\u5e03\u8bf4\u660e"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/core/deploying/single-file/overview"},"https://docs.microsoft.com/zh-cn/dotnet/core/deploying/single-file/overview"))),(0,r.kt)("h2",{id:"3452-\u5fc5\u8981\u914d\u7f6e"},"34.5.2 \u5fc5\u8981\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion v3.5.2+")," \u7248\u672c\u4e4b\u540e\uff0c\u65b0\u589e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ISingleFilePublish")," \u63a5\u53e3\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u542f\u52a8\u5c42 ",(0,r.kt)("inlineCode",{parentName:"strong"},".csproj")," \u6587\u4ef6\uff0c\u6dfb\u52a0\u4e0b\u5217\u4ee3\u7801\u5230 ",(0,r.kt)("inlineCode",{parentName:"strong"},"<PropertyGroup>")," \u8282\u70b9\u4e2d"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},"<PublishReadyToRunComposite>true</PublishReadyToRunComposite>\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"ReadyToRun")),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u53d1\u5e03\u65f6\u672a\u6253\u52fe ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadyToRun")," \u9009\u9879\uff0c\u5219\u65e0\u9700\u914d\u7f6e\u4e0a\u8ff0\u4ee3\u7801\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Web \u542f\u52a8\u5c42")," \u521b\u5efa\u7c7b\u578b\u5e76\u5b9e\u73b0\u8be5\u63a5\u53e3"),"\uff0c\u5982\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {8,15,26,28-35}",showLineNumbers:!0,"{8,15,26,28-35}":!0},'using System.Reflection;\n\nnamespace YourProject.Web.Entry;\n\n/// <summary>\n/// \u89e3\u51b3\u5355\u6587\u4ef6\u53d1\u5e03\u95ee\u9898\n/// </summary>\npublic class SingleFilePublish : ISingleFilePublish\n{\n    /// <summary>\n    /// \u89e3\u51b3\u5355\u6587\u4ef6\u4e0d\u80fd\u626b\u63cf\u7684\u7a0b\u5e8f\u96c6\n    /// </summary>\n    /// <remarks>\u548c <see cref="IncludeAssemblyNames"/> \u53ef\u540c\u65f6\u914d\u7f6e</remarks>\n    /// <returns></returns>\n    public Assembly[] IncludeAssemblies()\n    {\n        // \u9700\u8981 Furion \u6846\u67b6\u626b\u63cf\u54ea\u4e9b\u7a0b\u5e8f\u96c6\u5c31\u5199\u4e0a\u53bb\u5373\u53ef\n        return Array.Empty<Assembly>();\n    }\n\n    /// <summary>\n    /// \u89e3\u51b3\u5355\u6587\u4ef6\u4e0d\u80fd\u626b\u63cf\u7684\u7a0b\u5e8f\u96c6\u540d\u79f0\n    /// </summary>\n    /// <remarks>\u548c <see cref="IncludeAssemblies"/> \u53ef\u540c\u65f6\u914d\u7f6e</remarks>\n    /// <returns></returns>\n    public string[] IncludeAssemblyNames()\n    {\n        // \u9700\u8981 Furion \u6846\u67b6\u626b\u63cf\u54ea\u4e9b\u7a0b\u5e8f\u96c6\u5c31\u5199\u4e0a\u53bb\u5373\u53ef\n        return new[]\n        {\n            "YourProject.Application",\n            "YourProject.Core",\n            "YourProject.EntityFramework.Core",\n            "YourProject.Web.Core",\n            "Furion.Extras.ObjectMapper.Mapster"    // \u89e3\u51b3 Mapster \u5355\u6587\u4ef6\u5931\u6548\u95ee\u9898\uff0cv3.5.3+\u7248\u672c\u540e\u65e0\u9700\u914d\u7f6e\n        };\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u914d\u7f6e\u8bf4\u660e",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"IncludeAssemblies")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"IncludeAssemblyNames")," \u7684\u533a\u522b\u662f\u524d\u8005\u662f\u5f00\u53d1\u8005\u76f4\u63a5\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"Assembley")," \u96c6\u5408\uff0c\u540e\u8005\u662f\u76f4\u63a5\u8fd4\u56de\u540d\u79f0\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u4f1a\u81ea\u52a8\u52a0\u8f7d\u7a0b\u5e8f\u96c6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u540c\u65f6\u914d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u5176\u4e2d\u4e00\u4e2a\u3002")),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u53ea\u914d\u7f6e\u542f\u7528\u4e00\u4e2a\uff0c\u5219\u53e6\u5916\u4e00\u4e2a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.Empty<Assembley>()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.Empty<string>()")," \u5373\u53ef\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u53d1\u5e03\u540e\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapster")," \u4e0d\u80fd\u6620\u5c04\u95ee\u9898\uff0c\u53ef\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Extras.ObjectMapper.Mapster")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"IncludeAssemblyNames")," \u96c6\u5408\u4e2d\u5373\u53ef\u3002",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"v3.5.3+")," \u7248\u672c\u540e\u65e0\u9700\u914d\u7f6e\u3002"))),(0,r.kt)("h2",{id:"3453-\u53d1\u5e03"},"34.5.3 \u53d1\u5e03"),(0,r.kt)("img",{src:(0,i.Z)("img/sf1.png")}),(0,r.kt)("img",{src:(0,i.Z)("img/sf2.png")}),(0,r.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u65e0\u9700\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},".pdb")," \u8c03\u8bd5\u5305\u53ef\u5728\u751f\u6210\u4e2d\u7981\u7528\u5373\u53ef\u3002"),(0,r.kt)("img",{src:(0,i.Z)("img/sf3.png")})),(0,r.kt)("h2",{id:"3454-\u81ea\u5b9a\u4e49\u542f\u52a8\u7aef\u53e3"},"34.5.4 \u81ea\u5b9a\u4e49\u542f\u52a8\u7aef\u53e3"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5355\u6587\u4ef6\u53d1\u5e03\u76d1\u542c\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:5001"),"\uff0c\u5982\u679c\u9700\u8981\u4fee\u6539\uff0c\u53ef\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"program.cs")," \u4e2d\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'var builder = WebApplication.CreateBuilder(args).Inject();\nbuilder.WebHost.UseUrls("https://*:8089");\nvar app = builder.Build();\napp.Run();\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:8089")," \u8bbf\u95ee\u3002"),(0,r.kt)("h2",{id:"3455-pm2-\u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72"},"34.5.5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"pm2")," \u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72"),(0,r.kt)("h3",{id:"34551-\u8fd0\u884c\u5f0a\u7aef"},"34.5.5.1 \u8fd0\u884c\u5f0a\u7aef"),(0,r.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u5c06\u5e94\u7528\u7a0b\u5e8f\u53d1\u5e03\u6210\u5355\u6587\u4ef6\u540e\uff0c\u9700\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"XXXXX.exe")," \u8fdb\u884c\u542f\u52a8\uff0c\u8fd9\u65f6\u5019\u7a0b\u5e8f\u81ea\u52a8\u6253\u5f00\u7ec8\u7aef\uff08\u63a7\u5236\u53f0\uff09\uff0c\u4e4b\u540e\u6839\u636e\u63d0\u793a\u5728\u6d4f\u89c8\u5668\u4e0a\u6253\u5f00\u5bf9\u5e94\u7684\u5730\u5740\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u6709\u4ee5\u4e0b\u95ee\u9898\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4fdd\u8bc1\u7ec8\u7aef/\u63a7\u5236\u53f0\u4e00\u76f4\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u7ec8\u7aef/\u63a7\u5236\u53f0\u6709\u65f6\u5019\u4f1a\u51fa\u73b0\u5047\u6b7b\u7684\u60c5\u51b5\uff0c\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u65e0\u6cd5\u8bbf\u95ee"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5b9e\u65f6\u76d1\u542c\u5e94\u7528\u7a0b\u5e8f\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff08\u5982 CPU\uff0c\u5185\u5b58\uff0c\u65e5\u5fd7\u7b49\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u6620\u5c04\u7aef\u53e3\u542f\u52a8"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u53d8\u5f97\u590d\u6742")),(0,r.kt)("h3",{id:"34552-pm2-\u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72"},"34.5.5.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"pm2")," \u5b88\u62a4\u8fdb\u7a0b\u90e8\u7f72"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u63a8\u8350 ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeJS")," \u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u5de5\u5177 ",(0,r.kt)("inlineCode",{parentName:"p"},"pm2")," ",(0,r.kt)("a",{parentName:"p",href:"https://pm2.keymetrics.io/"},"https://pm2.keymetrics.io/"),"\uff0c\u901a\u8fc7\u8be5\u5de5\u5177\u53ef\u4ee5\u89e3\u51b3\u4e0a\u8ff0\u7684\u6240\u6709\u95ee\u9898\u3002"),(0,r.kt)("h4",{id:"\u5fc5\u8981\u6761\u4ef6"},"\u5fc5\u8981\u6761\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7cfb\u7edf\u5fc5\u987b\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"strong"},"NodeJS")," \u73af\u5883 ",(0,r.kt)("a",{parentName:"strong",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")))),(0,r.kt)("p",null,"\u76f8\u4fe1\u5927\u90e8\u5206\u4eba\u7535\u8111\u90fd\u5df2\u7ecf\u5b89\u88c5\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"strong"},"yarn")," \u5168\u5c40\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"strong"},"pm2")," \u5de5\u5177"))),(0,r.kt)("p",null,"npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"npm install pm2@latest -g\n")),(0,r.kt)("p",null,"yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"yarn global add pm2\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f"))),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pm2")," \u975e\u5e38\u7b80\u5355\u5c31\u53ef\u4ee5\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 start --name pms PMS.Web.Entry.exe\n")),(0,r.kt)("admonition",{title:"\u6307\u5b9a\u7aef\u53e3",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u9700\u6307\u5b9a\u7aef\u53e3\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 start --name pms PMS.Web.Entry.exe -- --urls=https://localhost:8089\n")),(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u540e\u9762\u53ef\u4ee5\u5199\u5b8c\u6574\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," \u547d\u4ee4\u3002")),(0,r.kt)("admonition",{title:"\u547d\u4ee4\u8bf4\u660e",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"pms.exe")," \u4e3a\u9879\u76ee\u53d1\u5e03\u540e\u7684\u542f\u52a8\u5c42\u540d\u79f0\uff0c\u5982\u679c\u540d\u79f0\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"\u7a7a\u683c"),"\uff0c\u5219\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u88f9\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},'"p ms.exe"'),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--name")," \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pm2")," \u4e2d\u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"start")," \u540e\u9762\u8ddf\u7740\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," \u6587\u4ef6\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"linux/macos")," \u4e0b\u65e0\u9700\u6307\u5b9a\u540e\u7f00\u540d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u542f\u52a8\u6210\u529f\u540e\u5373\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u6307\u5b9a\u7aef\u53e3\uff0c\u901a\u5e38\u662f ",(0,r.kt)("inlineCode",{parentName:"strong"},"http://localhost:5000"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"PS C:\\Users\\bqrjsoft\\Desktop\\pms> pm2 start --name pms PMS.Web.Entry.exe\n[PM2] Starting C:\\Users\\bqrjsoft\\Desktop\\pms\\PMS.Web.Entry.exe in fork_mode (1 instance)\n[PM2] Done.\n\u250c\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id  \u2502 name   \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21ba    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0   \u2502 pms    \u2502 default     \u2502 N/A     \u2502 fork    \u2502 41764    \u2502 0s     \u2502 0    \u2502 online    \u2502 0%       \u2502 85.0mb   \u2502 bqrjsoft \u2502 disabled \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nPS C:\\Users\\bqrjsoft\\Desktop\\pms>\n")),(0,r.kt)("img",{src:(0,i.Z)("img/sf30.png")}),(0,r.kt)("h3",{id:"34553-pm2-\u5e38\u89c1\u64cd\u4f5c"},"34.5.5.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"pm2")," \u5e38\u89c1\u64cd\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 monit\n")),(0,r.kt)("img",{src:(0,i.Z)("img/sf4.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u663e\u793a\u8fd0\u884c\u65e5\u5fd7"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 logs\n")),(0,r.kt)("img",{src:(0,i.Z)("img/sf5.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u67e5\u770b\u5e94\u7528\u4fe1\u606f"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 info pms\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"pms")," \u4e3a\u60a8\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"--name")," \u540d\u79f0\u3002"),(0,r.kt)("img",{src:(0,i.Z)("img/sf6.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u968f\u673a\u542f\u52a8"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pm2 startup\npm2 save\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Windows")," \u4e0b\u968f\u673a\u542f\u52a8"),(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pm2-windows-startup"},"pm2-windows-startup"),"\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"npm install pm2-windows-startup -g\npm2-startup install\npm2 save\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5176\u4ed6\u64cd\u4f5c"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"// \u91cd\u542f\u5e94\u7528\npm2 restart app_name\n\n// \u91cd\u8f7d\u5e94\u7528\npm2 reload app_name\n\n// \u505c\u6b62\u5e94\u7528\npm2 stop app_name\n\n// \u5220\u9664\u5e94\u7528\npm2 delete app_name\n")),(0,r.kt)("p",null,"\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"pm2")," \u6587\u6863\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://pm2.keymetrics.io/docs/usage/quick-start/"},"https://pm2.keymetrics.io/docs/usage/quick-start/")),(0,r.kt)("h2",{id:"3456-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.5.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}d.isMDXComponent=!0}}]);