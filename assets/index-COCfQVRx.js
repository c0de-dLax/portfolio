function s0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function u0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},el={},ic={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),c0=Symbol.for("react.portal"),f0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),p0=Symbol.for("react.profiler"),m0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),g0=Symbol.for("react.forward_ref"),v0=Symbol.for("react.suspense"),y0=Symbol.for("react.memo"),x0=Symbol.for("react.lazy"),bs=Symbol.iterator;function w0(e){return e===null||typeof e!="object"?null:(e=bs&&e[bs]||e["@@iterator"],typeof e=="function"?e:null)}var ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sc=Object.assign,uc={};function $n(e,t,n){this.props=e,this.context=t,this.refs=uc,this.updater=n||ac}$n.prototype.isReactComponent={};$n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cc(){}cc.prototype=$n.prototype;function ka(e,t,n){this.props=e,this.context=t,this.refs=uc,this.updater=n||ac}var Sa=ka.prototype=new cc;Sa.constructor=ka;sc(Sa,$n.prototype);Sa.isPureReactComponent=!0;var Ms=Array.isArray,fc=Object.prototype.hasOwnProperty,Ca={current:null},dc={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)fc.call(t,r)&&!dc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Lr,type:e,key:l,ref:i,props:o,_owner:Ca.current}}function k0(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ea(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function S0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zs=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S0(""+e.key):t.toString(36)}function uo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Lr:case c0:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Vl(i,0):r,Ms(o)?(n="",e!=null&&(n=e.replace(zs,"$&/")+"/"),uo(o,t,n,"",function(c){return c})):o!=null&&(Ea(o)&&(o=k0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(zs,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ms(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Vl(l,a);i+=uo(l,t,n,s,o)}else if(s=w0(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Vl(l,a++),i+=uo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Vr(e,t,n){if(e==null)return e;var r=[],o=0;return uo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function C0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},co={transition:null},E0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:co,ReactCurrentOwner:Ca};R.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!Ea(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=$n;R.Fragment=f0;R.Profiler=p0;R.PureComponent=ka;R.StrictMode=d0;R.Suspense=v0;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)fc.call(t,s)&&!dc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Lr,type:e.type,key:o,ref:l,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:h0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:m0,_context:e},e.Consumer=e};R.createElement=pc;R.createFactory=function(e){var t=pc.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:g0,render:e}};R.isValidElement=Ea;R.lazy=function(e){return{$$typeof:x0,_payload:{_status:-1,_result:e},_init:C0}};R.memo=function(e,t){return{$$typeof:y0,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=co.transition;co.transition={};try{e()}finally{co.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return we.current.useCallback(e,t)};R.useContext=function(e){return we.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return we.current.useDeferredValue(e)};R.useEffect=function(e,t){return we.current.useEffect(e,t)};R.useId=function(){return we.current.useId()};R.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return we.current.useMemo(e,t)};R.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};R.useRef=function(e){return we.current.useRef(e)};R.useState=function(e){return we.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return we.current.useTransition()};R.version="18.2.0";ic.exports=R;var v=ic.exports;const ct=u0(v),xi=s0({__proto__:null,default:ct},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=v,j0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),P0=Object.prototype.hasOwnProperty,O0=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b0={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)P0.call(t,r)&&!b0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:j0,type:e,key:l,ref:i,props:o,_owner:O0.current}}el.Fragment=_0;el.jsx=mc;el.jsxs=mc;lc.exports=el;var u=lc.exports,wi={},hc={exports:{}},Re={},gc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,M){var z=O.length;O.push(M);e:for(;0<z;){var Z=z-1>>>1,oe=O[Z];if(0<o(oe,M))O[Z]=M,O[z]=oe,z=Z;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],z=O.pop();if(z!==M){O[0]=z;e:for(var Z=0,oe=O.length,Ur=oe>>>1;Z<Ur;){var Ut=2*(Z+1)-1,Bl=O[Ut],Bt=Ut+1,Br=O[Bt];if(0>o(Bl,z))Bt<oe&&0>o(Br,Bl)?(O[Z]=Br,O[Bt]=z,Z=Bt):(O[Z]=Bl,O[Ut]=z,Z=Ut);else if(Bt<oe&&0>o(Br,z))O[Z]=Br,O[Bt]=z,Z=Bt;else break e}}return M}function o(O,M){var z=O.sortIndex-M.sortIndex;return z!==0?z:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,m=null,g=3,k=!1,x=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(O){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=O)r(c),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(c)}}function w(O){if(y=!1,p(O),!x)if(n(s)!==null)x=!0,Dl(N);else{var M=n(c);M!==null&&Ul(w,M.startTime-O)}}function N(O,M){x=!1,y&&(y=!1,d(b),b=-1),k=!0;var z=g;try{for(p(M),m=n(s);m!==null&&(!(m.expirationTime>M)||O&&!Ve());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,g=m.priorityLevel;var oe=Z(m.expirationTime<=M);M=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(s)&&r(s),p(M)}else r(s);m=n(s)}if(m!==null)var Ur=!0;else{var Ut=n(c);Ut!==null&&Ul(w,Ut.startTime-M),Ur=!1}return Ur}finally{m=null,g=z,k=!1}}var _=!1,j=null,b=-1,K=5,L=-1;function Ve(){return!(e.unstable_now()-L<K)}function Un(){if(j!==null){var O=e.unstable_now();L=O;var M=!0;try{M=j(!0,O)}finally{M?Bn():(_=!1,j=null)}}else _=!1}var Bn;if(typeof f=="function")Bn=function(){f(Un)};else if(typeof MessageChannel<"u"){var Os=new MessageChannel,a0=Os.port2;Os.port1.onmessage=Un,Bn=function(){a0.postMessage(null)}}else Bn=function(){C(Un,0)};function Dl(O){j=O,_||(_=!0,Bn())}function Ul(O,M){b=C(function(){O(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Dl(N))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var z=g;g=M;try{return O()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=g;g=O;try{return M()}finally{g=z}},e.unstable_scheduleCallback=function(O,M,z){var Z=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,O){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=z+oe,O={id:h++,callback:M,priorityLevel:O,startTime:z,expirationTime:oe,sortIndex:-1},z>Z?(O.sortIndex=z,t(c,O),n(s)===null&&O===n(c)&&(y?(d(b),b=-1):y=!0,Ul(w,z-Z))):(O.sortIndex=oe,t(s,O),x||k||(x=!0,Dl(N))),O},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(O){var M=g;return function(){var z=g;g=M;try{return O.apply(this,arguments)}finally{g=z}}}})(vc);gc.exports=vc;var M0=gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=v,ze=M0;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xc=new Set,fr={};function rn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(fr[e]=t,e=0;e<t.length;e++)xc.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ki=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rs={},Ls={};function R0(e){return ki.call(Ls,e)?!0:ki.call(Rs,e)?!1:z0.test(e)?Ls[e]=!0:(Rs[e]=!0,!1)}function L0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T0(e,t,n,r){if(t===null||typeof t>"u"||L0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Na=/[\-:]([a-z])/g;function ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Na,ja);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Na,ja);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Na,ja);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T0(t,n,o,r)&&(n=null),r||o===null?R0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),Pa=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Oa=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),ba=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Sc=Symbol.for("react.offscreen"),Ts=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Wl;function Jn(e){if(Wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wl=t&&t[1]||""}return`
`+Wl+e}var Hl=!1;function Ql(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function $0(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Ni(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case Si:return"Profiler";case Pa:return"StrictMode";case Ci:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kc:return(e.displayName||"Context")+".Consumer";case wc:return(e._context.displayName||"Context")+".Provider";case Oa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ba:return t=e.displayName||null,t!==null?t:Ni(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Ni(e(t))}catch{}}return null}function I0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ni(t);case 8:return t===Pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function F0(e){var t=Cc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=F0(e))}function Ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ji(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $s(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nc(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function _i(e,t){Nc(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pi(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pi(e,t,n){(t!=="number"||No(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(qn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function jc(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function As(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_c(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,Pc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A0=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){A0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function Oc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Oc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var D0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mi(e,t){if(t){if(D0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function zi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function Ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,Sn=null,Cn=null;function Ds(e){if(e=Ir(e)){if(typeof Li!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ll(t),Li(e.stateNode,e.type,t))}}function Mc(e){Sn?Cn?Cn.push(e):Cn=[e]:Sn=e}function zc(){if(Sn){var e=Sn,t=Cn;if(Cn=Sn=null,Ds(e),t)for(e=0;e<t.length;e++)Ds(t[e])}}function Rc(e,t){return e(t)}function Lc(){}var Yl=!1;function Tc(e,t,n){if(Yl)return e(t,n);Yl=!0;try{return Rc(e,t,n)}finally{Yl=!1,(Sn!==null||Cn!==null)&&(Lc(),zc())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ti=!1;if(dt)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Ti=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Ti=!1}function U0(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var rr=!1,jo=null,_o=!1,$i=null,B0={onError:function(e){rr=!0,jo=e}};function V0(e,t,n,r,o,l,i,a,s){rr=!1,jo=null,U0.apply(B0,arguments)}function W0(e,t,n,r,o,l,i,a,s){if(V0.apply(this,arguments),rr){if(rr){var c=jo;rr=!1,jo=null}else throw Error(S(198));_o||(_o=!0,$i=c)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Us(e){if(on(e)!==e)throw Error(S(188))}function H0(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Us(o),e;if(l===r)return Us(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Ic(e){return e=H0(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Ac=ze.unstable_scheduleCallback,Bs=ze.unstable_cancelCallback,Q0=ze.unstable_shouldYield,Y0=ze.unstable_requestPaint,G=ze.unstable_now,X0=ze.unstable_getCurrentPriorityLevel,za=ze.unstable_ImmediatePriority,Dc=ze.unstable_UserBlockingPriority,Po=ze.unstable_NormalPriority,K0=ze.unstable_LowPriority,Uc=ze.unstable_IdlePriority,tl=null,nt=null;function Z0(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:q0,G0=Math.log,J0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(G0(e)/J0|0)|0}var Yr=64,Xr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=er(a):(l&=i,l!==0&&(r=er(l)))}else i=n&~o,i!==0?r=er(i):l!==0&&(r=er(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Xe(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=ep(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function Xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function np(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wc,La,Hc,Qc,Yc,Fi=!1,Kr=[],Nt=null,jt=null,_t=null,mr=new Map,hr=new Map,wt=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vs(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Hn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Ir(t),t!==null&&La(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function op(e,t,n,r,o){switch(t){case"focusin":return Nt=Hn(Nt,e,t,n,r,o),!0;case"dragenter":return jt=Hn(jt,e,t,n,r,o),!0;case"mouseover":return _t=Hn(_t,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return mr.set(l,Hn(mr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,hr.set(l,Hn(hr.get(l)||null,e,t,n,r,o)),!0}return!1}function Xc(e){var t=Yt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=$c(n),t!==null){e.blockedOn=t,Yc(e.priority,function(){Hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ai(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ri=r,n.target.dispatchEvent(r),Ri=null}else return t=Ir(n),t!==null&&La(t),e.blockedOn=n,!1;t.shift()}return!0}function Ws(e,t,n){fo(e)&&n.delete(t)}function lp(){Fi=!1,Nt!==null&&fo(Nt)&&(Nt=null),jt!==null&&fo(jt)&&(jt=null),_t!==null&&fo(_t)&&(_t=null),mr.forEach(Ws),hr.forEach(Ws)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Fi||(Fi=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,lp)))}function gr(e){function t(o){return Qn(o,e)}if(0<Kr.length){Qn(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&Qn(Nt,e),jt!==null&&Qn(jt,e),_t!==null&&Qn(_t,e),mr.forEach(t),hr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Xc(n),n.blockedOn===null&&wt.shift()}var En=gt.ReactCurrentBatchConfig,bo=!0;function ip(e,t,n,r){var o=F,l=En.transition;En.transition=null;try{F=1,Ta(e,t,n,r)}finally{F=o,En.transition=l}}function ap(e,t,n,r){var o=F,l=En.transition;En.transition=null;try{F=4,Ta(e,t,n,r)}finally{F=o,En.transition=l}}function Ta(e,t,n,r){if(bo){var o=Ai(e,t,n,r);if(o===null)oi(e,t,r,Mo,n),Vs(e,r);else if(op(o,e,t,n,r))r.stopPropagation();else if(Vs(e,r),t&4&&-1<rp.indexOf(e)){for(;o!==null;){var l=Ir(o);if(l!==null&&Wc(l),l=Ai(e,t,n,r),l===null&&oi(e,t,r,Mo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else oi(e,t,r,null,n)}}var Mo=null;function Ai(e,t,n,r){if(Mo=null,e=Ma(r),e=Yt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X0()){case za:return 1;case Dc:return 4;case Po:case K0:return 16;case Uc:return 536870912;default:return 16}default:return 16}}var St=null,$a=null,po=null;function Zc(){if(po)return po;var e,t=$a,n=t.length,r,o="value"in St?St.value:St.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return po=o.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Hs(){return!1}function Le(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Zr:Hs,this.isPropagationStopped=Hs,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Le(In),$r=Y({},In,{view:0,detail:0}),sp=Le($r),Kl,Zl,Yn,nl=Y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(Kl=e.screenX-Yn.screenX,Zl=e.screenY-Yn.screenY):Zl=Kl=0,Yn=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Qs=Le(nl),up=Y({},nl,{dataTransfer:0}),cp=Le(up),fp=Y({},$r,{relatedTarget:0}),Gl=Le(fp),dp=Y({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=Le(dp),mp=Y({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Le(mp),gp=Y({},In,{data:0}),Ys=Le(gp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xp[e])?!!t[e]:!1}function Fa(){return wp}var kp=Y({},$r,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fa,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sp=Le(kp),Cp=Y({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=Le(Cp),Ep=Y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fa}),Np=Le(Ep),jp=Y({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),_p=Le(jp),Pp=Y({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Op=Le(Pp),bp=[9,13,27,32],Aa=dt&&"CompositionEvent"in window,or=null;dt&&"documentMode"in document&&(or=document.documentMode);var Mp=dt&&"TextEvent"in window&&!or,Gc=dt&&(!Aa||or&&8<or&&11>=or),Ks=" ",Zs=!1;function Jc(e,t){switch(e){case"keyup":return bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function zp(e,t){switch(e){case"compositionend":return qc(t);case"keypress":return t.which!==32?null:(Zs=!0,Ks);case"textInput":return e=t.data,e===Ks&&Zs?null:e;default:return null}}function Rp(e,t){if(fn)return e==="compositionend"||!Aa&&Jc(e,t)?(e=Zc(),po=$a=St=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var Lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lp[e.type]:t==="textarea"}function ef(e,t,n,r){Mc(r),t=zo(t,"onChange"),0<t.length&&(n=new Ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,vr=null;function Tp(e){df(e,0)}function rl(e){var t=mn(e);if(Ec(t))return e}function $p(e,t){if(e==="change")return t}var tf=!1;if(dt){var Jl;if(dt){var ql="oninput"in document;if(!ql){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),ql=typeof Js.oninput=="function"}Jl=ql}else Jl=!1;tf=Jl&&(!document.documentMode||9<document.documentMode)}function qs(){lr&&(lr.detachEvent("onpropertychange",nf),vr=lr=null)}function nf(e){if(e.propertyName==="value"&&rl(vr)){var t=[];ef(t,vr,e,Ma(e)),Tc(Tp,t)}}function Ip(e,t,n){e==="focusin"?(qs(),lr=t,vr=n,lr.attachEvent("onpropertychange",nf)):e==="focusout"&&qs()}function Fp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(vr)}function Ap(e,t){if(e==="click")return rl(t)}function Dp(e,t){if(e==="input"||e==="change")return rl(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Up;function yr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ki.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function of(){for(var e=window,t=No();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=No(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bp(e){var t=of(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rf(n.ownerDocument.documentElement,n)){if(r!==null&&Da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=tu(n,l);var i=tu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vp=dt&&"documentMode"in document&&11>=document.documentMode,dn=null,Di=null,ir=null,Ui=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ui||dn==null||dn!==No(r)||(r=dn,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&yr(ir,r)||(ir=r,r=zo(Di,"onSelect"),0<r.length&&(t=new Ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},ei={},lf={};dt&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function ol(e){if(ei[e])return ei[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return ei[e]=t[n];return e}var af=ol("animationend"),sf=ol("animationiteration"),uf=ol("animationstart"),cf=ol("transitionend"),ff=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){ff.set(e,t),rn(t,[e])}for(var ti=0;ti<ru.length;ti++){var ni=ru[ti],Wp=ni.toLowerCase(),Hp=ni[0].toUpperCase()+ni.slice(1);It(Wp,"on"+Hp)}It(af,"onAnimationEnd");It(sf,"onAnimationIteration");It(uf,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(cf,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,W0(r,t,void 0,e),e.currentTarget=null}function df(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;ou(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;ou(o,a,c),l=s}}}if(_o)throw e=$i,_o=!1,$i=null,e}function B(e,t){var n=t[Qi];n===void 0&&(n=t[Qi]=new Set);var r=e+"__bubble";n.has(r)||(pf(t,e,2,!1),n.add(r))}function ri(e,t,n){var r=0;t&&(r|=4),pf(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[Jr]){e[Jr]=!0,xc.forEach(function(n){n!=="selectionchange"&&(Qp.has(n)||ri(n,!1,e),ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,ri("selectionchange",!1,t))}}function pf(e,t,n,r){switch(Kc(t)){case 1:var o=ip;break;case 4:o=ap;break;default:o=Ta}n=o.bind(null,t,n,e),o=void 0,!Ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function oi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Yt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Tc(function(){var c=l,h=Ma(n),m=[];e:{var g=ff.get(e);if(g!==void 0){var k=Ia,x=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":k=Sp;break;case"focusin":x="focus",k=Gl;break;case"focusout":x="blur",k=Gl;break;case"beforeblur":case"afterblur":k=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Np;break;case af:case sf:case uf:k=pp;break;case cf:k=_p;break;case"scroll":k=sp;break;case"wheel":k=Op;break;case"copy":case"cut":case"paste":k=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Xs}var y=(t&4)!==0,C=!y&&e==="scroll",d=y?g!==null?g+"Capture":null:g;y=[];for(var f=c,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=pr(f,d),w!=null&&y.push(wr(f,w,p)))),C)break;f=f.return}0<y.length&&(g=new k(g,x,null,n,h),m.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Ri&&(x=n.relatedTarget||n.fromElement)&&(Yt(x)||x[pt]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=c,x=x?Yt(x):null,x!==null&&(C=on(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=c),k!==x)){if(y=Qs,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Xs,w="onPointerLeave",d="onPointerEnter",f="pointer"),C=k==null?g:mn(k),p=x==null?g:mn(x),g=new y(w,f+"leave",k,n,h),g.target=C,g.relatedTarget=p,w=null,Yt(h)===c&&(y=new y(d,f+"enter",x,n,h),y.target=p,y.relatedTarget=C,w=y),C=w,k&&x)t:{for(y=k,d=x,f=0,p=y;p;p=sn(p))f++;for(p=0,w=d;w;w=sn(w))p++;for(;0<f-p;)y=sn(y),f--;for(;0<p-f;)d=sn(d),p--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=sn(y),d=sn(d)}y=null}else y=null;k!==null&&lu(m,g,k,y,!1),x!==null&&C!==null&&lu(m,C,x,y,!0)}}e:{if(g=c?mn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var N=$p;else if(Gs(g))if(tf)N=Dp;else{N=Fp;var _=Ip}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Ap);if(N&&(N=N(e,c))){ef(m,N,n,h);break e}_&&_(e,g,c),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Pi(g,"number",g.value)}switch(_=c?mn(c):window,e){case"focusin":(Gs(_)||_.contentEditable==="true")&&(dn=_,Di=c,ir=null);break;case"focusout":ir=Di=dn=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,nu(m,n,h);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":nu(m,n,h)}var j;if(Aa)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else fn?Jc(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Gc&&n.locale!=="ko"&&(fn||b!=="onCompositionStart"?b==="onCompositionEnd"&&fn&&(j=Zc()):(St=h,$a="value"in St?St.value:St.textContent,fn=!0)),_=zo(c,b),0<_.length&&(b=new Ys(b,e,null,n,h),m.push({event:b,listeners:_}),j?b.data=j:(j=qc(n),j!==null&&(b.data=j)))),(j=Mp?zp(e,n):Rp(e,n))&&(c=zo(c,"onBeforeInput"),0<c.length&&(h=new Ys("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=j))}df(m,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=pr(e,n),l!=null&&r.unshift(wr(e,l,o)),l=pr(e,t),l!=null&&r.push(wr(e,l,o))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=pr(n,l),s!=null&&i.unshift(wr(n,s,a))):o||(s=pr(n,l),s!=null&&i.push(wr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Yp=/\r\n?/g,Xp=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Xp,"")}function qr(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(S(425))}function Ro(){}var Bi=null,Vi=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,Zp=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(Gp)}:Hi;function Gp(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Fn,kr="__reactProps$"+Fn,pt="__reactContainer$"+Fn,Qi="__reactEvents$"+Fn,Jp="__reactListeners$"+Fn,qp="__reactHandles$"+Fn;function Yt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[tt])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[tt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ll(e){return e[kr]||null}var Yi=[],hn=-1;function Ft(e){return{current:e}}function V(e){0>hn||(e.current=Yi[hn],Yi[hn]=null,hn--)}function U(e,t){hn++,Yi[hn]=e.current,e.current=t}var $t={},ve=Ft($t),Ee=Ft(!1),Jt=$t;function On(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function Lo(){V(Ee),V(ve)}function uu(e,t,n){if(ve.current!==$t)throw Error(S(168));U(ve,t),U(Ee,n)}function mf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,I0(e)||"Unknown",o));return Y({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,Jt=ve.current,U(ve,e),U(Ee,Ee.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=mf(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,V(Ee),V(ve),U(ve,e)):V(Ee),U(Ee,n)}var at=null,il=!1,ii=!1;function hf(e){at===null?at=[e]:at.push(e)}function em(e){il=!0,hf(e)}function At(){if(!ii&&at!==null){ii=!0;var e=0,t=F;try{var n=at;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,il=!1}catch(o){throw at!==null&&(at=at.slice(e+1)),Ac(za,At),o}finally{F=t,ii=!1}}return null}var gn=[],vn=0,$o=null,Io=0,$e=[],Ie=0,qt=null,st=1,ut="";function Vt(e,t){gn[vn++]=Io,gn[vn++]=$o,$o=e,Io=t}function gf(e,t,n){$e[Ie++]=st,$e[Ie++]=ut,$e[Ie++]=qt,qt=e;var r=st;e=ut;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var l=32-Xe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,st=1<<32-Xe(t)+o|n<<o|r,ut=l+e}else st=1<<l|n<<o|r,ut=e}function Ua(e){e.return!==null&&(Vt(e,1),gf(e,1,0))}function Ba(e){for(;e===$o;)$o=gn[--vn],gn[vn]=null,Io=gn[--vn],gn[vn]=null;for(;e===qt;)qt=$e[--Ie],$e[Ie]=null,ut=$e[--Ie],$e[Ie]=null,st=$e[--Ie],$e[Ie]=null}var be=null,Oe=null,W=!1,Ye=null;function vf(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Oe=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:st,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Oe=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ki(e){if(W){var t=Oe;if(t){var n=t;if(!fu(e,t)){if(Xi(e))throw Error(S(418));t=Pt(n.nextSibling);var r=be;t&&fu(e,t)?vf(r,n):(e.flags=e.flags&-4097|2,W=!1,be=e)}}else{if(Xi(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,be=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function eo(e){if(e!==be)return!1;if(!W)return du(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=Oe)){if(Xi(e))throw yf(),Error(S(418));for(;t;)vf(e,t),t=Pt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=be?Pt(e.stateNode.nextSibling):null;return!0}function yf(){for(var e=Oe;e;)e=Pt(e.nextSibling)}function bn(){Oe=be=null,W=!1}function Va(e){Ye===null?Ye=[e]:Ye.push(e)}var tm=gt.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fo=Ft(null),Ao=null,yn=null,Wa=null;function Ha(){Wa=yn=Ao=null}function Qa(e){var t=Fo.current;V(Fo),e._currentValue=t}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){Ao=e,Wa=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Wa!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Ao===null)throw Error(S(308));yn=e,Ao.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Xt=null;function Ya(e){Xt===null?Xt=[e]:Xt.push(e)}function xf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ya(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ya(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var o=e.updateQueue;xt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(l!==null){var m=o.baseState;i=0,h=c=s=null,a=l;do{var g=a.lane,k=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(g=t,k=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){m=x.call(k,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,g=typeof x=="function"?x.call(k,m,g):x,g==null)break e;m=Y({},m,g);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=k,s=m):h=h.next=k,i|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(s=m),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);tn|=i,e.lanes=i,e.memoizedState=m}}function mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var kf=new yc.Component().refs;function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Mt(e),l=ft(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ot(e,l,o),t!==null&&(Ke(t,e,o,r),ho(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Mt(e),l=ft(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ot(e,l,o),t!==null&&(Ke(t,e,o,r),ho(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Mt(e),o=ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ot(e,o,r),t!==null&&(Ke(t,e,r,n),ho(t,e,r))}};function hu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(o,l):!0}function Sf(e,t,n){var r=!1,o=$t,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(o=Ne(t)?Jt:ve.current,r=t.contextTypes,l=(r=r!=null)?On(e,o):$t),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function Ji(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=kf,Xa(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=De(l):(l=Ne(t)?Jt:ve.current,o.context=On(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gi(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&al.enqueueReplaceState(o,o.state,null),Do(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===kf&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function Cf(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function o(d,f){return d=zt(d,f),d.index=0,d.sibling=null,d}function l(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,w){return f===null||f.tag!==6?(f=pi(p,d.mode,w),f.return=d,f):(f=o(f,p),f.return=d,f)}function s(d,f,p,w){var N=p.type;return N===cn?h(d,f,p.props.children,w,p.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yt&&vu(N)===f.type)?(w=o(f,p.props),w.ref=Xn(d,f,p),w.return=d,w):(w=ko(p.type,p.key,p.props,null,d.mode,w),w.ref=Xn(d,f,p),w.return=d,w)}function c(d,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=mi(p,d.mode,w),f.return=d,f):(f=o(f,p.children||[]),f.return=d,f)}function h(d,f,p,w,N){return f===null||f.tag!==7?(f=Gt(p,d.mode,w,N),f.return=d,f):(f=o(f,p),f.return=d,f)}function m(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=pi(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:return p=ko(f.type,f.key,f.props,null,d.mode,p),p.ref=Xn(d,null,f),p.return=d,p;case un:return f=mi(f,d.mode,p),f.return=d,f;case yt:var w=f._init;return m(d,w(f._payload),p)}if(qn(f)||Vn(f))return f=Gt(f,d.mode,p,null),f.return=d,f;to(d,f)}return null}function g(d,f,p,w){var N=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(d,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wr:return p.key===N?s(d,f,p,w):null;case un:return p.key===N?c(d,f,p,w):null;case yt:return N=p._init,g(d,f,N(p._payload),w)}if(qn(p)||Vn(p))return N!==null?null:h(d,f,p,w,null);to(d,p)}return null}function k(d,f,p,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,a(f,d,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wr:return d=d.get(w.key===null?p:w.key)||null,s(f,d,w,N);case un:return d=d.get(w.key===null?p:w.key)||null,c(f,d,w,N);case yt:var _=w._init;return k(d,f,p,_(w._payload),N)}if(qn(w)||Vn(w))return d=d.get(p)||null,h(f,d,w,N,null);to(f,w)}return null}function x(d,f,p,w){for(var N=null,_=null,j=f,b=f=0,K=null;j!==null&&b<p.length;b++){j.index>b?(K=j,j=null):K=j.sibling;var L=g(d,j,p[b],w);if(L===null){j===null&&(j=K);break}e&&j&&L.alternate===null&&t(d,j),f=l(L,f,b),_===null?N=L:_.sibling=L,_=L,j=K}if(b===p.length)return n(d,j),W&&Vt(d,b),N;if(j===null){for(;b<p.length;b++)j=m(d,p[b],w),j!==null&&(f=l(j,f,b),_===null?N=j:_.sibling=j,_=j);return W&&Vt(d,b),N}for(j=r(d,j);b<p.length;b++)K=k(j,d,b,p[b],w),K!==null&&(e&&K.alternate!==null&&j.delete(K.key===null?b:K.key),f=l(K,f,b),_===null?N=K:_.sibling=K,_=K);return e&&j.forEach(function(Ve){return t(d,Ve)}),W&&Vt(d,b),N}function y(d,f,p,w){var N=Vn(p);if(typeof N!="function")throw Error(S(150));if(p=N.call(p),p==null)throw Error(S(151));for(var _=N=null,j=f,b=f=0,K=null,L=p.next();j!==null&&!L.done;b++,L=p.next()){j.index>b?(K=j,j=null):K=j.sibling;var Ve=g(d,j,L.value,w);if(Ve===null){j===null&&(j=K);break}e&&j&&Ve.alternate===null&&t(d,j),f=l(Ve,f,b),_===null?N=Ve:_.sibling=Ve,_=Ve,j=K}if(L.done)return n(d,j),W&&Vt(d,b),N;if(j===null){for(;!L.done;b++,L=p.next())L=m(d,L.value,w),L!==null&&(f=l(L,f,b),_===null?N=L:_.sibling=L,_=L);return W&&Vt(d,b),N}for(j=r(d,j);!L.done;b++,L=p.next())L=k(j,d,b,L.value,w),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?b:L.key),f=l(L,f,b),_===null?N=L:_.sibling=L,_=L);return e&&j.forEach(function(Un){return t(d,Un)}),W&&Vt(d,b),N}function C(d,f,p,w){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Wr:e:{for(var N=p.key,_=f;_!==null;){if(_.key===N){if(N=p.type,N===cn){if(_.tag===7){n(d,_.sibling),f=o(_,p.props.children),f.return=d,d=f;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yt&&vu(N)===_.type){n(d,_.sibling),f=o(_,p.props),f.ref=Xn(d,_,p),f.return=d,d=f;break e}n(d,_);break}else t(d,_);_=_.sibling}p.type===cn?(f=Gt(p.props.children,d.mode,w,p.key),f.return=d,d=f):(w=ko(p.type,p.key,p.props,null,d.mode,w),w.ref=Xn(d,f,p),w.return=d,d=w)}return i(d);case un:e:{for(_=p.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=o(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=mi(p,d.mode,w),f.return=d,d=f}return i(d);case yt:return _=p._init,C(d,f,_(p._payload),w)}if(qn(p))return x(d,f,p,w);if(Vn(p))return y(d,f,p,w);to(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=o(f,p),f.return=d,d=f):(n(d,f),f=pi(p,d.mode,w),f.return=d,d=f),i(d)):n(d,f)}return C}var Mn=Cf(!0),Ef=Cf(!1),Fr={},rt=Ft(Fr),Sr=Ft(Fr),Cr=Ft(Fr);function Kt(e){if(e===Fr)throw Error(S(174));return e}function Ka(e,t){switch(U(Cr,t),U(Sr,e),U(rt,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bi(t,e)}V(rt),U(rt,t)}function zn(){V(rt),V(Sr),V(Cr)}function Nf(e){Kt(Cr.current);var t=Kt(rt.current),n=bi(t,e.type);t!==n&&(U(Sr,e),U(rt,n))}function Za(e){Sr.current===e&&(V(rt),V(Sr))}var H=Ft(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ai=[];function Ga(){for(var e=0;e<ai.length;e++)ai[e]._workInProgressVersionPrimary=null;ai.length=0}var go=gt.ReactCurrentDispatcher,si=gt.ReactCurrentBatchConfig,en=0,Q=null,ne=null,le=null,Bo=!1,ar=!1,Er=0,nm=0;function pe(){throw Error(S(321))}function Ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function qa(e,t,n,r,o,l){if(en=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?im:am,e=n(r,o),ar){l=0;do{if(ar=!1,Er=0,25<=l)throw Error(S(301));l+=1,le=ne=null,t.updateQueue=null,go.current=sm,e=n(r,o)}while(ar)}if(go.current=Vo,t=ne!==null&&ne.next!==null,en=0,le=ne=Q=null,Bo=!1,t)throw Error(S(300));return e}function es(){var e=Er!==0;return Er=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Q.memoizedState=le=e:le=le.next=e,le}function Ue(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?Q.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?Q.memoizedState=le=e:le=le.next=e}return le}function Nr(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var h=c.lane;if((en&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,i=r):s=s.next=m,Q.lanes|=h,tn|=h}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,Ze(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Q.lanes|=l,tn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ci(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ze(l,t.memoizedState)||(Ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function jf(){}function _f(e,t){var n=Q,r=Ue(),o=t(),l=!Ze(r.memoizedState,o);if(l&&(r.memoizedState=o,Ce=!0),r=r.queue,ts(bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,jr(9,Of.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(S(349));en&30||Pf(n,t,o)}return o}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Of(e,t,n,r){t.value=n,t.getSnapshot=r,Mf(t)&&zf(e)}function bf(e,t,n){return n(function(){Mf(t)&&zf(e)})}function Mf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function zf(e){var t=mt(e,1);t!==null&&Ke(t,e,1,-1)}function yu(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=lm.bind(null,Q,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rf(){return Ue().memoizedState}function vo(e,t,n,r){var o=Je();Q.flags|=e,o.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var o=Ue();r=r===void 0?null:r;var l=void 0;if(ne!==null){var i=ne.memoizedState;if(l=i.destroy,r!==null&&Ja(r,i.deps)){o.memoizedState=jr(t,n,l,r);return}}Q.flags|=e,o.memoizedState=jr(1|t,n,l,r)}function xu(e,t){return vo(8390656,8,e,t)}function ts(e,t){return sl(2048,8,e,t)}function Lf(e,t){return sl(4,2,e,t)}function Tf(e,t){return sl(4,4,e,t)}function $f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,$f.bind(null,t,e),n)}function ns(){}function Ff(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Af(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Df(e,t,n){return en&21?(Ze(n,t)||(n=Bc(),Q.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function rm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=si.transition;si.transition={};try{e(!1),t()}finally{F=n,si.transition=r}}function Uf(){return Ue().memoizedState}function om(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bf(e))Vf(t,n);else if(n=xf(e,t,n,r),n!==null){var o=xe();Ke(n,e,r,o),Wf(n,t,r)}}function lm(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bf(e))Vf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ze(a,i)){var s=t.interleaved;s===null?(o.next=o,Ya(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=xf(e,t,o,r),n!==null&&(o=xe(),Ke(n,e,r,o),Wf(n,t,r))}}function Bf(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Vf(e,t){ar=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}var Vo={readContext:De,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},im={readContext:De,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vo(4194308,4,$f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return vo(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=om.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:ns,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=rm.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Je();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));en&30||Pf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,xu(bf.bind(null,r,l,e),[e]),r.flags|=2048,jr(9,Of.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=ae.identifierPrefix;if(W){var n=ut,r=st;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},am={readContext:De,useCallback:Ff,useContext:De,useEffect:ts,useImperativeHandle:If,useInsertionEffect:Lf,useLayoutEffect:Tf,useMemo:Af,useReducer:ui,useRef:Rf,useState:function(){return ui(Nr)},useDebugValue:ns,useDeferredValue:function(e){var t=Ue();return Df(t,ne.memoizedState,e)},useTransition:function(){var e=ui(Nr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:_f,useId:Uf,unstable_isNewReconciler:!1},sm={readContext:De,useCallback:Ff,useContext:De,useEffect:ts,useImperativeHandle:If,useInsertionEffect:Lf,useLayoutEffect:Tf,useMemo:Af,useReducer:ci,useRef:Rf,useState:function(){return ci(Nr)},useDebugValue:ns,useDeferredValue:function(e){var t=Ue();return ne===null?t.memoizedState=e:Df(t,ne.memoizedState,e)},useTransition:function(){var e=ci(Nr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:_f,useId:Uf,unstable_isNewReconciler:!1};function Rn(e,t){try{var n="",r=t;do n+=$0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function fi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var um=typeof WeakMap=="function"?WeakMap:Map;function Hf(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,ua=r),qi(e,t)},n}function Qf(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){qi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){qi(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new um;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cm.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Su(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var cm=gt.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?Ef(t,null,n,r):Mn(t,e.child,n,r)}function Cu(e,t,n,r,o){n=n.render;var l=t.ref;return Nn(t,o),r=qa(e,t,n,r,l,o),n=es(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(W&&n&&Ua(t),t.flags|=1,ye(e,t,r,o),t.child)}function Eu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!cs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Yf(e,t,l,r,o)):(e=ko(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(i,r)&&e.ref===t.ref)return ht(e,t,o)}return t.flags|=1,e=zt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Yf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(yr(l,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,ht(e,t,o)}return ea(e,t,n,r,o)}function Xf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(wn,Pe),Pe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(wn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(wn,Pe),Pe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(wn,Pe),Pe|=r;return ye(e,t,o,n),t.child}function Kf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ea(e,t,n,r,o){var l=Ne(n)?Jt:ve.current;return l=On(t,l),Nn(t,o),n=qa(e,t,n,r,l,o),r=es(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(W&&r&&Ua(t),t.flags|=1,ye(e,t,n,o),t.child)}function Nu(e,t,n,r,o){if(Ne(n)){var l=!0;To(t)}else l=!1;if(Nn(t,o),t.stateNode===null)yo(e,t),Sf(t,n,r),Ji(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=Ne(n)?Jt:ve.current,c=On(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&gu(t,i,r,c),xt=!1;var g=t.memoizedState;i.state=g,Do(t,r,i,o),s=t.memoizedState,a!==r||g!==s||Ee.current||xt?(typeof h=="function"&&(Gi(t,n,h,r),s=t.memoizedState),(a=xt||hu(t,n,a,r,g,s,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,wf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:He(t.type,a),i.props=c,m=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=Ne(n)?Jt:ve.current,s=On(t,s));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||g!==s)&&gu(t,i,r,s),xt=!1,g=t.memoizedState,i.state=g,Do(t,r,i,o);var x=t.memoizedState;a!==m||g!==x||Ee.current||xt?(typeof k=="function"&&(Gi(t,n,k,r),x=t.memoizedState),(c=xt||hu(t,n,c,r,g,x,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ta(e,t,n,r,l,o)}function ta(e,t,n,r,o,l){Kf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&cu(t,n,!1),ht(e,t,l);r=t.stateNode,cm.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Mn(t,e.child,null,l),t.child=Mn(t,null,a,l)):ye(e,t,a,l),t.memoizedState=r.state,o&&cu(t,n,!0),t.child}function Zf(e){var t=e.stateNode;t.pendingContext?uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uu(e,t.context,!1),Ka(e,t.containerInfo)}function ju(e,t,n,r,o){return bn(),Va(o),t.flags|=256,ye(e,t,n,r),t.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gf(e,t,n){var r=t.pendingProps,o=H.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(H,o&1),e===null)return Ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=fl(i,r,0,null),e=Gt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ra(n),t.memoizedState=na,e):rs(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return fm(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=zt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=zt(a,l):(l=Gt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ra(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=na,r}return l=e.child,e=l.sibling,r=zt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rs(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&Va(r),Mn(t,e.child,null,n),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fm(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=fi(Error(S(422))),no(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=fl({mode:"visible",children:r.children},o,0,null),l=Gt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Mn(t,e.child,null,i),t.child.memoizedState=ra(i),t.memoizedState=na,l);if(!(t.mode&1))return no(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(S(419)),r=fi(l,r,void 0),no(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ce||a){if(r=ae,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,mt(e,o),Ke(r,e,o,-1))}return us(),r=fi(Error(S(421))),no(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Em.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Oe=Pt(o.nextSibling),be=t,W=!0,Ye=null,e!==null&&($e[Ie++]=st,$e[Ie++]=ut,$e[Ie++]=qt,st=e.id,ut=e.overflow,qt=t),t=rs(t,r.children),t.flags|=4096,t)}function _u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function di(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Jf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ye(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_u(e,n,t);else if(e.tag===19)_u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(H,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),di(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}di(t,!0,n,null,l);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dm(e,t,n){switch(t.tag){case 3:Zf(t),bn();break;case 5:Nf(t);break;case 1:Ne(t.type)&&To(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(Fo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Gf(e,t,n):(U(H,H.current&1),e=ht(e,t,n),e!==null?e.sibling:null);U(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,n)}return ht(e,t,n)}var qf,oa,ed,td;qf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oa=function(){};ed=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(rt.current);var l=null;switch(n){case"input":o=ji(e,o),r=ji(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=Oi(e,o),r=Oi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ro)}Mi(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&B("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};td=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pm(e,t,n){var r=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&Lo(),me(t),null;case 3:return r=t.stateNode,zn(),V(Ee),V(ve),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(da(Ye),Ye=null))),oa(e,t),me(t),null;case 5:Za(t);var o=Kt(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)ed(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=Kt(rt.current),eo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[tt]=t,r[kr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<tr.length;o++)B(tr[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":$s(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":Fs(r,l),B("invalid",r)}Mi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&qr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&qr(r.textContent,a,e),o=["children",""+a]):fr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":Hr(r),Is(r,l,!0);break;case"textarea":Hr(r),As(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_c(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[tt]=t,e[kr]=r,qf(e,t,!1,!1),t.stateNode=e;e:{switch(i=zi(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<tr.length;o++)B(tr[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":$s(e,r),o=ji(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":Fs(e,r),o=Oi(e,r),B("invalid",e);break;default:o=r}Mi(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?bc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&dr(e,s):typeof s=="number"&&dr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(fr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&B("scroll",e):s!=null&&_a(e,l,s,i))}switch(n){case"input":Hr(e),Is(e,r,!1);break;case"textarea":Hr(e),As(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?kn(e,!!r.multiple,l,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Cr.current),Kt(rt.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(l=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return me(t),null;case 13:if(V(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Oe!==null&&t.mode&1&&!(t.flags&128))yf(),bn(),t.flags|=98560,l=!1;else if(l=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[tt]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else Ye!==null&&(da(Ye),Ye=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?re===0&&(re=3):us())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return zn(),oa(e,t),e===null&&xr(t.stateNode.containerInfo),me(t),null;case 10:return Qa(t.type._context),me(t),null;case 17:return Ne(t.type)&&Lo(),me(t),null;case 19:if(V(H),l=t.memoizedState,l===null)return me(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Kn(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Uo(e),i!==null){for(t.flags|=128,Kn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>Ln&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return me(t),null}else 2*G()-l.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=H.current,U(H,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function mm(e,t){switch(Ba(t),t.tag){case 1:return Ne(t.type)&&Lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),V(Ee),V(ve),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(V(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(H),null;case 4:return zn(),null;case 10:return Qa(t.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var ro=!1,ge=!1,hm=typeof WeakSet=="function"?WeakSet:Set,P=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){X(e,t,r)}}var Pu=!1;function gm(e,t){if(Bi=bo,e=of(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var k;m!==n||o!==0&&m.nodeType!==3||(a=i+o),m!==l||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(k=m.firstChild)!==null;)g=m,m=k;for(;;){if(m===e)break t;if(g===n&&++c===o&&(a=i),g===l&&++h===r&&(s=i),(k=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vi={focusedElem:e,selectionRange:n},bo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,C=x.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:He(t.type,y),C);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=Pu,Pu=!1,x}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&la(t,n,l)}o=o.next}while(o!==r)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nd(e){var t=e.alternate;t!==null&&(e.alternate=null,nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[kr],delete t[Qi],delete t[Jp],delete t[qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ro));else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}var ue=null,Qe=!1;function vt(e,t,n){for(n=n.child;n!==null;)od(e,t,n),n=n.sibling}function od(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:ge||xn(n,t);case 6:var r=ue,o=Qe;ue=null,vt(e,t,n),ue=r,Qe=o,ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?li(e.parentNode,n):e.nodeType===1&&li(e,n),gr(e)):li(ue,n.stateNode));break;case 4:r=ue,o=Qe,ue=n.stateNode.containerInfo,Qe=!0,vt(e,t,n),ue=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&la(n,t,i),o=o.next}while(o!==r)}vt(e,t,n);break;case 1:if(!ge&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,vt(e,t,n),ge=r):vt(e,t,n);break;default:vt(e,t,n)}}function bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hm),t.forEach(function(r){var o=Nm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Qe=!1;break e;case 3:ue=a.stateNode.containerInfo,Qe=!0;break e;case 4:ue=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(ue===null)throw Error(S(160));od(l,i,o),ue=null,Qe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}function ld(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ge(e),r&4){try{sr(3,e,e.return),ul(3,e)}catch(y){X(e,e.return,y)}try{sr(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:We(t,e),Ge(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(We(t,e),Ge(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var o=e.stateNode;try{dr(o,"")}catch(y){X(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Nc(o,l),zi(a,i);var c=zi(a,l);for(i=0;i<s.length;i+=2){var h=s[i],m=s[i+1];h==="style"?bc(o,m):h==="dangerouslySetInnerHTML"?Pc(o,m):h==="children"?dr(o,m):_a(o,h,m,c)}switch(a){case"input":_i(o,l);break;case"textarea":jc(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?kn(o,!!l.multiple,k,!1):g!==!!l.multiple&&(l.defaultValue!=null?kn(o,!!l.multiple,l.defaultValue,!0):kn(o,!!l.multiple,l.multiple?[]:"",!1))}o[kr]=l}catch(y){X(e,e.return,y)}}break;case 6:if(We(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(y){X(e,e.return,y)}}break;case 3:if(We(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:We(t,e),Ge(e);break;case 13:We(t,e),Ge(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(is=G())),r&4&&bu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||h,We(t,e),ge=c):We(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(m=P=h;P!==null;){switch(g=P,k=g.child,g.tag){case 0:case 11:case 14:case 15:sr(4,g,g.return);break;case 1:xn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:xn(g,g.return);break;case 22:if(g.memoizedState!==null){zu(m);continue}}k!==null?(k.return=g,P=k):zu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Oc("display",i))}catch(y){X(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){X(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(t,e),Ge(e),r&4&&bu(e);break;case 21:break;default:We(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(dr(o,""),r.flags&=-33);var l=Ou(e);sa(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ou(e);aa(e,a,i);break;default:throw Error(S(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,n){P=e,id(e)}function id(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ro;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ge;a=ro;var c=ge;if(ro=i,(ge=s)&&!c)for(P=o;P!==null;)i=P,s=i.child,i.tag===22&&i.memoizedState!==null?Ru(o):s!==null?(s.return=i,P=s):Ru(o);for(;l!==null;)P=l,id(l),l=l.sibling;P=o,ro=a,ge=c}Mu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,P=l):Mu(e)}}function Mu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&mu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&gr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ge||t.flags&512&&ia(t)}catch(g){X(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function zu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ru(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){X(t,o,s)}}var l=t.return;try{ia(t)}catch(s){X(t,l,s)}break;case 5:var i=t.return;try{ia(t)}catch(s){X(t,i,s)}}}catch(s){X(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var ym=Math.ceil,Wo=gt.ReactCurrentDispatcher,os=gt.ReactCurrentOwner,Ae=gt.ReactCurrentBatchConfig,T=0,ae=null,q=null,fe=0,Pe=0,wn=Ft(0),re=0,_r=null,tn=0,cl=0,ls=0,ur=null,Se=null,is=0,Ln=1/0,it=null,Ho=!1,ua=null,bt=null,oo=!1,Ct=null,Qo=0,cr=0,ca=null,xo=-1,wo=0;function xe(){return T&6?G():xo!==-1?xo:xo=G()}function Mt(e){return e.mode&1?T&2&&fe!==0?fe&-fe:tm.transition!==null?(wo===0&&(wo=Bc()),wo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e):1}function Ke(e,t,n,r){if(50<cr)throw cr=0,ca=null,Error(S(185));Tr(e,n,r),(!(T&2)||e!==ae)&&(e===ae&&(!(T&2)&&(cl|=n),re===4&&kt(e,fe)),je(e,r),n===1&&T===0&&!(t.mode&1)&&(Ln=G()+500,il&&At()))}function je(e,t){var n=e.callbackNode;tp(e,t);var r=Oo(e,e===ae?fe:0);if(r===0)n!==null&&Bs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bs(n),t===1)e.tag===0?em(Lu.bind(null,e)):hf(Lu.bind(null,e)),Zp(function(){!(T&6)&&At()}),n=null;else{switch(Vc(r)){case 1:n=za;break;case 4:n=Dc;break;case 16:n=Po;break;case 536870912:n=Uc;break;default:n=Po}n=md(n,ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ad(e,t){if(xo=-1,wo=0,T&6)throw Error(S(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Oo(e,e===ae?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var o=T;T|=2;var l=ud();(ae!==e||fe!==t)&&(it=null,Ln=G()+500,Zt(e,t));do try{km();break}catch(a){sd(e,a)}while(!0);Ha(),Wo.current=l,T=o,q!==null?t=0:(ae=null,fe=0,t=re)}if(t!==0){if(t===2&&(o=Ii(e),o!==0&&(r=o,t=fa(e,o))),t===1)throw n=_r,Zt(e,0),kt(e,r),je(e,G()),n;if(t===6)kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!xm(o)&&(t=Yo(e,r),t===2&&(l=Ii(e),l!==0&&(r=l,t=fa(e,l))),t===1))throw n=_r,Zt(e,0),kt(e,r),je(e,G()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Wt(e,Se,it);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=is+500-G(),10<t)){if(Oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hi(Wt.bind(null,e,Se,it),t);break}Wt(e,Se,it);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Xe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ym(r/1960))-r,10<r){e.timeoutHandle=Hi(Wt.bind(null,e,Se,it),r);break}Wt(e,Se,it);break;case 5:Wt(e,Se,it);break;default:throw Error(S(329))}}}return je(e,G()),e.callbackNode===n?ad.bind(null,e):null}function fa(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=Se,Se=n,t!==null&&da(t)),e}function da(e){Se===null?Se=e:Se.push.apply(Se,e)}function xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ze(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~ls,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(T&6)throw Error(S(327));jn();var t=Oo(e,0);if(!(t&1))return je(e,G()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=Ii(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=_r,Zt(e,0),kt(e,t),je(e,G()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Se,it),je(e,G()),null}function as(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(Ln=G()+500,il&&At())}}function nn(e){Ct!==null&&Ct.tag===0&&!(T&6)&&jn();var t=T;T|=1;var n=Ae.transition,r=F;try{if(Ae.transition=null,F=1,e)return e()}finally{F=r,Ae.transition=n,T=t,!(T&6)&&At()}}function ss(){Pe=wn.current,V(wn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:zn(),V(Ee),V(ve),Ga();break;case 5:Za(r);break;case 4:zn();break;case 13:V(H);break;case 19:V(H);break;case 10:Qa(r.type._context);break;case 22:case 23:ss()}n=n.return}if(ae=e,q=e=zt(e.current,null),fe=Pe=t,re=0,_r=null,ls=cl=tn=0,Se=ur=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Xt=null}return e}function sd(e,t){do{var n=q;try{if(Ha(),go.current=Vo,Bo){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Bo=!1}if(en=0,le=ne=Q=null,ar=!1,Er=0,os.current=null,n===null||n.return===null){re=1,_r=t,q=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=ku(i);if(k!==null){k.flags&=-257,Su(k,i,a,l,t),k.mode&1&&wu(l,c,t),t=k,s=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(s),t.updateQueue=y}else x.add(s);break e}else{if(!(t&1)){wu(l,c,t),us();break e}s=Error(S(426))}}else if(W&&a.mode&1){var C=ku(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Su(C,i,a,l,t),Va(Rn(s,a));break e}}l=s=Rn(s,a),re!==4&&(re=2),ur===null?ur=[l]:ur.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Hf(l,s,t);pu(l,d);break e;case 1:a=s;var f=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(bt===null||!bt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Qf(l,a,t);pu(l,w);break e}}l=l.return}while(l!==null)}fd(n)}catch(N){t=N,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ud(){var e=Wo.current;return Wo.current=Vo,e===null?Vo:e}function us(){(re===0||re===3||re===2)&&(re=4),ae===null||!(tn&268435455)&&!(cl&268435455)||kt(ae,fe)}function Yo(e,t){var n=T;T|=2;var r=ud();(ae!==e||fe!==t)&&(it=null,Zt(e,t));do try{wm();break}catch(o){sd(e,o)}while(!0);if(Ha(),T=n,Wo.current=r,q!==null)throw Error(S(261));return ae=null,fe=0,re}function wm(){for(;q!==null;)cd(q)}function km(){for(;q!==null&&!Q0();)cd(q)}function cd(e){var t=pd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?fd(e):q=t,os.current=null}function fd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mm(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,q=null;return}}else if(n=pm(n,t,Pe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);re===0&&(re=5)}function Wt(e,t,n){var r=F,o=Ae.transition;try{Ae.transition=null,F=1,Sm(e,t,n,r)}finally{Ae.transition=o,F=r}return null}function Sm(e,t,n,r){do jn();while(Ct!==null);if(T&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(np(e,l),e===ae&&(q=ae=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,md(Po,function(){return jn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ae.transition,Ae.transition=null;var i=F;F=1;var a=T;T|=4,os.current=null,gm(e,n),ld(n,e),Bp(Vi),bo=!!Bi,Vi=Bi=null,e.current=n,vm(n),Y0(),T=a,F=i,Ae.transition=l}else e.current=n;if(oo&&(oo=!1,Ct=e,Qo=o),l=e.pendingLanes,l===0&&(bt=null),Z0(n.stateNode),je(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ho)throw Ho=!1,e=ua,ua=null,e;return Qo&1&&e.tag!==0&&jn(),l=e.pendingLanes,l&1?e===ca?cr++:(cr=0,ca=e):cr=0,At(),null}function jn(){if(Ct!==null){var e=Vc(Qo),t=Ae.transition,n=F;try{if(Ae.transition=null,F=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Qo=0,T&6)throw Error(S(331));var o=T;for(T|=4,P=e.current;P!==null;){var l=P,i=l.child;if(P.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:sr(8,h,l)}var m=h.child;if(m!==null)m.return=h,P=m;else for(;P!==null;){h=P;var g=h.sibling,k=h.return;if(nd(h),h===c){P=null;break}if(g!==null){g.return=k,P=g;break}P=k}}}var x=l.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}P=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,P=i;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:sr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,P=d;break e}P=l.return}}var f=e.current;for(P=f;P!==null;){i=P;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,P=p;else e:for(i=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(N){X(a,a.return,N)}if(a===i){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(T=o,At(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{F=n,Ae.transition=t}}return!1}function Tu(e,t,n){t=Rn(n,t),t=Hf(e,t,1),e=Ot(e,t,1),t=xe(),e!==null&&(Tr(e,1,t),je(e,t))}function X(e,t,n){if(e.tag===3)Tu(e,e,n);else for(;t!==null;){if(t.tag===3){Tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Rn(n,e),e=Qf(t,e,1),t=Ot(t,e,1),e=xe(),t!==null&&(Tr(t,1,e),je(t,e));break}}t=t.return}}function Cm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(fe&n)===n&&(re===4||re===3&&(fe&130023424)===fe&&500>G()-is?Zt(e,0):ls|=n),je(e,t)}function dd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=xe();e=mt(e,t),e!==null&&(Tr(e,t,n),je(e,n))}function Em(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dd(e,n)}function Nm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),dd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,dm(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,W&&t.flags&1048576&&gf(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yo(e,t),e=t.pendingProps;var o=On(t,ve.current);Nn(t,n),o=qa(null,t,r,e,o,n);var l=es();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(l=!0,To(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xa(t),o.updater=al,t.stateNode=o,o._reactInternals=t,Ji(t,r,e,n),t=ta(null,t,r,!0,l,n)):(t.tag=0,W&&l&&Ua(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=_m(r),e=He(r,e),o){case 0:t=ea(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=Cu(null,t,r,e,n);break e;case 14:t=Eu(null,t,r,He(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ea(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Nu(e,t,r,o,n);case 3:e:{if(Zf(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,wf(e,t),Do(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Rn(Error(S(423)),t),t=ju(e,t,r,n,o);break e}else if(r!==o){o=Rn(Error(S(424)),t),t=ju(e,t,r,n,o);break e}else for(Oe=Pt(t.stateNode.containerInfo.firstChild),be=t,W=!0,Ye=null,n=Ef(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===o){t=ht(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Nf(t),e===null&&Ki(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Wi(r,o)?i=null:l!==null&&Wi(r,l)&&(t.flags|=32),Kf(e,t),ye(e,t,i,n),t.child;case 6:return e===null&&Ki(t),null;case 13:return Gf(e,t,n);case 4:return Ka(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Cu(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,U(Fo,r._currentValue),r._currentValue=i,l!==null)if(Ze(l.value,i)){if(l.children===o.children&&!Ee.current){t=ht(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ft(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Zi(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Zi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Nn(t,n),o=De(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),Eu(e,t,r,o,n);case 15:return Yf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),yo(e,t),t.tag=1,Ne(r)?(e=!0,To(t)):e=!1,Nn(t,n),Sf(t,r,o),Ji(t,r,o,n),ta(null,t,r,!0,e,n);case 19:return Jf(e,t,n);case 22:return Xf(e,t,n)}throw Error(S(156,t.tag))};function md(e,t){return Ac(e,t)}function jm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new jm(e,t,n,r)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _m(e){if(typeof e=="function")return cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oa)return 11;if(e===ba)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ko(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")cs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case cn:return Gt(n.children,o,l,t);case Pa:i=8,o|=8;break;case Si:return e=Fe(12,n,t,o|2),e.elementType=Si,e.lanes=l,e;case Ci:return e=Fe(13,n,t,o),e.elementType=Ci,e.lanes=l,e;case Ei:return e=Fe(19,n,t,o),e.elementType=Ei,e.lanes=l,e;case Sc:return fl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wc:i=10;break e;case kc:i=9;break e;case Oa:i=11;break e;case ba:i=14;break e;case yt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Fe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Gt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Sc,e.lanes=n,e.stateNode={isHidden:!1},e}function pi(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function mi(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,o,l,i,a,s){return e=new Pm(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Fe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(l),e}function Om(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hd(e){if(!e)return $t;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return mf(e,n,t)}return t}function gd(e,t,n,r,o,l,i,a,s){return e=fs(n,r,!0,e,o,l,i,a,s),e.context=hd(null),n=e.current,r=xe(),o=Mt(n),l=ft(r,o),l.callback=t??null,Ot(n,l,o),e.current.lanes=o,Tr(e,o,r),je(e,r),e}function dl(e,t,n,r){var o=t.current,l=xe(),i=Mt(o);return n=hd(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(o,t,i),e!==null&&(Ke(e,o,i,l),ho(e,o,i)),i}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ds(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function bm(){return null}var vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ps(e){this._internalRoot=e}pl.prototype.render=ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));dl(e,t,null,null)};pl.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){dl(null,e,null,null)}),t[pt]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Xc(e)}};function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function Mm(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Xo(i);l.call(c)}}var i=gd(t,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=i,e[pt]=i.current,xr(e.nodeType===8?e.parentNode:e),nn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Xo(s);a.call(c)}}var s=fs(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=s,e[pt]=s.current,xr(e.nodeType===8?e.parentNode:e),nn(function(){dl(t,s,n,r)}),s}function hl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Xo(i);a.call(s)}}dl(t,i,e,o)}else i=Mm(n,t,e,o,r);return Xo(i)}Wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(Ra(t,n|1),je(t,G()),!(T&6)&&(Ln=G()+500,At()))}break;case 13:nn(function(){var r=mt(e,1);if(r!==null){var o=xe();Ke(r,e,1,o)}}),ds(e,1)}};La=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=xe();Ke(t,e,134217728,n)}ds(e,134217728)}};Hc=function(e){if(e.tag===13){var t=Mt(e),n=mt(e,t);if(n!==null){var r=xe();Ke(n,e,t,r)}ds(e,t)}};Qc=function(){return F};Yc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Li=function(e,t,n){switch(t){case"input":if(_i(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ll(r);if(!o)throw Error(S(90));Ec(r),_i(r,o)}}}break;case"textarea":jc(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};Rc=as;Lc=nn;var zm={usingClientEntryPoint:!1,Events:[Ir,mn,ll,Mc,zc,as]},Zn={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Rm={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{tl=lo.inject(Rm),nt=lo}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ms(t))throw Error(S(200));return Om(e,t,null,n)};Re.createRoot=function(e,t){if(!ms(e))throw Error(S(299));var n=!1,r="",o=vd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,o),e[pt]=t.current,xr(e.nodeType===8?e.parentNode:e),new ps(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Ic(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return nn(e)};Re.hydrate=function(e,t,n){if(!ml(t))throw Error(S(200));return hl(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!ms(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=vd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=gd(t,null,e,1,n??null,o,!1,l,i),e[pt]=t.current,xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new pl(t)};Re.render=function(e,t,n){if(!ml(t))throw Error(S(200));return hl(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!ml(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Re.unstable_batchedUpdates=as;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return hl(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd)}catch(e){console.error(e)}}yd(),hc.exports=Re;var Lm=hc.exports,Fu=Lm;wi.createRoot=Fu.createRoot,wi.hydrateRoot=Fu.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pr.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Au="popstate";function Tm(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return pa("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ko(o)}return Im(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $m(){return Math.random().toString(36).substr(2,8)}function Du(e,t){return{usr:e.state,key:e.key,idx:t}}function pa(e,t,n,r){return n===void 0&&(n=null),Pr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?An(t):t,{state:n,key:t&&t.key||r||$m()})}function Ko(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function An(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Im(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=Et.Pop,s=null,c=h();c==null&&(c=0,i.replaceState(Pr({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function m(){a=Et.Pop;let C=h(),d=C==null?null:C-c;c=C,s&&s({action:a,location:y.location,delta:d})}function g(C,d){a=Et.Push;let f=pa(y.location,C,d);n&&n(f,C),c=h()+1;let p=Du(f,c),w=y.createHref(f);try{i.pushState(p,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(w)}l&&s&&s({action:a,location:y.location,delta:1})}function k(C,d){a=Et.Replace;let f=pa(y.location,C,d);n&&n(f,C),c=h();let p=Du(f,c),w=y.createHref(f);i.replaceState(p,"",w),l&&s&&s({action:a,location:y.location,delta:0})}function x(C){let d=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof C=="string"?C:Ko(C);return f=f.replace(/ $/,"%20"),ee(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let y={get action(){return a},get location(){return e(o,i)},listen(C){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Au,m),s=C,()=>{o.removeEventListener(Au,m),s=null}},createHref(C){return t(o,C)},createURL:x,encodeLocation(C){let d=x(C);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:k,go(C){return i.go(C)}};return y}var Uu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uu||(Uu={}));function Fm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?An(t):t,o=hs(r.pathname||"/",n);if(o==null)return null;let l=wd(e);Am(l);let i=null;for(let a=0;i==null&&a<l.length;++a){let s=Gm(o);i=Xm(l[a],s)}return i}function wd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(ee(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Rt([r,s.relativePath]),h=n.concat(s);l.children&&l.children.length>0&&(ee(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wd(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Qm(c,l.index),routesMeta:h})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of kd(l.path))o(l,i,s)}),t}function kd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=kd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Am(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ym(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Dm=/^:[\w-]+$/,Um=3,Bm=2,Vm=1,Wm=10,Hm=-2,Bu=e=>e==="*";function Qm(e,t){let n=e.split("/"),r=n.length;return n.some(Bu)&&(r+=Hm),t&&(r+=Bm),n.filter(o=>!Bu(o)).reduce((o,l)=>o+(Dm.test(l)?Um:l===""?Vm:Wm),r)}function Ym(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Xm(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",h=Km({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let m=a.route;l.push({params:r,pathname:Rt([o,h.pathname]),pathnameBase:t1(Rt([o,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(o=Rt([o,h.pathnameBase]))}return l}function Km(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:k}=h;if(g==="*"){let y=a[m]||"";i=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[m];return k&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function Zm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Gm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Jm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?An(e):e;return{pathname:n?n.startsWith("/")?n:qm(n,t):t,search:n1(r),hash:r1(o)}}function qm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function hi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sd(e,t){let n=e1(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=An(e):(o=Pr({},e),ee(!o.pathname||!o.pathname.includes("?"),hi("?","pathname","search",o)),ee(!o.pathname||!o.pathname.includes("#"),hi("#","pathname","hash",o)),ee(!o.search||!o.search.includes("#"),hi("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let m=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}a=m>=0?t[m]:"/"}let s=Jm(o,a),c=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const Rt=e=>e.join("/").replace(/\/\/+/g,"/"),t1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ed=["post","put","patch","delete"];new Set(Ed);const l1=["get",...Ed];new Set(l1);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}const gs=v.createContext(null),i1=v.createContext(null),ln=v.createContext(null),gl=v.createContext(null),an=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Nd=v.createContext(null);function a1(e,t){let{relative:n}=t===void 0?{}:t;Ar()||ee(!1);let{basename:r,navigator:o}=v.useContext(ln),{hash:l,pathname:i,search:a}=_d(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:Rt([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Ar(){return v.useContext(gl)!=null}function Dt(){return Ar()||ee(!1),v.useContext(gl).location}function jd(e){v.useContext(ln).static||v.useLayoutEffect(e)}function s1(){let{isDataRoute:e}=v.useContext(an);return e?k1():u1()}function u1(){Ar()||ee(!1);let e=v.useContext(gs),{basename:t,future:n,navigator:r}=v.useContext(ln),{matches:o}=v.useContext(an),{pathname:l}=Dt(),i=JSON.stringify(Sd(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return jd(()=>{a.current=!0}),v.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=Cd(c,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Rt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,i,l,e])}function _d(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(ln),{matches:o}=v.useContext(an),{pathname:l}=Dt(),i=JSON.stringify(Sd(o,r.v7_relativeSplatPath));return v.useMemo(()=>Cd(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function c1(e,t){return f1(e,t)}function f1(e,t,n,r){Ar()||ee(!1);let{navigator:o}=v.useContext(ln),{matches:l}=v.useContext(an),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=Dt(),h;if(t){var m;let C=typeof t=="string"?An(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||ee(!1),h=C}else h=c;let g=h.pathname||"/",k=g;if(s!=="/"){let C=s.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=Fm(e,{pathname:k}),y=g1(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Rt([s,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Rt([s,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,r);return t&&y?v.createElement(gl.Provider,{value:{location:Or({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Et.Pop}},y):y}function d1(){let e=w1(),t=o1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const p1=v.createElement(d1,null);class m1 extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(an.Provider,{value:this.props.routeContext},v.createElement(Nd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function h1(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(gs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(an.Provider,{value:t},r)}function g1(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let h=i.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id]));h>=0||ee(!1),i=i.slice(0,Math.min(i.length,h+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let m=i[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:k}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||x){s=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,m,g)=>{let k,x=!1,y=null,C=null;n&&(k=a&&m.route.id?a[m.route.id]:void 0,y=m.route.errorElement||p1,s&&(c<0&&g===0?(S1("route-fallback",!1),x=!0,C=null):c===g&&(x=!0,C=m.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,g+1)),f=()=>{let p;return k?p=y:x?p=C:m.route.Component?p=v.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,v.createElement(h1,{match:m,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?v.createElement(m1,{location:n.location,revalidation:n.revalidation,component:y,error:k,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Pd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pd||{}),Zo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zo||{});function v1(e){let t=v.useContext(gs);return t||ee(!1),t}function y1(e){let t=v.useContext(i1);return t||ee(!1),t}function x1(e){let t=v.useContext(an);return t||ee(!1),t}function Od(e){let t=x1(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function w1(){var e;let t=v.useContext(Nd),n=y1(Zo.UseRouteError),r=Od(Zo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function k1(){let{router:e}=v1(Pd.UseNavigateStable),t=Od(Zo.UseNavigateStable),n=v.useRef(!1);return jd(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Or({fromRouteId:t},l)))},[e,t])}const Vu={};function S1(e,t,n){!t&&!Vu[e]&&(Vu[e]=!0)}function Ht(e){ee(!1)}function C1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Et.Pop,navigator:l,static:i=!1,future:a}=e;Ar()&&ee(!1);let s=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:l,static:i,future:Or({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=An(r));let{pathname:h="/",search:m="",hash:g="",state:k=null,key:x="default"}=r,y=v.useMemo(()=>{let C=hs(h,s);return C==null?null:{location:{pathname:C,search:m,hash:g,state:k,key:x},navigationType:o}},[s,h,m,g,k,x,o]);return y==null?null:v.createElement(ln.Provider,{value:c},v.createElement(gl.Provider,{children:n,value:y}))}function E1(e){let{children:t,location:n}=e;return c1(ma(t),n)}new Promise(()=>{});function ma(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,ma(r.props.children,l));return}r.type!==Ht&&ee(!1),!r.props.index||!r.props.children||ee(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ma(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}function N1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function j1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _1(e,t){return e.button===0&&(!t||t==="_self")&&!j1(e)}const P1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],O1="6";try{window.__reactRouterVersion=O1}catch{}const b1="startTransition",Wu=xi[b1];function M1(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=Tm({window:o,v5Compat:!0}));let i=l.current,[a,s]=v.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},h=v.useCallback(m=>{c&&Wu?Wu(()=>s(m)):s(m)},[s,c]);return v.useLayoutEffect(()=>i.listen(h),[i,h]),v.createElement(C1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ie=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:c,preventScrollReset:h,unstable_viewTransition:m}=t,g=N1(t,P1),{basename:k}=v.useContext(ln),x,y=!1;if(typeof c=="string"&&R1.test(c)&&(x=c,z1))try{let p=new URL(window.location.href),w=c.startsWith("//")?new URL(p.protocol+c):new URL(c),N=hs(w.pathname,k);w.origin===p.origin&&N!=null?c=N+w.search+w.hash:y=!0}catch{}let C=a1(c,{relative:o}),d=L1(c,{replace:i,state:a,target:s,preventScrollReset:h,relative:o,unstable_viewTransition:m});function f(p){r&&r(p),p.defaultPrevented||d(p)}return v.createElement("a",ha({},g,{href:x||C,onClick:y||l?r:f,ref:n,target:s}))});var Hu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hu||(Hu={}));var Qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qu||(Qu={}));function L1(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a}=t===void 0?{}:t,s=s1(),c=Dt(),h=_d(e,{relative:i});return v.useCallback(m=>{if(_1(m,n)){m.preventDefault();let g=r!==void 0?r:Ko(c)===Ko(h);s(e,{replace:g,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a})}},[c,s,h,r,o,n,e,l,i,a])}function T1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var I1=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=T1(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",Go="-moz-",$="-webkit-",bd="comm",vs="rule",ys="decl",F1="@import",Md="@keyframes",A1="@layer",D1=Math.abs,vl=String.fromCharCode,U1=Object.assign;function B1(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function zd(e){return e.trim()}function V1(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function ga(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function br(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function xs(e){return e.length}function io(e,t){return t.push(e),e}function W1(e,t){return e.map(t).join("")}var yl=1,Tn=1,Rd=0,_e=0,J=0,Dn="";function xl(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:yl,column:Tn,length:i,return:""}}function Gn(e,t){return U1(xl("",null,null,"",null,null,0),e,{length:-e.length},t)}function H1(){return J}function Q1(){return J=_e>0?ce(Dn,--_e):0,Tn--,J===10&&(Tn=1,yl--),J}function Me(){return J=_e<Rd?ce(Dn,_e++):0,Tn++,J===10&&(Tn=1,yl++),J}function ot(){return ce(Dn,_e)}function So(){return _e}function Dr(e,t){return br(Dn,e,t)}function Mr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ld(e){return yl=Tn=1,Rd=qe(Dn=e),_e=0,[]}function Td(e){return Dn="",e}function Co(e){return zd(Dr(_e-1,va(e===91?e+2:e===40?e+1:e)))}function Y1(e){for(;(J=ot())&&J<33;)Me();return Mr(e)>2||Mr(J)>3?"":" "}function X1(e,t){for(;--t&&Me()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Dr(e,So()+(t<6&&ot()==32&&Me()==32))}function va(e){for(;Me();)switch(J){case e:return _e;case 34:case 39:e!==34&&e!==39&&va(J);break;case 40:e===41&&va(e);break;case 92:Me();break}return _e}function K1(e,t){for(;Me()&&e+J!==57;)if(e+J===84&&ot()===47)break;return"/*"+Dr(t,_e-1)+"*"+vl(e===47?e:Me())}function Z1(e){for(;!Mr(ot());)Me();return Dr(e,_e)}function G1(e){return Td(Eo("",null,null,null,[""],e=Ld(e),0,[0],e))}function Eo(e,t,n,r,o,l,i,a,s){for(var c=0,h=0,m=i,g=0,k=0,x=0,y=1,C=1,d=1,f=0,p="",w=o,N=l,_=r,j=p;C;)switch(x=f,f=Me()){case 40:if(x!=108&&ce(j,m-1)==58){ga(j+=I(Co(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:j+=Co(f);break;case 9:case 10:case 13:case 32:j+=Y1(x);break;case 92:j+=X1(So()-1,7);continue;case 47:switch(ot()){case 42:case 47:io(J1(K1(Me(),So()),t,n),s);break;default:j+="/"}break;case 123*y:a[c++]=qe(j)*d;case 125*y:case 59:case 0:switch(f){case 0:case 125:C=0;case 59+h:d==-1&&(j=I(j,/\f/g,"")),k>0&&qe(j)-m&&io(k>32?Xu(j+";",r,n,m-1):Xu(I(j," ","")+";",r,n,m-2),s);break;case 59:j+=";";default:if(io(_=Yu(j,t,n,c,h,o,a,p,w=[],N=[],m),l),f===123)if(h===0)Eo(j,t,_,_,w,l,m,a,N);else switch(g===99&&ce(j,3)===110?100:g){case 100:case 108:case 109:case 115:Eo(e,_,_,r&&io(Yu(e,_,_,0,0,o,a,p,o,w=[],m),N),o,N,m,a,r?w:N);break;default:Eo(j,_,_,_,[""],N,0,a,N)}}c=h=k=0,y=d=1,p=j="",m=i;break;case 58:m=1+qe(j),k=x;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Q1()==125)continue}switch(j+=vl(f),f*y){case 38:d=h>0?1:(j+="\f",-1);break;case 44:a[c++]=(qe(j)-1)*d,d=1;break;case 64:ot()===45&&(j+=Co(Me())),g=ot(),h=m=qe(p=j+=Z1(So())),f++;break;case 45:x===45&&qe(j)==2&&(y=0)}}return l}function Yu(e,t,n,r,o,l,i,a,s,c,h){for(var m=o-1,g=o===0?l:[""],k=xs(g),x=0,y=0,C=0;x<r;++x)for(var d=0,f=br(e,m+1,m=D1(y=i[x])),p=e;d<k;++d)(p=zd(y>0?g[d]+" "+f:I(f,/&\f/g,g[d])))&&(s[C++]=p);return xl(e,t,n,o===0?vs:a,s,c,h)}function J1(e,t,n){return xl(e,t,n,bd,vl(H1()),br(e,2,-2),0)}function Xu(e,t,n,r){return xl(e,t,n,ys,br(e,0,r),br(e,r+1,-1),r)}function _n(e,t){for(var n="",r=xs(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function q1(e,t,n,r){switch(e.type){case A1:if(e.children.length)break;case F1:case ys:return e.return=e.return||e.value;case bd:return"";case Md:return e.return=e.value+"{"+_n(e.children,r)+"}";case vs:e.value=e.props.join(",")}return qe(n=_n(e.children,r))?e.return=e.value+"{"+n+"}":""}function eh(e){var t=xs(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function th(e){return function(t){t.root||(t=t.return)&&e(t)}}function nh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var rh=function(t,n,r){for(var o=0,l=0;o=l,l=ot(),o===38&&l===12&&(n[r]=1),!Mr(l);)Me();return Dr(t,_e)},oh=function(t,n){var r=-1,o=44;do switch(Mr(o)){case 0:o===38&&ot()===12&&(n[r]=1),t[r]+=rh(_e-1,n,r);break;case 2:t[r]+=Co(o);break;case 4:if(o===44){t[++r]=ot()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=vl(o)}while(o=Me());return t},lh=function(t,n){return Td(oh(Ld(t),n))},Ku=new WeakMap,ih=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ku.get(r))&&!o){Ku.set(t,!0);for(var l=[],i=lh(n,l),a=r.props,s=0,c=0;s<i.length;s++)for(var h=0;h<a.length;h++,c++)t.props[c]=l[s]?i[s].replace(/&\f/g,a[h]):a[h]+" "+i[s]}}},ah=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function $d(e,t){switch(B1(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Go+e+he+e+e;case 6828:case 4268:return $+e+he+e+e;case 6165:return $+e+he+"flex-"+e+e;case 5187:return $+e+I(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return $+e+he+"flex-item-"+I(e,/flex-|-self/,"")+e;case 4675:return $+e+he+"flex-line-pack"+I(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+he+I(e,"shrink","negative")+e;case 5292:return $+e+he+I(e,"basis","preferred-size")+e;case 6060:return $+"box-"+I(e,"-grow","")+$+e+he+I(e,"grow","positive")+e;case 4554:return $+I(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Go+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ga(e,"stretch")?$d(I(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,qe(e)-3-(~ga(e,"!important")&&10))){case 107:return I(e,":",":"+$)+e;case 101:return I(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ce(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return $+e+he+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+he+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+he+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+he+e+e}return e}var sh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case ys:t.return=$d(t.value,t.length);break;case Md:return _n([Gn(t,{value:I(t.value,"@","@"+$)})],o);case vs:if(t.length)return W1(t.props,function(l){switch(V1(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _n([Gn(t,{props:[I(l,/:(read-\w+)/,":"+Go+"$1")]})],o);case"::placeholder":return _n([Gn(t,{props:[I(l,/:(plac\w+)/,":"+$+"input-$1")]}),Gn(t,{props:[I(l,/:(plac\w+)/,":"+Go+"$1")]}),Gn(t,{props:[I(l,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},uh=[sh],ch=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var C=y.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||uh,l={},i,a=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var C=y.getAttribute("data-emotion").split(" "),d=1;d<C.length;d++)l[C[d]]=!0;a.push(y)});var s,c=[ih,ah];{var h,m=[q1,th(function(y){h.insert(y)})],g=eh(c.concat(o,m)),k=function(C){return _n(G1(C),g)};s=function(C,d,f,p){h=f,k(C?C+"{"+d.styles+"}":d.styles),p&&(x.inserted[d.name]=!0)}}var x={key:n,sheet:new I1({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:s};return x.sheet.hydrate(a),x},Id={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,ws=se?Symbol.for("react.element"):60103,ks=se?Symbol.for("react.portal"):60106,wl=se?Symbol.for("react.fragment"):60107,kl=se?Symbol.for("react.strict_mode"):60108,Sl=se?Symbol.for("react.profiler"):60114,Cl=se?Symbol.for("react.provider"):60109,El=se?Symbol.for("react.context"):60110,Ss=se?Symbol.for("react.async_mode"):60111,Nl=se?Symbol.for("react.concurrent_mode"):60111,jl=se?Symbol.for("react.forward_ref"):60112,_l=se?Symbol.for("react.suspense"):60113,fh=se?Symbol.for("react.suspense_list"):60120,Pl=se?Symbol.for("react.memo"):60115,Ol=se?Symbol.for("react.lazy"):60116,dh=se?Symbol.for("react.block"):60121,ph=se?Symbol.for("react.fundamental"):60117,mh=se?Symbol.for("react.responder"):60118,hh=se?Symbol.for("react.scope"):60119;function Te(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ws:switch(e=e.type,e){case Ss:case Nl:case wl:case Sl:case kl:case _l:return e;default:switch(e=e&&e.$$typeof,e){case El:case jl:case Ol:case Pl:case Cl:return e;default:return t}}case ks:return t}}}function Fd(e){return Te(e)===Nl}A.AsyncMode=Ss;A.ConcurrentMode=Nl;A.ContextConsumer=El;A.ContextProvider=Cl;A.Element=ws;A.ForwardRef=jl;A.Fragment=wl;A.Lazy=Ol;A.Memo=Pl;A.Portal=ks;A.Profiler=Sl;A.StrictMode=kl;A.Suspense=_l;A.isAsyncMode=function(e){return Fd(e)||Te(e)===Ss};A.isConcurrentMode=Fd;A.isContextConsumer=function(e){return Te(e)===El};A.isContextProvider=function(e){return Te(e)===Cl};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ws};A.isForwardRef=function(e){return Te(e)===jl};A.isFragment=function(e){return Te(e)===wl};A.isLazy=function(e){return Te(e)===Ol};A.isMemo=function(e){return Te(e)===Pl};A.isPortal=function(e){return Te(e)===ks};A.isProfiler=function(e){return Te(e)===Sl};A.isStrictMode=function(e){return Te(e)===kl};A.isSuspense=function(e){return Te(e)===_l};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wl||e===Nl||e===Sl||e===kl||e===_l||e===fh||typeof e=="object"&&e!==null&&(e.$$typeof===Ol||e.$$typeof===Pl||e.$$typeof===Cl||e.$$typeof===El||e.$$typeof===jl||e.$$typeof===ph||e.$$typeof===mh||e.$$typeof===hh||e.$$typeof===dh)};A.typeOf=Te;Id.exports=A;var gh=Id.exports,Ad=gh,vh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dd={};Dd[Ad.ForwardRef]=vh;Dd[Ad.Memo]=yh;var xh=!0;function Ud(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Cs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||xh===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Bd=function(t,n,r){Cs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function wh(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var kh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sh=/[A-Z]|^ms/g,Ch=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Vd=function(t){return t.charCodeAt(1)===45},Zu=function(t){return t!=null&&typeof t!="boolean"},gi=nh(function(e){return Vd(e)?e:e.replace(Sh,"-$&").toLowerCase()}),Gu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ch,function(r,o,l){return et={name:o,styles:l,next:et},o})}return kh[t]!==1&&!Vd(t)&&typeof n=="number"&&n!==0?n+"px":n};function zr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return et={name:n.name,styles:n.styles,next:et},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)et={name:r.name,styles:r.styles,next:et},r=r.next;var o=n.styles+";";return o}return Eh(e,t,n)}case"function":{if(e!==void 0){var l=et,i=n(e);return et=l,zr(e,t,i)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Eh(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=zr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":Zu(i)&&(r+=gi(l)+":"+Gu(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)Zu(i[a])&&(r+=gi(l)+":"+Gu(l,i[a])+";");else{var s=zr(e,t,i);switch(l){case"animation":case"animationName":{r+=gi(l)+":"+s+";";break}default:r+=l+"{"+s+"}"}}}return r}var Ju=/label:\s*([^\s;\n{]+)\s*(;|$)/g,et,Es=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";et=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=zr(r,n,i)):l+=i[0];for(var a=1;a<t.length;a++)l+=zr(r,n,t[a]),o&&(l+=i[a]);Ju.lastIndex=0;for(var s="",c;(c=Ju.exec(l))!==null;)s+="-"+c[1];var h=wh(l)+s;return{name:h,styles:l,next:et}},Nh=function(t){return t()},jh=xi.useInsertionEffect?xi.useInsertionEffect:!1,Wd=jh||Nh,Ns={}.hasOwnProperty,Hd=v.createContext(typeof HTMLElement<"u"?ch({key:"css"}):null);Hd.Provider;var Qd=function(t){return v.forwardRef(function(n,r){var o=v.useContext(Hd);return t(n,o,r)})},Yd=v.createContext({}),ya="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",_h=function(t,n){var r={};for(var o in n)Ns.call(n,o)&&(r[o]=n[o]);return r[ya]=t,r},Ph=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Cs(n,r,o),Wd(function(){return Bd(n,r,o)}),null},Oh=Qd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ya],l=[r],i="";typeof e.className=="string"?i=Ud(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var a=Es(l,void 0,v.useContext(Yd));i+=t.key+"-"+a.name;var s={};for(var c in e)Ns.call(e,c)&&c!=="css"&&c!==ya&&(s[c]=e[c]);return s.ref=n,s.className=i,v.createElement(v.Fragment,null,v.createElement(Ph,{cache:t,serialized:a,isStringTag:typeof o=="string"}),v.createElement(o,s))}),bh=Oh,Mh=u.Fragment;function te(e,t,n){return Ns.call(t,"css")?u.jsx(bh,_h(e,t),n):u.jsx(e,t,n)}function Xd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Es(t)}var E=function(){var t=Xd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},zh=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var a in l)l[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function Rh(e,t,n){var r=[],o=Ud(e,r,n);return r.length<2?n:o+t(r)}var Lh=function(t){var n=t.cache,r=t.serializedArr;return Wd(function(){for(var o=0;o<r.length;o++)Bd(n,r[o],!1)}),null},vi=Qd(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];var g=Es(h,t.registered);return r.push(g),Cs(t,g,!1),t.key+"-"+g.name},l=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];return Rh(t.registered,o,zh(h))},i={css:o,cx:l,theme:v.useContext(Yd)},a=e.children(i);return n=!0,v.createElement(v.Fragment,null,v.createElement(Lh,{cache:t,serializedArr:r}),a)}),Th=Object.defineProperty,$h=(e,t,n)=>t in e?Th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ao=(e,t,n)=>($h(e,typeof t!="symbol"?t+"":t,n),n),xa=new Map,so=new WeakMap,qu=0,Ih=void 0;function Fh(e){return e?(so.has(e)||(qu+=1,so.set(e,qu.toString())),so.get(e)):"0"}function Ah(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Fh(e.root):e[t]}`).toString()}function Dh(e){const t=Ah(e);let n=xa.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(a=>{var s;const c=a.isIntersecting&&o.some(h=>a.intersectionRatio>=h);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(h=>{h(c,a)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},xa.set(t,n)}return n}function Kd(e,t,n={},r=Ih){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:l,elements:i}=Dh(n),a=i.get(e)||[];return i.has(e)||i.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),xa.delete(o))}}function Uh(e){return typeof e.children!="function"}var ec=class extends v.Component{constructor(e){super(e),ao(this,"node",null),ao(this,"_unobserveCb",null),ao(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ao(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Uh(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=Kd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:k,entry:x}=this.state;return e({inView:k,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:a,trackVisibility:s,delay:c,initialInView:h,fallbackInView:m,...g}=this.props;return v.createElement(t||"div",{ref:this.handleNode,...g},e)}};function Zd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:a,fallbackInView:s,onChange:c}={}){var h;const[m,g]=v.useState(null),k=v.useRef(),[x,y]=v.useState({inView:!!a,entry:void 0});k.current=c,v.useEffect(()=>{if(i||!m)return;let p;return p=Kd(m,(w,N)=>{y({inView:w,entry:N}),k.current&&k.current(w,N),N.isIntersecting&&l&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,s,t]);const C=(h=x.entry)==null?void 0:h.target,d=v.useRef();!m&&C&&!l&&!i&&d.current!==C&&(d.current=C,y({inView:!!a,entry:void 0}));const f=[g,x.inView,x.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var Gd={exports:{}},D={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),_s=Symbol.for("react.portal"),bl=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),Rl=Symbol.for("react.provider"),Ll=Symbol.for("react.context"),Bh=Symbol.for("react.server_context"),Tl=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),Al=Symbol.for("react.lazy"),Vh=Symbol.for("react.offscreen"),Jd;Jd=Symbol.for("react.module.reference");function Be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case js:switch(e=e.type,e){case bl:case zl:case Ml:case $l:case Il:return e;default:switch(e=e&&e.$$typeof,e){case Bh:case Ll:case Tl:case Al:case Fl:case Rl:return e;default:return t}}case _s:return t}}}D.ContextConsumer=Ll;D.ContextProvider=Rl;D.Element=js;D.ForwardRef=Tl;D.Fragment=bl;D.Lazy=Al;D.Memo=Fl;D.Portal=_s;D.Profiler=zl;D.StrictMode=Ml;D.Suspense=$l;D.SuspenseList=Il;D.isAsyncMode=function(){return!1};D.isConcurrentMode=function(){return!1};D.isContextConsumer=function(e){return Be(e)===Ll};D.isContextProvider=function(e){return Be(e)===Rl};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===js};D.isForwardRef=function(e){return Be(e)===Tl};D.isFragment=function(e){return Be(e)===bl};D.isLazy=function(e){return Be(e)===Al};D.isMemo=function(e){return Be(e)===Fl};D.isPortal=function(e){return Be(e)===_s};D.isProfiler=function(e){return Be(e)===zl};D.isStrictMode=function(e){return Be(e)===Ml};D.isSuspense=function(e){return Be(e)===$l};D.isSuspenseList=function(e){return Be(e)===Il};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bl||e===zl||e===Ml||e===$l||e===Il||e===Vh||typeof e=="object"&&e!==null&&(e.$$typeof===Al||e.$$typeof===Fl||e.$$typeof===Rl||e.$$typeof===Ll||e.$$typeof===Tl||e.$$typeof===Jd||e.getModuleId!==void 0)};D.typeOf=Be;Gd.exports=D;var Wh=Gd.exports;E`
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
`;E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;E`
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
`;E`
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
`;E`
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
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;const Hh=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Qh=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yh=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xh=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kh=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ps=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zh=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gh=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jh=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qh=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eg=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tg=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ng=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function rg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ps,iterationCount:o=1}){return Xd`
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
  `}function og(e){return e==null}function lg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function qd(e,t){return n=>n?e():t()}function Rr(e){return qd(e,()=>null)}function wa(e){return Rr(()=>({opacity:0}))(e)}const Lt=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=Ps,triggerOnce:a=!1,className:s,style:c,childClassName:h,childStyle:m,children:g,onVisibilityChange:k}=e,x=v.useMemo(()=>rg({keyframes:i,duration:o}),[o,i]);return og(g)?null:lg(g)?te(ag,{...e,animationStyles:x,children:String(g)}):Wh.isFragment(g)?te(e0,{...e,animationStyles:x}):te(Mh,{children:v.Children.map(g,(y,C)=>{if(!v.isValidElement(y))return null;const d=r+(t?C*o*n:0);switch(y.type){case"ol":case"ul":return te(vi,{children:({cx:f})=>te(y.type,{...y.props,className:f(s,y.props.className),style:Object.assign({},c,y.props.style),children:te(Lt,{...e,children:y.props.children})})});case"li":return te(ec,{threshold:l,triggerOnce:a,onChange:k,children:({inView:f,ref:p})=>te(vi,{children:({cx:w})=>te(y.type,{...y.props,ref:p,className:w(h,y.props.className),css:Rr(()=>x)(f),style:Object.assign({},m,y.props.style,wa(!f),{animationDelay:d+"ms"})})})});default:return te(ec,{threshold:l,triggerOnce:a,onChange:k,children:({inView:f,ref:p})=>te("div",{ref:p,className:s,css:Rr(()=>x)(f),style:Object.assign({},c,wa(!f),{animationDelay:d+"ms"}),children:te(vi,{children:({cx:w})=>te(y.type,{...y.props,className:w(h,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},ig={display:"inline-block",whiteSpace:"pre"},ag=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:a=!1,className:s,style:c,children:h,onVisibilityChange:m}=e,{ref:g,inView:k}=Zd({triggerOnce:a,threshold:i,onChange:m});return qd(()=>te("div",{ref:g,className:s,style:Object.assign({},c,ig),children:h.split("").map((x,y)=>te("span",{css:Rr(()=>t)(k),style:{animationDelay:o+y*l*r+"ms"},children:x},y))}),()=>te(e0,{...e,children:h}))(n)},e0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:a}=e,{ref:s,inView:c}=Zd({triggerOnce:r,threshold:n,onChange:a});return te("div",{ref:s,className:o,css:Rr(()=>t)(c),style:Object.assign({},l,wa(!c)),children:i})};E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
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
`;const sg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ug=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,cg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,fg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,dg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,pg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,mg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,hg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,gg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,vg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,yg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,xg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,wg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function kg(e,t,n){switch(n){case"bottom-left":return t?ug:Qh;case"bottom-right":return t?cg:Yh;case"down":return e?t?dg:Kh:t?fg:Xh;case"left":return e?t?mg:Zh:t?pg:Ps;case"right":return e?t?gg:Jh:t?hg:Gh;case"top-left":return t?vg:qh;case"top-right":return t?yg:eg;case"up":return e?t?wg:ng:t?xg:tg;default:return t?sg:Hh}}const Qt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=v.useMemo(()=>kg(t,r,n),[t,n,r]);return te(Lt,{keyframes:l,...o})};E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const Sg=E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Cg=E`
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
`,Eg=E`
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
`,Ng=E`
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
`,jg=E`
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
`,_g=E`
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
`,Pg=E`
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
`,Og=E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,bg=E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Mg=E`
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
`;function zg(e,t){switch(t){case"down":return e?Pg:Cg;case"left":return e?Og:Eg;case"right":return e?bg:Ng;case"up":return e?Mg:jg;default:return e?_g:Sg}}const Rg=e=>{const{direction:t,reverse:n=!1,...r}=e,o=v.useMemo(()=>zg(n,t),[t,n]);return te(Lt,{keyframes:o,...r})},Lg=()=>{const[e,t]=v.useState(!1),n=Dt();return v.useEffect(()=>{if(n.hash){let r=document.getElementById(n.hash.slice(1));r&&r.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[n]),u.jsx("section",{id:"home",className:"flex justify-center w-full notOnMobile:pt-[18px] mobile:mt-[0px] text-start scroll-my-[90px]",children:u.jsx("div",{className:"max-w-[1050px] w-[calc(100vw-10px)] text-black dark:text-white px-[16px] text-[calc(30px+1vw)] pb-6 font-bold",children:u.jsxs(Qt,{cascade:!0,direction:"up",damping:.2,duration:500,triggerOnce:!0,children:[u.jsxs("h2",{className:"pt-[16px]",children:["Mabuhay!"," ",u.jsx("span",{onMouseEnter:()=>t(()=>!0),onAnimationEnd:()=>t(()=>!1),onClick:()=>t(()=>!0),className:`handsUp prevent-select ${e?"handsUpCelebrate":""}`,children:"🙌"})]}),u.jsxs("h2",{className:"pb-[20px] text-[calc(24px+1vw)] font-[600]",children:["and Hello,"," "]}),u.jsxs("h1",{className:"text-[calc(60px+1vw)] tracking-[0.5vw]",children:["I'm",u.jsx("span",{className:"text-blue-700 dark:text-blue-400",children:" Ody James"}),"! ",u.jsx("span",{className:"wave prevent-select",children:"👋"})]}),u.jsxs("p",{className:"max-w-[850px] dark:max-w-[840px] pt-[20px] font-[400] dark:font-[200]",children:["An aspiring Front-End Developer from the Philippines, focusing on web apps and responsive design. Learn more ",u.jsx("span",{className:"textHighlight bg-gradient-to-r from-[rgb(209,213,219)_50%] to-[rgb(255,255,255)_50%] dark:bg-gradient-to-r dark:from-[rgb(23,32,52)_50%] dark:to-[rgb(2,8,23)_50%]",children:u.jsx("a",{href:"#about",className:"font-[700] dark:font-[500]",children:"about me"})})," ","or my"," ",u.jsx("span",{className:"textHighlight bg-gradient-to-r from-[rgb(209,213,219)_50%] to-[rgb(255,255,255)_50%] dark:bg-gradient-to-r dark:from-[rgb(23,32,52)_50%] dark:to-[rgb(2,8,23)_50%]",children:u.jsx("a",{href:"#projects",className:"font-[700] dark:font-[500]",children:"projects"})}),"."]})]})})})};var t0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},tc=ct.createContext&&ct.createContext(t0),Tg=["attr","size","title"];function $g(e,t){if(e==null)return{};var n=Ig(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ig(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}function nc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function qo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nc(Object(n),!0).forEach(function(r){Fg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fg(e,t,n){return t=Ag(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ag(e){var t=Dg(e,"string");return typeof t=="symbol"?t:String(t)}function Dg(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function n0(e){return e&&e.map((t,n)=>ct.createElement(t.tag,qo({key:n},t.attr),n0(t.child)))}function lt(e){return t=>ct.createElement(Ug,Jo({attr:qo({},e.attr)},t),n0(e.child))}function Ug(e){var t=n=>{var{attr:r,size:o,title:l}=e,i=$g(e,Tg),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ct.createElement("svg",Jo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:s,style:qo(qo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&ct.createElement("title",null,l),e.children)};return tc!==void 0?ct.createElement(tc.Consumer,null,n=>t(n)):t(t0)}function rc(e){return lt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function oc(e){return lt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Bg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const Vg=v.forwardRef(Bg),Wg=Vg;function Hg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{d:"M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"}),v.createElement("path",{d:"M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"}))}const Qg=v.forwardRef(Hg),r0=Qg;function Yg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z",clipRule:"evenodd"}))}const Xg=v.forwardRef(Yg),Kg=Xg;function Zg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const Gg=v.forwardRef(Zg),Jg=Gg;function qg({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),v.createElement("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"}))}const ev=v.forwardRef(qg),tv=ev;function nv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"}),v.createElement("path",{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"}))}const rv=v.forwardRef(nv),ov=rv;function lv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"}))}const iv=v.forwardRef(lv),av=iv;function sv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}const uv=v.forwardRef(sv),cv=uv;function fv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const dv=v.forwardRef(fv),pv=dv,o0=()=>{const[e,t]=v.useState(!1),n=localStorage.getItem("theme")||"dark",[r,o]=v.useState(n);v.useEffect(()=>{const s=()=>{window.innerWidth<=580&&t(!1)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const l=()=>{t(!0)},i=()=>{t(!1)},a=s=>{(s==="dark"||s==="light")&&(o(s),localStorage.setItem("theme",s))};return v.useEffect(()=>{r==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark")},[r]),u.jsx("header",{className:"shadow-md w-full h-[70px] flex justify-center bg-white border-gray-300 dark:border-[rgb(17,24,39)] dark:bg-[rgb(2,8,23)] border-b-2 overflow-hidden top-0 sticky z-10",children:u.jsxs("div",{className:"w-[1060px] flex items-center gap-[calc(20px+0.5vw)] text-[14px] text-black dark:text-white font-semibold px-[16px] focus:outline-none",children:[u.jsxs(ie,{to:"/",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"first:mr-auto flex items-center pt-[5px] pb-[7px] notOnMobile:hover:text-blue-800 dark:notOnMobile:hover:text-blue-400 dark:active:text-blue-400 transition duration-300 ease-in-out",children:[u.jsx("div",{className:"w-[36px] mr-[6px]",children:u.jsx("img",{src:"/images/myLogo1.webp",alt:"Portfolio Logo",decoding:"async",width:"1000",height:"1000"})}),"Ody James Catanaoan"]}),u.jsx(ie,{to:"/#about","aria-label":"Jump to about section",className:"navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out",children:"About Me"}),u.jsx(ie,{to:"/#projects","aria-label":"Jump to projects section",className:"navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out",children:"Projects"}),u.jsx(ie,{to:"/#contact","aria-label":"Jump to contact section",className:"navLink w-fit pt-[5px] pb-[7px] px-[10px] rounded-[8px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out",children:"Contact"}),r==="dark"?u.jsx(oc,{title:"Click to switch to Light theme","aria-label":"Click to switch to Light theme",onClick:()=>a("light"),className:"navLink flex items-center justify-center px-[7px] w-[34px] h-[34px] rounded-[8px] notOnMobile:hover:bg-[rgb(27,36,51)] transition duration-300 ease-in-out cursor-pointer"}):u.jsx(rc,{title:"Click to switch to Dark theme","aria-label":"Click to switch to Dark theme",onClick:()=>a("dark"),className:"navLink flex items-center justify-center px-[8px] w-[34px] h-[34px] rounded-[8px] notOnMobile:hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"}),u.jsx("button",{"aria-label":"Navigation Menu",className:"burgerButton",onClick:l,children:u.jsx(Wg,{className:"burgerIcon"})}),u.jsx("div",{className:`overlay ${e?"open":""}`}),u.jsxs("menu",{className:`bg-white font dark:bg-[rgb(2,8,23)] sidePanel ${e?"open":""}`,children:[u.jsxs("li",{className:"flex pb-[16px] justify-between items-center border-b-2 border-[rgb(17,24,39)]",children:[u.jsx("span",{className:"ml-[16px] text-[20px] font-[400] tracking-[1px]",children:"OJ Catanaoan"}),u.jsx("button",{"aria-label":"Close Navigation Menu",className:"w-[40px] py-[2px] px-[4px] border-2 border-[rgb(17,24,39)] rounded-md mr-[20px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)]",onClick:i,children:u.jsx(pv,{})})]}),u.jsx("li",{children:u.jsxs(ie,{to:"/",onClick:()=>{i()},className:"flex items-center w-full h-[60px] mr-0 ml-0 mt-[20px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(ov,{className:"w-[26px] mr-[40px] ml-[16px]"}),"Home"]})}),u.jsx("li",{children:u.jsxs(ie,{to:"/#about",onClick:()=>{i()},className:"flex items-center w-full h-[60px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(cv,{className:"w-[26px] mr-[40px] ml-[16px]"}),"About Me"]})}),u.jsx("li",{children:u.jsxs(ie,{to:"/#projects",onClick:()=>{i()},className:"flex items-center w-full h-[60px] mb-[4px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(Kg,{className:"w-[26px] mr-[40px] ml-[16px]"}),"Projects"]})}),u.jsx("li",{children:u.jsxs(ie,{to:"/contactform",onClick:()=>{i(),window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"flex items-center w-full h-[60px] notOnMobile:hover:bg-gray-200 dark:notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px]",children:[u.jsx(r0,{className:"w-[26px] mr-[40px] ml-[16px]"}),"Contact"]})}),u.jsx("li",{children:r==="dark"?u.jsxs("div",{onClick:()=>{a("light"),i()},className:"flex items-center w-full h-[60px] notOnMobile:hover:bg-[rgb(17,24,39)] text-[18px] tracking-[1px] cursor-pointer",children:[u.jsx(rc,{className:"w-[26px] h-[22px] mr-[40px] ml-[16px]"}),"Theme"]}):u.jsxs("div",{onClick:()=>{a("dark"),i()},className:"flex items-center w-full h-[60px] notOnMobile:hover:bg-gray-200 text-[18px] tracking-[1px] cursor-pointer",children:[u.jsx(oc,{className:"w-[26px] h-auto mr-[40px] ml-[16px]"}),"Theme"]})})]})]})})};function mv({title:e,titleId:t,...n},r){return v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,v.createElement("path",{fillRule:"evenodd",d:"M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",clipRule:"evenodd"}))}const hv=v.forwardRef(mv),gv=hv,vv=()=>{const e=Dt();return v.useEffect(()=>{if(e.hash){let t=document.getElementById(e.hash.slice(1));t&&t.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),u.jsxs("section",{id:"about",className:"notOnMobile:mt-[100px] mobile:mt-[60px] mb-24 notOnMobile:scroll-mt-[30px] mobile:scroll-mt-[46px] pt-[20px] max-w-[1050px] mx-auto text-black dark:text-white",children:[u.jsx("div",{className:"notOnMobile:mt-[50px] mobile:mt-4 text-[calc(26px+1vw)] px-5 pt-8 notOnMobile:pb-12 mobile:pb-6",children:u.jsxs("div",{className:"flex relative justify-center mx-auto text-[1em] max-w-[calc(280px+10vw)]",children:[u.jsx("div",{className:"absolute z-[0]",children:u.jsx(gv,{className:"my-[-4em] inline-block w-[6em] text-blue-500 opacity-[70%] dark:opacity-[10%]"})}),u.jsx("div",{className:"tracking-[.1em] font-[600] z-[1] [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]",children:"A bit about me..."})]})}),u.jsxs("div",{className:"about flex justify-center gap-10 text-center mx-auto",children:[u.jsxs("div",{className:"mt-[80px] px-10",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx(Rg,{duration:500,triggerOnce:!0,children:u.jsx("img",{alt:"OJ Catanaoan Image",className:"rounded-full shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19);] dark:shadow-none",src:"/icons/mypic.webp",decoding:"async",loading:"lazy",width:"190",height:"190"})})}),u.jsx(Qt,{delay:300,duration:500,direction:"up",triggerOnce:!0,children:u.jsx("div",{className:"text-left max-w-lg mx-auto",children:u.jsx("p",{className:"mt-10 mb-10 leading-relaxed text-lg font-[400] dark:font-[100]",children:"As a self-taught front-end developer, my game plan for now is to explore and learn current and emerging technologies, while bringing my problem-solving skills honed from my previous field, to develop top-notch web app experiences."})})}),u.jsx(Qt,{delay:300,duration:500,direction:"down",triggerOnce:!0,children:u.jsx("div",{className:"flex justify-start max-w-lg mx-auto",children:u.jsx("a",{className:"shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19);] dark:shadow-none font-[700] mt-2 ml-6 border-2 text-blue-700 border-blue-700  dark:text-blue-500 dark:border-blue-500 py-2 px-4 focus:outline-none rounded text-base tracking-[1px] transition-colors duration-300 ease-in-out notOnMobile:hover:bg-blue-600 notOnMobile:hover:border-blue-600 notOnMobile:hover:text-white",href:"https://bit.ly/3SbJAUC",target:"_blank",rel:"noopener noreferrer",children:"View Resume"})})})]}),u.jsx("div",{id:"technologies",className:"mt-[30px] px-10",children:u.jsxs("div",{className:"px-5 py-10 max-w-3xl mx-auto text-center",children:[u.jsxs(Qt,{duration:500,triggerOnce:!0,children:[u.jsx("h1",{className:"text-4xl font-medium title-font mb-4",children:"Technologies"}),u.jsx("h2",{className:"text-gray-700 dark:text-gray-400 text-base leading-relaxed mt-6",children:"Technologies I'm starting with as I explore the world of programming."})]}),u.jsx("div",{className:"overflow:hidden mx-auto flex space-x-[calc(26px+4vw)] justify-center mt-12 font-semibold drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]",children:u.jsxs(Qt,{cascade:!0,delay:500,damping:.3,duration:500,direction:"up",triggerOnce:!0,children:[u.jsx("div",{className:"w-[60px] h-[60px]",children:u.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{className:"mb-3 w-full",alt:"HTML Logo",src:"/icons/htmlicon.webp",decoding:"async",loading:"lazy",width:"283",height:"319"}),"HTML"]})}),u.jsx("div",{className:"w-[60px] h-[60px]",children:u.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"CSS Logo",className:"mb-3",src:"/icons/cssicon.webp",decoding:"async",loading:"lazy",width:"281",height:"317"}),"CSS"]})}),u.jsx("div",{className:"w-[60px] h-[60px] flex mt-1",children:u.jsxs("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"Javascript Logo",className:"mb-3 w-[90%] ml-auto mr-auto",src:"/icons/jsicon.webp",decoding:"async",loading:"lazy",width:"500",height:"500"}),"Javascript"]})})]})}),u.jsx("div",{className:"mx-auto flex overflow:hidden space-x-[calc(26px+4vw)] justify-center mt-20 font-semibold mr-2 drop-shadow-[4px_3px_2px_rgba(0,0,0,0.3)]",children:u.jsxs(Qt,{cascade:!0,delay:500,damping:.3,duration:500,direction:"down",triggerOnce:!0,children:[u.jsx("div",{className:"w-[70px] h-[70px]",children:u.jsxs("a",{href:"https://react.dev/learn/describing-the-ui",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"React js Logo",className:"mb-2",src:"/icons/reactlogo.webp",decoding:"async",loading:"lazy",width:"500",height:"500"}),"React js"]})}),u.jsx("div",{className:"w-[60px] h-[60px]",children:u.jsxs("a",{href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"Tailwind CSS Logo",className:"mb-[22px] mt-[20px]",src:"/icons/tailwind.webp",decoding:"async",loading:"lazy",width:"287",height:"175"}),"Tailwind CSS"]})}),u.jsx("div",{className:"w-[55px] h-[55px]",children:u.jsxs("a",{href:"https://nodejs.org/en/about",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("img",{alt:"Nodejs Logo",className:"mb-[8px] ml-[6px] mt-1",src:"/icons/nodejslogo.webp",decoding:"async",loading:"lazy",width:"500",height:"563"}),u.jsx("span",{className:"ml-[8px]",children:"Nodejs"})]})})]})})]})})]})]})},yv=()=>{const[e,t]=v.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)},o=Dt();v.useEffect(()=>{if(o.hash){let a=document.getElementById(o.hash.slice(1));a&&a.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[o]);const l=E`
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0%, 0, 0);
    }
  `,i=E`
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
     transform: translate3d(0%, 0, 0);
    }
  `;return u.jsxs("section",{id:"projects",className:"mt-4 mb-[120px] notOnMobile:scroll-my-[100px] mobile:scroll-my-[80px]",children:[u.jsx("div",{className:"mx-auto text-[calc(32px+1vw)] px-5 py-10 max-w-[calc(200px+10vw)] dark:text-white",children:u.jsxs("div",{className:"flex relative justify-center",children:[u.jsx("h1",{className:"absolute z-0",children:u.jsx(Jg,{className:"my-[-4em] mx-auto inline-block w-[5.5em] text-blue-500 opacity-[70%] dark:opacity-[10%]"})}),u.jsx("h1",{className:"z-[1] font-bold tracking-[.1em] [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]",children:"Projects"})]})}),u.jsx("h2",{className:"mx-auto px-10 text-gray-700 dark:text-gray-400 max-w-lg text-center mt-8",children:"What's the best way to showcase my learning but to start doing projects!"}),u.jsxs("div",{id:"projectlist",className:"mt-16 mb-28",children:[u.jsx(Lt,{keyframes:l,duration:600,triggerOnce:!0,children:u.jsxs("div",{id:"basicCalcuContainer",className:"basicCalcuContainer",children:[u.jsx("div",{className:"basicCalcuPicContainer",children:u.jsx("img",{className:"w-full object-cover",alt:"Basic Calculator Web App Preview Image",src:"/images/basicCalcuMockUpReady.webp",decoding:"async",loading:"lazy",width:"1620",height:"1080"})}),u.jsxs("div",{className:"basicCalcuTextBox",children:[u.jsx("h1",{className:"text-2xl font-semibold tracking-[2px]",children:"A Go-To Classic Calculator App"}),u.jsx("h2",{className:"my-4 text-base tracking-[0.5px]",children:"Powered by the dynamic duo — Vite + React!"}),u.jsx(ie,{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",to:"/basiccalculatorapp",children:"Live Soon!"}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://github.com/c0de-dLax",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})}),u.jsx(Lt,{keyframes:i,duration:600,triggerOnce:!0,children:u.jsxs("div",{className:"taxCalcuContainer",children:[u.jsx("div",{className:"taxCalcuPicContainer",children:u.jsx("img",{className:"w-full object-cover",alt:"Tax Calculator Web App Preview Image",src:"/images/taxCalcuMockUpReady.webp",decoding:"async",loading:"lazy",width:"1620",height:"1080"})}),u.jsxs("div",{className:"taxCalcuTextBox",children:[u.jsx("h1",{className:"text-2xl font-semibold tracking-[2px]",children:"Tax Calculator for the Philippines"}),u.jsx("h2",{className:"my-4 text-base tracking-[0.5px]",children:"An app that automates tax deductions and contributions for Philippine employees."}),u.jsx(ie,{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",to:"/taxcalculatorapp",children:"Live Soon!"}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://github.com/c0de-dLax",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})}),u.jsx(Lt,{keyframes:l,duration:600,triggerOnce:!0,children:u.jsxs("div",{className:"todoAppContainer",children:[u.jsx("div",{className:"todoAppPicContainer",children:u.jsx("img",{className:"w-full object-cover",alt:"Basic Calculator Web App Preview Image",src:"/images/comingsoon.webp",decoding:"async",loading:"lazy",width:"1620",height:"1080"})}),u.jsxs("div",{className:"todoAppTextBox",children:[u.jsx("h1",{className:"text-2xl font-semibold tracking-[2px]",children:"To-Do Productivity App"}),u.jsx("h2",{className:"my-4 text-base tracking-[0.5px]",children:"A tool that will help you keep track and plan your daily routine to seize the day!"}),u.jsx(ie,{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px] text-white bg-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",to:"/todoproductivityapp",children:"Live Soon!"}),u.jsx("a",{className:"inline-block py-2 px-4 mt-3 ml-3 rounded-lg font-[700] tracking-[1px]	text-[rgb(17,24,39)] transition-colors duration-200 ease-in-out notOnMobile:hover:bg-blue-700 notOnMobile:hover:text-white",href:"https://github.com/c0de-dLax",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})})]}),u.jsx("div",{className:"flex justify-center w-full",children:u.jsx("button",{"aria-label":"Load more projects",onMouseEnter:n,onMouseLeave:r,onTouchStart:()=>{n(),setTimeout(()=>{t(!1)},1e3)},className:"text-blue-700 text-lg font-[500] h-[50px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19);] dark:shadow-none border-2 border-blue-700  dark:text-blue-500 dark:border-blue-500 py-2 px-8 focus:outline-none rounded tracking-[1px] transition-colors duration-300 ease-in-out notOnMobile:hover:bg-blue-600 notOnMobile:hover:border-blue-600 notOnMobile:hover:text-white",children:"Load More"})}),u.jsx("div",{id:"comingSoonPopup",className:"flex justify-center w-full h-[30px] mt-4 dark:text-white",children:u.jsx("h1",{className:`tracking-[1px] notOnmobile:text-md mobile:tracking-[0.5px] mobile:text-sm ${e?"block":"hidden"}`,children:"Exploring new project ideas — coming soon!"})})]})};function xv(e){return lt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function wv(e){return lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function kv(e){return lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"},child:[]}]})(e)}function Sv(e){return lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"},child:[]}]})(e)}function l0(e){return lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"},child:[]}]})(e)}function Cv(e){return lt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(e)}function Ev(e){return lt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"},child:[]}]})(e)}function Nv(e){return lt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"},child:[]}]})(e)}const i0=()=>u.jsx("section",{children:u.jsxs("div",{className:"flex sm:flex-col sm:gap-y-8 mx-auto mt-[34px] max-w-[1100px] justify-center mb-6 text-black dark:text-white font-[500] dark:font-[400]",children:[u.jsxs("div",{className:"sm:w-[256px] text-start text-[20px] mx-auto leading-[56px] tracking-[1px]",children:[u.jsx("span",{className:"text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-6",children:"Links"}),u.jsxs("menu",{children:[u.jsx("li",{children:u.jsx(ie,{to:"/",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"Home"})}),u.jsx("li",{children:u.jsx(ie,{to:"/#about","aria-label":"Return to about section",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"About Me"})}),u.jsx("li",{children:u.jsx(ie,{to:"/#projects","aria-label":"Return to projects section",className:"transition duration-300 ease-in-out notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:"Projects"})})]})]}),u.jsxs("div",{className:"mr-[calc(40px+0.5vw)] ml-auto sm:w-[256px] sm:mx-auto text-start text-[20px]  leading-[56px] tracking-[1px]",children:[u.jsx("span",{className:"text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-8",children:"Contact"}),u.jsxs("menu",{children:[u.jsx("li",{children:u.jsx("a",{href:"https://github.com/c0de-dLax",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(xv,{className:"mr-[8px] w-[28px] h-[28px]"}),"Github"]})})}),u.jsx("li",{children:u.jsxs("a",{href:"mailto:ojtc.ops@gmail.com",className:"notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(tv,{className:"inline-block w-[28px] mr-[10px]"}),"ojtc.ops@gmail.com"]})}),u.jsx("li",{children:u.jsxs("div",{className:"flex items-center",children:[u.jsx(av,{className:"inline-block w-[28px] mr-[10px]"}),"Philippines"]})})]})]}),u.jsxs("div",{className:"sm:w-[256px] text-start text-[20px] mx-auto leading-[56px] tracking-[1px]",children:[u.jsx("span",{className:"text-blue-700 dark:text-blue-500 text-[30px] tracking-[2px] font-[600] border-b-[3px] border-gray-400 dark:border-[rgb(17,24,39)] pb-[4px] pr-6",children:"Socials"}),u.jsxs("menu",{children:[u.jsx("li",{children:u.jsx("a",{href:"https://www.linkedin.com/in/ojtcatanaoan",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(wv,{className:"mr-[8px] w-[28px] h-[28px]"}),"LinkedIn"]})})}),u.jsx("li",{children:u.jsx("a",{href:"https://www.facebook.com/ojtcatanaoan",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(kv,{className:"mr-[8px] w-[28px] h-[28px]"}),"Facebook"]})})}),u.jsx("li",{children:u.jsx("a",{href:"https://twitter.com/OCatanaoan",target:"_blank",rel:"noopener noreferrer",children:u.jsxs("div",{className:"flex items-center notOnMobile:hover:text-blue-700 dark:notOnMobile:hover:text-blue-400",children:[u.jsx(Sv,{className:"mr-[8px] w-[28px] h-[28px]"}),"Twitter"]})})})]})]})]})}),jv=()=>{const e=Dt();v.useEffect(()=>{if(e.hash){let r=document.getElementById(e.hash.slice(1));r&&r.scrollIntoView({behavior:"smooth"})}else window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]);const t=E`
    from {
      transform: scaleX(0);
      transform-origin: center left 0px;
    }
    to { 
      transform: scaleX(1);
      transform-origin: center left 0px;
    }
  `,n=E`
    from {
      transform: translateZ(0);
      opacity: 0;
    }
    to {
      transform: translateZ(0);
      opacity: 1;
    }
  `;return u.jsxs("section",{id:"contact",className:"scroll-my-[70px]",children:[u.jsxs("div",{className:"text-black dark:text-white py-6 font-[500] dark:font-[400]",children:[u.jsxs("div",{className:"flex relative justify-center mx-auto text-[calc(30px+1vw)] py-10 max-w-[calc(260px+10vw)]",children:[u.jsx("div",{className:"absolute z-0 left-1/2 ml-[-2.55em]",children:u.jsx(r0,{className:"my-[-3em] inline-block w-[5em] text-blue-500 opacity-[70%] dark:opacity-[10%]"})}),u.jsx("div",{className:"z-[3] font-bold title-font tracking-widest [text-shadow:-2px_-2px_white,2px_-2px_white,-2px_2px_white,2px_2px_white] dark:[text-shadow:none]",children:"Get in touch!"})]}),u.jsx(Lt,{keyframes:t,duration:400,triggerOnce:!0,children:u.jsx("div",{className:"w-full mt-12 text-white bg-blue-600 text-center tracking-[2px] px-4 pt-8 pb-10",children:u.jsxs(Lt,{keyframes:n,duration:500,delay:400,triggerOnce:!0,children:[u.jsx("h1",{className:"text-[calc(24px+1vw)] font-[600]",children:"Let's Connect!"}),u.jsx("h2",{className:"text-[calc(14px+1vw)] font-[400]",children:"Get in touch by sending me a message!"}),u.jsx("h2",{className:"mt-6",children:u.jsx(ie,{to:"/contactform","aria-label":"Access contact form to send message",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"border-2 rounded-md px-8 pt-[6px] pb-[8px] text-[calc(10px+1vw)] font-[500] tracking-[3px] transition duration-300 ease-in-out hover:text-blue-500 notOnMobile:hover:bg-white",children:"CONTACT"})})]})})}),u.jsx(i0,{})]}),u.jsxs("div",{className:"relative w-[100%] bg-gray-300 dark:bg-[rgb(17,24,39)]",children:[u.jsx(ie,{to:"/","aria-label":"Return to top",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"absolute flex justify-center items-center p-2 bg-blue-600 rounded-full left-1/2 ml-[-12px] text-white w-[36px] h-[36px] mt-[-20px] cursor-pointer customBounce",children:u.jsx(l0,{className:"w-full h-auto"})}),u.jsx("div",{id:"copyright",className:"flex justify-center items-center w-full h-[80px] text-black font-[500] dark:text-white dark:font-[400] py-[10px] mx-auto text-[calc(10px+0.5vw)] tracking-[1px]",children:"Copyright © 2024 ODY JAMES CATANAOAN."})]})]})};function _v(){return v.useEffect(()=>{const e=()=>{document.querySelectorAll("section[id]").forEach(n=>{const r=n.getBoundingClientRect();if(r.top>=0&&r.top<=150){const o=window.location.hash,l="#"+n.id;if(l!==o){const i=window.location.toString().split("#")[0];window.history.replaceState(null,"",i+l)}}})};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),u.jsxs("main",{className:"bg-white dark:bg-[rgb(2,8,23)]",children:[u.jsx(o0,{}),u.jsx(Lg,{}),u.jsx(vv,{}),u.jsx(yv,{}),u.jsx(jv,{})]})}function Pv(){const[e,t]=v.useState(!1),[n,r]=v.useState(!1),[o,l]=v.useState(!1),[i,a]=v.useState(!1),[s,c]=v.useState(!1),[h,m]=v.useState(!1),[g,k]=v.useState(0),x=C=>{const d=document.querySelector("form");if(C.preventDefault(),!d)return;const f=d.querySelector('input[name="Name"]'),p=d.querySelector('input[name="Email"]'),w=d.querySelector('textarea[name="Message"]');if(!(f!=null&&f.value)||!(p!=null&&p.value)||!(w!=null&&w.value)){r(!0),t(!1);const _=setTimeout(()=>{r(!1)},2500);k(_),f!=null&&f.value?a(!1):setTimeout(()=>{a(!0)},100),!(p!=null&&p.value)||!p.value.match(/^\s*[^@\s]+@[^\s@.]+\.[a-zA-Z][a-zA-Z0-9]*\s*$/)?setTimeout(()=>{c(!0)},100):c(!1),w!=null&&w.value?m(!1):setTimeout(()=>{m(!0)},100);return}l(!0),r(!1),a(!1),c(!1),m(!1);const N=new FormData(d);fetch("https://script.google.com/macros/s/AKfycbwEB7rEinie_N4PNOwM-pEVKRT115gxD6Ke4sbkxvqATSPV5_-a1oiPeHD5_ivtIxU3rw/exec",{method:"POST",body:N}).then(_=>_.json()).then(()=>{d.reset(),l(!1),t(!0);const _=setTimeout(()=>{t(!1)},2500);k(_)}).catch(()=>{d.reset(),l(!1),t(!0);const _=setTimeout(()=>{t(!1)},2500);k(_)})},y=()=>{t(!1),r(!1),clearTimeout(g)};return u.jsxs("main",{className:"bg-white dark:bg-[rgb(2,8,23)]",children:[u.jsx(o0,{}),u.jsx("div",{className:"text-center notOnMobile:mt-12 mobile:mt-2 mb-8 tracking-[4px] max-w-[900px] mx-auto px-[6px]",children:u.jsxs(Qt,{triggerOnce:!0,cascade:!0,direction:"up",duration:600,damping:.4,children:[u.jsxs("h1",{className:"text-black dark:text-white text-[calc(30px+2vw)] font-[700]",children:["Got some"," ",u.jsx("span",{className:"text-blue-700 dark:text-blue-500",children:"questions"})," ","or just want to"," ",u.jsx("span",{className:"text-blue-700 dark:text-blue-500",children:"connect"}),"?"]}),u.jsx("h2",{className:"text-gray-500 font-[500] dark:text-gray-300 dark:font-[400] mt-6 mb-12 text-[calc(12px+1vw)]",children:"Send me a message and I'll reply back ASAP!"})]})}),u.jsxs("div",{onClick:y,className:`noticeCard cursor-pointer bg-green-100 text-green-700 text-start ${e?"open":""}`,children:[u.jsxs("h1",{className:"flex items-center justify-start text-2xl mb-2 px-4",children:[u.jsx(Cv,{className:"mr-2"}),"Success!"]}),u.jsx("h2",{className:"text-base px-4",children:"I'll respond back as soon as I read your message!"}),u.jsx("div",{className:`w-full notOnMobile:h-[8px] mobile:h-[6px] bg-green-500 mt-6 px-0 ${e?"timerGreenBar":""}`})]}),u.jsxs("div",{onClick:y,className:`noticeCard cursor-pointer bg-red-100 text-red-700 text-start ${n?"open":""}`,children:[u.jsxs("h1",{className:"flex items-center justify-start text-2xl mb-2 px-4",children:[u.jsx(Ev,{className:"mr-2"}),"Oops!"]}),u.jsx("h1",{className:"text-base px-4",children:"Please fill out all input fields and try again."}),u.jsx("div",{className:`w-full notOnMobile:h-[8px] mobile:h-[6px] bg-red-600 mt-5 px-0 ${n?"timerRedBar":""}`})]}),u.jsxs("div",{className:`noticeCard border-l-[8px] border-blue-600 bg-blue-200 text-blue-800 text-center pb-4 ${o?"open":""}`,children:[u.jsxs("h1",{className:"flex items-center justify-center text-2xl mb-2 px-4",children:[u.jsx(Nv,{className:"mr-2"}),"Please wait..."]}),u.jsx("div",{className:"loader bg-blue-800 mx-auto mt-2 mb-auto"})]}),u.jsxs("form",{name:"contactForm",onSubmit:x,className:"flex flex-col space-y-1 max-w-lg w-[calc(100vw-30px)] mx-auto mt-5 tracking-[1px] text-black dark:text-white",children:[u.jsx("label",{htmlFor:"name",className:"text-lg",children:"Name"}),u.jsx("input",{placeholder:"Type your name here",type:"text",id:"Name",name:"Name",className:"border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"}),u.jsx("div",{className:"w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]",children:i?"Please enter your name":""}),u.jsx("label",{htmlFor:"email",className:"text-lg",children:"Email"}),u.jsx("input",{placeholder:"Type your email here",type:"text",id:"Email",name:"Email",className:"border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"}),u.jsx("div",{className:"w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]",children:s?"Please enter a valid email":""}),u.jsx("label",{htmlFor:"message",className:"text-lg",children:"Message"}),u.jsx("textarea",{id:"Message",name:"Message",placeholder:"Type your message here",cols:30,rows:5,className:"border-gray-400 dark:border-white border-[2px] text-black text-md px-3 py-2 outline-none rounded-md focus:outline-blue-500 focus:outline-[4px] mobile:focus:outline-[2px] focus:outline-offset-[0px]"}),u.jsx("div",{className:"w-full h-7 text-red-500 font-[500] pt-[2px] pl-[2px]",children:h?"Please enter your message":""}),u.jsx("br",{}),u.jsx("button",{"aria-label":"Submit Form",type:"submit",disabled:o||n,className:`border-[2px] border-blue-700 dark:border-blue-500 max-w-[160px] w-full h-[40px] tracking-[1px] mx-auto text-blue-700 dark:text-blue-500 font-[600] rounded-md transition duration-300 ease-in-out ${o||n?"border-gray-400 text-gray-400 dark:border-gray-400 dark:text-gray-400 cursor-not-allowed":"notOnMobile:hover:text-white notOnMobile:hover:border-blue-600 notOnMobile:hover:bg-blue-600"}`,children:o?u.jsx("div",{className:"flex mx-auto",children:u.jsx("div",{className:"mx-auto my-auto",children:"Processing..."})}):"Submit"})]}),u.jsx(i0,{}),u.jsxs("div",{className:"relative w-[100%] bg-gray-300 dark:bg-[rgb(17,24,39)]",children:[u.jsx("div",{className:"absolute hidden sm:flex justify-center items-center p-2 bg-blue-600 rounded-full left-1/2 ml-[-12px] text-white w-[36px] h-[36px] mt-[-20px] cursor-pointer customBounce",children:u.jsx(l0,{"aria-label":"Return to top",onClick:()=>{window.scrollTo(0,0)},className:"w-full h-auto"})}),u.jsx("div",{id:"copyright",className:"flex justify-center items-center w-full h-[80px] text-black font-[500] dark:text-white dark:font-[400] py-[10px] mx-auto text-[calc(10px+0.5vw)] tracking-[1px]",children:"Copyright © 2024 ODY JAMES CATANAOAN."})]})]})}function Ov(){return u.jsxs("main",{children:[u.jsx("h1",{className:"text-[4em] text-center px-2 mt-6",children:"Oops!"}),u.jsx("h1",{className:"text-[4.5em] text-center font-[500] px-2",children:"Error 404"}),u.jsx("h2",{className:"text-[2.5em] text-center px-2",children:"Page Not Found"}),u.jsx("h3",{className:"text-[1.5em] text-blue-600 text-center mt-6 px-2",children:u.jsx(ie,{to:"/",children:"Click here to go back to the Home Page"})})]})}function yi(){return u.jsxs("main",{className:"flex justify-center items-center flex-col w-[100vw-10px] h-[100dvh] gap-10 bg-white text-black dark:bg-[rgb(2,8,23)] dark:text-white",children:[u.jsx("h1",{className:"text-[3em] text-center px-2 mt-6",children:"Coming Soon!"}),u.jsx("h2",{className:"text-[3em] text-center font-[500] px-2",children:"This page is still under construction."}),u.jsx("h3",{className:"text-[1.5em] text-blue-600 text-center mt-4 px-2 mb-10",children:u.jsx(ie,{to:"/portfolio/#projects",children:"Click here to go back to the Home Page"})})]})}function bv(){return u.jsx(M1,{children:u.jsxs(E1,{children:[u.jsx(Ht,{path:"/portfolio/",element:u.jsx(_v,{})}),u.jsx(Ht,{path:"/portfolio/contactform",element:u.jsx(Pv,{})}),u.jsx(Ht,{path:"/portfolio/basiccalculatorapp",element:u.jsx(yi,{})}),u.jsx(Ht,{path:"/portfolio/taxcalculatorapp",element:u.jsx(yi,{})}),u.jsx(Ht,{path:"/portfolio/todoproductivityapp",element:u.jsx(yi,{})}),u.jsx(Ht,{path:"/portfolio/*",element:u.jsx(Ov,{})})]})})}wi.createRoot(document.getElementById("root")).render(u.jsx(ct.StrictMode,{children:u.jsx(bv,{})}));
