"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?o.createElement(y,a(a({ref:t},m),{},{components:n})):o.createElement(y,a({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={id:"dbcontext-repository",title:"9.4 \u4ed3\u50a8\u6a21\u5f0f",sidebar_label:"9.4 \u4ed3\u50a8\u6a21\u5f0f (Repository)"},a=void 0,l={unversionedId:"dbcontext-repository",id:"dbcontext-repository",title:"9.4 \u4ed3\u50a8\u6a21\u5f0f",description:"9.4.1 \u4ec0\u4e48\u662f\u4ed3\u50a8",source:"@site/docs/dbcontext-repository.mdx",sourceDirName:".",slug:"/dbcontext-repository",permalink:"/docs/dbcontext-repository",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-repository.mdx",tags:[],version:"current",frontMatter:{id:"dbcontext-repository",title:"9.4 \u4ed3\u50a8\u6a21\u5f0f",sidebar_label:"9.4 \u4ed3\u50a8\u6a21\u5f0f (Repository)"},sidebar:"docs",previous:{title:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53",permalink:"/docs/entity"},next:{title:"9.5 \u65b0\u589e\u64cd\u4f5c",permalink:"/docs/dbcontext-add"}},p={},s=[{value:"9.4.1 \u4ec0\u4e48\u662f\u4ed3\u50a8",id:"941-\u4ec0\u4e48\u662f\u4ed3\u50a8",level:2},{value:"9.4.2 \u5185\u7f6e\u4ed3\u50a8",id:"942-\u5185\u7f6e\u4ed3\u50a8",level:2},{value:"9.4.2.1 \u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8",id:"9421-\u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8",level:3},{value:"9.4.2.2 \u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8",id:"9422-\u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8",level:3},{value:"9.4.2.3 \u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8",id:"9423-\u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8",level:3},{value:"9.4.2.4 <code>Sql</code> \u64cd\u4f5c\u4ed3\u50a8",id:"9424-sql-\u64cd\u4f5c\u4ed3\u50a8",level:3},{value:"9.4.2.5 \u591a\u6570\u636e\u5e93 <code>Sql</code> \u64cd\u4f5c\u4ed3\u50a8",id:"9425-\u591a\u6570\u636e\u5e93-sql-\u64cd\u4f5c\u4ed3\u50a8",level:3},{value:"9.4.2.6 \u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"9426-\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.7 \u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"9427-\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.8 \u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"9428-\u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.9 \u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"9429-\u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.10 \u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"94210-\u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.11 \u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"94211-\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.12 \u53ea\u5141\u8bb8 <code>Sql</code> \u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"94212-\u53ea\u5141\u8bb8-sql-\u67e5\u8be2\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.13 \u53ea\u5141\u8bb8 <code>Sql</code> \u975e\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09",id:"94213-\u53ea\u5141\u8bb8-sql-\u975e\u67e5\u8be2\u4ed3\u50a8\u652f\u6301\u591a\u5e93",level:3},{value:"9.4.2.14 \u8bfb\u5199\u5206\u79bb\u4ed3\u50a8",id:"94214-\u8bfb\u5199\u5206\u79bb\u4ed3\u50a8",level:3},{value:"9.4.2.15 \u5b9a\u4f4d\u5668\u4ed3\u50a8",id:"94215-\u5b9a\u4f4d\u5668\u4ed3\u50a8",level:3},{value:"9.4.3 \u4ed3\u50a8\u4f7f\u7528",id:"943-\u4ed3\u50a8\u4f7f\u7528",level:2},{value:"9.4.3.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165",id:"9431-\u6784\u9020\u51fd\u6570\u6ce8\u5165",level:3},{value:"9.4.3.2 \u65b9\u6cd5\u53c2\u6570\u6ce8\u5165",id:"9432-\u65b9\u6cd5\u53c2\u6570\u6ce8\u5165",level:3},{value:"9.4.3.3 <code>Db.GetRepository</code> \u83b7\u53d6",id:"9433-dbgetrepository-\u83b7\u53d6",level:3},{value:"9.4.4 \u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5",id:"944-\u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5",level:2},{value:"9.4.4.1 \u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8",id:"9441-\u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8",level:3},{value:"9.4.4.2 \u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b",id:"9442-\u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b",level:3},{value:"9.4.4.3 \u83b7\u53d6 <code>Sql</code> \u64cd\u4f5c\u4ed3\u50a8",id:"9443-\u83b7\u53d6-sql-\u64cd\u4f5c\u4ed3\u50a8",level:3},{value:"9.4.5 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",id:"945-\u591a\u6570\u636e\u5e93\u64cd\u4f5c",level:2},{value:"9.4.5.1 \u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93",id:"9451-\u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93",level:3},{value:"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93",id:"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93",level:4},{value:"\u53e6\u5916\u4efb\u4f55\u4ed3\u50a8\u6216\u5b9e\u4f53\u914d\u7f6e\u90fd\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u540c\u65f6\u64cd\u4f5c",id:"\u53e6\u5916\u4efb\u4f55\u4ed3\u50a8\u6216\u5b9e\u4f53\u914d\u7f6e\u90fd\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u540c\u65f6\u64cd\u4f5c",level:4},{value:"9.4.6 \u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528",id:"946-\u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528",level:2},{value:"9.4.7 \u81ea\u5b9a\u4e49\u4ed3\u50a8",id:"947-\u81ea\u5b9a\u4e49\u4ed3\u50a8",level:2},{value:"9.4.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"948-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"941-\u4ec0\u4e48\u662f\u4ed3\u50a8"},"9.4.1 \u4ec0\u4e48\u662f\u4ed3\u50a8"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u9886\u57df\u5c42\u548c\u6570\u636e\u6620\u5c04\u5c42\u7684\u4e2d\u4ecb,\u4f7f\u7528\u7c7b\u4f3c\u96c6\u5408\u7684\u63a5\u53e3\u6765\u5b58\u53d6\u9886\u57df\u5bf9\u8c61\uff0c\u5b9e\u9645\u4e0a\uff0c\u4ed3\u50a8\u88ab\u7528\u4e8e\u9886\u57df\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e0a\u7684\u64cd\u4f5c\uff08\u5b9e\u4f53 Entity \u548c\u503c\u5bf9\u8c61 Value types\uff09\u3002\u4e00\u822c\u6765\u8bf4,\u6211\u4eec\u9488\u5bf9\u4e0d\u540c\u7684\u5b9e\u4f53(\u6216\u805a\u5408\u6839 Aggregate Root)\u4f1a\u521b\u5efa\u76f8\u5bf9\u5e94\u7684\u4ed3\u50a8\u3002")),(0,r.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u4ed3\u50a8\u5c31\u662f\u6570\u636e\u5b58\u53d6\u64cd\u4f5c\u7684\u8f7d\u4f53\uff0c\u4f46\u4e0d\u9650\u5b9a\u4e8e\u6570\u636e\u5e93\u3002"),(0,r.kt)("h2",{id:"942-\u5185\u7f6e\u4ed3\u50a8"},"9.4.2 \u5185\u7f6e\u4ed3\u50a8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5185\u7f6e\u4e86\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u4ed3\u50a8\uff0c\u65b9\u4fbf\u5927\u5bb6\u62d3\u5c55\u548c\u96c6\u6210\uff1a"),(0,r.kt)("admonition",{title:"\u5173\u4e8e\u4f9d\u8d56\u6ce8\u5165\u8bf4\u660e",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u80fd\u591f\u88ab\u4f9d\u8d56\u6ce8\u5165\u89e3\u6790\u670d\u52a1\u7684\u4ed3\u50a8\u6709\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IRepository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IRepository<TEntity>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IRepository<TEntity, TDbContextLocator>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlRepository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlRepository<TDbContextLocator>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IMSRepository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IMSRepository<TMasterDbContextLocator>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IMSRepository<TMasterDbContextLocator,...TSlaveDbContextLocator8>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDbRepository<TDbContextLocator>"))),(0,r.kt)("p",{parentName:"admonition"},"\u8fd8\u6709\u4e24\u4e2a\u79c1\u6709\u4ed3\u50a8\uff0c\u4e5f\u662f\u6240\u6709\u4ed3\u50a8\u7684\u57fa\u7c7b\uff08\u7528\u4e8e\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u5f00\u53d1\uff09"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPrivateRepository<TEntity>"),"\uff1a\u6240\u6709\u5b9e\u4f53\u4ed3\u50a8\u7684\u57fa\u7c7b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPrivateSqlRepository"),"\uff1a\u6240\u6709\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u57fa\u7c7b")),(0,r.kt)("p",{parentName:"admonition"},"\u9664\u6b64\u4e4b\u540e\u7684\u6240\u6709\u4ed3\u50a8\u53ea\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"rep.Constraint<TRepository>()")," \u8fdb\u884c\u7ea6\u675f\u521b\u5efa\uff0c\u5982\uff0c\u53ea\u8bfb\u4ed3\u50a8\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var readRepository = rep.Constraint<IReadableRepository<TEntity>>();\n"))),(0,r.kt)("h3",{id:"9421-\u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8"},"9.4.2.1 \u975e\u6cdb\u578b\u8d85\u7ea7\u4ed3\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IRepository"),"\uff1a\u9ed8\u8ba4\u975e\u6cdb\u578b\u4ed3\u50a8\u63a5\u53e3\uff0c\u652f\u6301\u5207\u6362\u5230\u4efb\u4f55\u4ed3\u50a8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EFCoreRepository"),"\uff1a\u9ed8\u8ba4\u975e\u6cdb\u578b\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9422-\u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8"},"9.4.2.2 \u6cdb\u578b\u5b9e\u4f53\u4ed3\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EFCoreRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9423-\u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8"},"9.4.2.3 \u6cdb\u578b\u591a\u6570\u636e\u5e93\u5b9e\u4f53\u4ed3\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IRepository<TEntity, TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EFCoreRepository<TEntity, TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9424-sql-\u64cd\u4f5c\u4ed3\u50a8"},"9.4.2.4 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SqlRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9425-\u591a\u6570\u636e\u5e93-sql-\u64cd\u4f5c\u4ed3\u50a8"},"9.4.2.5 \u591a\u6570\u636e\u5e93 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlRepository<TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SqlRepository<TDbContextLocator>"),"\uff1a\u4efb\u610f\u6570\u636e\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9426-\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.6 \u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IReadableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IReadableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u8bfb\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9427-\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.7 \u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IWritableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IWritableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5199\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9428-\u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.8 \u53ea\u5141\u8bb8\u65b0\u589e\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IInsertableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u65b0\u589e\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IInsertableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u65b0\u589e\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"9429-\u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.9 \u53ea\u5141\u8bb8\u66f4\u65b0\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IUpdateableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u66f4\u65b0\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IUpdateableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u66f4\u65b0\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"94210-\u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.10 \u53ea\u5141\u8bb8\u5220\u9664\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDeletableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u5220\u9664\u7684\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDeletableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u5220\u9664\u7684\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"94211-\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.11 \u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("admonition",{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion 2.5.1 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u6b64\u64cd\u4f5c\u8ba9\u5f88\u591a\u4e0d\u4e86\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"EFCore")," \u7684\u5f00\u53d1\u8005\u4ea7\u751f\u4e86\u5f88\u5927\u7684\u8bef\u89e3\uff0c\u4e0d\u77e5\u4f55\u65f6\u65b0\u589e\u6216\u4f55\u65f6\u66f4\u65b0\uff0c\u6545\u79fb\u9664\u6b64\u529f\u80fd\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IOperableRepository<TEntity>"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IOperableRepository<TEntity, TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u62d3\u5c55\u64cd\u4f5c\u5b9e\u4f53\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"94212-\u53ea\u5141\u8bb8-sql-\u67e5\u8be2\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.12 \u53ea\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Sql")," \u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlReaderRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u67e5\u8be2\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlReaderRepository<TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u67e5\u8be2\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"94213-\u53ea\u5141\u8bb8-sql-\u975e\u67e5\u8be2\u4ed3\u50a8\u652f\u6301\u591a\u5e93"},"9.4.2.13 \u53ea\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Sql")," \u975e\u67e5\u8be2\u4ed3\u50a8\uff08\u652f\u6301\u591a\u5e93\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlExecutableRepository"),"\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u975e\u67e5\u8be2\u4ed3\u50a8\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISqlExecutableRepository<TDbContextLocator>"),"\uff1a\u591a\u6570\u636e\u5e93\u53ea\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u975e\u67e5\u8be2\u4ed3\u50a8\u5b9e\u73b0")),(0,r.kt)("h3",{id:"94214-\u8bfb\u5199\u5206\u79bb\u4ed3\u50a8"},"9.4.2.14 \u8bfb\u5199\u5206\u79bb\u4ed3\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IMSRepository"),"\uff1a\u6700\u591a\u652f\u6301 ",(0,r.kt)("strong",{parentName:"li"},"\u4e00\u4e3b 7 \u4ece")," \u4ed3\u50a8")),(0,r.kt)("h3",{id:"94215-\u5b9a\u4f4d\u5668\u4ed3\u50a8"},"9.4.2.15 \u5b9a\u4f4d\u5668\u4ed3\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDbRepository<TDbContextLocator>"),"\uff1a\u521d\u59cb\u5316\u7279\u5b9a\u6570\u636e\u5e93\u4ed3\u50a8")),(0,r.kt)("h2",{id:"943-\u4ed3\u50a8\u4f7f\u7528"},"9.4.3 \u4ed3\u50a8\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u975e\u5e38\u591a\u7684\u65b9\u5f0f\u521b\u5efa\u4ed3\u50a8\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u5927\u5bb6\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u573a\u666f\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"9431-\u6784\u9020\u51fd\u6570\u6ce8\u5165"},"9.4.3.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2}",showLineNumbers:!0,"":!0,"{2}":!0},"private readonly IRepository<Person> _personRepository;\npublic FurionService(IRepository<Person> personRepository)\n{\n    _personRepository = personRepository;\n}\n")),(0,r.kt)("h3",{id:"9432-\u65b9\u6cd5\u53c2\u6570\u6ce8\u5165"},"9.4.3.2 \u65b9\u6cd5\u53c2\u6570\u6ce8\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1}",showLineNumbers:!0,"":!0,"{1}":!0},"public async Task<List<PersonDto>> GetAll([FromServices] IRepository<Person> repository, string keyword)\n{\n    var persons = await repository.AsQueryable().ToListAsync();\n    return persons.Adapt<List<PersonDto>>();\n}\n")),(0,r.kt)("h3",{id:"9433-dbgetrepository-\u83b7\u53d6"},"9.4.3.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Db.GetRepository")," \u83b7\u53d6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u975e\u6cdb\u578b\u4ed3\u50a8\nvar repository = Db.GetRepository();\n\n// \u6cdb\u578b\u4ed3\u50a8\nvar repository = Db.GetRepository<Person>();\n\n// Sql \u4ed3\u50a8\nvar sqlRepository = Db.GetSqlRepository();\n")),(0,r.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u7ba1\u91c7\u7528\u54ea\u79cd\u65b9\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u90fd\u4fdd\u8bc1\u4e86\u4ed3\u50a8\u4e00\u6b21\u8bf7\u6c42\u552f\u4e00\u6027\u3002\u540c\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Db.GetRepository<TEntity>()")," \u65b9\u5f0f\u652f\u6301\u4efb\u4f55\u9759\u6001\u7c7b\u4e2d\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"944-\u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5"},"9.4.4 \u4ed3\u50a8\u9ad8\u7ea7\u7528\u6cd5"),(0,r.kt)("h3",{id:"9441-\u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8"},"9.4.4.1 \u52a8\u6001\u5207\u6362\u5b9e\u4f53\u4ed3\u50a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var userRepository = personRepository.Change<User>();\n")),(0,r.kt)("h3",{id:"9442-\u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b"},"9.4.4.2 \u52a8\u6001\u5207\u6362\u4ed3\u50a8\u7c7b\u578b"),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u5e93\u4ed3\u50a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u53ea\u8bfb\u4ed3\u50a8\nvar readRepository = personRepository.Constraint<IReadableRepository<User>>();\n\n// \u53ea\u5199\u4ed3\u50a8\nvar writeRepository = personRepository.Constraint<IWritableRepository<User>>();\n")),(0,r.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},".Constraint")," \u652f\u6301\u5207\u6362\u4efb\u4f55\u4ed3\u50a8\u7c7b\u578b\u3002")),(0,r.kt)("h3",{id:"9443-\u83b7\u53d6-sql-\u64cd\u4f5c\u4ed3\u50a8"},"9.4.4.3 \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Sql")," \u64cd\u4f5c\u4ed3\u50a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var sqlRepository = repository.Sql();\n")),(0,r.kt)("h2",{id:"945-\u591a\u6570\u636e\u5e93\u64cd\u4f5c"},"9.4.5 \u591a\u6570\u636e\u5e93\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"DbContextLocator")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5b9e\u73b0\u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u53ef\u4ee5\u968f\u610f\u5207\u6362\u6570\u636e\u5e93"),(0,r.kt)("h3",{id:"9451-\u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93"},"9.4.5.1 \u52a8\u6001\u5207\u6362\u591a\u4e2a\u6570\u636e\u5e93"),(0,r.kt)("h4",{id:"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93"},"\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = repository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = repository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = repository.Change<Person, SqliteDbContextLocator>();\n\n// \u5176\u4ed6\u66f4\u591a\u6570\u636e\u5e93\u4e00\u6837\u7684\u64cd\u4f5c\n")),(0,r.kt)("h4",{id:"\u53e6\u5916\u4efb\u4f55\u4ed3\u50a8\u6216\u5b9e\u4f53\u914d\u7f6e\u90fd\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u540c\u65f6\u64cd\u4f5c"},"\u53e6\u5916\u4efb\u4f55\u4ed3\u50a8\u6216\u5b9e\u4f53\u914d\u7f6e\u90fd\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u540c\u65f6\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4ed3\u50a8\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"IRepository<Person, MsSqlDbContextLocator> mssqlRepository\n\nISqlRepository<MsSqlDbContextLocator> mssqlRepository;\n")),(0,r.kt)("p",null,"\u52a8\u6001 ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," \u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'"select * from person".Change<MsSqlDbContextLocator>().SqlQuery();\n')),(0,r.kt)("p",null,"\u5b9e\u4f53\u914d\u7f6e\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"public class User:Entity<int, MsSqlDbContextLocator, MySqlDbContextLocator>\n{\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Sql")," \u4ee3\u7406\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'[SqlFunction("funcName", DbContextLocator = typeof(MySqlDbContextLocator))]\nint GetAge(int id);\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Linq")," \u4e2d\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'[QueryableFunction("funcName","dbo", DbContextLocator = typeof(MySqlDbContextLocator))]\nstring GetName()=> throw Oops.Oh("\u4e0d\u652f\u6301\u8be5\u6570\u636e\u5e93\u64cd\u4f5c");\n')),(0,r.kt)("h2",{id:"946-\u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528"},"9.4.6 \u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,"\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"DbContext")," \u9ed8\u8ba4\u6ce8\u518c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Scoped")," \u751f\u5b58\u5468\u671f\uff0c\u6240\u4ee5\u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IServiceScopeFactory")," \u83b7\u53d6\u6240\u6709\u670d\u52a1\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'public class JobService : BackgroundService\n{\n    // \u65e5\u5fd7\u5bf9\u8c61\n    private readonly ILogger<JobService> _logger;\n\n    // \u670d\u52a1\u5de5\u5382\n    private readonly IServiceScopeFactory _scopeFactory;\n    public JobService(ILogger<JobService> logger\n        , IServiceScopeFactory scopeFactory)\n    {\n        _logger = logger;\n        _scopeFactory = scopeFactory;\n    }\n\n    protected override Task ExecuteAsync(CancellationToken stoppingToken)\n    {\n        _logger.LogInformation("\u5199\u65e5\u5fd7~~");\n\n        using (var scope = _scopeFactory.CreateScope())\n        {\n            var services = scope.ServiceProvider;\n\n            // \u83b7\u53d6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n            var dbContext = Db.GetDbContext(services);\n\n            // \u83b7\u53d6\u4ed3\u50a8\n            var respository = Db.GetRepository<Person>(services);\n\n            // \u89e3\u6790\u5176\u4ed6\u670d\u52a1\n            var otherService = services.GetService<XXX>();\n        }\n\n        return Task.CompletedTask;\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u6570\u636e\u5e93\u64cd\u4f5c\u6ce8\u610f",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f5c\u7528\u57df\u4e2d\u5bf9",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u6709\u4efb\u4f55\u53d8\u66f4\u64cd\u4f5c"),"\uff0c\u9700\u624b\u52a8\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u65b9\u6cd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Scoped.CreateUow(handler)")," \u4ee3\u66ff\u3002")),(0,r.kt)("h2",{id:"947-\u81ea\u5b9a\u4e49\u4ed3\u50a8"},"9.4.7 \u81ea\u5b9a\u4e49\u4ed3\u50a8"),(0,r.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u4ed3\u50a8\uff0c\u62d3\u5c55\u73b0\u6709\u7684\u4ed3\u50a8\u529f\u80fd\uff0c\u53ef\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\uff08\u542b\u5b9a\u4f4d\u5668\u4ed3\u50a8\u548c\u9ed8\u8ba4\u4ed3\u50a8\u5b9e\u73b0\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'/// <summary>\n/// \u81ea\u5b9a\u4e49\u4ed3\u50a8\u63a5\u53e3\n/// </summary>\n/// <typeparam name="TEntity"></typeparam>\n/// <typeparam name="TDbContextLocator"></typeparam>\npublic interface IMyRepository<TEntity, TDbContextLocator> : IPrivateRepository<TEntity>\n    where TEntity : class, IPrivateEntity, new()\n    where TDbContextLocator : class, IDbContextLocator\n{\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u65b9\u6cd5\n    /// </summary>\n    void MyMethod();\n}\n\n/// <summary>\n/// \u81ea\u5b9a\u4e49\u4ed3\u50a8\u5b9e\u73b0\u7c7b\n/// </summary>\n/// <typeparam name="TEntity"></typeparam>\n/// <typeparam name="TDbContextLocator"></typeparam>\npublic class MyRepository<TEntity, TDbContextLocator> : PrivateRepository<TEntity>, IMyRepository<TEntity, TDbContextLocator>, IScoped\n    where TEntity : class, IPrivateEntity, new()\n    where TDbContextLocator : class, IDbContextLocator\n{\n    /// <summary>\n    /// \u5b9e\u73b0\u57fa\u7c7b\u6784\u9020\u51fd\u6570\n    /// </summary>\n    /// <param name="serviceProvider"></param>\n    public MyRepository(IServiceProvider serviceProvider)\n        : base(typeof(TDbContextLocator), serviceProvider)\n    {\n    }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u65b9\u6cd5\n    /// </summary>\n    public void MyMethod()\n    {\n        throw new System.NotImplementedException();\n    }\n}\n\n/// <summary>\n/// \u9ed8\u8ba4\u6570\u636e\u5e93\u81ea\u5b9a\u4e49\u4ed3\u50a8\u63a5\u53e3\n/// </summary>\n/// <typeparam name="TEntity"></typeparam>\npublic interface IMyRepository<TEntity> : IMyRepository<TEntity, MasterDbContextLocator>\n    where TEntity : class, IPrivateEntity, new()\n{\n}\n\n/// <summary>\n/// \u9ed8\u8ba4\u6570\u636e\u5e93\u81ea\u5b9a\u4e49\u4ed3\u50a8\u5b9e\u73b0\n/// </summary>\n/// <typeparam name="TEntity"></typeparam>\npublic class MyRepository<TEntity> : MyRepository<TEntity, MasterDbContextLocator>, IMyRepository<TEntity>, IScoped\n    where TEntity : class, IPrivateEntity, new()\n{\n    public MyRepository(IServiceProvider serviceProvider) : base(serviceProvider)\n    {\n    }\n}\n')),(0,r.kt)("h2",{id:"948-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.4.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}u.isMDXComponent=!0}}]);