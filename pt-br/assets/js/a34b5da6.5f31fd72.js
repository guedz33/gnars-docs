"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},l="Bots",i={unversionedId:"Level-3/bots",id:"Level-3/bots",title:"Bots",description:"Let's translate docs/intro.md to French.",source:"@site/docs/Level-3/bots.md",sourceDirName:"Level-3",slug:"/Level-3/bots",permalink:"/gnars-docs/pt-br/docs/Level-3/bots",draft:!1,editUrl:"https://github.com/sktbrd/gnars-docs/tree/main/docs/Level-3/bots.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Spreading the \u2310\u25e8-\u25e8",permalink:"/gnars-docs/pt-br/docs/Level-3/nounish-lifestyle"},next:{title:"Translate your site",permalink:"/gnars-docs/pt-br/docs/Level-3/translate-your-site"}},s={},c=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bots"},"Bots"),(0,o.kt)("p",null,"Let's translate ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,o.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,o.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,o.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,o.kt)("p",null,"Translate ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,o.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,o.kt)("p",null,"Start your site on the French locale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,o.kt)("p",null,"Your localized site is accessible at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/fr/"},"http://localhost:3000/fr/")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,o.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,o.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,o.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:n(7574).Z,width:"370",height:"302"})),(0,o.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,o.kt)("p",null,"Build your site for a specific locale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,o.kt)("p",null,"Or build your site to include all the locales at once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}d.isMDXComponent=!0},7574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"}}]);