"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4988],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return y},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88679:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"release",title:"Release process",sidebar_label:"Release process"},c=void 0,p={unversionedId:"development/release",id:"version-1.1/development/release",title:"Release process",description:"The release process may be automated in the future.",source:"@site/versioned_docs/version-1.1/development/release.md",sourceDirName:"development",slug:"/development/release",permalink:"/docs/1.1/development/release",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/development/release.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha",lastUpdatedAt:1669583199,formattedLastUpdatedAt:"11/27/2022",frontMatter:{id:"release",title:"Release process",sidebar_label:"Release process"},sidebar:"version-1.1/docs",previous:{title:"Documentation",permalink:"/docs/1.1/development/documentation"},next:{title:"Introduction",permalink:"/docs/1.1/upgrades/intro"}},s=[],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The release process may be automated in the future."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Checkout main"),(0,a.mdx)("li",{parentName:"ul"},"Update the Hydra version in ",(0,a.mdx)("inlineCode",{parentName:"li"},"hydra/__init__.py")),(0,a.mdx)("li",{parentName:"ul"},"Update NEWS.md with towncrier"),(0,a.mdx)("li",{parentName:"ul"},"Create a wheel and source dist for hydra-core: ",(0,a.mdx)("inlineCode",{parentName:"li"},"python -m build")),(0,a.mdx)("li",{parentName:"ul"},"Upload pip package: ",(0,a.mdx)("inlineCode",{parentName:"li"},"python -m twine upload dist/*"))))}d.isMDXComponent=!0}}]);