(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5804],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return u},T:function(){return s}});var r=n(2122),a=n(7294),o=n(6742),i=n(2263),l=n(907);function u(e){return a.createElement(o.Z,(0,r.Z)({},e,{to:(t=e.to,u=(0,l.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==u?void 0:u.name)?n:"current"]+t),target:"_blank"}));var t,n,u}function s(e){var t,n=null!=(t=e.text)?t:"Example";return a.createElement(u,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},612:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(3899),l=["components"],u={id:"defaults",title:"Selecting defaults for config groups"},s=void 0,p={unversionedId:"tutorials/basic/your_first_app/defaults",id:"version-1.0/tutorials/basic/your_first_app/defaults",isDocsHomePage:!1,title:"Selecting defaults for config groups",description:"After office politics, you decide that you want to use MySQL by default.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/5_defaults.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/defaults",permalink:"/docs/1.0/tutorials/basic/your_first_app/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/5_defaults.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1626369375,formattedLastUpdatedAt:"7/15/2021",sidebarPosition:5,frontMatter:{id:"defaults",title:"Selecting defaults for config groups"},sidebar:"version-1.0/docs",previous:{title:"Grouping config files",permalink:"/docs/1.0/tutorials/basic/your_first_app/config_groups"},next:{title:"Putting it all together",permalink:"/docs/1.0/tutorials/basic/your_first_app/composition"}},c=[{value:"Config group defaults",id:"config-group-defaults",children:[{value:"Overriding a config group default",id:"overriding-a-config-group-default",children:[]}]},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[]}],f={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.T,{to:"examples/tutorials/basic/your_first_hydra_app/5_defaults",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",(0,o.kt)("inlineCode",{parentName:"p"},"+db=mysql")," every time you run your application."),(0,o.kt)("p",null,"You can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"defaults")," list into your config file."),(0,o.kt)("h2",{id:"config-group-defaults"},"Config group defaults"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,o.kt)("p",null,"Remember to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_name"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,o.kt)("p",null,"When you run the updated application, MySQL is loaded by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,o.kt)("p",null,"You can have multiple items in the defaults list, e.g"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n - db: mysql\n - db/mysql/storage_engine: innodb\n")),(0,o.kt)("p",null,"The defaults are ordered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If multiple configs define the same value, the last one wins. "),(0,o.kt)("li",{parentName:"ul"},"If multiple configs contribute to the same dictionary, the result is the combined dictionary.")),(0,o.kt)("h3",{id:"overriding-a-config-group-default"},"Overriding a config group default"),(0,o.kt)("p",null,"You can still load PostgreSQL, and override individual values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,o.kt)("p",null,"You can remove a default entry from the defaults list by prefixing it with ~:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py ~db\n{}\n")),(0,o.kt)("h2",{id:"non-config-group-defaults"},"Non-config group defaults"),(0,o.kt)("p",null,"Sometimes a config file does not belong in any config group.\nYou can still load it by default. Here is an example for ",(0,o.kt)("inlineCode",{parentName:"p"},"some_file.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - some_file\n")),(0,o.kt)("p",null,"Config files that are not part of a config group will always be loaded. They cannot be overridden.",(0,o.kt)("br",{parentName:"p"}),"\n","Prefer using a config group."))}d.isMDXComponent=!0}}]);