"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9742],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||k[d]||a;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={id:"jwt",title:"14. JWTEncryption \u9759\u6001\u7c7b",sidebar_label:"14. JWTEncryption \u9759\u6001\u7c7b"},i=void 0,l={unversionedId:"global/jwt",id:"global/jwt",title:"14. JWTEncryption \u9759\u6001\u7c7b",description:"14.1 \u751f\u6210 Token",source:"@site/docs/global/jwt.mdx",sourceDirName:"global",slug:"/global/jwt",permalink:"/docs/global/jwt",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/jwt.mdx",tags:[],version:"current",frontMatter:{id:"jwt",title:"14. JWTEncryption \u9759\u6001\u7c7b",sidebar_label:"14. JWTEncryption \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"13. FS \u9759\u6001\u7c7b",permalink:"/docs/global/fs"},next:{title:"15. TP \u9759\u6001\u7c7b",permalink:"/docs/global/tp"}},c={},s=[{value:"14.1 \u751f\u6210 <code>Token</code>",id:"141-\u751f\u6210-token",level:2},{value:"14.2 \u751f\u6210\u5237\u65b0 <code>Token</code>",id:"142-\u751f\u6210\u5237\u65b0-token",level:2},{value:"14.3 \u6839\u636e\u8fc7\u671f <code>Token</code> \u4ea4\u6362\u65b0 <code>Token</code>",id:"143-\u6839\u636e\u8fc7\u671f-token-\u4ea4\u6362\u65b0-token",level:2},{value:"14.4 \u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0 <code>Token</code>",id:"144-\u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0-token",level:2},{value:"14.5 \u9a8c\u8bc1 <code>Token</code> \u6709\u6548\u6027",id:"145-\u9a8c\u8bc1-token-\u6709\u6548\u6027",level:2},{value:"14.6 \u9a8c\u8bc1\u8bf7\u6c42\u4e2d <code>Token</code> \u6709\u6548\u6027",id:"146-\u9a8c\u8bc1\u8bf7\u6c42\u4e2d-token-\u6709\u6548\u6027",level:2},{value:"14.7 \u8bfb\u53d6 <code>Token</code> \u4fe1\u606f\uff08\u4e0d\u542b\u9a8c\u8bc1\uff09",id:"147-\u8bfb\u53d6-token-\u4fe1\u606f\u4e0d\u542b\u9a8c\u8bc1",level:2}],p={toc:s};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"141-\u751f\u6210-token"},"14.1 \u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u8bfb\u53d6\u914d\u7f6e\u4fe1\u606f\u751f\u6210 Token\nvar token = JWTEncryption.Encrypt(new Dictionary<string, object> { { "UserId", 1 }  });\n\n// \u914d\u7f6e Token \u8fc7\u671f\u65f6\u95f4\nvar token = JWTEncryption.Encrypt(new Dictionary<string, object> { { "UserId", 1 }  }, 20);\n\n// \u914d\u7f6e Token \u5bc6\u94a5\nvar token = JWTEncryption.Encrypt("monksoul@outlook.com", new Dictionary<string, object> { { "UserId", 1 }  });\n\n// \u914d\u7f6e\u7b97\u6cd5\nvar token = JWTEncryption.Encrypt("monksoul@outlook.com", new Dictionary<string, object> { { "UserId", 1 }  }, SecurityAlgorithms.HmacSha256);\n')),(0,r.kt)("h2",{id:"142-\u751f\u6210\u5237\u65b0-token"},"14.2 \u751f\u6210\u5237\u65b0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var refreshToken = JWTEncryption.GenerateRefreshToken("token", 43200);\n')),(0,r.kt)("h2",{id:"143-\u6839\u636e\u8fc7\u671f-token-\u4ea4\u6362\u65b0-token"},"14.3 \u6839\u636e\u8fc7\u671f ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")," \u4ea4\u6362\u65b0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var newToken = JWTEncryption.Exchange("\u8fc7\u671f token", "\u4e0e\u4e4b\u5339\u914d\u7684\u5237\u65b0 token", [\u65b0\u7684token\u8fc7\u671f\u65f6\u95f4], [\u5bb9\u9519\u503c]);\n')),(0,r.kt)("h2",{id:"144-\u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0-token"},"14.4 \u6388\u6743\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u5237\u65b0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"JWTEncryption.AutoRefreshToken(context, httpContext);\n")),(0,r.kt)("h2",{id:"145-\u9a8c\u8bc1-token-\u6709\u6548\u6027"},"14.5 \u9a8c\u8bc1 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")," \u6709\u6548\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var (isVaild, tokenData, validationResult) = JWTEncryption.Validate("token");\n')),(0,r.kt)("h2",{id:"146-\u9a8c\u8bc1\u8bf7\u6c42\u4e2d-token-\u6709\u6548\u6027"},"14.6 \u9a8c\u8bc1\u8bf7\u6c42\u4e2d ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")," \u6709\u6548\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var isValid = JWTEncryption.ValidateJwtBearerToken(httpContext, out tokenInfo);\n")),(0,r.kt)("h2",{id:"147-\u8bfb\u53d6-token-\u4fe1\u606f\u4e0d\u542b\u9a8c\u8bc1"},"14.7 \u8bfb\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Token")," \u4fe1\u606f\uff08\u4e0d\u542b\u9a8c\u8bc1\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var tokenInfo = JWTEncryption.ReadJwtToken("token");\n\n// 3.8.2+ \u4e4b\u540e\u652f\u6301\u66f4\u5f3a\u5927\u7684\u8bfb\u53d6\nvar securityToken = JWTEncryption.SecurityReadJwtToken("token");\n')))}k.isMDXComponent=!0}}]);