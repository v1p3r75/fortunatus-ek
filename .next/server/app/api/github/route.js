"use strict";(()=>{var e={};e.id=845,e.ids=[845],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},72254:e=>{e.exports=require("node:buffer")},6005:e=>{e.exports=require("node:crypto")},22037:e=>{e.exports=require("os")},76907:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>h,originalPathname:()=>c,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>g});var a={};r.r(a),r.d(a,{GET:()=>GET});var o=r(48075),s=r(75781),u=r(82221),i=r(81398),n=r(48980);let GET=async e=>{let t=e.nextUrl.searchParams.get("repoName"),r=new i.vd({auth:process.env.GITHUB_AUTH_TOKEN});if(t){let{data:e}=await r.request("GET /repos/{owner}/{repo}",{owner:n.J.githubUsername,repo:t});return u.Z.json({stars:e?.stargazers_count,forksCount:e?.forks_count})}let{data:a}=await r.request("GET /users/{username}/repos",{username:n.J.githubUsername}),{data:o}=await r.request("GET /users/{username}/followers",{username:n.J.githubUsername}),s=a.filter(e=>!e.fork).reduce((e,t)=>e+(t.stargazers_count??0),0);return u.Z.json({followers:o.length,stars:s})},p=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/github/route",pathname:"/api/github",filename:"route",bundlePath:"app/api/github/route"},resolvedPagePath:"C:\\laragon\\www\\jinrup.me\\src\\app\\api\\github\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:m,headerHooks:h,staticGenerationBailout:g}=p,c="/api/github/route"},48980:(e,t,r)=>{r.d(t,{J:()=>o});let a="https://fortunatus-ek.vercel.app",o={name:"Elfried Fortunatus KIDJE - D\xe9veloppeur web et mobile",author:"Fortunatus KIDJE",email:"elfriedv16@gmail.com",siteUrl:a,githubUsername:"v1p3r75",links:{github:"https://github.com/v1p3r75",linkedin:"https://www.linkedin.com/in/fortunatus-ek",whatsapp:"https://wa.me/0022996457545",youtube:"https://youtube.com/@devlancing"},openGraph:{type:"website",title:"Elfried Fortunatus KIDJE",siteName:"D\xe9veloppeur web et mobile",url:a,images:[{url:"/opengraph-image.jpg",width:1200,height:630,alt:"Elfried Fortunatus KIDJE"}]}}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[922,323,398],()=>__webpack_exec__(76907));module.exports=r})();