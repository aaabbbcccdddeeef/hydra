"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7562],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return l},withMDXComponents:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){return function(t){var n=l(t.components);return r.createElement(e,a({},t,{components:n}))}},l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||h[u]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},d=void 0,s={unversionedId:"upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",id:"version-1.1/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()",description:"Prior to Hydra 1.1, @hydra.main() and hydra.initialize() default config path was the directory containing the Python app (calling @hydra.main() or hydra.initialize()).",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/hydra_main_config_path.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",permalink:"/docs/1.1/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/hydra_main_config_path.md",tags:[],version:"1.1",lastUpdatedBy:"mattias",lastUpdatedAt:1657635979,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},sidebar:"version-1.1/docs",previous:{title:"Introduction",permalink:"/docs/1.1/upgrades/intro"},next:{title:"Changes to default composition order",permalink:"/docs/1.1/upgrades/1.0_to_1.1/default_composition_order"}},p=[{value:"Dedicated config directory",id:"dedicated-config-directory",children:[],level:3},{value:"No config directory",id:"no-config-directory",children:[],level:3},{value:"Using the application directory",id:"using-the-application-directory",children:[],level:3}],l={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Prior to Hydra 1.1, ",(0,a.mdx)("strong",{parentName:"p"},"@hydra.main()")," and ",(0,a.mdx)("strong",{parentName:"p"},"hydra.initialize()")," default ",(0,a.mdx)("inlineCode",{parentName:"p"},"config path")," was the directory containing the Python app (calling ",(0,a.mdx)("strong",{parentName:"p"},"@hydra.main()")," or ",(0,a.mdx)("strong",{parentName:"p"},"hydra.initialize()"),")."),(0,a.mdx)("p",null,"This can cause unexpected behavior:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Sibling directories are interpreted as config groups, which can lead to surprising results (See ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/1533"},"#1533"),")."),(0,a.mdx)("li",{parentName:"ul"},"The subtree added automatically can have many files/directories - which will cause ",(0,a.mdx)("strong",{parentName:"li"},"--help")," to be very slow as it's scanning for all config groups/config files (See ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/759"},"#759"),").")),(0,a.mdx)("p",null,"To address these issues, Hydra 1.1 issues a warning if the config_path is not specified.",(0,a.mdx)("br",{parentName:"p"}),"\n","Your options are as follows:"),(0,a.mdx)("h3",{id:"dedicated-config-directory"},"Dedicated config directory"),(0,a.mdx)("p",null,'For applications with config files, specify a directory like "conf" to use a dedicated config directory relative to the application.'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\n# or:\nhydra.initialize(config_path="conf")\n')),(0,a.mdx)("h3",{id:"no-config-directory"},"No config directory"),(0,a.mdx)("p",null,"For applications that do not define config files next to the Python script (typically applications using only Structured Configs), it is recommended that\nyou pass ",(0,a.mdx)("inlineCode",{parentName:"p"},"None")," as the config_path, indicating that no directory should be added to the config search path.\nThis will become the default in Hydra 1.2."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path=None)\n# or:\nhydra.initialize(config_path=None)\n")),(0,a.mdx)("h3",{id:"using-the-application-directory"},"Using the application directory"),(0,a.mdx)("p",null,"Use the directory/module of the Python script.\nThis was the default behavior up to Hydra 1.0.",(0,a.mdx)("br",{parentName:"p"}),"\n","This is not recommended as it can cause the surprising behavior outlined above."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path=".")\n# or:\nhydra.initialize(config_path=".")\n')))}u.isMDXComponent=!0}}]);