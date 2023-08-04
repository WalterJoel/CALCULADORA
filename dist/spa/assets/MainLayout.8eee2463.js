import{c as _,a as W,r as m,w as E,o as G,h as g,T as J,b as K,Q as Y,d as H,e as N,f as L,g as Z,F as ee,i as o,j as l,k as te,l as k,u as y,m as q,n as w,t as V,p as ae,q as oe,s as ne,v as ie,x as R,y as le}from"./index.216b14ae.js";import{Q as P}from"./QBadge.4cf81939.js";import{Q as se,a as re,b as ue,_ as ce,c as $,d as de}from"./DrawerLayout.3bce2417.js";import{Q,a as me,b as F}from"./QDialog.003a5797.js";import"./QResizeObserver.d98b8417.js";import"./focus-manager.c335c2cc.js";import"./touch.3df10340.js";import"./QCardActions.c8a7bc3b.js";import"./QCard.72f716cf.js";import"./BaseLabel.3330203d.js";const fe={ratio:[String,Number]};function ge(t,i){return _(()=>{const n=Number(t.ratio||(i!==void 0?i.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const he=16/9;var j=W({name:"QImg",props:{...fe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:he},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(t,{slots:i,emit:n}){const e=m(t.initialRatio),r=ge(t,e);let s=null,v=!1;const u=[m(null),m(M())],d=m(0),c=m(!1),f=m(!1),z=_(()=>`q-img q-img--${t.noNativeMenu===!0?"no-":""}menu`),B=_(()=>({width:t.width,height:t.height})),C=_(()=>`q-img__image ${t.imgClass!==void 0?t.imgClass+" ":""}q-img__image--with${t.noTransition===!0?"out":""}-transition`),b=_(()=>({...t.imgStyle,objectFit:t.fit,objectPosition:t.position}));E(()=>S(),h);function S(){return t.src||t.srcset||t.sizes?{src:t.src,srcset:t.srcset,sizes:t.sizes}:null}function M(){return t.placeholderSrc!==void 0?{src:t.placeholderSrc}:null}function h(a){s!==null&&(clearTimeout(s),s=null),f.value=!1,a===null?(c.value=!1,u[d.value^1].value=M()):c.value=!0,u[d.value].value=a}function D({target:a}){v!==!0&&(s!==null&&(clearTimeout(s),s=null),e.value=a.naturalHeight===0?.5:a.naturalWidth/a.naturalHeight,p(a,1))}function p(a,x){v===!0||x===1e3||(a.complete===!0?O(a):s=setTimeout(()=>{s=null,p(a,x+1)},50))}function O(a){v!==!0&&(d.value=d.value^1,u[d.value].value=null,c.value=!1,f.value=!1,n("load",a.currentSrc||a.src))}function A(a){s!==null&&(clearTimeout(s),s=null),c.value=!1,f.value=!0,u[d.value].value=null,u[d.value^1].value=M(),n("error",a)}function I(a){const x=u[a].value,T={key:"img_"+a,class:C.value,style:b.value,crossorigin:t.crossorigin,decoding:t.decoding,referrerpolicy:t.referrerpolicy,height:t.height,width:t.width,loading:t.loading,fetchpriority:t.fetchpriority,"aria-hidden":"true",draggable:t.draggable,...x};return d.value===a?(T.class+=" q-img__image--waiting",Object.assign(T,{onLoad:D,onError:A})):T.class+=" q-img__image--loaded",g("div",{class:"q-img__container absolute-full",key:"img"+a},g("img",T))}function X(){return c.value!==!0?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(i[f.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():t.noSpinner===!0?void 0:[g(Y,{color:t.spinnerColor,size:t.spinnerSize})])}return h(S()),G(()=>{v=!0,s!==null&&(clearTimeout(s),s=null)}),()=>{const a=[];return r.value!==null&&a.push(g("div",{key:"filler",style:r.value})),f.value!==!0&&(u[0].value!==null&&a.push(I(0)),u[1].value!==null&&a.push(I(1))),a.push(g(J,{name:"q-transition--fade"},X)),g("div",{class:z.value,style:B.value,role:"img","aria-label":t.alt},a)}}});const U=t=>{const i=new Date(t),n=Math.floor((new Date().getTime()-i.getTime())/1e3);let e=n/31536e3;return e>1?Math.floor(e)===1?Math.floor(e)+" a\xF1o":Math.floor(e)+" a\xF1os":(e=n/2592e3,e>1?Math.floor(e)===1?Math.floor(e)+" mes":Math.floor(e)+" meses":(e=n/86400,e>1?Math.floor(e)===1?Math.floor(e)+" dia":Math.floor(e)+" dias":(e=n/3600,e>1?Math.floor(e)===1?Math.floor(e)+" hora":Math.floor(e)+" horas":(e=n/60,e>1?Math.floor(e)===1?Math.floor(e)+" minuto":Math.floor(e)+" minutos":Math.floor(e)===1?Math.floor(e)+" segundo":Math.floor(e)+" segundos"))))},ve=t=>{const i=t.split("/"),n=parseInt(i[0]),e=parseInt(i[1]),r=parseInt(i[2]),s=new Date(n,e-1,r),u=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][s.getMonth()];return`${r} de ${u} del ${n}`},pe=["src"],_e=H({__name:"NotificationMessage",props:{notifications:{}},setup(t){const i=n=>{let e="primary";switch(n.split(" ")[1]){case"dia":case"dias":e="warning";break;case"mes":case"meses":e="secondary";break;case"a\xF1o":case"a\xF1os":e="secondary";break;default:e="green";break}return e};return(n,e)=>(N(!0),L(ee,null,Z(n.notifications,r=>(N(),L("div",{class:"bg-gray notification-message",key:r.id},[o(me,{class:"q-pa-none"},{default:l(()=>[o(Q,{side:""},{default:l(()=>[o(te,{round:"",size:"32px"},{default:l(()=>[k("img",{src:r.username},null,8,pe)]),_:2},1024)]),_:2},1024),o(Q,{side:""},{default:l(()=>[o(P,{rounded:"",color:i(y(U)(r.date)),label:"Hace "+y(U)(r.date),class:"uppercase"},null,8,["color","label"])]),_:2},1024),o(q,{class:"btn-close",dense:"",flat:"",icon:"fa-solid fa-close fa-sm"})]),_:2},1024),o(Q,null,{default:l(()=>[o(F,{class:"notification-title"},{default:l(()=>[w(V(r.type),1)]),_:2},1024),o(F,{class:"notification-subtitle"},{default:l(()=>[w(V(r.message),1)]),_:2},1024),o(F,{class:"notification-date"},{default:l(()=>[w(V(y(ve)(r.date)),1)]),_:2},1024)]),_:2},1024)]))),128))}}),ye={class:"bg-white notification-container"},be={class:"text-right q-py-md"},Se={class:"flex q-mb-sm"},ze=H({__name:"MainLayout",setup(t){const i=ae().user,n=m(!1),e="https://d3h74ejamvyom5.cloudfront.net/images",r=()=>{n.value=!n.value},u={title:"Capital Calls",items:[{name:"Vigentes",path:"/vigentes",icon:"fa-solid fa-calendar-days"},{name:"Completados",path:"/completados",icon:'fa-solid fa-square-check "'},{name:"Eliminados",path:"/eliminados",icon:"fa-solid fa-trash-alt"}],footer:[{name:"Configuraci\xF3n",path:"/usuarios",icon:"fa-solid fa-gear "},{name:"Cerrar Sesi\xF3n",path:"/logout",icon:"fa-solid fa-door-open "}]},d={name:i.name,email:i.email,image:i.photoUrl},c=m(!1),f=()=>{c.value=!c.value},z=m([{id:"1",username:"https://cdn.quasar.dev/img/avatar.png",type:"Termino de contrato",message:"Termino de contrato de Ximena Ponce de Leon",date:"2023/06/20 14:24:00"},{id:"2",username:"https://cdn.quasar.dev/img/avatar.png",type:"Cotizaci\xF3n pendiente",message:'La cotizaci\xF3n "Venta de laptop Lenovo" C.V 0001 est\xE1 pendiente de completar',date:"2023/06/19 14:00:00"},{id:"3",username:"https://cdn.quasar.dev/img/avatar.png",type:"Tarea vencida",message:'Tarea vencidad "Bocetos T&T Light" venci\xF3 el 10/03/2023',date:"2023/05/20 14:00:00"},{id:"4",username:"https://cdn.quasar.dev/img/avatar.png",type:"Termino de contrato",message:"Termino de contrato de Ximena Ponce de Leon",date:"2022/06/20 14:00:00"}]),B=oe(),C=_(()=>B.path),b=m(!1),S=()=>{switch(C.value){case"/completados":case"/vigentes":case"/eliminados":b.value=!0;break;default:b.value=!1;break}};return E(C,()=>{S()}),ne(()=>S()),(M,h)=>{const D=ie("router-view");return N(),R(se,{view:"lHh lpR lFr"},{default:l(()=>[o(ue,{class:"bg-gray"},{default:l(()=>[o(re,null,{default:l(()=>[o(q,{dense:"",flat:"",round:"",color:"primary",icon:"menu",onClick:r}),!c.value&&b.value?(N(),R(q,{key:0,flat:"",color:"primary",onClick:f,class:"notification"},{default:l(()=>[o(P,{floating:"",color:"secondary",rounded:""},{default:l(()=>[w("2")]),_:1}),o(j,{src:y(e)+"/notification.svg","spinner-color":"white",style:{height:"25px","max-width":"25px"}},null,8,["src"])]),_:1})):le("",!0)]),_:1})]),_:1}),o($,{"show-if-above":"",modelValue:n.value,"onUpdate:modelValue":h[0]||(h[0]=p=>n.value=p),side:"left",width:235,breakpoint:500,class:"sidebar bg-blue"},{default:l(()=>[o(ce,{logo:y(e)+"/logo_white.png",menu:u,profile:d},null,8,["logo"])]),_:1},8,["modelValue"]),o($,{class:"bg-gray","show-if-above":!1,modelValue:c.value,"onUpdate:modelValue":h[1]||(h[1]=p=>c.value=p),side:"right",width:292},{default:l(()=>[k("div",ye,[k("div",be,[o(q,{dense:"",flat:"",round:"",color:"primary",icon:"fa-solid fa-down-left-and-up-right-to-center",size:"sm",onClick:f})]),k("div",Se,[o(Q,null,{default:l(()=>[o(F,{class:"text-left base-subtitle"},{default:l(()=>[w("Notificaciones ")]),_:1})]),_:1}),o(j,{src:y(e)+"/notification.png","spinner-color":"white",style:{height:"50px","max-width":"50px"}},null,8,["src"])]),o(_e,{notifications:z.value||[]},null,8,["notifications"])])]),_:1},8,["modelValue"]),o(de,{class:"bg-gray"},{default:l(()=>[o(D)]),_:1})]),_:1})}}});export{ze as default};
