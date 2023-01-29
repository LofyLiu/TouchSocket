"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||y[m]||o;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"dependencyproperty",sidebar_position:10,title:"\u4f9d\u8d56\u5c5e\u6027",sidebar_label:"4.10 \u4f9d\u8d56\u5c5e\u6027"},p=void 0,l={unversionedId:"04\u3001Core/dependencyproperty",id:"04\u3001Core/dependencyproperty",title:"\u4f9d\u8d56\u5c5e\u6027",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/04\u3001Core/4.10 \u4f9d\u8d56\u5c5e\u6027.mdx",sourceDirName:"04\u3001Core",slug:"/04\u3001Core/dependencyproperty",permalink:"/touchsocket/docs/04\u3001Core/dependencyproperty",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/04\u3001Core/4.10 \u4f9d\u8d56\u5c5e\u6027.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673587377,formattedLastUpdatedAt:"Jan 13, 2023",sidebarPosition:10,frontMatter:{id:"dependencyproperty",sidebar_position:10,title:"\u4f9d\u8d56\u5c5e\u6027",sidebar_label:"4.10 \u4f9d\u8d56\u5c5e\u6027"},sidebar:"tutorialSidebar",previous:{title:"4.9 \u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668",permalink:"/touchsocket/docs/04\u3001Core/ioc"},next:{title:"4.11 \u6587\u4ef6\u6d41\u6c60",permalink:"/touchsocket/docs/04\u3001Core/filepool"}},i={},c=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027\uff1f",id:"\u4e8c\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027",level:2},{value:"\u4e09\u3001\u4f18\u7f3a\u70b9",id:"\u4e09\u4f18\u7f3a\u70b9",level:2}],s={toc:c};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u7528\u8fc7WPF\u7684\u5c0f\u4f19\u4f34\u4e00\u5b9a\u5bf9\u4f9d\u8d56\u5c5e\u6027\u4e0d\u964c\u751f\u3002\u6240\u4ee5TouchSocket\u6a21\u4eff\u5176\u7ed3\u6784\uff0c\u521b\u5efa\u4e86\u9002\u7528\u4e8e\u7f51\u7edc\u6846\u67b6\u7684\u4f9d\u8d56\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027"},"\u4e8c\u3001\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u5e38\u89c4\u5c5e\u6027\uff0c\u5c31\u662f\u62e5\u6709get\uff0cset\u8bbf\u95ee\u5668\u7684\u5b57\u6bb5\uff0c\u53eb\u505a\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyClass\n{\n    public int MyProperty { get; set; }\n}\n")),(0,a.kt)("p",null,"\u800c\u4f9d\u8d56\u5c5e\u6027\uff0c\u5219\u662f\u5177\u6709\u6ce8\u5165\u7279\u5f81\u7684\u5c5e\u6027\u3002\u5b83\u53ef\u4ee5\u50cf\u666e\u901a\u5c5e\u6027\u4e00\u6837\uff0c\u58f0\u660e\u5728\u7c7b\u5185\u90e8\uff08\u793a\u4f8b1\uff09\u3002\u4e5f\u53ef\u4ee5\u58f0\u660e\u5728\u4efb\u4f55\u5730\u65b9\uff08\u793a\u4f8b2\uff09\u3002"),(0,a.kt)("p",null,"\u3010\u793a\u4f8b1\u3011"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ee7\u627f",(0,a.kt)("strong",{parentName:"li"},"DependencyObject")),(0,a.kt)("li",{parentName:"ol"},"\u6309\u5982\u4e0b\u683c\u5f0f\u751f\u6210\u5c5e\u6027\u9879\uff08propdp\u4ee3\u7801\u5757\u53ef\u5feb\u901f\u5b9e\u73b0\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyClass: DependencyObject\n{\n    /// <summary>\n    /// \u5c5e\u6027\u9879\n    /// </summary>\n    public int MyProperty\n    {\n        get { return GetValue(MyPropertyProperty); }\n        set { SetValue(MyPropertyProperty, value); }\n    }\n\n    /// <summary>\n    /// \u4f9d\u8d56\u9879\n    /// </summary>\n    public static readonly DependencyProperty<int> MyPropertyProperty =\n        DependencyProperty<int>.Register("MyProperty", typeof(MyClass), 10);\n\n}\n')),(0,a.kt)("p",null,"\u3010\u793a\u4f8b2\u3011\n\u5047\u8bbe\u4ee5\u4e0b\u60c5\u51b5\uff1a\n\u5bf9\u4e8eTouchSocket\u7684",(0,a.kt)("strong",{parentName:"p"},"IClient"),"\u63a5\u53e3\u5bf9\u8c61\uff08\u5df2\u7ecf\u5b9e\u73b0IDependencyObject\uff09\uff0c\u5e0c\u671b\u521b\u5efa\u4e00\u4e2aint\u7c7b\u578b\u7684\uff0c\u540d\u4e3aMyProperty\u7684\u4f9d\u8d56\u9879\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u53ef\u4ee5\u7528\u4e0b\u5217\u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static class DependencyExtensions\n{\n   /// <summary>\n    /// \u4f9d\u8d56\u9879\n    /// </summary>\n    public static readonly DependencyProperty<int> MyPropertyProperty =\n        DependencyProperty<int>.Register("MyProperty", typeof(MyClass), 10);\n\n    /// <summary>\n    /// \u8bbe\u7f6eMyProperty\n    /// </summary>\n    /// <typeparam name="TClient"></typeparam>\n    /// <param name="client"></param>\n    /// <param name="value"></param>\n    /// <returns></returns>\n    public static TClient SetMyProperty<TClient>(this TClient client, int value) where TClient : IClient\n    {\n        client.SetValue(MyPropertyProperty, value);\n        return client;\n    }\n\n    /// <summary>\n    /// \u83b7\u53d6MyProperty\n    /// </summary>\n    /// <typeparam name="TClient"></typeparam>\n    /// <param name="client"></param>\n    /// <returns></returns>\n    public static int GetMyProperty<TClient>(this TClient client) where TClient : IClient\n    {\n        return client.GetValue(MyPropertyProperty);\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"TcpClient tcpClient = new TcpClient();\ntcpClient.SetMyProperty(100);\nint MyProperty = tcpClient.GetMyProperty();\n")),(0,a.kt)("h2",{id:"\u4e09\u4f18\u7f3a\u70b9"},"\u4e09\u3001\u4f18\u7f3a\u70b9"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4e0d\u58f0\u660e\u5728\u7c7b\u5185\u90e8\u3002\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u4ece\u5916\u90e8\u6ce8\u5165\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u521d\u59cb\u8d4b\u503c\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u521b\u5efa\u5927\u91cf\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u5360\u7528\u592a\u591a\u5185\u5b58\u3002")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u503c\u7c7b\u578b\uff0c\u6d89\u53ca\u62c6\u88c5\u7bb1\u64cd\u4f5c\uff0c\u5bf9\u6027\u80fd\u6709\u4e00\u5b9a\u6027\u80fd\u5f71\u54cd\uff08\u4e0d\u662f\u51e0\u767e\u4e07\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5ffd\u7565\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f53\u4e00\u4e2a\u5c5e\u6027\u88ab\u9891\u7e41\u4f7f\u7528\u65f6\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u4f9d\u8d56\u5c5e\u6027\u3002")))}y.isMDXComponent=!0}}]);