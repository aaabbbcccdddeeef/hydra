(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1562],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return h}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?t.createElement(f,p(p({ref:n},c),{},{components:r})):t.createElement(f,p({ref:n},c))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5264:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),p=["components"],i={id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},l=void 0,s={unversionedId:"configure_hydra/app_help",id:"version-1.0/configure_hydra/app_help",isDocsHomePage:!1,title:"Customizing Application's help",description:"Example application",source:"@site/versioned_docs/version-1.0/configure_hydra/app_help.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/app_help",permalink:"/docs/1.0/configure_hydra/app_help",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/configure_hydra/app_help.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1624565086,formattedLastUpdatedAt:"6/24/2021",frontMatter:{id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},sidebar:"version-1.0/docs",previous:{title:"Customizing working directory pattern",permalink:"/docs/1.0/configure_hydra/workdir"},next:{title:"Colorlog plugin",permalink:"/docs/1.0/plugins/colorlog"}},c=[],u={toc:c};function d(e){var n=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/custom_help"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,a.kt)("p",null,"Hydra provides two different help options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help")," : Application specific help"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--hydra-help")," Hydra specific help. ")),(0,a.kt)("p",null,"Example output of ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --help\n== AwesomeApp ==\n\nThis is AwesomeApp!\nYou can choose a db driver by appending\n== Configuration groups ==\nCompose your configuration from those groups (db=mysql)\n\ndb: mysql, postgresql\n\n\n== Config ==\nThis is the config generated for this run.\nYou can override everything, for example:\npython my_app.py db.user=foo db.pass=bar\n-------\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n\n-------\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n")),(0,a.kt)("p",null,"This output is generated from the following config group option (selected in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," to be used by default): "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/help/my_app_help.yaml"',title:'"hydra/help/my_app_help.yaml"'},"# @package _group_\n\n# App name, override to match the name your app is known by\napp_name: AwesomeApp\n\n# Help header, customize to describe your app to your users\nheader: == ${hydra.help.app_name} ==\n\nfooter: |-\n  Powered by Hydra (https://hydra.cc)\n  Use --hydra-help to view Hydra specific help\n\n# Basic Hydra flags:\n#   $FLAGS_HELP\n#\n# Config groups, choose one of:\n#   $APP_CONFIG_GROUPS: All config groups that does not start with hydra/.\n#   $HYDRA_CONFIG_GROUPS: All the Hydra config groups (starts with hydra/)\n#\n# Configuration generated with overrides:\n#   $CONFIG : Generated config\n#\ntemplate: |-\n  ${hydra.help.header}\n\n  This is ${hydra.help.app_name}!\n  You can choose a db driver by appending\n  == Configuration groups ==\n  Compose your configuration from those groups (db=mysql)\n\n  $APP_CONFIG_GROUPS\n\n  == Config ==\n  This is the config generated for this run.\n  You can override everything, for example:\n  python my_app.py db.user=foo db.pass=bar\n  -------\n  $CONFIG\n  -------\n  \n  ${hydra.help.footer}\n")))}d.isMDXComponent=!0}}]);