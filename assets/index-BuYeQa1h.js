function p0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function m0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},tl={},ic={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),h0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),x0=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),k0=Symbol.for("react.forward_ref"),S0=Symbol.for("react.suspense"),C0=Symbol.for("react.memo"),j0=Symbol.for("react.lazy"),Os=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sc=Object.assign,uc={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=uc,this.updater=n||ac}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cc(){}cc.prototype=Tn.prototype;function ka(e,t,n){this.props=e,this.context=t,this.refs=uc,this.updater=n||ac}var Sa=ka.prototype=new cc;Sa.constructor=ka;sc(Sa,Tn.prototype);Sa.isPureReactComponent=!0;var zs=Array.isArray,fc=Object.prototype.hasOwnProperty,Ca={current:null},dc={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)fc.call(t,r)&&!dc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Lr,type:e,key:l,ref:i,props:o,_owner:Ca.current}}function N0(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function _0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ms=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_0(""+e.key):t.toString(36)}function co(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Lr:case h0:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Wl(i,0):r,zs(o)?(n="",e!=null&&(n=e.replace(Ms,"$&/")+"/"),co(o,t,n,"",function(c){return c})):o!=null&&(ja(o)&&(o=N0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ms,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",zs(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Wl(l,a);i+=co(l,t,n,s,o)}else if(s=E0(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Wl(l,a++),i+=co(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Vr(e,t,n){if(e==null)return e;var r=[],o=0;return co(e,r,"","",function(l){return t.call(n,l,o++)}),r}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},fo={transition:null},P0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:fo,ReactCurrentOwner:Ca};R.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Tn;R.Fragment=g0;R.Profiler=x0;R.PureComponent=ka;R.StrictMode=v0;R.Suspense=S0;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)fc.call(t,s)&&!dc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Lr,type:e.type,key:o,ref:l,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:w0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:y0,_context:e},e.Consumer=e};R.createElement=pc;R.createFactory=function(e){var t=pc.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:k0,render:e}};R.isValidElement=ja;R.lazy=function(e){return{$$typeof:j0,_payload:{_status:-1,_result:e},_init:b0}};R.memo=function(e,t){return{$$typeof:C0,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=fo.transition;fo.transition={};try{e()}finally{fo.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return we.current.useCallback(e,t)};R.useContext=function(e){return we.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return we.current.useDeferredValue(e)};R.useEffect=function(e,t){return we.current.useEffect(e,t)};R.useId=function(){return we.current.useId()};R.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return we.current.useMemo(e,t)};R.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};R.useRef=function(e){return we.current.useRef(e)};R.useState=function(e){return we.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return we.current.useTransition()};R.version="18.2.0";ic.exports=R;var v=ic.exports;const ct=m0(v),yi=p0({__proto__:null,default:ct},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=v,z0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),R0=Object.prototype.hasOwnProperty,L0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)R0.call(t,r)&&!T0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:z0,type:e,key:l,ref:i,props:o,_owner:L0.current}}tl.Fragment=M0;tl.jsx=mc;tl.jsxs=mc;lc.exports=tl;var u=lc.exports,wi={},hc={exports:{}},Le={},gc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,z){var M=P.length;P.push(z);e:for(;0<M;){var Z=M-1>>>1,le=P[Z];if(0<o(le,z))P[Z]=z,P[M]=le,M=Z;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var z=P[0],M=P.pop();if(M!==z){P[0]=M;e:for(var Z=0,le=P.length,Br=le>>>1;Z<Br;){var Bt=2*(Z+1)-1,Vl=P[Bt],Ut=Bt+1,Ur=P[Ut];if(0>o(Vl,M))Ut<le&&0>o(Ur,Vl)?(P[Z]=Ur,P[Ut]=M,Z=Ut):(P[Z]=Vl,P[Bt]=M,Z=Bt);else if(Ut<le&&0>o(Ur,M))P[Z]=Ur,P[Ut]=M,Z=Ut;else break e}}return z}function o(P,z){var M=P.sortIndex-z.sortIndex;return M!==0?M:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,m=null,g=3,k=!1,y=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=P)r(c),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(c)}}function w(P){if(x=!1,p(P),!y)if(n(s)!==null)y=!0,Bl(E);else{var z=n(c);z!==null&&Ul(w,z.startTime-P)}}function E(P,z){y=!1,x&&(x=!1,d(O),O=-1),k=!0;var M=g;try{for(p(z),m=n(s);m!==null&&(!(m.expirationTime>z)||P&&!We());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,g=m.priorityLevel;var le=Z(m.expirationTime<=z);z=e.unstable_now(),typeof le=="function"?m.callback=le:m===n(s)&&r(s),p(z)}else r(s);m=n(s)}if(m!==null)var Br=!0;else{var Bt=n(c);Bt!==null&&Ul(w,Bt.startTime-z),Br=!1}return Br}finally{m=null,g=M,k=!1}}var _=!1,N=null,O=-1,K=5,L=-1;function We(){return!(e.unstable_now()-L<K)}function An(){if(N!==null){var P=e.unstable_now();L=P;var z=!0;try{z=N(!0,P)}finally{z?Bn():(_=!1,N=null)}}else _=!1}var Bn;if(typeof f=="function")Bn=function(){f(An)};else if(typeof MessageChannel<"u"){var Ps=new MessageChannel,d0=Ps.port2;Ps.port1.onmessage=An,Bn=function(){d0.postMessage(null)}}else Bn=function(){C(An,0)};function Bl(P){N=P,_||(_=!0,Bn())}function Ul(P,z){O=C(function(){P(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Bl(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var M=g;g=z;try{return P()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=g;g=P;try{return z()}finally{g=M}},e.unstable_scheduleCallback=function(P,z,M){var Z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,P){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=M+le,P={id:h++,callback:z,priorityLevel:P,startTime:M,expirationTime:le,sortIndex:-1},M>Z?(P.sortIndex=M,t(c,P),n(s)===null&&P===n(c)&&(x?(d(O),O=-1):x=!0,Ul(w,M-Z))):(P.sortIndex=le,t(s,P),y||k||(y=!0,Bl(E))),P},e.unstable_shouldYield=We,e.unstable_wrapCallback=function(P){var z=g;return function(){var M=g;g=z;try{return P.apply(this,arguments)}finally{g=M}}}})(vc);gc.exports=vc;var $0=gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=v,Re=$0;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yc=new Set,fr={};function tn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(fr[e]=t,e=0;e<t.length;e++)yc.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ki=Object.prototype.hasOwnProperty,I0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rs={},Ls={};function F0(e){return ki.call(Ls,e)?!0:ki.call(Rs,e)?!1:I0.test(e)?Ls[e]=!0:(Rs[e]=!0,!1)}function D0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A0(e,t,n,r){if(t===null||typeof t>"u"||D0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ea=/[\-:]([a-z])/g;function Na(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ea,Na);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ea,Na);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ea,Na);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A0(t,n,o,r)&&(n=null),r||o===null?F0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),an=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),ba=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),ji=Symbol.for("react.suspense_list"),Oa=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Sc=Symbol.for("react.offscreen"),Ts=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Hl;function Gn(e){if(Hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hl=t&&t[1]||""}return`
`+Hl+e}var Ql=!1;function Yl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gn(e):""}function B0(e){switch(e.tag){case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 2:case 15:return e=Yl(e.type,!1),e;case 11:return e=Yl(e.type.render,!1),e;case 1:return e=Yl(e.type,!0),e;default:return""}}function Ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sn:return"Fragment";case an:return"Portal";case Si:return"Profiler";case ba:return"StrictMode";case Ci:return"Suspense";case ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kc:return(e.displayName||"Context")+".Consumer";case wc:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oa:return t=e.displayName||null,t!==null?t:Ei(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return Ei(e(t))}catch{}}return null}function U0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ei(t);case 8:return t===ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V0(e){var t=Cc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=V0(e))}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ni(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $s(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function _i(e,t){Ec(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bi(e,t.type,n):t.hasOwnProperty("defaultValue")&&bi(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bi(e,t,n){(t!=="number"||No(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Jn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function Nc(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_c(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){W0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function Pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function Oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var H0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zi(e,t){if(t){if(H0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,kn=null,Sn=null;function As(e){if(e=Ir(e)){if(typeof Li!="function")throw Error(S(280));var t=e.stateNode;t&&(t=il(t),Li(e.stateNode,e.type,t))}}function zc(e){kn?Sn?Sn.push(e):Sn=[e]:kn=e}function Mc(){if(kn){var e=kn,t=Sn;if(Sn=kn=null,As(e),t)for(e=0;e<t.length;e++)As(t[e])}}function Rc(e,t){return e(t)}function Lc(){}var Xl=!1;function Tc(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Rc(e,t,n)}finally{Xl=!1,(kn!==null||Sn!==null)&&(Lc(),Mc())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ti=!1;if(dt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Ti=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Ti=!1}function Q0(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var rr=!1,_o=null,bo=!1,$i=null,Y0={onError:function(e){rr=!0,_o=e}};function X0(e,t,n,r,o,l,i,a,s){rr=!1,_o=null,Q0.apply(Y0,arguments)}function K0(e,t,n,r,o,l,i,a,s){if(X0.apply(this,arguments),rr){if(rr){var c=_o;rr=!1,_o=null}else throw Error(S(198));bo||(bo=!0,$i=c)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bs(e){if(nn(e)!==e)throw Error(S(188))}function Z0(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Bs(o),e;if(l===r)return Bs(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Ic(e){return e=Z0(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Dc=Re.unstable_scheduleCallback,Us=Re.unstable_cancelCallback,G0=Re.unstable_shouldYield,J0=Re.unstable_requestPaint,G=Re.unstable_now,q0=Re.unstable_getCurrentPriorityLevel,Ma=Re.unstable_ImmediatePriority,Ac=Re.unstable_UserBlockingPriority,Po=Re.unstable_NormalPriority,ep=Re.unstable_LowPriority,Bc=Re.unstable_IdlePriority,nl=null,rt=null;function tp(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:op,np=Math.log,rp=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(np(e)/rp|0)|0}var Yr=64,Xr=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=qn(a):(l&=i,l!==0&&(r=qn(l)))}else i=n&~o,i!==0?r=qn(i):l!==0&&(r=qn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ip(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ke(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=lp(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wc,La,Hc,Qc,Yc,Fi=!1,Kr=[],Et=null,Nt=null,_t=null,mr=new Map,hr=new Map,wt=[],sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vs(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Wn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Ir(t),t!==null&&La(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function up(e,t,n,r,o){switch(t){case"focusin":return Et=Wn(Et,e,t,n,r,o),!0;case"dragenter":return Nt=Wn(Nt,e,t,n,r,o),!0;case"mouseover":return _t=Wn(_t,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return mr.set(l,Wn(mr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,hr.set(l,Wn(hr.get(l)||null,e,t,n,r,o)),!0}return!1}function Xc(e){var t=Ht(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=$c(n),t!==null){e.blockedOn=t,Yc(e.priority,function(){Hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ri=r,n.target.dispatchEvent(r),Ri=null}else return t=Ir(n),t!==null&&La(t),e.blockedOn=n,!1;t.shift()}return!0}function Ws(e,t,n){po(e)&&n.delete(t)}function cp(){Fi=!1,Et!==null&&po(Et)&&(Et=null),Nt!==null&&po(Nt)&&(Nt=null),_t!==null&&po(_t)&&(_t=null),mr.forEach(Ws),hr.forEach(Ws)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Fi||(Fi=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,cp)))}function gr(e){function t(o){return Hn(o,e)}if(0<Kr.length){Hn(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Hn(Et,e),Nt!==null&&Hn(Nt,e),_t!==null&&Hn(_t,e),mr.forEach(t),hr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Xc(n),n.blockedOn===null&&wt.shift()}var Cn=gt.ReactCurrentBatchConfig,zo=!0;function fp(e,t,n,r){var o=F,l=Cn.transition;Cn.transition=null;try{F=1,Ta(e,t,n,r)}finally{F=o,Cn.transition=l}}function dp(e,t,n,r){var o=F,l=Cn.transition;Cn.transition=null;try{F=4,Ta(e,t,n,r)}finally{F=o,Cn.transition=l}}function Ta(e,t,n,r){if(zo){var o=Di(e,t,n,r);if(o===null)li(e,t,r,Mo,n),Vs(e,r);else if(up(o,e,t,n,r))r.stopPropagation();else if(Vs(e,r),t&4&&-1<sp.indexOf(e)){for(;o!==null;){var l=Ir(o);if(l!==null&&Wc(l),l=Di(e,t,n,r),l===null&&li(e,t,r,Mo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else li(e,t,r,null,n)}}var Mo=null;function Di(e,t,n,r){if(Mo=null,e=za(r),e=Ht(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q0()){case Ma:return 1;case Ac:return 4;case Po:case ep:return 16;case Bc:return 536870912;default:return 16}default:return 16}}var St=null,$a=null,mo=null;function Zc(){if(mo)return mo;var e,t=$a,n=t.length,r,o="value"in St?St.value:St.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return mo=o.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Hs(){return!1}function Te(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Zr:Hs,this.isPropagationStopped=Hs,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Te($n),$r=Y({},$n,{view:0,detail:0}),pp=Te($r),Zl,Gl,Qn,rl=Y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Zl=e.screenX-Qn.screenX,Gl=e.screenY-Qn.screenY):Gl=Zl=0,Qn=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),Qs=Te(rl),mp=Y({},rl,{dataTransfer:0}),hp=Te(mp),gp=Y({},$r,{relatedTarget:0}),Jl=Te(gp),vp=Y({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),xp=Te(vp),yp=Y({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=Te(yp),kp=Y({},$n,{data:0}),Ys=Te(kp),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jp[e])?!!t[e]:!1}function Fa(){return Ep}var Np=Y({},$r,{key:function(e){if(e.key){var t=Sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fa,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=Te(Np),bp=Y({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=Te(bp),Pp=Y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fa}),Op=Te(Pp),zp=Y({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mp=Te(zp),Rp=Y({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lp=Te(Rp),Tp=[9,13,27,32],Da=dt&&"CompositionEvent"in window,or=null;dt&&"documentMode"in document&&(or=document.documentMode);var $p=dt&&"TextEvent"in window&&!or,Gc=dt&&(!Da||or&&8<or&&11>=or),Ks=" ",Zs=!1;function Jc(e,t){switch(e){case"keyup":return Tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function Ip(e,t){switch(e){case"compositionend":return qc(t);case"keypress":return t.which!==32?null:(Zs=!0,Ks);case"textInput":return e=t.data,e===Ks&&Zs?null:e;default:return null}}function Fp(e,t){if(un)return e==="compositionend"||!Da&&Jc(e,t)?(e=Zc(),mo=$a=St=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var Dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dp[e.type]:t==="textarea"}function ef(e,t,n,r){zc(r),t=Ro(t,"onChange"),0<t.length&&(n=new Ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,vr=null;function Ap(e){df(e,0)}function ol(e){var t=dn(e);if(jc(t))return e}function Bp(e,t){if(e==="change")return t}var tf=!1;if(dt){var ql;if(dt){var ei="oninput"in document;if(!ei){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),ei=typeof Js.oninput=="function"}ql=ei}else ql=!1;tf=ql&&(!document.documentMode||9<document.documentMode)}function qs(){lr&&(lr.detachEvent("onpropertychange",nf),vr=lr=null)}function nf(e){if(e.propertyName==="value"&&ol(vr)){var t=[];ef(t,vr,e,za(e)),Tc(Ap,t)}}function Up(e,t,n){e==="focusin"?(qs(),lr=t,vr=n,lr.attachEvent("onpropertychange",nf)):e==="focusout"&&qs()}function Vp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(vr)}function Wp(e,t){if(e==="click")return ol(t)}function Hp(e,t){if(e==="input"||e==="change")return ol(t)}function Qp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Qp;function xr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ki.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function of(){for(var e=window,t=No();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=No(e.document)}return t}function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yp(e){var t=of(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rf(n.ownerDocument.documentElement,n)){if(r!==null&&Aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=tu(n,l);var i=tu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xp=dt&&"documentMode"in document&&11>=document.documentMode,cn=null,Ai=null,ir=null,Bi=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bi||cn==null||cn!==No(r)||(r=cn,"selectionStart"in r&&Aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&xr(ir,r)||(ir=r,r=Ro(Ai,"onSelect"),0<r.length&&(t=new Ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},ti={},lf={};dt&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function ll(e){if(ti[e])return ti[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return ti[e]=t[n];return e}var af=ll("animationend"),sf=ll("animationiteration"),uf=ll("animationstart"),cf=ll("transitionend"),ff=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){ff.set(e,t),tn(t,[e])}for(var ni=0;ni<ru.length;ni++){var ri=ru[ni],Kp=ri.toLowerCase(),Zp=ri[0].toUpperCase()+ri.slice(1);It(Kp,"on"+Zp)}It(af,"onAnimationEnd");It(sf,"onAnimationIteration");It(uf,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(cf,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gp=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,K0(r,t,void 0,e),e.currentTarget=null}function df(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;ou(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;ou(o,a,c),l=s}}}if(bo)throw e=$i,bo=!1,$i=null,e}function U(e,t){var n=t[Qi];n===void 0&&(n=t[Qi]=new Set);var r=e+"__bubble";n.has(r)||(pf(t,e,2,!1),n.add(r))}function oi(e,t,n){var r=0;t&&(r|=4),pf(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[Jr]){e[Jr]=!0,yc.forEach(function(n){n!=="selectionchange"&&(Gp.has(n)||oi(n,!1,e),oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,oi("selectionchange",!1,t))}}function pf(e,t,n,r){switch(Kc(t)){case 1:var o=fp;break;case 4:o=dp;break;default:o=Ta}n=o.bind(null,t,n,e),o=void 0,!Ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function li(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Ht(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Tc(function(){var c=l,h=za(n),m=[];e:{var g=ff.get(e);if(g!==void 0){var k=Ia,y=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":k=_p;break;case"focusin":y="focus",k=Jl;break;case"focusout":y="blur",k=Jl;break;case"beforeblur":case"afterblur":k=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Op;break;case af:case sf:case uf:k=xp;break;case cf:k=Mp;break;case"scroll":k=pp;break;case"wheel":k=Lp;break;case"copy":case"cut":case"paste":k=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Xs}var x=(t&4)!==0,C=!x&&e==="scroll",d=x?g!==null?g+"Capture":null:g;x=[];for(var f=c,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=pr(f,d),w!=null&&x.push(wr(f,w,p)))),C)break;f=f.return}0<x.length&&(g=new k(g,y,null,n,h),m.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Ri&&(y=n.relatedTarget||n.fromElement)&&(Ht(y)||y[pt]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?Ht(y):null,y!==null&&(C=nn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(x=Qs,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xs,w="onPointerLeave",d="onPointerEnter",f="pointer"),C=k==null?g:dn(k),p=y==null?g:dn(y),g=new x(w,f+"leave",k,n,h),g.target=C,g.relatedTarget=p,w=null,Ht(h)===c&&(x=new x(d,f+"enter",y,n,h),x.target=p,x.relatedTarget=C,w=x),C=w,k&&y)t:{for(x=k,d=y,f=0,p=x;p;p=ln(p))f++;for(p=0,w=d;w;w=ln(w))p++;for(;0<f-p;)x=ln(x),f--;for(;0<p-f;)d=ln(d),p--;for(;f--;){if(x===d||d!==null&&x===d.alternate)break t;x=ln(x),d=ln(d)}x=null}else x=null;k!==null&&lu(m,g,k,x,!1),y!==null&&C!==null&&lu(m,C,y,x,!0)}}e:{if(g=c?dn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var E=Bp;else if(Gs(g))if(tf)E=Hp;else{E=Vp;var _=Up}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Wp);if(E&&(E=E(e,c))){ef(m,E,n,h);break e}_&&_(e,g,c),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&bi(g,"number",g.value)}switch(_=c?dn(c):window,e){case"focusin":(Gs(_)||_.contentEditable==="true")&&(cn=_,Ai=c,ir=null);break;case"focusout":ir=Ai=cn=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,nu(m,n,h);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":nu(m,n,h)}var N;if(Da)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else un?Jc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Gc&&n.locale!=="ko"&&(un||O!=="onCompositionStart"?O==="onCompositionEnd"&&un&&(N=Zc()):(St=h,$a="value"in St?St.value:St.textContent,un=!0)),_=Ro(c,O),0<_.length&&(O=new Ys(O,e,null,n,h),m.push({event:O,listeners:_}),N?O.data=N:(N=qc(n),N!==null&&(O.data=N)))),(N=$p?Ip(e,n):Fp(e,n))&&(c=Ro(c,"onBeforeInput"),0<c.length&&(h=new Ys("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=N))}df(m,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=pr(e,n),l!=null&&r.unshift(wr(e,l,o)),l=pr(e,t),l!=null&&r.push(wr(e,l,o))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=pr(n,l),s!=null&&i.unshift(wr(n,s,a))):o||(s=pr(n,l),s!=null&&i.push(wr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Jp=/\r\n?/g,qp=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(Jp,`
`).replace(qp,"")}function qr(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(S(425))}function Lo(){}var Ui=null,Vi=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,tm=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(nm)}:Hi;function nm(e){setTimeout(function(){throw e})}function ii(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),nt="__reactFiber$"+In,kr="__reactProps$"+In,pt="__reactContainer$"+In,Qi="__reactEvents$"+In,rm="__reactListeners$"+In,om="__reactHandles$"+In;function Ht(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[nt])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[nt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function il(e){return e[kr]||null}var Yi=[],pn=-1;function Ft(e){return{current:e}}function V(e){0>pn||(e.current=Yi[pn],Yi[pn]=null,pn--)}function B(e,t){pn++,Yi[pn]=e.current,e.current=t}var $t={},ve=Ft($t),je=Ft(!1),Zt=$t;function bn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function To(){V(je),V(ve)}function uu(e,t,n){if(ve.current!==$t)throw Error(S(168));B(ve,t),B(je,n)}function mf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,U0(e)||"Unknown",o));return Y({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,Zt=ve.current,B(ve,e),B(je,je.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=mf(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,V(je),V(ve),B(ve,e)):V(je),B(je,n)}var at=null,al=!1,ai=!1;function hf(e){at===null?at=[e]:at.push(e)}function lm(e){al=!0,hf(e)}function Dt(){if(!ai&&at!==null){ai=!0;var e=0,t=F;try{var n=at;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,al=!1}catch(o){throw at!==null&&(at=at.slice(e+1)),Dc(Ma,Dt),o}finally{F=t,ai=!1}}return null}var mn=[],hn=0,Io=null,Fo=0,Ie=[],Fe=0,Gt=null,st=1,ut="";function Vt(e,t){mn[hn++]=Fo,mn[hn++]=Io,Io=e,Fo=t}function gf(e,t,n){Ie[Fe++]=st,Ie[Fe++]=ut,Ie[Fe++]=Gt,Gt=e;var r=st;e=ut;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var l=32-Ke(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,st=1<<32-Ke(t)+o|n<<o|r,ut=l+e}else st=1<<l|n<<o|r,ut=e}function Ba(e){e.return!==null&&(Vt(e,1),gf(e,1,0))}function Ua(e){for(;e===Io;)Io=mn[--hn],mn[hn]=null,Fo=mn[--hn],mn[hn]=null;for(;e===Gt;)Gt=Ie[--Fe],Ie[Fe]=null,ut=Ie[--Fe],Ie[Fe]=null,st=Ie[--Fe],Ie[Fe]=null}var ze=null,Oe=null,W=!1,Xe=null;function vf(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Oe=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:st,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Oe=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ki(e){if(W){var t=Oe;if(t){var n=t;if(!fu(e,t)){if(Xi(e))throw Error(S(418));t=bt(n.nextSibling);var r=ze;t&&fu(e,t)?vf(r,n):(e.flags=e.flags&-4097|2,W=!1,ze=e)}}else{if(Xi(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,ze=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function eo(e){if(e!==ze)return!1;if(!W)return du(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=Oe)){if(Xi(e))throw xf(),Error(S(418));for(;t;)vf(e,t),t=bt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=ze?bt(e.stateNode.nextSibling):null;return!0}function xf(){for(var e=Oe;e;)e=bt(e.nextSibling)}function Pn(){Oe=ze=null,W=!1}function Va(e){Xe===null?Xe=[e]:Xe.push(e)}var im=gt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Do=Ft(null),Ao=null,gn=null,Wa=null;function Ha(){Wa=gn=Ao=null}function Qa(e){var t=Do.current;V(Do),e._currentValue=t}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Ao=e,Wa=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Wa!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Ao===null)throw Error(S(308));gn=e,Ao.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Qt=null;function Ya(e){Qt===null?Qt=[e]:Qt.push(e)}function yf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ya(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ya(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var o=e.updateQueue;yt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(l!==null){var m=o.baseState;i=0,h=c=s=null,a=l;do{var g=a.lane,k=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(g=t,k=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){m=y.call(k,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(k,m,g):y,g==null)break e;m=Y({},m,g);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=k,s=m):h=h.next=k,i|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(s=m),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);qt|=i,e.lanes=i,e.memoizedState=m}}function mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var kf=new xc.Component().refs;function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=zt(e),l=ft(r,o);l.payload=t,n!=null&&(l.callback=n),t=Pt(e,l,o),t!==null&&(Ze(t,e,o,r),go(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=zt(e),l=ft(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Pt(e,l,o),t!==null&&(Ze(t,e,o,r),go(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=zt(e),o=ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=Pt(e,o,r),t!==null&&(Ze(t,e,r,n),go(t,e,r))}};function hu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(o,l):!0}function Sf(e,t,n){var r=!1,o=$t,l=t.contextType;return typeof l=="object"&&l!==null?l=Be(l):(o=Ee(t)?Zt:ve.current,r=t.contextTypes,l=(r=r!=null)?bn(e,o):$t),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Ji(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=kf,Xa(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Be(l):(l=Ee(t)?Zt:ve.current,o.context=bn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gi(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&sl.enqueueReplaceState(o,o.state,null),Bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===kf&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function Cf(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function o(d,f){return d=Mt(d,f),d.index=0,d.sibling=null,d}function l(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,w){return f===null||f.tag!==6?(f=mi(p,d.mode,w),f.return=d,f):(f=o(f,p),f.return=d,f)}function s(d,f,p,w){var E=p.type;return E===sn?h(d,f,p.props.children,w,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xt&&vu(E)===f.type)?(w=o(f,p.props),w.ref=Yn(d,f,p),w.return=d,w):(w=So(p.type,p.key,p.props,null,d.mode,w),w.ref=Yn(d,f,p),w.return=d,w)}function c(d,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=hi(p,d.mode,w),f.return=d,f):(f=o(f,p.children||[]),f.return=d,f)}function h(d,f,p,w,E){return f===null||f.tag!==7?(f=Kt(p,d.mode,w,E),f.return=d,f):(f=o(f,p),f.return=d,f)}function m(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=mi(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:return p=So(f.type,f.key,f.props,null,d.mode,p),p.ref=Yn(d,null,f),p.return=d,p;case an:return f=hi(f,d.mode,p),f.return=d,f;case xt:var w=f._init;return m(d,w(f._payload),p)}if(Jn(f)||Un(f))return f=Kt(f,d.mode,p,null),f.return=d,f;to(d,f)}return null}function g(d,f,p,w){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wr:return p.key===E?s(d,f,p,w):null;case an:return p.key===E?c(d,f,p,w):null;case xt:return E=p._init,g(d,f,E(p._payload),w)}if(Jn(p)||Un(p))return E!==null?null:h(d,f,p,w,null);to(d,p)}return null}function k(d,f,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,a(f,d,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wr:return d=d.get(w.key===null?p:w.key)||null,s(f,d,w,E);case an:return d=d.get(w.key===null?p:w.key)||null,c(f,d,w,E);case xt:var _=w._init;return k(d,f,p,_(w._payload),E)}if(Jn(w)||Un(w))return d=d.get(p)||null,h(f,d,w,E,null);to(f,w)}return null}function y(d,f,p,w){for(var E=null,_=null,N=f,O=f=0,K=null;N!==null&&O<p.length;O++){N.index>O?(K=N,N=null):K=N.sibling;var L=g(d,N,p[O],w);if(L===null){N===null&&(N=K);break}e&&N&&L.alternate===null&&t(d,N),f=l(L,f,O),_===null?E=L:_.sibling=L,_=L,N=K}if(O===p.length)return n(d,N),W&&Vt(d,O),E;if(N===null){for(;O<p.length;O++)N=m(d,p[O],w),N!==null&&(f=l(N,f,O),_===null?E=N:_.sibling=N,_=N);return W&&Vt(d,O),E}for(N=r(d,N);O<p.length;O++)K=k(N,d,O,p[O],w),K!==null&&(e&&K.alternate!==null&&N.delete(K.key===null?O:K.key),f=l(K,f,O),_===null?E=K:_.sibling=K,_=K);return e&&N.forEach(function(We){return t(d,We)}),W&&Vt(d,O),E}function x(d,f,p,w){var E=Un(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var _=E=null,N=f,O=f=0,K=null,L=p.next();N!==null&&!L.done;O++,L=p.next()){N.index>O?(K=N,N=null):K=N.sibling;var We=g(d,N,L.value,w);if(We===null){N===null&&(N=K);break}e&&N&&We.alternate===null&&t(d,N),f=l(We,f,O),_===null?E=We:_.sibling=We,_=We,N=K}if(L.done)return n(d,N),W&&Vt(d,O),E;if(N===null){for(;!L.done;O++,L=p.next())L=m(d,L.value,w),L!==null&&(f=l(L,f,O),_===null?E=L:_.sibling=L,_=L);return W&&Vt(d,O),E}for(N=r(d,N);!L.done;O++,L=p.next())L=k(N,d,O,L.value,w),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?O:L.key),f=l(L,f,O),_===null?E=L:_.sibling=L,_=L);return e&&N.forEach(function(An){return t(d,An)}),W&&Vt(d,O),E}function C(d,f,p,w){if(typeof p=="object"&&p!==null&&p.type===sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Wr:e:{for(var E=p.key,_=f;_!==null;){if(_.key===E){if(E=p.type,E===sn){if(_.tag===7){n(d,_.sibling),f=o(_,p.props.children),f.return=d,d=f;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xt&&vu(E)===_.type){n(d,_.sibling),f=o(_,p.props),f.ref=Yn(d,_,p),f.return=d,d=f;break e}n(d,_);break}else t(d,_);_=_.sibling}p.type===sn?(f=Kt(p.props.children,d.mode,w,p.key),f.return=d,d=f):(w=So(p.type,p.key,p.props,null,d.mode,w),w.ref=Yn(d,f,p),w.return=d,d=w)}return i(d);case an:e:{for(_=p.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=o(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=hi(p,d.mode,w),f.return=d,d=f}return i(d);case xt:return _=p._init,C(d,f,_(p._payload),w)}if(Jn(p))return y(d,f,p,w);if(Un(p))return x(d,f,p,w);to(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=o(f,p),f.return=d,d=f):(n(d,f),f=mi(p,d.mode,w),f.return=d,d=f),i(d)):n(d,f)}return C}var On=Cf(!0),jf=Cf(!1),Fr={},ot=Ft(Fr),Sr=Ft(Fr),Cr=Ft(Fr);function Yt(e){if(e===Fr)throw Error(S(174));return e}function Ka(e,t){switch(B(Cr,t),B(Sr,e),B(ot,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}V(ot),B(ot,t)}function zn(){V(ot),V(Sr),V(Cr)}function Ef(e){Yt(Cr.current);var t=Yt(ot.current),n=Oi(t,e.type);t!==n&&(B(Sr,e),B(ot,n))}function Za(e){Sr.current===e&&(V(ot),V(Sr))}var H=Ft(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var si=[];function Ga(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var vo=gt.ReactCurrentDispatcher,ui=gt.ReactCurrentBatchConfig,Jt=0,Q=null,re=null,ie=null,Vo=!1,ar=!1,jr=0,am=0;function pe(){throw Error(S(321))}function Ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function qa(e,t,n,r,o,l){if(Jt=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?fm:dm,e=n(r,o),ar){l=0;do{if(ar=!1,jr=0,25<=l)throw Error(S(301));l+=1,ie=re=null,t.updateQueue=null,vo.current=pm,e=n(r,o)}while(ar)}if(vo.current=Wo,t=re!==null&&re.next!==null,Jt=0,ie=re=Q=null,Vo=!1,t)throw Error(S(300));return e}function es(){var e=jr!==0;return jr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Q.memoizedState=ie=e:ie=ie.next=e,ie}function Ue(){if(re===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?Q.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?Q.memoizedState=ie=e:ie=ie.next=e}return ie}function Er(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var h=c.lane;if((Jt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,i=r):s=s.next=m,Q.lanes|=h,qt|=h}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,Ge(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Q.lanes|=l,qt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ge(l,t.memoizedState)||(Ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Nf(){}function _f(e,t){var n=Q,r=Ue(),o=t(),l=!Ge(r.memoizedState,o);if(l&&(r.memoizedState=o,Ce=!0),r=r.queue,ts(Of.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Nr(9,Pf.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(S(349));Jt&30||bf(n,t,o)}return o}function bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pf(e,t,n,r){t.value=n,t.getSnapshot=r,zf(t)&&Mf(e)}function Of(e,t,n){return n(function(){zf(t)&&Mf(e)})}function zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Mf(e){var t=mt(e,1);t!==null&&Ze(t,e,1,-1)}function xu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},t.queue=e,e=e.dispatch=cm.bind(null,Q,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rf(){return Ue().memoizedState}function xo(e,t,n,r){var o=qe();Q.flags|=e,o.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var o=Ue();r=r===void 0?null:r;var l=void 0;if(re!==null){var i=re.memoizedState;if(l=i.destroy,r!==null&&Ja(r,i.deps)){o.memoizedState=Nr(t,n,l,r);return}}Q.flags|=e,o.memoizedState=Nr(1|t,n,l,r)}function yu(e,t){return xo(8390656,8,e,t)}function ts(e,t){return ul(2048,8,e,t)}function Lf(e,t){return ul(4,2,e,t)}function Tf(e,t){return ul(4,4,e,t)}function $f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,$f.bind(null,t,e),n)}function ns(){}function Ff(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Df(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Af(e,t,n){return Jt&21?(Ge(n,t)||(n=Uc(),Q.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function sm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),t()}finally{F=n,ui.transition=r}}function Bf(){return Ue().memoizedState}function um(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uf(e))Vf(t,n);else if(n=yf(e,t,n,r),n!==null){var o=ye();Ze(n,e,r,o),Wf(n,t,r)}}function cm(e,t,n){var r=zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uf(e))Vf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ge(a,i)){var s=t.interleaved;s===null?(o.next=o,Ya(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=yf(e,t,o,r),n!==null&&(o=ye(),Ze(n,e,r,o),Wf(n,t,r))}}function Uf(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Vf(e,t){ar=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}var Wo={readContext:Be,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},fm={readContext:Be,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xo(4194308,4,$f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=um.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:ns,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=sm.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=qe();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));Jt&30||bf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,yu(Of.bind(null,r,l,e),[e]),r.flags|=2048,Nr(9,Pf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=qe(),t=ae.identifierPrefix;if(W){var n=ut,r=st;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dm={readContext:Be,useCallback:Ff,useContext:Be,useEffect:ts,useImperativeHandle:If,useInsertionEffect:Lf,useLayoutEffect:Tf,useMemo:Df,useReducer:ci,useRef:Rf,useState:function(){return ci(Er)},useDebugValue:ns,useDeferredValue:function(e){var t=Ue();return Af(t,re.memoizedState,e)},useTransition:function(){var e=ci(Er)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Nf,useSyncExternalStore:_f,useId:Bf,unstable_isNewReconciler:!1},pm={readContext:Be,useCallback:Ff,useContext:Be,useEffect:ts,useImperativeHandle:If,useInsertionEffect:Lf,useLayoutEffect:Tf,useMemo:Df,useReducer:fi,useRef:Rf,useState:function(){return fi(Er)},useDebugValue:ns,useDeferredValue:function(e){var t=Ue();return re===null?t.memoizedState=e:Af(t,re.memoizedState,e)},useTransition:function(){var e=fi(Er)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Nf,useSyncExternalStore:_f,useId:Bf,unstable_isNewReconciler:!1};function Mn(e,t){try{var n="",r=t;do n+=B0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function di(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mm=typeof WeakMap=="function"?WeakMap:Map;function Hf(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qo||(Qo=!0,ua=r),qi(e,t)},n}function Qf(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){qi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){qi(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=bm.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Su(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var hm=gt.ReactCurrentOwner,Ce=!1;function xe(e,t,n,r){t.child=e===null?jf(t,null,n,r):On(t,e.child,n,r)}function Cu(e,t,n,r,o){n=n.render;var l=t.ref;return jn(t,o),r=qa(e,t,n,r,l,o),n=es(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(W&&n&&Ba(t),t.flags|=1,xe(e,t,r,o),t.child)}function ju(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!cs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Yf(e,t,l,r,o)):(e=So(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(i,r)&&e.ref===t.ref)return ht(e,t,o)}return t.flags|=1,e=Mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Yf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(xr(l,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,ht(e,t,o)}return ea(e,t,n,r,o)}function Xf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(xn,Pe),Pe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(xn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,B(xn,Pe),Pe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,B(xn,Pe),Pe|=r;return xe(e,t,o,n),t.child}function Kf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ea(e,t,n,r,o){var l=Ee(n)?Zt:ve.current;return l=bn(t,l),jn(t,o),n=qa(e,t,n,r,l,o),r=es(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(W&&r&&Ba(t),t.flags|=1,xe(e,t,n,o),t.child)}function Eu(e,t,n,r,o){if(Ee(n)){var l=!0;$o(t)}else l=!1;if(jn(t,o),t.stateNode===null)yo(e,t),Sf(t,n,r),Ji(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=Ee(n)?Zt:ve.current,c=bn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&gu(t,i,r,c),yt=!1;var g=t.memoizedState;i.state=g,Bo(t,r,i,o),s=t.memoizedState,a!==r||g!==s||je.current||yt?(typeof h=="function"&&(Gi(t,n,h,r),s=t.memoizedState),(a=yt||hu(t,n,a,r,g,s,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,wf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Qe(t.type,a),i.props=c,m=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=Ee(n)?Zt:ve.current,s=bn(t,s));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||g!==s)&&gu(t,i,r,s),yt=!1,g=t.memoizedState,i.state=g,Bo(t,r,i,o);var y=t.memoizedState;a!==m||g!==y||je.current||yt?(typeof k=="function"&&(Gi(t,n,k,r),y=t.memoizedState),(c=yt||hu(t,n,c,r,g,y,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ta(e,t,n,r,l,o)}function ta(e,t,n,r,o,l){Kf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&cu(t,n,!1),ht(e,t,l);r=t.stateNode,hm.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=On(t,e.child,null,l),t.child=On(t,null,a,l)):xe(e,t,a,l),t.memoizedState=r.state,o&&cu(t,n,!0),t.child}function Zf(e){var t=e.stateNode;t.pendingContext?uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uu(e,t.context,!1),Ka(e,t.containerInfo)}function Nu(e,t,n,r,o){return Pn(),Va(o),t.flags|=256,xe(e,t,n,r),t.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gf(e,t,n){var r=t.pendingProps,o=H.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(H,o&1),e===null)return Ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=dl(i,r,0,null),e=Kt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ra(n),t.memoizedState=na,e):rs(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return gm(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Mt(a,l):(l=Kt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ra(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=na,r}return l=e.child,e=l.sibling,r=Mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rs(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&Va(r),On(t,e.child,null,n),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gm(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=di(Error(S(422))),no(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=dl({mode:"visible",children:r.children},o,0,null),l=Kt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&On(t,e.child,null,i),t.child.memoizedState=ra(i),t.memoizedState=na,l);if(!(t.mode&1))return no(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(S(419)),r=di(l,r,void 0),no(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ce||a){if(r=ae,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,mt(e,o),Ze(r,e,o,-1))}return us(),r=di(Error(S(421))),no(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Pm.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Oe=bt(o.nextSibling),ze=t,W=!0,Xe=null,e!==null&&(Ie[Fe++]=st,Ie[Fe++]=ut,Ie[Fe++]=Gt,st=e.id,ut=e.overflow,Gt=t),t=rs(t,r.children),t.flags|=4096,t)}function _u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function pi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Jf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_u(e,n,t);else if(e.tag===19)_u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(H,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pi(t,!0,n,null,l);break;case"together":pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vm(e,t,n){switch(t.tag){case 3:Zf(t),Pn();break;case 5:Ef(t);break;case 1:Ee(t.type)&&$o(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Do,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Gf(e,t,n):(B(H,H.current&1),e=ht(e,t,n),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,n)}return ht(e,t,n)}var qf,oa,ed,td;qf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oa=function(){};ed=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Yt(ot.current);var l=null;switch(n){case"input":o=Ni(e,o),r=Ni(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=Pi(e,o),r=Pi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lo)}zi(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&U("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};td=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xm(e,t,n){var r=t.pendingProps;switch(Ua(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ee(t.type)&&To(),me(t),null;case 3:return r=t.stateNode,zn(),V(je),V(ve),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(da(Xe),Xe=null))),oa(e,t),me(t),null;case 5:Za(t);var o=Yt(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)ed(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=Yt(ot.current),eo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[nt]=t,r[kr]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<er.length;o++)U(er[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":$s(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":Fs(r,l),U("invalid",r)}zi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&qr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&qr(r.textContent,a,e),o=["children",""+a]):fr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":Hr(r),Is(r,l,!0);break;case"textarea":Hr(r),Ds(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_c(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[nt]=t,e[kr]=r,qf(e,t,!1,!1),t.stateNode=e;e:{switch(i=Mi(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<er.length;o++)U(er[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":$s(e,r),o=Ni(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),U("invalid",e);break;case"textarea":Fs(e,r),o=Pi(e,r),U("invalid",e);break;default:o=r}zi(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Oc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&dr(e,s):typeof s=="number"&&dr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(fr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&U("scroll",e):s!=null&&_a(e,l,s,i))}switch(n){case"input":Hr(e),Is(e,r,!1);break;case"textarea":Hr(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?wn(e,!!r.multiple,l,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Yt(Cr.current),Yt(ot.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(l=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return me(t),null;case 13:if(V(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Oe!==null&&t.mode&1&&!(t.flags&128))xf(),Pn(),t.flags|=98560,l=!1;else if(l=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[nt]=t}else Pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else Xe!==null&&(da(Xe),Xe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?oe===0&&(oe=3):us())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return zn(),oa(e,t),e===null&&yr(t.stateNode.containerInfo),me(t),null;case 10:return Qa(t.type._context),me(t),null;case 17:return Ee(t.type)&&To(),me(t),null;case 19:if(V(H),l=t.memoizedState,l===null)return me(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Xn(l,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Uo(e),i!==null){for(t.flags|=128,Xn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>Rn&&(t.flags|=128,r=!0,Xn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return me(t),null}else 2*G()-l.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,Xn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=H.current,B(H,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ym(e,t){switch(Ua(t),t.tag){case 1:return Ee(t.type)&&To(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),V(je),V(ve),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(V(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(H),null;case 4:return zn(),null;case 10:return Qa(t.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var ro=!1,ge=!1,wm=typeof WeakSet=="function"?WeakSet:Set,b=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){X(e,t,r)}}var bu=!1;function km(e,t){if(Ui=zo,e=of(),Aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var k;m!==n||o!==0&&m.nodeType!==3||(a=i+o),m!==l||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(k=m.firstChild)!==null;)g=m,m=k;for(;;){if(m===e)break t;if(g===n&&++c===o&&(a=i),g===l&&++h===r&&(s=i),(k=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vi={focusedElem:e,selectionRange:n},zo=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,C=y.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),C);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return y=bu,bu=!1,y}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&la(t,n,l)}o=o.next}while(o!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nd(e){var t=e.alternate;t!==null&&(e.alternate=null,nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[kr],delete t[Qi],delete t[rm],delete t[om])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lo));else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}var ue=null,Ye=!1;function vt(e,t,n){for(n=n.child;n!==null;)od(e,t,n),n=n.sibling}function od(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:ge||vn(n,t);case 6:var r=ue,o=Ye;ue=null,vt(e,t,n),ue=r,Ye=o,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?ii(e.parentNode,n):e.nodeType===1&&ii(e,n),gr(e)):ii(ue,n.stateNode));break;case 4:r=ue,o=Ye,ue=n.stateNode.containerInfo,Ye=!0,vt(e,t,n),ue=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&la(n,t,i),o=o.next}while(o!==r)}vt(e,t,n);break;case 1:if(!ge&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,vt(e,t,n),ge=r):vt(e,t,n);break;default:vt(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wm),t.forEach(function(r){var o=Om.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(S(160));od(l,i,o),ue=null,Ye=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}function ld(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Je(e),r&4){try{sr(3,e,e.return),cl(3,e)}catch(x){X(e,e.return,x)}try{sr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:He(t,e),Je(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(He(t,e),Je(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var o=e.stateNode;try{dr(o,"")}catch(x){X(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ec(o,l),Mi(a,i);var c=Mi(a,l);for(i=0;i<s.length;i+=2){var h=s[i],m=s[i+1];h==="style"?Oc(o,m):h==="dangerouslySetInnerHTML"?bc(o,m):h==="children"?dr(o,m):_a(o,h,m,c)}switch(a){case"input":_i(o,l);break;case"textarea":Nc(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?wn(o,!!l.multiple,k,!1):g!==!!l.multiple&&(l.defaultValue!=null?wn(o,!!l.multiple,l.defaultValue,!0):wn(o,!!l.multiple,l.multiple?[]:"",!1))}o[kr]=l}catch(x){X(e,e.return,x)}}break;case 6:if(He(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(x){X(e,e.return,x)}}break;case 3:if(He(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:He(t,e),Je(e);break;case 13:He(t,e),Je(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(is=G())),r&4&&Ou(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||h,He(t,e),ge=c):He(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(b=e,h=e.child;h!==null;){for(m=b=h;b!==null;){switch(g=b,k=g.child,g.tag){case 0:case 11:case 14:case 15:sr(4,g,g.return);break;case 1:vn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:vn(g,g.return);break;case 22:if(g.memoizedState!==null){Mu(m);continue}}k!==null?(k.return=g,b=k):Mu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Pc("display",i))}catch(x){X(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){X(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(t,e),Je(e),r&4&&Ou(e);break;case 21:break;default:He(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(dr(o,""),r.flags&=-33);var l=Pu(e);sa(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Pu(e);aa(e,a,i);break;default:throw Error(S(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e,t,n){b=e,id(e)}function id(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ro;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ge;a=ro;var c=ge;if(ro=i,(ge=s)&&!c)for(b=o;b!==null;)i=b,s=i.child,i.tag===22&&i.memoizedState!==null?Ru(o):s!==null?(s.return=i,b=s):Ru(o);for(;l!==null;)b=l,id(l),l=l.sibling;b=o,ro=a,ge=c}zu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,b=l):zu(e)}}function zu(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&mu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&gr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ge||t.flags&512&&ia(t)}catch(g){X(t,t.return,g)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Mu(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Ru(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){X(t,o,s)}}var l=t.return;try{ia(t)}catch(s){X(t,l,s)}break;case 5:var i=t.return;try{ia(t)}catch(s){X(t,i,s)}}}catch(s){X(t,t.return,s)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var Cm=Math.ceil,Ho=gt.ReactCurrentDispatcher,os=gt.ReactCurrentOwner,Ae=gt.ReactCurrentBatchConfig,T=0,ae=null,ee=null,fe=0,Pe=0,xn=Ft(0),oe=0,_r=null,qt=0,fl=0,ls=0,ur=null,Se=null,is=0,Rn=1/0,it=null,Qo=!1,ua=null,Ot=null,oo=!1,Ct=null,Yo=0,cr=0,ca=null,wo=-1,ko=0;function ye(){return T&6?G():wo!==-1?wo:wo=G()}function zt(e){return e.mode&1?T&2&&fe!==0?fe&-fe:im.transition!==null?(ko===0&&(ko=Uc()),ko):(e=F,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e):1}function Ze(e,t,n,r){if(50<cr)throw cr=0,ca=null,Error(S(185));Tr(e,n,r),(!(T&2)||e!==ae)&&(e===ae&&(!(T&2)&&(fl|=n),oe===4&&kt(e,fe)),Ne(e,r),n===1&&T===0&&!(t.mode&1)&&(Rn=G()+500,al&&Dt()))}function Ne(e,t){var n=e.callbackNode;ip(e,t);var r=Oo(e,e===ae?fe:0);if(r===0)n!==null&&Us(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Us(n),t===1)e.tag===0?lm(Lu.bind(null,e)):hf(Lu.bind(null,e)),tm(function(){!(T&6)&&Dt()}),n=null;else{switch(Vc(r)){case 1:n=Ma;break;case 4:n=Ac;break;case 16:n=Po;break;case 536870912:n=Bc;break;default:n=Po}n=md(n,ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ad(e,t){if(wo=-1,ko=0,T&6)throw Error(S(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=Oo(e,e===ae?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xo(e,r);else{t=r;var o=T;T|=2;var l=ud();(ae!==e||fe!==t)&&(it=null,Rn=G()+500,Xt(e,t));do try{Nm();break}catch(a){sd(e,a)}while(!0);Ha(),Ho.current=l,T=o,ee!==null?t=0:(ae=null,fe=0,t=oe)}if(t!==0){if(t===2&&(o=Ii(e),o!==0&&(r=o,t=fa(e,o))),t===1)throw n=_r,Xt(e,0),kt(e,r),Ne(e,G()),n;if(t===6)kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!jm(o)&&(t=Xo(e,r),t===2&&(l=Ii(e),l!==0&&(r=l,t=fa(e,l))),t===1))throw n=_r,Xt(e,0),kt(e,r),Ne(e,G()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Wt(e,Se,it);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=is+500-G(),10<t)){if(Oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hi(Wt.bind(null,e,Se,it),t);break}Wt(e,Se,it);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ke(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cm(r/1960))-r,10<r){e.timeoutHandle=Hi(Wt.bind(null,e,Se,it),r);break}Wt(e,Se,it);break;case 5:Wt(e,Se,it);break;default:throw Error(S(329))}}}return Ne(e,G()),e.callbackNode===n?ad.bind(null,e):null}function fa(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Xo(e,t),e!==2&&(t=Se,Se=n,t!==null&&da(t)),e}function da(e){Se===null?Se=e:Se.push.apply(Se,e)}function jm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ge(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~ls,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(T&6)throw Error(S(327));En();var t=Oo(e,0);if(!(t&1))return Ne(e,G()),null;var n=Xo(e,t);if(e.tag!==0&&n===2){var r=Ii(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=_r,Xt(e,0),kt(e,t),Ne(e,G()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Se,it),Ne(e,G()),null}function as(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(Rn=G()+500,al&&Dt())}}function en(e){Ct!==null&&Ct.tag===0&&!(T&6)&&En();var t=T;T|=1;var n=Ae.transition,r=F;try{if(Ae.transition=null,F=1,e)return e()}finally{F=r,Ae.transition=n,T=t,!(T&6)&&Dt()}}function ss(){Pe=xn.current,V(xn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,em(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ua(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&To();break;case 3:zn(),V(je),V(ve),Ga();break;case 5:Za(r);break;case 4:zn();break;case 13:V(H);break;case 19:V(H);break;case 10:Qa(r.type._context);break;case 22:case 23:ss()}n=n.return}if(ae=e,ee=e=Mt(e.current,null),fe=Pe=t,oe=0,_r=null,ls=fl=qt=0,Se=ur=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Qt=null}return e}function sd(e,t){do{var n=ee;try{if(Ha(),vo.current=Wo,Vo){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vo=!1}if(Jt=0,ie=re=Q=null,ar=!1,jr=0,os.current=null,n===null||n.return===null){oe=1,_r=t,ee=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=ku(i);if(k!==null){k.flags&=-257,Su(k,i,a,l,t),k.mode&1&&wu(l,c,t),t=k,s=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(s),t.updateQueue=x}else y.add(s);break e}else{if(!(t&1)){wu(l,c,t),us();break e}s=Error(S(426))}}else if(W&&a.mode&1){var C=ku(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Su(C,i,a,l,t),Va(Mn(s,a));break e}}l=s=Mn(s,a),oe!==4&&(oe=2),ur===null?ur=[l]:ur.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Hf(l,s,t);pu(l,d);break e;case 1:a=s;var f=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Qf(l,a,t);pu(l,w);break e}}l=l.return}while(l!==null)}fd(n)}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function ud(){var e=Ho.current;return Ho.current=Wo,e===null?Wo:e}function us(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(qt&268435455)&&!(fl&268435455)||kt(ae,fe)}function Xo(e,t){var n=T;T|=2;var r=ud();(ae!==e||fe!==t)&&(it=null,Xt(e,t));do try{Em();break}catch(o){sd(e,o)}while(!0);if(Ha(),T=n,Ho.current=r,ee!==null)throw Error(S(261));return ae=null,fe=0,oe}function Em(){for(;ee!==null;)cd(ee)}function Nm(){for(;ee!==null&&!G0();)cd(ee)}function cd(e){var t=pd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?fd(e):ee=t,os.current=null}function fd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ym(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ee=null;return}}else if(n=xm(n,t,Pe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);oe===0&&(oe=5)}function Wt(e,t,n){var r=F,o=Ae.transition;try{Ae.transition=null,F=1,_m(e,t,n,r)}finally{Ae.transition=o,F=r}return null}function _m(e,t,n,r){do En();while(Ct!==null);if(T&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ap(e,l),e===ae&&(ee=ae=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,md(Po,function(){return En(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ae.transition,Ae.transition=null;var i=F;F=1;var a=T;T|=4,os.current=null,km(e,n),ld(n,e),Yp(Vi),zo=!!Ui,Vi=Ui=null,e.current=n,Sm(n),J0(),T=a,F=i,Ae.transition=l}else e.current=n;if(oo&&(oo=!1,Ct=e,Yo=o),l=e.pendingLanes,l===0&&(Ot=null),tp(n.stateNode),Ne(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=ua,ua=null,e;return Yo&1&&e.tag!==0&&En(),l=e.pendingLanes,l&1?e===ca?cr++:(cr=0,ca=e):cr=0,Dt(),null}function En(){if(Ct!==null){var e=Vc(Yo),t=Ae.transition,n=F;try{if(Ae.transition=null,F=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Yo=0,T&6)throw Error(S(331));var o=T;for(T|=4,b=e.current;b!==null;){var l=b,i=l.child;if(b.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(b=c;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:sr(8,h,l)}var m=h.child;if(m!==null)m.return=h,b=m;else for(;b!==null;){h=b;var g=h.sibling,k=h.return;if(nd(h),h===c){b=null;break}if(g!==null){g.return=k,b=g;break}b=k}}}var y=l.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}b=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,b=i;else e:for(;b!==null;){if(l=b,l.flags&2048)switch(l.tag){case 0:case 11:case 15:sr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,b=d;break e}b=l.return}}var f=e.current;for(b=f;b!==null;){i=b;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,b=p;else e:for(i=f;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(E){X(a,a.return,E)}if(a===i){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(T=o,Dt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{F=n,Ae.transition=t}}return!1}function Tu(e,t,n){t=Mn(n,t),t=Hf(e,t,1),e=Pt(e,t,1),t=ye(),e!==null&&(Tr(e,1,t),Ne(e,t))}function X(e,t,n){if(e.tag===3)Tu(e,e,n);else for(;t!==null;){if(t.tag===3){Tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Mn(n,e),e=Qf(t,e,1),t=Pt(t,e,1),e=ye(),t!==null&&(Tr(t,1,e),Ne(t,e));break}}t=t.return}}function bm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(fe&n)===n&&(oe===4||oe===3&&(fe&130023424)===fe&&500>G()-is?Xt(e,0):ls|=n),Ne(e,t)}function dd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=ye();e=mt(e,t),e!==null&&(Tr(e,t,n),Ne(e,n))}function Pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dd(e,n)}function Om(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),dd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,vm(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,W&&t.flags&1048576&&gf(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yo(e,t),e=t.pendingProps;var o=bn(t,ve.current);jn(t,n),o=qa(null,t,r,e,o,n);var l=es();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(l=!0,$o(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xa(t),o.updater=sl,t.stateNode=o,o._reactInternals=t,Ji(t,r,e,n),t=ta(null,t,r,!0,l,n)):(t.tag=0,W&&l&&Ba(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Mm(r),e=Qe(r,e),o){case 0:t=ea(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=Cu(null,t,r,e,n);break e;case 14:t=ju(null,t,r,Qe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ea(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Eu(e,t,r,o,n);case 3:e:{if(Zf(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,wf(e,t),Bo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Mn(Error(S(423)),t),t=Nu(e,t,r,n,o);break e}else if(r!==o){o=Mn(Error(S(424)),t),t=Nu(e,t,r,n,o);break e}else for(Oe=bt(t.stateNode.containerInfo.firstChild),ze=t,W=!0,Xe=null,n=jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),r===o){t=ht(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Ef(t),e===null&&Ki(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Wi(r,o)?i=null:l!==null&&Wi(r,l)&&(t.flags|=32),Kf(e,t),xe(e,t,i,n),t.child;case 6:return e===null&&Ki(t),null;case 13:return Gf(e,t,n);case 4:return Ka(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Cu(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,B(Do,r._currentValue),r._currentValue=i,l!==null)if(Ge(l.value,i)){if(l.children===o.children&&!je.current){t=ht(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ft(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Zi(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Zi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jn(t,n),o=Be(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),ju(e,t,r,o,n);case 15:return Yf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),yo(e,t),t.tag=1,Ee(r)?(e=!0,$o(t)):e=!1,jn(t,n),Sf(t,r,o),Ji(t,r,o,n),ta(null,t,r,!0,e,n);case 19:return Jf(e,t,n);case 22:return Xf(e,t,n)}throw Error(S(156,t.tag))};function md(e,t){return Dc(e,t)}function zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new zm(e,t,n,r)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mm(e){if(typeof e=="function")return cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===Oa)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")cs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case sn:return Kt(n.children,o,l,t);case ba:i=8,o|=8;break;case Si:return e=De(12,n,t,o|2),e.elementType=Si,e.lanes=l,e;case Ci:return e=De(13,n,t,o),e.elementType=Ci,e.lanes=l,e;case ji:return e=De(19,n,t,o),e.elementType=ji,e.lanes=l,e;case Sc:return dl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wc:i=10;break e;case kc:i=9;break e;case Pa:i=11;break e;case Oa:i=14;break e;case xt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Kt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=De(22,e,r,t),e.elementType=Sc,e.lanes=n,e.stateNode={isHidden:!1},e}function mi(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function hi(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,o,l,i,a,s){return e=new Rm(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=De(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(l),e}function Lm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hd(e){if(!e)return $t;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return mf(e,n,t)}return t}function gd(e,t,n,r,o,l,i,a,s){return e=fs(n,r,!0,e,o,l,i,a,s),e.context=hd(null),n=e.current,r=ye(),o=zt(n),l=ft(r,o),l.callback=t??null,Pt(n,l,o),e.current.lanes=o,Tr(e,o,r),Ne(e,r),e}function pl(e,t,n,r){var o=t.current,l=ye(),i=zt(o);return n=hd(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(o,t,i),e!==null&&(Ze(e,o,i,l),go(e,o,i)),i}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ds(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function Tm(){return null}var vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ps(e){this._internalRoot=e}ml.prototype.render=ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));pl(e,t,null,null)};ml.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){pl(null,e,null,null)}),t[pt]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Xc(e)}};function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function $m(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Ko(i);l.call(c)}}var i=gd(t,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=i,e[pt]=i.current,yr(e.nodeType===8?e.parentNode:e),en(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ko(s);a.call(c)}}var s=fs(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=s,e[pt]=s.current,yr(e.nodeType===8?e.parentNode:e),en(function(){pl(t,s,n,r)}),s}function gl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Ko(i);a.call(s)}}pl(t,i,e,o)}else i=$m(n,t,e,o,r);return Ko(i)}Wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(Ra(t,n|1),Ne(t,G()),!(T&6)&&(Rn=G()+500,Dt()))}break;case 13:en(function(){var r=mt(e,1);if(r!==null){var o=ye();Ze(r,e,1,o)}}),ds(e,1)}};La=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=ye();Ze(t,e,134217728,n)}ds(e,134217728)}};Hc=function(e){if(e.tag===13){var t=zt(e),n=mt(e,t);if(n!==null){var r=ye();Ze(n,e,t,r)}ds(e,t)}};Qc=function(){return F};Yc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Li=function(e,t,n){switch(t){case"input":if(_i(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=il(r);if(!o)throw Error(S(90));jc(r),_i(r,o)}}}break;case"textarea":Nc(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Rc=as;Lc=en;var Im={usingClientEntryPoint:!1,Events:[Ir,dn,il,zc,Mc,as]},Kn={findFiberByHostInstance:Ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fm={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{nl=lo.inject(Fm),rt=lo}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ms(t))throw Error(S(200));return Lm(e,t,null,n)};Le.createRoot=function(e,t){if(!ms(e))throw Error(S(299));var n=!1,r="",o=vd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,o),e[pt]=t.current,yr(e.nodeType===8?e.parentNode:e),new ps(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Ic(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return en(e)};Le.hydrate=function(e,t,n){if(!hl(t))throw Error(S(200));return gl(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!ms(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=vd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=gd(t,null,e,1,n??null,o,!1,l,i),e[pt]=t.current,yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ml(t)};Le.render=function(e,t,n){if(!hl(t))throw Error(S(200));return gl(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!hl(e))throw Error(S(40));return e._reactRootContainer?(en(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Le.unstable_batchedUpdates=as;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return gl(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd)}catch(e){console.error(e)}}xd(),hc.exports=Le;var Dm=hc.exports,Fu=Dm;wi.createRoot=Fu.createRoot,wi.hydrateRoot=Fu.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const Du="popstate";function Am(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return pa("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Zo(o)}return Um(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bm(){return Math.random().toString(36).substr(2,8)}function Au(e,t){return{usr:e.state,key:e.key,idx:t}}function pa(e,t,n,r){return n===void 0&&(n=null),br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fn(t):t,{state:n,key:t&&t.key||r||Bm()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Um(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=jt.Pop,s=null,c=h();c==null&&(c=0,i.replaceState(br({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function m(){a=jt.Pop;let C=h(),d=C==null?null:C-c;c=C,s&&s({action:a,location:x.location,delta:d})}function g(C,d){a=jt.Push;let f=pa(x.location,C,d);n&&n(f,C),c=h()+1;let p=Au(f,c),w=x.createHref(f);try{i.pushState(p,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(w)}l&&s&&s({action:a,location:x.location,delta:1})}function k(C,d){a=jt.Replace;let f=pa(x.location,C,d);n&&n(f,C),c=h();let p=Au(f,c),w=x.createHref(f);i.replaceState(p,"",w),l&&s&&s({action:a,location:x.location,delta:0})}function y(C){let d=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof C=="string"?C:Zo(C);return f=f.replace(/ $/,"%20"),te(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let x={get action(){return a},get location(){return e(o,i)},listen(C){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Du,m),s=C,()=>{o.removeEventListener(Du,m),s=null}},createHref(C){return t(o,C)},createURL:y,encodeLocation(C){let d=y(C);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:k,go(C){return i.go(C)}};return x}var Bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bu||(Bu={}));function Vm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fn(t):t,o=hs(r.pathname||"/",n);if(o==null)return null;let l=wd(e);Wm(l);let i=null;for(let a=0;i==null&&a<l.length;++a){let s=nh(o);i=qm(l[a],s)}return i}function wd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Rt([r,s.relativePath]),h=n.concat(s);l.children&&l.children.length>0&&(te(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wd(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Gm(c,l.index),routesMeta:h})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of kd(l.path))o(l,i,s)}),t}function kd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=kd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Wm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hm=/^:[\w-]+$/,Qm=3,Ym=2,Xm=1,Km=10,Zm=-2,Uu=e=>e==="*";function Gm(e,t){let n=e.split("/"),r=n.length;return n.some(Uu)&&(r+=Zm),t&&(r+=Ym),n.filter(o=>!Uu(o)).reduce((o,l)=>o+(Hm.test(l)?Qm:l===""?Xm:Km),r)}function Jm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function qm(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",h=eh({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let m=a.route;l.push({params:r,pathname:Rt([o,h.pathname]),pathnameBase:ih(Rt([o,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(o=Rt([o,h.pathnameBase]))}return l}function eh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=th(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:k}=h;if(g==="*"){let x=a[m]||"";i=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[m];return k&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function th(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function nh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Fn(e):e;return{pathname:n?n.startsWith("/")?n:oh(n,t):t,search:ah(r),hash:sh(o)}}function oh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sd(e,t){let n=lh(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Fn(e):(o=br({},e),te(!o.pathname||!o.pathname.includes("?"),gi("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),gi("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),gi("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let m=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}a=m>=0?t[m]:"/"}let s=rh(o,a),c=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const Rt=e=>e.join("/").replace(/\/\/+/g,"/"),ih=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ah=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jd=["post","put","patch","delete"];new Set(jd);const ch=["get",...jd];new Set(ch);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pr.apply(this,arguments)}const gs=v.createContext(null),fh=v.createContext(null),rn=v.createContext(null),vl=v.createContext(null),on=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Ed=v.createContext(null);function dh(e,t){let{relative:n}=t===void 0?{}:t;Dr()||te(!1);let{basename:r,navigator:o}=v.useContext(rn),{hash:l,pathname:i,search:a}=_d(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:Rt([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Dr(){return v.useContext(vl)!=null}function At(){return Dr()||te(!1),v.useContext(vl).location}function Nd(e){v.useContext(rn).static||v.useLayoutEffect(e)}function ph(){let{isDataRoute:e}=v.useContext(on);return e?Nh():mh()}function mh(){Dr()||te(!1);let e=v.useContext(gs),{basename:t,future:n,navigator:r}=v.useContext(rn),{matches:o}=v.useContext(on),{pathname:l}=At(),i=JSON.stringify(Sd(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return Nd(()=>{a.current=!0}),v.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=Cd(c,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Rt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,i,l,e])}function _d(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(rn),{matches:o}=v.useContext(on),{pathname:l}=At(),i=JSON.stringify(Sd(o,r.v7_relativeSplatPath));return v.useMemo(()=>Cd(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function hh(e,t){return gh(e,t)}function gh(e,t,n,r){Dr()||te(!1);let{navigator:o}=v.useContext(rn),{matches:l}=v.useContext(on),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=At(),h;if(t){var m;let C=typeof t=="string"?Fn(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||te(!1),h=C}else h=c;let g=h.pathname||"/",k=g;if(s!=="/"){let C=s.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Vm(e,{pathname:k}),x=kh(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Rt([s,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Rt([s,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,r);return t&&x?v.createElement(vl.Provider,{value:{location:Pr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:jt.Pop}},x):x}function vh(){let e=Eh(),t=uh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const xh=v.createElement(vh,null);class yh extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(on.Provider,{value:this.props.routeContext},v.createElement(Ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wh(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(gs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(on.Provider,{value:t},r)}function kh(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let h=i.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id]));h>=0||te(!1),i=i.slice(0,Math.min(i.length,h+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let m=i[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:k}=n,y=m.route.loader&&g[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||y){s=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,m,g)=>{let k,y=!1,x=null,C=null;n&&(k=a&&m.route.id?a[m.route.id]:void 0,x=m.route.errorElement||xh,s&&(c<0&&g===0?(_h("route-fallback",!1),y=!0,C=null):c===g&&(y=!0,C=m.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,g+1)),f=()=>{let p;return k?p=x:y?p=C:m.route.Component?p=v.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,v.createElement(wh,{match:m,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?v.createElement(yh,{location:n.location,revalidation:n.revalidation,component:x,error:k,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var bd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bd||{}),Go=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Go||{});function Sh(e){let t=v.useContext(gs);return t||te(!1),t}function Ch(e){let t=v.useContext(fh);return t||te(!1),t}function jh(e){let t=v.useContext(on);return t||te(!1),t}function Pd(e){let t=jh(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Eh(){var e;let t=v.useContext(Ed),n=Ch(Go.UseRouteError),r=Pd(Go.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Nh(){let{router:e}=Sh(bd.UseNavigateStable),t=Pd(Go.UseNavigateStable),n=v.useRef(!1);return Nd(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Pr({fromRouteId:t},l)))},[e,t])}const Vu={};function _h(e,t,n){!t&&!Vu[e]&&(Vu[e]=!0)}function tr(e){te(!1)}function bh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=jt.Pop,navigator:l,static:i=!1,future:a}=e;Dr()&&te(!1);let s=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:l,static:i,future:Pr({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Fn(r));let{pathname:h="/",search:m="",hash:g="",state:k=null,key:y="default"}=r,x=v.useMemo(()=>{let C=hs(h,s);return C==null?null:{location:{pathname:C,search:m,hash:g,state:k,key:y},navigationType:o}},[s,h,m,g,k,y,o]);return x==null?null:v.createElement(rn.Provider,{value:c},v.createElement(vl.Provider,{children:n,value:x}))}function Ph(e){let{children:t,location:n}=e;return hh(ma(t),n)}new Promise(()=>{});function ma(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,ma(r.props.children,l));return}r.type!==tr&&te(!1),!r.props.index||!r.props.children||te(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ma(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}function Oh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function zh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mh(e,t){return e.button===0&&(!t||t==="_self")&&!zh(e)}const Rh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Lh="6";try{window.__reactRouterVersion=Lh}catch{}const Th="startTransition",Wu=yi[Th];function $h(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=Am({window:o,v5Compat:!0}));let i=l.current,[a,s]=v.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},h=v.useCallback(m=>{c&&Wu?Wu(()=>s(m)):s(m)},[s,c]);return v.useLayoutEffect(()=>i.listen(h),[i,h]),v.createElement(bh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const Ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=Oh(t,Rh),{basename:k}=v.useContext(rn),y,x=!1;if(typeof c=="string"&&Fh.test(c)&&(y=c,Ih))try{let p=new URL(window.location.href),w=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=hs(w.pathname,k);w.origin===p.origin&&E!=null?c=E+w.search+w.hash:x=!0}catch{}let C=dh(c,{relative:o}),d=Dh(c,{replace:i,state:a,target:s,preventScrollReset:h,relative:o,unstable_viewTransition:m});function f(p){r&&r(p),p.defaultPrevented||d(p)}return v.createElement("a",ha({},g,{href:y||C,onClick:x||l?r:f,ref:n,target:s}))});var Hu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hu||(Hu={}));var Qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qu||(Qu={}));function Dh(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a}=t===void 0?{}:t,s=ph(),c=At(),h=_d(e,{relative:i});return v.useCallback(m=>{if(Mh(m,n)){m.preventDefault();let g=r!==void 0?r:Zo(c)===Zo(h);s(e,{replace:g,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a})}},[c,s,h,r,o,n,e,l,i,a])}function Ah(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Bh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Uh=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Bh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Ah(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",Jo="-moz-",$="-webkit-",Od="comm",vs="rule",xs="decl",Vh="@import",zd="@keyframes",Wh="@layer",Hh=Math.abs,xl=String.fromCharCode,Qh=Object.assign;function Yh(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Md(e){return e.trim()}function Xh(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function ga(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function et(e){return e.length}function ys(e){return e.length}function io(e,t){return t.push(e),e}function Kh(e,t){return e.map(t).join("")}var yl=1,Ln=1,Rd=0,_e=0,q=0,Dn="";function wl(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:yl,column:Ln,length:i,return:""}}function Zn(e,t){return Qh(wl("",null,null,"",null,null,0),e,{length:-e.length},t)}function Zh(){return q}function Gh(){return q=_e>0?ce(Dn,--_e):0,Ln--,q===10&&(Ln=1,yl--),q}function Me(){return q=_e<Rd?ce(Dn,_e++):0,Ln++,q===10&&(Ln=1,yl++),q}function lt(){return ce(Dn,_e)}function Co(){return _e}function Ar(e,t){return Or(Dn,e,t)}function zr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ld(e){return yl=Ln=1,Rd=et(Dn=e),_e=0,[]}function Td(e){return Dn="",e}function jo(e){return Md(Ar(_e-1,va(e===91?e+2:e===40?e+1:e)))}function Jh(e){for(;(q=lt())&&q<33;)Me();return zr(e)>2||zr(q)>3?"":" "}function qh(e,t){for(;--t&&Me()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Ar(e,Co()+(t<6&&lt()==32&&Me()==32))}function va(e){for(;Me();)switch(q){case e:return _e;case 34:case 39:e!==34&&e!==39&&va(q);break;case 40:e===41&&va(e);break;case 92:Me();break}return _e}function e1(e,t){for(;Me()&&e+q!==57;)if(e+q===84&&lt()===47)break;return"/*"+Ar(t,_e-1)+"*"+xl(e===47?e:Me())}function t1(e){for(;!zr(lt());)Me();return Ar(e,_e)}function n1(e){return Td(Eo("",null,null,null,[""],e=Ld(e),0,[0],e))}function Eo(e,t,n,r,o,l,i,a,s){for(var c=0,h=0,m=i,g=0,k=0,y=0,x=1,C=1,d=1,f=0,p="",w=o,E=l,_=r,N=p;C;)switch(y=f,f=Me()){case 40:if(y!=108&&ce(N,m-1)==58){ga(N+=I(jo(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:N+=jo(f);break;case 9:case 10:case 13:case 32:N+=Jh(y);break;case 92:N+=qh(Co()-1,7);continue;case 47:switch(lt()){case 42:case 47:io(r1(e1(Me(),Co()),t,n),s);break;default:N+="/"}break;case 123*x:a[c++]=et(N)*d;case 125*x:case 59:case 0:switch(f){case 0:case 125:C=0;case 59+h:d==-1&&(N=I(N,/\f/g,"")),k>0&&et(N)-m&&io(k>32?Xu(N+";",r,n,m-1):Xu(I(N," ","")+";",r,n,m-2),s);break;case 59:N+=";";default:if(io(_=Yu(N,t,n,c,h,o,a,p,w=[],E=[],m),l),f===123)if(h===0)Eo(N,t,_,_,w,l,m,a,E);else switch(g===99&&ce(N,3)===110?100:g){case 100:case 108:case 109:case 115:Eo(e,_,_,r&&io(Yu(e,_,_,0,0,o,a,p,o,w=[],m),E),o,E,m,a,r?w:E);break;default:Eo(N,_,_,_,[""],E,0,a,E)}}c=h=k=0,x=d=1,p=N="",m=i;break;case 58:m=1+et(N),k=y;default:if(x<1){if(f==123)--x;else if(f==125&&x++==0&&Gh()==125)continue}switch(N+=xl(f),f*x){case 38:d=h>0?1:(N+="\f",-1);break;case 44:a[c++]=(et(N)-1)*d,d=1;break;case 64:lt()===45&&(N+=jo(Me())),g=lt(),h=m=et(p=N+=t1(Co())),f++;break;case 45:y===45&&et(N)==2&&(x=0)}}return l}function Yu(e,t,n,r,o,l,i,a,s,c,h){for(var m=o-1,g=o===0?l:[""],k=ys(g),y=0,x=0,C=0;y<r;++y)for(var d=0,f=Or(e,m+1,m=Hh(x=i[y])),p=e;d<k;++d)(p=Md(x>0?g[d]+" "+f:I(f,/&\f/g,g[d])))&&(s[C++]=p);return wl(e,t,n,o===0?vs:a,s,c,h)}function r1(e,t,n){return wl(e,t,n,Od,xl(Zh()),Or(e,2,-2),0)}function Xu(e,t,n,r){return wl(e,t,n,xs,Or(e,0,r),Or(e,r+1,-1),r)}function Nn(e,t){for(var n="",r=ys(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function o1(e,t,n,r){switch(e.type){case Wh:if(e.children.length)break;case Vh:case xs:return e.return=e.return||e.value;case Od:return"";case zd:return e.return=e.value+"{"+Nn(e.children,r)+"}";case vs:e.value=e.props.join(",")}return et(n=Nn(e.children,r))?e.return=e.value+"{"+n+"}":""}function l1(e){var t=ys(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function i1(e){return function(t){t.root||(t=t.return)&&e(t)}}function a1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var s1=function(t,n,r){for(var o=0,l=0;o=l,l=lt(),o===38&&l===12&&(n[r]=1),!zr(l);)Me();return Ar(t,_e)},u1=function(t,n){var r=-1,o=44;do switch(zr(o)){case 0:o===38&&lt()===12&&(n[r]=1),t[r]+=s1(_e-1,n,r);break;case 2:t[r]+=jo(o);break;case 4:if(o===44){t[++r]=lt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=xl(o)}while(o=Me());return t},c1=function(t,n){return Td(u1(Ld(t),n))},Ku=new WeakMap,f1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ku.get(r))&&!o){Ku.set(t,!0);for(var l=[],i=c1(n,l),a=r.props,s=0,c=0;s<i.length;s++)for(var h=0;h<a.length;h++,c++)t.props[c]=l[s]?i[s].replace(/&\f/g,a[h]):a[h]+" "+i[s]}}},d1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function $d(e,t){switch(Yh(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Jo+e+he+e+e;case 6828:case 4268:return $+e+he+e+e;case 6165:return $+e+he+"flex-"+e+e;case 5187:return $+e+I(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return $+e+he+"flex-item-"+I(e,/flex-|-self/,"")+e;case 4675:return $+e+he+"flex-line-pack"+I(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+he+I(e,"shrink","negative")+e;case 5292:return $+e+he+I(e,"basis","preferred-size")+e;case 6060:return $+"box-"+I(e,"-grow","")+$+e+he+I(e,"grow","positive")+e;case 4554:return $+I(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Jo+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ga(e,"stretch")?$d(I(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,et(e)-3-(~ga(e,"!important")&&10))){case 107:return I(e,":",":"+$)+e;case 101:return I(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ce(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return $+e+he+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+he+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+he+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+he+e+e}return e}var p1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case xs:t.return=$d(t.value,t.length);break;case zd:return Nn([Zn(t,{value:I(t.value,"@","@"+$)})],o);case vs:if(t.length)return Kh(t.props,function(l){switch(Xh(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Nn([Zn(t,{props:[I(l,/:(read-\w+)/,":"+Jo+"$1")]})],o);case"::placeholder":return Nn([Zn(t,{props:[I(l,/:(plac\w+)/,":"+$+"input-$1")]}),Zn(t,{props:[I(l,/:(plac\w+)/,":"+Jo+"$1")]}),Zn(t,{props:[I(l,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},m1=[p1],h1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var C=x.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var o=t.stylisPlugins||m1,l={},i,a=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var C=x.getAttribute("data-emotion").split(" "),d=1;d<C.length;d++)l[C[d]]=!0;a.push(x)});var s,c=[f1,d1];{var h,m=[o1,i1(function(x){h.insert(x)})],g=l1(c.concat(o,m)),k=function(C){return Nn(n1(C),g)};s=function(C,d,f,p){h=f,k(C?C+"{"+d.styles+"}":d.styles),p&&(y.inserted[d.name]=!0)}}var y={key:n,sheet:new Uh({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:s};return y.sheet.hydrate(a),y},Id={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,ws=se?Symbol.for("react.element"):60103,ks=se?Symbol.for("react.portal"):60106,kl=se?Symbol.for("react.fragment"):60107,Sl=se?Symbol.for("react.strict_mode"):60108,Cl=se?Symbol.for("react.profiler"):60114,jl=se?Symbol.for("react.provider"):60109,El=se?Symbol.for("react.context"):60110,Ss=se?Symbol.for("react.async_mode"):60111,Nl=se?Symbol.for("react.concurrent_mode"):60111,_l=se?Symbol.for("react.forward_ref"):60112,bl=se?Symbol.for("react.suspense"):60113,g1=se?Symbol.for("react.suspense_list"):60120,Pl=se?Symbol.for("react.memo"):60115,Ol=se?Symbol.for("react.lazy"):60116,v1=se?Symbol.for("react.block"):60121,x1=se?Symbol.for("react.fundamental"):60117,y1=se?Symbol.for("react.responder"):60118,w1=se?Symbol.for("react.scope"):60119;function $e(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ws:switch(e=e.type,e){case Ss:case Nl:case kl:case Cl:case Sl:case bl:return e;default:switch(e=e&&e.$$typeof,e){case El:case _l:case Ol:case Pl:case jl:return e;default:return t}}case ks:return t}}}function Fd(e){return $e(e)===Nl}D.AsyncMode=Ss;D.ConcurrentMode=Nl;D.ContextConsumer=El;D.ContextProvider=jl;D.Element=ws;D.ForwardRef=_l;D.Fragment=kl;D.Lazy=Ol;D.Memo=Pl;D.Portal=ks;D.Profiler=Cl;D.StrictMode=Sl;D.Suspense=bl;D.isAsyncMode=function(e){return Fd(e)||$e(e)===Ss};D.isConcurrentMode=Fd;D.isContextConsumer=function(e){return $e(e)===El};D.isContextProvider=function(e){return $e(e)===jl};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ws};D.isForwardRef=function(e){return $e(e)===_l};D.isFragment=function(e){return $e(e)===kl};D.isLazy=function(e){return $e(e)===Ol};D.isMemo=function(e){return $e(e)===Pl};D.isPortal=function(e){return $e(e)===ks};D.isProfiler=function(e){return $e(e)===Cl};D.isStrictMode=function(e){return $e(e)===Sl};D.isSuspense=function(e){return $e(e)===bl};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kl||e===Nl||e===Cl||e===Sl||e===bl||e===g1||typeof e=="object"&&e!==null&&(e.$$typeof===Ol||e.$$typeof===Pl||e.$$typeof===jl||e.$$typeof===El||e.$$typeof===_l||e.$$typeof===x1||e.$$typeof===y1||e.$$typeof===w1||e.$$typeof===v1)};D.typeOf=$e;Id.exports=D;var k1=Id.exports,Dd=k1,S1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ad={};Ad[Dd.ForwardRef]=S1;Ad[Dd.Memo]=C1;var j1=!0;function Bd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Cs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||j1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Ud=function(t,n,r){Cs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function E1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var N1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_1=/[A-Z]|^ms/g,b1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Vd=function(t){return t.charCodeAt(1)===45},Zu=function(t){return t!=null&&typeof t!="boolean"},vi=a1(function(e){return Vd(e)?e:e.replace(_1,"-$&").toLowerCase()}),Gu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(b1,function(r,o,l){return tt={name:o,styles:l,next:tt},o})}return N1[t]!==1&&!Vd(t)&&typeof n=="number"&&n!==0?n+"px":n};function Mr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return tt={name:n.name,styles:n.styles,next:tt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)tt={name:r.name,styles:r.styles,next:tt},r=r.next;var o=n.styles+";";return o}return P1(e,t,n)}case"function":{if(e!==void 0){var l=tt,i=n(e);return tt=l,Mr(e,t,i)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function P1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Mr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":Zu(i)&&(r+=vi(l)+":"+Gu(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)Zu(i[a])&&(r+=vi(l)+":"+Gu(l,i[a])+";");else{var s=Mr(e,t,i);switch(l){case"animation":case"animationName":{r+=vi(l)+":"+s+";";break}default:r+=l+"{"+s+"}"}}}return r}var Ju=/label:\s*([^\s;\n{]+)\s*(;|$)/g,tt,js=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";tt=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=Mr(r,n,i)):l+=i[0];for(var a=1;a<t.length;a++)l+=Mr(r,n,t[a]),o&&(l+=i[a]);Ju.lastIndex=0;for(var s="",c;(c=Ju.exec(l))!==null;)s+="-"+c[1];var h=E1(l)+s;return{name:h,styles:l,next:tt}},O1=function(t){return t()},z1=yi.useInsertionEffect?yi.useInsertionEffect:!1,Wd=z1||O1,Es={}.hasOwnProperty,Hd=v.createContext(typeof HTMLElement<"u"?h1({key:"css"}):null);Hd.Provider;var Qd=function(t){return v.forwardRef(function(n,r){var o=v.useContext(Hd);return t(n,o,r)})},Yd=v.createContext({}),xa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",M1=function(t,n){var r={};for(var o in n)Es.call(n,o)&&(r[o]=n[o]);return r[xa]=t,r},R1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Cs(n,r,o),Wd(function(){return Ud(n,r,o)}),null},L1=Qd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[xa],l=[r],i="";typeof e.className=="string"?i=Bd(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var a=js(l,void 0,v.useContext(Yd));i+=t.key+"-"+a.name;var s={};for(var c in e)Es.call(e,c)&&c!=="css"&&c!==xa&&(s[c]=e[c]);return s.ref=n,s.className=i,v.createElement(v.Fragment,null,v.createElement(R1,{cache:t,serialized:a,isStringTag:typeof o=="string"}),v.createElement(o,s))}),T1=L1,$1=u.Fragment;function ne(e,t,n){return Es.call(t,"css")?u.jsx(T1,M1(e,t),n):u.jsx(e,t,n)}function Xd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return js(t)}var j=function(){var t=Xd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},I1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var a in l)l[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function F1(e,t,n){var r=[],o=Bd(e,r,n);return r.length<2?n:o+t(r)}var D1=function(t){var n=t.cache,r=t.serializedArr;return Wd(function(){for(var o=0;o<r.length;o++)Ud(n,r[o],!1)}),null},xi=Qd(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];var g=js(h,t.registered);return r.push(g),Cs(t,g,!1),t.key+"-"+g.name},l=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];return F1(t.registered,o,I1(h))},i={css:o,cx:l,theme:v.useContext(Yd)},a=e.children(i);return n=!0,v.createElement(v.Fragment,null,v.createElement(D1,{cache:t,serializedArr:r}),a)}),A1=Object.defineProperty,B1=(e,t,n)=>t in e?A1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ao=(e,t,n)=>(B1(e,typeof t!="symbol"?t+"":t,n),n),ya=new Map,so=new WeakMap,qu=0,U1=void 0;function V1(e){return e?(so.has(e)||(qu+=1,so.set(e,qu.toString())),so.get(e)):"0"}function W1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?V1(e.root):e[t]}`).toString()}function H1(e){const t=W1(e);let n=ya.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(a=>{var s;const c=a.isIntersecting&&o.some(h=>a.intersectionRatio>=h);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(h=>{h(c,a)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},ya.set(t,n)}return n}function Kd(e,t,n={},r=U1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:l,elements:i}=H1(n),a=i.get(e)||[];return i.has(e)||i.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),ya.delete(o))}}function Q1(e){return typeof e.children!="function"}var ec=class extends v.Component{constructor(e){super(e),ao(this,"node",null),ao(this,"_unobserveCb",null),ao(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ao(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Q1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=Kd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:k,entry:y}=this.state;return e({inView:k,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:a,trackVisibility:s,delay:c,initialInView:h,fallbackInView:m,...g}=this.props;return v.createElement(t||"div",{ref:this.handleNode,...g},e)}};function Zd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:a,fallbackInView:s,onChange:c}={}){var h;const[m,g]=v.useState(null),k=v.useRef(),[y,x]=v.useState({inView:!!a,entry:void 0});k.current=c,v.useEffect(()=>{if(i||!m)return;let p;return p=Kd(m,(w,E)=>{x({inView:w,entry:E}),k.current&&k.current(w,E),E.isIntersecting&&l&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,s,t]);const C=(h=y.entry)==null?void 0:h.target,d=v.useRef();!m&&C&&!l&&!i&&d.current!==C&&(d.current=C,x({inView:!!a,entry:void 0}));const f=[g,y.inView,y.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var Gd={exports:{}},A={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),_s=Symbol.for("react.portal"),zl=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Ll=Symbol.for("react.provider"),Tl=Symbol.for("react.context"),Y1=Symbol.for("react.server_context"),$l=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),Dl=Symbol.for("react.memo"),Al=Symbol.for("react.lazy"),X1=Symbol.for("react.offscreen"),Jd;Jd=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ns:switch(e=e.type,e){case zl:case Rl:case Ml:case Il:case Fl:return e;default:switch(e=e&&e.$$typeof,e){case Y1:case Tl:case $l:case Al:case Dl:case Ll:return e;default:return t}}case _s:return t}}}A.ContextConsumer=Tl;A.ContextProvider=Ll;A.Element=Ns;A.ForwardRef=$l;A.Fragment=zl;A.Lazy=Al;A.Memo=Dl;A.Portal=_s;A.Profiler=Rl;A.StrictMode=Ml;A.Suspense=Il;A.SuspenseList=Fl;A.isAsyncMode=function(){return!1};A.isConcurrentMode=function(){return!1};A.isContextConsumer=function(e){return Ve(e)===Tl};A.isContextProvider=function(e){return Ve(e)===Ll};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ns};A.isForwardRef=function(e){return Ve(e)===$l};A.isFragment=function(e){return Ve(e)===zl};A.isLazy=function(e){return Ve(e)===Al};A.isMemo=function(e){return Ve(e)===Dl};A.isPortal=function(e){return Ve(e)===_s};A.isProfiler=function(e){return Ve(e)===Rl};A.isStrictMode=function(e){return Ve(e)===Ml};A.isSuspense=function(e){return Ve(e)===Il};A.isSuspenseList=function(e){return Ve(e)===Fl};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zl||e===Rl||e===Ml||e===Il||e===Fl||e===X1||typeof e=="object"&&e!==null&&(e.$$typeof===Al||e.$$typeof===Dl||e.$$typeof===Ll||e.$$typeof===Tl||e.$$typeof===$l||e.$$typeof===Jd||e.getModuleId!==void 0)};A.typeOf=Ve;Gd.exports=A;var K1=Gd.exports;j`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;j`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;j`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;j`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;j`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;j`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;j`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;j`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;j`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Z1=j`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,G1=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,J1=j`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,q1=j`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eg=j`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bs=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tg=j`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ng=j`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rg=j`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,og=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lg=j`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ig=j`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ag=j`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function sg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=bs,iterationCount:o=1}){return Xd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function ug(e){return e==null}function cg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function qd(e,t){return n=>n?e():t()}function Rr(e){return qd(e,()=>null)}function wa(e){return Rr(()=>({opacity:0}))(e)}const Lt=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=bs,triggerOnce:a=!1,className:s,style:c,childClassName:h,childStyle:m,children:g,onVisibilityChange:k}=e,y=v.useMemo(()=>sg({keyframes:i,duration:o}),[o,i]);return ug(g)?null:cg(g)?ne(dg,{...e,animationStyles:y,children:String(g)}):K1.isFragment(g)?ne(e0,{...e,animationStyles:y}):ne($1,{children:v.Children.map(g,(x,C)=>{if(!v.isValidElement(x))return null;const d=r+(t?C*o*n:0);switch(x.type){case"ol":case"ul":return ne(xi,{children:({cx:f})=>ne(x.type,{...x.props,className:f(s,x.props.className),style:Object.assign({},c,x.props.style),children:ne(Lt,{...e,children:x.props.children})})});case"li":return ne(ec,{threshold:l,triggerOnce:a,onChange:k,children:({inView:f,ref:p})=>ne(xi,{children:({cx:w})=>ne(x.type,{...x.props,ref:p,className:w(h,x.props.className),css:Rr(()=>y)(f),style:Object.assign({},m,x.props.style,wa(!f),{animationDelay:d+"ms"})})})});default:return ne(ec,{threshold:l,triggerOnce:a,onChange:k,children:({inView:f,ref:p})=>ne("div",{ref:p,className:s,css:Rr(()=>y)(f),style:Object.assign({},c,wa(!f),{animationDelay:d+"ms"}),children:ne(xi,{children:({cx:w})=>ne(x.type,{...x.props,className:w(h,x.props.className),style:Object.assign({},m,x.props.style)})})})})}})})},fg={display:"inline-block",whiteSpace:"pre"},dg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:a=!1,className:s,style:c,children:h,onVisibilityChange:m}=e,{ref:g,inView:k}=Zd({triggerOnce:a,threshold:i,onChange:m});return qd(()=>ne("div",{ref:g,className:s,style:Object.assign({},c,fg),children:h.split("").map((y,x)=>ne("span",{css:Rr(()=>t)(k),style:{animationDelay:o+x*l*r+"ms"},children:y},x))}),()=>ne(e0,{...e,children:h}))(n)},e0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:a}=e,{ref:s,inView:c}=Zd({triggerOnce:r,threshold:n,onChange:a});return ne("div",{ref:s,className:o,css:Rr(()=>t)(c),style:Object.assign({},l,wa(!c)),children:i})};j`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;j`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;j`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;j`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;j`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const pg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,mg=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,hg=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,gg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,vg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,xg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,yg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,wg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,kg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Sg=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Cg=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,jg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Eg=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ng(e,t,n){switch(n){case"bottom-left":return t?mg:G1;case"bottom-right":return t?hg:J1;case"down":return e?t?vg:eg:t?gg:q1;case"left":return e?t?yg:tg:t?xg:bs;case"right":return e?t?kg:rg:t?wg:ng;case"top-left":return t?Sg:og;case"top-right":return t?Cg:lg;case"up":return e?t?Eg:ag:t?jg:ig;default:return t?pg:Z1}}const yn=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=v.useMemo(()=>Ng(t,r,n),[t,n,r]);return ne(Lt,{keyframes:l,...o})};j`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;j`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;j`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;j`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;j`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;j`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;j`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;j`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const _g=j`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,bg=j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pg=j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Og=j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zg=j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Mg=j`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Rg=j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Lg=j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Tg=j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,$g=j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Ig(e,t){switch(t){case"down":return e?Rg:bg;case"left":return e?Lg:Pg;case"right":return e?Tg:Og;case"up":return e?$g:zg;default:return e?Mg:_g}}const Fg=e=>{const{direction:t,reverse:n=!1,...r}=e,o=v.useMemo(()=>Ig(n,t),[t,n]);return ne(Lt,{keyframes:o,...r})},Dg=()=>{const[e,t]=v.useState(!1),n=At();return v.useEffect(()=>{if(n.hash){let r=document.getElementById(n.hash.slice(1));r&&r.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[n]),u.jsxs("section",{id:"home",className:"flex flex-col justify-center w-full max-w-[1050px] notOnMobile:pt-[22px] mobile:mt-[0px] text-start scroll-my-[90px] mx-auto",children:[u.jsx("div",{className:"w-[calc(100vw-10px)] text-black dark:text-white px-[16px] text-[calc(30px+1vw)] pb-6 font-bold",children:u.jsxs(yn,{cascade:!0,direction:"up",damping:.2,duration:500,triggerOnce:!0,children:[u.jsxs("h2",{className:"pt-[16px]",children:["Mabuhay!"," ",u.jsx("span",{onMouseEnter:()=>t(()=>!0),onAnimationEnd:()=>t(()=>!1),onClick:()=>t(()=>!0),className:`handsUp prevent-select ${e?"handsUpCelebrate":""}`,children:"🙌"})]}),u.jsxs("h2",{className:"pb-[20px] text-[calc(24px+1vw)] font-[600]",children:["and Hello,"," "]}),u.jsxs("h1",{className:"text-[calc(60px+1vw)] tracking-[0.5vw]",children:["I'm",u.jsx("span",{className:"text-blue-700 dark:text-blue-400",children:" Ody James"}),"! ",u.jsx("span",{className:"wave prevent-select",children:"👋"})]}),u.jsxs("p",{className:"max-w-[850px] dark:max-w-[840px] pt-[20px] font-[400] dark:font-[200]",children:["An aspiring Front-End Developer from the Philippines, focusing on web apps and responsive design. Learn more ",u.jsx(J,{to:"/#about",className:"textHighlight bg-gradient-to-r from-[rgb(209,213,219)_50%] to-[rgb(255,255,255)_50%] dark:bg-gradient-to-r dark:from-[rgb(23,32,52)_50%] dark:to-[rgb(2,8,23)_50%]",children:u.jsx("span",{className:"font-[700] dark:font-[500]",children:"about me"})})," ","or my"," ",u.jsx(J,{to:"/#projects",className:"textHighlight bg-gradient-to-r from-[rgb(209,213,219)_50%] to-[rgb(255,255,255)_50%] dark:bg-gradient-to-r dark:from-[rgb(23,32,52)_50%] dark:to-[rgb(2,8,23)_50%]",children:u.jsx("span",{className:"font-[700] dark:font-[500]",children:"projects"})}),"."]})]})}),u.jsx("div",{className:"block border-[1px] w-full h-0 border-slate-300 my-[100px] dark:border-slate-900"})]})};var t0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},tc=ct.createContext&&ct.createContext(t0),Ag=["attr","size","title"];function Bg(e,t){if(e==null)return{};var n=Ug(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ug(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}function nc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function el(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nc(Object(n),!0).forEach(function(r){Vg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vg(e,t,n){return t=Wg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wg(e){var t=Hg(e,"string");return typeof t=="symbol"?t:String(t)}function Hg(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function n0(e){return e&&e.map((t,n)=>ct.createElement(t.tag,el({key:n},t.attr),n0(t.child)))}function be(e){return t=>ct.createElement(Qg,qo({attr:el({},e.attr)},t),n0(e.child))}function Qg(e){var t=n=>{var{attr:r,size:o,title:l}=e,i=Bg(e,Ag),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ct.createElement("svg",qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:s,style:el(el({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&ct.createElement("title",null,l),e.children)};return tc!==void 0?ct.createElement(tc.Consumer,null,n=>t(n)):t(t0)}function rc(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function oc(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Yg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const Xg=v.forwardRef(Yg),Kg=Xg;function Zg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{d:"M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"}),v.createElement("path",{d:"M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"}))}const Gg=v.forwardRef(Zg),r0=Gg;function Jg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z",clipRule:"evenodd"}))}const qg=v.forwardRef(Jg),ev=qg;function tv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const nv=v.forwardRef(tv),rv=nv;function ov({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),v.createElement("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"}))}const lv=v.forwardRef(ov),iv=lv;function av({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"}),v.createElement("path",{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"}))}const sv=v.forwardRef(av),uv=sv;function cv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"}))}const fv=v.forwardRef(cv),dv=fv;function pv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}const mv=v.forwardRef(pv),hv=mv;function gv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const vv=v.forwardRef(gv),xv=vv,o0=()=>{const[e,t]=v.useState(!1),n=localStorage.getItem("themeForPortfolio")||"dark",[r,o]=v.useState(n);v.useEffect(()=>{const s=()=>{window.innerWidth<=580&&t(!1)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const l=()=>{t(!0)},i=()=>{t(!1)},a=s=>{(s==="dark"||s==="light")&&(o(s),localStorage.setItem("themeForPortfolio",s))};return v.useEffect(()=>{r==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark")},[r]),u.jsx("header",{className:"sticky z-10 top-0 flex justify-center w-full h-[70px] border-b-2 overflow-hidden shadow-md bg-white border-gray-300 dark:border-[rgb(17,24,39)] dark:bg-[rgb(2,8,23)]",children:u.jsxs("div",{className:"w-[1060px] flex items-center gap-[calc(20px+0.5vw)] text-[14px] text-black dark:text-white font-semibold px-[16px] focus:outline-none",children:[u.jsxs(J,{to:"/",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"first:mr-auto flex items-center pt-[5px] pb-[7px] notOnMobile:hover:text-blue-800 dark:notOnMobile:hover:text-blue-400 dark:active:text-blue-400 transition duration-300 ease-in-out",children:[u.jsx("div",{className:"w-[36px] mr-[6px]",children:u.jsx("img",{alt:"Portfolio Logo",src:"/portfolio/images/myLogo1.webp",decoding:"async",width:"1000",height:"1000"})}),"Ody James Catanaoan"]}),u.jsx(J,{to:"/#about","aria-label":"Jump to about section",className:"navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out",children:"About Me"}),u.jsx(J,{to:"/#projects","aria-label":"Jump to projects section",className:"navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out",children:"Projects"}),u.jsx(J,{to:"/#contact","aria-label":"Jump to contact section",className:"navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out",children:"Contact"}),r==="dark"?u.jsx(oc,{title:"Click to switch to Light theme","aria-label":"Click to switch to Light theme",onClick:()=>a("light"),className:"navLink flex items-center justify-center px-[7px] w-[34px] h-[34px] rounded-[8px] notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out cursor-pointer"}):u.jsx(rc,{title:"Click to switch to Dark theme","aria-label":"Click to switch to Dark theme",onClick:()=>a("dark"),className:"navLink flex items-center justify-center px-[8px] w-[34px] h-[34px] rounded-[8px] notOnMobile:hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"}),u.jsx("button",{"aria-label":"Navigation Menu",className:"burgerButton",onClick:l,children:u.jsx(Kg,{className:"burgerIcon"})}),u.jsx("div",{className:`overlay ${e?"open":""}`}),u.jsxs("menu",{className:`bg-white font dark:bg-[rgb(2,8,23)] sidePanel ${e?"open":""}`,children:[u.jsxs("li",{className:"flex pb-[16px] justify-between items-center border-b-2 border-[rgb(17,24,39)]",children:[u.jsx("span",{className:"ml-[16px] text-[20px] font-[400] tracking-[1px]",children:"OJ Catanaoan"}),u.jsx("button",{"aria-label":"Close Navigation Menu",className:"w-[40px] py-[2px] px-[4px] border-2 border-[rgb(17,24,39)] rounded-md mr-[20px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)]",onClick:i,children:u.jsx(xv,{})})]}),u.jsx("li",{children:u.jsxs(J,{to:"/",onClick:()=>{i()},className:"flex items-center w-full h-[60px] mr-0 ml-0 mt-[20px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(uv,{className:"w-[26px] mr-[40px] ml-[16px]"}),"Home"]})}),u.jsx("li",{children:u.jsxs(J,{to:"/#about",onClick:()=>{i()},className:"flex items-center w-full h-[60px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(hv,{className:"w-[26px] mr-[40px] ml-[16px]"}),"About Me"]})}),u.jsx("li",{children:u.jsxs(J,{to:"/#projects",onClick:()=>{i()},className:"flex items-center w-full h-[60px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(ev,{className:"w-[26px] mr-[40px] ml-[16px]"}),"Projects"]})}),u.jsx("li",{children:u.jsxs(J,{to:"/contactform",onClick:()=>{i(),window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"flex items-center w-full h-[60px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(r0,{className:"w-[26px] mr-[40px] ml-[16px]"}),"Contact"]})}),u.jsx("li",{children:r==="dark"?u.jsxs("div",{onClick:()=>{a("light"),i()},className:"flex items-center w-full h-[60px] notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px] cursor-pointer",children:[u.jsx(oc,{className:"w-[26px] h-auto mr-[40px] ml-[16px]"}),"Theme"]}):u.jsxs("div",{onClick:()=>{a("dark"),i()},className:"flex items-center w-full h-[60px] notOnMobile:hover:bg-gray-200 text-[18px] tracking-[1px] cursor-pointer",children:[u.jsx(rc,{className:"w-[26px] h-[22px] mr-[40px] ml-[16px]"}),"Theme"]})})]})]})})};function yv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",clipRule:"evenodd"}))}const wv=v.forwardRef(yv),kv=wv,Sv=()=>{const e=At();return v.useEffect(()=>{if(e.hash){let t=document.getElementById(e.hash.slice(1));t&&t.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),u.jsxs("section",{id:"about",className:"mb-36 scroll-mt-[100px] mobile:scroll-mt-[80px] max-w-[1060px] mx-auto text-black dark:text-white",children:[u.jsx("div",{className:"notOnMobile:mt-[30px] mobile:mt-4 text-[calc(26px+1vw)] px-5 pt-8 notOnMobile:pb-12 mobile:pb-6",children:u.jsxs("div",{className:"flex relative justify-center mx-auto text-[1em] max-w-[calc(280px+10vw)]",children:[u.jsx("div",{className:"absolute z-[0]",children:u.jsx(kv,{className:"my-[-4em] inline-block w-[6em] text-blue-500 opacity-[70%] dark:opacity-[10%]"})}),u.jsx("div",{className:"tracking-[.1em] font-[600] z-[1] [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]",children:"A bit about me..."})]})}),u.jsxs("div",{className:"about flex justify-center gap-10 text-center mx-auto",children:[u.jsxs("div",{className:"mt-[80px] px-10",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx(Fg,{duration:500,triggerOnce:!0,children:u.jsx("img",{alt:"OJ Catanaoan Image",className:"rounded-full shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19);] dark:shadow-none",src:"/portfolio/icons/mypic.webp",decoding:"async",loading:"lazy",width:"190",height:"190"})})}),u.jsx(yn,{delay:300,duration:500,direction:"up",triggerOnce:!0,children:u.jsx("div",{className:"text-left max-w-lg mx-auto",children:u.jsx("p",{className:"mt-10 mb-10 leading-relaxed text-lg font-[400] dark:font-[100]",children:"As a self-taught front-end developer, my game plan for now is to explore and learn current and emerging technologies, while bringing my problem-solving skills honed from my previous field, to develop top-notch web app experiences."})})})]}),u.jsx("div",{id:"technologies",className:"mt-[30px] px-10",children:u.jsxs("div",{className:"px-5 py-10 max-w-3xl mx-auto text-center",children:[u.jsxs(yn,{duration:500,triggerOnce:!0,children:[u.jsx("h1",{className:"text-4xl font-medium title-font mb-4",children:"Technologies"}),u.jsx("h2",{className:"text-gray-700 dark:text-gray-400 text-base leading-relaxed mt-6",children:"Technologies I'm starting with as I explore the world of programming."})]}),u.jsx("div",{className:"overflow:hidden mx-auto flex space-x-[calc(26px+4vw)] justify-center mt-12 font-semibold drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]",children:u.jsxs(yn,{cascade:!0,delay:500,damping:.3,duration:500,direction:"up",triggerOnce:!0,children:[u.jsx("div",{className:"w-[60px] h-[60px]",children:u.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{className:"mb-3 w-full",alt:"HTML Logo",src:"/portfolio/icons/htmlicon.webp",decoding:"async",loading:"lazy",width:"283",height:"319"}),"HTML"]})}),u.jsx("div",{className:"w-[60px] h-[60px]",children:u.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"CSS Logo",className:"mb-3",src:"/portfolio/icons/cssicon.webp",decoding:"async",loading:"lazy",width:"281",height:"317"}),"CSS"]})}),u.jsx("div",{className:"w-[60px] h-[60px] flex mt-1",children:u.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"Javascript Logo",className:"mb-3 w-[90%] ml-auto mr-auto",src:"/portfolio/icons/jsicon.webp",decoding:"async",loading:"lazy",width:"500",height:"500"}),"Javascript"]})})]})}),u.jsx("div",{className:"mx-auto flex overflow:hidden space-x-[calc(26px+4vw)] justify-center mt-20 font-semibold mr-2 drop-shadow-[4px_3px_2px_rgba(0,0,0,0.3)]",children:u.jsxs(yn,{cascade:!0,delay:500,damping:.3,duration:500,direction:"down",triggerOnce:!0,children:[u.jsx("div",{className:"w-[70px] h-[70px]",children:u.jsxs("a",{href:"https://react.dev/learn/describing-the-ui",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"React js Logo",className:"mb-2",src:"/portfolio/icons/reactlogo.webp",decoding:"async",loading:"lazy",width:"500",height:"500"}),"React js"]})}),u.jsx("div",{className:"w-[60px] h-[60px]",children:u.jsxs("a",{href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"Tailwind CSS Logo",className:"mb-[22px] mt-[20px]",src:"/portfolio/icons/tailwind.webp",decoding:"async",loading:"lazy",width:"287",height:"175"}),"Tailwind CSS"]})}),u.jsx("div",{className:"w-[55px] h-[55px]",children:u.jsxs("a",{href:"https://nodejs.org/en/about",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"Nodejs Logo",className:"mb-[8px] ml-[6px] mt-1",src:"/portfolio/icons/nodejslogo.webp",decoding:"async",loading:"lazy",width:"500",height:"563"}),u.jsx("span",{className:"ml-[8px]",children:"Nodejs"})]})})]})})]})})]})]})},Cv=()=>{const[e,t]=v.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)},o=At();v.useEffect(()=>{if(o.hash){let a=document.getElementById(o.hash.slice(1));a&&a.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[o]);const l=j`
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0%, 0, 0);
    }
  `,i=j`
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
     transform: translate3d(0%, 0, 0);
    }
  `;return u.jsxs("section",{id:"projects",className:"mt-4 mb-[100px] notOnMobile:scroll-my-[100px] mobile:scroll-my-[80px]",children:[u.jsx("div",{className:"mx-auto text-[calc(32px+1vw)] px-5 py-10 max-w-[calc(200px+10vw)] dark:text-white",children:u.jsxs("div",{className:"flex relative justify-center",children:[u.jsx("h1",{className:"absolute z-0",children:u.jsx(rv,{className:"my-[-4em] mx-auto inline-block w-[5.5em] text-blue-500 opacity-[70%] dark:opacity-[10%]"})}),u.jsx("h1",{className:"z-[1] font-bold tracking-[.1em] [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]",children:"Projects"})]})}),u.jsx("h2",{className:"mx-auto px-10 text-gray-700 dark:text-gray-400 max-w-lg text-center mt-8",children:"What's the best way to showcase my learning but to start doing projects!"}),u.jsxs("div",{id:"projectlist",className:"mt-16 mb-28",children:[u.jsx(Lt,{keyframes:l,duration:600,triggerOnce:!0,children:u.jsxs("div",{id:"basicCalcuContainer",className:"basicCalcuContainer",children:[u.jsx("div",{className:"basicCalcuPicContainer",children:u.jsx("img",{className:"w-full object-cover",alt:"Basic Calculator Web App Preview Image",src:"/portfolio/images/basicCalcuMockUpReady.webp",decoding:"async",loading:"lazy",width:"1620",height:"1080"})}),u.jsxs("div",{className:"basicCalcuTextBox",children:[u.jsx("h1",{className:"text-2xl font-[700] tracking-[2px]",children:"Classic Calculator"}),u.jsx("h2",{className:"my-4 text-base tracking-[0.5px]",children:"Designed with essential functions including addition, subtraction, multiplication, division, and percentage calculations. Built with user convenience in mind, it's a go-to solution for quick and accurate computations."}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://c0de-dlax.github.io/basiccalculatorapp/",target:"_blank",rel:"noopener noreferrer",children:"Live App"}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://github.com/c0de-dLax/basiccalculatorapp.git",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})}),u.jsx(Lt,{keyframes:i,duration:600,triggerOnce:!0,children:u.jsxs("div",{className:"taxCalcuContainer",children:[u.jsx("div",{className:"taxCalcuPicContainer",children:u.jsx("img",{className:"w-full object-cover",alt:"Tax Calculator Web App Preview Image",src:"/portfolio/images/taxCalcuMockUpReady.webp",decoding:"async",loading:"lazy",width:"1620",height:"1080"})}),u.jsxs("div",{className:"taxCalcuTextBox",children:[u.jsx("h1",{className:"text-2xl font-[700] tracking-[2px]",children:"Tax Calculator for PH Employees"}),u.jsx("h2",{className:"my-4 text-base tracking-[0.5px]",children:"Built to streamline tax deductions and contributions for Filipino employees! Leveraged Material UI to create the user-friendly interface for this web app."}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://c0de-dlax.github.io/taxcalculatorapp/",target:"_blank",rel:"noopener noreferrer",children:"Live App"}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://github.com/c0de-dLax/taxcalculatorapp.git",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})}),u.jsx(Lt,{keyframes:l,duration:600,triggerOnce:!0,children:u.jsxs("div",{className:"todoAppContainer",children:[u.jsx("div",{className:"todoAppPicContainer",children:u.jsx("img",{className:"w-full object-cover",alt:"Basic Calculator Web App Preview Image",src:"/portfolio/images/comingsoon.webp",decoding:"async",loading:"lazy",width:"1620",height:"1080"})}),u.jsxs("div",{className:"todoAppTextBox",children:[u.jsx("h1",{className:"text-2xl font-semibold tracking-[1px]",children:"To-Do Productivity App"}),u.jsx("h2",{className:"my-4 text-base tracking-[0.5px]",children:"A tool that will help you keep track and plan your daily routine to seize the day!"}),u.jsx(J,{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",to:"/todoproductivityapp",children:"Live Soon!"}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://github.com/c0de-dLax",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})})]}),u.jsx("div",{className:"flex justify-center w-full",children:u.jsx("button",{"aria-label":"Load more projects",onMouseEnter:n,onMouseLeave:r,onTouchStart:()=>{n(),setTimeout(()=>{t(!1)},1e3)},disabled:e,className:"text-blue-700 text-lg font-[500] shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19);] dark:shadow-none border-2 border-blue-700  dark:text-blue-500 dark:border-blue-500 py-2 px-8 focus:outline-none rounded tracking-[1px] transition-colors duration-300 ease-in-out notOnMobile:hover:bg-blue-600 notOnMobile:hover:border-blue-600 notOnMobile:hover:text-white",children:"Load More"})}),u.jsx("div",{id:"comingSoonPopup",className:"flex justify-center w-full h-[30px] mt-3 dark:text-white",children:u.jsx("h1",{className:`tracking-[1px] notOnmobile:text-md mobile:tracking-[0.5px] mobile:text-sm ${e?"block":"hidden"}`,children:"Exploring new project ideas — coming soon!"})}),u.jsx("div",{className:"border-[1px] w-full max-w-[1060px] h-0 mt-[90px] border-slate-300 dark:border-slate-900 mx-auto"})]})};function l0(e){return be({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function i0(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function a0(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"},child:[]}]})(e)}function s0(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"},child:[]}]})(e)}function u0(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"},child:[]}]})(e)}function jv(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(e)}function Ev(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"},child:[]}]})(e)}function Nv(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"},child:[]}]})(e)}function _v(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"},child:[]}]})(e)}function uo(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"},child:[]}]})(e)}function c0(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 15 2 2 4-4"},child:[]},{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(e)}function f0(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(e)}const bv=()=>{const[e,t]=v.useState(!1),n=()=>{navigator.clipboard.writeText("ojtc.ops@gmail.com"),t(!0),setTimeout(()=>{t(!1)},800)};return u.jsx("section",{children:u.jsxs("div",{className:"flex sm:flex-col sm:gap-y-8 mx-auto mt-[34px] max-w-[1100px] justify-center mb-6 text-black dark:text-white font-[500] dark:font-[400]",children:[u.jsxs("div",{className:"sm:w-[270px] text-start text-[20px] mx-auto leading-[58px] tracking-[1px]",children:[u.jsx("span",{className:"text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-6",children:"Links"}),u.jsxs("menu",{children:[u.jsx("li",{children:u.jsx(J,{to:"/",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"Home"})}),u.jsx("li",{children:u.jsx(J,{to:"/#about","aria-label":"Return to about section",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"About Me"})}),u.jsx("li",{children:u.jsx(J,{to:"/#projects","aria-label":"Return to projects section",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"Projects"})})]})]}),u.jsxs("div",{className:"mr-[calc(40px+0.5vw)] ml-auto sm:w-[270px] sm:mx-auto text-[20px] leading-[56px] tracking-[1px]",children:[u.jsx("span",{className:"text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-8",children:"Contact"}),u.jsxs("menu",{children:[u.jsx("li",{children:u.jsxs("a",{href:"https://github.com/c0de-dLax",target:"_blank",rel:"noopener noreferrer",className:"notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(l0,{className:"inline-block mr-[8px] w-[28px] h-[28px] align-middle"}),u.jsx("span",{className:"inline-block align-middle",children:"Github"})]})}),u.jsxs("li",{className:"flex items-center justify-center",children:[u.jsxs("a",{href:"mailto:ojtc.ops@gmail.com",className:`w-[250px] notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400 ${e?"cursor-default pointer-events-none":"cursor-pointer"}`,children:[u.jsx(iv,{className:"inline-block w-[28px] mr-[10px]"}),u.jsx("span",{className:`${e?"text-green-600 dark:text-green-500":""}`,children:e?"Email Copied":"ojtc.ops@gmail.com"})]}),e?u.jsx(c0,{className:"inline-block text-green-600 dark:text-green-500"}):u.jsx(f0,{title:"Click to copy email to clipboard",onClick:n,onTouchStart:n,className:"inline-block cursor-pointer"})]}),u.jsx("li",{children:u.jsxs("a",{href:"https://www.google.com.ph/maps/place/Philippines/@11.8914137,119.3038832,6z/data=!4m6!3m5!1s0x324053215f87de63:0x784790ef7a29da57!8m2!3d12.879721!4d121.774017!16zL20vMDV2OGM?entry=ttu",target:"_blank",rel:"noopener noreferrer",className:"notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(dv,{className:"inline-block w-[28px] mr-[10px]"}),u.jsx("span",{className:"inline-block align-middle",children:"Philippines"})]})})]})]}),u.jsxs("div",{className:"sm:w-[270px] text-start text-[20px] mx-auto leading-[56px] tracking-[1px]",children:[u.jsx("span",{className:"text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-6",children:"Socials"}),u.jsxs("menu",{children:[u.jsx("li",{children:u.jsxs("a",{href:"https://www.linkedin.com/in/ojtcatanaoan",target:"_blank",rel:"noopener noreferrer",className:"notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(i0,{className:"mr-[8px] w-[28px] h-[28px] inline-block align-middle"}),u.jsx("span",{className:"inline-block align-middle",children:"LinkedIn"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"https://www.facebook.com/ojtcatanaoan",target:"_blank",rel:"noopener noreferrer",className:"notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(a0,{className:"mr-[8px] w-[28px] h-[28px] inline-block align-middle"}),u.jsx("span",{className:"inline-block align-middle",children:"Facebook"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"https://twitter.com/OCatanaoan",target:"_blank",rel:"noopener noreferrer",className:"notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(s0,{className:"mr-[8px] w-[28px] h-[28px] inline-block align-middle"}),u.jsx("span",{className:"inline-block align-middle",children:"X"})]})})]})]})]})})},Pv=()=>{const e=At();v.useEffect(()=>{if(e.hash){let r=document.getElementById(e.hash.slice(1));r&&r.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]);const t=j`
    from {
      transform: scaleX(0);
      transform-origin: center left 0px;
    }
    to { 
      transform: scaleX(1);
      transform-origin: center left 0px;
    }
  `,n=j`
    from {
      transform: translateZ(0);
      opacity: 0;
    }
    to {
      transform: translateZ(0);
      opacity: 1;
    }
  `;return u.jsxs("section",{id:"contact",className:"scroll-my-[70px]",children:[u.jsxs("div",{className:"text-black dark:text-white py-6 font-[500] dark:font-[400]",children:[u.jsxs("div",{className:"flex relative justify-center mx-auto text-[calc(30px+1vw)] py-10 max-w-[calc(260px+10vw)]",children:[u.jsx("div",{className:"absolute z-0 left-1/2 ml-[-2.55em]",children:u.jsx(r0,{className:"my-[-3em] inline-block w-[5em] text-blue-500 opacity-[70%] dark:opacity-[10%]"})}),u.jsx("div",{className:"z-[3] font-bold title-font tracking-widest [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]",children:"Get in touch!"})]}),u.jsx(Lt,{keyframes:t,duration:400,triggerOnce:!0,children:u.jsx("div",{className:"w-full mt-12 text-white bg-blue-600 text-center tracking-[2px] px-4 pt-8 pb-10",children:u.jsxs(Lt,{keyframes:n,duration:500,delay:400,triggerOnce:!0,children:[u.jsx("h1",{className:"text-[calc(24px+1vw)] font-[600]",children:"Let's Connect!"}),u.jsx("h2",{className:"text-[calc(14px+1vw)] font-[400]",children:"Get in touch by sending me a message!"}),u.jsx("h2",{className:"mt-6",children:u.jsx(J,{to:"/contactform","aria-label":"Access contact form to send message",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"border-2 rounded-md px-8 pt-[6px] pb-[8px] text-[calc(10px+1vw)] font-[500] tracking-[3px] transition duration-300 ease-in-out hover:text-blue-500 notOnMobile:hover:bg-white",children:"CONTACT"})})]})})}),u.jsx(bv,{})]}),u.jsxs("div",{className:"relative w-[100%] bg-gray-300 dark:bg-[rgb(17,24,39)]",children:[u.jsx("button",{"aria-label":"Return to top",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"absolute flex justify-center items-center p-2 bg-blue-600 rounded-full left-1/2 ml-[-12px] text-white w-[36px] h-[36px] mt-[-20px] cursor-pointer customBounce",children:u.jsx(u0,{className:"w-full h-auto"})}),u.jsxs("div",{id:"copyright",className:"flex xs:flex-col justify-center items-center w-full text-black font-[500] dark:text-white dark:font-[400] pt-8 pb-4 mx-auto text-[14px] tracking-[0.5px]",children:[u.jsx("span",{children:"© 2024 designed and created by "}),u.jsx("span",{children:"Ody James Catanaoan"})]})]})]})};function Ov(){return v.useEffect(()=>{const e=()=>{document.querySelectorAll("section[id]").forEach(n=>{const r=n.getBoundingClientRect();if(r.top>=0&&r.top<=300){const o=window.location.hash,l="#"+n.id;if(l!==o){const i=window.location.toString().split("#")[0];l==="#home"?window.history.replaceState(null,"",i):window.history.replaceState(null,"",i+l)}}})};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),u.jsxs("main",{className:"bg-white dark:bg-[rgb(2,8,23)]",children:[u.jsx(o0,{}),u.jsx(Dg,{}),u.jsx(Sv,{}),u.jsx(Cv,{}),u.jsx(Pv,{})]})}function zv(){const[e,t]=v.useState(!1),n=()=>{navigator.clipboard.writeText("ojtc.ops@gmail.com"),t(!0),setTimeout(()=>{t(!1)},800)};return u.jsxs("section",{children:[u.jsxs("div",{className:"flex flex-col gap-y-20 tracking-[1px] text-start w-full max-w-[700px] mx-auto text-4xl text-black dark:text-white px-2 mt-[calc(100px+2vh)]",children:[u.jsxs("div",{className:"flex justify-between xs:flex-col xs:justify-center xs:items-center",children:[u.jsx("div",{className:"text-blue-700 dark:text-blue-500 font-[700] xs:mb-5",children:u.jsx("a",{href:"mailto:ojtc.ops@gmail.com",children:"Get in touch"})}),u.jsxs("div",{className:"flex flex-col text-3xl xs:text-center xs:justify-center",children:[u.jsx("span",{className:"opacity-[0.6] text-[26px]",children:"Email Address"}),u.jsxs("div",{className:"flex flex-col items-star xs:items-center w-[300px]",children:[u.jsx("div",{className:"mt-1 font-[500] mx-auto",children:"ojtc.ops@gmail.com"}),u.jsx("button",{"aria-label":"Click to copy email address to clipboard",onClick:n,className:"flex items-center justify-start xs:justify-center mt-4 text-xl",disabled:e,children:e?u.jsxs("div",{className:"flex text-green-600 dark:text-green-500",children:[u.jsx(c0,{className:"mr-2"}),"Email copied to clipboard"]}):u.jsxs("div",{className:"flex text-blue-700 dark:text-blue-500 ",children:[u.jsx(f0,{className:"mr-2"}),"Click here to copy email"]})})]})]})]}),u.jsxs("div",{className:"flex justify-between xs:flex-col xs:justify-center xs:items-center",children:[u.jsx("div",{className:"text-blue-700 dark:text-blue-500 font-[700] xs:mb-5",children:u.jsx("a",{href:"https://www.google.com.ph/maps/place/Philippines/@11.8914137,119.3038832,6z/data=!4m6!3m5!1s0x324053215f87de63:0x784790ef7a29da57!8m2!3d12.879721!4d121.774017!16zL20vMDV2OGM?entry=ttu",target:"_blank",rel:"noopener noreferrer",children:"Location"})}),u.jsxs("div",{className:"flex-col text-3xl xs:text-center w-[300px]",children:[u.jsx("span",{className:"block opacity-[0.6] text-[26px]",children:"Current living in"}),u.jsx("span",{className:"block mt-1 font-[500]",children:"Philippines"})]})]})]}),u.jsxs("menu",{className:"flex w-full max-w-[660px] justify-center items-center text-start text-sm leading-[26px] mt-32 mb-24 mx-auto tracking-[1px] text-black font-[500] dark:text-white dark:font-[400]",children:[u.jsx("li",{className:"mx-auto",children:u.jsx("a",{href:"https://github.com/c0de-dLax",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex flex-col items-center justify-center",children:[u.jsx(l0,{className:"w-[30px] h-[30px] z-[2] text-black dark:text-white"}),u.jsx(_v,{className:"mt-[-25px] w-[25px] h-[25px] z-[1] text-white dark:text-black"}),u.jsx(uo,{className:"mt-[-30px] w-[30px] h-[29px] z-[0] bg-black dark:bg-white rounded-[3px]"}),u.jsx("span",{className:"opacity-[0.6]",children:"Github"})]})})}),u.jsx("li",{className:"mx-auto",children:u.jsx("a",{href:"https://www.linkedin.com/in/ojtcatanaoan",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex flex-col items-center justify-center",children:[u.jsx(i0,{className:"w-[33px] h-[33px] text-[rgb(10,102,194)] z-[1]"}),u.jsx(uo,{className:"mt-[-30px] ml-[1px] w-[24px] h-[28px] z-[0] text-white"}),u.jsx("span",{className:"opacity-[0.6]",children:"LinkedIn"})]})})}),u.jsx("li",{className:"mx-auto",children:u.jsx("a",{href:"https://www.facebook.com/ojtcatanaoan",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex flex-col items-center justify-center",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsx(a0,{className:"w-[33px] h-[33px] text-[rgb(8,102,255)] z-[1]"}),u.jsx(uo,{className:"mt-[-28px] ml-[4px] w-[24px] h-[28px] z-[0] text-white"})]}),u.jsx("span",{className:"opacity-[0.6]",children:"Facebook"})]})})}),u.jsx("li",{className:"mx-auto",children:u.jsx("a",{href:"https://twitter.com/OCatanaoan",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex flex-col items-center justify-center",children:[u.jsx(s0,{className:"w-[33px] h-[33px] text-black z-[1]"}),u.jsx(uo,{className:"mt-[-29px] w-[26px] h-[28px] z-[0] text-white"}),u.jsx("span",{className:"opacity-[0.6]",children:"X"})]})})})]})]})}function Mv(){return u.jsx("section",{children:u.jsxs("div",{className:"relative w-full h-full bg-gray-300 dark:bg-[rgb(17,24,39)]",children:[u.jsx("div",{className:"absolute flex justify-center items-center p-2 bg-blue-600 rounded-full left-1/2 ml-[-12px] text-white w-[36px] h-[36px] mt-[-20px] cursor-pointer customBounce",children:u.jsx(u0,{"aria-label":"Return to top",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"w-full h-auto"})}),u.jsxs("menu",{className:"flex justify-center items-center w-full max-w-[360px] mx-auto text-xl text-black dark:text-white pt-[40px]",children:[u.jsx("li",{className:"mx-auto",children:u.jsx(J,{to:"/",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"Home"})}),u.jsx("div",{className:"w-0 h-8 border-[1px] border-slate-700"}),u.jsx("li",{className:"mx-auto",children:u.jsx(J,{to:"/#about","aria-label":"Return to about section",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"About Me"})}),u.jsx("div",{className:"w-0 h-8 border-[1px] border-slate-700"}),u.jsx("li",{className:"mx-auto",children:u.jsx(J,{to:"/#projects","aria-label":"Return to projects section",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"Projects"})})]}),u.jsxs("div",{id:"copyright",className:"flex xs:flex-col justify-center items-center w-full text-black font-[500] dark:text-white dark:font-[400] pt-[20px] pb-4 mx-auto text-[14px] tracking-[0.5px]",children:[u.jsx("span",{children:"© 2024 designed and created by "}),u.jsx("span",{children:"Ody James Catanaoan"})]})]})})}function Rv(){const[e,t]=v.useState(!1),[n,r]=v.useState(!1),[o,l]=v.useState(!1),[i,a]=v.useState(!1),[s,c]=v.useState(!1),[h,m]=v.useState(!1),[g,k]=v.useState(null),y=C=>{const d=document.querySelector("form");if(C.preventDefault(),!d)return;const f=d.querySelector('input[name="Name"]'),p=d.querySelector('input[name="Email"]'),w=d.querySelector('textarea[name="Message"]');if(!(f!=null&&f.value)||!(p!=null&&p.value)||!p.value.match(/^\s*[^@\s]+@[^\s@.]+\.[a-zA-Z][a-zA-Z0-9]*\s*$/)||!(w!=null&&w.value)){r(!0),t(!1);let _;_=setTimeout(()=>{r(!1)},2500),k(_),f!=null&&f.value?a(!1):setTimeout(()=>{a(!0)},100),!(p!=null&&p.value)||!p.value.match(/^\s*[^@\s]+@[^\s@.]+\.[a-zA-Z][a-zA-Z0-9]*\s*$/)?setTimeout(()=>{c(!0)},100):c(!1),w!=null&&w.value?m(!1):setTimeout(()=>{m(!0)},100);return}l(!0),r(!1),a(!1),c(!1),m(!1);const E=new FormData(d);fetch("https://script.google.com/macros/s/AKfycbwEB7rEinie_N4PNOwM-pEVKRT115gxD6Ke4sbkxvqATSPV5_-a1oiPeHD5_ivtIxU3rw/exec",{method:"POST",body:E}).then(_=>_.json()).then(()=>{d.reset(),l(!1),t(!0);const _=setTimeout(()=>{t(!1)},2500);k(_)}).catch(()=>{d.reset(),l(!1),t(!0);const _=setTimeout(()=>{t(!1)},2500);k(_)})},x=()=>{t(!1),r(!1),g!==null&&clearTimeout(g)};return u.jsxs("main",{className:"bg-white dark:bg-[rgb(2,8,23)]",children:[u.jsx(o0,{}),u.jsx("div",{className:"text-center notOnMobile:mt-12 mobile:mt-2 mb-8 tracking-[4px] max-w-[900px] mx-auto px-[6px]",children:u.jsxs(yn,{triggerOnce:!0,cascade:!0,direction:"up",duration:600,damping:.4,children:[u.jsxs("h1",{className:"text-black dark:text-white text-[calc(30px+2vw)] font-[700]",children:["Got some"," ",u.jsx("span",{className:"text-blue-700 dark:text-blue-500",children:"questions"})," ","or just want to"," ",u.jsx("span",{className:"text-blue-700 dark:text-blue-500",children:"connect"}),"?"]}),u.jsx("h2",{className:"text-gray-500 font-[500] dark:text-gray-300 dark:font-[400] mt-6 mb-12 text-[calc(12px+1vw)]",children:"Send me a message and I'll reply back ASAP!"})]})}),u.jsxs("div",{onClick:x,className:`noticeCard cursor-pointer bg-green-100 text-green-700 text-start ${e?"open":""}`,children:[u.jsxs("h1",{className:"flex items-center justify-start text-2xl mb-2 px-4",children:[u.jsx(jv,{className:"mr-2"}),"Success!"]}),u.jsx("h2",{className:"text-base px-4",children:"I'll respond back as soon as I read your message!"}),u.jsx("div",{className:`w-full notOnMobile:h-[8px] mobile:h-[6px] bg-green-500 mt-6 px-0 ${e?"timerGreenBar":""}`})]}),u.jsxs("div",{onClick:x,className:`noticeCard cursor-pointer bg-red-100 text-red-700 text-start ${n?"open":""}`,children:[u.jsxs("h1",{className:"flex items-center justify-start text-2xl mb-2 px-4",children:[u.jsx(Ev,{className:"mr-2"}),"Oops!"]}),u.jsx("h1",{className:"text-base px-4",children:"Please fill out all input fields with valid entries and try again."}),u.jsx("div",{className:`w-full notOnMobile:h-[8px] mobile:h-[6px] bg-red-600 mt-5 px-0 ${n?"timerRedBar":""}`})]}),u.jsxs("div",{className:`noticeCard border-l-[8px] border-blue-600 bg-blue-200 text-blue-800 text-center pb-4 ${o?"open":""}`,children:[u.jsxs("h1",{className:"flex items-center justify-center text-2xl mb-2 px-4",children:[u.jsx(Nv,{className:"mr-2"}),"Please wait..."]}),u.jsx("div",{className:"loader bg-blue-800 mx-auto mt-2 mb-auto"})]}),u.jsxs("form",{name:"contactForm",onSubmit:y,className:"flex flex-col space-y-1 max-w-lg w-[calc(100vw-30px)] mx-auto mt-5 tracking-[1px] text-black dark:text-white",children:[u.jsx("label",{htmlFor:"name",className:"text-lg",children:"Name"}),u.jsx("input",{placeholder:"Type your name here",type:"text",id:"Name",name:"Name",className:"border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"}),u.jsx("div",{className:"w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]",children:i?"Please enter your name":""}),u.jsx("label",{htmlFor:"email",className:"text-lg",children:"Email"}),u.jsx("input",{placeholder:"Type your email here",type:"text",id:"Email",name:"Email",className:"border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"}),u.jsx("div",{className:"w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]",children:s?"Please enter a valid email":""}),u.jsx("label",{htmlFor:"message",className:"text-lg",children:"Message"}),u.jsx("textarea",{id:"Message",name:"Message",placeholder:"Type your message here",cols:30,rows:5,className:"border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"}),u.jsx("div",{className:"w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]",children:h?"Please enter your message":""}),u.jsx("br",{}),u.jsx("button",{"aria-label":"Submit Form",type:"submit",disabled:o||n,className:`border-[2px] border-blue-700 dark:border-blue-500 max-w-[160px] w-full h-[40px] tracking-[1px] mx-auto text-blue-700 dark:text-blue-500 font-[600] rounded-md transition duration-300 ease-in-out ${o||n?"border-gray-400 text-gray-400 dark:border-gray-400 dark:text-gray-400 cursor-not-allowed":"notOnMobile:hover:text-white notOnMobile:hover:border-blue-600 notOnMobile:hover:bg-blue-600"}`,children:o?u.jsx("div",{className:"flex mx-auto",children:u.jsx("div",{className:"mx-auto my-auto",children:"Processing..."})}):"Submit"})]}),u.jsx("div",{className:"w-full max-w-[960px] mx-auto border-[1px] h-0 mt-[calc(100px+2vh)] border-slate-300 dark:border-slate-900"}),u.jsx(zv,{}),u.jsx(Mv,{})]})}function Lv(){return u.jsxs("main",{children:[u.jsx("h1",{className:"text-[4em] text-center px-2 mt-6",children:"Oops!"}),u.jsx("h1",{className:"text-[4.5em] text-center font-[500] px-2",children:"Error 404"}),u.jsx("h2",{className:"text-[2.5em] text-center px-2",children:"Page Not Found"}),u.jsx("h3",{className:"text-[1.5em] text-blue-600 text-center mt-6 px-2",children:u.jsx(J,{to:"/",onClick:()=>{window.scrollTo(0,0)},children:"Click here to go back to the Home Page"})})]})}function Tv(){return u.jsxs("main",{className:"flex justify-center items-center flex-col w-[100vw-10px] h-[100dvh] gap-10 bg-white text-black dark:bg-[rgb(2,8,23)] dark:text-white",children:[u.jsx("h1",{className:"text-[3em] text-center px-2 mt-6",children:"Coming Soon!"}),u.jsx("h2",{className:"text-[3em] text-center font-[500] px-2",children:"This page is still under construction."}),u.jsx("h3",{className:"text-[1.5em] text-blue-600 text-center mt-4 px-2 mb-10",children:u.jsx(J,{to:"/#projects",children:"Click here to go back to the Home Page"})})]})}function $v(){return u.jsx($h,{basename:"/portfolio/",children:u.jsxs(Ph,{children:[u.jsx(tr,{path:"/",element:u.jsx(Ov,{})}),u.jsx(tr,{path:"/contactform",element:u.jsx(Rv,{})}),u.jsx(tr,{path:"/todoproductivityapp",element:u.jsx(Tv,{})}),u.jsx(tr,{path:"*",element:u.jsx(Lv,{})})]})})}wi.createRoot(document.getElementById("root")).render(u.jsx(ct.StrictMode,{children:u.jsx($v,{})}));
