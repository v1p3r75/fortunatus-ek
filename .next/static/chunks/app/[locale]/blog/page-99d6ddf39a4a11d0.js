(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{5243:function(e,t,r){Promise.resolve().then(r.bind(r,9638)),Promise.resolve().then(r.bind(r,3957)),Promise.resolve().then(r.bind(r,3743))},3743:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return filter_posts}});var n=r(3255),s=r(5595),i=r(6401),a=r(2707),o=r(508),l=r(2732),use_intersection=(e,t)=>{let[r,n]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(e.current&&"function"==typeof IntersectionObserver){let r=new IntersectionObserver(e=>{n(e[0])},t);return r.observe(e.current),()=>{n(null),r.disconnect()}}return()=>{}},[e.current,t.threshold,t.root,t.rootMargin]),r},post_card=e=>{let{slug:t,title:r,publishedAt:i,permalink:u}=e,c=(0,s.useRef)(null),d=use_intersection(c,{}),f=(0,a.useFormatter)(),m=f.dateTime(new Date(i),{month:"long",day:"numeric"});return(0,n.jsxs)("div",{ref:c,children:[(0,n.jsx)(o.Z,{className:"font-medium",href:u,children:r}),(0,n.jsxs)("div",{className:"text-sm text-foreground/60",children:[(0,n.jsx)("time",{dateTime:i,children:m}),"．",(null==d?void 0:d.isIntersecting)&&(0,n.jsx)(l.default,{slug:t})]})]})};let groupBy=(e,t)=>e.reduce((e,r)=>{let n=t(r),s=e[n]||[];return s.push(r),{...e,[n]:s}},{}),getGroupPostsWithYear=(e,t)=>{if(!e)return[];let r=t?e.filter(e=>{let{title:r,description:n}=e,s=r.toLowerCase().includes(t.toLowerCase()),i=n.toLowerCase().includes(t.toLowerCase());return s||i}):e,n=groupBy(r,e=>e.year);return Object.keys(n).map(e=>({year:+e,posts:n[+e]})).sort((e,t)=>Number(t.year)-Number(e.year))};var filter_posts=e=>{let{posts:t,placeholder:r="",remindText:a=""}=e,[o,l]=(0,s.useState)(""),u=getGroupPostsWithYear(t,o);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"relative mt-4 animate-fade-in animation-delay-2",children:[(0,n.jsx)(i.t2h,{className:"absolute left-2 top-2.5 size-5 text-foreground/60"}),(0,n.jsx)("input",{className:"w-full rounded-md border border-border bg-input/40 p-2 pl-8 text-sm outline-none ring-blue-500/20 duration-300 placeholder:text-foreground/80 focus:border-primary focus:ring-4 sm:w-[18.75rem]",placeholder:r,onChange:e=>l(e.target.value)})]}),(0,n.jsx)("div",{className:"mt-16 flex animate-fade-in flex-col gap-8 animation-delay-3",children:u.length>0?u.map(e=>{let{year:t,posts:r}=e;return(0,n.jsxs)("section",{children:[(0,n.jsxs)("h2",{className:"mb-4 flex items-end gap-3 text-lg font-medium tracking-tight",children:[t,(0,n.jsx)("div",{className:"mb-2 h-px w-full bg-border"})]}),(0,n.jsx)("div",{className:"flex flex-col gap-4",children:r.map(e=>(0,n.jsx)(post_card,{slug:e.slug,title:e.title,publishedAt:e.publishedAt,permalink:e.permalink},e.slug))})]},t)}):a})]})}},508:function(e,t,r){"use strict";var n=r(3255),s=r(3918),i=r(6401),a=r(7925),o=r(7588);let l=(0,s.j)("inline-flex items-center outline-none transition-colors",{variants:{variant:{block:"h-8 rounded-lg bg-foreground/10 p-4 text-sm hover:bg-foreground/[0.15]"}}});t.Z=e=>{let{href:t="",children:r,className:s,variant:u,anchorIcon:c=(0,n.jsx)(i.DNM,{role:"img",className:"ml-1 text-muted-foreground"}),showAnchorIcon:d,...f}=e,m=d&&c;if(t.startsWith("http")){var h,g;f.rel=null!==(h=f.rel)&&void 0!==h?h:"noopener noreferrer",f.target=null!==(g=f.target)&&void 0!==g?g:"_blank"}return t.startsWith("/")?(0,n.jsxs)(a.rU,{className:(0,o.cn)(l({variant:u,className:s})),href:t,...f,children:[r,m]}):(0,n.jsxs)("a",{className:(0,o.cn)(l({variant:u,className:s})),href:t,...f,children:[r,m]})}},9700:function(e,t,r){"use strict";var n=r(3255),s=r(7588);t.Z=e=>{let{className:t}=e;return(0,n.jsxs)("span",{className:(0,s.cn)("space-x-1",t),children:[(0,n.jsx)("span",{className:"inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full",children:"•"}),(0,n.jsx)("span",{className:"inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full",children:"•"}),(0,n.jsx)("span",{className:"inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full",children:"•"})]})}},8706:function(e,t,r){"use strict";var n=r(3255);t.Z=e=>{let{stat:t}=e;return(0,n.jsx)("span",{className:"-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tracking-tight",children:null==t?void 0:t.toLocaleString()})}},2732:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return view_counter}});var n=r(3255),s=r(2707),i=r(5595),a=r(9700),o=r(8706),l=r(8524);let u="/api/views",getPostViews=async e=>{let t=await fetch(u+"?slug=".concat(e));if(!t.ok)throw Error("An error occurred while fetching the data.");return t.json()},updatePostViews=async e=>{let t=await fetch(u+"?slug=".concat(e),{method:"POST"});if(!t.ok)throw Error("An error occurred while posting the data.");return t.json()};var use_post_views=(e,t)=>{let{data:r,error:n,mutate:s}=(0,l.ZP)([u,e],()=>getPostViews(e),{dedupingInterval:6e4,...t});return{views:r,isLoading:!n&&!r,isError:!!n,increment:()=>{s(updatePostViews(e))}}},view_counter=e=>{let{slug:t,shouldIncrement:r=!1}=e,l=(0,s.useTranslations)("common"),{views:u,isLoading:c,isError:d,increment:f}=use_post_views(t);return(0,i.useEffect)(()=>{r&&f()},[]),(0,n.jsx)("span",{children:l.rich("postViews",{count:()=>d||c?(0,n.jsx)(a.Z,{}):(0,n.jsx)(o.Z,{stat:u})})})}},7925:function(e,t,r){"use strict";r.d(t,{al:function(){return s},jD:function(){return l},k1:function(){return i},rU:function(){return a},tv:function(){return u}});var n=r(5193);let s="fr",i=[s,"en"],{Link:a,redirect:o,usePathname:l,useRouter:u}=(0,n.iV)({locales:i})},7588:function(e,t,r){"use strict";r.d(t,{cn:function(){return cn}});var n=r(5209),s=r(2701);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,n.W)(t))}}},function(e){e.O(0,[899,444,127,524,707,386,931,744],function(){return e(e.s=5243)}),_N_E=e.O()}]);