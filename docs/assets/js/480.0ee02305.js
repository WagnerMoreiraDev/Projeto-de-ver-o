(self.webpackChunknome_do_seu_projeto=self.webpackChunknome_do_seu_projeto||[]).push([[480],{5788:(e,t,n)=>{"use strict";n.d(t,{Iu:()=>p,yg:()=>m});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||c;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var i=2;i<c;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1620:(e,t,n)=>{"use strict";n.d(t,{a:()=>p,c:()=>u});var r=n(5072),o=n(1504),c=n(4971),l=n(8710),a=n(3100);const s="anchorWithStickyNavbar_y2LR",i="anchorWithHideOnScrollNavbar_3ly5",p=function(e){let{...t}=e;return o.createElement("header",null,o.createElement("h1",(0,r.c)({},t,{id:void 0}),t.children))},u=e=>{return"h1"===e?p:(t=e,function(e){let{id:n,...r}=e;const{navbar:{hideOnScroll:p}}=(0,a.yw)();return n?o.createElement(t,r,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.c)("anchor",`anchor__${t}`,{[i]:p,[s]:!p}),id:n}),r.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,l.G)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,r)});var t}},7135:(e,t,n)=>{"use strict";n.d(t,{c:()=>F});var r=n(5072),o=n(1504),c=n(2956),l=n(4724),a=n(4971);const s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i={Prism:n(6724).default,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var y=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,c=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(c.style=l.plain),void 0!==o&&(c.style=void 0!==c.style?u({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return c[n[0]];var l=r?{display:"inline-block"}:{},a=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[l].concat(a))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,c=e.token,l=u({},h(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?u({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var c=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,c=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],c=0,l=0,a=[],s=[a];l>-1;){for(;(c=r[l]++)<o[l];){var i=void 0,p=t[l],u=n[l][c];if("string"==typeof u?(p=l>0?p:["plain"],i=u):(p=m(p,u.type),u.alias&&(p=m(p,u.alias)),i=u.content),"string"==typeof i){var h=i.split(y),g=h.length;a.push({types:p,content:h[0]});for(var f=1;f<g;f++)d(a),s.push(a=[]),a.push({types:p,content:h[f]})}else l++,t.push(p),n.push(i),r.push(0),o.push(i.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return d(a),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const f=g;var b=n(6504),v=n.n(b);const k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var E=n(9464),j=n(3100);const O=()=>{const{prism:e}=(0,j.yw)(),{isDarkTheme:t}=(0,E.c)(),n=e.theme||k,r=e.darkTheme||n;return t?r:n};var T=n(8710);const x="codeBlockContainer_J+bg",w="codeBlockContent_csEI",N="codeBlockTitle_oQzk",P="codeBlock_rtdJ",C="copyButton_M3SB",S="codeBlockLines_1zSZ",_=/{([\d,-]+)}/,B=["js","jsBlock","jsx","python","html"],D={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},$=["highlight-next-line","highlight-start","highlight-end"],L=function(e){void 0===e&&(e=B);const t=e.map((e=>{const{start:t,end:n}=D[e];return`(?:${t}\\s*(${$.join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)};function A(e){let{children:t,className:n,metastring:c,title:l}=e;const{prism:s}=(0,j.yw)(),[p,u]=(0,o.useState)(!1),[y,d]=(0,o.useState)(!1);(0,o.useEffect)((()=>{d(!0)}),[]);const m=(0,j.QH)(c)||l,h=(0,o.useRef)(null);let g=[];const b=O(),k=Array.isArray(t)?t.join(""):t;if(c&&_.test(c)){const e=c.match(_)[1];g=v()(e).filter((e=>e>0))}let E=n?.replace(/language-/,"");!E&&s.defaultLanguage&&(E=s.defaultLanguage);let B=k.replace(/\n$/,"");if(0===g.length&&void 0!==E){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"]);case"jsx":case"tsx":return L(["js","jsBlock","jsx"]);case"html":return L(["js","jsBlock","html"]);case"python":case"py":return L(["python"]);default:return L()}})(E),n=k.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const c=o+1,l=n[o].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${c},`;break;case"highlight-start":r=c;break;case"highlight-end":e+=`${r}-${c-1},`}n.splice(o,1)}else o+=1}g=v()(e),B=n.join("\n")}const D=()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),c&&(o.removeAllRanges(),o.addRange(c)),r&&r.focus()}(B),u(!0),setTimeout((()=>u(!1)),2e3)};return o.createElement(f,(0,r.c)({},i,{key:String(y),theme:b,code:B,language:E}),(e=>{let{className:t,style:n,tokens:c,getLineProps:l,getTokenProps:s}=e;return o.createElement("div",{className:x},m&&o.createElement("div",{style:n,className:N},m),o.createElement("div",{className:(0,a.c)(w,E)},o.createElement("pre",{tabIndex:0,className:(0,a.c)(t,P,"thin-scrollbar"),style:n},o.createElement("code",{className:S},c.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=l({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.c)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,r.c)({key:t},s({token:e,key:t}))))))})))),o.createElement("button",{ref:h,type:"button","aria-label":(0,T.G)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.c)(C,"clean-btn"),onClick:D},p?o.createElement(T.c,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(T.c,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var I=n(1620);const z="details_h+cY";function R(e){let{...t}=e;return o.createElement(j.Sk,(0,r.c)({},t,{className:(0,a.c)("alert alert--info",z,t.className)}))}const F={head:e=>{const t=o.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e)));return o.createElement(c.c,e,t)},code:e=>{const{children:t}=e;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(A,e):o.createElement("code",e)},a:e=>o.createElement(l.c,e),pre:e=>{const{children:t}=e;return(0,o.isValidElement)(t)&&(0,o.isValidElement)(t?.props?.children)?t.props.children:o.createElement(A,(0,o.isValidElement)(t)?t?.props:{...e})},details:e=>{const t=o.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),c=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(R,(0,r.c)({},e,{summary:n}),c)},h1:(0,I.c)("h1"),h2:(0,I.c)("h2"),h3:(0,I.c)("h3"),h4:(0,I.c)("h4"),h5:(0,I.c)("h5"),h6:(0,I.c)("h6")}},6504:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,c]=t;if(r&&c){r=parseInt(r),c=parseInt(c);const e=r<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=r;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);