(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(268)),i={id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},l={unversionedId:"configure_hydra/logging",id:"version-0.11/configure_hydra/logging",isDocsHomePage:!1,title:"Customizing logging",description:"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it here.",source:"@site/versioned_docs/version-0.11/configure_hydra/logging.md",slug:"/configure_hydra/logging",permalink:"/docs/0.11/configure_hydra/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/configure_hydra/logging.md",version:"0.11",lastUpdatedBy:"Toshihiko Yanase",lastUpdatedAt:1612686994,sidebar_label:"Customizing logging",sidebar:"version-0.11/docs",previous:{title:"Overview",permalink:"/docs/0.11/configure_hydra/intro"},next:{title:"Customizing working directory pattern",permalink:"/docs/0.11/configure_hydra/workdir"}},c=[],g={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.python.org/3/howto/logging.html"}),"here"),".\nThere are two logging configurations, one for Hydra itself and one for the executed jobs."),Object(a.b)("p",null,"This example demonstrates how to to customize the logging behavior of your Hydra app, by making the following changes\nto the default logging behavior:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Outputs only to stdout (no log file)"),Object(a.b)("li",{parentName:"ul"},"Output a simpler log line pattern")),Object(a.b)("p",null,"Project structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ tree\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 hydra\n\u2502\xa0\xa0     \u2514\u2500\u2500 job_logging\n\u2502\xa0\xa0         \u2514\u2500\u2500 custom.yaml\n\u2514\u2500\u2500 main.py\n")),Object(a.b)("p",null,"config.yaml defaults the application to the custom logging."),Object(a.b)("p",null,"Config file: ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/job_logging : custom\n")),Object(a.b)("p",null,"Config file: ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging/custom.yaml")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job_logging:\n    formatters:\n      simple:\n        format: '[%(levelname)s] - %(message)s'\n    root:\n      handlers: [console]\n")),Object(a.b)("p",null,"This is what the the default logging looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python main.py hydra/job_logging=default\n[2019-09-26 18:58:05,477][__main__][INFO] - Info level message\n")),Object(a.b)("p",null,"And this is what the custom logging looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python main.py\n[INFO] - Info level message\n")))}u.isMDXComponent=!0},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=o.a.createContext({}),u=function(e){var n=o.a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(g.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,d=s["".concat(i,".").concat(b)]||s[b]||p[b]||a;return t?o.a.createElement(d,l(l({ref:n},g),{},{components:t})):o.a.createElement(d,l({ref:n},g))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var g=2;g<a;g++)i[g]=t[g];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);