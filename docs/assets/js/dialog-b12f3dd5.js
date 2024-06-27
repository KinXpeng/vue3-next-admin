import{H as c,e as C,_ as N,ah as s,o as v,c as S,V as l,P as o,a as T,T as f,U as k}from"./@vue-021a4eb1.js";const z={class:"system-user-dialog-container"},B={class:"dialog-footer"},R=c({name:"systemUserDialog"}),P=c({...R,emits:["refresh"],setup(E,{expose:g,emit:n}){const b=C(),e=N({ruleForm:{userName:"",idCardNo:"",sex:"",age:"",phone:"",email:"",status:!0,describe:"",createTime:""},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),x=(u,a)=>{e.dialog.type=u,u==="edit"?(e.ruleForm=a,e.dialog.title="修改用户",e.dialog.submitTxt="修 改"):(e.dialog.title="新增用户",e.dialog.submitTxt="新 增",e.ruleForm={}),e.dialog.isShowDialog=!0},i=()=>{e.dialog.isShowDialog=!1},V=()=>{i()},F=()=>{i(),e.dialog.type==="add"?n("refresh","add",e.ruleForm):n("refresh","edit",e.ruleForm)};return g({openDialog:x}),(u,a)=>{const r=s("el-input"),d=s("el-form-item"),m=s("el-col"),p=s("el-option"),w=s("el-select"),D=s("el-switch"),U=s("el-row"),h=s("el-form"),_=s("el-button"),y=s("el-dialog");return v(),S("div",z,[l(y,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":a[8]||(a[8]=t=>e.dialog.isShowDialog=t),width:"769px"},{footer:o(()=>[T("span",B,[l(_,{onClick:V,size:"default"},{default:o(()=>[f("取 消")]),_:1}),l(_,{type:"primary",onClick:F,size:"default"},{default:o(()=>[f(k(e.dialog.submitTxt),1)]),_:1})])]),default:o(()=>[l(h,{ref_key:"userDialogFormRef",ref:b,model:e.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[l(U,{gutter:35},{default:o(()=>[l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"用户名"},{default:o(()=>[l(r,{modelValue:e.ruleForm.userName,"onUpdate:modelValue":a[0]||(a[0]=t=>e.ruleForm.userName=t),placeholder:"请输入用户名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"身份证号"},{default:o(()=>[l(r,{modelValue:e.ruleForm.idCardNo,"onUpdate:modelValue":a[1]||(a[1]=t=>e.ruleForm.idCardNo=t),placeholder:"请输入身份证号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"性别"},{default:o(()=>[l(w,{modelValue:e.ruleForm.sex,"onUpdate:modelValue":a[2]||(a[2]=t=>e.ruleForm.sex=t),placeholder:"请选择性别",clearable:"",class:"w100"},{default:o(()=>[l(p,{label:"男",value:"1"}),l(p,{label:"女",value:"0"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"年龄"},{default:o(()=>[l(r,{modelValue:e.ruleForm.age,"onUpdate:modelValue":a[3]||(a[3]=t=>e.ruleForm.age=t),placeholder:"请输入年龄",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"手机号"},{default:o(()=>[l(r,{modelValue:e.ruleForm.phone,"onUpdate:modelValue":a[4]||(a[4]=t=>e.ruleForm.phone=t),placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"邮箱"},{default:o(()=>[l(r,{modelValue:e.ruleForm.email,"onUpdate:modelValue":a[5]||(a[5]=t=>e.ruleForm.email=t),placeholder:"请输入邮箱",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"用户状态"},{default:o(()=>[l(D,{modelValue:e.ruleForm.status,"onUpdate:modelValue":a[6]||(a[6]=t=>e.ruleForm.status=t),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"用户描述"},{default:o(()=>[l(r,{modelValue:e.ruleForm.describe,"onUpdate:modelValue":a[7]||(a[7]=t=>e.ruleForm.describe=t),type:"textarea",placeholder:"请输入用户描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{P as default};