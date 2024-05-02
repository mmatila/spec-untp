"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[5357],{5318:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(7378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(i),h=a,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return i?n.createElement(f,s(s({ref:t},d),{},{components:i})):n.createElement(f,s({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5611:(e,t,i)=>{i.d(t,{ZP:()=>s});var n=i(5773),a=(i(7378),i(5318));const r={toc:[]};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}s.isMDXComponent=!0},4087:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=i(5773),a=(i(7378),i(5318)),r=i(5611);const s={sidebar_position:3,title:"Best Practices"},o=void 0,c={unversionedId:"design-patterns/index",id:"design-patterns/index",title:"Best Practices",description:"Design patterns are non-normative but provide best practice guidance for UNTP implementers.",source:"@site/docs/design-patterns/index.md",sourceDirName:"design-patterns",slug:"/design-patterns/",permalink:"/spec-untp/docs/design-patterns/",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/design-patterns/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Best Practices"},sidebar:"tutorialSidebar",previous:{title:"Data Carriers",permalink:"/spec-untp/docs/specification/DataCarriers"},next:{title:"Trust Anchors",permalink:"/spec-untp/docs/design-patterns/TrustAnchors"}},l={},d=[{value:"Trust Anchors",id:"trust-anchors",level:2},{value:"Trust Graphs",id:"trust-graphs",level:2},{value:"Confidentiality",id:"confidentiality",level:2},{value:"Counterfeiting",id:"counterfeiting",level:2},{value:"Mass Balance",id:"mass-balance",level:2},{value:"ESG Rules",id:"esg-rules",level:2},{value:"GS1 Binding",id:"gs1-binding",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{mdxType:"Disclaimer"}),(0,a.kt)("p",null,"Design patterns are non-normative but provide best practice guidance for UNTP implementers."),(0,a.kt)("h2",{id:"trust-anchors"},"Trust Anchors"),(0,a.kt)("p",null,"UNTP credentials will include identifiers of products, locations or businesses.  UNTP credentials will also include ESG performance claims like emissions intensity values. But how can a verifier of these identifiers or ESG claims be confident that the claims are true and that they are made by the genuine party at a verifiable location? Trust anchors are national or international authorities that typically run existing business or product registration, certification, accreditation, or other high integrity processes. Examples of trust anchors include national regulators that govern things like land ownership or business registrations. Another example are the national accreditation bodies that audit and accredit certifiers to issue third party assessments. UNTP depends on trust anchors to add digital integrity to ESG claims and identities by linking them to the authority under which they are made. In essence, UNTP defines a protocol for existing trust anchors to continue doing what they have always done, but in a digitally verifiable way."),(0,a.kt)("h2",{id:"trust-graphs"},"Trust Graphs"),(0,a.kt)("p",null,"The ESG footprint of a finished product is the aggregation of it's components and processes through the value chain. Verification of ESG claims therefore involves assessing a bundle of linked credentials (aka a \"trust graph\") drawn from all or part of a value chain. Whilst each credential may be valid in it's own right, one challenge is verifying the context of related credentials. For example, a conformity assessment body that is accredited to test strength of structured steel might not be accredited to issue emissions intensity certificates. A technically valid emissions certificate linked to a technically valid accreditation certificate that has a different scope would be fraudulent. To address this problem, the UNTP defines a simple method to verify the contextual scope of linked credentials. Essentially this provides a mechanism to verify a linked graph of data at a layer above individual credential verification."),(0,a.kt)("h2",{id:"confidentiality"},"Confidentiality"),(0,a.kt)("p",null,"There is a balance between the demands of transparency (more supply chain visibility means it's harder to hide greenwshing) and confidentiality (share too much data and you risk expososing commercial secrets). A key UNTP principle is that every supply chain actor should be able to choose their own balance between transparency and confidentiality. To achieve this, UNTP defines six data confidentiality patterns with different degrees of data protection so that they can be appropriately combined to meet the confidentiality goals of each party. This includes the ability to selectively redact data from credentials received from upstream suppliers before passing them on to downstream buyers - without affecting the cryptographic integrity of the data. "),(0,a.kt)("h2",{id:"counterfeiting"},"Counterfeiting"),(0,a.kt)("p",null,"As the value of genuinely sustainable goods increases, so do the incentives to sell fake goods as the real thing. UNTP defines a simple and decentralised anti-counterfeiting protocol that can be implemented by any producer at very low cost. It builds upon the W3C DID standard by issuing a unique DID (and corresponding keypair) for every serialised (individual or batch) product. The DID (and therefore the public key) is discoverable from the product serial number using the standard link resolver protocol. The item/batch level DID is cryptographically linked to the product class level DID The private key is discoverable from a QR code hidden inside the product packaging. Scanning the QR provides the necessary key to update the individual serialised product public status to indicate consumption. Attackers that copy genuine serial numbers will find that their products are quickly identifiable as fakes. Attackers that try to create new serial numbers will not be able to create valid links to the genuine product class. The UNTP anti-counterfeiting protocol provides additional value/incentive for UNTP uptake beyond ESG integrity."),(0,a.kt)("h2",{id:"mass-balance"},"Mass Balance"),(0,a.kt)("p",null,'Mass balance fraud is a particularly challenging greenwashing vector. It happens when a fraudulent actor buys a small quantity of high ESG integrity inputs (eg genuine carbon neutral, organic, deforestation free cotton) and mixes that input with lower quality alternatives and then sells the full volume of manufactures product (eg woven cotton fabric) as sustainable product, re-using the valid credentials from the niche supply. The UNTP solution to this problem involves trusted third parties (certifiers or industry associations) to act as quota managers that issue "guarantee of origin" credentials (a type of conformity credential). In this model, the guarantee of origin certificate for 10 Tons of cotton fabric (for example) can only be issued when the third party has evidence of the purchase of at least 10 Tons sustainable input materials. The third party will also mark the input batch as consumed (in a similar way to the anti-counterfeiting protocol) so that the valid sustainble input cannot be re-presented to a different third party.'),(0,a.kt)("h2",{id:"esg-rules"},"ESG Rules"),(0,a.kt)("p",null,'Yet another greenwashing attack vector is to deliberately apply incorrect rules to the determination of criteria such as emissions intensity. The verification question in this case is "yes, but how do I know you calculated it right?". The UNTP proposes an independent calculator service offered either by the standards body or regulator that defined the rules or by an accredited service provider. The Supply chain actor presents raw data to the calculator which returns with a signed credential confirming that the rules were correctly applied. This protocol has an additional benefit for legitimate actors if widely adopted by rules authorities - which is to significantly simplify the assessment of compliance against multiple different rules. By separating observed facts from the assessment of those facts against specific rules then it becomes relatively simple to test compliance against multiple standards and regulations.'),(0,a.kt)("h2",{id:"gs1-binding"},"GS1 Binding"),(0,a.kt)("p",null,"The UNTP is agnostic of any technology or any identifier system. Nevertheless, GS1 is by far the most widely used scheme for product identification, particularly at the downstream / consumer end of the value chain. Billions of unique product/shipment identifiers have been issued and over 5 billion product barcode scans happen around the world every day. UNTP does not require any actor to adopt GS1 standards and identifiers, but it certainly must facilitate existing GS1 users to adopt the UNTP. To this end, the UNTP defines a specific binding that shows how existing GS1 users can leverage their existing investments when implementing the UNTP."))}p.isMDXComponent=!0}}]);