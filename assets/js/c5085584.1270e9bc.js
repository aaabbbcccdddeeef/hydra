(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4965],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1734:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={id:"overview",title:"Overview",sidebar_label:"Overview"},s=void 0,c={unversionedId:"development/overview",id:"version-1.0/development/overview",isDocsHomePage:!1,title:"Overview",description:"This guide assumes you have checked-out the repository.",source:"@site/versioned_docs/version-1.0/development/overview.md",sourceDirName:"development",slug:"/development/overview",permalink:"/docs/1.0/development/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/development/overview.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1624565086,formattedLastUpdatedAt:"6/24/2021",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"version-1.0/docs",previous:{title:"Compose API",permalink:"/docs/1.0/experimental/compose_api"},next:{title:"Testing",permalink:"/docs/1.0/development/testing"}},l=[{value:"Environment setup",id:"environment-setup",children:[]}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide assumes you have checked-out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra"},"repository"),".\nIt is recommended that you install Hydra in a virtual environment like ",(0,a.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/"},"conda")," or ",(0,a.kt)("a",{parentName:"p",href:"https://virtualenv.pypa.io/en/latest/"},"virtualenv"),"."),(0,a.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," and create an empty Conda environment with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda create -n hydra38 python=3.8 -qy\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on a supported version of Python."))),(0,a.kt)("p",null,"Activate the environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda activate hydra38\n")),(0,a.kt)("p",null,"From the source tree, install Hydra in development mode with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install -r requirements/dev.txt -e .\n")))}m.isMDXComponent=!0}}]);