import{a as z,c as l,h as o,b as Y,E as K,C as ft,a3 as Qe,r as Z,w as U,av as gt,s as bt,aw as mt,aa as St,o as yt,Y as Le,z as ze,ax as ht,ay as _t,aH as ke,aI as Me,aJ as wt,S as Ae,aK as qt,ah as ee,m as te,aL as Pt,aM as De,aN as Ct,af as kt}from"./index.c83d97f5.js";import{u as ae,a as le}from"./focus-manager.5520c4d1.js";import{b as xt}from"./QCardActions.9d7eee46.js";import{u as Bt,a as Tt,c as He,b as Rt}from"./QSelect.8d292ae8.js";import{j as Ot,h as $t}from"./QDialog.ddb061fe.js";import{Q as Pe}from"./QCheckbox.77514155.js";import{u as Vt,b as Ft,c as Lt}from"./modalDelete.09eb2ef8.js";import{Q as Mt}from"./QInput.bdf46d45.js";var Sa=z({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const i=K(),v=l(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:v.value},Y(a.default));const u=i.vnode.key,c=(e.props.colsMap!==void 0?e.props.colsMap[u]:null)||e.props.col;if(c===void 0)return;const{row:r}=e.props;return o("td",{class:v.value+c.__tdClass(r),style:c.__tdStyle(r)},Y(a.default))}}}),ya=z({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:a}){const i=l(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>o("tr",{class:i.value},Y(a.default))}}),Dt=z({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:i}){const v=K(),{proxy:{$q:u}}=v,c=r=>{i("click",r)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:c},Y(a.default));let r,f;const d=v.vnode.key;if(d){if(r=e.props.colsMap[d],r===void 0)return}else r=e.props.col;if(r.sortable===!0){const n=r.align==="right"?"unshift":"push";f=ft(a.default,[]),f[n](o(Qe,{class:r.__iconClass,name:u.iconSet.table.arrowUp}))}else f=Y(a.default);const S={class:r.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:r.headerStyle,onClick:n=>{r.sortable===!0&&e.props.sort(r),c(n)}};return o("th",S,f)}}});const jt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Ce={xs:2,sm:4,md:8,lg:16,xl:24};var Nt=z({name:"QSeparator",props:{...ae,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=K(),i=le(e,a.proxy.$q),v=l(()=>e.vertical===!0?"vertical":"horizontal"),u=l(()=>` q-separator--${v.value}`),c=l(()=>e.inset!==!1?`${u.value}-${jt[e.inset]}`:""),r=l(()=>`q-separator${u.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),f=l(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const S=e.spaced===!0?`${Ce.md}px`:e.spaced in Ce?`${Ce[e.spaced]}px`:e.spaced,n=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${n[0]}`]=d[`margin${n[1]}`]=S}return d});return()=>o("hr",{class:r.value,style:f.value,"aria-orientation":v.value})}});const Et=["horizontal","vertical","cell","none"];var Qt=z({name:"QMarkupTable",props:{...ae,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Et.includes(e)}},setup(e,{slots:a}){const i=K(),v=le(e,i.proxy.$q),u=l(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>o("div",{class:u.value},[o("table",{class:"q-table"},Y(a.default))])}});function Ie(e,a){return o("div",e,[o("table",{class:"q-table"},a)])}const zt={list:xt,table:Qt},At=["list","table","__qtable"];var Ht=z({name:"QVirtualScroll",props:{...Bt,type:{type:String,default:"list",validator:e=>At.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:i}){let v;const u=Z(null),c=l(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:r,localResetVirtualScroll:f,padVirtualScroll:d,onVirtualScrollEvt:S}=Tt({virtualScrollLength:c,getVirtualScrollTarget:k,getVirtualScrollEl:C}),n=l(()=>{if(c.value===0)return[];const R=(L,x)=>({index:r.value.from+x,item:L});return e.itemsFn===void 0?e.items.slice(r.value.from,r.value.to).map(R):e.itemsFn(r.value.from,r.value.to-r.value.from).map(R)}),y=l(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),P=l(()=>e.scrollTarget!==void 0?{}:{tabindex:0});U(c,()=>{f()}),U(()=>e.scrollTarget,()=>{m(),q()});function C(){return u.value.$el||u.value}function k(){return v}function q(){v=Ot(C(),e.scrollTarget),v.addEventListener("scroll",S,Le.passive)}function m(){v!==void 0&&(v.removeEventListener("scroll",S,Le.passive),v=void 0)}function V(){let R=d(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(R=a.before().concat(R)),ze(a.after,R)}return gt(()=>{f()}),bt(()=>{q()}),mt(()=>{q()}),St(()=>{m()}),yt(()=>{m()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ie({ref:u,class:"q-table__middle "+y.value},V()):o(zt[e.type],{...i,ref:u,class:[i.class,y.value],...P.value},V)}}});const It={xs:2,sm:4,md:6,lg:10,xl:14};function je(e,a,i){return{transform:a===!0?`translateX(${i.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Ut=z({name:"QLinearProgress",props:{...ae,...ht,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:i}=K(),v=le(e,i.$q),u=_t(e,It),c=l(()=>e.indeterminate===!0||e.query===!0),r=l(()=>e.reverse!==e.query),f=l(()=>({...u.value!==null?u.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=l(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=l(()=>je(e.buffer!==void 0?e.buffer:1,r.value,i.$q)),n=l(()=>`with${e.instantFeedback===!0?"out":""}-transition`),y=l(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),P=l(()=>je(c.value===!0?1:e.value,r.value,i.$q)),C=l(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${c.value===!0?"in":""}determinate`),k=l(()=>({width:`${e.value*100}%`})),q=l(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const m=[o("div",{class:y.value,style:S.value}),o("div",{class:C.value,style:P.value})];return e.stripe===!0&&c.value===!1&&m.push(o("div",{class:q.value,style:k.value})),o("div",{class:d.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},ze(a.default,m))}}});function Kt(e,a){return new Date(e)-new Date(a)}const Wt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Gt(e,a,i,v){const u=l(()=>{const{sortBy:f}=a.value;return f&&i.value.find(d=>d.name===f)||null}),c=l(()=>e.sortMethod!==void 0?e.sortMethod:(f,d,S)=>{const n=i.value.find(C=>C.name===d);if(n===void 0||n.field===void 0)return f;const y=S===!0?-1:1,P=typeof n.field=="function"?C=>n.field(C):C=>C[n.field];return f.sort((C,k)=>{let q=P(C),m=P(k);return q==null?-1*y:m==null?1*y:n.sort!==void 0?n.sort(q,m,C,k)*y:ke(q)===!0&&ke(m)===!0?(q-m)*y:Me(q)===!0&&Me(m)===!0?Kt(q,m)*y:typeof q=="boolean"&&typeof m=="boolean"?(q-m)*y:([q,m]=[q,m].map(V=>(V+"").toLocaleString().toLowerCase()),q<m?-1*y:q===m?0:y)})});function r(f){let d=e.columnSortOrder;if(wt(f)===!0)f.sortOrder&&(d=f.sortOrder),f=f.name;else{const y=i.value.find(P=>P.name===f);y!==void 0&&y.sortOrder&&(d=y.sortOrder)}let{sortBy:S,descending:n}=a.value;S!==f?(S=f,n=d==="da"):e.binaryStateSort===!0?n=!n:n===!0?d==="ad"?S=null:n=!1:d==="ad"?n=!0:S=null,v({sortBy:S,descending:n,page:1})}return{columnToSort:u,computedSortMethod:c,sort:r}}const Jt={filter:[String,Object],filterMethod:Function};function Xt(e,a){const i=l(()=>e.filterMethod!==void 0?e.filterMethod:(v,u,c,r)=>{const f=u?u.toLowerCase():"";return v.filter(d=>c.some(S=>{const n=r(S,d)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(f)!==-1}))});return U(()=>e.filter,()=>{Ae(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:i}}function Yt(e,a){for(const i in a)if(a[i]!==e[i])return!1;return!0}function Ne(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Zt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function pt(e,a){const{props:i,emit:v}=e,u=Z(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:i.rowsPerPageOptions.length!==0?i.rowsPerPageOptions[0]:5},i.pagination)),c=l(()=>{const n=i["onUpdate:pagination"]!==void 0?{...u.value,...i.pagination}:u.value;return Ne(n)}),r=l(()=>c.value.rowsNumber!==void 0);function f(n){d({pagination:n,filter:i.filter})}function d(n={}){Ae(()=>{v("request",{pagination:n.pagination||c.value,filter:n.filter||i.filter,getCellValue:a})})}function S(n,y){const P=Ne({...c.value,...n});if(Yt(c.value,P)===!0){r.value===!0&&y===!0&&f(P);return}if(r.value===!0){f(P);return}i.pagination!==void 0&&i["onUpdate:pagination"]!==void 0?v("update:pagination",P):u.value=P}return{innerPagination:u,computedPagination:c,isServerSide:r,requestServerInteraction:d,setPagination:S}}function ea(e,a,i,v,u,c){const{props:r,emit:f,proxy:{$q:d}}=e,S=l(()=>v.value===!0?i.value.rowsNumber||0:c.value),n=l(()=>{const{page:x,rowsPerPage:O}=i.value;return(x-1)*O}),y=l(()=>{const{page:x,rowsPerPage:O}=i.value;return x*O}),P=l(()=>i.value.page===1),C=l(()=>i.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/i.value.rowsPerPage))),k=l(()=>y.value===0?!0:i.value.page>=C.value),q=l(()=>(r.rowsPerPageOptions.includes(a.value.rowsPerPage)?r.rowsPerPageOptions:[a.value.rowsPerPage].concat(r.rowsPerPageOptions)).map(O=>({label:O===0?d.lang.table.allRows:""+O,value:O})));U(C,(x,O)=>{if(x===O)return;const W=i.value.page;x&&!W?u({page:1}):x<W&&u({page:x})});function m(){u({page:1})}function V(){const{page:x}=i.value;x>1&&u({page:x-1})}function R(){const{page:x,rowsPerPage:O}=i.value;y.value>0&&x*O<S.value&&u({page:x+1})}function L(){u({page:C.value})}return r["onUpdate:pagination"]!==void 0&&f("update:pagination",{...i.value}),{firstRowIndex:n,lastRowIndex:y,isFirstPage:P,isLastPage:k,pagesNumber:C,computedRowsPerPageOptions:q,computedRowsNumber:S,firstPage:m,prevPage:V,nextPage:R,lastPage:L}}const ta={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},aa=["update:selected","selection"];function la(e,a,i,v){const u=l(()=>{const k={};return e.selected.map(v.value).forEach(q=>{k[q]=!0}),k}),c=l(()=>e.selection!=="none"),r=l(()=>e.selection==="single"),f=l(()=>e.selection==="multiple"),d=l(()=>i.value.length!==0&&i.value.every(k=>u.value[v.value(k)]===!0)),S=l(()=>d.value!==!0&&i.value.some(k=>u.value[v.value(k)]===!0)),n=l(()=>e.selected.length);function y(k){return u.value[k]===!0}function P(){a("update:selected",[])}function C(k,q,m,V){a("selection",{rows:q,added:m,keys:k,evt:V});const R=r.value===!0?m===!0?q:[]:m===!0?e.selected.concat(q):e.selected.filter(L=>k.includes(v.value(L))===!1);a("update:selected",R)}return{hasSelectionMode:c,singleSelection:r,multipleSelection:f,allRowsSelected:d,someRowsSelected:S,rowsSelectedNumber:n,isRowSelected:y,clearSelection:P,updateSelection:C}}function Ee(e){return Array.isArray(e)?e.slice():[]}const na={expanded:Array},ra=["update:expanded"];function oa(e,a){const i=Z(Ee(e.expanded));U(()=>e.expanded,r=>{i.value=Ee(r)});function v(r){return i.value.includes(r)}function u(r){e.expanded!==void 0?a("update:expanded",r):i.value=r}function c(r,f){const d=i.value.slice(),S=d.indexOf(r);f===!0?S===-1&&(d.push(r),u(d)):S!==-1&&(d.splice(S,1),u(d))}return{isRowExpanded:v,setExpanded:u,updateExpanded:c}}const ia={visibleColumns:Array};function ua(e,a,i){const v=l(()=>{if(e.columns!==void 0)return e.columns;const f=e.rows[0];return f!==void 0?Object.keys(f).map(d=>({name:d,label:d.toUpperCase(),field:d,align:ke(f[d])?"right":"left",sortable:!0})):[]}),u=l(()=>{const{sortBy:f,descending:d}=a.value;return(e.visibleColumns!==void 0?v.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):v.value).map(n=>{const y=n.align||"right",P=`text-${y}`;return{...n,align:y,__iconClass:`q-table__sort-icon q-table__sort-icon--${y}`,__thClass:P+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===f?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>P+" "+n.classes:C=>P+" "+n.classes(C):()=>P}})}),c=l(()=>{const f={};return u.value.forEach(d=>{f[d.name]=d}),f}),r=l(()=>e.tableColspan!==void 0?e.tableColspan:u.value.length+(i.value===!0?1:0));return{colList:v,computedCols:u,computedColsMap:c,computedColspan:r}}const de="q-table__bottom row items-center",Ue={};He.forEach(e=>{Ue[e]={}});var ha=z({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ue,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ae,...Vt,...ia,...Jt,...Zt,...na,...ta,...Wt},emits:["request","virtualScroll",...Ft,...ra,...aa],setup(e,{slots:a,emit:i}){const v=K(),{proxy:{$q:u}}=v,c=le(e,u),{inFullscreen:r,toggleFullscreen:f}=Lt(),d=l(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=Z(null),n=Z(null),y=l(()=>e.grid!==!0&&e.virtualScroll===!0),P=l(()=>" q-table__card"+(c.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=l(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":P.value)+(c.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(r.value===!0?" fullscreen scroll":"")),k=l(()=>C.value+(e.loading===!0?" q-table--loading":""));U(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{y.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:q,computedPagination:m,isServerSide:V,requestServerInteraction:R,setPagination:L}=pt(v,J),{computedFilterMethod:x}=Xt(e,L),{isRowExpanded:O,setExpanded:W,updateExpanded:fe}=oa(e,i),N=l(()=>{let t=e.rows;if(V.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=m.value;return e.filter&&(t=x.value(t,e.filter,E.value,J)),We.value!==null&&(t=Ge.value(e.rows===t?t.slice():t,s,g)),t}),p=l(()=>N.value.length),j=l(()=>{let t=N.value;if(V.value===!0)return t;const{rowsPerPage:s}=m.value;return s!==0&&(ne.value===0&&e.rows!==t?t.length>re.value&&(t=t.slice(0,re.value)):t=t.slice(ne.value,re.value)),t}),{hasSelectionMode:A,singleSelection:M,multipleSelection:h,allRowsSelected:w,someRowsSelected:H,rowsSelectedNumber:D,isRowSelected:G,clearSelection:I,updateSelection:$}=la(e,i,j,d),{colList:Ke,computedCols:E,computedColsMap:xe,computedColspan:Be}=ua(e,m,A),{columnToSort:We,computedSortMethod:Ge,sort:ge}=Gt(e,m,Ke,L),{firstRowIndex:ne,lastRowIndex:re,isFirstPage:be,isLastPage:me,pagesNumber:oe,computedRowsPerPageOptions:Je,computedRowsNumber:ie,firstPage:Se,prevPage:ye,nextPage:he,lastPage:_e}=ea(v,q,m,V,L,p),Xe=l(()=>j.value.length===0),Ye=l(()=>{const t={};return He.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ze(){y.value===!0&&n.value.reset()}function pe(){if(e.grid===!0)return dt();const t=e.hideHeader!==!0?Ve:null;if(y.value===!0){const g=a["top-row"],b=a["bottom-row"],_={default:T=>Re(T.item,a.body,T.index)};if(g!==void 0){const T=o("tbody",g({cols:E.value}));_.before=t===null?()=>T:()=>[t()].concat(T)}else t!==null&&(_.before=t);return b!==void 0&&(_.after=()=>o("tbody",b({cols:E.value}))),o(Ht,{ref:n,class:e.tableClass,style:e.tableStyle,...Ye.value,scrollTarget:e.virtualScrollTarget,items:j.value,type:"__qtable",tableColspan:Be.value,onVirtualScroll:tt},_)}const s=[at()];return t!==null&&s.unshift(t()),Ie({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function et(t,s){if(n.value!==null){n.value.scrollTo(t,s);return}t=parseInt(t,10);const g=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const b=S.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,T=_<b.scrollTop?"decrease":"increase";b.scrollTop=_,i("virtualScroll",{index:t,from:0,to:q.value.rowsPerPage-1,direction:T})}}function tt(t){i("virtualScroll",t)}function Te(){return[o(Ut,{class:"q-table__linear-progress",color:e.color,dark:c.value,indeterminate:!0,trackColor:"transparent"})]}function Re(t,s,g){const b=d.value(t),_=G(b);if(s!==void 0)return s(Oe({key:b,row:t,pageIndex:g,__trClass:_?"selected":""}));const T=a["body-cell"],B=E.value.map(F=>{const se=a[`body-cell-${F.name}`],ce=se!==void 0?se:T;return ce!==void 0?ce(lt({key:b,row:t,pageIndex:g,col:F})):o("td",{class:F.__tdClass(t),style:F.__tdStyle(t)},J(F,t))});if(A.value===!0){const F=a["body-selection"],se=F!==void 0?F(nt({key:b,row:t,pageIndex:g})):[o(Pe,{modelValue:_,color:e.color,dark:c.value,dense:e.dense,"onUpdate:modelValue":(ce,vt)=>{$([b],[t],ce,vt)}})];B.unshift(o("td",{class:"q-table--col-auto-width"},se))}const Q={key:b,class:{selected:_}};return e.onRowClick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onClick=F=>{i("RowClick",F,t,g)}),e.onRowDblclick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onDblclick=F=>{i("RowDblclick",F,t,g)}),e.onRowContextmenu!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onContextmenu=F=>{i("RowContextmenu",F,t,g)}),o("tr",Q,B)}function at(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let b=j.value.map((_,T)=>Re(_,t,T));return s!==void 0&&(b=s({cols:E.value}).concat(b)),g!==void 0&&(b=b.concat(g({cols:E.value}))),o("tbody",b)}function Oe(t){return we(t),t.cols=t.cols.map(s=>ee({...s},"value",()=>J(s,t.row))),t}function lt(t){return we(t),ee(t,"value",()=>J(t.col,t.row)),t}function nt(t){return we(t),t}function we(t){Object.assign(t,{cols:E.value,colsMap:xe.value,sort:ge,rowIndex:ne.value+t.pageIndex,color:e.color,dark:c.value,dense:e.dense}),A.value===!0&&ee(t,"selected",()=>G(t.key),(s,g)=>{$([t.key],[t.row],s,g)}),ee(t,"expand",()=>O(t.key),s=>{fe(t.key,s)})}function J(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const X=l(()=>({pagination:m.value,pagesNumber:oe.value,isFirstPage:be.value,isLastPage:me.value,firstPage:Se,prevPage:ye,nextPage:he,lastPage:_e,inFullscreen:r.value,toggleFullscreen:f}));function rt(){const t=a.top,s=a["top-left"],g=a["top-right"],b=a["top-selection"],_=A.value===!0&&b!==void 0&&D.value>0,T="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:T},[t(X.value)]);let B;if(_===!0?B=b(X.value).slice():(B=[],s!==void 0?B.push(o("div",{class:"q-table__control"},[s(X.value)])):e.title&&B.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(B.push(o("div",{class:"q-table__separator col"})),B.push(o("div",{class:"q-table__control"},[g(X.value)]))),B.length!==0)return o("div",{class:T},B)}const $e=l(()=>H.value===!0?null:w.value);function Ve(){const t=ot();return e.loading===!0&&a.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:Be.value},Te())])),o("thead",t)}function ot(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const g=E.value.map(b=>{const _=a[`header-cell-${b.name}`],T=_!==void 0?_:s,B=qe({col:b});return T!==void 0?T(B):o(Dt,{key:b.name,props:B},()=>b.label)});if(M.value===!0&&e.grid!==!0)g.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(h.value===!0){const b=a["header-selection"],_=b!==void 0?b(qe({})):[o(Pe,{color:e.color,modelValue:$e.value,dark:c.value,dense:e.dense,"onUpdate:modelValue":Fe})];g.unshift(o("th",{class:"q-table--col-auto-width"},_))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function qe(t){return Object.assign(t,{cols:E.value,sort:ge,colsMap:xe.value,color:e.color,dark:c.value,dense:e.dense}),h.value===!0&&ee(t,"selected",()=>$e.value,Fe),t}function Fe(t){H.value===!0&&(t=!1),$(j.value.map(d.value),j.value,t)}const ue=l(()=>{const t=[e.iconFirstPage||u.iconSet.table.firstPage,e.iconPrevPage||u.iconSet.table.prevPage,e.iconNextPage||u.iconSet.table.nextPage,e.iconLastPage||u.iconSet.table.lastPage];return u.lang.rtl===!0?t.reverse():t});function it(){if(e.hideBottom===!0)return;if(Xe.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||u.lang.table.loading:e.filter?e.noResultsLabel||u.lang.table.noResults:e.noDataLabel||u.lang.table.noData,b=a["no-data"],_=b!==void 0?[b({message:g,icon:u.iconSet.table.warning,filter:e.filter})]:[o(Qe,{class:"q-table__bottom-nodata-icon",name:u.iconSet.table.warning}),g];return o("div",{class:de+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return o("div",{class:de},[t(X.value)]);const s=e.hideSelectedBanner!==!0&&A.value===!0&&D.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||u.lang.table.selectedRecords)(D.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:de+" justify-end"},st(s));if(s.length!==0)return o("div",{class:de},s)}function ut(t){L({page:1,rowsPerPage:t.value})}function st(t){let s;const{rowsPerPage:g}=m.value,b=e.paginationLabel||u.lang.table.pagination,_=a.pagination,T=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),T===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||u.lang.table.recordsPerPage]),o(Rt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Je.value,displayValue:g===0?u.lang.table.allRows:g,dark:c.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),_!==void 0)s=_(X.value);else if(s=[o("span",g!==0?{class:"q-table__bottom-item"}:{},[g?b(ne.value+1,Math.min(re.value,ie.value),ie.value):b(1,p.value,ie.value)])],g!==0&&oe.value>1){const B={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(B.size="sm"),oe.value>2&&s.push(o(te,{key:"pgFirst",...B,icon:ue.value[0],disable:be.value,onClick:Se})),s.push(o(te,{key:"pgPrev",...B,icon:ue.value[1],disable:be.value,onClick:ye}),o(te,{key:"pgNext",...B,icon:ue.value[2],disable:me.value,onClick:he})),oe.value>2&&s.push(o(te,{key:"pgLast",...B,icon:ue.value[3],disable:me.value,onClick:_e}))}return t.push(o("div",{class:"q-table__control"},s)),t}function ct(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[Ve()])]:e.loading===!0&&a.loading===void 0?Te():void 0;return o("div",{class:"q-table__middle"},t)}function dt(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(_=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[_.label]),o("div",{class:"q-table__grid-item-value"},[_.value])]));if(A.value===!0){const _=a["body-selection"],T=_!==void 0?_(s):[o(Pe,{modelValue:s.selected,color:e.color,dark:c.value,dense:e.dense,"onUpdate:modelValue":(B,Q)=>{$([s.key],[s.row],B,Q)}})];g.unshift(o("div",{class:"q-table__grid-item-row"},T),o(Nt,{dark:c.value}))}const b={class:["q-table__grid-item-card"+P.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=_=>{i("RowClick",_,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=_=>{i("RowDblclick",_,s.row,s.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[o("div",b,g)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},j.value.map((s,g)=>t(Oe({key:d.value(s),row:s,pageIndex:g}))))}return Object.assign(v.proxy,{requestServerInteraction:R,setPagination:L,firstPage:Se,prevPage:ye,nextPage:he,lastPage:_e,isRowSelected:G,clearSelection:I,isRowExpanded:O,setExpanded:W,sort:ge,resetVirtualScroll:Ze,scrollTo:et,getCellValue:J}),qt(v.proxy,{filteredSortedRows:()=>N.value,computedRows:()=>j.value,computedRowsNumber:()=>ie.value}),()=>{const t=[rt()],s={ref:S,class:k.value};return e.grid===!0?t.push(ct()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(pe(),it()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),o("div",s,t)}}});function ve(e,a){return[!0,!1].includes(e)?e:a}var _a=z({name:"QPagination",props:{...ae,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||Pt.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:a}){const{proxy:i}=K(),{$q:v}=i,u=le(e,v),c=l(()=>parseInt(e.min,10)),r=l(()=>parseInt(e.max,10)),f=l(()=>parseInt(e.maxPages,10)),d=l(()=>k.value+" / "+r.value),S=l(()=>ve(e.boundaryLinks,e.input)),n=l(()=>ve(e.boundaryNumbers,!e.input)),y=l(()=>ve(e.directionLinks,e.input)),P=l(()=>ve(e.ellipses,!e.input)),C=Z(null),k=l({get:()=>e.modelValue,set:h=>{if(h=parseInt(h,10),e.disable||isNaN(h))return;const w=$t(h,c.value,r.value);e.modelValue!==w&&a("update:modelValue",w)}});U(()=>`${c.value}|${r.value}`,()=>{k.value=e.modelValue});const q=l(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),m=l(()=>e.gutter in De?`${De[e.gutter]}px`:e.gutter||null),V=l(()=>m.value!==null?`--q-pagination-gutter-parent:-${m.value};--q-pagination-gutter-child:${m.value}`:null),R=l(()=>{const h=[e.iconFirst||v.iconSet.pagination.first,e.iconPrev||v.iconSet.pagination.prev,e.iconNext||v.iconSet.pagination.next,e.iconLast||v.iconSet.pagination.last];return v.lang.rtl===!0?h.reverse():h}),L=l(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),x=l(()=>Ct(e,"flat")),O=l(()=>({[x.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),W=l(()=>{const h={[x.value]:!1};return e.activeDesign!==""&&(h[e.activeDesign]=!0),h}),fe=l(()=>({...W.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),N=l(()=>{let h=Math.max(f.value,1+(P.value?2:0)+(n.value?2:0));const w={pgFrom:c.value,pgTo:r.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(r.value).length)}em`}};return f.value&&h<r.value-c.value+1&&(h=1+Math.floor(h/2)*2,w.pgFrom=Math.max(c.value,Math.min(r.value-h+1,e.modelValue-Math.floor(h/2))),w.pgTo=Math.min(r.value,w.pgFrom+h-1),n.value&&(w.boundaryStart=!0,w.pgFrom++),P.value&&w.pgFrom>c.value+(n.value?1:0)&&(w.ellipsesStart=!0,w.pgFrom++),n.value&&(w.boundaryEnd=!0,w.pgTo--),P.value&&w.pgTo<r.value-(n.value?1:0)&&(w.ellipsesEnd=!0,w.pgTo--)),w});function p(h){k.value=h}function j(h){k.value=k.value+h}const A=l(()=>{function h(){k.value=C.value,C.value=null}return{"onUpdate:modelValue":w=>{C.value=w},onKeyup:w=>{kt(w,13)===!0&&h()},onBlur:h}});function M(h,w,H){const D={"aria-label":w,"aria-current":"false",...O.value,...h};return H===!0&&Object.assign(D,{"aria-current":"true",...fe.value}),w!==void 0&&(e.toFn!==void 0?D.to=e.toFn(w):D.onClick=()=>{p(w)}),o(te,D)}return Object.assign(i,{set:p,setByOffset:j}),()=>{const h=[],w=[];let H;if(S.value===!0&&(h.push(M({key:"bls",disable:e.disable||e.modelValue<=c.value,icon:R.value[0]},c.value)),w.unshift(M({key:"ble",disable:e.disable||e.modelValue>=r.value,icon:R.value[3]},r.value))),y.value===!0&&(h.push(M({key:"bdp",disable:e.disable||e.modelValue<=c.value,icon:R.value[1]},e.modelValue-1)),w.unshift(M({key:"bdn",disable:e.disable||e.modelValue>=r.value,icon:R.value[2]},e.modelValue+1))),e.input!==!0){H=[];const{pgFrom:D,pgTo:G,marginalStyle:I}=N.value;if(N.value.boundaryStart===!0){const $=c.value===e.modelValue;h.push(M({key:"bns",style:I,disable:e.disable,label:c.value},c.value,$))}if(N.value.boundaryEnd===!0){const $=r.value===e.modelValue;w.unshift(M({key:"bne",style:I,disable:e.disable,label:r.value},r.value,$))}N.value.ellipsesStart===!0&&h.push(M({key:"bes",style:I,disable:e.disable,label:"\u2026",ripple:!1},D-1)),N.value.ellipsesEnd===!0&&w.unshift(M({key:"bee",style:I,disable:e.disable,label:"\u2026",ripple:!1},G+1));for(let $=D;$<=G;$++)H.push(M({key:`bpg${$}`,style:I,disable:e.disable,label:$},$,$===e.modelValue))}return o("div",{class:q.value,...L.value},[o("div",{class:"q-pagination__content row no-wrap items-center",style:V.value},[...h,e.input===!0?o(Mt,{class:"inline",style:{width:`${d.value.length/1.5}em`},type:"number",dense:!0,value:C.value,disable:e.disable,dark:u.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:d.value,min:c.value,max:r.value,...A.value}):o("div",{class:"q-pagination__middle row justify-center"},H),...w])])}}});export{ha as Q,_a as a,ya as b,Sa as c};
