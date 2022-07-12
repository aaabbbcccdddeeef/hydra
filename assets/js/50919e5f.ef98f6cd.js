"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3809],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){return function(n){var r=s(n.components);return t.createElement(e,i({},n,{components:r}))}},s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,p=u["".concat(a,".").concat(m)]||u[m]||h[m]||i;return r?t.createElement(p,d(d({ref:n},c),{},{components:r})):t.createElement(p,d({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93899:function(e,n,r){r.d(n,{Z:function(){return l},T:function(){return c}});var t=r(87462),o=r(67294),i=r(39960),a=r(52263),d=r(80907);function l(e){return o.createElement(i.default,(0,t.Z)({},e,{to:(n=e.to,l=(0,d.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==l?void 0:l.name)?r:"current"]+n),target:"_blank"}));var n,r,l}function c(e){var n,r=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},41985:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return h}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=r(93899),d=["components"],l={id:"job",title:"Job Configuration"},c=void 0,u={unversionedId:"configure_hydra/job",id:"version-1.2/configure_hydra/job",title:"Job Configuration",description:"The job configuration resides in hydra.job.",source:"@site/versioned_docs/version-1.2/configure_hydra/job.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/job",permalink:"/docs/configure_hydra/job",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/configure_hydra/job.md",tags:[],version:"1.2",lastUpdatedBy:"mattias",lastUpdatedAt:1657635979,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"job",title:"Job Configuration"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/configure_hydra/intro"},next:{title:"Customizing logging",permalink:"/docs/configure_hydra/logging"}},s=[{value:"hydra.job.name",id:"hydrajobname",children:[],level:3},{value:"hydra.job.chdir",id:"hydrajobchdir",children:[],level:3},{value:"hydra.job.override_dirname",id:"hydrajoboverride_dirname",children:[],level:3},{value:"hydra.job.id",id:"hydrajobid",children:[],level:3},{value:"hydra.job.num",id:"hydrajobnum",children:[],level:3},{value:"hydra.job.config_name",id:"hydrajobconfig_name",children:[],level:3},{value:"hydra.job.env_set",id:"hydrajobenv_set",children:[],level:3},{value:"hydra.job.env_copy",id:"hydrajobenv_copy",children:[],level:3}],m={toc:s};function h(e){var n=e.components,r=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The job configuration resides in ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job"),".\nThe Structured Config is below, the latest definition is ",(0,i.mdx)(a.Z,{to:"hydra/conf/__init__.py",mdxType:"GithubLink"},"here"),"."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Expand definition"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'# job runtime information will be populated here\n@dataclass\nclass JobConf:\n    # Job name, populated automatically unless specified by the user (in config or cli)\n    name: str = MISSING\n\n    # Change current working dir to the output dir.\n    chdir: bool = True\n\n    # Concatenation of job overrides that can be used as a part\n    # of the directory name.\n    # This can be configured in hydra.job.config.override_dirname\n    override_dirname: str = MISSING\n\n    # Job ID in underlying scheduling system\n    id: str = MISSING\n\n    # Job number if job is a part of a sweep\n    num: int = MISSING\n\n    # The config name used by the job\n    config_name: Optional[str] = MISSING\n\n    # Environment variables to set remotely\n    env_set: Dict[str, str] = field(default_factory=dict)\n    # Environment variables to copy from the launching machine\n    env_copy: List[str] = field(default_factory=list)\n\n    # Job config\n    @dataclass\n    class JobConfig:\n        @dataclass\n        # configuration for the ${hydra.job.override_dirname} runtime variable\n        class OverrideDirname:\n            kv_sep: str = "="\n            item_sep: str = ","\n            exclude_keys: List[str] = field(default_factory=list)\n\n        override_dirname: OverrideDirname = OverrideDirname()\n\n    config: JobConfig = JobConfig()\n'))),(0,i.mdx)("h3",{id:"hydrajobname"},"hydra.job.name"),(0,i.mdx)(a.T,{text:"Example application",to:"examples/configure_hydra/job_name",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"The job name is used by different things in Hydra, such as the log file name (",(0,i.mdx)("inlineCode",{parentName:"p"},"${hydra.job.name}.log"),").\nIt is normally derived from the Python file name (The job name of the file ",(0,i.mdx)("inlineCode",{parentName:"p"},"train.py")," is ",(0,i.mdx)("inlineCode",{parentName:"p"},"train"),").\nYou can override it via the command line, or your config file. "),(0,i.mdx)("h3",{id:"hydrajobchdir"},"hydra.job.chdir"),(0,i.mdx)("p",null,"Decides whether Hydra changes the current working directory to the output directory for each job.\nLearn more at the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorials/basic/running_your_app/working_directory#disable-changing-current-working-dir-to-jobs-output-dir"},"Output/Working directory")," page."),(0,i.mdx)("h3",{id:"hydrajoboverride_dirname"},"hydra.job.override_dirname"),(0,i.mdx)("p",null,"Enables the creation of an output directory which is based on command line overrides.\nLearn more at the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/configure_hydra/workdir"},"Customizing Working Directory")," page."),(0,i.mdx)("h3",{id:"hydrajobid"},"hydra.job.id"),(0,i.mdx)("p",null,"The job ID is populated by the active Hydra launcher. For the basic launcher, the job ID is just a serial job number.\nOther launchers will set it to an ID that makes sense like SLURM job ID. "),(0,i.mdx)("h3",{id:"hydrajobnum"},"hydra.job.num"),(0,i.mdx)("p",null,"Serial job number within this current sweep run. (0 to n-1)."),(0,i.mdx)("h3",{id:"hydrajobconfig_name"},"hydra.job.config_name"),(0,i.mdx)("p",null,"The config name used by the job, this is populated automatically to match the config name in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@hydra.main()"),"."),(0,i.mdx)("h3",{id:"hydrajobenv_set"},"hydra.job.env_set"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"Dict[str, str]")," that is used to set the environment variables of the running job.\nSome common use cases are to automatically set environment variables that are affecting underlying libraries.\nFor example, the following will disables multithreading in Intel IPP and MKL:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      OMP_NUM_THREADS: 1\n")),(0,i.mdx)("p",null,"Another example, is to use interpolation to automatically set the rank\nfor ",(0,i.mdx)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"},"Torch Distributed")," run to match the job number\nin the sweep. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      RANK: ${hydra:job.num}\n")),(0,i.mdx)("h3",{id:"hydrajobenv_copy"},"hydra.job.env_copy"),(0,i.mdx)("p",null,"In some cases you want to automatically copy local environment variables to the running job environment variables.\nThis is particularly useful for remote runs."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_copy:\n      - AWS_KEY\n")))}h.isMDXComponent=!0}}]);