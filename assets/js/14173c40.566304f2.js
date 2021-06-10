(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{270:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),i=(t(0),t(270)),o={id:"hydra-command-line-flags",title:"Hydra's command line flags"},c={unversionedId:"advanced/hydra-command-line-flags",id:"advanced/hydra-command-line-flags",isDocsHomePage:!1,title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/docs/advanced/hydra-command-line-flags.md",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/next/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/hydra-command-line-flags.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623345591,formattedLastUpdatedAt:"6/10/2021",sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/next/advanced/terminology"},next:{title:"basic",permalink:"/docs/next/advanced/override_grammar/basic"}},l=[],s={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra is using the command line for two things:"),Object(i.b)("p",null,"Hydra is using the command line for two things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Controlling Hydra"),Object(i.b)("li",{parentName:"ul"},"Configuring your application (See ",Object(i.b)("a",{parentName:"li",href:"/docs/next/advanced/override_grammar/basic"},"Override Grammar"),")")),Object(i.b)("p",null,"Arguments prefixed by - or -- control Hydra; the rest are used to configure the application."),Object(i.b)("p",null,"Information about Hydra:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--hydra-help"),": Shows Hydra specific flags"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--version"),": Show Hydra's version and exit")),Object(i.b)("p",null,"Information provided by the Hydra app:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--help,-h"),": Shows the application's help. This can be ",Object(i.b)("a",{parentName:"li",href:"/docs/next/configure_hydra/app_help"},"customized"),".")),Object(i.b)("p",null,"Debugging assistance:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--cfg,-c"),": Show config instead of running. Takes as parameter one of ",Object(i.b)("inlineCode",{parentName:"li"},"job"),", ",Object(i.b)("inlineCode",{parentName:"li"},"hydra")," or ",Object(i.b)("inlineCode",{parentName:"li"},"all"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--resolve"),": Used in conjunction with the ",Object(i.b)("inlineCode",{parentName:"li"},"--cfg")," flag; resolve interpolations in the config before printing it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--package,-p"),": Used in conjunction with --cfg to select a specific config package to show."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--info,-i"),": Print Hydra information. This includes installed plugins, Config Search Path, Defaults List, generated config and more.")),Object(i.b)("p",null,"Running Hydra applications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--run,-r"),": Run is the default mode and is not normally needed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--multirun,-m"),": Run multiple jobs with the configured launcher and sweeper. See ",Object(i.b)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/multi-run"},"Multi-run"),".",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--config-path,-cp"),": Overrides the config_path specified in hydra.main(). The config_path is relative to the Python file declaring @hydra.main()"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--config-name,-cn"),": Overrides the config_name specified in hydra.main()"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--config-dir,-cd"),": Adds an additional config directory to the ",Object(i.b)("a",{parentName:"li",href:"/docs/next/advanced/search_path"},"config search path"),".",Object(i.b)("br",{parentName:"li"}),"This is useful for installed apps that want to allow their users to provide additional configs.")),Object(i.b)("p",null,"Misc:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--shell-completion,-sc"),": Install or Uninstall ",Object(i.b)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),".")))}b.isMDXComponent=!0}}]);