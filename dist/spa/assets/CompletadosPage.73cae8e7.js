import{Q as p,b as i}from"./QDialog.003a5797.js";import{d as b,r,c as _,e as C,f as g,i as e,j as s,l as o,m as n,n as m,b5 as x}from"./index.216b14ae.js";import{_ as y}from"./CapitalCallList.4b415da2.js";import{_ as v}from"./BaseSearch.ed67373a.js";import{g as D}from"./capitalCall.52b4df59.js";import{d as h}from"./modalDelete.478f0ff8.js";import"./focus-manager.c335c2cc.js";import"./QBadge.4cf81939.js";import"./QPagination.8f381053.js";import"./QCardActions.c8a7bc3b.js";import"./QSelect.d20d3724.js";import"./QInput.067f5eb3.js";import"./QCheckbox.35adfbce.js";import"./use-checkbox.22cbbe4d.js";import"./QCard.72f716cf.js";const A={class:"capital-call"},F={class:"q-py-md row justify-between items-center"},w={class:"flex items-center"},Q={class:"flex items-center"},G=b({__name:"CompletadosPage",setup(q){const l=r(""),c=r([{name:"id",required:!0,label:"ID",align:"left",field:"creationDate",sortable:!0,headerClasses:"w-id"},{name:"sociedad",label:"Sociedad",field:"society",align:"left",sortable:!0},{name:"manager",label:"Manager",field:"managerFund",align:"left",sortable:!0},{name:"fondo",label:"Fondo",field:"fund",align:"left",sortable:!0},{name:"startDate",label:"F. Solicitud",field:"applicationDate",align:"left",sortable:!0},{name:"endDate",label:"F. Ejecuci\xF3n",field:"executionDate",align:"left",sortable:!0},{name:"currency",label:"Moneda",field:"currencyFund",align:"left",sortable:!0},{name:"amount",label:"Monto",field:"capitalCallAmount",align:"left",sortable:!0},{name:"completeDate",label:"F. Completado",field:"completedDate",align:"left",sortable:!0},{name:"actions",align:"left",label:"",field:"actions",sortable:!1,headerClasses:"w-action"}]),d=h(D,{statusCapital:x}),u=_(()=>{var t,a;return(a=(t=d.value)==null?void 0:t.findAllCapitallCallsByStatus)!=null?a:[]});return(t,a)=>(C(),g("div",A,[e(p,null,{default:s(()=>[e(i,{class:"text-left base-title"},{default:s(()=>[m("Completados")]),_:1})]),_:1}),o("div",F,[o("div",w,[e(i,{class:"text-left base-subtitle q-mr-md"},{default:s(()=>[m("Capital Calls")]),_:1})]),o("div",Q,[e(v,{class:"table-search",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=f=>l.value=f),placeholder:"B\xFAsqueda",type:"text"},null,8,["modelValue"]),e(n,{class:"q-ml-sm",icon:"fa-solid fa-filter",color:"primary",size:"xs",flat:"",outline:"",round:""}),e(n,{class:"q-ml-sm",icon:"fa-solid fa-file-excel",color:"primary",size:"xs",flat:"",outline:"",round:""})])]),e(y,{rows:u.value,columns:c.value,filter:l.value},null,8,["rows","columns","filter"])]))}});export{G as default};