"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||r;return n?i.createElement(c,l(l({ref:t},s),{},{components:n})):i.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={id:"jwtsettings",title:"9. JWT \u914d\u7f6e",sidebar_label:"9. JWT \u914d\u7f6e"},l=void 0,o={unversionedId:"settings/jwtsettings",id:"settings/jwtsettings",title:"9. JWT \u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/jwtsettings.mdx",sourceDirName:"settings",slug:"/settings/jwtsettings",permalink:"/touchsocket/docs/settings/jwtsettings",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/settings/jwtsettings.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673350749,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{id:"jwtsettings",title:"9. JWT \u914d\u7f6e",sidebar_label:"9. JWT \u914d\u7f6e"}},p={},m=[{value:"9.1 \u5173\u4e8e\u914d\u7f6e",id:"91-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"9.2 \u914d\u7f6e\u4fe1\u606f",id:"92-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"9.3 \u914d\u7f6e\u793a\u4f8b",id:"93-\u914d\u7f6e\u793a\u4f8b",level:2}],s={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,a.kt)("a",{parentName:"p",href:"../jsonschema"},"2.7 JSON Schema \u4f7f\u7528"),"\u3011"),(0,a.kt)("p",{parentName:"admonition"},"\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'{\n  "$schema": "https://gitee.com/rrqm_home/TouchSocket/raw/v4/schemas/v4/TouchSocket-schema.json"\n}\n'))),(0,a.kt)("h2",{id:"91-\u5173\u4e8e\u914d\u7f6e"},"9.1 \u5173\u4e8e\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," \u914d\u7f6e\u6307\u7684\u662f\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," token \u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"92-\u914d\u7f6e\u4fe1\u606f"},"9.2 \u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWTSettings"),"\uff1a\u6839\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateIssuerSigningKey"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u5bc6\u94a5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IssuerSigningKey"),"\uff1a\u5bc6\u94a5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u590d\u6742\u5bc6\u94a5\uff0c\u957f\u5ea6\u5927\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"16")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateIssuer"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u7b7e\u53d1\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidIssuer"),"\uff1a\u7b7e\u53d1\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateAudience"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u7b7e\u6536\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidAudience"),"\uff1a\u7b7e\u6536\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateLifetim"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u8fc7\u671f\u65f6\u95f4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5efa\u8bae ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExpiredTime"),"\uff1a\u8fc7\u671f\u65f6\u95f4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"long")," \u7c7b\u578b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"20")," \u5206\u949f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ClockSkew"),"\uff1a\u8fc7\u671f\u65f6\u95f4\u5bb9\u9519\u503c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"long")," \u7c7b\u578b\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"5")," \u79d2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Algorithm"),"\uff1a\u52a0\u5bc6\u7b97\u6cd5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"HS256"),"\uff0c\u53ef\u9009\u7b97\u6cd5\u6709\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HS256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HS384")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HS512")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PS256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PS384")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PS512")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RS256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RS384")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RS512")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ES256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ES256K")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ES384")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ES512")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EdDSA"))))))),(0,a.kt)("h2",{id:"93-\u914d\u7f6e\u793a\u4f8b"},"9.3 \u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers  {4,6,8}",showLineNumbers:!0,"":!0,"{4,6,8}":!0},'{\n  "JWTSettings": {\n    "ValidateIssuerSigningKey": true, // \u662f\u5426\u9a8c\u8bc1\u5bc6\u94a5\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "IssuerSigningKey": "\u4f60\u7684\u5bc6\u94a5", // \u5bc6\u94a5\uff0cstring \u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u590d\u6742\u5bc6\u94a5\uff0c\u957f\u5ea6\u5927\u4e8e16\n    "ValidateIssuer": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u53d1\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidIssuer": "\u7b7e\u53d1\u65b9", // \u7b7e\u53d1\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateAudience": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u6536\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidAudience": "\u7b7e\u6536\u65b9", // \u7b7e\u6536\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateLifetime": true, // \u662f\u5426\u9a8c\u8bc1\u8fc7\u671f\u65f6\u95f4\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\uff0c\u5efa\u8baetrue\n    "ExpiredTime": 20, // \u8fc7\u671f\u65f6\u95f4\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u9ed8\u8ba420\u5206\u949f\n    "ClockSkew": 5, // \u8fc7\u671f\u65f6\u95f4\u5bb9\u9519\u503c\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 5\u79d2\n    "Algorithm": "HS256" // \u52a0\u5bc6\u7b97\u6cd5\uff0cstring \u7c7b\u578b\uff0c\u9ed8\u8ba4 HS256\n  }\n}\n')))}u.isMDXComponent=!0}}]);