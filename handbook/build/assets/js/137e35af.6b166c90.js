"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),k=p(t),d=l,g=k["".concat(o,".").concat(d)]||k[d]||u[d]||i;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,c=new Array(i);c[0]=k;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(7462),l=(t(7294),t(3905));const i={id:"createtcpservice",sidebar_position:2,title:"\u521b\u5efaTcpService",sidebar_label:"6.2 \u521b\u5efaTcpService"},c=void 0,a={unversionedId:"06\u3001Tcp\u7ec4\u4ef6/createtcpservice",id:"06\u3001Tcp\u7ec4\u4ef6/createtcpservice",title:"\u521b\u5efaTcpService",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/06\u3001Tcp\u7ec4\u4ef6/6.2 \u521b\u5efaTcpService.mdx",sourceDirName:"06\u3001Tcp\u7ec4\u4ef6",slug:"/06\u3001Tcp\u7ec4\u4ef6/createtcpservice",permalink:"/touchsocket/docs/06\u3001Tcp\u7ec4\u4ef6/createtcpservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/06\u3001Tcp\u7ec4\u4ef6/6.2 \u521b\u5efaTcpService.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673587377,formattedLastUpdatedAt:"Jan 13, 2023",sidebarPosition:2,frontMatter:{id:"createtcpservice",sidebar_position:2,title:"\u521b\u5efaTcpService",sidebar_label:"6.2 \u521b\u5efaTcpService"},sidebar:"tutorialSidebar",previous:{title:"6.1 \u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/06\u3001Tcp\u7ec4\u4ef6/tcpdescription"},next:{title:"6.3 \u521b\u5efaTcpClient",permalink:"/touchsocket/docs/06\u3001Tcp\u7ec4\u4ef6/createtcpclient"}},o={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9",id:"\u4e8c\u7279\u70b9",level:2},{value:"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:2},{value:"\u56db\u3001\u670d\u52a1\u5668\u67b6\u6784",id:"\u56db\u670d\u52a1\u5668\u67b6\u6784",level:2},{value:"\u4e94\u3001\u670d\u52a1\u5668\u5de5\u4f5c\u6d41\u7a0b",id:"\u4e94\u670d\u52a1\u5668\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"\u516d\u3001\u53ef\u914d\u7f6e\u9879",id:"\u516d\u53ef\u914d\u7f6e\u9879",level:2},{value:"\u4e03\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u5668\u5747\u652f\u6301",id:"\u4e03\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u670d\u52a1\u5668\u5747\u652f\u6301",level:2},{value:"\u516b\u3001\u521b\u5efaTcpService",id:"\u516b\u521b\u5efatcpservice",level:2},{value:"8.1 \u7b80\u5355\u521b\u5efa",id:"81-\u7b80\u5355\u521b\u5efa",level:4},{value:"8.2 \u6cdb\u578b\u521b\u5efa",id:"82-\u6cdb\u578b\u521b\u5efa",level:4},{value:"\u4e5d\u3001\u63a5\u6536\u6570\u636e",id:"\u4e5d\u63a5\u6536\u6570\u636e",level:2},{value:"9.1 Received\u59d4\u6258\u5904\u7406",id:"91-received\u59d4\u6258\u5904\u7406",level:4},{value:"9.2 \u91cd\u5199SocketClient\u5904\u7406",id:"92-\u91cd\u5199socketclient\u5904\u7406",level:4},{value:"9.3 \u63d2\u4ef6\u5904\u7406\u63a8\u8350",id:"93-\u63d2\u4ef6\u5904\u7406\u63a8\u8350",level:4},{value:"\u5341\u3001AspNetCore\u4e2d\u521b\u5efa",id:"\u5341aspnetcore\u4e2d\u521b\u5efa",level:2},{value:"\u5341\u4e00\u3001\u53d1\u9001\u6570\u636e",id:"\u5341\u4e00\u53d1\u9001\u6570\u636e",level:2},{value:"11.1 \u5982\u4f55\u83b7\u53d6SocketClient\uff1f",id:"111-\u5982\u4f55\u83b7\u53d6socketclient",level:4},{value:"11.2 \u53d1\u9001",id:"112-\u53d1\u9001",level:4},{value:"11.3 \u901a\u8fc7TcpService\u53d1\u9001",id:"113-\u901a\u8fc7tcpservice\u53d1\u9001",level:4}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,l.kt)("p",null,"TcpService\u662fTcp\u7cfb\u670d\u52a1\u5668\u57fa\u7c7b\uff0c\u5b83\u4e0d\u53c2\u4e0e\u5b9e\u9645\u7684\u6570\u636e\u4ea4\u4e92\uff0c\u53ea\u662f\u914d\u7f6e\u3001\u6fc0\u6d3b\u3001\u7ba1\u7406\u3001\u6ce8\u9500\u3001\u91cd\u5efa",(0,l.kt)("strong",{parentName:"p"},"SocketClient"),"\u7c7b\u5b9e\u4f8b\u3002\u800c",(0,l.kt)("strong",{parentName:"p"},"SocketClient"),"\u662f\u5f53",(0,l.kt)("strong",{parentName:"p"},"TcpClient\uff08\u5ba2\u6237\u7aef\uff09"),"\u6210\u529f\u8fde\u63a5\u670d\u52a1\u5668\u4ee5\u540e\uff0c\u7531\u670d\u52a1\u5668\u65b0\u5efa\u7684\u4e00\u4e2a\u5b9e\u4f8b\u7c7b\uff0c\u540e\u7eed\u7684\u6240\u6709\u901a\u4fe1\uff0c\u4e5f\u90fd\u662f\u901a\u8fc7\u8be5\u5b9e\u4f8b\u5b8c\u6210\u7684\u3002"),(0,l.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"IOCP\u591a\u7ebf\u7a0b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6c60\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff08\u5b9e\u6d4b\u670d\u52a1\u5668\u5355\u5ba2\u6237\u7aef\u5355\u7ebf\u7a0b\uff0c\u6bcf\u79d2\u53ef\u63a5\u6536200w\u67618\u5b57\u8282\u7684\u4fe1\u606f\uff0c\u63a5\u6536\u6570\u636e\u6d41\u91cf\u53ef\u8fbe2.5GB/s\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u591a\u5730\u5740\u76d1\u542c"),"\uff08\u53ef\u4ee5\u4e00\u6b21\u6027\u76d1\u542c\u591a\u4e2aIP\u53ca\u7aef\u53e3\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u914d\u5668\u9884\u5904\u7406\uff0c\u4e00\u952e\u5f0f\u89e3\u51b3",(0,l.kt)("strong",{parentName:"li"},"\u5206\u5305"),"\u3001",(0,l.kt)("strong",{parentName:"li"},"\u7c98\u5305"),"\u3001\u5bf9\u8c61\u89e3\u6790(\u5982HTTP\uff0cJson)\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8d85\u7b80\u5355\u7684\u540c\u6b65\u53d1\u9001\u3001\u5f02\u6b65\u53d1\u9001\u3001\u63a5\u6536\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u59d4\u6258\u3001\u63d2\u4ef6\u9a71\u52a8\uff0c\u8ba9\u6bcf\u4e00\u6b65\u90fd\u80fd\u6267\u884cAOP\u3002")),(0,l.kt)("h2",{id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f"},"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709Tcp\u57fa\u7840\u4f7f\u7528\u573a\u666f\uff1a\u53ef\u8de8\u5e73\u53f0\u3001\u8de8\u8bed\u8a00\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u534f\u8bae\u89e3\u6790\u573a\u666f\uff1a\u53ef\u89e3\u6790\u4efb\u610f\u6570\u636e\u683c\u5f0f\u7684TCP\u6570\u636e\u62a5\u6587\u3002")),(0,l.kt)("h2",{id:"\u56db\u670d\u52a1\u5668\u67b6\u6784"},"\u56db\u3001\u670d\u52a1\u5668\u67b6\u6784"),(0,l.kt)("p",null,"\u670d\u52a1\u5668\u5728\u6536\u5230",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u5ba2\u6237\u7aef\u8fde\u63a5"),"\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"SocketClient"),"\u7684\u6d3e\u751f\u7c7b\u5b9e\u4f8b\uff0c\u4e0e",(0,l.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aefTcpClient"),"\u4e00\u4e00\u5bf9\u5e94\uff0c\u540e\u7eed\u7684\u6570\u636e\u901a\u4fe1\u5747\u7531\u6b64\u5b9e\u4f8b\u8d1f\u8d23\u3002"),(0,l.kt)("p",null,"SocketClient\u5728Service\u91cc\u9762\u4ee5\u5b57\u5178\u6620\u5c04\u3002ID\u4e3a\u952e\uff0cSocketClient\u672c\u8eab\u4e3a\u503c\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/jpeg/25438888/1671337756749-88df332c-d3df-4f2c-9508-098c2e85863a.jpeg",alt:null})),(0,l.kt)("h2",{id:"\u4e94\u670d\u52a1\u5668\u5de5\u4f5c\u6d41\u7a0b"},"\u4e94\u3001\u670d\u52a1\u5668\u5de5\u4f5c\u6d41\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/jpeg/25438888/1644495351293-f594ddc2-a57d-495a-acfe-758620e97ac7.jpeg",alt:null})),(0,l.kt)("h2",{id:"\u516d\u53ef\u914d\u7f6e\u9879"},"\u516d\u3001\u53ef\u914d\u7f6e\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u540d")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u63cf\u8ff0")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SetBufferLength"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u6c60\u5bb9\u91cf\uff08\u5355\u4f4d\uff1abyte\uff09\uff0c\u9ed8\u8ba41024*64\u3002")))),(0,l.kt)("p",null,"\u8bbe\u7f6e\u5efa\u8bae\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6570\u636e\u5305\u8f83\u5c0f\uff0c\u5efa\u8bae10k\u5de6\u53f3\u7684\u503c\u3002\u66f4\u52a0\u8282\u7ea6\u5185\u5b58\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6570\u636e\u5305\u8f83\u5927\uff0c\u4f8b\u5982\u6587\u4ef6\u4f20\u8f93\u7b49\uff0c\u5efa\u8bae64k\uff0c\u751a\u81f3\u66f4\u5927\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8be5\u503c\u867d\u7136\u65e0\u4e0a\u9650\uff0c\u4f46\u662f\u4e00\u822c\u4e0d\u8981\u8d85\u8fc71Mb\uff0c\u4e0d\u7136\u4e0d\u4ec5\u6ca1\u610f\u4e49\uff0c\u8fd8\u5f88\u6d6a\u8d39\n|\n| SetMaxPackageSize |  \u6570\u636e\u5305\u6700\u5927\u503c\uff08\u5355\u4f4d\uff1abyte\uff09\uff0c\u9ed8\u8ba41024",(0,l.kt)("em",{parentName:"li"},"1024"),"10\u3002\u8be5\u503c\u4f1a\u5728\u9002\u5f53\u65f6\u95f4\uff0c\u76f4\u63a5\u4f5c\u7528DataHandlingAdapter.MaxPackageSize\u3002 |\n| SetThreadCount | \u591a\u7ebf\u7a0b\u6570\u91cf\u3002\u8be5\u503c\u5728Auto\u6a21\u5f0f\u4e0b\u6307\u793a\u7ebf\u7a0b\u6c60\u7684\u6700\u5c11\u7ebf\u7a0b\u6570\u91cf\u548cIO\u7ebf\u7a0b\u6570\u91cf\u3002\n\u8bbe\u7f6e\u5efa\u8bae\uff1a"),(0,l.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u5904\u7406\u63a5\u6536\u6570\u636e\uff0c\u6b64\u65f6\u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u4e3a\u5185\u6838\u7ebf\u7a0b\u5de6\u53f3\u7684\u503c\u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u6b65\u5904\u7406\u63a5\u6536\u6570\u636e\uff0c\u6b64\u65f6\u5e94\u5f53\u8003\u8651\u4e24\u4e2a\u56e0\u7d20\u3002\u8be5\u64cd\u4f5c\u662f\u5426\u4e3a\u8017\u65f6\u64cd\u4f5c\uff0c\u5982\u679c\u662f\uff0c\u5219\u8be5\u503c\u5728\u5141\u8bb8\u8303\u56f4\u5185\uff0c\u5e94\u5f53\u8bbe\u7f6e\u66f4\u53ef\u80fd\u5927\u7684\u503c\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u8bbe\u7f6e\u4e3a\u5185\u6838\u7ebf\u7a0b\u5de6\u53f3\u7684\u503c\u5373\u53ef\u3002\n|\n| SetListenIPHosts | \u76d1\u542cIP\u548c\u7aef\u53e3\u53f7\u7ec4\uff0c\u53ef\u4ee5\u4e00\u6b21\u6027\u8bbe\u7f6e\u591a\u4e2a\u5730\u5740\u3002 |\n| SetServerName | \u670d\u52a1\u5668\u6807\u8bc6\u540d\u79f0\uff0c\u65e0\u5b9e\u9645\u4f7f\u7528\u610f\u4e49\u3002 |\n| SetBacklogProperty | Tcp\u534a\u8fde\u63a5\u6302\u8d77\u8fde\u63a5\u961f\u5217\u7684\u6700\u5927\u957f\u5ea6\u3002\u9ed8\u8ba4\u4e3a30 |\n| SetMaxCount | \u6700\u5927\u53ef\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u4e3a10000 |\n| SetClearInterval | \u6e05\u7406\u65e0\u6570\u636e\u4ea4\u4e92\u7684SocketClient\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09\uff0c\u9ed8\u8ba460000 \u6beb\u79d2\u3002\u5982\u679c\u4e0d\u60f3\u6e05\u9664\uff0c\u53ef\u4f7f\u7528-1\u3002\u4f46\u662f\uff0c\u5e76\u4e0d\u5efa\u8bae\u8bbe\u7f6e-1\uff0c\u56e0\u4e3a\u5047\u5982\u6709\u5ba2\u6237\u7aef\u56e0\u4e3a\u7f51\u7edc\u6545\u969c\u5bfc\u81f4\u50f5\u6b7b\u7684\u8bdd\uff0c\u670d\u52a1\u5668\u5c06\u6c38\u4e45\u4fdd\u7559\u5176\u5b9e\u4f8b\u3002\u6240\u4ee5\u6700\u597d\u7684\u65b9\u5f0f\u662f\u6309\u7167\u81ea\u5df1\u7684\u4e1a\u52a1\u9700\u8981\uff0c\u8bbe\u7f6e\u5bf9\u5e94\u503c\uff0c\u56e0\u4e3a\u4ece\u666e\u904d\u6027\u800c\u8a00\uff0c\u65e0\u6570\u636e\u4ea4\u4e92\u7684\u5ba2\u6237\u7aef\uff0c\u5982\u679c\u65f6\u95f4\u8d85\u51fa10s\uff0c\u5219\u65ad\u5f00\u7684\u7b56\u7565\u662f\u4f18\u4e8e\u4e00\u76f4\u8fde\u63a5\u7684\u3002\u6216\u8005\uff0c\u81ea\u5df1\u89c4\u5b9a\u5fc3\u8df3\u6570\u636e\u5305\uff0c\u4fdd\u6301\u5ba2\u6237\u7aef\u6d3b\u6027\u3002 |\n| SetClearType | \u6e05\u7406\u7edf\u8ba1\u7c7b\u578b\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Receive\uff1a\u4e3a\u5728\u6536\u5230\u6570\u636e\u65f6\uff0c\u5237\u65b0\u7edf\u8ba1\uff0c\u5982\u679c\u4e00\u76f4\u6709\u6570\u636e\u63a5\u6536\uff0c\u5219\u4e0d\u4f1a\u88ab\u4e3b\u52a8\u6e05\u7406\u65ad\u5f00\u3002"),(0,l.kt)("li",{parentName:"ul"},"Send\uff1a\u4e3a\u5728\u53d1\u9001\u6570\u636e\u65f6\uff0c\u5237\u65b0\u7edf\u8ba1\uff0c\u5982\u679c\u4e00\u76f4\u6709\u6570\u636e\u53d1\u9001\uff0c\u5219\u4e0d\u4f1a\u88ab\u4e3b\u52a8\u6e05\u7406\u65ad\u5f00\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f4d\u57df\u53e0\u52a0\u3002\n|\n| SetReceiveType | \u63a5\u6536\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"AUTO\uff1a\u81ea\u52a8\u63a5\u6536\u6a21\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"None\uff1a\u4e0d\u6295\u9012IO\u63a5\u6536\u7533\u8bf7\uff0c\u7528\u6237\u53ef\u901a\u8fc7GetStream\uff0c\u83b7\u53d6\u5230\u6d41\u4ee5\u540e\uff0c\u81ea\u5df1\u5904\u7406\u63a5\u6536\u3002\u6ce8\u610f\uff1a\u8fde\u63a5\u7aef\u4e0d\u4f1a\u611f\u77e5\u4e3b\u52a8\u65ad\u5f00\u3002\n|\n| UsePlugin | \u662f\u5426\u542f\u7528\u63d2\u4ef6\u3002\u5728\u542f\u7528\u65f6\u6216\u8bb8\u4f1a\u5e26\u6765\u4e00\u70b9\u70b9\u6027\u80fd\u635f\u8017\uff0c\u57fa\u672c\u4e0a\u4e0d\u662f\u5343\u4e07\u6570\u636e\u4ea4\u4e92\u6839\u672c\u4e0d\u503c\u4e00\u63d0\u3002 |\n| SetServiceSslOption | Ssl\u914d\u7f6e\uff0c\u4e3aNull\u65f6\u5219\u4e0d\u542f\u7528\u3002 |\n| UseNoDelay | \u8bbe\u7f6eSocket\u7684NoDelay\u5c5e\u6027\uff0c\u9ed8\u8ba4false\u3002 |\n| UseDelaySender | \u4f7f\u7528\u5ef6\u8fdf\u53d1\u9001\u3002\n\u4f17\u6240\u5468\u77e5\uff0ctcp\u6570\u636e\u62a5\u6587\u4e3a\u4e86\u53d1\u9001\u6548\u7387\uff0c\u4f1a\u9ed8\u8ba4\u542f\u7528",(0,l.kt)("strong",{parentName:"li"},"\u5ef6\u8fdf\u7b97\u6cd5"),"\u3002\u4f46\u662f\u8fd9\u79cd\u8bbe\u7f6e\uff0c\u53ea\u80fd\u4e00\u5b9a\u7a0b\u5ea6\u7684\u7f13\u89e3\u5c0f\u6570\u636e\u53d1\u9001\u6548\u7387\u4f4e\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u4e3a\u4e86\u4fdd\u8bc1\u591a\u7ebf\u7a0b\u53d1\u9001\u7684\u6709\u5e8f\u6027\uff0c\u5728send\u51fd\u6570\u4e2d\u8bbe\u7f6e\u4e86\u7ebf\u7a0b\u540c\u6b65\uff0c\u6240\u4ee5\u8bf4\uff0c\u6bcf\u8c03\u7528\u4e00\u6b21send\uff0c\u5b9e\u9645\u4e0a\u90fd\u662f\u5de8\u5927\u7684\u6027\u80fd\u6d88\u8017\uff08\u6b64\u5904\u7528iocp\u53d1\u9001\u4ea6\u7136\uff09\u3002\u6240\u4ee5\uff0c\u8981\u89e3\u51b3\u8be5\u95ee\u9898\uff0c \u6700\u7ec8\u8fd8\u662f\u8981\u5c06\u5c0f\u6570\u636e\uff0c\u7ec4\u5408\u6210\u5927\u6570\u636e\uff0c\u8fd9\u6837\u624d\u80fd\u66f4\u9ad8\u6548\u7387\u7684\u53d1\u9001\u3002\u6240\u4ee5\uff0cDelaySender\u6b63\u662f\u8d1f\u8d23\u6b64\u7c7b\u5de5\u4f5c\u7684\u3002")),(0,l.kt)("p",null,"\u4f7f\u7528DelaySender\uff0c\u4f1a\u4e00\u5b9a\u7a0b\u5ea6\u7684\u964d\u4f4e\u53d1\u9001\u7684\u53ca\u65f6\u6027\uff0c\u4f46\u662f\u964d\u4f4e\u7a0b\u5ea6\u5e76\u4e0d\u9ad8\uff0c\u7b80\u5355\u6765\u8bf4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e00\u4e2a\u5305\u5927\u4e8e512kb\uff0c\u5219\u4e0d\u4f1a\u5ef6\u8fdf\uff0c\u76f4\u63a5\u53d1\u9001\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u53d1\u9001\u7b2c\u4e00\u4e2a\u5305\uff0c\u4e0e\u7b2c\u4e8c\u4e2a\u5305\u7684\u65f6\u95f4\u95f4\u9694\u5c0f\u4e8e\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u8c03\u5ea6\u7684\u65f6\u95f4\uff08\u8fd9\u4e2a\u65f6\u95f4\u6781\u77ed\uff0c\u4e00\u822c\u6765\u8bf4\u4f1a\u572810",(0,l.kt)("strong",{parentName:"li"},"\u5fae\u79d2"),"\u5de6\u53f3\uff09\uff0c\u5219\u4f1a\u5c06\u8fd9\u4e24\u4e2a\u5305\u538b\u7f29\u4e3a\u4e00\u4e2a\u5305\u53d1\u9001\u3002\n|\n| UseReuseAddress | \u542f\u7528\u7aef\u53e3\u590d\u7528\u3002\u8be5\u914d\u7f6e\u53ef\u5728\u670d\u52a1\u5668\u3001\u6216\u5ba2\u6237\u7aef\u5728\u76d1\u542c\u7aef\u53e3\u65f6\uff0c\u8fd0\u884c\u76d1\u542c\u540c\u4e00\u4e2a\u7aef\u53e3\u3002\u53ef\u4ee5\u4e00\u5b9a\u7a0b\u5ea6\u7f13\u89e3\u7aef\u53e3\u6765\u4e0d\u53ca\u91ca\u653e\u7684\u95ee\u9898 |")),(0,l.kt)("h2",{id:"\u4e03\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u670d\u52a1\u5668\u5747\u652f\u6301"},"\u4e03\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u5668\u5747\u652f\u6301"),(0,l.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,l.kt)("strong",{parentName:"p"},"ITcpPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\n\u6216\u8005\u7ee7\u627f\u81ea",(0,l.kt)("strong",{parentName:"p"},"TcpPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,l.kt)("p",null,"| ###  ITcpPlugin\n|  |\n| --- | --- |\n| OnConnected | \u5ba2\u6237\u7aef\u8fde\u63a5\u6210\u529f\u540e\u89e6\u53d1 |\n| OnConnecting | \u5728\u5373\u5c06\u5b8c\u6210\u8fde\u63a5\u65f6\u89e6\u53d1\u3002 |\n| OnDisconnected | \u4f1a\u8bdd\u65ad\u5f00\u540e\u89e6\u53d1 |\n| OnReceivedData | \u5728\u6536\u5230\u6570\u636e\u65f6\u89e6\u53d1 |\n| OnSendingData | \u5f53\u5373\u5c06\u53d1\u9001\u6570\u636e\u65f6\uff0c\u8c03\u7528\u8be5\u65b9\u6cd5\u5728\u9002\u914d\u5668\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u5373\u4f1a\u53d1\u9001\u6570\u636e\u3002 |\n| OnIDChanged | \u5f53Client\u7684ID\u88ab\u66f4\u6539\u540e\u89e6\u53d1 |"),(0,l.kt)("h2",{id:"\u516b\u521b\u5efatcpservice"},"\u516b\u3001\u521b\u5efaTcpService"),(0,l.kt)("h4",{id:"81-\u7b80\u5355\u521b\u5efa"},"8.1 \u7b80\u5355\u521b\u5efa"),(0,l.kt)("p",null,"\u76f4\u63a5\u521d\u59cb\u5316TcpService\uff0c\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684",(0,l.kt)("strong",{parentName:"p"},"SocketClient"),"\u3002\n\u7b80\u5355\u7684\u5904\u7406\u903b\u8f91\u53ef\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"Connecting"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"Connected"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"Received"),"\u7b49\u59d4\u6258\u76f4\u63a5\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpService service = new TcpService();\nservice.Connecting = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u6b63\u5728\u8fde\u63a5\nservice.Connected = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u6210\u529f\u8fde\u63a5\nservice.Disconnected = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u65ad\u5f00\u8fde\u63a5\nservice.Received = (client, byteBlock, requestInfo) =>\n{\n    //\u4ece\u5ba2\u6237\u7aef\u6536\u5230\u4fe1\u606f\n    string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len);\n    client.Logger.Info($"\u5df2\u4ece{client.ID}\u63a5\u6536\u5230\u4fe1\u606f\uff1a{mes}");\n\n    client.Send(mes);//\u5c06\u6536\u5230\u7684\u4fe1\u606f\u76f4\u63a5\u8fd4\u56de\u7ed9\u53d1\u9001\u65b9\n\n    //client.Send("id",mes);//\u5c06\u6536\u5230\u7684\u4fe1\u606f\u8fd4\u56de\u7ed9\u7279\u5b9aID\u7684\u5ba2\u6237\u7aef\n\n    var ids = service.GetIDs();\n    foreach (var clientId in ids)//\u5c06\u6536\u5230\u7684\u4fe1\u606f\u8fd4\u56de\u7ed9\u5728\u7ebf\u7684\u6240\u6709\u5ba2\u6237\u7aef\u3002\n    {\n        if (clientId != client.ID)//\u4e0d\u7ed9\u81ea\u5df1\u53d1\n        {\n            service.Send(clientId, mes);\n        }\n    }\n};\n\nservice.Setup(new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e     \n    .SetListenIPHosts(new IPHost[] { new IPHost("tcp://127.0.0.1:7789"), new IPHost(7790) })//\u540c\u65f6\u76d1\u542c\u4e24\u4e2a\u5730\u5740\n    .ConfigureContainer(a =>//\u5bb9\u5668\u7684\u914d\u7f6e\u987a\u5e8f\u5e94\u8be5\u5728\u6700\u524d\u9762\n    {\n        a.AddConsoleLogger();//\u6dfb\u52a0\u4e00\u4e2a\u63a7\u5236\u53f0\u65e5\u5fd7\u6ce8\u5165\uff08\u6ce8\u610f\uff1a\u5728maui\u4e2d\u63a7\u5236\u53f0\u65e5\u5fd7\u4e0d\u53ef\u7528\uff09\n    })\n    .ConfigurePlugins(a =>\n    {\n        //a.Add();//\u6b64\u5904\u53ef\u4ee5\u6dfb\u52a0\u63d2\u4ef6\n    }))\n    .Start();//\u542f\u52a8\n')),(0,l.kt)("h4",{id:"82-\u6cdb\u578b\u521b\u5efa"},"8.2 \u6cdb\u578b\u521b\u5efa"),(0,l.kt)("p",null,"\u901a\u8fc7\u6cdb\u578b\u521b\u5efa\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5f88\u591a\u6709\u610f\u601d\uff0c\u4e14\u80fd",(0,l.kt)("strong",{parentName:"p"},"\u91cd\u5199"),"\u4e00\u4e9b\u6709\u7528\u7684\u529f\u80fd\u3002\u4e0b\u9762\u5c31\u6f14\u793a\uff0c\u5982\u4f55\u901a\u8fc7\u6cdb\u578b\u521b\u5efa\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a\n\uff081\uff09\u5efa\u7acbSocketClient\u7ee7\u627f\u7c7b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MySocketClient : SocketClient\n{\n    protected override void HandleReceivedData(ByteBlock byteBlock, IRequestInfo requestInfo)\n    {\n        //\u6b64\u5904\u903b\u8f91\u5355\u7ebf\u7a0b\u5904\u7406\u3002\n\n        //\u6b64\u5904\u5904\u7406\u6570\u636e\uff0c\u529f\u80fd\u76f8\u5f53\u4e8eReceived\u59d4\u6258\u3002\n        string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len);\n        Console.WriteLine($"\u5df2\u63a5\u6536\u5230\u4fe1\u606f\uff1a{mes}");\n    }\n}\n')),(0,l.kt)("p",null,"\uff082\uff09\u5efa\u7acbTcpService\u7ee7\u627f\u7c7b\u3002\u5b9e\u9645\u4e0a\u5982\u679c\u4e1a\u52a1\u4e0d\u6d89\u53ca\u670d\u52a1\u5668\u914d\u7f6e\u7684\u8bdd\uff0c\u53ef\u4ee5\u7701\u7565\u8be5\u6b65\u9aa4\uff0c\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"TcpService\u7684\u6cdb\u578b"),"\u76f4\u63a5\u521b\u5efa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyService : TcpService<MySocketClient>\n{\n    protected override void LoadConfig(TouchSocketConfig config)\n    {\n        //\u6b64\u5904\u52a0\u8f7d\u914d\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u4ece\u914d\u7f6e\u4e2d\u83b7\u53d6\u914d\u7f6e\u9879\u3002\n        base.LoadConfig(config);\n    }\n\n    protected override void OnConnecting(MySocketClient socketClient, ClientOperationEventArgs e)\n    {\n        //\u6b64\u5904\u903b\u8f91\u4f1a\u591a\u7ebf\u7a0b\u5904\u7406\u3002\n\n       \n        //e.ID:\u5bf9\u65b0\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u8fdb\u884cID\u521d\u59cb\u5316\uff0c\u4f8b\u5982\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5176IP\u5730\u5740\u3002\n        //e.IsPermitOperation:\u6307\u793a\u662f\u5426\u5141\u8bb8\u8be5\u5ba2\u6237\u7aef\u94fe\u63a5\u3002\n        base.OnConnecting(socketClient, e);\n    }\n}\n\n")),(0,l.kt)("p",null,"\uff083\uff09\u521b\u5efa\u670d\u52a1\u5668\uff08\u5305\u542bMyService\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'MyService service = new MyService();\nservice.Connecting = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u6b63\u5728\u8fde\u63a5\nservice.Connected = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u6210\u529f\u8fde\u63a5\nservice.Disconnected = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u65ad\u5f00\u8fde\u63a5\n\nservice.Setup(new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e     \n    .SetListenIPHosts(new IPHost[] { new IPHost("tcp://127.0.0.1:7789"), new IPHost(7790) })//\u540c\u65f6\u76d1\u542c\u4e24\u4e2a\u5730\u5740\n    .ConfigureContainer(a =>//\u5bb9\u5668\u7684\u914d\u7f6e\u987a\u5e8f\u5e94\u8be5\u5728\u6700\u524d\u9762\n    {\n        a.UseConsoleLogger();//\u6dfb\u52a0\u4e00\u4e2a\u63a7\u5236\u53f0\u65e5\u5fd7\u6ce8\u5165\uff08\u6ce8\u610f\uff1a\u5728maui\u4e2d\u63a7\u5236\u53f0\u65e5\u5fd7\u4e0d\u53ef\u7528\uff09\n    })\n    .ConfigurePlugins(a =>\n    {\n        //a.Add();//\u6b64\u5904\u53ef\u4ee5\u6dfb\u52a0\u63d2\u4ef6\n    }))\n    .Start();//\u542f\u52a8\n')),(0,l.kt)("p",null,"\uff084\uff09\u521b\u5efa\u670d\u52a1\u5668\uff08\u4e0d\u542bMyService\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpService<MySocketClient> service = new TcpService<MySocketClient>();\nservice.Connecting = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u6b63\u5728\u8fde\u63a5\nservice.Connected = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u6210\u529f\u8fde\u63a5\nservice.Disconnected = (client, e) => { };//\u6709\u5ba2\u6237\u7aef\u65ad\u5f00\u8fde\u63a5\n\nservice.Setup(new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e     \n    .SetListenIPHosts(new IPHost[] { new IPHost("tcp://127.0.0.1:7789"), new IPHost(7790) })//\u540c\u65f6\u76d1\u542c\u4e24\u4e2a\u5730\u5740\n    .ConfigureContainer(a =>//\u5bb9\u5668\u7684\u914d\u7f6e\u987a\u5e8f\u5e94\u8be5\u5728\u6700\u524d\u9762\n    {\n        a.UseConsoleLogger();//\u6dfb\u52a0\u4e00\u4e2a\u63a7\u5236\u53f0\u65e5\u5fd7\u6ce8\u5165\uff08\u6ce8\u610f\uff1a\u5728maui\u4e2d\u63a7\u5236\u53f0\u65e5\u5fd7\u4e0d\u53ef\u7528\uff09\n    })\n    .ConfigurePlugins(a =>\n    {\n        //a.Add();//\u6b64\u5904\u53ef\u4ee5\u6dfb\u52a0\u63d2\u4ef6\n    }))\n    .Start();//\u542f\u52a8\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7531\u4e0a\u8ff0\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0c\u901a\u8fc7\u7ee7\u627f\uff0c\u53ef\u4ee5\u66f4\u52a0\u7075\u6d3b\u7684\u5b9e\u73b0\u6269\u5c55\u3002\u4f46\u5b9e\u9645\u4e0a\uff0c\u5f88\u591a\u4e1a\u52a1\u6211\u4eec\u5e0c\u671b\u5927\u5bb6\u80fd\u901a\u8fc7\u63d2\u4ef6\u5b8c\u6210\u3002")),(0,l.kt)("h2",{id:"\u4e5d\u63a5\u6536\u6570\u636e"},"\u4e5d\u3001\u63a5\u6536\u6570\u636e"),(0,l.kt)("p",null,"\u5728TcpService\u4e2d\uff0c\u63a5\u6536\u6570\u636e\u7684\u65b9\u5f0f\u6709\u5f88\u591a\u79cd\u3002\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u3002"),(0,l.kt)("h4",{id:"91-received\u59d4\u6258\u5904\u7406"},"9.1 Received\u59d4\u6258\u5904\u7406"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528TcpService\uff08\u975e\u6cdb\u578b\uff09\u521b\u5efa\u670d\u52a1\u5668\u65f6\uff0c\u5185\u90e8\u5df2\u7ecf\u5b9a\u4e49\u597d\u4e86\u4e00\u4e2a\u5916\u7f6e\u59d4\u6258Received\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u59d4\u6258\u76f4\u63a5\u63a5\u6536\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpService service = new TcpService();\nservice.Received = (client, byteBlock, requestInfo) =>\n{\n    //\u4ece\u5ba2\u6237\u7aef\u6536\u5230\u4fe1\u606f\n    string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len);\n    client.Logger.Info($"\u5df2\u4ece{client.ID}\u63a5\u6536\u5230\u4fe1\u606f\uff1a{mes}");\n};\n\nservice.Setup(new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e     \n    .SetListenIPHosts(new IPHost[] { new IPHost("tcp://127.0.0.1:7789"), new IPHost(7790) })//\u540c\u65f6\u76d1\u542c\u4e24\u4e2a\u5730\u5740\n    .ConfigureContainer(a =>//\u5bb9\u5668\u7684\u914d\u7f6e\u987a\u5e8f\u5e94\u8be5\u5728\u6700\u524d\u9762\n    {\n        a.UseConsoleLogger();//\u6dfb\u52a0\u4e00\u4e2a\u63a7\u5236\u53f0\u65e5\u5fd7\u6ce8\u5165\uff08\u6ce8\u610f\uff1a\u5728maui\u4e2d\u63a7\u5236\u53f0\u65e5\u5fd7\u4e0d\u53ef\u7528\uff09\n    }))\n    .Start();//\u542f\u52a8\n')),(0,l.kt)("h4",{id:"92-\u91cd\u5199socketclient\u5904\u7406"},"9.2 \u91cd\u5199SocketClient\u5904\u7406"),(0,l.kt)("p",null,"\u6b63\u59828.2\u6240\u793a\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728MySocketClient\u7684\u91cd\u5199",(0,l.kt)("strong",{parentName:"p"},"HandleReceivedData"),"\u4e2d\u76f4\u63a5\u5904\u7406\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"93-\u63d2\u4ef6\u5904\u7406\u63a8\u8350"},"9.3 \u63d2\u4ef6\u5904\u7406\u63a8\u8350"),(0,l.kt)("p",null,"\u6309\u7167TouchSocket\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u6570\u636e\uff0c\u662f\u4e00\u9879\u975e\u5e38\u7b80\u5355\uff0c\u4e14\u9ad8\u5ea6\u89e3\u8026\u7684\u65b9\u5f0f\u3002\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\uff08UsePlugin\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u63d2\u4ef6\u7c7b"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u63d2\u4ef6")),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a\n\uff081\uff09\u58f0\u660e\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyPlugin : TcpPluginBase<SocketClient>\n{\n    public MyPlugin()\n    {\n        this.Order = 0;//\u6b64\u503c\u8868\u793a\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5f53\u591a\u4e2a\u63d2\u4ef6\u5e76\u5b58\u65f6\uff0c\u8be5\u503c\u8d8a\u5927\uff0c\u8d8a\u5728\u524d\u6267\u884c\u3002\n    }\n    \n    protected override void OnReceivedData(SocketClient client, ReceivedDataEventArgs e)\n    {\n        //\u8fd9\u91cc\u5904\u7406\u6570\u636e\u63a5\u6536\n        //\u6839\u636e\u9002\u914d\u5668\u7c7b\u578b\uff0ce.ByteBlock\u4e0ee.RequestInfo\u4f1a\u5448\u73b0\u4e0d\u540c\u7684\u503c\uff0c\u5177\u4f53\u770b\u6587\u6863=\u300b\u9002\u914d\u5668\u90e8\u5206\u3002\n        ByteBlock byteBlock = e.ByteBlock;\n        IRequestInfo requestInfo = e.RequestInfo;\n\n        //e.Handled = true;//\u8868\u793a\u8be5\u6570\u636e\u5df2\u7ecf\u88ab\u672c\u63d2\u4ef6\u5904\u7406\uff0c\u65e0\u9700\u518d\u6295\u9012\u5230\u5176\u4ed6\u63d2\u4ef6\u3002\n        base.OnReceivedData(client, e);\n    }\n}\n")),(0,l.kt)("p",null,"\uff082\uff09\u521b\u5efa\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u7684\u670d\u52a1\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpService service = new TcpService();\nservice.Setup(new TouchSocketConfig()\n    .SetListenIPHosts(new IPHost[] { new IPHost("127.0.0.1:7789"), new IPHost(7790) })\n    .UsePlugin()\n    .ConfigureContainer(a=>\n    {\n        a.UseConsoleLogger();\n    })\n    .ConfigurePlugins(a => \n    {\n        a.Add<MyPlugin>();\n    }))\n    .Start();\n')),(0,l.kt)("h2",{id:"\u5341aspnetcore\u4e2d\u521b\u5efa"},"\u5341\u3001AspNetCore\u4e2d\u521b\u5efa"),(0,l.kt)("p",null,"\u9996\u5148\u5efa\u8bae\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocket.AspNetCore"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocketPro.AspNetCore"),"\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u91cc\u9762\u6709\u5f88\u591a\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684\u6ce8\u5165\u9879\u3002"),(0,l.kt)("p",null,"\u5728AspNetCore\u4e2d\u4f7f\u7528TcpService\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u5e94\u8be5"),"\u50cf\u666e\u901a\u7aef\u4e00\u6837\uff0c\u8ba2\u9605Received\u3002\u5e94\u8be5\u662f\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u63d2\u4ef6"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u5165"),"\u7b49\u65b9\u5f0f\u5b9e\u73b0\u3002\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6ce8\u5165TcpService\uff0c\u5e76\u505a\u597d\u914d\u7f6e\uff08\u548c\u5e38\u89c4\u670d\u52a1\u5668\u914d\u7f6e\u4e00\u6837\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u63d2\u4ef6\uff0c\u5904\u7406\u6536\u5230\u7684\u6570\u636e\u3002")),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a\n\uff081\uff09\u58f0\u660e\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyTcpPlugin : TcpPluginBase<SocketClient>\n{\n    private ILogger<MyTcpPlugin> m_logger;\n\n    public MyTcpPlugin(ILogger<MyTcpPlugin> logger)\n    {\n        this.m_logger = logger;\n    }\n\n    protected override void OnConnected(SocketClient client, TouchSocketEventArgs e)\n    {\n        m_logger.LogInformation("\u5ba2\u6237\u7aef\u8fde\u63a5");\n        base.OnConnected(client, e);\n    }\n\n    protected override void OnReceivedData(SocketClient client, ReceivedDataEventArgs e)\n    {\n        //\u8fd9\u91cc\u5904\u7406\u6570\u636e\u63a5\u6536\n        //\u6839\u636e\u9002\u914d\u5668\u7c7b\u578b\uff0ce.ByteBlock\u4e0ee.RequestInfo\u4f1a\u5448\u73b0\u4e0d\u540c\u7684\u503c\uff0c\u5177\u4f53\u770b\u6587\u6863=\u300b\u9002\u914d\u5668\u90e8\u5206\u3002\n        ByteBlock byteBlock = e.ByteBlock;\n        IRequestInfo requestInfo = e.RequestInfo;\n    }\n}\n')),(0,l.kt)("p",null,"\uff082\uff09\u6ce8\u5165\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public void ConfigureServices(IServiceCollection services)\n{\n    var tcpService = services.AddTcpService(config =>\n      {\n          config.SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n          .UsePlugin()\n          .UseAspNetCoreContainer(services)\n          .ConfigurePlugins(a =>\n          {\n              a.Add<MyTcpPlugin>();//\u6b64\u63d2\u4ef6\u5c31\u53ef\u4ee5\u5904\u7406\u63a5\u6536\u6570\u636e\n          });\n      });\n}\n\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728\u4efb\u610f\u5730\u65b9\uff0c\u4e5f\u53ef\u83b7\u5f97\u670d\u52a1\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/25438888/1663050580991-55e67000-865a-413d-9282-d2247cb78a2f.png#averageHue=%23d6d0cb&clientId=u02c1b374-c835-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=521&id=ude8e5cc8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=521&originWidth=1270&originalType=binary&ratio=1&rotation=0&showTitle=false&size=561387&status=error&style=none&taskId=uce9c3d18-36e9-4167-9f40-d9c0f07323b&title=&width=1270",alt:"image.png"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u540c\u65f6\uff0cTcpService\u4e0e\u6574\u4e2aAspNetCore\u662f\u5171\u4eabIOC\u5bb9\u5668\u7684\u3002\u5373\uff1aTcpService\u4e2d\u7684\u4efb\u4f55\u5730\u65b9\uff08\u4f8b\u5982\uff1a\u63d2\u4ef6\uff09\u4e5f\u80fd\u83b7\u5f97AspNetCore\u5df2\u6ce8\u518c\u7684\u670d\u52a1\u3002")),(0,l.kt)("h2",{id:"\u5341\u4e00\u53d1\u9001\u6570\u636e"},"\u5341\u4e00\u3001\u53d1\u9001\u6570\u636e"),(0,l.kt)("p",null,"\u6309\u7167\u67b6\u6784\u56fe\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u6210\u529f\u8fde\u63a5\u540e\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u6d3e\u751f\u81ea",(0,l.kt)("strong",{parentName:"p"},"SocketClient"),"\u7684\u5b9e\u4f8b\uff0c\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u8be5\u5b9e\u4f8b"),"\u5373\u53ef\u5c06\u6570\u636e\u53d1\u9001\u81f3",(0,l.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef"),"\u3002"),(0,l.kt)("h4",{id:"111-\u5982\u4f55\u83b7\u53d6socketclient"},"11.1 \u5982\u4f55\u83b7\u53d6SocketClient\uff1f"),(0,l.kt)("p",null,"\uff081\uff09\u76f4\u63a5\u8c03\u7528\n\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"service.GetClients"),"\u65b9\u6cd5\uff0c\u83b7\u53d6\u5f53\u524d\u5728\u7ebf\u7684\u6240\u6709\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"SocketClient[] socketClients = service.GetClients();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u7531\u4e8eSocketClient\u7684\u751f\u547d\u5468\u671f\u662f\u7531\u6846\u67b6\u63a7\u5236\u7684\uff0c\u6240\u4ee5\u6700\u597d\u5c3d\u91cf\u4e0d\u8981\u76f4\u63a5\u5f15\u7528\u8be5\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u5f15\u7528SocketClient.ID\uff0c\u7136\u540e\u518d\u901a\u8fc7\u670d\u52a1\u5668\u67e5\u627e\u3002")),(0,l.kt)("p",null,"\uff082\uff09\u901a\u8fc7ID\u83b7\u53d6\n\u5148\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"service.GetIDs"),"\u65b9\u6cd5\uff0c\u83b7\u53d6\u5f53\u524d\u5728\u7ebf\u7684\u6240\u6709\u5ba2\u6237\u7aef\u7684ID\uff0c\u7136\u540e\u9009\u62e9\u9700\u8981\u7684ID\uff0c\u901a\u8fc7TryGetSocketClient\u65b9\u6cd5\uff0c\u83b7\u53d6\u5230\u60f3\u8981\u7684\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"string[] ids = service.GetIDs();\nif (service.TryGetSocketClient(ids[0], out SocketClient socketClient))\n{\n}\n")),(0,l.kt)("h4",{id:"112-\u53d1\u9001"},"11.2 \u53d1\u9001"),(0,l.kt)("p",null,"\u3010\u540c\u6b65\u53d1\u9001\u3011\nSocketClient\u5df2\u7ecf\u5185\u7f6e\u4e86\u4e09\u79cd\u540c\u6b65\u53d1\u9001\u65b9\u6cd5\uff0c\u76f4\u63a5\u8c03\u7528\u5c31\u53ef\u4ee5\u53d1\u9001\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u901a\u8fc7\u8be5\u65b9\u6cd5\u53d1\u9001\u7684\u6570\u636e\uff0c\u4f1a\u7ecf\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u9002\u914d\u5668"),"\uff0c\u5982\u679c\u60f3\u8981\u76f4\u63a5\u53d1\u9001\uff0c\u8bf7\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"DefaultSend"),"\u3002\u5982\u679c\u53d1\u9001\u5931\u8d25\uff0c\u5219\u4f1a\u7acb\u5373\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public virtual void Send(byte[] buffer);\npublic virtual void Send(ByteBlock byteBlock);\npublic virtual void Send(byte[] buffer, int offset, int length);\n")),(0,l.kt)("p",null,"\u3010\u5f02\u6b65\u53d1\u9001\u3011\nTcpClient\u5df2\u7ecf\u5185\u7f6e\u4e86\u4e09\u79cd\u5f02\u6b65\u53d1\u9001\u65b9\u6cd5\uff0c\u76f4\u63a5\u8c03\u7528\u5c31\u53ef\u4ee5\u53d1\u9001\u3002\u5982\u679c\u53d1\u9001\u5931\u8d25\uff0cawait\u5c31\u4f1a\u89e6\u53d1\u5f02\u5e38\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public virtual Task SendAsync(byte[] buffer);\npublic virtual Task SendAsync(ByteBlock byteBlock);\npublic virtual Task SendAsync(byte[] buffer, int offset, int length);\n")),(0,l.kt)("h4",{id:"113-\u901a\u8fc7tcpservice\u53d1\u9001"},"11.3 \u901a\u8fc7TcpService\u53d1\u9001"),(0,l.kt)("p",null,"\u901a\u8fc7ID\u53d1\u9001\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public virtual void Send(string id, ByteBlock byteBlock);\npublic virtual void Send(string id, byte[] buffer, int offset, int length);\npublic virtual void Send(string id, byte[] buffer);\npublic virtual Task SendAsync(string id, ByteBlock byteBlock);\npublic virtual Task SendAsync(string id, byte[] buffer, int offset, int length);\npublic virtual Task SendAsync(string id, byte[] buffer);\n")))}u.isMDXComponent=!0}}]);