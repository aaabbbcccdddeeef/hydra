"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8718],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return m},MDXProvider:function(){return s},mdx:function(){return b},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),u=function(e){return function(n){var r=c(n.components);return t.createElement(e,o({},n,{components:r}))}},c=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),s=a,h=u["".concat(i,".").concat(s)]||u[s]||p[s]||o;return r?t.createElement(h,d(d({ref:n},m),{},{components:r})):t.createElement(h,d({ref:n},m))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var m=2;m<o;m++)i[m]=r[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20858:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],d={id:"job",sidebar_label:"Job Configuration",hide_title:!0},l=void 0,m={unversionedId:"configure_hydra/job",id:"version-1.0/configure_hydra/job",title:"job",description:"Job configuration",source:"@site/versioned_docs/version-1.0/configure_hydra/job.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/job",permalink:"/docs/1.0/configure_hydra/job",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/configure_hydra/job.md",tags:[],version:"1.0",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1662481611,formattedLastUpdatedAt:"9/6/2022",frontMatter:{id:"job",sidebar_label:"Job Configuration",hide_title:!0},sidebar:"version-1.0/docs",previous:{title:"Introduction",permalink:"/docs/1.0/configure_hydra/intro"},next:{title:"Customizing logging",permalink:"/docs/1.0/configure_hydra/logging"}},u=[{value:"Job configuration",id:"job-configuration",children:[],level:2},{value:"Documentation",id:"documentation",children:[{value:"hydra.job.name",id:"hydrajobname",children:[],level:3},{value:"hydra.job.override_dirname",id:"hydrajoboverride_dirname",children:[],level:3},{value:"hydra.job.id",id:"hydrajobid",children:[],level:3},{value:"hydra.job.num",id:"hydrajobnum",children:[],level:3},{value:"hydra.job.config_name",id:"hydrajobconfig_name",children:[],level:3},{value:"hydra.job.env_set",id:"hydrajobenv_set",children:[],level:3},{value:"hydra.job.env_copy",id:"hydrajobenv_copy",children:[],level:3}],level:2}],c={toc:u};function s(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"job-configuration"},"Job configuration"),(0,o.mdx)("p",null,"The job configuration resides in ",(0,o.mdx)("inlineCode",{parentName:"p"},"hydra.job"),".\nThe structure definition is below, the latest definition ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/hydra/conf/__init__.py"},"in the code"),"."),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Expand definition"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'# job runtime information will be populated here\n@dataclass\nclass JobConf:\n    # Job name, populated automatically unless specified by the user (in config or cli)\n    name: str = MISSING\n\n    # Concatenation of job overrides that can be used as a part\n    # of the directory name.\n    # This can be configured in hydra.job.config.override_dirname\n    override_dirname: str = MISSING\n\n    # Job ID in underlying scheduling system\n    id: str = MISSING\n\n    # Job number if job is a part of a sweep\n    num: int = MISSING\n\n    # The config name used by the job\n    config_name: Optional[str] = MISSING\n\n    # Environment variables to set remotely\n    env_set: Dict[str, str] = field(default_factory=dict)\n    # Environment variables to copy from the launching machine\n    env_copy: List[str] = field(default_factory=list)\n\n    # Job config\n    @dataclass\n    class JobConfig:\n        @dataclass\n        # configuration for the ${hydra.job.override_dirname} runtime variable\n        class OverrideDirname:\n            kv_sep: str = "="\n            item_sep: str = ","\n            exclude_keys: List[str] = field(default_factory=list)\n\n        override_dirname: OverrideDirname = OverrideDirname()\n\n    config: JobConfig = JobConfig()\n'))),(0,o.mdx)("h2",{id:"documentation"},"Documentation"),(0,o.mdx)("h3",{id:"hydrajobname"},"hydra.job.name"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/job_name"},(0,o.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,o.mdx)("p",null,"The job name is used by different things in Hydra, such as the log file name (",(0,o.mdx)("inlineCode",{parentName:"p"},"${hydra.job.name}.log"),").\nIt is normally derived from the Python file name (file: ",(0,o.mdx)("inlineCode",{parentName:"p"},"train.py")," -> name: ",(0,o.mdx)("inlineCode",{parentName:"p"},"train"),").\nYou can override it via the command line or your config file. "),(0,o.mdx)("h3",{id:"hydrajoboverride_dirname"},"hydra.job.override_dirname"),(0,o.mdx)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern.\nFor example, the command line arguments:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python foo.py a=10 b=20\n")),(0,o.mdx)("p",null,"Would result in ",(0,o.mdx)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," getting the value a=10,b=20.\nWhen used with the output directory override, it can automatically generate directories that represent the\ncommand line arguments used in your run.   "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),(0,o.mdx)("p",null,"The generation of override_dirname can be controlled by ",(0,o.mdx)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname"),".\nIn particular, the separator char ",(0,o.mdx)("inlineCode",{parentName:"p"},"=")," and the item separator char ",(0,o.mdx)("inlineCode",{parentName:"p"},",")," can be modified, and in addition some command line\noverride keys can be automatically excluded from the generated ",(0,o.mdx)("inlineCode",{parentName:"p"},"override_dirname"),".\nAn example of a case where the exclude is useful is a random seed."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),(0,o.mdx)("p",null,"With this configuration, running"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python foo.py a=10 b=20 seed=999\n")),(0,o.mdx)("p",null,"Would result in a directory like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"output/a=10,b=20/seed=999\n")),(0,o.mdx)("p",null,"Allowing you to more easily group identical runs with different random seeds together."),(0,o.mdx)("h3",{id:"hydrajobid"},"hydra.job.id"),(0,o.mdx)("p",null,"The job ID is populated by active Hydra launcher. For the basic launcher, the job ID is just a serial job number, but\nfor other systems this could be the SLURM job ID or the AWS Instance ID."),(0,o.mdx)("h3",{id:"hydrajobnum"},"hydra.job.num"),(0,o.mdx)("p",null,"Serial job number within this current sweep run. (0 to n-1)"),(0,o.mdx)("h3",{id:"hydrajobconfig_name"},"hydra.job.config_name"),(0,o.mdx)("p",null,"The config name used by the job, this is populated automatically to match the config name in @hydra.main()"),(0,o.mdx)("h3",{id:"hydrajobenv_set"},"hydra.job.env_set"),(0,o.mdx)("p",null,"A Dict","[str, str]"," that is used to set the environment variables of the running job.\nSome common use cases are to set environment variables that are effecting underlying libraries, for example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      OMP_NUM_THREADS: 1\n")),(0,o.mdx)("p",null,"Disables multithreading in Intel IPP and MKL."),(0,o.mdx)("p",null,"Another example, is to use interpolation to automatically set the rank\nfor ",(0,o.mdx)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"},"Torch Distributed")," run to match the job number\nin the sweep. "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      RANK: ${hydra:job.num}\n")),(0,o.mdx)("h3",{id:"hydrajobenv_copy"},"hydra.job.env_copy"),(0,o.mdx)("p",null,"In some cases you want to automatically copy local environment variables to the running job environment variables.\nThis is particularly useful for remote runs."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_copy:\n      - AWS_KEY\n")))}s.isMDXComponent=!0}}]);