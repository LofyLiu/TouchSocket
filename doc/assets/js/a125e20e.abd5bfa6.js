"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>c});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(d,i(i({ref:n},g),{},{components:t})):a.createElement(d,i({ref:n},g))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var a=t(7462),o=(t(7294),t(3905)),r=t(4996);const i={slug:"global-usings",title:"7. GlobalUsings \u7684\u4f7f\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]},l=void 0,s={permalink:"/blog/global-usings",editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/blog/2022-05-31-global-usings.mdx",source:"@site/blog/2022-05-31-global-usings.mdx",title:"7. GlobalUsings \u7684\u4f7f\u7528",description:"\u7b80\u4ecb",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[{label:"furion",permalink:"/blog/tags/furion"},{label:"furos",permalink:"/blog/tags/furos"},{label:".net",permalink:"/blog/tags/net"},{label:".netcore",permalink:"/blog/tags/netcore"},{label:".net5",permalink:"/blog/tags/net-5"},{label:".net6",permalink:"/blog/tags/net-6"}],readingTime:2.715,hasTruncateMarker:!1,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://www.chinadot.net",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"global-usings",title:"7. GlobalUsings \u7684\u4f7f\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]},nextItem:{title:"6. .NET 6 Preview 7 \u5c1d\u9c9c",permalink:"/blog/net6-preview7"}},p={authorsImageUrls:[void 0]},g=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u5fc5\u8981\u914d\u7f6e",id:"\u5fc5\u8981\u914d\u7f6e",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u9ed8\u8ba4\u5168\u5c40 <code>using</code>",id:"\u9ed8\u8ba4\u5168\u5c40-using",level:3}],u={toc:g};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET6/C#10")," \u4e4b\u540e\uff0c\u5fae\u8f6f\u65b0\u589e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings")," \u673a\u5236\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u6587\u4ef6\uff0c\u628a\u5e38\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u653e\u7f6e\u5176\u4e2d\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u6240\u5728\u7684\u9879\u76ee ",(0,o.kt)("inlineCode",{parentName:"p"},".cs")," \u6587\u4ef6\u5c31\u65e0\u9700\u91cd\u590d ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u4e86\uff0c\u5927\u5927\u7684\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u4e5f\u8ba9\u4ee3\u7801\u53d8\u7684\u66f4\u52a0\u7b80\u6d01\u3002"),(0,o.kt)("h3",{id:"\u5fc5\u8981\u914d\u7f6e"},"\u5fc5\u8981\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u542f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"GlobalUsings")," \u673a\u5236\u9700\u8981\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u4f60\u9700\u8981\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"li"},"using")," \u7684\u9879\u76ee\u5c42\u6839\u76ee\u5f55\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"GlobalUsings.cs")," \u6587\u4ef6\uff0c\u5982\u679c\u591a\u4e2a\u9879\u76ee\u5c42\u9700\u8981\uff0c\u5219\u6bcf\u4e2a\u5c42\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"GlobalUsings.cs")),(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},".csproj")," \u6587\u4ef6\uff0c\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"li"},"<ImplicitUsings>enable</ImplicitUsings>"),"\uff0c\u6ce8\u610f\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"<PropertyGroup>")," \u4e2d\u6dfb\u52a0\uff0c\u901a\u5e38\u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"<TargetFramework>")," \u540c\u7236\u540c\u7ea7")),(0,o.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,o.kt)("p",null,"\u914d\u7f6e\u4e4b\u540e\uff0c\u73b0\u5728\u5c31\u53ef\u4ee5\u628a\u5e38\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u653e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u4e2d\u4e86\uff0c\u5199\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Furion \u63a8\u8350\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4"',showLineNumbers:!0,title:'"Furion','\u63a8\u8350\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4"':!0},"global using Furion;\nglobal using Furion.DatabaseAccessor;\nglobal using Furion.DataEncryption;\nglobal using Furion.DataValidation;\nglobal using Furion.DependencyInjection;\nglobal using Furion.DynamicApiController;\nglobal using Furion.Extensions;\nglobal using Furion.FriendlyException;\nglobal using Mapster;\nglobal using Microsoft.AspNetCore.Authorization;\nglobal using Microsoft.AspNetCore.Http;\nglobal using Microsoft.AspNetCore.Mvc;\nglobal using Microsoft.CodeAnalysis;\nglobal using Microsoft.EntityFrameworkCore;\nglobal using System.ComponentModel.DataAnnotations;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5fc5\u987b\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"strong"},"global")," \u5f00\u5934\uff01")),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e00\u822c\u63a8\u8350\u628a\u5b9e\u4f53\u7c7b\u7684\u547d\u540d\u7a7a\u95f4\u4e5f\u653e\u8fdb\u53bb\uff0c\u56e0\u4e3a\u4ed3\u50a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"IRepository<T>")," \u4f7f\u7528\u7684\u9891\u7387\u975e\u5e38\u9ad8\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u53e6\u5916\u63a8\u8350\u5927\u5bb6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u4e2d\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeMaid")," \u63d2\u4ef6\u54e6\uff0c\u81ea\u52a8\u6e05\u7406\u89e3\u51b3\u65b9\u6848\u6240\u6709\u65e0\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"using"),"\uff0c\u7ed3\u5408 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u975e\u5e38\u68d2\uff01")),(0,o.kt)("admonition",{title:"\u4e2a\u522b\u60c5\u51b5",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u53ef\u80fd\u7531\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u7248\u672c\u7684\u95ee\u9898\uff0c\u5bfc\u81f4 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u5b9a\u4e49\u51fa\u9519\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u540e\u9762\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"global::"),"\uff0c\u5982\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"global using global::Furion;\n"))),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},"// \u65e0\u9700 using Furion \u7684\u547d\u540d\u7a7a\u95f4\u4e86\u54e6\uff0c\u6e05\u723d\u4e86\u4e0d\u5c11\n\nnamespace Your.Application;\n\npublic class DefaultAppService : IDynamicApiController\n{\n    private readonly IRepository<BoardCard> _boardCardRepository;\n    private readonly IRepository<BoardGroup> _boardGroupRepository;\n    private readonly IRepository<BoardCardAttachment> _boardCardAttachmentRepository;\n    private readonly IRepository<BoardCardUser> _boardCardUserRepository;\n}\n\n// ....\n")),(0,o.kt)("img",{src:(0,r.Z)("img/cd2223.png")}),(0,o.kt)("h3",{id:"\u9ed8\u8ba4\u5168\u5c40-using"},"\u9ed8\u8ba4\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"h3"},"using")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u4e0a\u5fae\u8f6f\u5df2\u7ecf\u81ea\u52a8\u628a\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"using")," \u5728\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e2d\u81ea\u52a8\u8865\u4e0a\u4e86"),"\uff0c\u8def\u5f84\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee/obj/Debug/net6.0/\u9879\u76ee.GlobalUsings.cs")," \u6587\u4ef6\u4e2d\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// <auto-generated/>\nglobal using global::System;\nglobal using global::System.Collections.Generic;\nglobal using global::System.IO;\nglobal using global::System.Linq;\nglobal using global::System.Net.Http;\nglobal using global::System.Threading;\nglobal using global::System.Threading.Tasks;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e5f\u5c31\u662f\u4ee5\u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"using")," \u65e0\u9700\u5199\u5728\u4f60\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"GlobalUsings.cs")," \u4e2d\u4e86\uff0c\u5fae\u8f6f\u4f1a\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u5408\u5e76\u3002")))}m.isMDXComponent=!0}}]);