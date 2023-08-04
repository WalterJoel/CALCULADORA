import{d as D,r as c,aE as Q,c as M,aF as V,e as o,f as r,i as l,j as d,l as z,u as E,F as p,g as P,x as f,m as F,y as N,t as $}from"./index.c83d97f5.js";import{Q as j}from"./QBadge.3288ba57.js";import{Q as q,a as O,b as R,c as T}from"./QPagination.3f3bed4c.js";import{_ as I,a as L}from"./modalDelete.09eb2ef8.js";import{d as S}from"./capitalCall.9df4dc6a.js";const U={key:0,class:"flex justify-between"},A={key:1},G={key:2},H={class:"row justify-end q-mt-sm"},Z=D({__name:"CapitalCallList",props:{rows:{},columns:{},filter:{},canRemove:{type:Boolean}},setup(g){const u=g,i=c(!1),n=c({sortBy:"desc",descending:!1,page:1,rowsPerPage:20}),v=Q(),m=c({id:"",name:""});let b=M(()=>Math.ceil(u.rows.length/n.value.rowsPerPage));const w=(e,a)=>{v.push("capital-call/"+a+"/"+e)},y=e=>{let a="warning";switch(e){case"por aprobar":a="orange";break;case"rechazado":a="danger";break}return a},C=e=>{m.value={id:e,name:"El capital Call con Id: "+e+", una vez eliminado no se podr\xE1 recuperar"},i.value=!0},_=()=>{i.value=!1},{mutate:h,onError:k}=V(S,{refetchQueries:["FindAllCapitallCallsByStatus"]});k(e=>{});const x=async(e,a)=>{await h({deleteCatmaecapitallcallInput:{statusCapital:e,creationDate:a}}),i.value=!1};return(e,a)=>(o(),r(p,null,[l(q,{flat:"",rows:u.rows,columns:u.columns,"row-key":"name",pagination:n.value,"onUpdate:pagination":a[0]||(a[0]=t=>n.value=t),"hide-pagination":"",filter:e.filter,separator:"none",class:"table"},{body:d(t=>[l(R,{props:t,class:"table-separator"},{default:d(()=>[(o(!0),r(p,null,P(t.cols,s=>(o(),f(T,{key:s.name,props:t},{default:d(()=>[s.name==="actions"?(o(),r("div",U,[l(I,{buttons:[{icon:"fa-solid fa-eye",color:"light-blue",size:"xs",action:()=>w(t.row.statusCapital,t.row.creationDate)}]},null,8,["buttons"]),e.canRemove?(o(),f(F,{key:0,class:"q-ml-sm",icon:"fa-solid fa-trash-can",color:"light-blue",size:"xs",flat:"",onClick:B=>C(t.row.creationDate),outline:"",round:""},null,8,["onClick"])):N("",!0),l(L,{type:"definitivamente",data:m.value,open:i.value,string:"",onOnClose:_,onOnDelete:B=>x(t.row.statusCapital,t.row.creationDate)},null,8,["data","open","onOnDelete"])])):s.name==="state"?(o(),r("div",A,[l(j,{class:"uppercase text-xss q-px-sm",rounded:"",color:y(s.value),label:s.value},null,8,["color","label"])])):(o(),r("div",G,$(s.value),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter"]),z("div",H,[l(O,{modelValue:n.value.page,"onUpdate:modelValue":a[1]||(a[1]=t=>n.value.page=t),color:"blue",max:E(b),size:"xs","max-pages":6,"boundary-numbers":"",class:"pagination-table"},null,8,["modelValue","max"])])],64))}});export{Z as _};
