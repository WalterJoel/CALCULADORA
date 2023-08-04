import{h as He,k as Ee,Q as Re}from"./QInput.bdf46d45.js";import{I as Ne,a as Z,c as b,h as f,b as V,b2 as we,r as A,w as E,s as Se,a3 as Me,m as z,E as de,b3 as Ue,N as Be,o as ue,P as pe,K as me,T as Qe,R as Ie,aD as Te,M as he,S as je,d as $e,e as Y,f as ce,l as F,t as Ae,i as I,j as x,x as We,a$ as Ke,u as Ge,g as Xe,F as Je,n as Ye,a0 as Ze,a1 as Ve,a2 as et,aV as tt,ar as M}from"./index.c83d97f5.js";import{Q as nt,d as ot,v as ge,f as at,g as it,e as rt,h as ve,s as lt,p as ye,i as st}from"./QSelect.8d292ae8.js";import{o as qe,u as ut,d as ct,q as dt,e as ft,r as pt,f as mt,s as ht,c as be,j as gt,Q as Ce,a as vt,n as yt}from"./QDialog.ddb061fe.js";import{u as bt,a as Ct,c as kt}from"./focus-manager.5520c4d1.js";import{u as wt,b as St,c as Mt,_ as Bt}from"./modalDelete.09eb2ef8.js";import{Q as J,a as It}from"./QCardActions.9d7eee46.js";import{Q as Tt}from"./QForm.6f4f8a0b.js";import{Q as $t}from"./QCard.1711850b.js";import{_ as At}from"./BaseInput.3eb15c13.js";import{t as qt}from"./validatePatterns.f5b9b082.js";const fn=`
  query FindAllMantainerByType($typeMantainer: String!) {
    findAllMantainerByType(typeMantainer: $typeMantainer) {
      creationDate
      nameMantainer
      responsibleArea {
        idUser
        emailUser
        nameUser
      }
      societyIdBankAccount
      societyBankAccount
      abbreviationCurrency
      typeMantainer
    }
  }
`,pn=`
  query FindAllMantainerByType($typeMantainer: String!) {
    findAllMantainerByType(typeMantainer: $typeMantainer) {
      currencyIdFund
    classificationIdFund
    managerIdFund
    managerFund
    historicalCallsFund
    vintageFund
    typeMantainer
    societyIdBankAccount
    societyBankAccount
    bankingCoordenatesFund
    classificationFund
    commitmentFund
    contactsFund
    creationDate
    currencyFund
    nameMantainer
    participationPercentageFund
    abbreviationCurrency
    }
  }
`,mn=`
query FindOneFund($findOneFundInput: FindOneFundInput!) {
  findOneFund(findOneFundInput: $findOneFundInput) {
    bankingCoordenatesFund
    contactsFund
  }
}
`;function xe(e,t){if(t&&e===t)return null;const n=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(n)===!0)return e;const a=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,r=a.display;return r==="block"||r==="table"?e:xe(e.parentNode)}function le(e,t,n){return!e||e===document.body?!1:n===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function _e(e,t,n){if(n||(n=document.createRange(),n.selectNode(e),n.setStart(e,0)),t.count===0)n.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(n.setEnd(e,t.count),t.count=0);else for(let a=0;t.count!==0&&a<e.childNodes.length;a++)n=_e(e.childNodes[a],t,n);return n}const xt=/^https?:\/\//;class _t{constructor(t,n){this.el=t,this.eVm=n,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(le(t.anchorNode,this.el,!0)&&le(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const n=t.startContainer;return n.nodeType===document.ELEMENT_NODE?n:n.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?xe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const n=document.createRange(),a=document.getSelection();t!==null?(n.setStart(t.startContainer,t.startOffset),n.setEnd(t.endContainer,t.endOffset),a.removeAllRanges(),a.addRange(n)):(a.selectAllChildren(this.el),a.collapseToEnd())}savePosition(){let t=-1,n;const a=document.getSelection(),r=this.el.parentNode;if(a.focusNode&&le(a.focusNode,r))for(n=a.focusNode,t=a.focusOffset;n&&n!==r;)n!==this.el&&n.previousSibling?(n=n.previousSibling,t+=n.textContent.length):n=n.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const n=window.getSelection(),a=_e(this.el,{count:this.savedPos});a&&(a.collapse(!1),n.removeAllRanges(),n.addRange(a))}}hasParent(t,n){const a=n?this.parent:this.blockParent;return a!==null?a.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,n,a=this.parent){return a===null?!1:t.includes(a.nodeName.toLowerCase())===!0?!0:n===!0?this.hasParents(t,n,a.parentNode):!1}is(t,n){if(this.selection===null)return!1;switch(t){case"formatBlock":return n==="DIV"&&this.parent===this.el||this.hasParent(n,n==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===n;case"fontName":const a=document.queryCommandValue(t);return a===`"${n}"`||a===n;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const r=document.queryCommandState(t);return n!==void 0?r===n:r}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,n,a=Ne){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(n)&&this.is(t,n)&&(t="outdent",n=null),n==="PRE"&&this.is(t,"PRE")&&(n="P");else if(t==="print"){a();const r=window.open();r.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),r.print(),r.close();return}else if(t==="link"){const r=this.getParentAttribute("href");if(r===null){const l=this.selectWord(this.selection),s=l?l.toString():"";if(!s.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=xt.test(s)?s:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(l.getRangeAt(0))}else this.eVm.editLinkUrl.value=r,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),a();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),a();return}document.execCommand(t,!1,n),a()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const n=document.createRange();n.setStart(t.anchorNode,t.anchorOffset),n.setEnd(t.focusNode,t.focusOffset);const a=n.collapsed?["backward","forward"]:["forward","backward"];n.detach();const r=t.focusNode,l=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",a[0],"character"),t.modify("move",a[1],"word"),t.extend(r,l),t.modify("extend",a[1],"character"),t.modify("extend",a[0],"word"),t}}var Pt=Z({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=b(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(r=>e[r]===!0).map(r=>`q-btn-group--${r}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>f("div",{class:n.value},V(t.default))}});const Ot=Object.keys(we),Ft=e=>Ot.reduce((t,n)=>{const a=e[n];return a!==void 0&&(t[n]=a),t},{});var zt=Z({name:"QBtnDropdown",props:{...we,...qe,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:a}=de(),r=A(e.modelValue),l=A(null),s=He(),c=b(()=>{const d={"aria-expanded":r.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,"aria-label":e.toggleAriaLabel||a.$q.lang.label[r.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(d["aria-disabled"]="true"),d}),g=b(()=>"q-btn-dropdown__arrow"+(r.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),C=b(()=>Ue(e)),u=b(()=>Ft(e));E(()=>e.modelValue,d=>{l.value!==null&&l.value[d?"show":"hide"]()}),E(()=>e.split,P);function m(d){r.value=!0,n("beforeShow",d)}function v(d){n("show",d),n("update:modelValue",!0)}function h(d){r.value=!1,n("beforeHide",d)}function $(d){n("hide",d),n("update:modelValue",!1)}function T(d){n("click",d)}function L(d){Be(d),P(),n("click",d)}function q(d){l.value!==null&&l.value.toggle(d)}function _(d){l.value!==null&&l.value.show(d)}function P(d){l.value!==null&&l.value.hide(d)}return Object.assign(a,{show:_,hide:P,toggle:q}),Se(()=>{e.modelValue===!0&&_()}),()=>{const d=[f(Me,{class:g.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&d.push(f(nt,{ref:l,id:s,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:m,onShow:v,onBeforeHide:h,onHide:$},t.default)),e.split===!1?f(z,{class:"q-btn-dropdown q-btn-dropdown--simple",...u.value,...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:T},{default:()=>V(t.label,[]).concat(d),loading:t.loading}):f(Pt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...C.value,glossy:e.glossy,stretch:e.stretch},()=>[f(z,{class:"q-btn-dropdown--current",...u.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:L},{default:t.label,loading:t.loading}),f(z,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...c.value,...C.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>d)])}}}),Lt=Z({name:"QTooltip",inheritAttrs:!1,props:{...ot,...ut,...qe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ge},self:{type:String,default:"top middle",validator:ge},offset:{type:Array,default:()=>[14,14],validator:at},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ct],setup(e,{slots:t,emit:n,attrs:a}){let r,l;const s=de(),{proxy:{$q:c}}=s,g=A(null),C=A(!1),u=b(()=>ye(e.anchor,c.lang.rtl)),m=b(()=>ye(e.self,c.lang.rtl)),v=b(()=>e.persistent!==!0),{registerTick:h,removeTick:$}=dt(),{registerTimeout:T}=ft(),{transitionProps:L,transitionStyle:q}=pt(e),{localScrollTarget:_,changeScrollEvent:P,unconfigureScrollTarget:d}=it(e,K),{anchorEl:B,canShow:U,anchorEvents:k}=rt({showing:C,configureAnchorEl:re}),{show:ee,hide:N}=mt({showing:C,canShow:U,handleShow:ne,handleHide:oe,hideOnRouteChange:v,processOnMount:!0});Object.assign(k,{delayShow:ae,delayHide:ie});const{showPortal:Q,hidePortal:j,renderPortal:te}=ht(s,g,X,"tooltip");if(c.platform.is.mobile===!0){const y={anchorEl:B,innerRef:g,onClickOutside(S){return N(S),S.target.classList.contains("q-dialog__backdrop")&&Ie(S),!0}},H=b(()=>e.modelValue===null&&e.persistent!==!0&&C.value===!0);E(H,S=>{(S===!0?st:ve)(y)}),ue(()=>{ve(y)})}function ne(y){Q(),h(()=>{l=new MutationObserver(()=>D()),l.observe(g.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),D(),K()}),r===void 0&&(r=E(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,D)),T(()=>{Q(!0),n("show",y)},e.transitionDuration)}function oe(y){$(),j(),W(),T(()=>{j(!0),n("hide",y)},e.transitionDuration)}function W(){l!==void 0&&(l.disconnect(),l=void 0),r!==void 0&&(r(),r=void 0),d(),pe(k,"tooltipTemp")}function D(){const y=g.value;B.value===null||!y||lt({el:y,offset:e.offset,anchorEl:B.value,anchorOrigin:u.value,selfOrigin:m.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ae(y){if(c.platform.is.mobile===!0){be(),document.body.classList.add("non-selectable");const H=B.value,S=["touchmove","touchcancel","touchend","click"].map(R=>[H,R,"delayHide","passiveCapture"]);me(k,"tooltipTemp",S)}T(()=>{ee(y)},e.delay)}function ie(y){c.platform.is.mobile===!0&&(pe(k,"tooltipTemp"),be(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),T(()=>{N(y)},e.hideDelay)}function re(){if(e.noParentEvent===!0||B.value===null)return;const y=c.platform.is.mobile===!0?[[B.value,"touchstart","delayShow","passive"]]:[[B.value,"mouseenter","delayShow","passive"],[B.value,"mouseleave","delayHide","passive"]];me(k,"anchor",y)}function K(){if(B.value!==null||e.scrollTarget!==void 0){_.value=gt(B.value,e.scrollTarget);const y=e.noParentEvent===!0?D:N;P(_.value,y)}}function G(){return C.value===!0?f("div",{...a,ref:g,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,q.value],role:"tooltip"},V(t.default)):null}function X(){return f(Qe,L.value,G)}return ue(W),Object.assign(s.proxy,{updatePosition:D}),te}});function Pe(e,t,n){t.handler?t.handler(e,n,n.caret):n.runCmd(t.cmd,t.param)}function fe(e){return f("div",{class:"q-editor__toolbar-group"},e)}function Oe(e,t,n,a=!1){const r=a||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),l=[];if(t.tip&&e.$q.platform.is.desktop){const s=t.key?f("div",[f("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;l.push(f(Lt,{delay:1e3},()=>[f("div",{innerHTML:t.tip}),s]))}return f(z,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:r?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:r&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(s){n&&n(),Pe(s,t,e)}},()=>l)}function Dt(e,t){const n=t.list==="only-icons";let a=t.label,r=t.icon!==null?t.icon:void 0,l,s;function c(){C.component.proxy.hide()}if(n)s=t.options.map(u=>{const m=u.type===void 0?e.caret.is(u.cmd,u.param):!1;return m&&(a=u.tip,r=u.icon!==null?u.icon:void 0),Oe(e,u,c,m)}),l=e.toolbarBackgroundClass.value,s=[fe(s)];else{const u=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,m=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,v=t.list==="no-icons";s=t.options.map(h=>{const $=h.disable?h.disable(e):!1,T=h.type===void 0?e.caret.is(h.cmd,h.param):!1;T&&(a=h.tip,r=h.icon!==null?h.icon:void 0);const L=h.htmlTip;return f(vt,{active:T,activeClass:u,clickable:!0,disable:$,dense:!0,onClick(q){c(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),Pe(q,h,e)}},()=>[v===!0?null:f(Ce,{class:T?u:m,side:!0},()=>f(Me,{name:h.icon!==null?h.icon:void 0})),f(Ce,L?()=>f("div",{class:"text-no-wrap",innerHTML:h.htmlTip}):h.tip?()=>f("div",{class:"text-no-wrap"},h.tip):void 0)])}),l=[e.toolbarBackgroundClass.value,m]}const g=t.highlight&&a!==t.label,C=f(zt,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:g?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:g&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:a,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:r,contentClass:l,onShow:u=>e.emit("dropdownShow",u),onHide:u=>e.emit("dropdownHide",u),onBeforeShow:u=>e.emit("dropdownBeforeShow",u),onBeforeHide:u=>e.emit("dropdownBeforeHide",u)},()=>s);return C}function Ht(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(n=>n.cmd==="viewsource")).map(t=>fe(t.map(n=>e.isViewingSource.value&&n.cmd!=="viewsource"?!1:n.type==="slot"?V(e.slots[n.slot]):n.type==="dropdown"?Dt(e,n):Oe(e,n))))}function Et(e,t,n,a={}){const r=Object.keys(a);if(r.length===0)return{};const l={default_font:{cmd:"fontName",param:e,icon:n,tip:t}};return r.forEach(s=>{const c=a[s];l[s]={cmd:"fontName",param:c,icon:n,tip:c,htmlTip:`<font face="${c}">${c}</font>`}}),l}function Rt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let n=e.editLinkUrl.value;const a=()=>{e.caret.restore(),n!==e.editLinkUrl.value&&document.execCommand("createLink",!1,n===""?" ":n),e.editLinkUrl.value=null};return[f("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),f("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:n,onInput:r=>{Be(r),n=r.target.value},onKeydown:r=>{if(Te(r)!==!0)switch(r.keyCode){case 13:return he(r),a();case 27:he(r),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),fe([f(z,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),f(z,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:a})])]}}const Nt=Object.prototype.toString,se=Object.prototype.hasOwnProperty,Ut=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function ke(e){if(e!==Object(e)||Ut.has(Nt.call(e))===!0||e.constructor&&se.call(e,"constructor")===!1&&se.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||se.call(e,t)}function Fe(){let e,t,n,a,r,l,s=arguments[0]||{},c=1,g=!1;const C=arguments.length;for(typeof s=="boolean"&&(g=s,s=arguments[1]||{},c=2),Object(s)!==s&&typeof s!="function"&&(s={}),C===c&&(s=this,c--);c<C;c++)if((e=arguments[c])!==null)for(t in e)n=s[t],a=e[t],s!==a&&(g===!0&&a&&((r=Array.isArray(a))||ke(a)===!0)?(r===!0?l=Array.isArray(n)===!0?n:[]:l=ke(n)===!0?n:{},s[t]=Fe(g,l,a)):a!==void 0&&(s[t]=a));return s}var Qt=Z({name:"QEditor",props:{...bt,...wt,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...St,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:n,attrs:a}){const{proxy:r,vnode:l}=de(),{$q:s}=r,c=Ct(e,s),{inFullscreen:g,toggleFullscreen:C}=Mt(),u=Ee(a,l),m=A(null),v=A(null),h=A(null),$=A(!1),T=b(()=>!e.readonly&&!e.disable);let L,q,_=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),L=window.getComputedStyle(document.body).fontFamily;const P=b(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),d=b(()=>{const o=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:o,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!T.value,size:"sm"}}),B=b(()=>{const o=s.lang.editor,i=s.iconSet.editor;return{bold:{cmd:"bold",icon:i.bold,tip:o.bold,key:66},italic:{cmd:"italic",icon:i.italic,tip:o.italic,key:73},strike:{cmd:"strikeThrough",icon:i.strikethrough,tip:o.strikethrough,key:83},underline:{cmd:"underline",icon:i.underline,tip:o.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:i.unorderedList,tip:o.unorderedList},ordered:{cmd:"insertOrderedList",icon:i.orderedList,tip:o.orderedList},subscript:{cmd:"subscript",icon:i.subscript,tip:o.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:i.superscript,tip:o.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:p=>p.caret&&!p.caret.can("link"),icon:i.hyperlink,tip:o.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:i.toggleFullscreen,tip:o.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:i.viewSource,tip:o.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:i.quote,tip:o.quote,key:81},left:{cmd:"justifyLeft",icon:i.left,tip:o.left},center:{cmd:"justifyCenter",icon:i.center,tip:o.center},right:{cmd:"justifyRight",icon:i.right,tip:o.right},justify:{cmd:"justifyFull",icon:i.justify,tip:o.justify},print:{type:"no-state",cmd:"print",icon:i.print,tip:o.print,key:80},outdent:{type:"no-state",disable:p=>p.caret&&!p.caret.can("outdent"),cmd:"outdent",icon:i.outdent,tip:o.outdent},indent:{type:"no-state",disable:p=>p.caret&&!p.caret.can("indent"),cmd:"indent",icon:i.indent,tip:o.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:i.removeFormat,tip:o.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:i.hr,tip:o.hr},undo:{type:"no-state",cmd:"undo",icon:i.undo,tip:o.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:i.redo,tip:o.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:i.heading1||i.heading,tip:o.heading1,htmlTip:`<h1 class="q-ma-none">${o.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:i.heading2||i.heading,tip:o.heading2,htmlTip:`<h2 class="q-ma-none">${o.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:i.heading3||i.heading,tip:o.heading3,htmlTip:`<h3 class="q-ma-none">${o.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:i.heading4||i.heading,tip:o.heading4,htmlTip:`<h4 class="q-ma-none">${o.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:i.heading5||i.heading,tip:o.heading5,htmlTip:`<h5 class="q-ma-none">${o.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:i.heading6||i.heading,tip:o.heading6,htmlTip:`<h6 class="q-ma-none">${o.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:i.heading,tip:o.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:i.code,htmlTip:`<code>${o.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:i.size1||i.size,tip:o.size1,htmlTip:`<font size="1">${o.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:i.size2||i.size,tip:o.size2,htmlTip:`<font size="2">${o.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:i.size3||i.size,tip:o.size3,htmlTip:`<font size="3">${o.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:i.size4||i.size,tip:o.size4,htmlTip:`<font size="4">${o.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:i.size5||i.size,tip:o.size5,htmlTip:`<font size="5">${o.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:i.size6||i.size,tip:o.size6,htmlTip:`<font size="6">${o.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:i.size7||i.size,tip:o.size7,htmlTip:`<font size="7">${o.size7}</font>`}}}),U=b(()=>{const o=e.definitions||{},i=e.definitions||e.fonts?Fe(!0,{},B.value,o,Et(L,s.lang.editor.defaultFont,s.iconSet.editor.font,e.fonts)):B.value;return e.toolbar.map(p=>p.map(w=>{if(w.options)return{type:"dropdown",icon:w.icon,label:w.label,size:"sm",dense:!0,fixedLabel:w.fixedLabel,fixedIcon:w.fixedIcon,highlight:w.highlight,list:w.list,options:w.options.map(De=>i[De])};const O=i[w];return O?O.type==="no-state"||o[w]&&(O.cmd===void 0||B.value[O.cmd]&&B.value[O.cmd].type==="no-state")?O:Object.assign({type:"toggle"},O):{type:"slot",slot:w}}))}),k={$q:s,props:e,slots:t,emit:n,inFullscreen:g,toggleFullscreen:C,runCmd:H,isViewingSource:$,editLinkUrl:h,toolbarBackgroundClass:P,buttonProps:d,contentRef:v,buttons:U,setContent:y};E(()=>e.modelValue,o=>{_!==o&&(_=o,y(o,!0))}),E(h,o=>{n(`link-${o?"Show":"Hide"}`)});const ee=b(()=>e.toolbar&&e.toolbar.length!==0),N=b(()=>{const o={},i=p=>{p.key&&(o[p.key]={cmd:p.cmd,param:p.param})};return U.value.forEach(p=>{p.forEach(w=>{w.options?w.options.forEach(i):i(w)})}),o}),Q=b(()=>g.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),j=b(()=>`q-editor q-editor--${$.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(g.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(c.value===!0?" q-editor--dark q-dark":"")),te=b(()=>[e.contentClass,"q-editor__content",{col:g.value,"overflow-auto":g.value||e.maxHeight}]),ne=b(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function oe(){if(v.value!==null){const o=`inner${$.value===!0?"Text":"HTML"}`,i=v.value[o];i!==e.modelValue&&(_=i,n("update:modelValue",i))}}function W(o){if(n("keydown",o),o.ctrlKey!==!0||Te(o)===!0){S();return}const i=o.keyCode,p=N.value[i];if(p!==void 0){const{cmd:w,param:O}=p;Ie(o),H(w,O,!1)}}function D(o){S(),n("click",o)}function ae(o){if(v.value!==null){const{scrollTop:i,scrollHeight:p}=v.value;q=p-i}k.caret.save(),n("blur",o)}function ie(o){je(()=>{v.value!==null&&q!==void 0&&(v.value.scrollTop=v.value.scrollHeight-q)}),n("focus",o)}function re(o){const i=m.value;if(i!==null&&i.contains(o.target)===!0&&(o.relatedTarget===null||i.contains(o.relatedTarget)!==!0)){const p=`inner${$.value===!0?"Text":"HTML"}`;k.caret.restorePosition(v.value[p].length),S()}}function K(o){const i=m.value;i!==null&&i.contains(o.target)===!0&&(o.relatedTarget===null||i.contains(o.relatedTarget)!==!0)&&(k.caret.savePosition(),S())}function G(){q=void 0}function X(o){k.caret.save()}function y(o,i){if(v.value!==null){i===!0&&k.caret.savePosition();const p=`inner${$.value===!0?"Text":"HTML"}`;v.value[p]=o,i===!0&&(k.caret.restorePosition(v.value[p].length),S())}}function H(o,i,p=!0){R(),k.caret.restore(),k.caret.apply(o,i,()=>{R(),k.caret.save(),p&&S()})}function S(){setTimeout(()=>{h.value=null,r.$forceUpdate()},1)}function R(){kt(()=>{v.value!==null&&v.value.focus({preventScroll:!0})})}function Le(){return v.value}return Se(()=>{k.caret=r.caret=new _t(v.value,k),y(e.modelValue),S(),document.addEventListener("selectionchange",X)}),ue(()=>{document.removeEventListener("selectionchange",X)}),Object.assign(r,{runCmd:H,refreshToolbar:S,focus:R,getContentEl:Le}),()=>{let o;if(ee.value){const i=[f("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+P.value},Ht(k))];h.value!==null&&i.push(f("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+P.value},Rt(k))),o=f("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},i)}return f("div",{ref:m,class:j.value,style:{height:g.value===!0?"100%":null},...ne.value,onFocusin:re,onFocusout:K},[o,f("div",{ref:v,style:Q.value,class:te.value,contenteditable:T.value,placeholder:e.placeholder,...u.listeners.value,onInput:oe,onKeydown:W,onClick:D,onBlur:ae,onFocus:ie,onMousedown:G,onTouchstartPassive:G})])}}});const jt={class:"input-form"},Wt={class:"input-label"},hn=$e({__name:"BaseEditor",props:{modelValue:{},name:{},rules:{},placeholder:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,a=b({get:()=>n.modelValue,set:r=>t("update:modelValue",r)});return(r,l)=>(Y(),ce("div",jt,[F("label",Wt,Ae(r.name),1),I(Qt,{class:"input-editor",flat:"",rules:r.rules,modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=s=>a.value=s),dense:r.$q.screen.lt.md,toolbar:[[{icon:r.$q.iconSet.editor.formatting,fixedLabel:!0,list:"only-icons",options:["bold","italic","underline"]},{icon:r.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{icon:r.$q.iconSet.editor.orderedList,fixedLabel:!0,fixedIcon:!0,list:"only-icons",options:["unordered","ordered"]}]]},{default:x(()=>[F("template",null,[I(Re,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),rules:r.rules},null,8,["modelValue","rules"])])]),_:1},8,["rules","modelValue","dense","toolbar"])]))}});const ze=e=>(Ve("data-v-5b5e7696"),e=e(),et(),e),Kt=ze(()=>F("div",{class:"text-h5"},"Lista de contactos",-1)),Gt={class:"modal-inputs"},Xt=ze(()=>F("div",{class:"text-caption separator q-px-lg"},"EMAIL",-1)),Jt={class:"row"},Yt={class:"contacts-text"},Zt={class:"actions"},Vt=$e({__name:"ContactosModal",props:{isOpen:{type:Boolean},id:{},contactosEdit:{}},emits:["onClose","update:modelValue"],setup(e,{emit:t}){const n=e,a=A(!1),r=A(""),l=A([]),{showBasicNotif:s}=tt();E(n,()=>{a.value=n.isOpen,l.value=n.contactosEdit});const c=C=>{const u=l.value.indexOf(C);l.value.splice(u,1)},g=()=>{l.value.includes(r.value)?s("Contacto Repetido","negative"):(l.value.push(r.value),r.value="")};return(C,u)=>(Y(),We(yt,{modelValue:a.value,"onUpdate:modelValue":u[3]||(u[3]=m=>a.value=m),persistent:""},{default:x(()=>[I($t,{class:"modal-contacts"},{default:x(()=>[I(z,{class:"btn-modal-close",dense:"",flat:"",icon:"fa-solid fa-close fa-sm",onClick:u[0]||(u[0]=m=>t("onClose",l.value))}),I(J,{class:"modal-card-title q-py-none"},{default:x(()=>[Kt]),_:1}),I(Tt,{onSubmit:Ke(g,["prevent"])},{default:x(()=>[I(J,{class:"modal-card-title q-py-none"},{default:x(()=>[F("div",Gt,[I(At,{modelValue:r.value,"onUpdate:modelValue":u[1]||(u[1]=m=>r.value=m),name:"",placeholder:"Ingresa un correo electr\xF3nico",type:"text",rules:[m=>Ge(qt).email(m)||"Ingrese un correo v\xE1lido"]},null,8,["modelValue","rules"]),F("div",null,[I(z,{class:"btn",color:"primary",round:"",icon:"fa-solid fa-plus",type:"submit"})])])]),_:1})]),_:1},8,["onSubmit"]),I(J,{class:"modal-card-title q-py-none"},{default:x(()=>[Xt]),_:1}),I(J,{class:"q-py-none modal-card-content"},{default:x(()=>[F("div",Jt,[(Y(!0),ce(Je,null,Xe(l.value,m=>(Y(),ce("div",{class:"col-12 contacts-content",key:m},[F("div",Yt,Ae(m),1),F("div",Zt,[I(Bt,{buttons:[{icon:"fa-solid fa-trash-can",color:"light-blue",size:"xs",action:()=>c(m)}]},null,8,["buttons"])])]))),128))])]),_:1}),I(It,{align:"right",class:"bg-white modal-card-action"},{default:x(()=>[I(z,{class:"btn btn-modal",color:"orange",rounded:"",onClick:u[2]||(u[2]=m=>t("onClose",l.value))},{default:x(()=>[Ye("Guardar")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});var gn=Ze(Vt,[["__scopeId","data-v-5b5e7696"]]);const vn=M`
  mutation CreateManager($createManagerInput: CreateManagerInput!) {
    createManager(createManagerInput: $createManagerInput) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,yn=M`
  mutation CreateSociety($createSocietyInput: CreateSocietyInput!) {
    createSociety(createSocietyInput: $createSocietyInput) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,bn=M`
  mutation Mutation($createFundInput: CreateFundInput!) {
    createFund(createFundInput: $createFundInput) {
      nameMantainer
    }
  }
`,Cn=M`
  mutation CreateClassification(
    $createClassificationInput: CreateClassificationInput!
  ) {
    createClassification(
      createClassificationInput: $createClassificationInput
    ) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,kn=M`
  mutation CreateApplication($createApplicationInput: CreateApplicationInput!) {
    createApplication(createApplicationInput: $createApplicationInput) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,wn=M`
  mutation CreateResponsabilityArea(
    $createResponsabilityInput: CreateAreaResponsabilityInput!
  ) {
    createResponsabilityArea(
      createResponsabilityInput: $createResponsabilityInput
    ) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,Sn=M`
  mutation CreateCurrency($createCurrencyInput: CreateCurrencyInput!) {
    createCurrency(createCurrencyInput: $createCurrencyInput) {
      nameMantainer
      typeMantainer
      creationDate
      abbreviationCurrency
    }
  }
`,Mn=M`
  mutation Mutation($createBankAccountInput: CreateBankAccountInput!) {
    createBankAccount(createBankAccountInput: $createBankAccountInput) {
      nameMantainer
      typeMantainer
      creationDate
      societyBankAccount
    }
  }
`,Bn=M`
  mutation UpdateCommonMantainer($updateManagerInput: UpdateManagerInput!) {
    updateCommonMantainer(updateManagerInput: $updateManagerInput) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,In=M`
  mutation UpdateCurrency($updateCurrencyInput: UpdateCurrencyInput!) {
    updateCurrency(updateCurrencyInput: $updateCurrencyInput) {
      nameMantainer
      typeMantainer
      creationDate
      abbreviationCurrency
    }
  }
`,Tn=M`
  mutation UpdateBankAccount($updateBankAccount: UpdateBankAccountInput!) {
    updateBankAccount(updateBankAccount: $updateBankAccount) {
      creationDate
      typeMantainer
      nameMantainer
    }
  }
`,$n=M`
  mutation UpdateAreaResponsability(
    $updateAreaResponsabilityInput: UpdateAreaResponsabilityInput!
  ) {
    updateAreaResponsability(
      updateAreaResponsabilityInput: $updateAreaResponsabilityInput
    ) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,An=M`
  mutation Mutation($updateFundInput: UpdateFundInput!) {
    updateFund(updateFundInput: $updateFundInput) {
      nameMantainer
      typeMantainer
      creationDate
    }
  }
`,qn=M`
  mutation DeleteAnyMantainer($deleteMantainerInput: DeleteMantainerInput!) {
    deleteAnyMantainer(deleteMantainerInput: $deleteMantainerInput) {
      nameMantainer
    }
  }
`,xn=M`
  mutation DeleteMantainersCap(
    $deleteMantainerCapInput: DeleteMantainerInput!
  ) {
    deleteMantainersCap(deleteMantainerCapInput: $deleteMantainerCapInput) {
      nameMantainer
    }
  }
`,_n=M`
  mutation DeleteSociety($deleteSocietyInput: DeleteMantainerInput!) {
    deleteSociety(deleteSocietyInput: $deleteSocietyInput) {
      nameMantainer
    }
  }
`;export{gn as C,Lt as Q,hn as _,pn as a,mn as b,Bn as c,vn as d,yn as e,Cn as f,fn as g,kn as h,qn as i,bn as j,xn as k,_n as l,Tn as m,Mn as n,In as o,Sn as p,$n as q,wn as r,An as u};
