(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{155:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return b}));var t=r(3),a=r(8),o=(r(0),r(270)),i={id:"intro",title:"Overview",sidebar_label:"Introduction"},c={unversionedId:"configure_hydra/intro",id:"version-1.0/configure_hydra/intro",isDocsHomePage:!1,title:"Overview",description:"Many things in Hydra can be customized. This includes:",source:"@site/versioned_docs/version-1.0/configure_hydra/Intro.md",slug:"/configure_hydra/intro",permalink:"/docs/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/configure_hydra/Intro.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623345591,formattedLastUpdatedAt:"6/10/2021",sidebar_label:"Introduction",sidebar:"version-1.0/docs",previous:{title:"Read-only config",permalink:"/docs/patterns/write_protect_config_node"},next:{title:"job",permalink:"/docs/configure_hydra/job"}},l=[{value:"Runtime variables",id:"runtime-variables",children:[{value:"Hydra resolvers",id:"hydra-resolvers",children:[]}]}],u={toc:l};function b(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Many things in Hydra can be customized. This includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Launcher configurations"),Object(o.b)("li",{parentName:"ul"},"Sweeper configuration"),Object(o.b)("li",{parentName:"ul"},"Logging configuration"),Object(o.b)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),Object(o.b)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),Object(o.b)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),Object(o.b)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",Object(o.b)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),Object(o.b)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),Object(o.b)("p",null,"You can view the Hydra config structure ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/hydra/conf"},"here"),"."),Object(o.b)("p",null,"This is a subset of the composed Hydra configuration node:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),Object(o.b)("h2",{id:"runtime-variables"},"Runtime variables"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," package is deleted from your config when the function runs to reduce the amount of noise\nin the config passed to the function.",Object(o.b)("br",{parentName:"p"}),"\n","You can still access all config nodes in Hydra through the custom resolver ",Object(o.b)("inlineCode",{parentName:"p"},"hydra"),". "),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"config_name: ${hydra:job.config_name}\n")),Object(o.b)("p",null,"Pay close attention to the syntax: The resolver name is ",Object(o.b)("inlineCode",{parentName:"p"},"hydra"),", and the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is passed after the colon."),Object(o.b)("p",null,"The following variables are some of the variables populated at runtime.",Object(o.b)("br",{parentName:"p"}),"\n","You can see the full Hydra config using ",Object(o.b)("inlineCode",{parentName:"p"},"--cfg hydra"),":"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hydra.job"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (SLURM etc) ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")),Object(o.b)("h3",{id:"hydra-resolvers"},"Hydra resolvers"),Object(o.b)("p",null,"Hydra supports ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/hydra/core/utils.py"},"several OmegaConf resolvers")," by default."),Object(o.b)("h4",{id:"now"},Object(o.b)("inlineCode",{parentName:"h4"},"now")),Object(o.b)("p",null,"Creates a string representing the current time using ",Object(o.b)("a",{parentName:"p",href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior"},"strftime"),".\nFor example, for formatting the time you can use something like",Object(o.b)("inlineCode",{parentName:"p"},"${now:%H-%M-%S}"),"."),Object(o.b)("h4",{id:"hydra"},Object(o.b)("inlineCode",{parentName:"h4"},"hydra")),Object(o.b)("p",null,"Interpolates into the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," config node.\nFor example, use ",Object(o.b)("inlineCode",{parentName:"p"},"${hydra:job.name}")," to get the Hydra job name."),Object(o.b)("h4",{id:"python_version"},Object(o.b)("inlineCode",{parentName:"h4"},"python_version")),Object(o.b)("p",null,"Return a string representing the runtime python version by calling ",Object(o.b)("inlineCode",{parentName:"p"},"sys.version_info"),".\nYou can pass in a parameter to specify level of version returned. By default, the resolver returns the major and minor version."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"python_version: ${python_version:}                         # runtime python version, eg: 3.8\nmajor_version: ${python_version:major}                     # runtime python major version, eg: 3\nminor_version: ${python_version:minor}                     # runtime python version in the format major.minor, eg: 3.8\nmicro_version: ${python_version:micro}                     # runtime python version in the format major.minor.micro, eg: 3.8.2\n")),Object(o.b)("p",null,"You can learn more about OmegaConf ",Object(o.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}b.isMDXComponent=!0},270:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=t,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:n},u),{},{components:r})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);