(()=>{var e={};e.id=970,e.ids=[970],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},72365:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>l.a,__next_app__:()=>v,originalPathname:()=>p,pages:()=>d,routeModule:()=>g,tree:()=>c});var s=i(94729),n=i(75781),a=i(54326),l=i.n(a),o=i(41731),r={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(r[e]=()=>o[e]);i.d(t,r);let c=["",{children:["[locale]",{children:["(home)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,83755)),"C:\\laragon\\www\\jinrup.me\\src\\app\\[locale]\\(home)\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,71233)),"C:\\laragon\\www\\jinrup.me\\src\\app\\[locale]\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.bind(i,37810)),"C:\\laragon\\www\\jinrup.me\\src\\app\\[locale]\\not-found.tsx"]}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,67133,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\laragon\\www\\jinrup.me\\src\\app\\[locale]\\(home)\\page.tsx"],p="/[locale]/(home)/page",v={require:i,loadChunk:()=>Promise.resolve()},g=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/[locale]/(home)/page",pathname:"/[locale]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},21086:(e,t,i)=>{Promise.resolve().then(i.bind(i,45828)),Promise.resolve().then(i.bind(i,1519)),Promise.resolve().then(i.t.bind(i,86207,23)),Promise.resolve().then(i.bind(i,2512)),Promise.resolve().then(i.bind(i,92869))},83755:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>_home_page});var s=i(77553),n=i(69831),a=i(20428),l=i(40368),o=i.n(l),r=i(92281),c=i(54300),d=i(23794),p=i(48980),v=i(76517);let g=[{name:"Github",href:p.J.links.github,icon:r.q7V,colorClass:"text-base-300/80"},{name:"Linkedin",href:p.J.links.linkedin,icon:r.tsq,colorClass:"text-blue-500"},{name:"Email",href:`mailto:mail@${p.J.email}`,icon:r.PyB,colorClass:"text-rose-500"},{name:"WhatsApp",href:p.J.links.whatsapp,icon:r.tdG,colorClass:"text-[#74bc72]"},{name:"YouTube",href:p.J.links.youtube,icon:r.oK$,colorClass:"text-rose-500"}],hero=()=>{let e=(0,a.Z)("homePage");return(0,s.jsxs)("section",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(o(),{className:"animate-fade-in rounded-full bg-foreground/20",src:"/avatar.png",alt:"avatar",width:80,height:80,priority:!0}),(0,s.jsxs)("div",{className:"animate-fade-in animation-delay-1",children:[s.jsx(c.Z,{as:"h1",className:"text-2xl font-bold tracking-tight",children:"Fortunatus KIDJE"}),s.jsx("div",{className:"w-fit mt-2 rounded-lg bg-gradient-to-r from-blue-400 to-teal-400 p-px",children:s.jsx("div",{className:"rounded-lg bg-neutral-950/80 text-sm",children:s.jsx(c.Z,{as:"span",className:"flex items-center gap-0.5 bg-gradient-to-r from-blue-400 to-teal-400 px-2 py-px text-sm font-medium",children:e("subTitle")})})})]})]}),s.jsx("p",{className:"animate-fade-in animation-delay-2",children:e("description")}),s.jsx("div",{className:"flex animate-fade-in flex-wrap items-center gap-4 animation-delay-3",children:g.map(({name:e,href:t,icon:i,colorClass:n})=>(0,s.jsxs)(d.Z,{className:(0,v.cn)("opacity-hover inline-flex items-center gap-1 font-medium",n),"aria-label":e,title:e,href:t,children:[s.jsx(i,{className:"size-5"}),s.jsx("span",{className:"hidden sm:inline",children:e})]},e))})]})};var h=i(60160),m=i(25865),x=i(27103);let projects=()=>{let e=(0,a.Z)("common"),t=(0,h.Z)(),i=x.c8.filter(e=>e.language===t).splice(0,4);return(0,s.jsxs)("section",{className:"animate-fade-in animation-delay-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(c.Z,{as:"h2",className:"text-xl font-bold tracking-tight",children:e("projects")}),(0,s.jsxs)(d.Z,{variant:"block",href:"/projects",children:[e("viewMore"),s.jsx(r.jfD,{})]})]}),s.jsx("div",{className:"mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",children:i.map(e=>s.jsx(m.ZP,{project:e},e.slug))})]})};i(6990);let skill_item=({title:e,icon:t})=>s.jsx("div",{children:s.jsx("img",{src:t,alt:e,title:e,className:"size-10 cursor-pointer text-white"})},e),j={frontend:[{title:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{title:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{title:"Bootstrap",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"},{title:"TailwindCSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},{title:"jQuery",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"},{title:"ReactJS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{title:"VueJS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"}],backend:[{title:"PHP",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"},{title:"Laravel",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"},{title:"Symfony",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"},{title:"NodeJS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"},{title:"Express",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},{title:"AdonisJS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg"},{title:"Django (Python)",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"}],mobile:[{title:"React Native",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg"},{title:"Expo",icon:""}],database:[{title:"SQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"},{title:"MySQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},{title:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"}],others:[{title:"Docker",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"},{title:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},{title:"Git/GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},{title:"AWS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"},{title:"Linux",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"}]},u=[{title:"Frontend",id:"frontend"},{title:"Backend",id:"backend"},{title:"Database",id:"database"},{title:"Mobile",id:"mobile"},{title:"Others",id:"others"}],skill_group_item=({title:e,id:t})=>(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(c.Z,{as:"h4",className:"tracking-tight",children:e}),s.jsx("div",{className:"flex flex-wrap gap-2",children:j[t].map(e=>s.jsx(skill_item,{title:e.title,icon:e.icon},e.title))})]}),skills=()=>{let e=(0,a.Z)("common");return(0,s.jsxs)("section",{className:"animate-fade-in animation-delay-5",children:[s.jsx(c.Z,{as:"h2",className:"text-xl font-bold tracking-tight",children:e("skills")}),s.jsx("div",{className:"mt-4 space-y-6",children:u.map(e=>s.jsx(skill_group_item,{title:e.title,id:e.id},e.id))})]})},_home_page=()=>(0,s.jsxs)("div",{className:"space-y-16",children:[s.jsx(hero,{}),s.jsx(skills,{}),s.jsx(n.default,{}),s.jsx(projects,{})]})}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[922,268,561,735,153,83,164,368,187,255,103,971,118,694,488,558],()=>__webpack_exec__(72365));module.exports=i})();