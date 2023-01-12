"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",sidebar_label:"2. \u8de8\u57df\u914d\u7f6e"},o=void 0,l={unversionedId:"settings/corsaccessorsettings",id:"settings/corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/corsaccessorsettings.mdx",sourceDirName:"settings",slug:"/settings/corsaccessorsettings",permalink:"/touchsocket/docs/settings/corsaccessorsettings",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/settings/corsaccessorsettings.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673350749,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{id:"corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",sidebar_label:"2. \u8de8\u57df\u914d\u7f6e"}},s={},c=[{value:"2.1 \u5173\u4e8e\u914d\u7f6e",id:"21-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"2.2 \u914d\u7f6e\u4fe1\u606f",id:"22-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"2.3 \u914d\u7f6e\u793a\u4f8b",id:"23-\u914d\u7f6e\u793a\u4f8b",level:2},{value:"2.4 \u4f7f\u7528 <code>axios</code> \u524d\u7aef\u6ce8\u610f\u4e8b\u9879",id:"24-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,i.kt)("a",{parentName:"p",href:"../jsonschema"},"2.7 JSON Schema \u4f7f\u7528"),"\u3011"),(0,i.kt)("p",{parentName:"admonition"},"\u53ea\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'{\n  "$schema": "https://gitee.com/rrqm_home/TouchSocket/raw/v4/schemas/v4/TouchSocket-schema.json"\n}\n'))),(0,i.kt)("h2",{id:"21-\u5173\u4e8e\u914d\u7f6e"},"2.1 \u5173\u4e8e\u914d\u7f6e"),(0,i.kt)("p",null,"\u8de8\u57df\u914d\u7f6e\u6307\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u5ba2\u6237\u7aef\u8de8\u57df\u914d\u7f6e\u9009\u9879\u3002"),(0,i.kt)("h2",{id:"22-\u914d\u7f6e\u4fe1\u606f"},"2.2 \u914d\u7f6e\u4fe1\u606f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CorsAccessorSettings"),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PolicyName"),"\uff1a\u8de8\u57df\u7b56\u7565\u540d\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u5fc5\u586b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"App.Cors.Policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithOrigins"),"\uff1a\u5141\u8bb8\u8de8\u57df\u7684\u57df\u540d\u5217\u8868\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"*")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithHeaders"),"\uff1a\u8bf7\u6c42\u8868\u5934\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\u8868\u5934\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithExposedHeaders"),"\uff1a\u8bbe\u7f6e\u5ba2\u6237\u7aef\u53ef\u83b7\u53d6\u7684\u54cd\u5e94\u6807\u5934\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},'["access-token", "x-access-token"]')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithMethods"),"\uff1a\u8bbe\u7f6e\u8de8\u57df\u5141\u8bb8\u8bf7\u6c42\u8c13\u8bcd\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AllowCredentials"),"\uff1a\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u4e2d\u7684\u51ed\u636e\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetPreflightMaxAge"),"\uff1a\u8bbe\u7f6e\u9884\u68c0\u8fc7\u671f\u65f6\u95f4\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"int")," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c ",(0,i.kt)("inlineCode",{parentName:"li"},"24\u5c0f\u65f6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FixedClientToken"),"\uff1a\u662f\u5426\u9ed8\u8ba4\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"WithExposedHeaders"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SignalRSupport"),"\uff1a\u662f\u5426\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"SignalR")," \u8de8\u57df\u652f\u6301\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))))),(0,i.kt)("h2",{id:"23-\u914d\u7f6e\u793a\u4f8b"},"2.3 \u914d\u7f6e\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "CorsAccessorSettings": {\n    "PolicyName": "MyPolicy",\n    "WithOrigins": ["http://localhost:4200", "https://TouchSocket.icu"]\n  }\n}\n')),(0,i.kt)("h2",{id:"24-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879"},"2.4 \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h2"},"axios")," \u524d\u7aef\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u7531\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"axios")," \u5bf9\u8de8\u57df\u6709\u7279\u5b9a\u7684\u9700\u8981\uff0c\u9700\u8981\u54cd\u5e94\u62a5\u6587\u4e2d\u6dfb\u52a0\u7279\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," \u624d\u80fd\u653e\u884c\uff0c\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Expose-Headers: xxxxx"),"\uff0c\u6240\u4ee5\uff0c\u5982\u679c\u524d\u7aef\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"axios")," \u8bf7\u6c42\uff0c\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "CorsAccessorSettings": {\n    "WithExposedHeaders": ["X-Pagination","access-token","x-access-token"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);