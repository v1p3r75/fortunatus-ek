(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{8267:function(e,t,r){Promise.resolve().then(r.bind(r,9638)),Promise.resolve().then(r.bind(r,3957)),Promise.resolve().then(r.t.bind(r,105,23)),Promise.resolve().then(r.t.bind(r,545,23)),Promise.resolve().then(r.bind(r,5094)),Promise.resolve().then(r.bind(r,1330)),Promise.resolve().then(r.t.bind(r,4808,23))},5094:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return header}});var n=r(3255),s=r(5595),o=r(6401),a=r(8524),l=r(2707),i=r(1991),c=r(7588);let d=i.fC,u=i.xz,m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(i.Uv,{children:(0,n.jsx)(i.VY,{ref:t,className:(0,c.cn)("min-w-28 overflow-hidden rounded-lg border bg-popover shadow-md p-1 text-popover-foreground","data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",r),sideOffset:20,...s})})}),f=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(i.ck,{ref:t,className:(0,c.cn)("relative flex cursor-pointer select-none items-center text-sm outline-none transition-colors hover:bg-accent/60",s&&"pl-8",r),...o})}),h=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(i.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",r),...o})}),x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(i.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",r),...s})});m.displayName=i.VY.displayName,f.displayName=i.ck.displayName,h.displayName=i.__.displayName,x.displayName=i.Z0.displayName;var p=r(7925);let LanguageDropdown=()=>{let e=(0,l.useTranslations)("common");return(0,n.jsxs)(d,{children:[(0,n.jsxs)(u,{className:"hidden rounded p-2 text-foreground/70 shadow-md outline-none transition-colors hover:bg-accent/60 hover:text-foreground sm:block",children:[(0,n.jsx)("span",{className:"sr-only",children:e("chooseLanguage")}),(0,n.jsx)(o.RSg,{className:"size-4"})]}),(0,n.jsx)(m,{align:"end",children:p.k1.map(e=>(0,n.jsx)(LanguageMenuItem,{locale:e},e))})]})},LanguageMenuItem=e=>{let{locale:t}=e,{replace:r}=(0,p.tv)(),s=(0,p.jD)();return(0,n.jsx)(f,{className:"rounded px-2 py-1.5",onClick:()=>r(s,{locale:t}),children:t===p.al?"Fran\xe7ais":"English"})};var logo=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",fill:"currentColor",...e,children:[(0,n.jsx)("path",{d:"M0 2C0 0.895432 1.07889 0 2.40977 0H45.5873C48.2297 0 48.9457 3.02004 46.5002 3.85091L26.6343 10.6006L3.25944 17.9103C1.68347 18.4031 0 17.4365 0 16.0387V2Z"}),(0,n.jsx)("path",{d:"M15 20.4415C15 19.5807 15.5509 18.8164 16.3675 18.5442L30.3675 13.8775C31.6626 13.4458 33 14.4097 33 15.7749V46C33 47.1046 32.1046 48 31 48H17C15.8954 48 15 47.1046 15 46V20.4415Z"})]}),g=r(6989),j=r.n(g);let v=[{title:"home",href:"/",icon:(0,n.jsx)(o.JBp,{})},{title:"projects",href:"/projects",icon:(0,n.jsx)(o.kr8,{})},{title:"blog",href:"/blog",icon:(0,n.jsx)(o.jpy,{})},{title:"cv",href:"/files/fortunatus-kidje-resume.pdf",icon:(0,n.jsx)(o.HmO,{})}];var mobile_nav=()=>{let e=(0,l.useTranslations)("common"),[t,r]=(0,s.useState)(!1),a=t?o.tgW:o._yl;return(0,n.jsxs)(d,{onOpenChange:e=>r(e),children:[(0,n.jsx)(u,{className:"group block rounded-full bg-neutral-800 p-2 outline-none sm:hidden",children:(0,n.jsx)(a,{className:"size-5 text-foreground/70 transition-colors group-hover:text-foreground"})}),(0,n.jsxs)(m,{className:"min-w-[10rem] space-y-3",align:"end",children:[v.map(t=>(0,n.jsx)(f,{asChild:!0,children:(0,n.jsxs)(j(),{className:"w-full gap-2 rounded px-2 py-1.5",href:t.href,children:[t.icon,e(t.title)]})},t.title)),(0,n.jsx)(x,{}),(0,n.jsx)(h,{className:"font-normal text-foreground/60",children:"Translations"}),p.k1.map(e=>(0,n.jsx)(LanguageMenuItem,{locale:e},e))]})]})},b=r(508),nav=()=>{let e=(0,l.useTranslations)("common"),t=(0,p.jD)();return(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"hidden gap-2 sm:flex",children:v.map(r=>{let s=r.href.toString()===t;return(0,n.jsx)("li",{children:(0,n.jsx)(b.Z,{className:(0,c.cn)("relative flex items-center rounded px-2 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-accent/60 hover:text-foreground",{"text-foreground":s}),href:r.href,children:(0,n.jsx)("span",{children:e(r.title)})})},r.title)})})})},N=r(1507),w=r(1856),y=r(3222),number_ticker=e=>{let{value:t,direction:r="up",delay:o=0,className:a}=e,l=(0,s.useRef)(null),i=(0,N.c)("down"===r?t:0),d=(0,w.q)(i,{damping:60,stiffness:100}),u=(0,y.Y)(l,{once:!0,margin:"0px"});return(0,s.useEffect)(()=>{u&&setTimeout(()=>{i.set("down"===r?0:t)},1e3*o)},[i,u,o,t,r]),(0,s.useEffect)(()=>d.on("change",e=>{l.current&&(l.current.textContent=Intl.NumberFormat("fr").format(e.toFixed(0)))}),[d]),(0,n.jsx)("span",{ref:l,className:(0,c.cn)("inline-block tabular-nums",a)})},k=r(4377),header=()=>{let[e,t]=(0,s.useState)(!0),[r,l]=(0,s.useState)(0),{data:i}=(0,a.ZP)("/api/github?repoName=".concat("fortunatus-ek"),k._);return(0,s.useEffect)(()=>{let handleScroll=()=>{window.scrollY>180&&t(!1),window.scrollY<r&&t(!0),l(window.scrollY)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[r]),(0,n.jsx)("header",{className:(0,c.cn)("sticky top-6 z-10 flex justify-center duration-500 ease-in-out transition-transform",{"-translate-y-20":!e}),children:(0,n.jsxs)("div",{className:"flex h-14 w-3/4 items-center justify-between gap-2 rounded-full border border-border bg-neutral-800/50 px-2 backdrop-blur sm:w-fit",children:[(0,n.jsx)(b.Z,{className:"pl-3 pr-1 block md:hidden",href:"/","aria-label":"Home",children:(0,n.jsx)(logo,{className:"size-5"})}),(0,n.jsx)(nav,{}),(0,n.jsx)(LanguageDropdown,{}),(0,n.jsxs)(b.Z,{className:"group relative hidden min-w-24 justify-between gap-2.5 rounded-full border border-border bg-neutral-800 p-2 pr-3 hover:bg-neutral-800/0 sm:inline-flex",href:"https://github.com/v1p3r75/fortunatus-ek",children:[(0,n.jsx)("div",{className:"absolute -bottom-px left-1/2 h-px w-14 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100"}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(o.q7V,{className:"size-6 text-foreground/70 group-hover:text-foreground"}),(0,n.jsx)("span",{className:"text-sm text-foreground/70 group-hover:text-foreground",children:"Github"})]}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(o.Kz,{className:"transition-colors group-hover:text-yellow-400"}),(0,n.jsx)(number_ticker,{className:"text-sm text-foreground/70 group-hover:text-foreground",value:i?i.stars:0})]})]}),(0,n.jsx)(mobile_nav,{})]})})}},1330:function(e,t,r){"use strict";r.r(t);var n=r(3255),s=r(1072),o=r(7987),a=r(5595),l=r(6401);t.default=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let handleScroll=()=>{let{scrollTop:e}=document.documentElement;t(e>30)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,n.jsx)(s.M,{children:e&&(0,n.jsx)(o.E.button,{className:"fixed bottom-20 right-8 flex items-center rounded-lg border border-border bg-popover p-2",type:"button","aria-label":"back to top",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},onClick:()=>{window.scroll({top:0,left:0,behavior:"smooth"})},children:(0,n.jsx)(l.gcy,{className:"size-6"})})})}},508:function(e,t,r){"use strict";var n=r(3255),s=r(3918),o=r(6401),a=r(7925),l=r(7588);let i=(0,s.j)("inline-flex items-center outline-none transition-colors",{variants:{variant:{block:"h-8 rounded-lg bg-foreground/10 p-4 text-sm hover:bg-foreground/[0.15]"}}});t.Z=e=>{let{href:t="",children:r,className:s,variant:c,anchorIcon:d=(0,n.jsx)(o.DNM,{role:"img",className:"ml-1 text-muted-foreground"}),showAnchorIcon:u,...m}=e,f=u&&d;if(t.startsWith("http")){var h,x;m.rel=null!==(h=m.rel)&&void 0!==h?h:"noopener noreferrer",m.target=null!==(x=m.target)&&void 0!==x?x:"_blank"}return t.startsWith("/")?(0,n.jsxs)(a.rU,{className:(0,l.cn)(i({variant:c,className:s})),href:t,...m,children:[r,f]}):(0,n.jsxs)("a",{className:(0,l.cn)(i({variant:c,className:s})),href:t,...m,children:[r,f]})}},4377:function(e,t,r){"use strict";r.d(t,{_:function(){return fetcher}});let fetcher=async(e,t)=>{let r=await fetch(e,t);return r.json()}},7925:function(e,t,r){"use strict";r.d(t,{al:function(){return s},jD:function(){return i},k1:function(){return o},rU:function(){return a},tv:function(){return c}});var n=r(5193);let s="fr",o=[s,"en"],{Link:a,redirect:l,usePathname:i,useRouter:c}=(0,n.iV)({locales:o})},7588:function(e,t,r){"use strict";r.d(t,{cn:function(){return cn}});var n=r(5209),s=r(2701);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,n.W)(t))}},4808:function(){}},function(e){e.O(0,[899,966,444,127,524,521,707,327,386,931,744],function(){return e(e.s=8267)}),_N_E=e.O()}]);