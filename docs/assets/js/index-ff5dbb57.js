import{v,w as x}from"./_@vue_runtime-dom@3.3.4@@vue-333a3aa0.js";import{A as l,l as C,n as S,V as o,J as k,o as e,c as a,i as c,I as i,F as y,S as B,H as M,a as n}from"./_@vue_runtime-core@3.3.4@@vue-95679d18.js";import{j as I}from"./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./_@vue_shared@3.3.4@@vue-bf8f17aa.js";const L="/assets/png/ccflowRightNextAdmin-93a8068b.png",N=["src"],T=["innerHTML"],V={class:"sponsors-close"},A=l({name:"layoutSponsors"}),F=l({...A,setup(b){const s=I({sponsors:{list:[{url:L,text:"驰骋BPM系统包含表单引擎+流程引擎+权限控制,方便集成,配置灵活,功能强大,适合中国国情的工作流引擎.演示:http://demo.ccflow.org。右上角点star方可加群: 1060674395",link:"http://www.ccflow.org/"}],isShow:!1,index:0}}),p=C(()=>s.sponsors.list.length<=1?"never":"hover"),_=()=>{s.sponsors.isShow=!1},d=t=>{s.sponsors.index=t},u=()=>{window.open(s.sponsors.list[s.sponsors.index].link)},m=()=>{setTimeout(()=>{s.sponsors.isShow=!0},3e3)};return S(()=>{m()}),(t,j)=>{const h=o("el-carousel-item"),w=o("el-carousel"),f=o("SvgIcon");return k((e(),a("div",{class:"sponsors-container",title:"点击前往体验",onClick:u},[c(w,{height:"240px","indicator-position":"none",arrow:p.value,onChange:d},{default:i(()=>[(e(!0),a(y,null,B(s.sponsors.list,(r,g)=>(e(),M(h,{key:g},{default:i(()=>[n("img",{src:r.url,class:"sponsors-img"},null,8,N),n("div",{class:"sponsors-text",innerHTML:r.text},null,8,T)]),_:2},1024))),128))]),_:1},8,["arrow"]),n("div",V,[c(f,{name:"ele-Close",size:12,title:"关闭赞助商",onClick:x(_,["stop"])},null,8,["onClick"])])],512)),[[v,s.sponsors.isShow]])}}});const P=H(F,[["__scopeId","data-v-1476017a"]]);export{P as default};