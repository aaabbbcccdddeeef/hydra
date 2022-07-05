"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8318],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),c=function(e){return function(n){var t=s(n.components);return r.createElement(e,i({},n,{components:t}))}},s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=s(t),p=a,f=c["".concat(o,".").concat(p)]||c[p]||u[p]||i;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95567:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"hydra-command-line-flags",title:"Hydra's command line flags"},d=void 0,m={unversionedId:"advanced/hydra-command-line-flags",id:"advanced/hydra-command-line-flags",title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/docs/advanced/hydra-command-line-flags.md",sourceDirName:"advanced",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/next/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/hydra-command-line-flags.md",tags:[],version:"current",lastUpdatedBy:"Tim Gates",lastUpdatedAt:1657001819,formattedLastUpdatedAt:"7/5/2022",frontMatter:{id:"hydra-command-line-flags",title:"Hydra's command line flags"},sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/next/advanced/terminology"},next:{title:"Basic Override syntax",permalink:"/docs/next/advanced/override_grammar/basic"}},c=[],s={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra is using the command line for two things:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Controlling Hydra"),(0,i.mdx)("li",{parentName:"ul"},"Configuring your application (See ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/advanced/override_grammar/basic"},"Override Grammar"),")")),(0,i.mdx)("p",null,"Arguments prefixed by - or -- control Hydra; the rest are used to configure the application."),(0,i.mdx)("p",null,"Information about Hydra:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--hydra-help"),": Shows Hydra specific flags"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--version"),": Show Hydra's version and exit")),(0,i.mdx)("p",null,"Information provided by the Hydra app:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--help,-h"),": Shows the application's help. This can be ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/configure_hydra/app_help"},"customized"),".")),(0,i.mdx)("p",null,"Debugging assistance:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--cfg,-c"),": Show config instead of running. Takes as parameter one of ",(0,i.mdx)("inlineCode",{parentName:"li"},"job"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"all"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--resolve"),": Used in conjunction with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"--cfg")," flag; resolve interpolations in the config before printing it."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--package,-p"),": Used in conjunction with --cfg to select a specific config package to show."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--info,-i"),": Print Hydra information. This includes installed plugins, Config Search Path, Defaults List, generated config and more.")),(0,i.mdx)("p",null,"Running Hydra applications:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--run,-r"),": Run is the default mode and is not normally needed."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--multirun,-m"),": Run multiple jobs with the configured launcher and sweeper. See ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/multi-run"},"Multi-run"),".",(0,i.mdx)("br",null),(0,i.mdx)("br",null)),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--config-path,-cp"),": Overrides the ",(0,i.mdx)("inlineCode",{parentName:"li"},"config_path")," specified in ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.main()"),". The ",(0,i.mdx)("inlineCode",{parentName:"li"},"config_path")," is relative to the Python file declaring ",(0,i.mdx)("inlineCode",{parentName:"li"},"@hydra.main()"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--config-name,-cn"),": Overrides the ",(0,i.mdx)("inlineCode",{parentName:"li"},"config_name")," specified in ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.main()"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--config-dir,-cd"),": Adds an additional config directory to the ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/advanced/search_path"},"config search path"),".",(0,i.mdx)("br",{parentName:"li"}),"This is useful for installed apps that want to allow their users to provide additional configs.")),(0,i.mdx)("p",null,"Misc:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--shell-completion,-sc"),": Install or Uninstall ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),".")))}p.isMDXComponent=!0}}]);