import{A as l,V as m,o as e,c as o,a as t,L as i,F as u,S as v,H as b,a1 as h,a2 as x}from"./_@vue_runtime-core@3.3.4@@vue-95679d18.js";import{j as y}from"./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js";import{M as c}from"./_@vue_shared@3.3.4@@vue-bf8f17aa.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const w=n=>(h("data-v-f76b0260"),n=n(),x(),n),k={class:"layout-navbars-breadcrumb-user-news"},g={class:"head-box"},C=w(()=>t("div",{class:"head-box-title"},"通知",-1)),L={class:"content-box"},B={class:"content-box-msg"},I={class:"content-box-time"},N=l({name:"layoutBreadcrumbUserNews"}),S=l({...N,setup(n){const s=y({newsList:[{label:"关于版本发布的通知",value:"vue-next-admin，基于 vue3 + CompositionAPI + typescript + vite + element plus，正式发布时间：2021年02月28日！",time:"2020-12-08"},{label:"关于学习交流的通知",value:"QQ群号码 665452019，欢迎小伙伴入群学习交流探讨！",time:"2020-12-08"}]}),r=()=>{s.newsList=[]},d=()=>{window.open("https://gitee.com/lyt-top/vue-next-admin")};return(A,V)=>{const _=m("el-empty");return e(),o("div",k,[t("div",g,[C,s.newsList.length>0?(e(),o("div",{key:0,class:"head-box-btn",onClick:r},"全部已读")):i("",!0)]),t("div",L,[s.newsList.length>0?(e(!0),o(u,{key:0},v(s.newsList,(a,p)=>(e(),o("div",{class:"content-box-item",key:p},[t("div",null,c(a.label),1),t("div",B,c(a.value),1),t("div",I,c(a.time),1)]))),128)):(e(),b(_,{key:1,description:"暂无通知"}))]),s.newsList.length>0?(e(),o("div",{key:0,class:"foot-box",onClick:d},"前往通知中心")):i("",!0)])}}});const D=f(S,[["__scopeId","data-v-f76b0260"]]);export{D as default};