"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2710],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={id:"dbcontext-delete",title:"9.8 \u5220\u9664\u64cd\u4f5c",sidebar_label:"9.8 \u5220\u9664\u64cd\u4f5c"},i=void 0,s={unversionedId:"dbcontext-delete",id:"dbcontext-delete",title:"9.8 \u5220\u9664\u64cd\u4f5c",description:"\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b Exists \u5355\u8bcd\u7684\u5728 Furion 2.6.0 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002",source:"@site/docs/dbcontext-delete.mdx",sourceDirName:".",slug:"/dbcontext-delete",permalink:"/docs/dbcontext-delete",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-delete.mdx",tags:[],version:"current",frontMatter:{id:"dbcontext-delete",title:"9.8 \u5220\u9664\u64cd\u4f5c",sidebar_label:"9.8 \u5220\u9664\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",permalink:"/docs/dbcontext-add-or-update"},next:{title:"9.9 \u6279\u91cf\u64cd\u4f5c",permalink:"/docs/dbcontext-batch"}},l={},p=[{value:"9.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"981-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"982-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"983-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"984-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"985-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"986-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.8.7 \u5047\u5220\u9664/\u8f6f\u5220\u9664",id:"987-\u5047\u5220\u9664\u8f6f\u5220\u9664",level:2},{value:"9.8.7.1 \u6dfb\u52a0 <code>[FakeDelete]</code> \u6807\u8bb0",id:"9871-\u6dfb\u52a0-fakedelete-\u6807\u8bb0",level:3},{value:"9.8.7.2 \u5047\u5220\u9664\u4f7f\u7528",id:"9872-\u5047\u5220\u9664\u4f7f\u7528",level:3},{value:"9.8.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"988-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"Exists")," \u5355\u8bcd\u7684\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 2.6.0 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002")),(0,a.kt)("h2",{id:"981-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete();\n\n// \u793a\u4f8b\u4e09\nrepository.ChangeEntityState(user, EntityState.Deleted);\n\n// \u793a\u4f8b\u56db\nrepository.Entities.Remove(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync();\n")),(0,a.kt)("h2",{id:"982-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\u7acb\u5373\u63d0\u4ea4"},"9.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync();\n")),(0,a.kt)("h2",{id:"983-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(1);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync(1);\n")),(0,a.kt)("h2",{id:"984-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\u7acb\u5373\u63d0\u4ea4"},"9.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync(1);\n")),(0,a.kt)("h2",{id:"985-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExists(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExists(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsAsync(1);\n")),(0,a.kt)("h2",{id:"986-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\u7acb\u5373\u63d0\u4ea4"},"9.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExistsNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExistsNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsNowAsync(1);\n")),(0,a.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6240\u6709\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"SaveChangesAsync"),"\u3002")),(0,a.kt)("h2",{id:"987-\u5047\u5220\u9664\u8f6f\u5220\u9664"},"9.8.7 \u5047\u5220\u9664/\u8f6f\u5220\u9664"),(0,a.kt)("admonition",{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 2.10 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"[FakeDelete]")," \u7279\u6027\u6807\u8bb0\u5047\u5220\u9664\u7279\u6027\uff0c\u5982\uff1a"),(0,a.kt)("h3",{id:"9871-\u6dfb\u52a0-fakedelete-\u6807\u8bb0"},"9.8.7.1 \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h3"},"[FakeDelete]")," \u6807\u8bb0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"public class Model: IEntity\n{\n    [FakeDelete(true)]  // \u8bbe\u7f6e\u5047\u5220\u9664\u7684\u503c\n    public bool IsDeleted { get; set; }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[FakeDelete]"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"[FakeDelete]")," \u5c5e\u6027\u62e5\u6709\u5e26\u4e00\u4e2a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u5047\u5220\u9664\u7684\u503c")),(0,a.kt)("h3",{id:"9872-\u5047\u5220\u9664\u4f7f\u7528"},"9.8.7.2 \u5047\u5220\u9664\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.FakeDelete(entity);\n\n// \u793a\u4f8b\u4e8c\nrepository.FakeDeleteNow(entity);\n\n// \u793a\u4f8b\u4e09\nrepository.FakeDelete(1);\n\n// \u793a\u4f8b\u56db\nrepository.FakeDeleteNow(1);\n\n// \u793a\u4f8b\u4e94\nentity.FakeDelete();\n\n// \u793a\u4f8b\u516d\nrepository.UpdateInclude(user, u => u.IsDeleted);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.FakeDeleteAsync(entity);\n\n// \u793a\u4f8b\u4e8c\nawait repository.FakeDeleteNowAsync(entity);\n\n// \u793a\u4f8b\u4e09\nawait repository.FakeDeleteAsync(1);\n\n// \u793a\u4f8b\u56db\nawait repository.FakeDeleteNowAsync(1);\n\n// \u793a\u4f8b\u4e94\nawait entity.FakeDeleteAsync();\n\n// \u793a\u4f8b\u516d\nawait repository.UpdateIncludeAsync(user, u => u.IsDeleted);\n")),(0,a.kt)("h2",{id:"988-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.8.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}u.isMDXComponent=!0}}]);