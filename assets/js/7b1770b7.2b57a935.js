(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(266)),i=n(273),c={id:"config_groups",title:"Grouping config files"},s={unversionedId:"tutorials/basic/your_first_app/config_groups",id:"version-1.0/tutorials/basic/your_first_app/config_groups",isDocsHomePage:!1,title:"Grouping config files",description:"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/4_config_groups.md",slug:"/tutorials/basic/your_first_app/config_groups",permalink:"/docs/tutorials/basic/your_first_app/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/4_config_groups.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1618883716,formattedLastUpdatedAt:"4/20/2021",sidebar:"version-1.0/docs",previous:{title:"Using the config object",permalink:"/docs/tutorials/basic/your_first_app/using_config"},next:{title:"Selecting defaults for config groups",permalink:"/docs/tutorials/basic/your_first_app/defaults"}},u=[{value:"Using config groups",id:"using-config-groups",children:[]},{value:"More advanced usages of config groups",id:"more-advanced-usages-of-config-groups",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{to:"examples/tutorials/basic/your_first_hydra_app/4_config_groups",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups. "),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Config Group"))," is a named group with a set of valid options."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The config options are mutually exclusive. Only one can be selected."),Object(a.b)("li",{parentName:"ul"},"Selecting a non-existent config option generates an error message with the valid options.")),Object(a.b)("p",null,"To create a config group, create a directory. e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"db")," to hold a file for each database configuration option.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration files\ninto a ",Object(a.b)("inlineCode",{parentName:"p"},"conf")," directory."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\ndriver: mysql\nuser: omry\npassword: secret\n")),Object(a.b)("p",null,"The config group determines the ",Object(a.b)("inlineCode",{parentName:"p"},"package")," of the config content inside the final config object.  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation of db/mysql.yaml" {1}',title:'"Interpretation',of:!0,'db/mysql.yaml"':!0,"{1}":!0},"db:\n  driver: mysql\n  user: omry\n  password: secret \n")),Object(a.b)("p",null,"In Hydra 1.1 ",Object(a.b)("inlineCode",{parentName:"p"},"_group_")," will become the default package.",Object(a.b)("br",{parentName:"p"}),"\n","For now, add ",Object(a.b)("inlineCode",{parentName:"p"},"# @package _group_")," at the top of your config group files.",Object(a.b)("br",{parentName:"p"}),"\n","Learn more about packages directive ",Object(a.b)("a",{parentName:"p",href:"/docs/advanced/overriding_packages"},"here"),". "),Object(a.b)("h3",{id:"using-config-groups"},"Using config groups"),Object(a.b)("p",null,"Since we moved all the configs into the ",Object(a.b)("inlineCode",{parentName:"p"},"conf")," directory, we need to tell Hydra where to find them using the ",Object(a.b)("inlineCode",{parentName:"p"},"config_path")," parameter.\n",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"config_path")," is a directory relative to ",Object(a.b)("inlineCode",{parentName:"strong"},"my_app.py")),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0},'@hydra.main(config_path="conf")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"my_app.py")," without requesting a configuration will print an empty config."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),Object(a.b)("p",null,"You can append an item a config group to the ",Object(a.b)("inlineCode",{parentName:"p"},"Defaults List"),".",Object(a.b)("br",{parentName:"p"}),"\n","The ",Object(a.b)("inlineCode",{parentName:"p"},"Defaults List")," is described on the next page."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),Object(a.b)("p",null,"Like before, you can still override individual values in the resulting config:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),Object(a.b)("h3",{id:"more-advanced-usages-of-config-groups"},"More advanced usages of config groups"),Object(a.b)("p",null,"Config groups can be nested. For example the config group ",Object(a.b)("inlineCode",{parentName:"p"},"db/mysql/storage_engine")," can contain ",Object(a.b)("inlineCode",{parentName:"p"},"innodb.yaml")," and ",Object(a.b)("inlineCode",{parentName:"p"},"myisam.yaml"),".\nWhen selecting an option from a nested config group, use ",Object(a.b)("inlineCode",{parentName:"p"},"/"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ python my_app.py +db=mysql +db/mysql/storage_engine=innodb\ndb:\n  driver: mysql\n  user: omry\n  password: secret \n  mysql:\n    storage_engine:\n      innodb_data_file_path: /var/lib/mysql/ibdata1\n      max_file_size: 1G\n")),Object(a.b)("p",null,"This simple example also demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration groups."))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,g=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(g,c(c({ref:t},u),{},{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},268:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(11),i=n(267),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(269),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,f=e.to,g=e.href,b=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,O=void 0===y||y,h=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,_=Object(r.useContext)(s),w=f||g,D=Object(i.a)(w),N=null==w?void 0:w.replace("pathname://",""),x=void 0!==N?(n=N,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,C=Object(r.useRef)(!1),A=d?a.e:a.c,P=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&D&&window.docusaurus.prefetch(x),function(){P&&p&&p.disconnect()}}),[x,P,D]);var V=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,k=!x||!D||V;return x&&D&&!V&&!v&&_.collectLink(x),k?o.a.createElement("a",Object.assign({href:x},w&&!D&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(A,Object.assign({},h,{onMouseEnter:function(){C.current||(window.docusaurus.preload(x),C.current=!0)},innerRef:function(e){var t,n;P&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(x)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:m,activeClassName:b}))}},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(10),o=n(267);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},270:function(e,t,n){try{e.exports=n(271)}catch(o){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),o=n(38),a=n(272);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return a.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getDocVersionSuggestions(n,o)}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,a,i=t.getActiveVersion(e,n),c=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(o=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),a=o.activeVersion!==r;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),a=n.n(o),i=n(268),c=n(10),s=n(270);function u(e){return a.a.createElement(i.a,Object(r.a)({},e,{to:(t=e.to,o=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(u,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);