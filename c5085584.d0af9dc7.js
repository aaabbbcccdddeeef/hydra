(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(268)),i={id:"overview",title:"Overview",sidebar_label:"Overview"},c={unversionedId:"development/overview",id:"version-1.0/development/overview",isDocsHomePage:!1,title:"Overview",description:"This guide assumes you have checked-out the repository.",source:"@site/versioned_docs/version-1.0/development/overview.md",slug:"/development/overview",permalink:"/docs/development/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/development/overview.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1613003938,sidebar_label:"Overview",sidebar:"version-1.0/docs",previous:{title:"Compose API",permalink:"/docs/experimental/compose_api"},next:{title:"Testing",permalink:"/docs/development/testing"}},p=[{value:"Environment setup",id:"environment-setup",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide assumes you have checked-out the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra"}),"repository"),".\nIt is recommended that you install Hydra in a virtual environment like ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.conda.io/en/latest/"}),"conda")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://virtualenv.pypa.io/en/latest/"}),"virtualenv"),"."),Object(o.b)("h2",{id:"environment-setup"},"Environment setup"),Object(o.b)("p",null,"Install ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.conda.io/en/latest/miniconda.html"}),"Miniconda")," and create an empty Conda environment with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"conda create -n hydra38 python=3.8 -qy\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"NOTE")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on a supported version of Python."))),Object(o.b)("p",null,"Activate the environment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"conda activate hydra38\n")),Object(o.b)("p",null,"From the source tree, install Hydra in development mode with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"pip install -r requirements/dev.txt -e .\n")))}l.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,u=d["".concat(i,".").concat(b)]||d[b]||m[b]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);