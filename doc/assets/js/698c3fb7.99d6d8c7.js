"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4249],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),u=m(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return a?n.createElement(k,i(i({ref:e},g),{},{components:a})):n.createElement(k,i({ref:e},g))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8229:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var n=a(7462),r=(a(7294),a(3905)),l=a(4996);const i={id:"template",title:"2.2 \u5b98\u65b9\u811a\u624b\u67b6",sidebar_label:"2.2 \u5b98\u65b9\u811a\u624b\u67b6"},p=void 0,o={unversionedId:"template",id:"template",title:"2.2 \u5b98\u65b9\u811a\u624b\u67b6",description:"\u811a\u624b\u67b6\u4e0d\u662f\u5b89\u88c5\u5728\u9879\u76ee\u4e2d\u7684\uff01 \u800c\u662f\u901a\u8fc7 CMD \u6216 PowerShell \u5b89\u88c5\u5230\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u3002",source:"@site/docs/template.mdx",sourceDirName:".",slug:"/template",permalink:"/docs/template",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/template.mdx",tags:[],version:"current",frontMatter:{id:"template",title:"2.2 \u5b98\u65b9\u811a\u624b\u67b6",sidebar_label:"2.2 \u5b98\u65b9\u811a\u624b\u67b6"},sidebar:"docs",previous:{title:"2.1 ASP.NET 7 \u96c6\u6210 \u2728",permalink:"/docs/get-start-net7"},next:{title:"2.3 \u624b\u52a8\u642d\u5efa\u5206\u5c42",permalink:"/docs/reference"}},m={},g=[{value:"2.2.1 \u811a\u624b\u67b6",id:"221-\u811a\u624b\u67b6",level:2},{value:"2.2.1.1 <code>Furion + EFCore</code>",id:"2211-furion--efcore",level:3},{value:"2.2.1.2 <code>Furion + SqlSugar</code>",id:"2212-furion--sqlsugar",level:3},{value:"2.2.2 \u5b89\u88c5\u811a\u624b\u67b6",id:"222-\u5b89\u88c5\u811a\u624b\u67b6",level:2},{value:"2.2.3 \u4f7f\u7528\u811a\u624b\u67b6",id:"223-\u4f7f\u7528\u811a\u624b\u67b6",level:2},{value:"2.2.4 \u811a\u624b\u67b6\u66f4\u65b0",id:"224-\u811a\u624b\u67b6\u66f4\u65b0",level:2},{value:"2.2.5 <code>Visual Studio</code> \u96c6\u6210",id:"225-visual-studio-\u96c6\u6210",level:2},{value:"2.2.6 <code>\u5173\u4e8e MVC \u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898</code>",id:"226-\u5173\u4e8e-mvc-\u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898",level:2},{value:"2.2.7 \u642d\u5efa\u811a\u624b\u67b6",id:"227-\u642d\u5efa\u811a\u624b\u67b6",level:2},{value:"2.2.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"228-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],s={toc:g};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u811a\u624b\u67b6\u4e0d\u662f\u5b89\u88c5\u5728\u9879\u76ee\u4e2d\u7684\uff01")," \u800c\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"PowerShell")," \u5b89\u88c5\u5230\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u3002")),(0,r.kt)("h2",{id:"221-\u811a\u624b\u67b6"},"2.2.1 \u811a\u624b\u67b6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u591a\u79cd ",(0,r.kt)("inlineCode",{parentName:"p"},"Web")," \u5e94\u7528\u7c7b\u578b\u7684\u811a\u624b\u67b6\uff0c\u65b9\u4fbf\u5927\u5bb6\u5feb\u901f\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5e94\u7528\u811a\u624b\u67b6\uff1a"),(0,r.kt)("h3",{id:"2211-furion--efcore"},"2.2.1.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Furion + EFCore")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6a21\u677f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Mvc/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.Template.Mvc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Mvc/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Mvc.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"furionmvc")),(0,r.kt)("td",{parentName:"tr",align:null},"Mvc \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Api/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.Template.Api"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Api/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Api.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"furionapi")),(0,r.kt)("td",{parentName:"tr",align:null},"WebApi \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.App/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.Template.App"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.App/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.App.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"furionapp")),(0,r.kt)("td",{parentName:"tr",align:null},"Mvc/WebApi \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Razor/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.Template.Razor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Razor/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Razor.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"furionrazor")),(0,r.kt)("td",{parentName:"tr",align:null},"RazorPages \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.RazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.Template.RazorWithWebApi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.RazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.RazorWithWebApi.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"furionrazorapi")),(0,r.kt)("td",{parentName:"tr",align:null},"RazorPages/WebApi \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Blazor/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.Template.Blazor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.Blazor/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.Blazor.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"furionblazor")),(0,r.kt)("td",{parentName:"tr",align:null},"Blazor \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.BlazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.Template.BlazorWithWebApi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.Template.BlazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.Template.BlazorWithWebApi.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"furionblazorapi")),(0,r.kt)("td",{parentName:"tr",align:null},"Blazor/WebApi \u6a21\u677f")))),(0,r.kt)("h3",{id:"2212-furion--sqlsugar"},"2.2.1.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Furion + SqlSugar")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6a21\u677f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u8bcd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Mvc/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.SqlSugar.Template.Mvc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Mvc/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.SqlSugar.Template.Mvc.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"fsmvc")),(0,r.kt)("td",{parentName:"tr",align:null},"Mvc \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Api/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.SqlSugar.Template.Api"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Api/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.SqlSugar.Template.Api.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"fsapi")),(0,r.kt)("td",{parentName:"tr",align:null},"WebApi \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.App/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.SqlSugar.Template.App"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.App/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.SqlSugar.Template.App.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"fsapp")),(0,r.kt)("td",{parentName:"tr",align:null},"Mvc/WebApi \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Razor/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.SqlSugar.Template.Razor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Razor/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.SqlSugar.Template.Razor.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"fsrazor")),(0,r.kt)("td",{parentName:"tr",align:null},"RazorPages \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.RazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.SqlSugar.Template.RazorWithWebApi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.RazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.SqlSugar.Template.RazorWithWebApi.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"fsrazorapi")),(0,r.kt)("td",{parentName:"tr",align:null},"RazorPages/WebApi \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Blazor/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.SqlSugar.Template.Blazor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.Blazor/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.SqlSugar.Template.Blazor.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"fsblazor")),(0,r.kt)("td",{parentName:"tr",align:null},"Blazor \u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.BlazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://shields.io/badge/-Nuget-yellow?cacheSeconds=604800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"Furion.SqlSugar.Template.BlazorWithWebApi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Furion.SqlSugar.Template.BlazorWithWebApi/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Furion.SqlSugar.Template.BlazorWithWebApi.svg?cacheSeconds=10800",alt:"nuget"}))),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"td"},"fsblazorapi")),(0,r.kt)("td",{parentName:"tr",align:null},"Blazor/WebApi \u6a21\u677f")))),(0,r.kt)("h2",{id:"222-\u5b89\u88c5\u811a\u624b\u67b6"},"2.2.2 \u5b89\u88c5\u811a\u624b\u67b6"),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Powershell")," \u6267\u884c\u6a21\u677f\u5b89\u88c5\u547d\u4ee4\uff08\u65b0\u7248\u672c ",(0,r.kt)("inlineCode",{parentName:"p"},"--install")," \u53ef\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"install"),"\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"// EFCore\ndotnet new --install Furion.Template.Api::4.8.4.8\n// SqlSugar\ndotnet new --install Furion.SqlSugar.Template.Api::4.8.4.8\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"SqlSugar")," \u811a\u624b\u67b6\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u811a\u624b\u67b6\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," \u5c42\u5305\u542b\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"DbContext.cs")," \u7c7b\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"DbContext.Instance")," \u5c31\u53ef\u4ee5\u83b7\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlSugarScope")," \u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6570\u636e\u5e93\u94fe\u63a5\u5b57\u7b26\u4e32\u5728\u542f\u52a8\u5c42 ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionConfigs")," \u8282\u70b9\u4e2d\u914d\u7f6e\uff0c\u5bf9\u5e94\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlSugar")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionConfig[]")," \u5bf9\u8c61\u3002")),(0,r.kt)("h2",{id:"223-\u4f7f\u7528\u811a\u624b\u67b6"},"2.2.3 \u4f7f\u7528\u811a\u624b\u67b6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers {1,4-6,9-11}",showLineNumbers:!0,"{1,4-6,9-11}":!0},"dotnet new furionapi -n \u9879\u76ee\u540d\u79f0 -f .NET\u7248\u672c\n\n# EFCore\uff1a\u652f\u6301\u521b\u5efa .NET5-7 \u7248\u672c\ndotnet new furionapi -n MyProject -f net5\ndotnet new furionapi -n MyProject -f net6\ndotnet new furionapi -n MyProject -f net7\n\n# SqlSugar\uff1a\u652f\u6301\u521b\u5efa .NET5-7 \u7248\u672c\ndotnet new fsapi -n MyProject -f net5\ndotnet new fsapi -n MyProject -f net6\ndotnet new fsapi -n MyProject -f net7\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u751f\u6210\u9879\u76ee\u4ee3\u7801\u4e86\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u751f\u6210\u4e4b\u540e\u63a8\u8350\u5c06\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"nuget")," \u5305\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e\u9879\u76ee\u540d\u79f0\u548c ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},".NET")," \u7248\u672c"),(0,r.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u811a\u624b\u67b6\u751f\u6210\u7684\u9879\u76ee\u540d\u79f0\u4e0d\u80fd\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"\u77ed\u6a2a\u7ebf")," \u7b49\u7279\u6b8a\u5b57\u7b26\uff0c\u5982\u6709\u8be5\u9700\u6c42\uff0c\u53ef\u5728\u751f\u6210\u4e4b\u540e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u8fdb\u884c\u624b\u52a8\u4fee\u6539\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"-f")," \u7248\u672c\u53c2\u6570\u6240\u6709\u9009\u9879\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"net5"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"net6"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"net7"),"\u3002")),(0,r.kt)("admonition",{title:"\u7279\u522b\u63d0\u9192",type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"furionapi")," \u5bf9\u5e94\u7684\u662f\u4e0a\u9762\u5217\u8868\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5173\u952e\u5b57"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet new --list")," \u67e5\u770b\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet new \u5173\u952e\u5b57 --help")," \u67e5\u770b\u66f4\u591a\u53c2\u6570\u3002")),(0,r.kt)("h2",{id:"224-\u811a\u624b\u67b6\u66f4\u65b0"},"2.2.4 \u811a\u624b\u67b6\u66f4\u65b0"),(0,r.kt)("p",null,"\u53ea\u9700\u8981\u91cd\u65b0\u5b89\u88c5\u6700\u65b0\u7248\u66ff\u6362\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"dotnet new --install Furion.Template.Api::4.8.4.8\n")),(0,r.kt)("p",null,"\u4e0d\u5e26\u7248\u672c\u53f7\u603b\u662f\u5b89\u88c5\u6700\u65b0\u7684\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"225-visual-studio-\u96c6\u6210"},"2.2.5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Visual Studio")," \u96c6\u6210"),(0,r.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u5b89\u88c5\u811a\u624b\u67b6\u540e\uff0c\u5347\u7ea7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u5230\u6700\u65b0\u7248\u53ef\u4f7f\u7528\u53ef\u89c6\u5316\u65b9\u5f0f\u521b\u5efa\u54e6\u3002"),(0,r.kt)("img",{src:(0,l.Z)("img/ksh.png")}),(0,r.kt)("h2",{id:"226-\u5173\u4e8e-mvc-\u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898"},"2.2.6 ",(0,r.kt)("inlineCode",{parentName:"h2"},"\u5173\u4e8e MVC \u6dfb\u52a0\u533a\u57df\u51fa\u9519\u95ee\u9898")),(0,r.kt)("p",null,"\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u5e95\u5c42\u4f9d\u8d56\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.CodeAnalysis.CSharp")," \u5305\uff0c\u6240\u4ee5\u53ef\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Viusal Studio")," \u7684\u754c\u9762\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Area \u533a\u57df")," \u65f6\u4f1a\u51fa\u9519\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web.Entry")," \u5c42\u5b89\u88c5\u4e0b\u9762\u51e0\u4e2a\u5305\u5373\u53ef\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.CSharp.Features")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.CSharp.Scripting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.VisualBasic.Features")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.CodeAnalysis.Workspaces.MSBuild")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.VisualStudio.Web.CodeGeneration.Design"))),(0,r.kt)("h2",{id:"227-\u642d\u5efa\u811a\u624b\u67b6"},"2.2.7 \u642d\u5efa\u811a\u624b\u67b6"),(0,r.kt)("p",null,"\u811a\u624b\u67b6\u53ef\u4ee5\u6781\u5927\u7684\u63d0\u9ad8\u6211\u4eec\u642d\u5efa\u65b0\u9879\u76ee\u7684\u901f\u5ea6\uff0c\u63a8\u8350\u4e24\u7bc7\u6587\u7ae0\u7ed9\u5927\u5bb6\u5b66\u4e60\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/laozhang-is-phi/p/10205495.html"},"https://www.cnblogs.com/laozhang-is-phi/p/10205495.html")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/catcher1994/p/10061470.html"},"https://www.cnblogs.com/catcher1994/p/10061470.html")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a8\u8350\u76f4\u63a5\u62f7\u8d1d ",(0,r.kt)("inlineCode",{parentName:"strong"},"Furion")," \u811a\u624b\u67b6\u6587\u4ef6\u5939\u8fdb\u884c\u4fee\u6539\uff0c\u53ef\u907f\u514d\u5f88\u591a\u95ee\u9898\u3002")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/tree/v4/templates"},"Furion \u811a\u624b\u67b6\u6e90\u7801")),(0,r.kt)("h2",{id:"228-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.2.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6a21\u677f\u77e5\u8bc6")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-new"},"dotnet-new \u6a21\u677f")," \u7ae0\u8282\u3002")))}u.isMDXComponent=!0}}]);