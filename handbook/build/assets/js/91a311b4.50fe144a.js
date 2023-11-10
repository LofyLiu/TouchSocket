"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,d=m["".concat(a,".").concat(b)]||m[b]||u[b]||s;return n?o.createElement(d,c(c({ref:t},p),{},{components:n})):o.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=b;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<s;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const s={id:"jsonserialize",title:"Json\u5e8f\u5217\u5316"},c=void 0,i={unversionedId:"jsonserialize",id:"jsonserialize",title:"Json\u5e8f\u5217\u5316",description:"\u5b9a\u4e49",source:"@site/docs/jsonserialize.mdx",sourceDirName:".",slug:"/jsonserialize",permalink:"/touchsocket/docs/current/jsonserialize",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/jsonserialize.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1698853612,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"jsonserialize",title:"Json\u5e8f\u5217\u5316"},sidebar:"docs",previous:{title:"\u9ad8\u6027\u80fd\u4e8c\u8fdb\u5236\u5e8f\u5217\u5316",permalink:"/touchsocket/docs/current/fastbinaryformatter"},next:{title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668(IOC)",permalink:"/touchsocket/docs/current/ioc"}},a={},l=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u52a8\u6001\u8c03\u6574\u7684Json\u7b56\u7565",id:"\u4e8c\u52a8\u6001\u8c03\u6574\u7684json\u7b56\u7565",level:2},{value:"\u4e09\u3001JsonFast\u6027\u80fd",id:"\u4e09jsonfast\u6027\u80fd",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Core ",(0,r.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Core"},"TouchSocket.Core.dll")),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"\u5728TouchSocket\u4e2d\uff0c\u5185\u7f6e\u4e86Json\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"string jsonstr=SerializeConvert.ToJson(new object());//\u5e8f\u5217\u5316\nobject obj=SerializeConvert.FromJson<object>(jsonstr);//\u53cd\u5e8f\u5217\u5316\n")),(0,r.kt)("h2",{id:"\u4e8c\u52a8\u6001\u8c03\u6574\u7684json\u7b56\u7565"},"\u4e8c\u3001\u52a8\u6001\u8c03\u6574\u7684Json\u7b56\u7565"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff1a\n\u5728net45\u548cnetstandard2.0\u5e73\u53f0\u65f6\uff0c\u5e8f\u5217\u5316\u65b9\u5f0f\u662f\u7531",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/majorworld/jsonfast"},"JsonFast\uff08\u7fa4\u53cb\u8001\u6c5f\uff09"),"\u63d0\u4f9b\u7684\u5355\u6587\u4ef6json\u5e8f\u5217\u5316\u3002\u8be5json\u5de5\u5177\u80fd\u591f\u5e8f\u5217\u5316\u5927\u591a\u6570\u6570\u636e\u7ed3\u6784\uff0c\u4e14\u6027\u80fd\u548cNewtonsoft.Json\u4e0d\u76f8\u4e0a\u4e0b\uff08\u89c1\u4e0b\u6d4b\u8bd5\uff09\u3002\n\u5728netcoreapp3.1\u53ca\u4ee5\u4e0a\u5e73\u53f0\u65f6\uff0c\u5e8f\u5217\u5316\u65b9\u5f0f\u4f7f\u7528System.Text.Json\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\n\u5f53\u5e94\u7528\u4e2d\u52a0\u8f7d\u4e86Newtonsoft.Json\u7684\u7a0b\u5e8f\u96c6\u540e\uff0c\u6240\u6709\u7684\u5e73\u53f0\u7684\u5e8f\u5217\u5316\uff0c\u5747\u4f1a\u4f7f\u7528Newtonsoft.Json\u3002\u53ef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"**SerializeConvert.NewtonsoftJsonIsSupported**"),"\u9759\u6001\u5c5e\u6027\u83b7\u53d6\u5f53\u524d\u662f\u5426\u652f\u6301Newtonsoft.Json\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u624b\u52a8\u52a0\u8f7dNewtonsoft.Json\uff08\u4e00\u822c\u5728",(0,r.kt)("strong",{parentName:"p"},"Unity3d"),"\u4e2d\u9700\u8981\u624b\u52a8\u52a0\u8f7d\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"bool IsSupported=SerializeConvert.LoadNewtonsoftJson(typeof(JsonConvert));//\u8fd4\u56de\u503c\u6307\u793a\u662f\u5426\u6210\u529f\u52a0\u8f7d\n")),(0,r.kt)("p",null,"\u5f53\u52a0\u8f7d\u4e86Newtonsoft.Json\u7684\u7a0b\u5e8f\u96c6\uff0c\u4f46\u662f\u4e0d\u60f3\u4f7f\u7528\u8be5\u5de5\u5177\u5e8f\u5217\u5316\u65f6\uff0c\u53ef\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"**SerializeConvert.NewtonsoftJsonFirst**"),"\u9759\u6001\u5c5e\u6027\u8bbe\u4e3afalse\u3002"),(0,r.kt)("h2",{id:"\u4e09jsonfast\u6027\u80fd"},"\u4e09\u3001JsonFast\u6027\u80fd"),(0,r.kt)("p",null,"\u3010\u7b80\u5355\u6570\u636e\u5bf9\u8c61\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"public class SimpleObject \n{\n    public int Age { get; set; }\n    public string Name { get; set; }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'[Benchmark]\npublic void JsonFast_SimpleObject()\n{\n    var v = new SimpleObject { Age = 40, Name = "John" };\n    for (int i = 0; i < Count; i++)\n    {\n        var str = JsonFastConverter.JsonTo(v);\n        var val = JsonFastConverter.JsonFrom<SimpleObject>(str);\n    }\n}\n')),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e3a1w\u6b21\u7684\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\u3002JsonFast\u7684\u6548\u7387\u751a\u81f3\u8fd8\u7a0d\u9ad8\u4e00\u4e9b\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(2659).Z,width:"1198",height:"183"})),(0,r.kt)("p",null,"\u3010\u590d\u6742\u5bf9\u8c61\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"public class ComplexObject\n{\n    public Dictionary<int, int> Dic1 { get; set; }\n    public Dictionary<int, string> Dic2 { get; set; }\n    public Dictionary<string, string> Dic3 { get; set; }\n    public Dictionary<int, Arg> Dic4 { get; set; }\n    public List<int> List1 { get; set; }\n    public List<string> List2 { get; set; }\n    public List<byte[]> List3 { get; set; }\n    public int P1 { get; set; }\n    public string P2 { get; set; }\n    public long P3 { get; set; }\n    public byte P4 { get; set; }\n    public DateTime P5 { get; set; }\n    public double P6 { get; set; }\n    public byte[] P7 { get; set; }\n}\n\npublic class Arg\n{\n    public Arg()\n    {\n    }\n\n    public Arg(int myProperty)\n    {\n        MyProperty = myProperty;\n    }\n\n    public int MyProperty { get; set; }\n}\n")),(0,r.kt)("p",null,"\u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'private ComplexObject GetComplexObject()\n{\n    ComplexObject complexObject = new ComplexObject();\n    complexObject.P1 = 10;\n    complexObject.P2 = "\u5929\u4e0b\u65e0\u654c";\n    complexObject.P3 = 100;\n    complexObject.P4 = 0;\n    complexObject.P5 = DateTime.Now;\n    complexObject.P6 = 10;\n    complexObject.P7 = new byte[1024 * 64];\n\n    Random random = new Random();\n    random.NextBytes(complexObject.P7);\n\n    complexObject.List1 = new List<int>();\n    complexObject.List1.Add(1);\n    complexObject.List1.Add(2);\n    complexObject.List1.Add(3);\n\n    complexObject.List2 = new List<string>();\n    complexObject.List2.Add("1");\n    complexObject.List2.Add("2");\n    complexObject.List2.Add("3");\n\n    complexObject.List3 = new List<byte[]>();\n    complexObject.List3.Add(new byte[1024]);\n    complexObject.List3.Add(new byte[1024]);\n    complexObject.List3.Add(new byte[1024]);\n\n    complexObject.Dic1 = new Dictionary<int, int>();\n    complexObject.Dic1.Add(1, 1);\n    complexObject.Dic1.Add(2, 2);\n    complexObject.Dic1.Add(3, 3);\n\n    complexObject.Dic2 = new Dictionary<int, string>();\n    complexObject.Dic2.Add(1, "1");\n    complexObject.Dic2.Add(2, "2");\n    complexObject.Dic2.Add(3, "3");\n\n    complexObject.Dic3 = new Dictionary<string, string>();\n    complexObject.Dic3.Add("1", "1");\n    complexObject.Dic3.Add("2", "2");\n    complexObject.Dic3.Add("3", "3");\n\n    complexObject.Dic4 = new Dictionary<int, Arg>();\n    complexObject.Dic4.Add(1, new Arg(1));\n    complexObject.Dic4.Add(2, new Arg(2));\n    complexObject.Dic4.Add(3, new Arg(3));\n    return complexObject;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"[Benchmark]\npublic void JsonFast_ComplexObject()\n{\n    var v = GetComplexObject();\n    for (int i = 0; i < Count; i++)\n    {\n        var str = JsonFastConverter.JsonTo(v);\n        var val = JsonFastConverter.JsonFrom<ComplexObject>(str);\n    }\n}\n")),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e3a100\u6b21\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316\uff0cJsonFast\u6027\u80fd\u7a0d\u5f31\uff0c\u4f46\u662f\u57fa\u672c\u6ee1\u8db3\u8981\u6c42\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(822).Z,width:"1262",height:"188"})))}u.isMDXComponent=!0},2659:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/jsonserialize-1-a32327fa8972eacb38ae1e5930655a90.png"},822:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/jsonserialize-2-c45920c130f4a3cedcaad54fb9d8a389.png"}}]);