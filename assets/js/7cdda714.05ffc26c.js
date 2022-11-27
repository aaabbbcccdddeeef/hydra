"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3932],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return y},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return p},T:function(){return s}});var r=n(87462),a=n(67294),i=n(39960),o=n(52263),l=n(80907);function p(e){return a.createElement(i.default,(0,r.Z)({},e,{to:(t=e.to,p=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==p?void 0:p.name)?n:"current"]+t),target:"_blank"}));var t,n,p}function s(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(p,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},29011:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(93899),l=["components"],p={id:"simple_cli",title:"A simple command-line application"},s=void 0,c={unversionedId:"tutorials/basic/your_first_app/simple_cli",id:"version-1.1/tutorials/basic/your_first_app/simple_cli",title:"A simple command-line application",description:"This is a simple Hydra application that prints your configuration.",source:"@site/versioned_docs/version-1.1/tutorials/basic/your_first_app/1_simple_cli.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/simple_cli",permalink:"/docs/1.1/tutorials/basic/your_first_app/simple_cli",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/your_first_app/1_simple_cli.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha",lastUpdatedAt:1669583199,formattedLastUpdatedAt:"11/27/2022",sidebarPosition:1,frontMatter:{id:"simple_cli",title:"A simple command-line application"},sidebar:"version-1.1/docs",previous:{title:"Tutorials intro",permalink:"/docs/1.1/tutorials/intro"},next:{title:"Specifying a config file",permalink:"/docs/1.1/tutorials/basic/your_first_app/config_file"}},m=[],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.T,{to:"examples/tutorials/basic/your_first_hydra_app/1_simple_cli/my_app.py",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app")," function is a placeholder for your code.\nWe will slowly evolve this example to showcase more Hydra features."),(0,i.mdx)("p",null,"The examples in this tutorial are available ",(0,i.mdx)(o.Z,{to:"examples/tutorials/basic",mdxType:"GithubLink"},"here"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main(config_path=None)\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.mdx)("p",null,"In this example, Hydra creates an empty ",(0,i.mdx)("inlineCode",{parentName:"p"},"cfg")," object and passes it to the function annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@hydra.main"),"."),(0,i.mdx)("p",null,"You can add config values via the command line. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"+")," indicates that the field is new."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db.driver=mysql +db.user=omry +db.password=secret\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"We will learn more about the ",(0,i.mdx)("inlineCode",{parentName:"p"},"config_path")," in the following pages. "))),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/hydra-command-line-flags"},"Hydra's command line flags")," and\n",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/override_grammar/basic"},"Basic Override Syntax")," for more information about the command line."))}u.isMDXComponent=!0}}]);