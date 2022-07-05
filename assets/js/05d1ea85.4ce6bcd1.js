"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[491],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),m=function(e){return function(n){var t=p(n.components);return a.createElement(e,r({},n,{components:t}))}},p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(f,s(s({ref:n},d),{},{components:t})):a.createElement(f,s({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return l},T:function(){return d}});var a=t(87462),i=t(67294),r=t(39960),o=t(52263),s=t(80907);function l(e){return i.createElement(r.default,(0,a.Z)({},e,{to:(n=e.to,l=(0,s.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==l?void 0:l.name)?t:"current"]+n),target:"_blank"}));var n,t,l}function d(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return i.createElement(l,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},40004:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=t(93899),s=["components"],l={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},d=void 0,m={unversionedId:"advanced/instantiate_objects/overview",id:"version-1.1/advanced/instantiate_objects/overview",title:"Instantiating objects with Hydra",description:"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.",source:"@site/versioned_docs/version-1.1/advanced/instantiate_objects/overview.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/overview",permalink:"/docs/1.1/advanced/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/instantiate_objects/overview.md",tags:[],version:"1.1",lastUpdatedBy:"Tim Gates",lastUpdatedAt:1657001819,formattedLastUpdatedAt:"7/5/2022",frontMatter:{id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},sidebar:"version-1.1/docs",previous:{title:"Packages",permalink:"/docs/1.1/advanced/overriding_packages"},next:{title:"Config files example",permalink:"/docs/1.1/advanced/instantiate_objects/config_files"}},p=[{value:"Simple usage",id:"simple-usage",children:[],level:3},{value:"Recursive instantiation",id:"recursive-instantiation",children:[],level:3},{value:"Disable recursive instantiation",id:"disable-recursive-instantiation",children:[],level:3},{value:"Parameter conversion strategies",id:"parameter-conversion-strategies",children:[{value:"Partial Instantiation (for Hydra version &gt;= 1.1.2)",id:"partial-instantiation-for-hydra-version--112",children:[],level:3},{value:"Instantiation of builtins",id:"instantiation-of-builtins",children:[],level:3}],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(o.T,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,r.mdx)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),(0,r.mdx)("p",null,"Hydra provides ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," (and its alias ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra.utils.call()"),") for instantiating objects and calling functions. Prefer ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",(0,r.mdx)("inlineCode",{parentName:"p"},"call")," for invoking functions."),(0,r.mdx)("p",null,"Call/instantiate supports:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Constructing an object by calling the ",(0,r.mdx)("inlineCode",{parentName:"li"},"__init__")," method"),(0,r.mdx)("li",{parentName:"ul"},"Calling functions, static functions, class methods and other callable global objects")),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"Instantiate API (Expand for details)"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def instantiate(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An config object describing what to call and what params to use.\n                   In addition to the parameters, the config must contain:\n                   _target_ : target class or callable name (str)\n                   And may contain:\n                   _args_: List-like of positional arguments to pass to the target\n                   _recursive_: Construct nested objects as well (bool).\n                                True by default.\n                                may be overridden via a _recursive_ key in\n                                the kwargs\n                   _convert_: Conversion strategy\n                        none    : Passed objects are DictConfig and ListConfig, default\n                        partial : Passed objects are converted to dict and list, with\n                                  the exception of Structured Configs (and their fields).\n                        all     : Passed objects are dicts, lists and primitives without\n                                  a trace of OmegaConf containers\n    :param args: Optional positional parameters pass-through\n    :param kwargs: Optional named parameters to override\n                   parameters in the config object. Parameters not present\n                   in the config objects are being passed as is to the target.\n                   IMPORTANT: dataclasses instances in kwargs are interpreted as config\n                              and cannot be used as passthrough\n    :return: if _target_ is a class name: the instantiated object\n             if _target_ is a callable: the return value of the call\n    """\n\n# Alias for instantiate\ncall = instantiate\n'))),(0,r.mdx)("br",null),(0,r.mdx)("p",null,"The config passed to these functions must have a key called ",(0,r.mdx)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.\nFor convenience, ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," config results in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," object."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Named arguments")," : Config fields (except reserved fields like ",(0,r.mdx)("inlineCode",{parentName:"p"},"_target_"),") are passed as named arguments to the target.\nNamed arguments in the config can be overridden by passing named argument with the same name in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Positional arguments")," : The config may contain a ",(0,r.mdx)("inlineCode",{parentName:"p"},"_args_")," field representing positional arguments to pass to the target.\nThe positional arguments can be overridden together by passing positional arguments in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),(0,r.mdx)("h3",{id:"simple-usage"},"Simple usage"),(0,r.mdx)("p",null,"Your application might have an Optimizer class:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example class"',title:'"Example','class"':!0},"class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n")),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Config"',title:'"Config"'},"optimizer:\n  _target_: my_app.Optimizer\n  algo: SGD\n  lr: 0.01\n\n\n\n\n"))),(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'},"opt = instantiate(cfg.optimizer)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.01)\n\n# override parameters on the call-site\nopt = instantiate(cfg.optimizer, lr=0.2)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.2)\n")))),(0,r.mdx)("h3",{id:"recursive-instantiation"},"Recursive instantiation"),(0,r.mdx)("p",null,"Let's add a Dataset and a Trainer class. The trainer holds a Dataset and an Optimizer instances."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Additional classes"',title:'"Additional','classes"':!0},"class Dataset:\n    name: str\n    path: str\n\n    def __init__(self, name: str, path: str) -> None:\n        self.name = name\n        self.path = path\n\n\nclass Trainer:\n    def __init__(self, optimizer: Optimizer, dataset: Dataset) -> None:\n        self.optimizer = optimizer\n        self.dataset = dataset\n")),(0,r.mdx)("p",null,"With the following config, you can instantiate the whole thing with a single call:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example config"',title:'"Example','config"':!0},"trainer:\n  _target_: my_app.Trainer\n  optimizer:\n    _target_: my_app.Optimizer\n    algo: SGD\n    lr: 0.01\n  dataset:\n    _target_: my_app.Dataset\n    name: Imagenet\n    path: /datasets/imagenet\n")),(0,r.mdx)("p",null,"Hydra will instantiate nested objects recursively by default."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"trainer = instantiate(cfg.trainer)\nprint(trainer)\n# Trainer(\n#  optimizer=Optimizer(algo=SGD,lr=0.01),\n#  dataset=Dataset(name=Imagenet, path=/datasets/imagenet)\n# )\n")),(0,r.mdx)("p",null,"You can override parameters for nested objects:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'trainer = instantiate(\n    cfg.trainer,\n    optimizer={"lr": 0.3},\n    dataset={"name": "cifar10", "path": "/datasets/cifar10"},\n)\nprint(trainer)\n# Trainer(\n#   optimizer=Optimizer(algo=SGD,lr=0.3),\n#   dataset=Dataset(name=cifar10, path=/datasets/cifar10)\n# )\n')),(0,r.mdx)("p",null,"Similarly, positional arguments of nested objects can be overridden:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'obj = instantiate(\n    cfg.object,\n    # pass 1 and 2 as positional arguments to the target object\n    1, 2,  \n    # pass 3 and 4 as positional arguments to a nested child object\n    child={"_args_": [3, 4]},\n)\n')),(0,r.mdx)("h3",{id:"disable-recursive-instantiation"},"Disable recursive instantiation"),(0,r.mdx)("p",null,"You can disable recursive instantiation by setting ",(0,r.mdx)("inlineCode",{parentName:"p"},"_recursive_")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"False")," in the config node or in the call-site\nIn that case the Trainer object will receive an OmegaConf DictConfig for nested dataset and optimizer instead of the instantiated objects."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"optimizer = instantiate(cfg.trainer, _recursive_=False)\nprint(optimizer)\n")),(0,r.mdx)("p",null,"Output:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"Trainer(\n  optimizer={\n    '_target_': 'my_app.Optimizer', 'algo': 'SGD', 'lr': 0.01\n  },\n  dataset={\n    '_target_': 'my_app.Dataset', 'name': 'Imagenet', 'path': '/datasets/imagenet'\n  }\n)\n")),(0,r.mdx)("h2",{id:"parameter-conversion-strategies"},"Parameter conversion strategies"),(0,r.mdx)("p",null,"By default, the parameters passed to the target are either primitives (int,\nfloat, bool etc) or OmegaConf containers (",(0,r.mdx)("inlineCode",{parentName:"p"},"DictConfig"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ListConfig"),").\nOmegaConf containers have many advantages over primitive dicts and lists,\nincluding convenient attribute access for keys,\n",(0,r.mdx)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html"},"duck-typing as instances of dataclasses or attrs classes"),", and\nsupport for ",(0,r.mdx)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#variable-interpolation"},"variable interpolation"),"\nand ",(0,r.mdx)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/custom_resolvers.html"},"custom resolvers"),".\nIf the callable targeted by ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate")," leverages OmegaConf's features, it\nwill make sense to pass ",(0,r.mdx)("inlineCode",{parentName:"p"},"DictConfig")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ListConfig")," instances directly to\nthat callable."),(0,r.mdx)("p",null,"That being said, in many cases it's desired to pass normal Python dicts and\nlists, rather than ",(0,r.mdx)("inlineCode",{parentName:"p"},"DictConfig")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"ListConfig")," instances, as arguments to your\ncallable. You can change instantiate's argument conversion strategy using the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"_convert_")," parameter. Supported values are:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"none"')," : Default behavior, Use OmegaConf containers"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"partial"')," : Convert OmegaConf containers to dict and list, except Structured Configs."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"all"')," : Convert everything to primitive containers")),(0,r.mdx)("p",null,"The conversion strategy applies recursively to all subconfigs of the instantiation target.\nHere is an example demonstrating the various conversion strategies:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\nfrom omegaconf import DictConfig, OmegaConf\nfrom hydra.utils import instantiate\n\n@dataclass\nclass Foo:\n    a: int = 123\n\nclass MyTarget:\n    def __init__(self, foo, bar):\n        self.foo = foo\n        self.bar = bar\n\ncfg = OmegaConf.create(\n    {\n        "_target_": "__main__.MyTarget",\n        "foo": Foo(),\n        "bar": {"b": 456},\n    }\n)\n\nobj_none = instantiate(cfg, _convert_="none")\nassert isinstance(obj_none, MyTarget)\nassert isinstance(obj_none.foo, DictConfig)\nassert isinstance(obj_none.bar, DictConfig)\n\nobj_partial = instantiate(cfg, _convert_="partial")\nassert isinstance(obj_partial, MyTarget)\nassert isinstance(obj_partial.foo, DictConfig)\nassert isinstance(obj_partial.bar, dict)\n\nobj_all = instantiate(cfg, _convert_="all")\nassert isinstance(obj_none, MyTarget)\nassert isinstance(obj_all.foo, dict)\nassert isinstance(obj_all.bar, dict)\n')),(0,r.mdx)("p",null,"Passing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_convert_")," keyword argument to ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate")," has the same effect as defining\na ",(0,r.mdx)("inlineCode",{parentName:"p"},"_convert_")," attribute on your config object. Here is an example creating\ninstances of ",(0,r.mdx)("inlineCode",{parentName:"p"},"MyTarget")," that are equivalent to the above:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'cfg_none = OmegaConf.create({..., "_convert_": "none"})\nobj_none = instantiate(cfg_none)\n\ncfg_partial = OmegaConf.create({..., "_convert_": "partial"})\nobj_partial = instantiate(cfg_partial)\n\ncfg_all = OmegaConf.create({..., "_convert_": "all"})\nobj_all = instantiate(cfg_all)\n')),(0,r.mdx)("p",null,"If performance is a concern, note that the ",(0,r.mdx)("inlineCode",{parentName:"p"},'_convert_="none"')," strategy does the\nleast work -- no conversion (from ",(0,r.mdx)("inlineCode",{parentName:"p"},"DictConfig"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"ListConfig")," to native python\ncontainers) is taking place. The ",(0,r.mdx)("inlineCode",{parentName:"p"},'_convert_="partial"')," strategy does more work,\nand ",(0,r.mdx)("inlineCode",{parentName:"p"},'_convert_="all"')," does more work yet."),(0,r.mdx)("h3",{id:"partial-instantiation-for-hydra-version--112"},"Partial Instantiation (for Hydra version >= 1.1.2)"),(0,r.mdx)("p",null,"Sometimes you may not set all parameters needed to instantiate an object from the configuration, in this case you can set\n",(0,r.mdx)("inlineCode",{parentName:"p"},"_partial_")," to be ",(0,r.mdx)("inlineCode",{parentName:"p"},"True")," to get a ",(0,r.mdx)("inlineCode",{parentName:"p"},"functools.partial")," wrapped object or method, then complete initializing the object in\nthe application code. Here is an example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example classes"',title:'"Example','classes"':!0},'class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n\n    def __repr__(self) -> str:\n        return f"Optimizer(algo={self.algo},lr={self.lr})"\n\n\nclass Model:\n    def __init__(self, optim_partial: Any, lr: float):\n        super().__init__()\n        self.optim = optim_partial(lr=lr)\n        self.lr = lr\n\n    def __repr__(self) -> str:\n        return f"Model(Optimizer={self.optim},lr={self.lr})"\n')),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--5"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Config"',title:'"Config"'},"model:\n  _target_: my_app.Model\n  optim_partial:\n    _partial_: true\n    _target_: my_app.Optimizer\n    algo: SGD\n  lr: 0.01\n"))),(0,r.mdx)("div",{className:"col col--7"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'},'model = instantiate(cfg.model)\nprint(model)\n# "Model(Optimizer=Optimizer(algo=SGD,lr=0.01),lr=0.01)\n')))),(0,r.mdx)("p",null,"If you are repeatedly instantiating the same config,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"_partial_=True")," may provide a significant speedup as compared with regular (non-partial) instantiation."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"factory = instantiate(config, _partial_=True)\nobj = factory()\n")),(0,r.mdx)("p",null,"In the above example, repeatedly calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"factory")," would be faster than repeatedly calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate(config)"),".\nA caveat of this approach is that the same keyword arguments would be re-used in each call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"factory"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'class Foo:\n    ...\n\nclass Bar:\n    def __init__(self, foo):\n        self.foo = foo\n\nbar_conf = {\n    "_target_": "__main__.Bar",\n    "foo": {"_target_": "__main__.Foo"},\n}\n\nbar_factory = instantiate(bar_conf, _partial_=True)\nbar1 = bar_factory()\nbar2 = bar_factory()\n\nassert bar1 is not bar2\nassert bar1.foo is bar2.foo  # the `Foo` instance is re-used here\n')),(0,r.mdx)("p",null,"This does not apply if ",(0,r.mdx)("inlineCode",{parentName:"p"},"_partial_=False"),",\nin which case a new ",(0,r.mdx)("inlineCode",{parentName:"p"},"Foo")," instance would be created with each call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate"),"."),(0,r.mdx)("h3",{id:"instantiation-of-builtins"},"Instantiation of builtins"),(0,r.mdx)("p",null,"The value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"_target_")," passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate"),' should be a "dotpath" pointing\nto some callable that can be looked up via a combination of ',(0,r.mdx)("inlineCode",{parentName:"p"},"import")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"getattr"),".\nIf you want to target one of Python's ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library/functions.html"},"built-in functions")," (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"len")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"print")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"divmod"),"),\nyou will need to provide a dotpath looking up that function in Python's ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library/builtins.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"builtins"))," module."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'from hydra.utils import instantiate\n# instantiate({"_target_": "len"}, [1,2,3])  # this gives an InstantiationException\ninstantiate({"_target_": "builtins.len"}, [1,2,3])  # this works, returns the number 3\n')))}u.isMDXComponent=!0}}]);