"use strict";(self.webpackChunknome_do_seu_projeto=self.webpackChunknome_do_seu_projeto||[]).push([[412],{8624:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(1504),r=n(4971),c=n(6508),l=n(4724);const s={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var i=n(8710);function o(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.c)(s.sidebar,"thin-scrollbar"),"aria-label":(0,i.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.c)(s.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>a.createElement("li",{key:e.permalink,className:s.sidebarItem},a.createElement(l.c,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}var m=n(828);const u=function(e){const{sidebar:t,toc:n,children:l,...s}=e,i=t&&t.items.length>0;return a.createElement(c.c,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(o,{sidebar:t})),a.createElement("main",{className:(0,r.c)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},l),n&&a.createElement("div",{className:"col col--2"},a.createElement(m.c,{toc:n})))))}},5552:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(1504),r=n(8624),c=n(3204),l=n(3100);const s=function(e){const{tags:t,sidebar:n}=e,s=(0,l.Ko)();return a.createElement(r.c,{title:s,wrapperClassName:l.Wu.wrapper.blogPages,pageClassName:l.Wu.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,s),a.createElement(c.c,{tags:Object.values(t)}))}},828:(e,t,n)=>{n.d(t,{m:()=>b,c:()=>f});var a=n(1504),r=n(4971),c=n(3100);function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function s(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:n[n.indexOf(a)-1]??null}return n[n.length-1]}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,c.yw)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const o=function(e){const t=(0,a.useRef)(void 0),n=i();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=s({anchorTopOffset:n.current}),l=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function b(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(b,{isChild:!0,toc:e.children}))))):null}const f=function(e){let{toc:t}=e;return o(d),a.createElement("div",{className:(0,r.c)(m,"thin-scrollbar")},a.createElement(b,{toc:t}))}},2515:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(1504),r=n(4971),c=n(4724);const l="tag_WK-t",s="tagRegular_LXbV",i="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:n,count:o}=e;return a.createElement(c.c,{href:t,className:(0,r.c)(l,{[s]:!o,[i]:o})},n,o&&a.createElement("span",null,o))}},3204:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(1504),r=n(2515),c=n(3100);const l={tag:"tag_7kA+"};function s(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:l.tag},a.createElement(r.c,e))))),a.createElement("hr",null))}const i=function(e){let{tags:t}=e;const n=(0,c.Mn)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(s,{key:e.letter,letterEntry:e}))))}}}]);