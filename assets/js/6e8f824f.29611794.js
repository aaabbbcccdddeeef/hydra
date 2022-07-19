"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4112],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return c}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),c=function(e){return function(n){var r=s(n.components);return t.createElement(e,i({},n,{components:r}))}},s=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=s(r),p=a,f=c["".concat(o,".").concat(p)]||c[p]||u[p]||i;return r?t.createElement(f,l(l({ref:n},m),{},{components:r})):t.createElement(f,l({ref:n},m))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33867:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"hydra-command-line-flags",title:"Hydra's command line flags"},d=void 0,m={unversionedId:"advanced/hydra-command-line-flags",id:"version-1.1/advanced/hydra-command-line-flags",title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/versioned_docs/version-1.1/advanced/hydra-command-line-flags.md",sourceDirName:"advanced",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/1.1/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/hydra-command-line-flags.md",tags:[],version:"1.1",lastUpdatedBy:"mattias",lastUpdatedAt:1658262335,formattedLastUpdatedAt:"7/19/2022",frontMatter:{id:"hydra-command-line-flags",title:"Hydra's command line flags"},sidebar:"version-1.1/docs",previous:{title:"Terminology",permalink:"/docs/1.1/advanced/terminology"},next:{title:"Basic Override syntax",permalink:"/docs/1.1/advanced/override_grammar/basic"}},c=[],s={toc:c};function p(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra is using the command line for two things:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Controlling Hydra"),(0,i.mdx)("li",{parentName:"ul"},"Configuring your application (See ",(0,i.mdx)("a",{parentName:"li",href:"/docs/1.1/advanced/override_grammar/basic"},"Override Grammar"),")")),(0,i.mdx)("p",null,"Arguments prefixed by - or -- control Hydra; the rest are used to configure the application."),(0,i.mdx)("p",null,"Information about Hydra:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--hydra-help"),": Shows Hydra specific flags"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--version"),": Show Hydra's version and exit")),(0,i.mdx)("p",null,"Information provided by the Hydra app:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--help,-h"),": Shows the application's help. This can be ",(0,i.mdx)("a",{parentName:"li",href:"/docs/1.1/configure_hydra/app_help"},"customized"),".")),(0,i.mdx)("p",null,"Debugging assistance:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--cfg,-c"),": Show config instead of running. Takes as parameter one of ",(0,i.mdx)("inlineCode",{parentName:"li"},"job"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"all"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--resolve"),": Used in conjunction with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"--cfg")," flag; resolve interpolations in the config before printing it."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--package,-p"),": Used in conjunction with --cfg to select a specific config package to show."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--info,-i"),": Print Hydra information. This includes installed plugins, Config Search Path, Defaults List, generated config and more.")),(0,i.mdx)("p",null,"Running Hydra applications:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--run,-r"),": Run is the default mode and is not normally needed."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--multirun,-m"),": Run multiple jobs with the configured launcher and sweeper. See ",(0,i.mdx)("a",{parentName:"li",href:"/docs/1.1/tutorials/basic/running_your_app/multi-run"},"Multi-run"),".",(0,i.mdx)("br",null),(0,i.mdx)("br",null)),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--config-path,-cp"),": Overrides the ",(0,i.mdx)("inlineCode",{parentName:"li"},"config_path")," specified in ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.main()"),". The ",(0,i.mdx)("inlineCode",{parentName:"li"},"config_path")," is relative to the Python file declaring ",(0,i.mdx)("inlineCode",{parentName:"li"},"@hydra.main()"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--config-name,-cn"),": Overrides the ",(0,i.mdx)("inlineCode",{parentName:"li"},"config_name")," specified in ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.main()"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--config-dir,-cd"),": Adds an additional config directory to the ",(0,i.mdx)("a",{parentName:"li",href:"/docs/1.1/advanced/search_path"},"config search path"),".",(0,i.mdx)("br",{parentName:"li"}),"This is useful for installed apps that want to allow their users to provide additional configs.")),(0,i.mdx)("p",null,"Misc:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"--shell-completion,-sc"),": Install or Uninstall ",(0,i.mdx)("a",{parentName:"li",href:"/docs/1.1/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),".")))}p.isMDXComponent=!0}}]);