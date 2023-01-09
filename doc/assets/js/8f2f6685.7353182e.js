"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8387],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),f=c(n),m=o,h=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(h,l(l({ref:e},u),{},{components:n})):r.createElement(h,l({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5026:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},l=void 0,i={permalink:"/blog/httpcontext",editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/blog/2021-02-01-httpcontext.mdx",source:"@site/blog/2021-02-01-httpcontext.mdx",title:"1. HttpContext \u5e94\u7528",description:"HttpContext \u91cd\u5927\u8c03\u6574",date:"2021-02-01T00:00:00.000Z",formattedDate:"February 1, 2021",tags:[{label:"furion",permalink:"/blog/tags/furion"},{label:"furos",permalink:"/blog/tags/furos"},{label:".net",permalink:"/blog/tags/net"},{label:".netcore",permalink:"/blog/tags/netcore"},{label:".net5",permalink:"/blog/tags/net-5"},{label:"httpcontext",permalink:"/blog/tags/httpcontext"}],readingTime:1.545,hasTruncateMarker:!0,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://www.chinadot.net",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},prevItem:{title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/blog/fileupload-download"}},p={authorsImageUrls:[void 0]},c=[{value:"HttpContext \u91cd\u5927\u8c03\u6574",id:"httpcontext-\u91cd\u5927\u8c03\u6574",level:2},{value:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",level:2}],u={toc:c};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"httpcontext-\u91cd\u5927\u8c03\u6574"},"HttpContext \u91cd\u5927\u8c03\u6574"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET")," \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u867d\u7136\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u65b9\u5f0f\u83b7\u53d6\u3002"),(0,o.kt)("h2",{id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"},"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"))}s.isMDXComponent=!0}}]);