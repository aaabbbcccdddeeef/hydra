(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{115:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return l})),a.d(n,"rightToc",(function(){return i})),a.d(n,"default",(function(){return u}));var r=a(2),t=a(7),c=(a(0),a(239)),o={id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},l={unversionedId:"plugins/ray_launcher",id:"plugins/ray_launcher",isDocsHomePage:!1,title:"Ray Launcher plugin",description:"The Ray Launcher plugin provides 2 launchers: rayaws and raylocal. rayaws launches jobs remotely on AWS and is built on top of Ray Autoscaler. raylocal will launch jobs on your local machine.",source:"@site/docs/plugins/ray_launcher.md",slug:"/plugins/ray_launcher",permalink:"/docs/next/plugins/ray_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/ray_launcher.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1604428165,sidebar_label:"Ray Launcher plugin",sidebar:"docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"},next:{title:"RQ Launcher plugin",permalink:"/docs/next/plugins/rq_launcher"}},i=[],s={rightToc:i};function u(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Ray Launcher plugin provides 2 launchers: ",Object(c.b)("inlineCode",{parentName:"p"},"ray_aws")," and ",Object(c.b)("inlineCode",{parentName:"p"},"ray_local"),". ",Object(c.b)("inlineCode",{parentName:"p"},"ray_aws")," launches jobs remotely on AWS and is built on top of ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.ray.io/en/latest/autoscaling.html"}),"Ray Autoscaler"),". ",Object(c.b)("inlineCode",{parentName:"p"},"ray_local")," will launch jobs on your local machine. "),Object(c.b)("p",null,"This plugin requires Hydra 1.0 to install:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip install hydra-ray-launcher --pre\n")),Object(c.b)("p",null,"After installation, override the Hydra launcher via your command line to activate one of the launchers:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"# AWS Ray Launcher\n$ python my_app.py hydra/launcher=ray_aws\n\n# Local Ray Launcher\n$ python my_app.py hydra/launcher=ray_local\n")),Object(c.b)("h4",{id:"ray_aws-launcher"},"ray_aws launcher"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ray_aws")," launcher is built on top of ray's ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.ray.io/en/latest/autoscaling.html"}),"autoscaler cli"),". To get started, you need to\nconfig your AWS credentials first, tutorials can be found ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"here"),".\nYou can run an initial check on credential configuration running the following command."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"})," python -c 'import boto3;boto3.client(\"ec2\")'\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"ray autoscaler")," expects your AWS user has certain permissions for ",Object(c.b)("inlineCode",{parentName:"p"},"EC2")," and ",Object(c.b)("inlineCode",{parentName:"p"},"IAM"),". This ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ray-project/ray/issues/9327"}),"issue")," provides some contexts."))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ray autoscaler")," expects a yaml file to provide specs for the new cluster, which we've schematized in ",Object(c.b)("inlineCode",{parentName:"p"},"hydra_ray_launcher.hydra_plugins.hydra_ray_launcher.conf.__init__.RayClusterConf"),",\nThe plugin defaults are in ",Object(c.b)("inlineCode",{parentName:"p"},"conf/hydra/launcher/ray_aws.yaml"),". You can override the default values in your app config or from command line."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This plugins depends on ",Object(c.b)("inlineCode",{parentName:"p"},"cloudpickle"),", as a result please make sure your local machine and the AWS cluster runs the same version of: ",Object(c.b)("inlineCode",{parentName:"p"},"ray"),", ",Object(c.b)("inlineCode",{parentName:"p"},"hydra-core")," and ",Object(c.b)("inlineCode",{parentName:"p"},"python"),". You can install the desired software version by overriding ",Object(c.b)("inlineCode",{parentName:"p"},"RayClusterConf.setup_commands"),"."))),Object(c.b)("p",null,"Now we can go ahead and run ",Object(c.b)("inlineCode",{parentName:"p"},"train.py")," using ",Object(c.b)("inlineCode",{parentName:"p"},"ray_aws")," launcher"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ tree -L 1\n.\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 model\n\u2514\u2500\u2500 train.py\n\n$ python train.py --multirun hydra/launcher=ray_aws +extra_configs=aws random_seed=1,2,3 \n...\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : +extra_configs=aws random_seed=1\n[HYDRA]        #1 : +extra_configs=awsrandom_seed=2\n[HYDRA]        #2 : +extra_configs=awsrandom_seed=3\n...\n(pid=17975) [__main__][INFO] - Start training...\n(pid=17975) [model.my_model][INFO] - Init my model.\n(pid=17976) [__main__][INFO] - Start training...\n(pid=17976) [model.my_model][INFO] - Init my model.\n(pid=17976) [__main__][INFO] - Start training...\n(pid=17976) [model.my_model][INFO] - Init my model. \n.....\n[HYDRA] Syncing outputs from remote dir: multirun/2020-08-05/11-41-04 to local dir: multirun/2020-08-05/11-41-04\n...\n[2020-10-14 15:18:20,888][HYDRA] Stopping cluster now. (stop_cluster=true)\n[2020-10-14 15:18:20,889][HYDRA] NOT deleting the cluster (provider.cache_stopped_nodes=true)\n")),Object(c.b)("p",null,"In the example app config, we've configured the launcher to download ",Object(c.b)("inlineCode",{parentName:"p"},"*.pt")," files created by the app to local ",Object(c.b)("inlineCode",{parentName:"p"},"download")," dir. You should be able to see a ",Object(c.b)("inlineCode",{parentName:"p"},"download")," dir created in your current working dir."),Object(c.b)("details",null,Object(c.b)("summary",null,"Example app downloaded file"),"```commandline $ tree -L 1 . \u251c\u2500\u2500 conf \u251c\u2500\u2500 multirun # Created by example app train.py \u251c\u2500\u2500 model \u2514\u2500\u2500 train.py",Object(c.b)("p",null,"$ tree multirun/\nmultirun\n\u2514\u2500\u2500 2020-05-18\n\u2514\u2500\u2500 15-17-08\n\u251c\u2500\u2500 0\n\u2502\xa0\xa0 \u2514\u2500\u2500 checkpoint\n\u2502\xa0\xa0     \u2514\u2500\u2500 checkpoint_1.pt\n\u251c\u2500\u2500 1\n\u2502\xa0\xa0 \u2514\u2500\u2500 checkpoint\n\u2502\xa0\xa0     \u2514\u2500\u2500 checkpoint_2.pt\n\u2514\u2500\u2500 2\n\u2514\u2500\u2500 checkpoint\n\u2514\u2500\u2500 checkpoint_3.pt"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"</details>\n\n\n<details><summary>Ray AWS Launcher config</summary>\nYou can discover the `ray_aws` launcher's config as follows:\n\n```commandline\n$ python train.py  hydra/launcher=ray_aws --cfg hydra -p hydra.launcher\n# @package hydra.launcher\n_target_: hydra_plugins.hydra_ray_launcher.ray_aws_launcher.RayAWSLauncher\nmandatory_install:\n  hydra_version: 1.0.3\n  ray_version: 1.0.0\n  cloudpickle_version: 1.6.0\n  omegaconf_version: 2.1.0dev9\n  pickle5_version: 0.0.11\n  install_commands:\n  - conda create -n hydra_${python_version:micro} python=${python_version:micro} -y\n  - echo 'export PATH=\"$HOME/anaconda3/envs/hydra_${python_version:micro}/bin:$PATH\"'\n    >> ~/.bashrc\n  - pip install omegaconf==${hydra.launcher.mandatory_install.omegaconf_version}\n  - pip install hydra-core==${hydra.launcher.mandatory_install.hydra_version}\n  - pip install ray==${hydra.launcher.mandatory_install.ray_version}\n  - pip install cloudpickle==${hydra.launcher.mandatory_install.cloudpickle_version}\n  - pip install pickle5==${hydra.launcher.mandatory_install.pickle5_version}\n  - pip install -U https://hydra-test-us-west-2.s3-us-west-2.amazonaws.com/hydra_ray_launcher-0.1.0-py3-none-any.whl\nray_init_cfg:\n  num_cpus: 1\n  num_gpus: 0\nray_remote_cfg:\n  num_cpus: 1\n  num_gpus: 0\nray_cluster_cfg:\n  cluster_name: default\n  min_workers: 0\n  max_workers: 1\n  initial_workers: 0\n  autoscaling_mode: default\n  target_utilization_fraction: 0.8\n  idle_timeout_minutes: 5\n  docker:\n    image: ''\n    container_name: ''\n    pull_before_run: true\n    run_options: []\n  provider:\n    type: aws\n    region: us-west-2\n    availability_zone: us-west-2a,us-west-2b\n    cache_stopped_nodes: false\n    key_pair:\n      key_name: hydra\n  auth:\n    ssh_user: ubuntu\n  head_node:\n    InstanceType: m5.large\n    ImageId: ami-008d8ed4bd7dc2485\n  worker_nodes:\n    InstanceType: m5.large\n    ImageId: ami-008d8ed4bd7dc2485\n  file_mounts: {}\n  initialization_commands: []\n  setup_commands: []\n  head_setup_commands: []\n  worker_setup_commands: []\n  head_start_ray_commands:\n  - ray stop\n  - ulimit -n 65536; ray start --head --redis-port=6379 --object-manager-port=8076\n    --autoscaling-config=~/ray_bootstrap_config.yaml\n  worker_start_ray_commands:\n  - ray stop\n  - ulimit -n 65536; ray start --address=$RAY_HEAD_IP:6379 --object-manager-port=8076\nstop_cluster: true\nsync_up:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nsync_down:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\n"))),Object(c.b)("h5",{id:"manage-cluster-lifecycle"},"Manage Cluster LifeCycle"),Object(c.b)("p",null,"You can manage the Ray EC2 cluster lifecycle by configuring the two flags provided by the plugin:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default setting (no need to specify on commandline): Delete cluster after job finishes remotely:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.stop_cluster=true\nhydra.launcher.ray_cluster_cfg.provider.cache_stopped_nodes=False\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Keep cluster running after jobs finishes remotely")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.stop_cluster=False\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Power off EC2 instances without deletion")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.ray_cluster_cfg.provider.cache_stopped_nodes=true\n")),Object(c.b)("h4",{id:"ray_local-launcher"},"ray_local launcher"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ray_local")," launcher lets you run ",Object(c.b)("inlineCode",{parentName:"p"},"ray")," on your local machine. You can easily config how your jobs are executed by changing ",Object(c.b)("inlineCode",{parentName:"p"},"ray_local")," launcher's configuration here\n",Object(c.b)("inlineCode",{parentName:"p"},"~/hydra/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/hydra/launcher/ray_local.yaml")),Object(c.b)("p",null,"TODO Add example link once it is available on hydra master\nAn example using the ray local launcher by default is provided in the plugin repository."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ python example/train.py --multirun\n[2020-07-31 16:50:03,360][HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-07-31/16-50-02\n[2020-07-31 16:50:03,360][HYDRA] Initializing ray with config: {'num_cpus': 2, 'num_gpus': 0}\n2020-07-31 16:50:03,371 INFO resource_spec.py:204 -- Starting Ray with 8.64 GiB memory available for workers and up to 4.34 GiB for objects. You can adjust these settings with ray.init(memory=<bytes>, object_store_memory=<bytes>).\n2020-07-31 16:50:03,749 INFO services.py:1168 -- View the Ray dashboard at localhost:8265\n[2020-07-31 16:50:04,302][HYDRA]        #0 : random_seed=1\n(pid=45515) [2020-07-31 16:50:04,614][__main__][INFO] - Start training...\n(pid=45515) [2020-07-31 16:50:04,615][model.my_model][INFO] - Init my model\n(pid=45515) [2020-07-31 16:50:04,615][model.my_model][INFO] - Created dir for checkpoints. dir=/Users/jieru/workspace/hydra-fork/hydra/plugins/hydra_ray_launcher/example/multirun/2020-07-31/16-50-02/0/checkpoint\n")),Object(c.b)("p",null,"You can discover the ray local launcher parameters with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python train.py --cfg hydra -p hydra.launcher\n# @package hydra.launcher\ntarget: hydra_plugins.hydra_ray_launcher.ray_local_launcher.RayLocalLauncher\nparams:\n  ray_init_cfg:\n    num_cpus: 1\n    num_gpus: 0\n  ray_remote_cfg:\n    num_cpus: 1\n    num_gpus: 0\n")))}u.isMDXComponent=!0},239:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return b}));var r=a(0),t=a.n(r);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=t.a.createContext({}),u=function(e){var n=t.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=u(e.components);return t.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||c;return a?t.a.createElement(b,l(l({ref:n},s),{},{components:a})):t.a.createElement(b,l({ref:n},s))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);