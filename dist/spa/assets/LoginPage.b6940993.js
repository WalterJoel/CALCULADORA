import{Q as h}from"./QCheckbox.77514155.js";import{d as v,r as c,d8 as b,d9 as w,e as x,f as U,l as o,i as t,j as d,a$ as V,u as n,m,p as u,da as y}from"./index.c83d97f5.js";import{Q}from"./QCard.1711850b.js";import{Q as k}from"./QForm.6f4f8a0b.js";import{_}from"./BaseInput.3eb15c13.js";import"./use-checkbox.47293f97.js";import"./focus-manager.5520c4d1.js";import"./QInput.bdf46d45.js";const C={class:"background-image"},I={class:"container"},P={class:"row"},B={class:"col-4"},E={class:"container-form"},F={class:"container-form-image"},$=["src"],j={class:"row"},G={class:"col-12"},A={class:"row justify-between items-center"},N={class:"col-6"},S=o("div",{class:"col6"},[o("a",{href:"",class:"text-orange-light"},"Olvid\xE9 mi contrase\xF1a")],-1),q={class:"row form_buttons"},L={class:"col-12 q-mb-md"},M={class:"col-12"},O={class:"footer"},R={class:"footer_container"},W=o("p",{class:"footer_container_text"},"Powered by",-1),z=["src"],so=v({__name:"LoginPage",setup(D){const r=c(!1),i="https://d3h74ejamvyom5.cloudfront.net/images",a=c({emailUser:"",passwordUser:""}),p=new b,f=w(),g=()=>{y(f,p).then(l=>{u().signIn(l.user.email,"no pass",!0)}).catch(l=>(console.log(l),l))};return(l,s)=>(x(),U("div",C,[o("div",I,[o("div",P,[o("div",B,[o("div",E,[t(k,{onSubmit:s[4]||(s[4]=V(e=>n(u)().signIn(a.value.emailUser,a.value.passwordUser,!1),["prevent"]))},{default:d(()=>[t(Q,{class:"container-form-content"},{default:d(()=>[o("div",F,[o("img",{src:n(i)+"/logo.png",class:"container-form-image-logo"},null,8,$)]),o("div",j,[o("div",G,[t(_,{modelValue:a.value.emailUser,"onUpdate:modelValue":s[0]||(s[0]=e=>a.value.emailUser=e),name:"email",placeholder:"Email",type:"email",class:"container-form-input"},null,8,["modelValue"]),t(_,{modelValue:a.value.passwordUser,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value.passwordUser=e),name:"contrase\xF1a",placeholder:"Password",type:"password",class:"container-form-input",rules:[e=>e&&e.length>0||"Este campo es obligatorio"]},null,8,["modelValue","rules"])])]),o("div",A,[o("div",N,[t(h,{class:"form_checkbox",modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=e=>r.value=e),label:"Recordar mis datos"},null,8,["modelValue"])]),S]),o("div",q,[o("div",L,[t(m,{class:"btn btn-orange full-width","text-color":"white",label:"Ingresar",type:"submit"})]),o("div",M,[t(m,{class:"btn btn-blue full-width",icon:"fa-brands fa-google","text-color":"white",label:"Ingresar con Google",onClick:s[3]||(s[3]=e=>g())})])])]),_:1})]),_:1}),o("div",O,[o("div",R,[W,o("img",{class:"footer_container_logo",src:n(i)+"/aynitech.svg"},null,8,z)])])])])])])]))}});export{so as default};