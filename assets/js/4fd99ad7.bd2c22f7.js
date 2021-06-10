(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(270)),o=n(277),c={id:"documentation",title:"Documentation",sidebar_label:"Documentation"},s={unversionedId:"development/documentation",id:"development/documentation",isDocsHomePage:!1,title:"Documentation",description:"NEWS Entries",source:"@site/docs/development/documentation.md",slug:"/development/documentation",permalink:"/docs/next/development/documentation",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/documentation.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623345591,formattedLastUpdatedAt:"6/10/2021",sidebar_label:"Documentation",sidebar:"docs",previous:{title:"Style Guide",permalink:"/docs/next/development/style_guide"},next:{title:"Release process",permalink:"/docs/next/development/release"}},u=[{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[]}]},{value:"Website setup",id:"website-setup",children:[{value:"Install",id:"install",children:[]},{value:"Local Development",id:"local-development",children:[]}]}],l={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"news-entries"},"NEWS Entries"),Object(a.b)("p",null,"The ",Object(a.b)(o.b,{to:"NEWS.md",mdxType:"GithubLink"},"NEWS.md")," file is managed using ",Object(a.b)("inlineCode",{parentName:"p"},"towncrier")," and all non-trivial changes\nmust be accompanied by a news entry."),Object(a.b)("p",null,"To add an entry to the news file, first, you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",Object(a.b)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),Object(a.b)("p",null,"Once you have an issue or pull request, you take the number, and you create a\nfile inside the ",Object(a.b)("inlineCode",{parentName:"p"},"news/")," directory (in case the change is directly related to Hydra)\nor in the ",Object(a.b)("inlineCode",{parentName:"p"},"news/")," directory of the relevant plugin. The file is named after the\nissue number with one of the following extensions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"api_change")," : API Change (Renames, deprecations, and removals)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"feature")," : Addition of a new feature"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"bugfix")," : Fixing of a bug"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"docs")," : Addition or updates to documentation"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"maintenance")," : Changes that improve the maintainability of the code")),Object(a.b)("p",null,"If your issue or PR number is ",Object(a.b)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, you would\ncreate a file ",Object(a.b)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",Object(a.b)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"news/NNNN.api_change"),"). Likewise, if a PR touches multiple issues/PRs, you may\ncreate a file for each of them with the exact same contents, and Towncrier will\ndeduplicate them."),Object(a.b)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),Object(a.b)("p",null,"The contents of this file are markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),Object(a.b)("p",null,"To maintain a consistent style in the ",Object(a.b)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'),Object(a.b)("h2",{id:"website-setup"},"Website setup"),Object(a.b)("p",null,"The website is built using ",Object(a.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus 2"),".",Object(a.b)("br",{parentName:"p"}),"\n","Run the following commands from the ",Object(a.b)("inlineCode",{parentName:"p"},"website")," directory."),Object(a.b)("h3",{id:"install"},"Install"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ yarn\n")),Object(a.b)("h3",{id:"local-development"},"Local Development"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ yarn start\n")),Object(a.b)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),Object(a.b)("p",null,"For more details, refer ",Object(a.b)(o.b,{to:"website/README.md",mdxType:"GithubLink"},"here"),"."))}d.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},272:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(11),o=n(271),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(273),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,b=e.href,m=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,y=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),D=f||b,N=Object(o.a)(D),A=null==D?void 0:D.replace("pathname://",""),x=void 0!==A?(n=A,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),C=p?a.e:a.c,E=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&N&&window.docusaurus.prefetch(x),function(){E&&d&&d.disconnect()}}),[x,E,N]);var V=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,k=!x||!N||V;return x&&N&&!V&&!h&&w.collectLink(x),k?i.a.createElement("a",Object.assign({href:x},D&&!N&&{target:"_blank",rel:"noopener noreferrer"},y)):i.a.createElement(C,Object.assign({},y,{onMouseEnter:function(){P.current||(window.docusaurus.preload(x),P.current=!0)},innerRef:function(e){var t,n;E&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:v,activeClassName:m}))}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(10),i=n(271);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},274:function(e,t,n){try{e.exports=n(275)}catch(i){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),i=n(38),a=n(276);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return a.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getDocVersionSuggestions(n,i)}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,a,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(i=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),a=i.activeVersion!==r;return{latestDocSuggestion:a?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),a=n.n(i),o=n(272),c=n(10),s=n(274);function u(e){return a.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(u,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);