(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5230],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7673:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},s=void 0,u={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"tutorials/basic/running_your_app/multi-run",isDocsHomePage:!1,title:"Multi-run",description:"Sometimes you want to run the same application with multiple different configurations.",source:"@site/docs/tutorials/basic/running_your_app/2_multirun.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/2_multirun.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1624565086,formattedLastUpdatedAt:"6/24/2021",sidebarPosition:2,frontMatter:{id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},sidebar:"docs",previous:{title:"Putting it all together",permalink:"/docs/next/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory"}},p=[{value:"Additional sweep types",id:"additional-sweep-types",children:[]},{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you want to run the same application with multiple different configurations.",(0,o.kt)("br",{parentName:"p"}),"\n","E.g. running a performance test on each of the databases with each of the schemas."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--multirun")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list specifying the values for each dimension you want to sweep."),(0,o.kt)("p",null,"The following sweeps over all combinations of the dbs and schemas."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py -m db=mysql,postgresql schema=warehouse,support,school"',title:'"$',python:!0,"my_app.py":!0,"-m":!0,db:"mysql,postgresql",schema:'warehouse,support,school"'},"[2021-01-20 17:25:03,317][HYDRA] Launching 6 jobs locally\n[2021-01-20 17:25:03,318][HYDRA]        #0 : db=mysql schema=warehouse\n[2021-01-20 17:25:03,458][HYDRA]        #1 : db=mysql schema=support\n[2021-01-20 17:25:03,602][HYDRA]        #2 : db=mysql schema=school\n[2021-01-20 17:25:03,755][HYDRA]        #3 : db=postgresql schema=warehouse\n[2021-01-20 17:25:03,895][HYDRA]        #4 : db=postgresql schema=support\n[2021-01-20 17:25:04,040][HYDRA]        #5 : db=postgresql schema=school\n")),(0,o.kt)("p",null,"The printed configurations have been omitted for brevity."),(0,o.kt)("h3",{id:"additional-sweep-types"},"Additional sweep types"),(0,o.kt)("p",null,"Hydra supports other kinds of sweeps, e.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x=range(1,10)                  # 1-9\nschema=glob(*)                 # warehouse,support,school\nschema=glob(*,exclude=w*)      # support,school\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"Extended Override syntax")," for details."),(0,o.kt)("h3",{id:"sweeper"},"Sweeper"),(0,o.kt)("p",null,"The default sweeping logic is built into Hydra. Additional sweepers are available as plugins.\nFor example, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/plugins/ax_sweeper"},"Ax Sweeper")," can automatically find the best parameter combination!"),(0,o.kt)("h3",{id:"launcher"},"Launcher"),(0,o.kt)("p",null,"By default, Hydra runs your multi-run jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/plugins/joblib_launcher"},"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}d.isMDXComponent=!0}}]);