"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[2101],{5318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),y=a,h=u["".concat(c,".").concat(y)]||u[y]||p[y]||r;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>o});var i=n(5773),a=(n(7378),n(5318));const r={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}o.isMDXComponent=!0},9503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(5773),a=(n(7378),n(5318)),r=n(5611);const o={sidebar_position:40,title:"Confidentiality"},s=void 0,c={unversionedId:"design-patterns/Confidentiality",id:"design-patterns/Confidentiality",title:"Confidentiality",description:"There is a balance between the demands of transparency (more supply chain visibility means it's harder to hide greenwshing) and confidentiality (share too much data and you risk expososing commercial secrets). A key UNTP principle is that every supply chain actor should be able to choose their own balance between transparency and confidentiality. To achieve this, UNTP defines six data confidentiality patterns with different degrees of data protection so that they can be appropriately combined to meet the confidentiality goals of each party. This includes the ability to selectively redact data from credentials received from upstream suppliers before passing them on to downstream buyers - without affecting the cryptographic integrity of the data.",source:"@site/docs/design-patterns/Confidentiality.md",sourceDirName:"design-patterns",slug:"/design-patterns/Confidentiality",permalink:"/spec-untp/docs/design-patterns/Confidentiality",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/design-patterns/Confidentiality.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Confidentiality"},sidebar:"tutorialSidebar",previous:{title:"Trust Graphs",permalink:"/spec-untp/docs/design-patterns/TrustGraphs"},next:{title:"Anti-Counterfeiting",permalink:"/spec-untp/docs/design-patterns/Counterfeiting"}},d={},l=[{value:"Discoverable Public Data",id:"discoverable-public-data",level:2},{value:"Public Data with GUID key",id:"public-data-with-guid-key",level:2},{value:"Encrypted Data with Shared Key",id:"encrypted-data-with-shared-key",level:2},{value:"Encrypted Data with Requestable Key",id:"encrypted-data-with-requestable-key",level:2},{value:"Selective Redaction",id:"selective-redaction",level:2},{value:"Private Data",id:"private-data",level:2},{value:"Usage Patterns",id:"usage-patterns",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{mdxType:"Disclaimer"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"There is a balance between the demands of transparency (more supply chain visibility means it's harder to hide greenwshing) and confidentiality (share too much data and you risk expososing commercial secrets). A key UNTP principle is that every supply chain actor should be able to choose their own balance between transparency and confidentiality. To achieve this, UNTP defines six data confidentiality patterns with different degrees of data protection so that they can be appropriately combined to meet the confidentiality goals of each party. This includes the ability to selectively redact data from credentials received from upstream suppliers before passing them on to downstream buyers - without affecting the cryptographic integrity of the data. "),(0,a.kt)("h2",{id:"discoverable-public-data"},"Discoverable Public Data"),(0,a.kt)("h2",{id:"public-data-with-guid-key"},"Public Data with GUID key"),(0,a.kt)("h2",{id:"encrypted-data-with-shared-key"},"Encrypted Data with Shared Key"),(0,a.kt)("h2",{id:"encrypted-data-with-requestable-key"},"Encrypted Data with Requestable Key"),(0,a.kt)("h2",{id:"selective-redaction"},"Selective Redaction"),(0,a.kt)("h2",{id:"private-data"},"Private Data"),(0,a.kt)("h2",{id:"usage-patterns"},"Usage Patterns"))}u.isMDXComponent=!0}}]);