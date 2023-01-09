"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[988],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(v,i(i({ref:r},l),{},{components:t})):n.createElement(v,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9283:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},i=void 0,c={unversionedId:"global/scoped",id:"global/scoped",title:"11. Scoped \u9759\u6001\u7c7b",description:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",source:"@site/docs/global/scoped.mdx",sourceDirName:"global",slug:"/global/scoped",permalink:"/docs/global/scoped",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/scoped.mdx",tags:[],version:"current",frontMatter:{id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"10. JSON \u9759\u6001\u7c7b",permalink:"/docs/global/json"},next:{title:"12. SpareTime \u9759\u6001\u7c7b",permalink:"/docs/global/sparetime"}},p={},s=[{value:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",level:2},{value:"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",level:2},{value:"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c",level:2},{value:"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c",level:2}],l={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4"},"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u540c\u6b65\nScoped.Create((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n\n// \u5f02\u6b65\nawait Scoped.CreateAsync(async (factory, scope) => {\n     var services = scope.ServiceProvider;\n     await _calcService.GetAsync();\n     // ...\n})\n")),(0,o.kt)("admonition",{title:"\u6570\u636e\u5e93\u64cd\u4f5c\u6ce8\u610f",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f5c\u7528\u57df\u4e2d\u5bf9",(0,o.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u6709\u4efb\u4f55\u53d8\u66f4\u64cd\u4f5c"),"\uff0c\u9700\u624b\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216\u5e26 ",(0,o.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u65b9\u6cd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Scoped.CreateUow(handler)")," \u4ee3\u66ff\u3002")),(0,o.kt)("h2",{id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df"},"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u540c\u6b65\nScoped.CreateUow((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n\n// \u5f02\u6b65\nawait Scope.CreateUowAsync(async (factory, scope) => {\n     var services = scope.ServiceProvider;\n     await _calcService.GetAsync();\n     // ...\n});\n")),(0,o.kt)("p",null,"\u6b64\u65b9\u6cd5\u5c06\u5728\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u81ea\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges()")),(0,o.kt)("h2",{id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c"},"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09"),(0,o.kt)("admonition",{title:"\u79fb\u9664\u58f0\u660e",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion v2.18+")," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1}",showLineNumbers:!0,"":!0,"{1}":!0},'var obj = Scoped.CreateRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n')),(0,o.kt)("h2",{id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c"},"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09"),(0,o.kt)("admonition",{title:"\u79fb\u9664\u58f0\u660e",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion v2.18+")," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var obj = Scoped.CreateUowRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n')))}d.isMDXComponent=!0}}]);