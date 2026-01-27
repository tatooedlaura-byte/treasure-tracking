(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))f(b);new MutationObserver(b=>{for(const p of b)if(p.type==="childList")for(const O of p.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&f(O)}).observe(document,{childList:!0,subtree:!0});function d(b){const p={};return b.integrity&&(p.integrity=b.integrity),b.referrerPolicy&&(p.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?p.credentials="include":b.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function f(b){if(b.ep)return;b.ep=!0;const p=d(b);fetch(b.href,p)}})();var Oo={exports:{}},Ln={};var Id;function $g(){if(Id)return Ln;Id=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(f,b,p){var O=null;if(p!==void 0&&(O=""+p),b.key!==void 0&&(O=""+b.key),"key"in b){p={};for(var T in b)T!=="key"&&(p[T]=b[T])}else p=b;return b=p.ref,{$$typeof:r,type:f,key:O,ref:b!==void 0?b:null,props:p}}return Ln.Fragment=o,Ln.jsx=d,Ln.jsxs=d,Ln}var Pd;function Wg(){return Pd||(Pd=1,Oo.exports=$g()),Oo.exports}var c=Wg(),_o={exports:{}},oe={};var eh;function Ig(){if(eh)return oe;eh=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),O=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),k=Symbol.iterator;function K(v){return v===null||typeof v!="object"?null:(v=k&&v[k]||v["@@iterator"],typeof v=="function"?v:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,te={};function ie(v,D,R){this.props=v,this.context=D,this.refs=te,this.updater=R||q}ie.prototype.isReactComponent={},ie.prototype.setState=function(v,D){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,D,"setState")},ie.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function be(){}be.prototype=ie.prototype;function I(v,D,R){this.props=v,this.context=D,this.refs=te,this.updater=R||q}var he=I.prototype=new be;he.constructor=I,W(he,ie.prototype),he.isPureReactComponent=!0;var Se=Array.isArray;function P(){}var G={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function le(v,D,R){var F=R.ref;return{$$typeof:r,type:v,key:D,ref:F!==void 0?F:null,props:R}}function re(v,D){return le(v.type,D,v.props)}function pe(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function ge(v){var D={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(R){return D[R]})}var V=/\/+/g;function J(v,D){return typeof v=="object"&&v!==null&&v.key!=null?ge(""+v.key):D.toString(36)}function H(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(P,P):(v.status="pending",v.then(function(D){v.status==="pending"&&(v.status="fulfilled",v.value=D)},function(D){v.status==="pending"&&(v.status="rejected",v.reason=D)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function m(v,D,R,F,se){var me=typeof v;(me==="undefined"||me==="boolean")&&(v=null);var Y=!1;if(v===null)Y=!0;else switch(me){case"bigint":case"string":case"number":Y=!0;break;case"object":switch(v.$$typeof){case r:case o:Y=!0;break;case L:return Y=v._init,m(Y(v._payload),D,R,F,se)}}if(Y)return se=se(v),Y=F===""?"."+J(v,0):F,Se(se)?(R="",Y!=null&&(R=Y.replace(V,"$&/")+"/"),m(se,D,R,"",function(He){return He})):se!=null&&(pe(se)&&(se=re(se,R+(se.key==null||v&&v.key===se.key?"":(""+se.key).replace(V,"$&/")+"/")+Y)),D.push(se)),1;Y=0;var ue=F===""?".":F+":";if(Se(v))for(var we=0;we<v.length;we++)F=v[we],me=ue+J(F,we),Y+=m(F,D,R,me,se);else if(we=K(v),typeof we=="function")for(v=we.call(v),we=0;!(F=v.next()).done;)F=F.value,me=ue+J(F,we++),Y+=m(F,D,R,me,se);else if(me==="object"){if(typeof v.then=="function")return m(H(v),D,R,F,se);throw D=String(v),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Y}function A(v,D,R){if(v==null)return v;var F=[],se=0;return m(v,F,"","",function(me){return D.call(R,me,se++)}),F}function B(v){if(v._status===-1){var D=v._result;D=D(),D.then(function(R){(v._status===0||v._status===-1)&&(v._status=1,v._result=R)},function(R){(v._status===0||v._status===-1)&&(v._status=2,v._result=R)}),v._status===-1&&(v._status=0,v._result=D)}if(v._status===1)return v._result.default;throw v._result}var ee=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},ce={map:A,forEach:function(v,D,R){A(v,function(){D.apply(this,arguments)},R)},count:function(v){var D=0;return A(v,function(){D++}),D},toArray:function(v){return A(v,function(D){return D})||[]},only:function(v){if(!pe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return oe.Activity=E,oe.Children=ce,oe.Component=ie,oe.Fragment=d,oe.Profiler=b,oe.PureComponent=I,oe.StrictMode=f,oe.Suspense=z,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,oe.__COMPILER_RUNTIME={__proto__:null,c:function(v){return G.H.useMemoCache(v)}},oe.cache=function(v){return function(){return v.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(v,D,R){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var F=W({},v.props),se=v.key;if(D!=null)for(me in D.key!==void 0&&(se=""+D.key),D)!X.call(D,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&D.ref===void 0||(F[me]=D[me]);var me=arguments.length-2;if(me===1)F.children=R;else if(1<me){for(var Y=Array(me),ue=0;ue<me;ue++)Y[ue]=arguments[ue+2];F.children=Y}return le(v.type,se,F)},oe.createContext=function(v){return v={$$typeof:O,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},oe.createElement=function(v,D,R){var F,se={},me=null;if(D!=null)for(F in D.key!==void 0&&(me=""+D.key),D)X.call(D,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(se[F]=D[F]);var Y=arguments.length-2;if(Y===1)se.children=R;else if(1<Y){for(var ue=Array(Y),we=0;we<Y;we++)ue[we]=arguments[we+2];se.children=ue}if(v&&v.defaultProps)for(F in Y=v.defaultProps,Y)se[F]===void 0&&(se[F]=Y[F]);return le(v,me,se)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(v){return{$$typeof:T,render:v}},oe.isValidElement=pe,oe.lazy=function(v){return{$$typeof:L,_payload:{_status:-1,_result:v},_init:B}},oe.memo=function(v,D){return{$$typeof:x,type:v,compare:D===void 0?null:D}},oe.startTransition=function(v){var D=G.T,R={};G.T=R;try{var F=v(),se=G.S;se!==null&&se(R,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(P,ee)}catch(me){ee(me)}finally{D!==null&&R.types!==null&&(D.types=R.types),G.T=D}},oe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},oe.use=function(v){return G.H.use(v)},oe.useActionState=function(v,D,R){return G.H.useActionState(v,D,R)},oe.useCallback=function(v,D){return G.H.useCallback(v,D)},oe.useContext=function(v){return G.H.useContext(v)},oe.useDebugValue=function(){},oe.useDeferredValue=function(v,D){return G.H.useDeferredValue(v,D)},oe.useEffect=function(v,D){return G.H.useEffect(v,D)},oe.useEffectEvent=function(v){return G.H.useEffectEvent(v)},oe.useId=function(){return G.H.useId()},oe.useImperativeHandle=function(v,D,R){return G.H.useImperativeHandle(v,D,R)},oe.useInsertionEffect=function(v,D){return G.H.useInsertionEffect(v,D)},oe.useLayoutEffect=function(v,D){return G.H.useLayoutEffect(v,D)},oe.useMemo=function(v,D){return G.H.useMemo(v,D)},oe.useOptimistic=function(v,D){return G.H.useOptimistic(v,D)},oe.useReducer=function(v,D,R){return G.H.useReducer(v,D,R)},oe.useRef=function(v){return G.H.useRef(v)},oe.useState=function(v){return G.H.useState(v)},oe.useSyncExternalStore=function(v,D,R){return G.H.useSyncExternalStore(v,D,R)},oe.useTransition=function(){return G.H.useTransition()},oe.version="19.2.3",oe}var th;function Zo(){return th||(th=1,_o.exports=Ig()),_o.exports}var U=Zo(),Do={exports:{}},Rn={},Mo={exports:{}},Uo={};var ah;function Pg(){return ah||(ah=1,(function(r){function o(m,A){var B=m.length;m.push(A);e:for(;0<B;){var ee=B-1>>>1,ce=m[ee];if(0<b(ce,A))m[ee]=A,m[B]=ce,B=ee;else break e}}function d(m){return m.length===0?null:m[0]}function f(m){if(m.length===0)return null;var A=m[0],B=m.pop();if(B!==A){m[0]=B;e:for(var ee=0,ce=m.length,v=ce>>>1;ee<v;){var D=2*(ee+1)-1,R=m[D],F=D+1,se=m[F];if(0>b(R,B))F<ce&&0>b(se,R)?(m[ee]=se,m[F]=B,ee=F):(m[ee]=R,m[D]=B,ee=D);else if(F<ce&&0>b(se,B))m[ee]=se,m[F]=B,ee=F;else break e}}return A}function b(m,A){var B=m.sortIndex-A.sortIndex;return B!==0?B:m.id-A.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var O=Date,T=O.now();r.unstable_now=function(){return O.now()-T}}var z=[],x=[],L=1,E=null,k=3,K=!1,q=!1,W=!1,te=!1,ie=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function he(m){for(var A=d(x);A!==null;){if(A.callback===null)f(x);else if(A.startTime<=m)f(x),A.sortIndex=A.expirationTime,o(z,A);else break;A=d(x)}}function Se(m){if(W=!1,he(m),!q)if(d(z)!==null)q=!0,P||(P=!0,ge());else{var A=d(x);A!==null&&H(Se,A.startTime-m)}}var P=!1,G=-1,X=5,le=-1;function re(){return te?!0:!(r.unstable_now()-le<X)}function pe(){if(te=!1,P){var m=r.unstable_now();le=m;var A=!0;try{e:{q=!1,W&&(W=!1,be(G),G=-1),K=!0;var B=k;try{t:{for(he(m),E=d(z);E!==null&&!(E.expirationTime>m&&re());){var ee=E.callback;if(typeof ee=="function"){E.callback=null,k=E.priorityLevel;var ce=ee(E.expirationTime<=m);if(m=r.unstable_now(),typeof ce=="function"){E.callback=ce,he(m),A=!0;break t}E===d(z)&&f(z),he(m)}else f(z);E=d(z)}if(E!==null)A=!0;else{var v=d(x);v!==null&&H(Se,v.startTime-m),A=!1}}break e}finally{E=null,k=B,K=!1}A=void 0}}finally{A?ge():P=!1}}}var ge;if(typeof I=="function")ge=function(){I(pe)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,J=V.port2;V.port1.onmessage=pe,ge=function(){J.postMessage(null)}}else ge=function(){ie(pe,0)};function H(m,A){G=ie(function(){m(r.unstable_now())},A)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(m){m.callback=null},r.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<m?Math.floor(1e3/m):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(m){switch(k){case 1:case 2:case 3:var A=3;break;default:A=k}var B=k;k=A;try{return m()}finally{k=B}},r.unstable_requestPaint=function(){te=!0},r.unstable_runWithPriority=function(m,A){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var B=k;k=m;try{return A()}finally{k=B}},r.unstable_scheduleCallback=function(m,A,B){var ee=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ee+B:ee):B=ee,m){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=B+ce,m={id:L++,callback:A,priorityLevel:m,startTime:B,expirationTime:ce,sortIndex:-1},B>ee?(m.sortIndex=B,o(x,m),d(z)===null&&m===d(x)&&(W?(be(G),G=-1):W=!0,H(Se,B-ee))):(m.sortIndex=ce,o(z,m),q||K||(q=!0,P||(P=!0,ge()))),m},r.unstable_shouldYield=re,r.unstable_wrapCallback=function(m){var A=k;return function(){var B=k;k=A;try{return m.apply(this,arguments)}finally{k=B}}}})(Uo)),Uo}var lh;function ev(){return lh||(lh=1,Mo.exports=Pg()),Mo.exports}var ko={exports:{}},nt={};var nh;function tv(){if(nh)return nt;nh=1;var r=Zo();function o(z){var x="https://react.dev/errors/"+z;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)x+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+z+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var f={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},b=Symbol.for("react.portal");function p(z,x,L){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:E==null?null:""+E,children:z,containerInfo:x,implementation:L}}var O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(z,x){if(z==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,nt.createPortal=function(z,x){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return p(z,x,null,L)},nt.flushSync=function(z){var x=O.T,L=f.p;try{if(O.T=null,f.p=2,z)return z()}finally{O.T=x,f.p=L,f.d.f()}},nt.preconnect=function(z,x){typeof z=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,f.d.C(z,x))},nt.prefetchDNS=function(z){typeof z=="string"&&f.d.D(z)},nt.preinit=function(z,x){if(typeof z=="string"&&x&&typeof x.as=="string"){var L=x.as,E=T(L,x.crossOrigin),k=typeof x.integrity=="string"?x.integrity:void 0,K=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;L==="style"?f.d.S(z,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:E,integrity:k,fetchPriority:K}):L==="script"&&f.d.X(z,{crossOrigin:E,integrity:k,fetchPriority:K,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},nt.preinitModule=function(z,x){if(typeof z=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var L=T(x.as,x.crossOrigin);f.d.M(z,{crossOrigin:L,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&f.d.M(z)},nt.preload=function(z,x){if(typeof z=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var L=x.as,E=T(L,x.crossOrigin);f.d.L(z,L,{crossOrigin:E,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},nt.preloadModule=function(z,x){if(typeof z=="string")if(x){var L=T(x.as,x.crossOrigin);f.d.m(z,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:L,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else f.d.m(z)},nt.requestFormReset=function(z){f.d.r(z)},nt.unstable_batchedUpdates=function(z,x){return z(x)},nt.useFormState=function(z,x,L){return O.H.useFormState(z,x,L)},nt.useFormStatus=function(){return O.H.useHostTransitionStatus()},nt.version="19.2.3",nt}var ih;function av(){if(ih)return ko.exports;ih=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),ko.exports=tv(),ko.exports}var ch;function lv(){if(ch)return Rn;ch=1;var r=ev(),o=Zo(),d=av();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function O(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(p(e)!==e)throw Error(f(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(f(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return z(n),e;if(i===l)return z(n),t;i=i.sibling}throw Error(f(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,u=n.child;u;){if(u===a){s=!0,a=n,l=i;break}if(u===l){s=!0,l=n,a=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===a){s=!0,a=i,l=n;break}if(u===l){s=!0,l=i,a=n;break}u=u.sibling}if(!s)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,k=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),be=Symbol.for("react.consumer"),I=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ie:return"Profiler";case te:return"StrictMode";case Se:return"Suspense";case P:return"SuspenseList";case le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case I:return e.displayName||"Context";case be:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var H=Array.isArray,m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},ee=[],ce=-1;function v(e){return{current:e}}function D(e){0>ce||(e.current=ee[ce],ee[ce]=null,ce--)}function R(e,t){ce++,ee[ce]=e.current,e.current=t}var F=v(null),se=v(null),me=v(null),Y=v(null);function ue(e,t){switch(R(me,t),R(se,e),R(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sd(t),e=jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(F),R(F,e)}function we(){D(F),D(se),D(me)}function He(e){e.memoizedState!==null&&R(Y,e);var t=F.current,a=jd(t,e.type);t!==a&&(R(se,e),R(F,a))}function Fe(e){se.current===e&&(D(F),D(se)),Y.current===e&&(D(Y),Dn._currentValue=B)}var el,dc;function Qt(e){if(el===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||"",dc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+el+e+dc}var Gl=!1;function hc(e,t){if(!e||Gl)return"";Gl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(w){var N=w}Reflect.construct(e,[],M)}else{try{M.call()}catch(w){N=w}e.call(M.prototype)}}else{try{throw Error()}catch(w){N=w}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(w){if(w&&N&&typeof w.stack=="string")return[w.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var h=s.split(`
`),j=u.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===j.length)for(l=h.length-1,n=j.length-1;1<=l&&0<=n&&h[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==j[n]){var C=`
`+h[l].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=l&&0<=n);break}}}finally{Gl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Th(e,t){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==t&&t!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return hc(e.type,!1);case 11:return hc(e.type.render,!1);case 1:return hc(e.type,!0);case 31:return Qt("Activity");default:return""}}function Wo(e){try{var t="",a=null;do t+=Th(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var mc=Object.prototype.hasOwnProperty,gc=r.unstable_scheduleCallback,vc=r.unstable_cancelCallback,Ch=r.unstable_shouldYield,Ah=r.unstable_requestPaint,mt=r.unstable_now,Oh=r.unstable_getCurrentPriorityLevel,Io=r.unstable_ImmediatePriority,Po=r.unstable_UserBlockingPriority,Hn=r.unstable_NormalPriority,_h=r.unstable_LowPriority,er=r.unstable_IdlePriority,Dh=r.log,Mh=r.unstable_setDisableYieldValue,Vl=null,gt=null;function ua(e){if(typeof Dh=="function"&&Mh(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Vl,e)}catch{}}var vt=Math.clz32?Math.clz32:Lh,Uh=Math.log,kh=Math.LN2;function Lh(e){return e>>>=0,e===0?32:31-(Uh(e)/kh|0)|0}var qn=256,Yn=262144,Gn=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=ka(l):(s&=u,s!==0?n=ka(s):a||(a=u&~e,a!==0&&(n=ka(a))))):(u=l&~i,u!==0?n=ka(u):s!==0?n=ka(s):a||(a=l&~e,a!==0&&(n=ka(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tr(){var e=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),e}function pc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bh(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,j=e.hiddenUpdates;for(a=s&~a;0<a;){var C=31-vt(a),M=1<<C;u[C]=0,h[C]=-1;var N=j[C];if(N!==null)for(j[C]=null,C=0;C<N.length;C++){var w=N[C];w!==null&&(w.lane&=-536870913)}a&=~M}l!==0&&ar(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function ar(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-vt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function lr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-vt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function nr(e,t){var a=t&-t;return a=(a&42)!==0?1:yc(a),(a&(e.suspendedLanes|t))!==0?0:a}function yc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ir(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:Xd(e.type))}function cr(e,t){var a=A.p;try{return A.p=e,t()}finally{A.p=a}}var fa=Math.random().toString(36).slice(2),Ie="__reactFiber$"+fa,st="__reactProps$"+fa,tl="__reactContainer$"+fa,bc="__reactEvents$"+fa,Hh="__reactListeners$"+fa,qh="__reactHandles$"+fa,sr="__reactResources$"+fa,Zl="__reactMarker$"+fa;function Sc(e){delete e[Ie],delete e[st],delete e[bc],delete e[Hh],delete e[qh]}function al(e){var t=e[Ie];if(t)return t;for(var a=e.parentNode;a;){if(t=a[tl]||a[Ie]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ad(e);e!==null;){if(a=e[Ie])return a;e=Ad(e)}return t}e=a,a=e.parentNode}return null}function ll(e){if(e=e[Ie]||e[tl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function nl(e){var t=e[sr];return t||(t=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Zl]=!0}var or=new Set,rr={};function La(e,t){il(e,t),il(e+"Capture",t)}function il(e,t){for(rr[e]=t,e=0;e<t.length;e++)or.add(t[e])}var Yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ur={},fr={};function Gh(e){return mc.call(fr,e)?!0:mc.call(ur,e)?!1:Yh.test(e)?fr[e]=!0:(ur[e]=!0,!1)}function Qn(e,t,a){if(Gh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Xt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jc(e){if(!e._valueTracker){var t=dr(e)?"checked":"value";e._valueTracker=Vh(e,t,""+e[t])}}function hr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=dr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qh=/[\n"\\]/g;function wt(e){return e.replace(Qh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nc(e,t,a,l,n,i,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?zc(e,s,zt(t)):a!=null?zc(e,s,zt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+zt(u):e.removeAttribute("name")}function mr(e,t,a,l,n,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){jc(e);return}a=a!=null?""+zt(a):"",t=t!=null?""+zt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),jc(e)}function zc(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function gr(e,t,a){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+zt(a):""}function vr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(f(92));if(H(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=zt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),jc(e)}function sl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Xh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Xh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yr(e,t,a){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&pr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&pr(e,i,t[i])}function wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Kh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Ec=null;function Tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,rl=null;function xr(e){var t=ll(e);if(t&&(e=t.stateNode)){var a=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[st]||null;if(!n)throw Error(f(90));Nc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&hr(l)}break e;case"textarea":gr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var Cc=!1;function br(e,t,a){if(Cc)return e(t,a);Cc=!0;try{var l=e(t);return l}finally{if(Cc=!1,(ol!==null||rl!==null)&&(Ui(),ol&&(t=ol,e=rl,rl=ol=null,xr(t),e)))for(t=0;t<e.length;t++)xr(e[t])}}function Jl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[st]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,t,typeof a));return a}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=!1;if(Kt)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{Ac=!1}var da=null,Oc=null,Jn=null;function Sr(){if(Jn)return Jn;var e,t=Oc,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $n(){return!0}function jr(){return!1}function ot(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$n:jr,this.isPropagationStopped=jr,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=ot(Ra),$l=E({},Ra,{view:0,detail:0}),Jh=ot($l),_c,Dc,Wl,In=E({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?(_c=e.screenX-Wl.screenX,Dc=e.screenY-Wl.screenY):Dc=_c=0,Wl=e),_c)},movementY:function(e){return"movementY"in e?e.movementY:Dc}}),Nr=ot(In),Fh=E({},In,{dataTransfer:0}),$h=ot(Fh),Wh=E({},$l,{relatedTarget:0}),Mc=ot(Wh),Ih=E({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=ot(Ih),em=E({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=ot(em),am=E({},Ra,{data:0}),zr=ot(am),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=im[e])?!!t[e]:!1}function Uc(){return cm}var sm=E({},$l,{key:function(e){if(e.key){var t=lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),om=ot(sm),rm=E({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wr=ot(rm),um=E({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),fm=ot(um),dm=E({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=ot(dm),mm=E({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gm=ot(mm),vm=E({},Ra,{newState:0,oldState:0}),pm=ot(vm),ym=[9,13,27,32],kc=Kt&&"CompositionEvent"in window,Il=null;Kt&&"documentMode"in document&&(Il=document.documentMode);var xm=Kt&&"TextEvent"in window&&!Il,Er=Kt&&(!kc||Il&&8<Il&&11>=Il),Tr=" ",Cr=!1;function Ar(e,t){switch(e){case"keyup":return ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Or(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ul=!1;function bm(e,t){switch(e){case"compositionend":return Or(t);case"keypress":return t.which!==32?null:(Cr=!0,Tr);case"textInput":return e=t.data,e===Tr&&Cr?null:e;default:return null}}function Sm(e,t){if(ul)return e==="compositionend"||!kc&&Ar(e,t)?(e=Sr(),Jn=Oc=da=null,ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Er&&t.locale!=="ko"?null:t.data;default:return null}}var jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jm[e.type]:t==="textarea"}function Dr(e,t,a,l){ol?rl?rl.push(l):rl=[l]:ol=l,t=Yi(t,"onChange"),0<t.length&&(a=new Wn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Pl=null,en=null;function Nm(e){gd(e,0)}function Pn(e){var t=Kl(e);if(hr(t))return e}function Mr(e,t){if(e==="change")return t}var Ur=!1;if(Kt){var Lc;if(Kt){var Rc="oninput"in document;if(!Rc){var kr=document.createElement("div");kr.setAttribute("oninput","return;"),Rc=typeof kr.oninput=="function"}Lc=Rc}else Lc=!1;Ur=Lc&&(!document.documentMode||9<document.documentMode)}function Lr(){Pl&&(Pl.detachEvent("onpropertychange",Rr),en=Pl=null)}function Rr(e){if(e.propertyName==="value"&&Pn(en)){var t=[];Dr(t,en,e,Tc(e)),br(Nm,t)}}function zm(e,t,a){e==="focusin"?(Lr(),Pl=t,en=a,Pl.attachEvent("onpropertychange",Rr)):e==="focusout"&&Lr()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(en)}function Em(e,t){if(e==="click")return Pn(t)}function Tm(e,t){if(e==="input"||e==="change")return Pn(t)}function Cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Cm;function tn(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!mc.call(t,n)||!pt(e[n],t[n]))return!1}return!0}function Br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,t){var a=Br(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Br(a)}}function qr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Am=Kt&&"documentMode"in document&&11>=document.documentMode,fl=null,Hc=null,an=null,qc=!1;function Gr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||fl==null||fl!==Zn(l)||(l=fl,"selectionStart"in l&&Bc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),an&&tn(an,l)||(an=l,l=Yi(Hc,"onSelect"),0<l.length&&(t=new Wn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=fl)))}function Ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var dl={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Yc={},Vr={};Kt&&(Vr=document.createElement("div").style,"AnimationEvent"in window||(delete dl.animationend.animation,delete dl.animationiteration.animation,delete dl.animationstart.animation),"TransitionEvent"in window||delete dl.transitionend.transition);function Ha(e){if(Yc[e])return Yc[e];if(!dl[e])return e;var t=dl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vr)return Yc[e]=t[a];return e}var Qr=Ha("animationend"),Xr=Ha("animationiteration"),Zr=Ha("animationstart"),Om=Ha("transitionrun"),_m=Ha("transitionstart"),Dm=Ha("transitioncancel"),Kr=Ha("transitionend"),Jr=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function kt(e,t){Jr.set(e,t),La(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],hl=0,Vc=0;function ti(){for(var e=hl,t=Vc=hl=0;t<e;){var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Fr(a,n,i)}}function ai(e,t,a,l){Et[hl++]=e,Et[hl++]=t,Et[hl++]=a,Et[hl++]=l,Vc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qc(e,t,a,l){return ai(e,t,a,l),li(e)}function qa(e,t){return ai(e,null,null,t),li(e)}function Fr(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-vt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<wn)throw wn=0,Ps=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ml={};function Mm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,a,l){return new Mm(e,t,a,l)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var a=e.alternate;return a===null?(a=yt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $r(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")Xc(e)&&(s=1);else if(typeof e=="string")s=Bg(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case le:return e=yt(31,a,t,n),e.elementType=le,e.lanes=i,e;case W:return Ya(a.children,n,i,t);case te:s=8,n|=24;break;case ie:return e=yt(12,a,t,n|2),e.elementType=ie,e.lanes=i,e;case Se:return e=yt(13,a,t,n),e.elementType=Se,e.lanes=i,e;case P:return e=yt(19,a,t,n),e.elementType=P,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:s=10;break e;case be:s=9;break e;case he:s=11;break e;case G:s=14;break e;case X:s=16,l=null;break e}s=29,a=Error(f(130,e===null?"null":typeof e,"")),l=null}return t=yt(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ya(e,t,a,l){return e=yt(7,e,l,t),e.lanes=a,e}function Zc(e,t,a){return e=yt(6,e,null,t),e.lanes=a,e}function Wr(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function Kc(e,t,a){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ir=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var a=Ir.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Wo(t)},Ir.set(e,t),t)}return{value:e,source:t,stack:Wo(t)}}var gl=[],vl=0,ii=null,ln=0,Ct=[],At=0,ha=null,Bt=1,Ht="";function Ft(e,t){gl[vl++]=ln,gl[vl++]=ii,ii=e,ln=t}function Pr(e,t,a){Ct[At++]=Bt,Ct[At++]=Ht,Ct[At++]=ha,ha=e;var l=Bt;e=Ht;var n=32-vt(l)-1;l&=~(1<<n),a+=1;var i=32-vt(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Bt=1<<32-vt(t)+n|a<<n|l,Ht=i+e}else Bt=1<<i|a<<n|l,Ht=e}function Jc(e){e.return!==null&&(Ft(e,1),Pr(e,1,0))}function Fc(e){for(;e===ii;)ii=gl[--vl],gl[vl]=null,ln=gl[--vl],gl[vl]=null;for(;e===ha;)ha=Ct[--At],Ct[At]=null,Ht=Ct[--At],Ct[At]=null,Bt=Ct[--At],Ct[At]=null}function eu(e,t){Ct[At++]=Bt,Ct[At++]=Ht,Ct[At++]=ha,Bt=t.id,Ht=t.overflow,ha=e}var Pe=null,Le=null,ze=!1,ma=null,Ot=!1,$c=Error(f(519));function ga(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nn(Tt(t,e)),$c}function tu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ie]=e,t[st]=l,a){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(a=0;a<Tn.length;a++)xe(Tn[a],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),mr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),vr(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||xd(t.textContent,a)?(l.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),l.onScroll!=null&&xe("scroll",t),l.onScrollEnd!=null&&xe("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ga(e,!0)}function au(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:Pe=Pe.return}}function pl(e){if(e!==Pe)return!1;if(!ze)return au(e),ze=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||go(e.type,e.memoizedProps)),a=!a),a&&Le&&ga(e),au(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Le=Cd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Le=Cd(e)}else t===27?(t=Le,Aa(e.type)?(e=bo,bo=null,Le=e):Le=t):Le=Pe?Dt(e.stateNode.nextSibling):null;return!0}function Ga(){Le=Pe=null,ze=!1}function Wc(){var e=ma;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),ma=null),e}function nn(e){ma===null?ma=[e]:ma.push(e)}var Ic=v(null),Va=null,$t=null;function va(e,t,a){R(Ic,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=Ic.current,D(Ic)}function Pc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function es(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var h=0;h<t.length;h++)if(u.context===t[h]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Pc(i.return,a,e),l||(s=null);break e}i=u.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(f(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Pc(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function yl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var u=n.type;pt(n.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(n===Y.current){if(s=n.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Dn):e=[Dn])}n=n.return}e!==null&&es(t,e,a,l),t.flags|=262144}function ci(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){Va=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return lu(Va,e)}function si(e,t){return Va===null&&Qa(e),lu(e,t)}function lu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},$t===null){if(e===null)throw Error(f(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return a}var Um=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},km=r.unstable_scheduleCallback,Lm=r.unstable_NormalPriority,Qe={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ts(){return{controller:new Um,data:new Map,refCount:0}}function cn(e){e.refCount--,e.refCount===0&&km(Lm,function(){e.controller.abort()})}var sn=null,as=0,xl=0,bl=null;function Rm(e,t){if(sn===null){var a=sn=[];as=0,xl=io(),bl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return as++,t.then(nu,nu),t}function nu(){if(--as===0&&sn!==null){bl!==null&&(bl.status="fulfilled");var e=sn;sn=null,xl=0,bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var iu=m.S;m.S=function(e,t){Vf=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Rm(e,t),iu!==null&&iu(e,t)};var Xa=v(null);function ls(){var e=Xa.current;return e!==null?e:ke.pooledCache}function oi(e,t){t===null?R(Xa,Xa.current):R(Xa,t.pool)}function cu(){var e=ls();return e===null?null:{parent:Qe._currentValue,pool:e}}var Sl=Error(f(460)),ns=Error(f(474)),ri=Error(f(542)),ui={then:function(){}};function su(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ou(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uu(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uu(e),e}throw Ka=t,Sl}}function Za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,Sl):a}}var Ka=null;function ru(){if(Ka===null)throw Error(f(459));var e=Ka;return Ka=null,e}function uu(e){if(e===Sl||e===ri)throw Error(f(483))}var jl=null,on=0;function fi(e){var t=on;return on+=1,jl===null&&(jl=[]),ou(jl,e,t)}function rn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===k?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fu(e){function t(y,g){if(e){var S=y.deletions;S===null?(y.deletions=[g],y.flags|=16):S.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function l(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function n(y,g){return y=Jt(y,g),y.index=0,y.sibling=null,y}function i(y,g,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<g?(y.flags|=67108866,g):S):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function u(y,g,S,_){return g===null||g.tag!==6?(g=Zc(S,y.mode,_),g.return=y,g):(g=n(g,S),g.return=y,g)}function h(y,g,S,_){var ae=S.type;return ae===W?C(y,g,S.props.children,_,S.key):g!==null&&(g.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&Za(ae)===g.type)?(g=n(g,S.props),rn(g,S),g.return=y,g):(g=ni(S.type,S.key,S.props,null,y.mode,_),rn(g,S),g.return=y,g)}function j(y,g,S,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Kc(S,y.mode,_),g.return=y,g):(g=n(g,S.children||[]),g.return=y,g)}function C(y,g,S,_,ae){return g===null||g.tag!==7?(g=Ya(S,y.mode,_,ae),g.return=y,g):(g=n(g,S),g.return=y,g)}function M(y,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Zc(""+g,y.mode,S),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case K:return S=ni(g.type,g.key,g.props,null,y.mode,S),rn(S,g),S.return=y,S;case q:return g=Kc(g,y.mode,S),g.return=y,g;case X:return g=Za(g),M(y,g,S)}if(H(g)||ge(g))return g=Ya(g,y.mode,S,null),g.return=y,g;if(typeof g.then=="function")return M(y,fi(g),S);if(g.$$typeof===I)return M(y,si(y,g),S);di(y,g)}return null}function N(y,g,S,_){var ae=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return ae!==null?null:u(y,g,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case K:return S.key===ae?h(y,g,S,_):null;case q:return S.key===ae?j(y,g,S,_):null;case X:return S=Za(S),N(y,g,S,_)}if(H(S)||ge(S))return ae!==null?null:C(y,g,S,_,null);if(typeof S.then=="function")return N(y,g,fi(S),_);if(S.$$typeof===I)return N(y,g,si(y,S),_);di(y,S)}return null}function w(y,g,S,_,ae){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return y=y.get(S)||null,u(g,y,""+_,ae);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case K:return y=y.get(_.key===null?S:_.key)||null,h(g,y,_,ae);case q:return y=y.get(_.key===null?S:_.key)||null,j(g,y,_,ae);case X:return _=Za(_),w(y,g,S,_,ae)}if(H(_)||ge(_))return y=y.get(S)||null,C(g,y,_,ae,null);if(typeof _.then=="function")return w(y,g,S,fi(_),ae);if(_.$$typeof===I)return w(y,g,S,si(g,_),ae);di(g,_)}return null}function Z(y,g,S,_){for(var ae=null,Ee=null,$=g,de=g=0,Ne=null;$!==null&&de<S.length;de++){$.index>de?(Ne=$,$=null):Ne=$.sibling;var Te=N(y,$,S[de],_);if(Te===null){$===null&&($=Ne);break}e&&$&&Te.alternate===null&&t(y,$),g=i(Te,g,de),Ee===null?ae=Te:Ee.sibling=Te,Ee=Te,$=Ne}if(de===S.length)return a(y,$),ze&&Ft(y,de),ae;if($===null){for(;de<S.length;de++)$=M(y,S[de],_),$!==null&&(g=i($,g,de),Ee===null?ae=$:Ee.sibling=$,Ee=$);return ze&&Ft(y,de),ae}for($=l($);de<S.length;de++)Ne=w($,y,de,S[de],_),Ne!==null&&(e&&Ne.alternate!==null&&$.delete(Ne.key===null?de:Ne.key),g=i(Ne,g,de),Ee===null?ae=Ne:Ee.sibling=Ne,Ee=Ne);return e&&$.forEach(function(Ua){return t(y,Ua)}),ze&&Ft(y,de),ae}function ne(y,g,S,_){if(S==null)throw Error(f(151));for(var ae=null,Ee=null,$=g,de=g=0,Ne=null,Te=S.next();$!==null&&!Te.done;de++,Te=S.next()){$.index>de?(Ne=$,$=null):Ne=$.sibling;var Ua=N(y,$,Te.value,_);if(Ua===null){$===null&&($=Ne);break}e&&$&&Ua.alternate===null&&t(y,$),g=i(Ua,g,de),Ee===null?ae=Ua:Ee.sibling=Ua,Ee=Ua,$=Ne}if(Te.done)return a(y,$),ze&&Ft(y,de),ae;if($===null){for(;!Te.done;de++,Te=S.next())Te=M(y,Te.value,_),Te!==null&&(g=i(Te,g,de),Ee===null?ae=Te:Ee.sibling=Te,Ee=Te);return ze&&Ft(y,de),ae}for($=l($);!Te.done;de++,Te=S.next())Te=w($,y,de,Te.value,_),Te!==null&&(e&&Te.alternate!==null&&$.delete(Te.key===null?de:Te.key),g=i(Te,g,de),Ee===null?ae=Te:Ee.sibling=Te,Ee=Te);return e&&$.forEach(function(Fg){return t(y,Fg)}),ze&&Ft(y,de),ae}function Ue(y,g,S,_){if(typeof S=="object"&&S!==null&&S.type===W&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case K:e:{for(var ae=S.key;g!==null;){if(g.key===ae){if(ae=S.type,ae===W){if(g.tag===7){a(y,g.sibling),_=n(g,S.props.children),_.return=y,y=_;break e}}else if(g.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&Za(ae)===g.type){a(y,g.sibling),_=n(g,S.props),rn(_,S),_.return=y,y=_;break e}a(y,g);break}else t(y,g);g=g.sibling}S.type===W?(_=Ya(S.props.children,y.mode,_,S.key),_.return=y,y=_):(_=ni(S.type,S.key,S.props,null,y.mode,_),rn(_,S),_.return=y,y=_)}return s(y);case q:e:{for(ae=S.key;g!==null;){if(g.key===ae)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(y,g.sibling),_=n(g,S.children||[]),_.return=y,y=_;break e}else{a(y,g);break}else t(y,g);g=g.sibling}_=Kc(S,y.mode,_),_.return=y,y=_}return s(y);case X:return S=Za(S),Ue(y,g,S,_)}if(H(S))return Z(y,g,S,_);if(ge(S)){if(ae=ge(S),typeof ae!="function")throw Error(f(150));return S=ae.call(S),ne(y,g,S,_)}if(typeof S.then=="function")return Ue(y,g,fi(S),_);if(S.$$typeof===I)return Ue(y,g,si(y,S),_);di(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(y,g.sibling),_=n(g,S),_.return=y,y=_):(a(y,g),_=Zc(S,y.mode,_),_.return=y,y=_),s(y)):a(y,g)}return function(y,g,S,_){try{on=0;var ae=Ue(y,g,S,_);return jl=null,ae}catch($){if($===Sl||$===ri)throw $;var Ee=yt(29,$,null,y.mode);return Ee.lanes=_,Ee.return=y,Ee}}}var Ja=fu(!0),du=fu(!1),pa=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ae&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Fr(e,null,a),t}return ai(e,l,t,a),li(e)}function un(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,lr(e,a)}}function ss(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var os=!1;function fn(){if(os){var e=bl;if(e!==null)throw e}}function dn(e,t,a,l){os=!1;var n=e.updateQueue;pa=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var h=u,j=h.next;h.next=null,s===null?i=j:s.next=j,s=h;var C=e.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==s&&(u===null?C.firstBaseUpdate=j:u.next=j,C.lastBaseUpdate=h))}if(i!==null){var M=n.baseState;s=0,C=j=h=null,u=i;do{var N=u.lane&-536870913,w=N!==u.lane;if(w?(je&N)===N:(l&N)===N){N!==0&&N===xl&&(os=!0),C!==null&&(C=C.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var Z=e,ne=u;N=t;var Ue=a;switch(ne.tag){case 1:if(Z=ne.payload,typeof Z=="function"){M=Z.call(Ue,M,N);break e}M=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ne.payload,N=typeof Z=="function"?Z.call(Ue,M,N):Z,N==null)break e;M=E({},M,N);break e;case 2:pa=!0}}N=u.callback,N!==null&&(e.flags|=64,w&&(e.flags|=8192),w=n.callbacks,w===null?n.callbacks=[N]:w.push(N))}else w={lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(j=C=w,h=M):C=C.next=w,s|=N;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;w=u,u=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);C===null&&(h=M),n.baseState=h,n.firstBaseUpdate=j,n.lastBaseUpdate=C,i===null&&(n.shared.lanes=0),za|=s,e.lanes=s,e.memoizedState=M}}function hu(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function mu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hu(a[e],t)}var Nl=v(null),hi=v(0);function gu(e,t){e=ca,R(hi,e),R(Nl,t),ca=e|t.baseLanes}function rs(){R(hi,ca),R(Nl,Nl.current)}function us(){ca=hi.current,D(Nl),D(hi)}var xt=v(null),_t=null;function ba(e){var t=e.alternate;R(Ge,Ge.current&1),R(xt,e),_t===null&&(t===null||Nl.current!==null||t.memoizedState!==null)&&(_t=e)}function fs(e){R(Ge,Ge.current),R(xt,e),_t===null&&(_t=e)}function vu(e){e.tag===22?(R(Ge,Ge.current),R(xt,e),_t===null&&(_t=e)):Sa()}function Sa(){R(Ge,Ge.current),R(xt,xt.current)}function bt(e){D(xt),_t===e&&(_t=null),D(Ge)}var Ge=v(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yo(a)||xo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,fe=null,De=null,Xe=null,gi=!1,zl=!1,Fa=!1,vi=0,hn=0,wl=null,Hm=0;function qe(){throw Error(f(321))}function ds(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!pt(e[a],t[a]))return!1;return!0}function hs(e,t,a,l,n,i){return It=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,m.H=e===null||e.memoizedState===null?Pu:Cs,Fa=!1,i=a(l,n),Fa=!1,zl&&(i=yu(t,a,l,n)),pu(e),i}function pu(e){m.H=vn;var t=De!==null&&De.next!==null;if(It=0,Xe=De=fe=null,gi=!1,hn=0,wl=null,t)throw Error(f(300));e===null||Ze||(e=e.dependencies,e!==null&&ci(e)&&(Ze=!0))}function yu(e,t,a,l){fe=e;var n=0;do{if(zl&&(wl=null),hn=0,zl=!1,25<=n)throw Error(f(301));if(n+=1,Xe=De=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}m.H=ef,i=t(a,l)}while(zl);return i}function qm(){var e=m.H,t=e.useState()[0];return t=typeof t.then=="function"?mn(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(fe.flags|=1024),t}function ms(){var e=vi!==0;return vi=0,e}function gs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function vs(e){if(gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gi=!1}It=0,Xe=De=fe=null,zl=!1,hn=vi=0,wl=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?fe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ve(){if(De===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Xe===null?fe.memoizedState:Xe.next;if(t!==null)Xe=t,De=e;else{if(e===null)throw fe.alternate===null?Error(f(467)):Error(f(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Xe===null?fe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function pi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mn(e){var t=hn;return hn+=1,wl===null&&(wl=[]),e=ou(wl,e,t),t=fe,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,m.H=t===null||t.memoizedState===null?Pu:Cs),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mn(e);if(e.$$typeof===I)return et(e)}throw Error(f(438,String(e)))}function ps(e){var t=null,a=fe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=pi(),fe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=re;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=Ve();return ys(t,De,e)}function ys(e,t,a){var l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=s=null,h=null,j=t,C=!1;do{var M=j.lane&-536870913;if(M!==j.lane?(je&M)===M:(It&M)===M){var N=j.revertLane;if(N===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),M===xl&&(C=!0);else if((It&N)===N){j=j.next,N===xl&&(C=!0);continue}else M={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=M,s=i):h=h.next=M,fe.lanes|=N,za|=N;M=j.action,Fa&&a(i,M),i=j.hasEagerState?j.eagerState:a(i,M)}else N={lane:M,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=N,s=i):h=h.next=N,fe.lanes|=M,za|=M;j=j.next}while(j!==null&&j!==t);if(h===null?s=i:h.next=u,!pt(i,e.memoizedState)&&(Ze=!0,C&&(a=bl,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function xs(e){var t=Ve(),a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);pt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function xu(e,t,a){var l=fe,n=Ve(),i=ze;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=t();var s=!pt((De||n).memoizedState,a);if(s&&(n.memoizedState=a,Ze=!0),n=n.queue,js(ju.bind(null,l,n,e),[e]),n.getSnapshot!==t||s||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},Su.bind(null,l,n,a,t),null),ke===null)throw Error(f(349));i||(It&127)!==0||bu(l,t,a)}return a}function bu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=fe.updateQueue,t===null?(t=pi(),fe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Su(e,t,a,l){t.value=a,t.getSnapshot=l,Nu(t)&&zu(e)}function ju(e,t,a){return a(function(){Nu(t)&&zu(e)})}function Nu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!pt(e,a)}catch{return!0}}function zu(e){var t=qa(e,2);t!==null&&ht(t,e,2)}function bs(e){var t=it();if(typeof e=="function"){var a=e;if(e=a(),Fa){ua(!0);try{a()}finally{ua(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function wu(e,t,a,l){return e.baseState=a,ys(e,De,typeof l=="function"?l:Pt)}function Ym(e,t,a,l,n){if(ji(e))throw Error(f(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};m.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Eu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Eu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=m.T,s={};m.T=s;try{var u=a(n,l),h=m.S;h!==null&&h(s,u),Tu(e,t,u)}catch(j){Ss(e,t,j)}finally{i!==null&&s.types!==null&&(i.types=s.types),m.T=i}}else try{i=a(n,l),Tu(e,t,i)}catch(j){Ss(e,t,j)}}function Tu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Cu(e,t,l)},function(l){return Ss(e,t,l)}):Cu(e,t,a)}function Cu(e,t,a){t.status="fulfilled",t.value=a,Au(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Eu(e,a)))}function Ss(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Au(t),t=t.next;while(t!==l)}e.action=null}function Au(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ou(e,t){return t}function _u(e,t){if(ze){var a=ke.formState;if(a!==null){e:{var l=fe;if(ze){if(Le){t:{for(var n=Le,i=Ot;n.nodeType!==8;){if(!i){n=null;break t}if(n=Dt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Le=Dt(n.nextSibling),l=n.data==="F!";break e}}ga(l)}l=!1}l&&(t=a[0])}}return a=it(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:t},a.queue=l,a=$u.bind(null,fe,l),l.dispatch=a,l=bs(!1),i=Ts.bind(null,fe,!1,l.queue),l=it(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Ym.bind(null,fe,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Du(e){var t=Ve();return Mu(t,De,e)}function Mu(e,t,a){if(t=ys(e,t,Ou)[0],e=xi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=mn(t)}catch(s){throw s===Sl?ri:s}else l=t;t=Ve();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(fe.flags|=2048,El(9,{destroy:void 0},Gm.bind(null,n,a),null)),[l,i,e]}function Gm(e,t){e.action=t}function Uu(e){var t=Ve(),a=De;if(a!==null)return Mu(t,a,e);Ve(),t=t.memoizedState,a=Ve();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=fe.updateQueue,t===null&&(t=pi(),fe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function ku(){return Ve().memoizedState}function bi(e,t,a,l){var n=it();fe.flags|=e,n.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function Si(e,t,a,l){var n=Ve();l=l===void 0?null:l;var i=n.memoizedState.inst;De!==null&&l!==null&&ds(l,De.memoizedState.deps)?n.memoizedState=El(t,i,a,l):(fe.flags|=e,n.memoizedState=El(1|t,i,a,l))}function Lu(e,t){bi(8390656,8,e,t)}function js(e,t){Si(2048,8,e,t)}function Vm(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=pi(),fe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ru(e){var t=Ve().memoizedState;return Vm({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function Bu(e,t){return Si(4,2,e,t)}function Hu(e,t){return Si(4,4,e,t)}function qu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,a){a=a!=null?a.concat([e]):null,Si(4,4,qu.bind(null,t,e),a)}function Ns(){}function Gu(e,t){var a=Ve();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ds(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Vu(e,t){var a=Ve();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ds(t,l[1]))return l[0];if(l=e(),Fa){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l}function zs(e,t,a){return a===void 0||(It&1073741824)!==0&&(je&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Xf(),fe.lanes|=e,za|=e,a)}function Qu(e,t,a,l){return pt(a,t)?a:Nl.current!==null?(e=zs(e,a,l),pt(e,t)||(Ze=!0),e):(It&42)===0||(It&1073741824)!==0&&(je&261930)===0?(Ze=!0,e.memoizedState=a):(e=Xf(),fe.lanes|=e,za|=e,t)}function Xu(e,t,a,l,n){var i=A.p;A.p=i!==0&&8>i?i:8;var s=m.T,u={};m.T=u,Ts(e,!1,t,a);try{var h=n(),j=m.S;if(j!==null&&j(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=Bm(h,l);gn(e,t,C,Nt(e))}else gn(e,t,l,Nt(e))}catch(M){gn(e,t,{then:function(){},status:"rejected",reason:M},Nt())}finally{A.p=i,s!==null&&u.types!==null&&(s.types=u.types),m.T=s}}function Qm(){}function ws(e,t,a,l){if(e.tag!==5)throw Error(f(476));var n=Zu(e).queue;Xu(e,n,t,B,a===null?Qm:function(){return Ku(e),a(l)})}function Zu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:B},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ku(e){var t=Zu(e);t.next===null&&(t=e.alternate.memoizedState),gn(e,t.next.queue,{},Nt())}function Es(){return et(Dn)}function Ju(){return Ve().memoizedState}function Fu(){return Ve().memoizedState}function Xm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Nt();e=ya(a);var l=xa(t,e,a);l!==null&&(ht(l,t,a),un(l,t,a)),t={cache:ts()},e.payload=t;return}t=t.return}}function Zm(e,t,a){var l=Nt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(e)?Wu(t,a):(a=Qc(e,t,a,l),a!==null&&(ht(a,e,l),Iu(a,t,l)))}function $u(e,t,a){var l=Nt();gn(e,t,a,l)}function gn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(e))Wu(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,u=i(s,a);if(n.hasEagerState=!0,n.eagerState=u,pt(u,s))return ai(e,t,n,0),ke===null&&ti(),!1}catch{}if(a=Qc(e,t,n,l),a!==null)return ht(a,e,l),Iu(a,t,l),!0}return!1}function Ts(e,t,a,l){if(l={lane:2,revertLane:io(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(f(479))}else t=Qc(e,a,l,2),t!==null&&ht(t,e,2)}function ji(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Wu(e,t){zl=gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Iu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,lr(e,a)}}var vn={readContext:et,use:yi,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};vn.useEffectEvent=qe;var Pu={readContext:et,use:yi,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Lu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bi(4194308,4,qu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var a=it();t=t===void 0?null:t;var l=e();if(Fa){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=it();if(a!==void 0){var n=a(t);if(Fa){ua(!0);try{a(t)}finally{ua(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Zm.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=bs(e);var t=e.queue,a=$u.bind(null,fe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ns,useDeferredValue:function(e,t){var a=it();return zs(a,e,t)},useTransition:function(){var e=bs(!1);return e=Xu.bind(null,fe,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=fe,n=it();if(ze){if(a===void 0)throw Error(f(407));a=a()}else{if(a=t(),ke===null)throw Error(f(349));(je&127)!==0||bu(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Lu(ju.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},Su.bind(null,l,i,a,t),null),a},useId:function(){var e=it(),t=ke.identifierPrefix;if(ze){var a=Ht,l=Bt;a=(l&~(1<<32-vt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Hm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:_u,useActionState:_u,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ts.bind(null,fe,!0,a),a.dispatch=t,[e,t]},useMemoCache:ps,useCacheRefresh:function(){return it().memoizedState=Xm.bind(null,fe)},useEffectEvent:function(e){var t=it(),a={impl:e};return t.memoizedState=a,function(){if((Ae&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},Cs={readContext:et,use:yi,useCallback:Gu,useContext:et,useEffect:js,useImperativeHandle:Yu,useInsertionEffect:Bu,useLayoutEffect:Hu,useMemo:Vu,useReducer:xi,useRef:ku,useState:function(){return xi(Pt)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=Ve();return Qu(a,De.memoizedState,e,t)},useTransition:function(){var e=xi(Pt)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:mn(e),t]},useSyncExternalStore:xu,useId:Ju,useHostTransitionStatus:Es,useFormState:Du,useActionState:Du,useOptimistic:function(e,t){var a=Ve();return wu(a,De,e,t)},useMemoCache:ps,useCacheRefresh:Fu};Cs.useEffectEvent=Ru;var ef={readContext:et,use:yi,useCallback:Gu,useContext:et,useEffect:js,useImperativeHandle:Yu,useInsertionEffect:Bu,useLayoutEffect:Hu,useMemo:Vu,useReducer:xs,useRef:ku,useState:function(){return xs(Pt)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=Ve();return De===null?zs(a,e,t):Qu(a,De.memoizedState,e,t)},useTransition:function(){var e=xs(Pt)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:mn(e),t]},useSyncExternalStore:xu,useId:Ju,useHostTransitionStatus:Es,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,t){var a=Ve();return De!==null?wu(a,De,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ps,useCacheRefresh:Fu};ef.useEffectEvent=Ru;function As(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Os={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Nt(),n=ya(l);n.payload=t,a!=null&&(n.callback=a),t=xa(e,n,l),t!==null&&(ht(t,e,l),un(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Nt(),n=ya(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=xa(e,n,l),t!==null&&(ht(t,e,l),un(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Nt(),l=ya(a);l.tag=2,t!=null&&(l.callback=t),t=xa(e,l,a),t!==null&&(ht(t,e,a),un(t,e,a))}};function tf(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!tn(a,l)||!tn(n,i):!0}function af(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function $a(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function lf(e){ei(e)}function nf(e){console.error(e)}function cf(e){ei(e)}function Ni(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function sf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function _s(e,t,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Ni(e,t)},a}function of(e){return e=ya(e),e.tag=3,e}function rf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){sf(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){sf(t,a,l),typeof n!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Km(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&yl(t,a,n,!0),a=xt.current,a!==null){switch(a.tag){case 31:case 13:return _t===null?ki():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===ui?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ao(e,l,n)),!1;case 22:return a.flags|=65536,l===ui?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ao(e,l,n)),!1}throw Error(f(435,a.tag))}return ao(e,l,n),ki(),!1}if(ze)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==$c&&(e=Error(f(422),{cause:l}),nn(Tt(e,a)))):(l!==$c&&(t=Error(f(423),{cause:l}),nn(Tt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Tt(l,a),n=_s(e.stateNode,l,n),ss(e,n),Ye!==4&&(Ye=2)),!1;var i=Error(f(520),{cause:l});if(i=Tt(i,a),zn===null?zn=[i]:zn.push(i),Ye!==4&&(Ye=2),t===null)return!0;l=Tt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=_s(a.stateNode,l,e),ss(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=of(n),rf(n,e,a,l),ss(a,n),!1}a=a.return}while(a!==null);return!1}var Ds=Error(f(461)),Ze=!1;function tt(e,t,a,l){t.child=e===null?du(t,null,a,l):Ja(t,e.child,a,l)}function uf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var u in l)u!=="ref"&&(s[u]=l[u])}else s=l;return Qa(t),l=hs(e,t,a,s,i,n),u=ms(),e!==null&&!Ze?(gs(e,t,n),ea(e,t,n)):(ze&&u&&Jc(t),t.flags|=1,tt(e,t,l,n),t.child)}function ff(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Xc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,df(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qs(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:tn,a(s,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Jt(i,l),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(tn(i,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=i,qs(e,n))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ea(e,t,n)}return Ms(e,t,a,l,n)}function hf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return mf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(t,i!==null?i.cachePool:null),i!==null?gu(t,i):rs(),vu(t);else return l=t.lanes=536870912,mf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(oi(t,i.cachePool),gu(t,i),Sa(),t.memoizedState=null):(e!==null&&oi(t,null),rs(),Sa());return tt(e,t,n,a),t.child}function pn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mf(e,t,a,l,n){var i=ls();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&oi(t,null),rs(),vu(t),e!==null&&yl(e,t,l,!0),t.childLanes=n,null}function zi(e,t){return t=Ei({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gf(e,t,a){return Ja(t,e.child,null,a),e=zi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Jm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ze){if(l.mode==="hidden")return e=zi(t,l),t.lanes=536870912,pn(null,e);if(fs(t),(e=Le)?(e=Td(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Bt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Wr(e),a.return=t,t.child=a,Pe=t,Le=null)):e=null,e===null)throw ga(t);return t.lanes=536870912,null}return zi(t,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(fs(t),n)if(t.flags&256)t.flags&=-257,t=gf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Ze||yl(e,t,a,!1),n=(a&e.childLanes)!==0,Ze||n){if(l=ke,l!==null&&(s=nr(l,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,qa(e,s),ht(l,e,s),Ds;ki(),t=gf(e,t,a)}else e=i.treeContext,Le=Dt(s.nextSibling),Pe=t,ze=!0,ma=null,Ot=!1,e!==null&&eu(t,e),t=zi(t,l),t.flags|=4096;return t}return e=Jt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ms(e,t,a,l,n){return Qa(t),a=hs(e,t,a,l,void 0,n),l=ms(),e!==null&&!Ze?(gs(e,t,n),ea(e,t,n)):(ze&&l&&Jc(t),t.flags|=1,tt(e,t,a,n),t.child)}function vf(e,t,a,l,n,i){return Qa(t),t.updateQueue=null,a=yu(t,l,a,n),pu(e),l=ms(),e!==null&&!Ze?(gs(e,t,i),ea(e,t,i)):(ze&&l&&Jc(t),t.flags|=1,tt(e,t,a,i),t.child)}function pf(e,t,a,l,n){if(Qa(t),t.stateNode===null){var i=ml,s=a.contextType;typeof s=="object"&&s!==null&&(i=et(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Os,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},is(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?et(s):ml,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(As(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Os.enqueueReplaceState(i,i.state,null),dn(t,l,i,n),fn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,h=$a(a,u);i.props=h;var j=i.context,C=a.contextType;s=ml,typeof C=="object"&&C!==null&&(s=et(C));var M=a.getDerivedStateFromProps;C=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||j!==s)&&af(t,i,l,s),pa=!1;var N=t.memoizedState;i.state=N,dn(t,l,i,n),fn(),j=t.memoizedState,u||N!==j||pa?(typeof M=="function"&&(As(t,a,M,l),j=t.memoizedState),(h=pa||tf(t,a,h,l,N,j,s))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=s,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,cs(e,t),s=t.memoizedProps,C=$a(a,s),i.props=C,M=t.pendingProps,N=i.context,j=a.contextType,h=ml,typeof j=="object"&&j!==null&&(h=et(j)),u=a.getDerivedStateFromProps,(j=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==M||N!==h)&&af(t,i,l,h),pa=!1,N=t.memoizedState,i.state=N,dn(t,l,i,n),fn();var w=t.memoizedState;s!==M||N!==w||pa||e!==null&&e.dependencies!==null&&ci(e.dependencies)?(typeof u=="function"&&(As(t,a,u,l),w=t.memoizedState),(C=pa||tf(t,a,C,l,N,w,h)||e!==null&&e.dependencies!==null&&ci(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,w,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,w,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=h,l=C):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,wi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ja(t,e.child,null,n),t.child=Ja(t,null,a,n)):tt(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function yf(e,t,a,l){return Ga(),t.flags|=256,tt(e,t,a,l),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ks(e){return{baseLanes:e,cachePool:cu()}}function Ls(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function xf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(n?ba(t):Sa(),(e=Le)?(e=Td(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Bt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Wr(e),a.return=t,t.child=a,Pe=t,Le=null)):e=null,e===null)throw ga(t);return xo(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(Sa(),n=t.mode,u=Ei({mode:"hidden",children:u},n),l=Ya(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=ks(a),l.childLanes=Ls(e,s,a),t.memoizedState=Us,pn(null,l)):(ba(t),Rs(t,u))}var h=e.memoizedState;if(h!==null&&(u=h.dehydrated,u!==null)){if(i)t.flags&256?(ba(t),t.flags&=-257,t=Bs(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),u=l.fallback,n=t.mode,l=Ei({mode:"visible",children:l.children},n),u=Ya(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Ja(t,e.child,null,a),l=t.child,l.memoizedState=ks(a),l.childLanes=Ls(e,s,a),t.memoizedState=Us,t=pn(null,l));else if(ba(t),xo(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var j=s.dgst;s=j,l=Error(f(419)),l.stack="",l.digest=s,nn({value:l,source:null,stack:null}),t=Bs(e,t,a)}else if(Ze||yl(e,t,a,!1),s=(a&e.childLanes)!==0,Ze||s){if(s=ke,s!==null&&(l=nr(s,a),l!==0&&l!==h.retryLane))throw h.retryLane=l,qa(e,l),ht(s,e,l),Ds;yo(u)||ki(),t=Bs(e,t,a)}else yo(u)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Le=Dt(u.nextSibling),Pe=t,ze=!0,ma=null,Ot=!1,e!==null&&eu(t,e),t=Rs(t,l.children),t.flags|=4096);return t}return n?(Sa(),u=l.fallback,n=t.mode,h=e.child,j=h.sibling,l=Jt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,j!==null?u=Jt(j,u):(u=Ya(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,pn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=ks(a):(n=u.cachePool,n!==null?(h=Qe._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=cu(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=Ls(e,s,a),t.memoizedState=Us,pn(e.child,l)):(ba(t),a=e.child,e=a.sibling,a=Jt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Rs(e,t){return t=Ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ei(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function Bs(e,t,a){return Ja(t,e.child,null,a),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Pc(e.return,t,a)}function Hs(e,t,a,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n,s.treeForkCount=i)}function Sf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=Ge.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,R(Ge,s),tt(e,t,l,a),l=ze?ln:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,a,t);else if(e.tag===19)bf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&mi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Hs(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&mi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Hs(t,!0,a,null,i,l);break;case"together":Hs(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(yl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,a=Jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ci(e)))}function Fm(e,t,a){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),va(t,Qe,e.memoizedState.cache),Ga();break;case 27:case 5:He(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fs(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?xf(e,t,a):(ba(t),e=ea(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(yl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Sf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(Ge,Ge.current),l)break;return null;case 22:return t.lanes=0,hf(e,t,a,t.pendingProps);case 24:va(t,Qe,e.memoizedState.cache)}return ea(e,t,a)}function jf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!qs(e,a)&&(t.flags&128)===0)return Ze=!1,Fm(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,ze&&(t.flags&1048576)!==0&&Pr(t,ln,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e=="function")Xc(e)?(l=$a(e,l),t.tag=1,t=pf(null,t,e,l,a)):(t.tag=0,t=Ms(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===he){t.tag=11,t=uf(null,t,e,l,a);break e}else if(n===G){t.tag=14,t=ff(null,t,e,l,a);break e}}throw t=J(e)||e,Error(f(306,t,""))}}return t;case 0:return Ms(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=$a(l,t.pendingProps),pf(e,t,l,n,a);case 3:e:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(f(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,cs(e,t),dn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,va(t,Qe,l),l!==i.cache&&es(t,[Qe],a,!0),fn(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=yf(e,t,l,a);break e}else if(l!==n){n=Tt(Error(f(424)),t),nn(n),t=yf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Le=Dt(e.firstChild),Pe=t,ze=!0,ma=null,Ot=!0,a=du(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ga(),l===n){t=ea(e,t,a);break e}tt(e,t,l,a)}t=t.child}return t;case 26:return wi(e,t),e===null?(a=Md(t.type,null,t.pendingProps,null))?t.memoizedState=a:ze||(a=t.type,e=t.pendingProps,l=Gi(me.current).createElement(a),l[Ie]=t,l[st]=e,at(l,a,e),$e(l),t.stateNode=l):t.memoizedState=Md(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return He(t),e===null&&ze&&(l=t.stateNode=Od(t.type,t.pendingProps,me.current),Pe=t,Ot=!0,n=Le,Aa(t.type)?(bo=n,Le=Dt(l.firstChild)):Le=n),tt(e,t,t.pendingProps.children,a),wi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((n=l=Le)&&(l=wg(l,t.type,t.pendingProps,Ot),l!==null?(t.stateNode=l,Pe=t,Le=Dt(l.firstChild),Ot=!1,n=!0):n=!1),n||ga(t)),He(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,go(n,i)?l=null:s!==null&&go(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=hs(e,t,qm,null,null,a),Dn._currentValue=n),wi(e,t),tt(e,t,l,a),t.child;case 6:return e===null&&ze&&((e=a=Le)&&(a=Eg(a,t.pendingProps,Ot),a!==null?(t.stateNode=a,Pe=t,Le=null,e=!0):e=!1),e||ga(t)),null;case 13:return xf(e,t,a);case 4:return ue(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ja(t,null,l,a):tt(e,t,l,a),t.child;case 11:return uf(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,va(t,t.type,l.value),tt(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Qa(t),n=et(n),l=l(n),t.flags|=1,tt(e,t,l,a),t.child;case 14:return ff(e,t,t.type,t.pendingProps,a);case 15:return df(e,t,t.type,t.pendingProps,a);case 19:return Sf(e,t,a);case 31:return Jm(e,t,a);case 22:return hf(e,t,a,t.pendingProps);case 24:return Qa(t),l=et(Qe),e===null?(n=ls(),n===null&&(n=ke,i=ts(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},is(t),va(t,Qe,n)):((e.lanes&a)!==0&&(cs(e,t),dn(t,null,null,a),fn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),va(t,Qe,l)):(l=i.cache,va(t,Qe,l),l!==n.cache&&es(t,[Qe],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function ta(e){e.flags|=4}function Ys(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Ff())e.flags|=8192;else throw Ka=ui,ns}else e.flags&=-16777217}function Nf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bd(t))if(Ff())e.flags|=8192;else throw Ka=ui,ns}function Ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tr():536870912,e.lanes|=t,Ol|=t)}function yn(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function $m(e,t,a){var l=t.pendingProps;switch(Fc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wt(Qe),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wc())),Re(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Re(t),Nf(t,i)):(Re(t),Ys(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Re(t),Nf(t,i)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Re(t),Ys(t,n,e,l,a)),null;case 27:if(Fe(t),a=me.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return Re(t),null}e=F.current,pl(t)?tu(t):(e=Od(n,l,a),t.stateNode=e,ta(t))}return Re(t),null;case 5:if(Fe(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return Re(t),null}if(i=F.current,pl(t))tu(t);else{var s=Gi(me.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Ie]=t,i[st]=l;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(at(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Re(t),Ys(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(f(166));if(e=me.current,pl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Pe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||xd(e.nodeValue,a)),e||ga(t,!0)}else e=Gi(e).createTextNode(l),e[Ie]=t,t.stateNode=e}return Re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=pl(t),a!==null){if(e===null){if(!l)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ie]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else a=Wc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return Re(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=pl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(f(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[Ie]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),n=!1}else n=Wc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ti(t,t.updateQueue),Re(t),null);case 4:return we(),e===null&&ro(t.stateNode.containerInfo),Re(t),null;case 10:return Wt(t.type),Re(t),null;case 19:if(D(Ge),l=t.memoizedState,l===null)return Re(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)yn(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=mi(e),i!==null){for(t.flags|=128,yn(l,!1),e=i.updateQueue,t.updateQueue=e,Ti(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$r(a,e),a=a.sibling;return R(Ge,Ge.current&1|2),ze&&Ft(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&mt()>Di&&(t.flags|=128,n=!0,yn(l,!1),t.lanes=4194304)}else{if(!n)if(e=mi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ti(t,e),yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ze)return Re(t),null}else 2*mt()-l.renderingStartTime>Di&&a!==536870912&&(t.flags|=128,n=!0,yn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=mt(),e.sibling=null,a=Ge.current,R(Ge,n?a&1|2:a&1),ze&&Ft(t,l.treeForkCount),e):(Re(t),null);case 22:case 23:return bt(t),us(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),a=t.updateQueue,a!==null&&Ti(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&D(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Qe),Re(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function Wm(e,t){switch(Fc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Qe),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fe(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(f(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ge),null;case 4:return we(),null;case 10:return Wt(t.type),null;case 22:case 23:return bt(t),us(),e!==null&&D(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Qe),null;case 25:return null;default:return null}}function zf(e,t){switch(Fc(t),t.tag){case 3:Wt(Qe),we();break;case 26:case 27:case 5:Fe(t);break;case 4:we();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:D(Ge);break;case 10:Wt(t.type);break;case 22:case 23:bt(t),us(),e!==null&&D(Xa);break;case 24:Wt(Qe)}}function xn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(u){_e(t,t.return,u)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,n=t;var h=a,j=u;try{j()}catch(C){_e(n,h,C)}}}l=l.next}while(l!==i)}}catch(C){_e(t,t.return,C)}}function wf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{mu(t,a)}catch(l){_e(e,e.return,l)}}}function Ef(e,t,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){_e(e,t,l)}}function bn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){_e(e,t,n)}}function qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){_e(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){_e(e,t,n)}else a.current=null}function Tf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){_e(e,e.return,n)}}function Gs(e,t,a){try{var l=e.stateNode;xg(l,e.type,a,t),l[st]=t}catch(n){_e(e,e.return,n)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Vs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Qs(e,t,a),e=e.sibling;e!==null;)Qs(e,t,a),e=e.sibling}function Ci(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ci(e,t,a),e=e.sibling;e!==null;)Ci(e,t,a),e=e.sibling}function Af(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);at(t,l,a),t[Ie]=e,t[st]=a}catch(i){_e(e,e.return,i)}}var aa=!1,Ke=!1,Xs=!1,Of=typeof WeakSet=="function"?WeakSet:Set,We=null;function Im(e,t){if(e=e.containerInfo,ho=Fi,e=Yr(e),Bc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,u=-1,h=-1,j=0,C=0,M=e,N=null;t:for(;;){for(var w;M!==a||n!==0&&M.nodeType!==3||(u=s+n),M!==i||l!==0&&M.nodeType!==3||(h=s+l),M.nodeType===3&&(s+=M.nodeValue.length),(w=M.firstChild)!==null;)N=M,M=w;for(;;){if(M===e)break t;if(N===a&&++j===n&&(u=s),N===i&&++C===l&&(h=s),(w=M.nextSibling)!==null)break;M=N,N=M.parentNode}M=w}a=u===-1||h===-1?null:{start:u,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(mo={focusedElem:e,selectionRange:a},Fi=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Z=$a(a.type,n);e=l.getSnapshotBeforeUpdate(Z,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){_e(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)po(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":po(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function _f(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&xn(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){_e(a,a.return,s)}else{var n=$a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){_e(a,a.return,s)}}l&64&&wf(a),l&512&&bn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{mu(e,t)}catch(s){_e(a,a.return,s)}}break;case 27:t===null&&l&4&&Af(a);case 26:case 5:na(e,a),t===null&&l&4&&Tf(a),l&512&&bn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&Uf(e,a);break;case 13:na(e,a),l&4&&kf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sg.bind(null,a),Tg(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Ke,n=aa;var i=Ke;aa=l,(Ke=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Ke=i}break;case 30:break;default:na(e,a)}}function Df(e){var t=e.alternate;t!==null&&(e.alternate=null,Df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Sc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,rt=!1;function la(e,t,a){for(a=a.child;a!==null;)Mf(e,t,a),a=a.sibling}function Mf(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Vl,a)}catch{}switch(a.tag){case 26:Ke||qt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||qt(a,t);var l=Be,n=rt;Aa(a.type)&&(Be=a.stateNode,rt=!1),la(e,t,a),An(a.stateNode),Be=l,rt=n;break;case 5:Ke||qt(a,t);case 6:if(l=Be,n=rt,Be=null,la(e,t,a),Be=l,rt=n,Be!==null)if(rt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(i){_e(a,t,i)}else try{Be.removeChild(a.stateNode)}catch(i){_e(a,t,i)}break;case 18:Be!==null&&(rt?(e=Be,wd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bl(e)):wd(Be,a.stateNode));break;case 4:l=Be,n=rt,Be=a.stateNode.containerInfo,rt=!0,la(e,t,a),Be=l,rt=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Ke||ja(4,a,t),la(e,t,a);break;case 1:Ke||(qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ef(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Ke=(l=Ke)||a.memoizedState!==null,la(e,t,a),Ke=l;break;default:la(e,t,a)}}function Uf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bl(e)}catch(a){_e(t,t.return,a)}}}function kf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bl(e)}catch(a){_e(t,t.return,a)}}function Pm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Of),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Of),t;default:throw Error(f(435,e.tag))}}function Ai(e,t){var a=Pm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=og.bind(null,e,l);l.then(n,n)}})}function ut(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Aa(u.type)){Be=u.stateNode,rt=!1;break e}break;case 5:Be=u.stateNode,rt=!1;break e;case 3:case 4:Be=u.stateNode.containerInfo,rt=!0;break e}u=u.return}if(Be===null)throw Error(f(160));Mf(i,s,n),Be=null,rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Lf(t,e),t=t.sibling}var Lt=null;function Lf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ft(e),l&4&&(ja(3,e,e.return),xn(3,e),ja(5,e,e.return));break;case 1:ut(t,e),ft(e),l&512&&(Ke||a===null||qt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Lt;if(ut(t,e),ft(e),l&512&&(Ke||a===null||qt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Zl]||i[Ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),at(i,l,a),i[Ie]=e,$e(i),l=i;break e;case"link":var s=Ld("link","href",n).get(l+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}i=n.createElement(l),at(i,l,a),n.head.appendChild(i);break;case"meta":if(s=Ld("meta","content",n).get(l+(a.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}i=n.createElement(l),at(i,l,a),n.head.appendChild(i);break;default:throw Error(f(468,l))}i[Ie]=e,$e(i),l=i}e.stateNode=l}else Rd(n,e.type,e.stateNode);else e.stateNode=kd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Rd(n,e.type,e.stateNode):kd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Gs(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),ft(e),l&512&&(Ke||a===null||qt(a,a.return)),a!==null&&l&4&&Gs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),ft(e),l&512&&(Ke||a===null||qt(a,a.return)),e.flags&32){n=e.stateNode;try{sl(n,"")}catch(Z){_e(e,e.return,Z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Gs(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Xs=!0);break;case 6:if(ut(t,e),ft(e),l&4){if(e.stateNode===null)throw Error(f(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Z){_e(e,e.return,Z)}}break;case 3:if(Xi=null,n=Lt,Lt=Vi(t.containerInfo),ut(t,e),Lt=n,ft(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(t.containerInfo)}catch(Z){_e(e,e.return,Z)}Xs&&(Xs=!1,Rf(e));break;case 4:l=Lt,Lt=Vi(e.stateNode.containerInfo),ut(t,e),ft(e),Lt=l;break;case 12:ut(t,e),ft(e);break;case 31:ut(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ai(e,l)));break;case 13:ut(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_i=mt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ai(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,j=aa,C=Ke;if(aa=j||n,Ke=C||h,ut(t,e),Ke=C,aa=j,ft(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||aa||Ke||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=h.stateNode;var M=h.memoizedProps.style,N=M!=null&&M.hasOwnProperty("display")?M.display:null;u.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Z){_e(h,h.return,Z)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(Z){_e(h,h.return,Z)}}}else if(t.tag===18){if(a===null){h=t;try{var w=h.stateNode;n?Ed(w,!0):Ed(h.stateNode,!1)}catch(Z){_e(h,h.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ai(e,a))));break;case 19:ut(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ai(e,l)));break;case 30:break;case 21:break;default:ut(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Cf(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var n=a.stateNode,i=Vs(e);Ci(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(sl(s,""),a.flags&=-33);var u=Vs(e);Ci(e,u,s);break;case 3:case 4:var h=a.stateNode.containerInfo,j=Vs(e);Qs(e,j,h);break;default:throw Error(f(161))}}catch(C){_e(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_f(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),Wa(t);break;case 1:qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ef(t,t.return,a),Wa(t);break;case 27:An(t.stateNode);case 26:case 5:qt(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),xn(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){_e(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)hu(h[n],u)}catch(j){_e(l,l.return,j)}}a&&s&64&&wf(i),bn(i,i.return);break;case 27:Af(i);case 26:case 5:ia(n,i,a),a&&l===null&&s&4&&Tf(i),bn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&s&4&&Uf(n,i);break;case 13:ia(n,i,a),a&&s&4&&kf(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),bn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function Zs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&cn(a))}function Ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e))}function Rt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bf(e,t,a,l),t=t.sibling}function Bf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,a,l),n&2048&&xn(9,t);break;case 1:Rt(e,t,a,l);break;case 3:Rt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e)));break;case 12:if(n&2048){Rt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){_e(t,t.return,h)}}else Rt(e,t,a,l);break;case 31:Rt(e,t,a,l);break;case 13:Rt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Rt(e,t,a,l):Sn(e,t):i._visibility&2?Rt(e,t,a,l):(i._visibility|=2,Tl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Zs(s,t);break;case 24:Rt(e,t,a,l),n&2048&&Ks(t.alternate,t);break;default:Rt(e,t,a,l)}}function Tl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,u=a,h=l,j=s.flags;switch(s.tag){case 0:case 11:case 15:Tl(i,s,u,h,n),xn(8,s);break;case 23:break;case 22:var C=s.stateNode;s.memoizedState!==null?C._visibility&2?Tl(i,s,u,h,n):Sn(i,s):(C._visibility|=2,Tl(i,s,u,h,n)),n&&j&2048&&Zs(s.alternate,s);break;case 24:Tl(i,s,u,h,n),n&&j&2048&&Ks(s.alternate,s);break;default:Tl(i,s,u,h,n)}t=t.sibling}}function Sn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Sn(a,l),n&2048&&Zs(l.alternate,l);break;case 24:Sn(a,l),n&2048&&Ks(l.alternate,l);break;default:Sn(a,l)}t=t.sibling}}var jn=8192;function Cl(e,t,a){if(e.subtreeFlags&jn)for(e=e.child;e!==null;)Hf(e,t,a),e=e.sibling}function Hf(e,t,a){switch(e.tag){case 26:Cl(e,t,a),e.flags&jn&&e.memoizedState!==null&&Hg(a,Lt,e.memoizedState,e.memoizedProps);break;case 5:Cl(e,t,a);break;case 3:case 4:var l=Lt;Lt=Vi(e.stateNode.containerInfo),Cl(e,t,a),Lt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=jn,jn=16777216,Cl(e,t,a),jn=l):Cl(e,t,a));break;default:Cl(e,t,a)}}function qf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Gf(l,e)}qf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yf(e),e=e.sibling}function Yf(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Oi(e)):Nn(e);break;default:Nn(e)}}function Oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];We=l,Gf(l,e)}qf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Oi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Oi(t));break;default:Oi(t)}e=e.sibling}}function Gf(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,We=l;else e:for(a=e;We!==null;){l=We;var n=l.sibling,i=l.return;if(Df(l),l===a){We=null;break e}if(n!==null){n.return=i,We=n;break e}We=i}}}var eg={getCacheForType:function(e){var t=et(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(Qe).controller.signal}},tg=typeof WeakMap=="function"?WeakMap:Map,Ae=0,ke=null,ye=null,je=0,Oe=0,St=null,Na=!1,Al=!1,Js=!1,ca=0,Ye=0,za=0,Ia=0,Fs=0,jt=0,Ol=0,zn=null,dt=null,$s=!1,_i=0,Vf=0,Di=1/0,Mi=null,wa=null,Je=0,Ea=null,_l=null,sa=0,Ws=0,Is=null,Qf=null,wn=0,Ps=null;function Nt(){return(Ae&2)!==0&&je!==0?je&-je:m.T!==null?io():ir()}function Xf(){if(jt===0)if((je&536870912)===0||ze){var e=Yn;Yn<<=1,(Yn&3932160)===0&&(Yn=262144),jt=e}else jt=536870912;return e=xt.current,e!==null&&(e.flags|=32),jt}function ht(e,t,a){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Ta(e,je,jt,!1)),Xl(e,a),((Ae&2)===0||e!==ke)&&(e===ke&&((Ae&2)===0&&(Ia|=a),Ye===4&&Ta(e,je,jt,!1)),Yt(e))}function Zf(e,t,a){if((Ae&6)!==0)throw Error(f(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ql(e,t),n=l?ng(e,t):to(e,t,!0),i=l;do{if(n===0){Al&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!ag(a)){n=to(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;n=zn;var h=u.current.memoizedState.isDehydrated;if(h&&(Dl(u,s).flags|=256),s=to(u,s,!1),s!==2){if(Js&&!h){u.errorRecoveryDisabledLanes|=i,Ia|=i,n=4;break e}i=dt,dt=n,i!==null&&(dt===null?dt=i:dt.push.apply(dt,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,jt,!Na);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(n=_i+300-mt(),10<n)){if(Ta(l,t,jt,!Na),Vn(l,0,!0)!==0)break e;sa=t,l.timeoutHandle=Nd(Kf.bind(null,l,a,dt,Mi,$s,t,jt,Ia,Ol,Na,i,"Throttled",-0,0),n);break e}Kf(l,a,dt,Mi,$s,t,jt,Ia,Ol,Na,i,null,-0,0)}}break}while(!0);Yt(e)}function Kf(e,t,a,l,n,i,s,u,h,j,C,M,N,w){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Hf(t,i,M);var Z=(i&62914560)===i?_i-mt():(i&4194048)===i?Vf-mt():0;if(Z=qg(M,Z),Z!==null){sa=i,e.cancelPendingCommit=Z(td.bind(null,e,t,i,a,l,n,s,u,h,C,M,null,N,w)),Ta(e,i,s,!j);return}}td(e,t,i,a,l,n,s,u,h)}function ag(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!pt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~Fs,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-vt(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&ar(e,a,t)}function Ui(){return(Ae&6)===0?(En(0),!1):!0}function eo(){if(ye!==null){if(Oe===0)var e=ye.return;else e=ye,$t=Va=null,vs(e),jl=null,on=0,e=ye;for(;e!==null;)zf(e.alternate,e),e=e.return;ye=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,eo(),ke=e,ye=a=Jt(e.current,null),je=t,Oe=0,St=null,Na=!1,Al=Ql(e,t),Js=!1,Ol=jt=Fs=Ia=za=Ye=0,dt=zn=null,$s=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-vt(l),i=1<<n;t|=e[n],l&=~i}return ca=t,ti(),a}function Jf(e,t){fe=null,m.H=vn,t===Sl||t===ri?(t=ru(),Oe=3):t===ns?(t=ru(),Oe=4):Oe=t===Ds?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,ye===null&&(Ye=1,Ni(e,Tt(t,e.current)))}function Ff(){var e=xt.current;return e===null?!0:(je&4194048)===je?_t===null:(je&62914560)===je||(je&536870912)!==0?e===_t:!1}function $f(){var e=m.H;return m.H=vn,e===null?vn:e}function Wf(){var e=m.A;return m.A=eg,e}function ki(){Ye=4,Na||(je&4194048)!==je&&xt.current!==null||(Al=!0),(za&134217727)===0&&(Ia&134217727)===0||ke===null||Ta(ke,je,jt,!1)}function to(e,t,a){var l=Ae;Ae|=2;var n=$f(),i=Wf();(ke!==e||je!==t)&&(Mi=null,Dl(e,t)),t=!1;var s=Ye;e:do try{if(Oe!==0&&ye!==null){var u=ye,h=St;switch(Oe){case 8:eo(),s=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var j=Oe;if(Oe=0,St=null,Ml(e,u,h,j),a&&Al){s=0;break e}break;default:j=Oe,Oe=0,St=null,Ml(e,u,h,j)}}lg(),s=Ye;break}catch(C){Jf(e,C)}while(!0);return t&&e.shellSuspendCounter++,$t=Va=null,Ae=l,m.H=n,m.A=i,ye===null&&(ke=null,je=0,ti()),s}function lg(){for(;ye!==null;)If(ye)}function ng(e,t){var a=Ae;Ae|=2;var l=$f(),n=Wf();ke!==e||je!==t?(Mi=null,Di=mt()+500,Dl(e,t)):Al=Ql(e,t);e:do try{if(Oe!==0&&ye!==null){t=ye;var i=St;t:switch(Oe){case 1:Oe=0,St=null,Ml(e,t,i,1);break;case 2:case 9:if(su(i)){Oe=0,St=null,Pf(t);break}t=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),Yt(e)},i.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:su(i)?(Oe=0,St=null,Pf(t)):(Oe=0,St=null,Ml(e,t,i,7));break;case 5:var s=null;switch(ye.tag){case 26:s=ye.memoizedState;case 5:case 27:var u=ye;if(s?Bd(s):u.stateNode.complete){Oe=0,St=null;var h=u.sibling;if(h!==null)ye=h;else{var j=u.return;j!==null?(ye=j,Li(j)):ye=null}break t}}Oe=0,St=null,Ml(e,t,i,5);break;case 6:Oe=0,St=null,Ml(e,t,i,6);break;case 8:eo(),Ye=6;break e;default:throw Error(f(462))}}ig();break}catch(C){Jf(e,C)}while(!0);return $t=Va=null,m.H=l,m.A=n,Ae=a,ye!==null?0:(ke=null,je=0,ti(),Ye)}function ig(){for(;ye!==null&&!Ch();)If(ye)}function If(e){var t=jf(e.alternate,e,ca);e.memoizedProps=e.pendingProps,t===null?Li(e):ye=t}function Pf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=vf(a,t,t.pendingProps,t.type,void 0,je);break;case 11:t=vf(a,t,t.pendingProps,t.type.render,t.ref,je);break;case 5:vs(t);default:zf(a,t),t=ye=$r(t,ca),t=jf(a,t,ca)}e.memoizedProps=e.pendingProps,t===null?Li(e):ye=t}function Ml(e,t,a,l){$t=Va=null,vs(t),jl=null,on=0;var n=t.return;try{if(Km(e,n,t,a,je)){Ye=1,Ni(e,Tt(a,e.current)),ye=null;return}}catch(i){if(n!==null)throw ye=n,i;Ye=1,Ni(e,Tt(a,e.current)),ye=null;return}t.flags&32768?(ze||l===1?e=!0:Al||(je&536870912)!==0?e=!1:(Na=e=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ed(t,e)):Li(t)}function Li(e){var t=e;do{if((t.flags&32768)!==0){ed(t,Na);return}e=t.return;var a=$m(t.alternate,t,ca);if(a!==null){ye=a;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Ye===0&&(Ye=5)}function ed(e,t){do{var a=Wm(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);Ye=6,ye=null}function td(e,t,a,l,n,i,s,u,h){e.cancelPendingCommit=null;do Ri();while(Je!==0);if((Ae&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(i=t.lanes|t.childLanes,i|=Vc,Bh(e,a,i,s,u,h),e===ke&&(ye=ke=null,je=0),_l=t,Ea=e,sa=a,Ws=i,Is=n,Qf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rg(Hn,function(){return cd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=m.T,m.T=null,n=A.p,A.p=2,s=Ae,Ae|=4;try{Im(e,t,a)}finally{Ae=s,A.p=n,m.T=l}}Je=1,ad(),ld(),nd()}}function ad(){if(Je===1){Je=0;var e=Ea,t=_l,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=m.T,m.T=null;var l=A.p;A.p=2;var n=Ae;Ae|=4;try{Lf(t,e);var i=mo,s=Yr(e.containerInfo),u=i.focusedElem,h=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&qr(u.ownerDocument.documentElement,u)){if(h!==null&&Bc(u)){var j=h.start,C=h.end;if(C===void 0&&(C=j),"selectionStart"in u)u.selectionStart=j,u.selectionEnd=Math.min(C,u.value.length);else{var M=u.ownerDocument||document,N=M&&M.defaultView||window;if(N.getSelection){var w=N.getSelection(),Z=u.textContent.length,ne=Math.min(h.start,Z),Ue=h.end===void 0?ne:Math.min(h.end,Z);!w.extend&&ne>Ue&&(s=Ue,Ue=ne,ne=s);var y=Hr(u,ne),g=Hr(u,Ue);if(y&&g&&(w.rangeCount!==1||w.anchorNode!==y.node||w.anchorOffset!==y.offset||w.focusNode!==g.node||w.focusOffset!==g.offset)){var S=M.createRange();S.setStart(y.node,y.offset),w.removeAllRanges(),ne>Ue?(w.addRange(S),w.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),w.addRange(S))}}}}for(M=[],w=u;w=w.parentNode;)w.nodeType===1&&M.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<M.length;u++){var _=M[u];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Fi=!!ho,mo=ho=null}finally{Ae=n,A.p=l,m.T=a}}e.current=t,Je=2}}function ld(){if(Je===2){Je=0;var e=Ea,t=_l,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=m.T,m.T=null;var l=A.p;A.p=2;var n=Ae;Ae|=4;try{_f(e,t.alternate,t)}finally{Ae=n,A.p=l,m.T=a}}Je=3}}function nd(){if(Je===4||Je===3){Je=0,Ah();var e=Ea,t=_l,a=sa,l=Qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,_l=Ea=null,id(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wa=null),xc(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=m.T,n=A.p,A.p=2,m.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var u=l[s];i(u.value,{componentStack:u.stack})}}finally{m.T=t,A.p=n}}(sa&3)!==0&&Ri(),Yt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Ps?wn++:(wn=0,Ps=e):wn=0,En(0)}}function id(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cn(t)))}function Ri(){return ad(),ld(),nd(),cd()}function cd(){if(Je!==5)return!1;var e=Ea,t=Ws;Ws=0;var a=xc(sa),l=m.T,n=A.p;try{A.p=32>a?32:a,m.T=null,a=Is,Is=null;var i=Ea,s=sa;if(Je=0,_l=Ea=null,sa=0,(Ae&6)!==0)throw Error(f(331));var u=Ae;if(Ae|=4,Yf(i.current),Bf(i,i.current,s,a),Ae=u,En(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Vl,i)}catch{}return!0}finally{A.p=n,m.T=l,id(e,t)}}function sd(e,t,a){t=Tt(a,t),t=_s(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(Xl(e,2),Yt(e))}function _e(e,t,a){if(e.tag===3)sd(e,e,a);else for(;t!==null;){if(t.tag===3){sd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=Tt(a,e),a=of(2),l=xa(t,a,2),l!==null&&(rf(a,l,t,e),Xl(l,2),Yt(l));break}}t=t.return}}function ao(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new tg;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Js=!0,n.add(a),e=cg.bind(null,e,t,a),t.then(e,e))}function cg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(je&a)===a&&(Ye===4||Ye===3&&(je&62914560)===je&&300>mt()-_i?(Ae&2)===0&&Dl(e,0):Fs|=a,Ol===je&&(Ol=0)),Yt(e)}function od(e,t){t===0&&(t=tr()),e=qa(e,t),e!==null&&(Xl(e,t),Yt(e))}function sg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),od(e,a)}function og(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(t),od(e,a)}function rg(e,t){return gc(e,t)}var Bi=null,Ul=null,lo=!1,Hi=!1,no=!1,Ca=0;function Yt(e){e!==Ul&&e.next===null&&(Ul===null?Bi=Ul=e:Ul=Ul.next=e),Hi=!0,lo||(lo=!0,fg())}function En(e,t){if(!no&&Hi){no=!0;do for(var a=!1,l=Bi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-vt(42|e)+1)-1,i&=n&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,dd(l,i))}else i=je,i=Vn(l,l===ke?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ql(l,i)||(a=!0,dd(l,i));l=l.next}while(a);no=!1}}function ug(){rd()}function rd(){Hi=lo=!1;var e=0;Ca!==0&&Sg()&&(e=Ca);for(var t=mt(),a=null,l=Bi;l!==null;){var n=l.next,i=ud(l,t);i===0?(l.next=null,a===null?Bi=n:a.next=n,n===null&&(Ul=a)):(a=l,(e!==0||(i&3)!==0)&&(Hi=!0)),l=n}Je!==0&&Je!==5||En(e),Ca!==0&&(Ca=0)}function ud(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-vt(i),u=1<<s,h=n[s];h===-1?((u&a)===0||(u&l)!==0)&&(n[s]=Rh(u,t)):h<=t&&(e.expiredLanes|=u),i&=~u}if(t=ke,a=je,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&vc(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ql(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&vc(l),xc(a)){case 2:case 8:a=Po;break;case 32:a=Hn;break;case 268435456:a=er;break;default:a=Hn}return l=fd.bind(null,e),a=gc(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&vc(l),e.callbackPriority=2,e.callbackNode=null,2}function fd(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ri()&&e.callbackNode!==a)return null;var l=je;return l=Vn(e,e===ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zf(e,l,t),ud(e,mt()),e.callbackNode!=null&&e.callbackNode===a?fd.bind(null,e):null)}function dd(e,t){if(Ri())return null;Zf(e,t,!0)}function fg(){Ng(function(){(Ae&6)!==0?gc(Io,ug):rd()})}function io(){if(Ca===0){var e=xl;e===0&&(e=qn,qn<<=1,(qn&261888)===0&&(qn=256)),Ca=e}return Ca}function hd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function md(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function dg(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=hd((n[st]||null).action),s=l.submitter;s&&(t=(t=s[st]||null)?hd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var u=new Wn("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var h=s?md(n,s):new FormData(n);ws(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(u.preventDefault(),h=s?md(n,s):new FormData(n),ws(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var co=0;co<Gc.length;co++){var so=Gc[co],hg=so.toLowerCase(),mg=so[0].toUpperCase()+so.slice(1);kt(hg,"on"+mg)}kt(Qr,"onAnimationEnd"),kt(Xr,"onAnimationIteration"),kt(Zr,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Om,"onTransitionRun"),kt(_m,"onTransitionStart"),kt(Dm,"onTransitionCancel"),kt(Kr,"onTransitionEnd"),il("onMouseEnter",["mouseout","mouseover"]),il("onMouseLeave",["mouseout","mouseover"]),il("onPointerEnter",["pointerout","pointerover"]),il("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tn));function gd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var u=l[s],h=u.instance,j=u.currentTarget;if(u=u.listener,h!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=j;try{i(n)}catch(C){ei(C)}n.currentTarget=null,i=h}else for(s=0;s<l.length;s++){if(u=l[s],h=u.instance,j=u.currentTarget,u=u.listener,h!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=j;try{i(n)}catch(C){ei(C)}n.currentTarget=null,i=h}}}}function xe(e,t){var a=t[bc];a===void 0&&(a=t[bc]=new Set);var l=e+"__bubble";a.has(l)||(vd(t,e,2,!1),a.add(l))}function oo(e,t,a){var l=0;t&&(l|=4),vd(a,e,l,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[qi]){e[qi]=!0,or.forEach(function(a){a!=="selectionchange"&&(gg.has(a)||oo(a,!1,e),oo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,oo("selectionchange",!1,t))}}function vd(e,t,a,l){switch(Xd(t)){case 2:var n=Vg;break;case 8:n=Qg;break;default:n=wo}a=n.bind(null,t,a,e),n=void 0,!Ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function uo(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var u=l.stateNode.containerInfo;if(u===n)break;if(s===4)for(s=l.return;s!==null;){var h=s.tag;if((h===3||h===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;u!==null;){if(s=al(u),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){l=i=s;continue e}u=u.parentNode}}l=l.return}br(function(){var j=i,C=Tc(a),M=[];e:{var N=Jr.get(e);if(N!==void 0){var w=Wn,Z=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":w=om;break;case"focusin":Z="focus",w=Mc;break;case"focusout":Z="blur",w=Mc;break;case"beforeblur":case"afterblur":w=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=fm;break;case Qr:case Xr:case Zr:w=Ph;break;case Kr:w=hm;break;case"scroll":case"scrollend":w=Jh;break;case"wheel":w=gm;break;case"copy":case"cut":case"paste":w=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=wr;break;case"toggle":case"beforetoggle":w=pm}var ne=(t&4)!==0,Ue=!ne&&(e==="scroll"||e==="scrollend"),y=ne?N!==null?N+"Capture":null:N;ne=[];for(var g=j,S;g!==null;){var _=g;if(S=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||S===null||y===null||(_=Jl(g,y),_!=null&&ne.push(Cn(g,_,S))),Ue)break;g=g.return}0<ne.length&&(N=new w(N,Z,null,a,C),M.push({event:N,listeners:ne}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",N&&a!==Ec&&(Z=a.relatedTarget||a.fromElement)&&(al(Z)||Z[tl]))break e;if((w||N)&&(N=C.window===C?C:(N=C.ownerDocument)?N.defaultView||N.parentWindow:window,w?(Z=a.relatedTarget||a.toElement,w=j,Z=Z?al(Z):null,Z!==null&&(Ue=p(Z),ne=Z.tag,Z!==Ue||ne!==5&&ne!==27&&ne!==6)&&(Z=null)):(w=null,Z=j),w!==Z)){if(ne=Nr,_="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(ne=wr,_="onPointerLeave",y="onPointerEnter",g="pointer"),Ue=w==null?N:Kl(w),S=Z==null?N:Kl(Z),N=new ne(_,g+"leave",w,a,C),N.target=Ue,N.relatedTarget=S,_=null,al(C)===j&&(ne=new ne(y,g+"enter",Z,a,C),ne.target=S,ne.relatedTarget=Ue,_=ne),Ue=_,w&&Z)t:{for(ne=vg,y=w,g=Z,S=0,_=y;_;_=ne(_))S++;_=0;for(var ae=g;ae;ae=ne(ae))_++;for(;0<S-_;)y=ne(y),S--;for(;0<_-S;)g=ne(g),_--;for(;S--;){if(y===g||g!==null&&y===g.alternate){ne=y;break t}y=ne(y),g=ne(g)}ne=null}else ne=null;w!==null&&pd(M,N,w,ne,!1),Z!==null&&Ue!==null&&pd(M,Ue,Z,ne,!0)}}e:{if(N=j?Kl(j):window,w=N.nodeName&&N.nodeName.toLowerCase(),w==="select"||w==="input"&&N.type==="file")var Ee=Mr;else if(_r(N))if(Ur)Ee=Tm;else{Ee=wm;var $=zm}else w=N.nodeName,!w||w.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&wc(j.elementType)&&(Ee=Mr):Ee=Em;if(Ee&&(Ee=Ee(e,j))){Dr(M,Ee,a,C);break e}$&&$(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&zc(N,"number",N.value)}switch($=j?Kl(j):window,e){case"focusin":(_r($)||$.contentEditable==="true")&&(fl=$,Hc=j,an=null);break;case"focusout":an=Hc=fl=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Gr(M,a,C);break;case"selectionchange":if(Am)break;case"keydown":case"keyup":Gr(M,a,C)}var de;if(kc)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else ul?Ar(e,a)&&(Ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ne="onCompositionStart");Ne&&(Er&&a.locale!=="ko"&&(ul||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&ul&&(de=Sr()):(da=C,Oc="value"in da?da.value:da.textContent,ul=!0)),$=Yi(j,Ne),0<$.length&&(Ne=new zr(Ne,e,null,a,C),M.push({event:Ne,listeners:$}),de?Ne.data=de:(de=Or(a),de!==null&&(Ne.data=de)))),(de=xm?bm(e,a):Sm(e,a))&&(Ne=Yi(j,"onBeforeInput"),0<Ne.length&&($=new zr("onBeforeInput","beforeinput",null,a,C),M.push({event:$,listeners:Ne}),$.data=de)),dg(M,e,j,a,C)}gd(M,t)})}function Cn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Jl(e,a),n!=null&&l.unshift(Cn(e,n,i)),n=Jl(e,t),n!=null&&l.push(Cn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function vg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pd(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var u=a,h=u.alternate,j=u.stateNode;if(u=u.tag,h!==null&&h===l)break;u!==5&&u!==26&&u!==27||j===null||(h=j,n?(j=Jl(a,i),j!=null&&s.unshift(Cn(a,j,h))):n||(j=Jl(a,i),j!=null&&s.push(Cn(a,j,h)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var pg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(yg,"")}function xd(e,t){return t=yd(t),yd(e)===t}function Me(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||sl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&sl(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,a,l);break;case"style":yr(e,l,i);break;case"data":if(t!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Me(e,t,"name",n.name,n,null),Me(e,t,"formEncType",n.formEncType,n,null),Me(e,t,"formMethod",n.formMethod,n,null),Me(e,t,"formTarget",n.formTarget,n,null)):(Me(e,t,"encType",n.encType,n,null),Me(e,t,"method",n.method,n,null),Me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Qn(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zh.get(a)||a,Qn(e,a,l))}}function fo(e,t,a,l,n,i){switch(a){case"style":yr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof l=="string"?sl(e,l):(typeof l=="number"||typeof l=="bigint")&&sl(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[st]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qn(e,a,l)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Me(e,t,i,s,a,null)}}n&&Me(e,t,"srcSet",a.srcSet,a,null),l&&Me(e,t,"src",a.src,a,null);return;case"input":xe("invalid",e);var u=i=s=n=null,h=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var C=a[l];if(C!=null)switch(l){case"name":n=C;break;case"type":s=C;break;case"checked":h=C;break;case"defaultChecked":j=C;break;case"value":i=C;break;case"defaultValue":u=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(f(137,t));break;default:Me(e,t,l,C,a,null)}}mr(e,i,u,h,j,s,n,!1);return;case"select":xe("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":l=u;default:Me(e,t,n,u,a,null)}t=i,a=s,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":xe("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:Me(e,t,s,u,a,null)}vr(e,l,n,i);return;case"option":for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null)&&(h==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Me(e,t,h,l,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<Tn.length;l++)xe(Tn[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Me(e,t,j,l,a,null)}return;default:if(wc(t)){for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!==void 0&&fo(e,t,C,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&Me(e,t,u,l,a,null))}function xg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,u=null,h=null,j=null,C=null;for(w in a){var M=a[w];if(a.hasOwnProperty(w)&&M!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":h=M;default:l.hasOwnProperty(w)||Me(e,t,w,null,l,M)}}for(var N in l){var w=l[N];if(M=a[N],l.hasOwnProperty(N)&&(w!=null||M!=null))switch(N){case"type":i=w;break;case"name":n=w;break;case"checked":j=w;break;case"defaultChecked":C=w;break;case"value":s=w;break;case"defaultValue":u=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(f(137,t));break;default:w!==M&&Me(e,t,N,w,l,M)}}Nc(e,s,u,h,j,C,i,n);return;case"select":w=s=u=N=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":w=h;default:l.hasOwnProperty(i)||Me(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":N=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==h&&Me(e,t,n,i,l,h)}t=u,a=s,l=w,N!=null?cl(e,!!a,N,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":w=N=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Me(e,t,u,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":N=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==i&&Me(e,t,s,n,l,i)}gr(e,N,w);return;case"option":for(var Z in a)N=a[Z],a.hasOwnProperty(Z)&&N!=null&&!l.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:Me(e,t,Z,null,l,N));for(h in l)N=l[h],w=a[h],l.hasOwnProperty(h)&&N!==w&&(N!=null||w!=null)&&(h==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":Me(e,t,h,N,l,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)N=a[ne],a.hasOwnProperty(ne)&&N!=null&&!l.hasOwnProperty(ne)&&Me(e,t,ne,null,l,N);for(j in l)if(N=l[j],w=a[j],l.hasOwnProperty(j)&&N!==w&&(N!=null||w!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(f(137,t));break;default:Me(e,t,j,N,l,w)}return;default:if(wc(t)){for(var Ue in a)N=a[Ue],a.hasOwnProperty(Ue)&&N!==void 0&&!l.hasOwnProperty(Ue)&&fo(e,t,Ue,void 0,l,N);for(C in l)N=l[C],w=a[C],!l.hasOwnProperty(C)||N===w||N===void 0&&w===void 0||fo(e,t,C,N,l,w);return}}for(var y in a)N=a[y],a.hasOwnProperty(y)&&N!=null&&!l.hasOwnProperty(y)&&Me(e,t,y,null,l,N);for(M in l)N=l[M],w=a[M],!l.hasOwnProperty(M)||N===w||N==null&&w==null||Me(e,t,M,N,l,w)}function bd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,s=n.initiatorType,u=n.duration;if(i&&u&&bd(s)){for(s=0,u=n.responseEnd,l+=1;l<a.length;l++){var h=a[l],j=h.startTime;if(j>u)break;var C=h.transferSize,M=h.initiatorType;C&&bd(M)&&(h=h.responseEnd,s+=C*(h<u?1:(u-j)/(h-j)))}if(--l,t+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ho=null,mo=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function Sd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=null;function Sg(){var e=window.event;return e&&e.type==="popstate"?e===vo?!1:(vo=e,!0):(vo=null,!1)}var Nd=typeof setTimeout=="function"?setTimeout:void 0,jg=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(zg)}:Nd;function zg(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function wd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Bl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")An(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,An(a);for(var i=a.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Zl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&An(e.ownerDocument.body);a=n}while(a);Bl(t)}function Ed(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function po(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":po(a),Sc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function Eg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Dt(e.nextSibling),e===null))return null;return e}function Td(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Dt(e.nextSibling),e===null))return null;return e}function yo(e){return e.data==="$?"||e.data==="$~"}function xo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bo=null;function Cd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Dt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Od(e,t,a){switch(t=Gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Sc(e)}var Mt=new Map,_d=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=A.d;A.d={f:Cg,r:Ag,D:Og,C:_g,L:Dg,m:Mg,X:kg,S:Ug,M:Lg};function Cg(){var e=oa.f(),t=Ui();return e||t}function Ag(e){var t=ll(e);t!==null&&t.tag===5&&t.type==="form"?Ku(t):oa.r(e)}var kl=typeof document>"u"?null:document;function Dd(e,t,a){var l=kl;if(l&&typeof t=="string"&&t){var n=wt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),_d.has(n)||(_d.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),at(t,"link",e),$e(t),l.head.appendChild(t)))}}function Og(e){oa.D(e),Dd("dns-prefetch",e,null)}function _g(e,t){oa.C(e,t),Dd("preconnect",e,t)}function Dg(e,t,a){oa.L(e,t,a);var l=kl;if(l&&e&&t){var n='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+wt(a.imageSizes)+'"]')):n+='[href="'+wt(e)+'"]';var i=n;switch(t){case"style":i=Ll(e);break;case"script":i=Rl(e)}Mt.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(On(i))||t==="script"&&l.querySelector(_n(i))||(t=l.createElement("link"),at(t,"link",e),$e(t),l.head.appendChild(t)))}}function Mg(e,t){oa.m(e,t);var a=kl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rl(e)}if(!Mt.has(i)&&(e=E({rel:"modulepreload",href:e},t),Mt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_n(i)))return}l=a.createElement("link"),at(l,"link",e),$e(l),a.head.appendChild(l)}}}function Ug(e,t,a){oa.S(e,t,a);var l=kl;if(l&&e){var n=nl(l).hoistableStyles,i=Ll(e);t=t||"default";var s=n.get(i);if(!s){var u={loading:0,preload:null};if(s=l.querySelector(On(i)))u.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(i))&&So(e,a);var h=s=l.createElement("link");$e(h),at(h,"link",e),h._p=new Promise(function(j,C){h.onload=j,h.onerror=C}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Qi(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:u},n.set(i,s)}}}function kg(e,t){oa.X(e,t);var a=kl;if(a&&e){var l=nl(a).hoistableScripts,n=Rl(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=E({src:e,async:!0},t),(t=Mt.get(n))&&jo(e,t),i=a.createElement("script"),$e(i),at(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Lg(e,t){oa.M(e,t);var a=kl;if(a&&e){var l=nl(a).hoistableScripts,n=Rl(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=Mt.get(n))&&jo(e,t),i=a.createElement("script"),$e(i),at(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Md(e,t,a,l){var n=(n=me.current)?Vi(n):null;if(!n)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ll(a.href),a=nl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ll(a.href);var i=nl(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(On(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),i||Rg(n,e,a,s.state))),t&&l===null)throw Error(f(528,""));return s}if(t&&l!==null)throw Error(f(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rl(a),a=nl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Ll(e){return'href="'+wt(e)+'"'}function On(e){return'link[rel="stylesheet"]['+e+"]"}function Ud(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Rg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),at(t,"link",a),$e(t),e.head.appendChild(t))}function Rl(e){return'[src="'+wt(e)+'"]'}function _n(e){return"script[async]"+e}function kd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return t.instance=l,$e(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),at(l,"style",n),Qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ll(a.href);var i=e.querySelector(On(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;l=Ud(a),(n=Mt.get(n))&&So(l,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var s=i;return s._p=new Promise(function(u,h){s.onload=u,s.onerror=h}),at(i,"link",l),t.state.loading|=4,Qi(i,a.precedence,e),t.instance=i;case"script":return i=Rl(a.src),(n=e.querySelector(_n(i)))?(t.instance=n,$e(n),n):(l=a,(n=Mt.get(i))&&(l=E({},a),jo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),at(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Qi(l,a.precedence,e));return t.instance}function Qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var u=l[s];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function So(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xi=null;function Ld(e,t,a){if(Xi===null){var l=new Map,n=Xi=new Map;n.set(a,l)}else n=Xi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Zl]||i[Ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var u=l.get(s);u?u.push(i):l.set(s,[i])}}return l}function Rd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Bg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ll(l.href),i=t.querySelector(On(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,$e(i);return}i=t.ownerDocument||t,l=Ud(l),(n=Mt.get(n))&&So(l,n),i=i.createElement("link"),$e(i);var s=i;s._p=new Promise(function(u,h){s.onload=u,s.onerror=h}),at(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var No=0;function qg(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&No===0&&(No=62500*bg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>No?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Yg,e),Ki=null,Zi.call(e))}function Yg(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=Zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Dn={$$typeof:I,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Gg(e,t,a,l,n,i,s,u,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.hiddenUpdates=pc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Hd(e,t,a,l,n,i,s,u,h,j,C,M){return e=new Gg(e,t,a,s,h,j,C,M,u),t=1,i===!0&&(t|=24),i=yt(3,null,null,t),e.current=i,i.stateNode=e,t=ts(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},is(i),e}function qd(e){return e?(e=ml,e):ml}function Yd(e,t,a,l,n,i){n=qd(n),l.context===null?l.context=n:l.pendingContext=n,l=ya(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=xa(e,l,t),a!==null&&(ht(a,e,t),un(a,e,t))}function Gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function zo(e,t){Gd(e,t),(e=e.alternate)&&Gd(e,t)}function Vd(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&ht(t,e,67108864),zo(e,67108864)}}function Qd(e){if(e.tag===13||e.tag===31){var t=Nt();t=yc(t);var a=qa(e,t);a!==null&&ht(a,e,t),zo(e,t)}}var Fi=!0;function Vg(e,t,a,l){var n=m.T;m.T=null;var i=A.p;try{A.p=2,wo(e,t,a,l)}finally{A.p=i,m.T=n}}function Qg(e,t,a,l){var n=m.T;m.T=null;var i=A.p;try{A.p=8,wo(e,t,a,l)}finally{A.p=i,m.T=n}}function wo(e,t,a,l){if(Fi){var n=Eo(l);if(n===null)uo(e,t,l,$i,a),Zd(e,l);else if(Zg(n,e,t,a,l))l.stopPropagation();else if(Zd(e,l),t&4&&-1<Xg.indexOf(e)){for(;n!==null;){var i=ll(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=ka(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var h=1<<31-vt(s);u.entanglements[1]|=h,s&=~h}Yt(i),(Ae&6)===0&&(Di=mt()+500,En(0))}}break;case 31:case 13:u=qa(i,2),u!==null&&ht(u,i,2),Ui(),zo(i,2)}if(i=Eo(l),i===null&&uo(e,t,l,$i,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else uo(e,t,l,null,a)}}function Eo(e){return e=Tc(e),To(e)}var $i=null;function To(e){if($i=null,e=al(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=O(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $i=e,null}function Xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oh()){case Io:return 2;case Po:return 8;case Hn:case _h:return 32;case er:return 268435456;default:return 32}default:return 32}}var Co=!1,Oa=null,_a=null,Da=null,Mn=new Map,Un=new Map,Ma=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zd(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function kn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ll(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Zg(e,t,a,l,n){switch(t){case"focusin":return Oa=kn(Oa,e,t,a,l,n),!0;case"dragenter":return _a=kn(_a,e,t,a,l,n),!0;case"mouseover":return Da=kn(Da,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Mn.set(i,kn(Mn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Un.set(i,kn(Un.get(i)||null,e,t,a,l,n)),!0}return!1}function Kd(e){var t=al(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=O(a),t!==null){e.blockedOn=t,cr(e.priority,function(){Qd(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,cr(e.priority,function(){Qd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Eo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ec=l,a.target.dispatchEvent(l),Ec=null}else return t=ll(a),t!==null&&Vd(t),e.blockedOn=a,!1;t.shift()}return!0}function Jd(e,t,a){Wi(e)&&a.delete(t)}function Kg(){Co=!1,Oa!==null&&Wi(Oa)&&(Oa=null),_a!==null&&Wi(_a)&&(_a=null),Da!==null&&Wi(Da)&&(Da=null),Mn.forEach(Jd),Un.forEach(Jd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Kg)))}var Pi=null;function Fd(e){Pi!==e&&(Pi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(To(l||a)===null)continue;break}var i=ll(a);i!==null&&(e.splice(t,3),t-=3,ws(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Bl(e){function t(h){return Ii(h,e)}Oa!==null&&Ii(Oa,e),_a!==null&&Ii(_a,e),Da!==null&&Ii(Da,e),Mn.forEach(t),Un.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Kd(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[st]||null;if(typeof i=="function")s||Fd(a);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[st]||null)u=s.formAction;else if(To(n)!==null)continue}else u=s.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Fd(a)}}}function $d(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ao(e){this._internalRoot=e}ec.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var a=t.current,l=Nt();Yd(a,l,e,t,null,null)},ec.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yd(e.current,2,null,e,null,null),Ui(),t[tl]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var t=ir();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Kd(e)}};var Wd=o.version;if(Wd!=="19.2.3")throw Error(f(527,Wd,"19.2.3"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=x(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var Jg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:m,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Vl=tc.inject(Jg),gt=tc}catch{}}return Rn.createRoot=function(e,t){if(!b(e))throw Error(f(299));var a=!1,l="",n=lf,i=nf,s=cf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Hd(e,1,!1,null,null,a,l,null,n,i,s,$d),e[tl]=t.current,ro(e),new Ao(t)},Rn.hydrateRoot=function(e,t,a){if(!b(e))throw Error(f(299));var l=!1,n="",i=lf,s=nf,u=cf,h=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Hd(e,1,!0,t,a??null,l,n,h,i,s,u,$d),t.context=qd(null),a=t.current,l=Nt(),l=yc(l),n=ya(l),n.callback=null,xa(a,n,l),a=l,t.current.lanes=a,Xl(t,a),Yt(t),e[tl]=t.current,ro(e),new ec(t)},Rn.version="19.2.3",Rn}var sh;function nv(){if(sh)return Do.exports;sh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Do.exports=lv(),Do.exports}var iv=nv();function Ce({children:r,className:o="",style:d,onClick:f}){return c.jsx("div",{className:`card ${o}`,style:d,onClick:f,role:f?"button":void 0,tabIndex:f?0:void 0,children:r})}function Gt({variant:r="primary",children:o,className:d="",...f}){const b=r==="icon"?"btn-icon":`btn-${r}`;return c.jsx("button",{className:`btn ${b} ${d}`,...f,children:o})}const cv={"dollar-sign":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),c.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),stamp:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M4 21h16"}),c.jsx("path",{d:"M4 18h16"}),c.jsx("path",{d:"M5 14c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4H5v-4z"}),c.jsx("path",{d:"M8 12V6c0-2.2 1.8-4 4-4s4 1.8 4 4v6"})]}),layers:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),c.jsx("polyline",{points:"2 17 12 22 22 17"}),c.jsx("polyline",{points:"2 12 12 17 22 12"})]}),disc:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),music:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M9 18V5l12-2v13"}),c.jsx("circle",{cx:"6",cy:"18",r:"3"}),c.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),"book-open":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),c.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),book:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),c.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),puzzle:({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.82-.925-.039-1.052-.837-1.99-1.875-2.064a1.988 1.988 0 0 0-1.608.589 2.006 2.006 0 0 0-.59 1.614c.065 1.028.852 1.868 1.875 1.925.073.004.145.005.215.005a.98.98 0 0 1 .707.295l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.82-.925-.039-1.052-.837-1.99-1.875-2.064a1.988 1.988 0 0 0-1.608.589 2.006 2.006 0 0 0-.59 1.614"})}),archive:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polyline",{points:"21 8 21 21 3 21 3 8"}),c.jsx("rect",{x:"1",y:"3",width:"22",height:"5"}),c.jsx("line",{x1:"10",y1:"12",x2:"14",y2:"12"})]}),plus:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"plus-circle":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),c.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),search:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),settings:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),"help-circle":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),c.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),"upload-download":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polyline",{points:"17 1 21 5 17 9"}),c.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),c.jsx("polyline",{points:"7 23 3 19 7 15"}),c.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),"chevron-right":({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"9 18 15 12 9 6"})}),"chevron-left":({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"15 18 9 12 15 6"})}),trash:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polyline",{points:"3 6 5 6 21 6"}),c.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),edit:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),c.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),share:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),c.jsx("polyline",{points:"16 6 12 2 8 6"}),c.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]}),camera:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),c.jsx("circle",{cx:"12",cy:"13",r:"4"})]}),image:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),c.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),c.jsx("polyline",{points:"21 15 16 10 5 21"})]}),x:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"more-vertical":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"1"}),c.jsx("circle",{cx:"12",cy:"5",r:"1"}),c.jsx("circle",{cx:"12",cy:"19",r:"1"})]}),"more-horizontal":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"1"}),c.jsx("circle",{cx:"5",cy:"12",r:"1"}),c.jsx("circle",{cx:"19",cy:"12",r:"1"})]}),home:({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:o,stroke:"none",children:c.jsx("path",{d:"M12 2.1L1 12h3v9a1 1 0 001 1h5v-6a2 2 0 014 0v6h5a1 1 0 001-1v-9h3L12 2.1z"})}),"check-circle":({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),c.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),circle:({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("circle",{cx:"12",cy:"12",r:"10"})}),star:({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:o,stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),check:({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),sun:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"5"}),c.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),c.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),c.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),c.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),c.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),c.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),c.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),c.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),moon:({size:r,color:o})=>c.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),monitor:({size:r,color:o})=>c.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),c.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),c.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})};function Q({name:r,size:o=24,color:d="currentColor",className:f}){const b=cv[r];return b?c.jsx("span",{className:f,style:{display:"inline-flex"},children:b({size:o,color:d})}):(console.warn(`Icon "${r}" not found`),null)}function nc({size:r="medium",fullScreen:o=!1}){const f={small:24,medium:40,large:60}[r],b=c.jsx("div",{className:"spinner",style:{width:f,height:f}});return o?c.jsx("div",{className:"flex items-center justify-center",style:{minHeight:"100vh"},children:b}):b}const yh=[{value:"Mint",icon:"star",shortName:"M",color:"#FFD600"},{value:"Near Mint",icon:"star-half",shortName:"NM",color:"#99CC33"},{value:"Excellent",icon:"sparkles",shortName:"EX",color:"#4DBF66"},{value:"Very Good",icon:"thumbs-up",shortName:"VG",color:"#4DB3E6"},{value:"Good",icon:"check-circle",shortName:"G",color:"#8080E6"},{value:"Fair",icon:"minus-circle",shortName:"F",color:"#F29933"},{value:"Poor",icon:"alert-triangle",shortName:"P",color:"#E64D4D"}];function sv(r){return yh.find(o=>o.value===r)}function ra(r){const o=r.fieldValues.Name;if(o&&o.trim())return o;const d=["Country","Year","Denomination","Artist","Title","Set/Series","Card Number","Issue #","Format"],f=[];for(const b of d){const p=r.fieldValues[b];if(p&&p.trim()&&(f.push(p),f.length>=3))break}return f.length>0?f.join(" "):"Untitled"}function Bn(r){const o=r.fieldValues["Estimated Value"];if(!o)return;const d=parseFloat(o);return isNaN(d)?void 0:d}function ic(r){const o=r.fieldValues.Condition;if(o)return o}function xh({condition:r,showLabel:o=!0}){const d=sv(r);return d?c.jsxs("span",{className:"condition-badge",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,backgroundColor:`${d.color}20`,color:d.color},children:[c.jsx("span",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:d.color}}),o?r:d.shortName]}):null}var ql;(function(r){r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE"})(ql||(ql={}));class Lo extends Error{constructor(o,d,f){super(o),this.message=o,this.code=d,this.data=f}}const ov=r=>{var o,d;return r?.androidBridge?"android":!((d=(o=r?.webkit)===null||o===void 0?void 0:o.messageHandlers)===null||d===void 0)&&d.bridge?"ios":"web"},rv=r=>{const o=r.CapacitorCustomPlatform||null,d=r.Capacitor||{},f=d.Plugins=d.Plugins||{},b=()=>o!==null?o.name:ov(r),p=()=>b()!=="web",O=E=>{const k=x.get(E);return!!(k?.platforms.has(b())||T(E))},T=E=>{var k;return(k=d.PluginHeaders)===null||k===void 0?void 0:k.find(K=>K.name===E)},z=E=>r.console.error(E),x=new Map,L=(E,k={})=>{const K=x.get(E);if(K)return console.warn(`Capacitor plugin "${E}" already registered. Cannot register plugins twice.`),K.proxy;const q=b(),W=T(E);let te;const ie=async()=>(!te&&q in k?te=typeof k[q]=="function"?te=await k[q]():te=k[q]:o!==null&&!te&&"web"in k&&(te=typeof k.web=="function"?te=await k.web():te=k.web),te),be=(X,le)=>{var re,pe;if(W){const ge=W?.methods.find(V=>le===V.name);if(ge)return ge.rtype==="promise"?V=>d.nativePromise(E,le.toString(),V):(V,J)=>d.nativeCallback(E,le.toString(),V,J);if(X)return(re=X[le])===null||re===void 0?void 0:re.bind(X)}else{if(X)return(pe=X[le])===null||pe===void 0?void 0:pe.bind(X);throw new Lo(`"${E}" plugin is not implemented on ${q}`,ql.Unimplemented)}},I=X=>{let le;const re=(...pe)=>{const ge=ie().then(V=>{const J=be(V,X);if(J){const H=J(...pe);return le=H?.remove,H}else throw new Lo(`"${E}.${X}()" is not implemented on ${q}`,ql.Unimplemented)});return X==="addListener"&&(ge.remove=async()=>le()),ge};return re.toString=()=>`${X.toString()}() { [capacitor code] }`,Object.defineProperty(re,"name",{value:X,writable:!1,configurable:!1}),re},he=I("addListener"),Se=I("removeListener"),P=(X,le)=>{const re=he({eventName:X},le),pe=async()=>{const V=await re;Se({eventName:X,callbackId:V},le)},ge=new Promise(V=>re.then(()=>V({remove:pe})));return ge.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await pe()},ge},G=new Proxy({},{get(X,le){switch(le){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return W?P:he;case"removeListener":return Se;default:return I(le)}}});return f[E]=G,x.set(E,{name:E,proxy:G,platforms:new Set([...Object.keys(k),...W?[q]:[]])}),G};return d.convertFileSrc||(d.convertFileSrc=E=>E),d.getPlatform=b,d.handleError=z,d.isNativePlatform=p,d.isPluginAvailable=O,d.registerPlugin=L,d.Exception=Lo,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d},uv=r=>r.Capacitor=rv(r),cc=uv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Yl=cc.registerPlugin;class Ko{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(o,d){let f=!1;this.listeners[o]||(this.listeners[o]=[],f=!0),this.listeners[o].push(d);const p=this.windowListeners[o];p&&!p.registered&&this.addWindowListener(p),f&&this.sendRetainedArgumentsForEvent(o);const O=async()=>this.removeListener(o,d);return Promise.resolve({remove:O})}async removeAllListeners(){this.listeners={};for(const o in this.windowListeners)this.removeWindowListener(this.windowListeners[o]);this.windowListeners={}}notifyListeners(o,d,f){const b=this.listeners[o];if(!b){if(f){let p=this.retainedEventArguments[o];p||(p=[]),p.push(d),this.retainedEventArguments[o]=p}return}b.forEach(p=>p(d))}hasListeners(o){var d;return!!(!((d=this.listeners[o])===null||d===void 0)&&d.length)}registerWindowListener(o,d){this.windowListeners[d]={registered:!1,windowEventName:o,pluginEventName:d,handler:f=>{this.notifyListeners(d,f)}}}unimplemented(o="not implemented"){return new cc.Exception(o,ql.Unimplemented)}unavailable(o="not available"){return new cc.Exception(o,ql.Unavailable)}async removeListener(o,d){const f=this.listeners[o];if(!f)return;const b=f.indexOf(d);this.listeners[o].splice(b,1),this.listeners[o].length||this.removeWindowListener(this.windowListeners[o])}addWindowListener(o){window.addEventListener(o.windowEventName,o.handler),o.registered=!0}removeWindowListener(o){o&&(window.removeEventListener(o.windowEventName,o.handler),o.registered=!1)}sendRetainedArgumentsForEvent(o){const d=this.retainedEventArguments[o];d&&(delete this.retainedEventArguments[o],d.forEach(f=>{this.notifyListeners(o,f)}))}}const oh=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),rh=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class fv extends Ko{async getCookies(){const o=document.cookie,d={};return o.split(";").forEach(f=>{if(f.length<=0)return;let[b,p]=f.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");b=rh(b).trim(),p=rh(p).trim(),d[b]=p}),d}async setCookie(o){try{const d=oh(o.key),f=oh(o.value),b=`; expires=${(o.expires||"").replace("expires=","")}`,p=(o.path||"/").replace("path=",""),O=o.url!=null&&o.url.length>0?`domain=${o.url}`:"";document.cookie=`${d}=${f||""}${b}; path=${p}; ${O};`}catch(d){return Promise.reject(d)}}async deleteCookie(o){try{document.cookie=`${o.key}=; Max-Age=0`}catch(d){return Promise.reject(d)}}async clearCookies(){try{const o=document.cookie.split(";")||[];for(const d of o)document.cookie=d.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(o){return Promise.reject(o)}}async clearAllCookies(){try{await this.clearCookies()}catch(o){return Promise.reject(o)}}}Yl("CapacitorCookies",{web:()=>new fv});const dv=async r=>new Promise((o,d)=>{const f=new FileReader;f.onload=()=>{const b=f.result;o(b.indexOf(",")>=0?b.split(",")[1]:b)},f.onerror=b=>d(b),f.readAsDataURL(r)}),hv=(r={})=>{const o=Object.keys(r);return Object.keys(r).map(b=>b.toLocaleLowerCase()).reduce((b,p,O)=>(b[p]=r[o[O]],b),{})},mv=(r,o=!0)=>r?Object.entries(r).reduce((f,b)=>{const[p,O]=b;let T,z;return Array.isArray(O)?(z="",O.forEach(x=>{T=o?encodeURIComponent(x):x,z+=`${p}=${T}&`}),z.slice(0,-1)):(T=o?encodeURIComponent(O):O,z=`${p}=${T}`),`${f}&${z}`},"").substr(1):null,gv=(r,o={})=>{const d=Object.assign({method:r.method||"GET",headers:r.headers},o),b=hv(r.headers)["content-type"]||"";if(typeof r.data=="string")d.body=r.data;else if(b.includes("application/x-www-form-urlencoded")){const p=new URLSearchParams;for(const[O,T]of Object.entries(r.data||{}))p.set(O,T);d.body=p.toString()}else if(b.includes("multipart/form-data")||r.data instanceof FormData){const p=new FormData;if(r.data instanceof FormData)r.data.forEach((T,z)=>{p.append(z,T)});else for(const T of Object.keys(r.data))p.append(T,r.data[T]);d.body=p;const O=new Headers(d.headers);O.delete("content-type"),d.headers=O}else(b.includes("application/json")||typeof r.data=="object")&&(d.body=JSON.stringify(r.data));return d};class vv extends Ko{async request(o){const d=gv(o,o.webFetchExtra),f=mv(o.params,o.shouldEncodeUrlParams),b=f?`${o.url}?${f}`:o.url,p=await fetch(b,d),O=p.headers.get("content-type")||"";let{responseType:T="text"}=p.ok?o:{};O.includes("application/json")&&(T="json");let z,x;switch(T){case"arraybuffer":case"blob":x=await p.blob(),z=await dv(x);break;case"json":z=await p.json();break;default:z=await p.text()}const L={};return p.headers.forEach((E,k)=>{L[k]=E}),{data:z,headers:L,status:p.status,url:p.url}}async get(o){return this.request(Object.assign(Object.assign({},o),{method:"GET"}))}async post(o){return this.request(Object.assign(Object.assign({},o),{method:"POST"}))}async put(o){return this.request(Object.assign(Object.assign({},o),{method:"PUT"}))}async patch(o){return this.request(Object.assign(Object.assign({},o),{method:"PATCH"}))}async delete(o){return this.request(Object.assign(Object.assign({},o),{method:"DELETE"}))}}Yl("CapacitorHttp",{web:()=>new vv});var uh;(function(r){r.Dark="DARK",r.Light="LIGHT",r.Default="DEFAULT"})(uh||(uh={}));var fh;(function(r){r.StatusBar="StatusBar",r.NavigationBar="NavigationBar"})(fh||(fh={}));class pv extends Ko{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Yl("SystemBars",{web:()=>new pv});const yv="modulepreload",xv=function(r){return"/treasure-tracking/"+r},dh={},bh=function(o,d,f){let b=Promise.resolve();if(d&&d.length>0){let z=function(x){return Promise.all(x.map(L=>Promise.resolve(L).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const O=document.querySelector("meta[property=csp-nonce]"),T=O?.nonce||O?.getAttribute("nonce");b=z(d.map(x=>{if(x=xv(x),x in dh)return;dh[x]=!0;const L=x.endsWith(".css"),E=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${E}`))return;const k=document.createElement("link");if(k.rel=L?"stylesheet":yv,L||(k.as="script"),k.crossOrigin="",k.href=x,T&&k.setAttribute("nonce",T),document.head.appendChild(k),L)return new Promise((K,q)=>{k.addEventListener("load",K),k.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${x}`)))})}))}function p(O){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=O,window.dispatchEvent(T),!T.defaultPrevented)throw O}return b.then(O=>{for(const T of O||[])T.status==="rejected"&&p(T.reason);return o().catch(p)})},Hl=Yl("Preferences",{web:()=>bh(()=>import("./web-Bzc6VPsi.js"),[]).then(r=>new r.PreferencesWeb)}),Ro="treasureTracking_auth_token",Bo="treasureTracking_auth_user",ac=Yl("GoogleAuth"),bv="365508176942-9sgcgtdjdhtdg719v0cqhqdq90ntbbe9.apps.googleusercontent.com";class Sv{providerType="google";authStateListeners=new Set;currentUser=null;accessToken=null;isNative;constructor(){this.isNative=cc.isNativePlatform(),this.restoreSession().catch(console.error)}async restoreSession(){try{if(this.isNative){const o=await ac.getCurrentUser();"id"in o&&o.id&&(this.accessToken=o.accessToken,this.currentUser={id:o.id,email:o.email,displayName:o.displayName,photoURL:o.photoURL,provider:"google"},this.notifyListeners(this.currentUser))}else{const[o,d]=await Promise.all([Hl.get({key:Ro}),Hl.get({key:Bo})]);o.value&&d.value&&(this.accessToken=o.value,this.currentUser=JSON.parse(d.value),await this.verifyToken()?this.notifyListeners(this.currentUser):await this.clearSession())}}catch(o){console.error("Failed to restore Google session:",o)}}async verifyToken(){if(!this.accessToken)return!1;try{return(await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${this.accessToken}`)).ok}catch{return!1}}async saveSession(o,d){await Promise.all([Hl.set({key:Ro,value:o}),Hl.set({key:Bo,value:JSON.stringify(d)})])}async clearSession(){this.accessToken=null,this.currentUser=null,await Promise.all([Hl.remove({key:Ro}),Hl.remove({key:Bo})]),this.notifyListeners(null)}async signIn(){return this.isNative?this.signInNative():this.signInWeb()}async signInNative(){try{const o=await ac.signIn();this.accessToken=o.accessToken;const d={id:o.id,email:o.email,displayName:o.displayName,photoURL:o.photoURL,provider:"google"};return this.currentUser=d,await this.saveSession(o.accessToken,d),this.notifyListeners(d),d}catch(o){throw console.error("Native Google Sign-In failed:",o),o}}async signInWeb(){if(console.log("signInWeb: loading Google Identity Services..."),await this.loadGoogleIdentityServices(),console.log("signInWeb: Google Identity Services loaded"),!window.google?.accounts?.oauth2)throw new Error("Google Identity Services not available");return console.log("signInWeb: initializing token client..."),new Promise((o,d)=>{const f=window.google.accounts.oauth2.initTokenClient({client_id:bv,scope:"openid email profile https://www.googleapis.com/auth/drive.appdata",callback:async b=>{console.log("signInWeb: got token response");try{this.accessToken=b.access_token,console.log("signInWeb: fetching user info...");const p=await this.fetchUserInfo(b.access_token);console.log("signInWeb: got user info",p.email);const O={id:p.sub,email:p.email,displayName:p.name,photoURL:p.picture,provider:"google"};this.currentUser=O,await this.saveSession(b.access_token,O),this.notifyListeners(O),console.log("signInWeb: complete, resolving"),o(O)}catch(p){console.error("signInWeb: error in callback",p),d(p)}},error_callback:b=>{console.error("signInWeb: error_callback",b),d(new Error(b.message||"Google Sign-In failed"))}});console.log("signInWeb: requesting access token..."),f.requestAccessToken()})}async loadGoogleIdentityServices(){if(!window.google?.accounts?.oauth2)return new Promise((o,d)=>{const f=document.createElement("script");f.src="https://accounts.google.com/gsi/client",f.async=!0,f.defer=!0,f.onload=()=>o(),f.onerror=()=>d(new Error("Failed to load Google Identity Services")),document.head.appendChild(f)})}async fetchUserInfo(o){const d=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${o}`}});if(!d.ok)throw new Error("Failed to fetch user info");return d.json()}async signOut(){this.isNative?await ac.signOut():this.accessToken&&window.google?.accounts?.oauth2&&window.google.accounts.oauth2.revoke(this.accessToken),await this.clearSession()}async getCurrentUser(){return this.currentUser?this.currentUser:(await this.restoreSession(),this.currentUser)}onAuthStateChanged(o){return this.authStateListeners.add(o),this.getCurrentUser().then(d=>{o(d)}),()=>{this.authStateListeners.delete(o)}}async isSignedIn(){return await this.getCurrentUser()?this.verifyToken():!1}getAccessToken(){return this.accessToken}async refreshAccessToken(){if(this.isNative)try{const o=await ac.getAccessToken();return this.accessToken=o.accessToken,o.accessToken}catch{return null}return this.accessToken}notifyListeners(o){this.authStateListeners.forEach(d=>{try{d(o)}catch(f){console.error("Auth state listener error:",f)}})}}let Ho=null;function Pa(){return Ho||(Ho=new Sv),Ho}function sc({src:r,alt:o,className:d,fallback:f}){const[b,p]=U.useState(null),[O,T]=U.useState(!0),[z,x]=U.useState(!1);return U.useEffect(()=>{let L=!0,E=null;async function k(){if(!r.includes("googleapis.com/drive")){L&&(p(r),T(!1));return}try{const q=Pa().getAccessToken();if(!q)throw new Error("No auth token");const W=await fetch(r,{headers:{Authorization:`Bearer ${q}`}});if(!W.ok)throw new Error(`Failed to fetch image: ${W.status}`);const te=await W.blob();E=URL.createObjectURL(te),L&&(p(E),T(!1))}catch(q){console.error("Failed to load authenticated image:",q),L&&(x(!0),T(!1))}}return k(),()=>{L=!1,E&&URL.revokeObjectURL(E)}},[r]),O?f||c.jsx("div",{className:d,style:{background:"var(--color-background)"}}):z||!b?f||null:c.jsx("img",{src:b,alt:o,className:d})}function Jo(){const[r,o]=U.useState(null),[d,f]=U.useState(!0),[b,p]=U.useState(null),O=U.useRef(null);U.useEffect(()=>{const L=Pa();return O.current=L.onAuthStateChanged(E=>{o(E),f(!1)}),()=>{O.current&&O.current()}},[]);const T=U.useCallback(async()=>{p(null);try{const E=await Pa().signIn();o(E),f(!1)}catch(L){const E=L instanceof Error?L.message:"Sign in failed";throw p(E),f(!1),L}},[]),z=U.useCallback(async()=>{p(null);try{await Pa().signOut(),o(null)}catch(L){const E=L instanceof Error?L.message:"Sign out failed";throw p(E),L}},[]),x=U.useCallback(()=>Pa().getAccessToken(),[]);return{user:r,loading:d,error:b,isAuthenticated:!!r,signIn:T,signOut:z,getAccessToken:x}}function jv(){const{signIn:r,loading:o,error:d}=Jo(),[f,b]=U.useState(!1),p=async()=>{b(!0);try{console.log("Starting sign in..."),await r(),console.log("Sign in complete")}catch(O){console.error("Sign in error:",O)}finally{b(!1)}};return o&&!f?c.jsx(nc,{fullScreen:!0}):c.jsxs("div",{className:"landing-page",children:[c.jsxs("div",{className:"landing-content",children:[c.jsx("div",{className:"landing-icon-wrapper",children:c.jsx("img",{src:"/treasure-tracking/treasure-icon.png",alt:"Treasure Tracking",className:"landing-icon"})}),c.jsx("h1",{className:"title",children:"Treasure Tracking"}),c.jsx("p",{className:"landing-tagline",children:"Track & organize your collections"}),c.jsxs("div",{className:"landing-features",children:[c.jsxs("div",{className:"feature",children:[c.jsx(Q,{name:"layers",size:24,color:"var(--color-accent)"}),c.jsx("span",{children:"9 collection types"})]}),c.jsxs("div",{className:"feature",children:[c.jsx(Q,{name:"camera",size:24,color:"var(--color-secondary)"}),c.jsx("span",{children:"Photo attachments"})]}),c.jsxs("div",{className:"feature",children:[c.jsx(Q,{name:"upload-download",size:24,color:"var(--color-primary)"}),c.jsx("span",{children:"Sync across devices"})]})]}),c.jsx("div",{className:"landing-actions",children:c.jsx(Gt,{onClick:p,disabled:f,children:f?c.jsx(nc,{size:"small"}):c.jsxs(c.Fragment,{children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),c.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]})})}),d&&c.jsx("p",{className:"landing-error",children:d}),c.jsx("p",{className:"landing-footer",children:"Your data is stored securely in your Google Drive"})]}),c.jsx("style",{children:`
        .landing-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-lg);
          background: linear-gradient(
            to bottom,
            rgb(102, 191, 166),
            var(--color-background)
          );
        }

        .landing-content {
          max-width: 400px;
          width: 100%;
          text-align: center;
        }

        .landing-icon-wrapper {
          margin-bottom: var(--spacing-lg);
        }

        .landing-icon {
          width: 120px;
          height: 120px;
          border-radius: 28px;
          box-shadow: 0 10px 40px rgba(51, 89, 115, 0.3);
          border: 3px solid var(--color-accent);
        }

        .landing-tagline {
          color: var(--color-text-secondary);
          margin-top: var(--spacing-sm);
          margin-bottom: var(--spacing-xl);
        }

        .landing-features {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .feature {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          color: var(--color-text);
        }

        .landing-actions {
          margin-bottom: var(--spacing-lg);
        }

        .landing-actions .btn {
          width: 100%;
          max-width: 280px;
        }

        .landing-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          margin-bottom: var(--spacing-md);
        }

        .landing-footer {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
        }
      `})]})}function qo({icon:r,value:o,label:d,color:f}){return c.jsxs("div",{className:"stat-bubble",children:[c.jsx(Q,{name:r,size:24,color:f}),c.jsx("span",{className:"stat-value",children:o}),c.jsx("span",{className:"stat-label",children:d}),c.jsx("style",{children:`
        .stat-bubble {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 1;
          padding: 0 var(--spacing-sm);
          border-right: 1px solid rgba(89, 60, 31, 0.15);
        }

        .stat-bubble:last-child {
          border-right: none;
        }

        [data-theme="dark"] .stat-bubble {
          border-right-color: rgba(184, 142, 74, 0.2);
        }

        .stat-value {
          font-family: var(--font-family);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .stat-label {
          font-family: var(--font-family-sans);
          font-size: 0.7rem;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `})]})}const lt=[];for(let r=0;r<256;++r)lt.push((r+256).toString(16).slice(1));function Nv(r,o=0){return(lt[r[o+0]]+lt[r[o+1]]+lt[r[o+2]]+lt[r[o+3]]+"-"+lt[r[o+4]]+lt[r[o+5]]+"-"+lt[r[o+6]]+lt[r[o+7]]+"-"+lt[r[o+8]]+lt[r[o+9]]+"-"+lt[r[o+10]]+lt[r[o+11]]+lt[r[o+12]]+lt[r[o+13]]+lt[r[o+14]]+lt[r[o+15]]).toLowerCase()}let Yo;const zv=new Uint8Array(16);function wv(){if(!Yo){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Yo=crypto.getRandomValues.bind(crypto)}return Yo(zv)}const Ev=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),hh={randomUUID:Ev};function Tv(r,o,d){r=r||{};const f=r.random??r.rng?.()??wv();if(f.length<16)throw new Error("Random bytes length must be >= 16");return f[6]=f[6]&15|64,f[8]=f[8]&63|128,Nv(f)}function oc(r,o,d){return hh.randomUUID&&!r?hh.randomUUID():Tv(r)}function ve(r,o,d){return{id:oc(),name:r,type:o,required:!1,options:d}}const Cv={currency:"#D4A84E",stamps:"#C45F52",cards:"#6B9996",dvds:"#8B7AA8",vinyl:"#8C8680",books:"#9A7350",comics:"#D4894A",toys:"#DBAF3D",other:"#8A7D70"},Av={currency:"dollar-sign",stamps:"stamp",cards:"layers",dvds:"disc",vinyl:"music",books:"book-open",comics:"book",toys:"puzzle",other:"archive"},Ov={currency:"Currency",stamps:"Stamps",cards:"Trading Cards",dvds:"DVDs/Movies",vinyl:"Vinyl Records",books:"Books",comics:"Comics",toys:"Toys/Lego",other:"Other"};function Sh(r){const o=[ve("Name","text")];switch(r){case"currency":o.push(ve("Type","picker",["Coin","Paper","Token"]),ve("Country","text"),ve("Year","text"),ve("Denomination","text"),ve("Condition","condition"));break;case"stamps":o.push(ve("Country","text"),ve("Year","text"),ve("Condition","condition"));break;case"cards":o.push(ve("Set/Series","text"),ve("Year","text"),ve("Card Number","text"),ve("Condition","condition"));break;case"dvds":o.push(ve("Format","picker",["DVD","Blu-ray","4K UHD","Digital"]),ve("Genre","text"),ve("Director","text"),ve("Year","text"));break;case"vinyl":o.push(ve("Artist","text"),ve("Format","picker",["LP","EP","Single","78 RPM"]),ve("Year","text"),ve("Condition","condition"));break;case"books":o.push(ve("Author","text"),ve("ISBN","text"),ve("Publisher","text"),ve("Year","text"));break;case"comics":o.push(ve("Publisher","text"),ve("Issue #","text"),ve("Year","text"),ve("Condition","condition"));break;case"toys":o.push(ve("Brand","picker",["Lego","Hot Wheels","Funko Pop","Action Figure","Other"]),ve("Set Number","text"),ve("Theme","text"),ve("Pieces","number"),ve("Year","text"),ve("Condition","condition"),ve("Sealed","picker",["Yes","No"]));break}return o.push(ve("Notes","longText"),ve("Purchase Price","currency"),ve("Estimated Value","currency")),o}const Xo=["currency","stamps","cards","dvds","vinyl","books","comics","toys","other"].map(r=>({type:r,displayName:Ov[r],icon:Av[r],color:Cv[r],defaultFields:Sh(r)}));function fc(r){return Xo.find(o=>o.type===r)||Xo[8]}function rc(r,o){return o||Sh(r)}function _v({collection:r,itemCount:o,onClick:d}){const f=fc(r.type);return c.jsxs(Ce,{className:"collection-tile",onClick:d,children:[c.jsx("div",{className:"tile-icon",style:{background:`linear-gradient(135deg, ${f.color}, ${f.color}B3)`},children:c.jsx(Q,{name:f.icon,size:24,color:"white"})}),c.jsx("h3",{className:"tile-name",children:r.name}),c.jsxs("span",{className:"tile-count",children:[o," items"]}),c.jsx("style",{children:`
        .collection-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-lg);
          cursor: pointer;
          text-align: center;
          position: relative;
          border-left: 4px solid ${f.color};
        }

        .tile-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-md);
          box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(89, 60, 31, 0.15);
          transition: transform var(--transition-fast);
        }

        .collection-tile:hover .tile-icon {
          transform: scale(1.08);
        }

        .tile-name {
          font-family: var(--font-family);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-xs);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .tile-count {
          font-family: var(--font-family-sans);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          font-style: italic;
        }
      `})]})}function Go({icon:r,title:o,color:d,onClick:f}){return c.jsxs("button",{className:"action-button",onClick:f,children:[c.jsx(Q,{name:r,size:24,color:d}),c.jsx("span",{className:"action-title",children:o}),c.jsx("style",{children:`
        .action-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          flex: 1;
          min-height: 80px;
          padding: var(--spacing-md);
          background: var(--color-card);
          border: 1px solid rgba(89, 60, 31, 0.15);
          border-radius: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow:
            0 2px 4px rgba(89, 60, 31, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        [data-theme="dark"] .action-button {
          border: 1px solid rgba(184, 142, 74, 0.25);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .action-button:hover {
          transform: translateY(-2px);
          border-color: var(--color-accent);
          box-shadow: 0 4px 8px rgba(89, 60, 31, 0.15);
        }

        .action-button:active {
          transform: scale(0.98);
        }

        .action-title {
          font-family: var(--font-family-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text);
          text-align: center;
          white-space: pre-line;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `})]})}class ct extends Error{code;cause;constructor(o,d,f){super(o),this.name="StorageError",this.code=d,this.cause=f}}const lc="https://www.googleapis.com/drive/v3",mh="https://www.googleapis.com/upload/drive/v3",gh="treasure-tracking-data.json";class Dv{providerType="googledrive";userId=null;initialized=!1;collections=[];items=[];dataFileId=null;changeListeners=new Set;async getAccessToken(){let o=Pa().getAccessToken();if(o||(o=await Pa().refreshAccessToken()),!o)throw new ct("Not authenticated with Google","not_authenticated");return o}async initialize(o){if(!(this.initialized&&this.userId===o))try{console.log("[GoogleDrive] Initializing for user:",o),this.userId=o,await this.getAccessToken(),await this.findOrCreateDataFile(),await this.loadData(),this.initialized=!0,console.log("[GoogleDrive] Initialization complete")}catch(d){throw console.error("[GoogleDrive] Initialization failed:",d),new ct("Failed to initialize Google Drive storage","not_initialized",d)}}ensureInitialized(){if(!this.initialized)throw new ct("Google Drive not initialized. Call initialize() first.","not_initialized")}async findOrCreateDataFile(){const o=await this.getAccessToken(),d=new URL(`${lc}/files`);d.searchParams.set("spaces","appDataFolder"),d.searchParams.set("q",`name='${gh}'`),d.searchParams.set("fields","files(id,name)");const f=await fetch(d.toString(),{headers:{Authorization:`Bearer ${o}`}});if(!f.ok)throw new Error("Failed to search for data file");const b=await f.json();if(b.files.length>0)this.dataFileId=b.files[0].id;else{const p=await fetch(`${lc}/files`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({name:gh,parents:["appDataFolder"],mimeType:"application/json"})});if(!p.ok)throw new Error("Failed to create data file");const O=await p.json();this.dataFileId=O.id,await this.saveData()}}async loadData(){if(!this.dataFileId)return;const o=await this.getAccessToken(),d=`${lc}/files/${this.dataFileId}?alt=media`,f=await fetch(d,{headers:{Authorization:`Bearer ${o}`}});if(!f.ok){if(f.status===404){this.collections=[],this.items=[];return}throw new Error("Failed to load data")}const b=await f.text();if(!b.trim()){this.collections=[],this.items=[];return}try{const p=JSON.parse(b);this.collections=p.collections||[],this.items=p.items||[]}catch{this.collections=[],this.items=[]}}async saveData(){if(!this.dataFileId)return;const o=await this.getAccessToken(),d=`${mh}/files/${this.dataFileId}?uploadType=media`,f={collections:this.collections,items:this.items,lastModified:new Date().toISOString()};if(!(await fetch(d,{method:"PATCH",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(f)})).ok)throw new Error("Failed to save data")}async getCollections(){return this.ensureInitialized(),this.collections}async createCollection(o){this.ensureInitialized();try{return this.collections=[...this.collections,o],await this.saveData(),this.notifyListeners(),o}catch(d){throw new ct("Failed to create collection","unknown",d)}}async updateCollection(o){this.ensureInitialized();try{const d=this.collections.findIndex(f=>f.id===o.id);if(d===-1)throw new ct("Collection not found","not_found");return this.collections[d]=o,await this.saveData(),this.notifyListeners(),o}catch(d){throw d instanceof ct?d:new ct("Failed to update collection","unknown",d)}}async deleteCollection(o){this.ensureInitialized();try{const d=this.items.filter(f=>f.collectionId===o);for(const f of d)for(const b of f.photos)b.driveFileId&&await this.deletePhoto(b.driveFileId).catch(()=>{});this.collections=this.collections.filter(f=>f.id!==o),this.items=this.items.filter(f=>f.collectionId!==o),await this.saveData(),this.notifyListeners()}catch(d){throw new ct("Failed to delete collection","unknown",d)}}async getItems(){return this.ensureInitialized(),this.items}async getItemsForCollection(o){return this.ensureInitialized(),this.items.filter(d=>d.collectionId===o)}async createItem(o){this.ensureInitialized();try{return this.items=[...this.items,o],await this.saveData(),this.notifyListeners(),o}catch(d){throw new ct("Failed to create item","unknown",d)}}async updateItem(o){this.ensureInitialized();try{const d=this.items.findIndex(f=>f.id===o.id);if(d===-1)throw new ct("Item not found","not_found");return this.items[d]=o,await this.saveData(),this.notifyListeners(),o}catch(d){throw d instanceof ct?d:new ct("Failed to update item","unknown",d)}}async deleteItem(o){this.ensureInitialized();try{const d=this.items.find(f=>f.id===o);if(d)for(const f of d.photos)f.driveFileId&&await this.deletePhoto(f.driveFileId).catch(()=>{});this.items=this.items.filter(f=>f.id!==o),await this.saveData(),this.notifyListeners()}catch(d){throw new ct("Failed to delete item","unknown",d)}}async uploadPhoto(o){this.ensureInitialized();try{const d=await this.getAccessToken(),f=oc(),p={name:`${f}_${o.name}`,parents:["appDataFolder"]},O="-------314159265358979323846",T=`\r
--`+O+`\r
`,z=`\r
--`+O+"--",x=T+`Content-Type: application/json; charset=UTF-8\r
\r
`+JSON.stringify(p),L=await o.arrayBuffer(),E=new Uint8Array(L),k=new TextEncoder,K=k.encode(x),q=k.encode(T+`Content-Type: ${o.type}\r
\r
`),W=k.encode(z),te=new Uint8Array(K.length+q.length+E.length+W.length);let ie=0;te.set(K,ie),ie+=K.length,te.set(q,ie),ie+=q.length,te.set(E,ie),ie+=E.length,te.set(W,ie);const be=await fetch(`${mh}/files?uploadType=multipart`,{method:"POST",headers:{Authorization:`Bearer ${d}`,"Content-Type":`multipart/related; boundary="${O}"`},body:te});if(!be.ok)throw new Error("Failed to upload photo");const I=await be.json();return{id:f,fileName:o.name,url:`https://www.googleapis.com/drive/v3/files/${I.id}?alt=media`,driveFileId:I.id}}catch(d){throw new ct("Failed to upload photo","unknown",d)}}async deletePhoto(o){this.ensureInitialized();try{const d=await this.getAccessToken(),f=await fetch(`${lc}/files/${o}`,{method:"DELETE",headers:{Authorization:`Bearer ${d}`}});if(!f.ok&&f.status!==404)throw new Error("Failed to delete photo")}catch(d){throw new ct("Failed to delete photo","unknown",d)}}subscribeToChanges(o){return this.changeListeners.add(o),o({collections:[...this.collections],items:[...this.items],lastModified:new Date().toISOString()}),()=>{this.changeListeners.delete(o)}}async forceSync(){return await this.loadData(),this.notifyListeners(),{success:!0,uploaded:0,downloaded:this.collections.length+this.items.length,errors:[]}}async getAllData(){return this.ensureInitialized(),{collections:this.collections,items:this.items,lastModified:new Date().toISOString()}}notifyListeners(){const o={collections:[...this.collections],items:[...this.items],lastModified:new Date().toISOString()};this.changeListeners.forEach(d=>{try{d(o)}catch(f){console.error("Change listener error:",f)}})}}let Vo=null;function Ut(){return Vo||(Vo=new Dv),Vo}const jh=U.createContext(null);function Mv({children:r}){const[o,d]=U.useState([]),[f,b]=U.useState([]),[p,O]=U.useState(!0),[T,z]=U.useState(null),x=U.useRef(null),L=U.useRef(!1),E=U.useCallback(async V=>{if(L.current){O(!1);return}try{O(!0),z(null);const J=Ut();await J.initialize(V),x.current=J.subscribeToChanges(H=>{console.log("[CollectionsContext] Got data update:",H.collections.length,"collections"),d(H.collections),b(H.items),O(!1)}),L.current=!0,O(!1)}catch(J){const H=J instanceof Error?J.message:"Failed to initialize";console.error("[CollectionsContext] Initialize error:",H),z(H),O(!1)}},[]);U.useEffect(()=>()=>{x.current&&x.current()},[]);const k=f.length,K=f.reduce((V,J)=>{const H=Bn(J);return V+(H||0)},0),q=U.useCallback(V=>f.filter(J=>J.collectionId===V).length,[f]),W=U.useCallback(V=>f.filter(J=>J.collectionId===V).reduce((J,H)=>{const m=Bn(H);return J+(m||0)},0),[f]),te=U.useCallback(async(V,J,H,m)=>{const A=Ut(),B={id:oc(),name:V,type:J,customFields:H,notes:m||"",createdAt:new Date().toISOString()};return await A.createCollection(B),B},[]),ie=U.useCallback(async V=>{await Ut().updateCollection(V)},[]),be=U.useCallback(async V=>{await Ut().deleteCollection(V)},[]),I=U.useCallback(V=>o.find(J=>J.id===V),[o]),he=U.useCallback(async(V,J,H)=>{const m=Ut(),A=[];if(H)for(const ee of H){const ce=await m.uploadPhoto(ee);A.push(ce)}const B={id:oc(),collectionId:V,fieldValues:J,photos:A,addedAt:new Date().toISOString()};return await m.createItem(B),B},[]),Se=U.useCallback(async(V,J)=>{const H=Ut();let m={...V};if(J&&J.length>0){const A=[];for(const B of J){const ee=await H.uploadPhoto(B);A.push(ee)}m={...m,photos:[...V.photos,...A]}}await H.updateItem(m)},[]),P=U.useCallback(async V=>{await Ut().deleteItem(V)},[]),G=U.useCallback(V=>f.find(J=>J.id===V),[f]),X=U.useCallback(V=>f.filter(J=>J.collectionId===V),[f]),le=U.useCallback(async(V,J)=>{const H=f.find(ee=>ee.id===V);if(!H)return;const m=Ut(),A=[];for(const ee of J){const ce=await m.uploadPhoto(ee);A.push(ce)}const B={...H,photos:[...H.photos,...A]};await m.updateItem(B)},[f]),re=U.useCallback(async(V,J)=>{const H=f.find(ee=>ee.id===V);if(!H)return;const m=Ut(),A=H.photos.find(ee=>ee.id===J);A?.driveFileId&&await m.deletePhoto(A.driveFileId).catch(()=>{});const B={...H,photos:H.photos.filter(ee=>ee.id!==J)};await m.updateItem(B)},[f]),pe=U.useCallback(async()=>{await Ut().forceSync()},[]),ge={collections:o,items:f,loading:p,error:T,totalItems:k,totalEstimatedValue:K,itemCount:q,collectionValue:W,createCollection:te,updateCollection:ie,deleteCollection:be,getCollection:I,createItem:he,updateItem:Se,deleteItem:P,getItem:G,getItemsForCollection:X,addPhotosToItem:le,removePhotoFromItem:re,refresh:pe,initialize:E};return c.jsx(jh.Provider,{value:ge,children:r})}function Vt(){const r=U.useContext(jh);if(!r)throw new Error("useCollections must be used within a CollectionsProvider");return r}function Uv({onClose:r,onSuccess:o}){const{createCollection:d}=Vt(),[f,b]=U.useState(""),[p,O]=U.useState("other"),[T,z]=U.useState(""),[x,L]=U.useState(!1),[E,k]=U.useState(null),K=async q=>{if(q.preventDefault(),!f.trim()){k("Please enter a collection name");return}L(!0),k(null);try{await d(f.trim(),p,void 0,T),o()}catch(W){k(W instanceof Error?W.message:"Failed to create collection")}finally{L(!1)}};return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"form-header",children:[c.jsx("button",{className:"back-btn",onClick:r,children:c.jsx(Q,{name:"chevron-left",size:32})}),c.jsx("h1",{className:"heading",children:"New Collection"}),c.jsx("div",{style:{width:40}})]}),c.jsxs("form",{onSubmit:K,children:[c.jsxs(Ce,{className:"form-section",children:[c.jsx("label",{className:"form-label",children:"Collection Name"}),c.jsx("input",{type:"text",className:"input",placeholder:"My Collection",value:f,onChange:q=>b(q.target.value),autoFocus:!0})]}),c.jsxs(Ce,{className:"form-section",children:[c.jsx("label",{className:"form-label",children:"Collection Type"}),c.jsx("div",{className:"type-grid",children:Xo.map(q=>c.jsxs("button",{type:"button",className:`type-option ${p===q.type?"selected":""}`,onClick:()=>O(q.type),children:[c.jsx("div",{className:"type-icon",style:{backgroundColor:p===q.type?q.color:"transparent",borderColor:q.color},children:c.jsx(Q,{name:q.icon,size:20,color:p===q.type?"white":q.color})}),c.jsx("span",{className:"type-name",children:q.displayName})]},q.type))})]}),c.jsxs(Ce,{className:"form-section",children:[c.jsx("label",{className:"form-label",children:"Notes (Optional)"}),c.jsx("textarea",{className:"input textarea",placeholder:"Add any notes about this collection...",value:T,onChange:q=>z(q.target.value),rows:3})]}),E&&c.jsx("p",{className:"form-error",children:E}),c.jsx(Gt,{type:"submit",disabled:x,children:x?"Creating...":"Create Collection"})]})]}),c.jsx("style",{children:`
        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-text);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .form-label {
          display: block;
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .type-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-sm);
        }

        .type-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-xs);
          padding: var(--spacing-sm);
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-md);
          transition: background var(--transition-fast);
        }

        .type-option:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .type-option.selected {
          background: rgba(51, 166, 140, 0.1);
        }

        .type-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          transition: all var(--transition-fast);
        }

        .type-name {
          font-size: var(--font-xs);
          color: var(--color-text);
        }

        .textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        form .btn {
          width: 100%;
        }
      `})]})}const kv=["a","an","the","and","but","or","for","nor","on","at","to","by","of","in"];function Lv(r){return r.split(" ").map((o,d)=>{if(o.length===0)return o;const f=o.toLowerCase();return d===0||!kv.includes(f)?o.charAt(0).toUpperCase()+o.slice(1).toLowerCase():f}).join(" ")}function vh({item:r,fields:o,onClick:d}){const f=Lv(ra(r)),b=Bn(r),p=ic(r),O=r.photos.length>0,T=o.filter(z=>z.name!=="Name"&&z.name!=="Notes"&&z.type!=="longText").slice(0,2).map(z=>({name:z.name,value:r.fieldValues[z.name]||""})).filter(z=>z.value);return c.jsxs(Ce,{className:"item-card",onClick:d,children:[c.jsx("div",{className:"item-thumb",children:O?c.jsx(sc,{src:r.photos[0].url,alt:f,className:"item-thumb-img",fallback:c.jsx(Q,{name:"image",size:24,color:"var(--color-text-secondary)"})}):c.jsx(Q,{name:"image",size:24,color:"var(--color-text-secondary)"})}),c.jsxs("div",{className:"item-content",children:[c.jsx("h3",{className:"item-name",children:f}),T.length>0&&c.jsx("p",{className:"item-preview",children:T.map(z=>z.value).join(" • ")}),c.jsxs("div",{className:"item-meta",children:[p&&c.jsx(xh,{condition:p}),b!==void 0&&c.jsxs("span",{className:"item-value",children:["$",b.toFixed(2)]})]})]}),c.jsx(Q,{name:"chevron-right",size:20,color:"var(--color-text-secondary)"}),c.jsx("style",{children:`
        .item-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          cursor: pointer;
        }

        .item-thumb {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          background: var(--color-background);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .item-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-content {
          flex: 1;
          min-width: 0;
        }

        .item-name {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-preview {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 2px;
        }

        .item-meta {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-xs);
        }

        .item-value {
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-success);
        }
      `})]})}function Rv({field:r,value:o,onChange:d,onBlur:f}){const b=`field-${r.id}`;switch(r.type){case"text":return c.jsxs("div",{className:"field-editor",children:[c.jsxs("label",{htmlFor:b,className:"form-label",children:[r.name,r.required&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{id:b,type:"text",className:"input",value:o,onChange:p=>d(p.target.value),onBlur:f,placeholder:`Enter ${r.name.toLowerCase()}`})]});case"longText":return c.jsxs("div",{className:"field-editor",children:[c.jsxs("label",{htmlFor:b,className:"form-label",children:[r.name,r.required&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("textarea",{id:b,className:"input textarea",value:o,onChange:p=>d(p.target.value),placeholder:`Enter ${r.name.toLowerCase()}`,rows:3})]});case"number":return c.jsxs("div",{className:"field-editor",children:[c.jsxs("label",{htmlFor:b,className:"form-label",children:[r.name,r.required&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{id:b,type:"number",className:"input",value:o,onChange:p=>d(p.target.value),placeholder:"0"})]});case"currency":return c.jsxs("div",{className:"field-editor",children:[c.jsxs("label",{htmlFor:b,className:"form-label",children:[r.name,r.required&&c.jsx("span",{className:"required",children:"*"})]}),c.jsxs("div",{className:"currency-input",children:[c.jsx("span",{className:"currency-symbol",children:"$"}),c.jsx("input",{id:b,type:"number",step:"0.01",min:"0",className:"input",value:o,onChange:p=>d(p.target.value),placeholder:"0.00"})]})]});case"date":return c.jsxs("div",{className:"field-editor",children:[c.jsxs("label",{htmlFor:b,className:"form-label",children:[r.name,r.required&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{id:b,type:"date",className:"input",value:o,onChange:p=>d(p.target.value)})]});case"condition":return c.jsxs("div",{className:"field-editor",children:[c.jsxs("label",{className:"form-label",children:[r.name,r.required&&c.jsx("span",{className:"required",children:"*"})]}),c.jsx("div",{className:"condition-grid",children:yh.map(p=>c.jsxs("button",{type:"button",className:`condition-option ${o===p.value?"selected":""}`,onClick:()=>d(p.value),style:{borderColor:o===p.value?p.color:"transparent",backgroundColor:o===p.value?`${p.color}20`:"transparent"},children:[c.jsx("span",{className:"condition-dot",style:{backgroundColor:p.color}}),c.jsx("span",{className:"condition-label",children:p.shortName})]},p.value))})]});case"picker":return c.jsxs("div",{className:"field-editor",children:[c.jsxs("label",{htmlFor:b,className:"form-label",children:[r.name,r.required&&c.jsx("span",{className:"required",children:"*"})]}),c.jsxs("select",{id:b,className:"input select",value:o,onChange:p=>d(p.target.value),children:[c.jsxs("option",{value:"",children:["Select ",r.name.toLowerCase()]}),r.options?.map(p=>c.jsx("option",{value:p,children:p},p))]})]});default:return null}}const Bv=`
  .field-editor {
    margin-bottom: 0;
  }

  .form-label {
    display: block;
    font-size: var(--font-sm);
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-sm);
  }

  .required {
    color: var(--color-error);
    margin-left: 2px;
  }

  .textarea {
    resize: vertical;
    min-height: 80px;
  }

  .currency-input {
    position: relative;
  }

  .currency-symbol {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-secondary);
  }

  .currency-input .input {
    padding-left: 32px;
  }

  .select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
  }

  .condition-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .condition-option {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .condition-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .condition-label {
    font-size: var(--font-sm);
    font-weight: 600;
    color: var(--color-text);
  }
`;if(typeof document<"u"){const r=document.createElement("style");r.textContent=Bv,document.head.appendChild(r)}const Hv="d3d28539474495cbde497609b69bad79",qv="https://api.themoviedb.org/3",Yv="https://image.tmdb.org/t/p";function uc(r,o="w342"){return r?`${Yv}/${o}${r}`:null}async function Fo(r){if(!r.trim())return[];try{const o=await fetch(`${qv}/search/movie?api_key=${Hv}&query=${encodeURIComponent(r)}&include_adult=false`);if(!o.ok)throw new Error(`TMDB API error: ${o.status}`);return(await o.json()).results||[]}catch(o){return console.error("Failed to search movies:",o),[]}}function $o(){return!0}function Nh({onSelect:r,onClose:o}){const[d,f]=U.useState(""),[b,p]=U.useState([]),[O,T]=U.useState(!1),[z,x]=U.useState(!1),L=U.useCallback(async()=>{if(!d.trim())return;T(!0),x(!0);const k=await Fo(d);p(k),T(!1)},[d]);U.useEffect(()=>{if(!d.trim()){p([]),x(!1);return}const k=setTimeout(L,500);return()=>clearTimeout(k)},[d,L]);const E=k=>{const K=uc(k.poster_path,"w500");r(k,K)};return c.jsxs("div",{className:"movie-search-overlay",children:[c.jsxs("div",{className:"movie-search-modal",children:[c.jsxs("header",{className:"modal-header",children:[c.jsx("h2",{children:"Search Movies"}),c.jsx("button",{className:"close-btn",onClick:o,children:c.jsx(Q,{name:"x",size:24})})]}),c.jsxs("div",{className:"search-input-container",children:[c.jsx(Q,{name:"search",size:20}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search for a movie...",value:d,onChange:k=>f(k.target.value),autoFocus:!0})]}),c.jsxs("div",{className:"results-container",children:[O&&c.jsxs("div",{className:"loading",children:[c.jsx("div",{className:"spinner"}),c.jsx("span",{children:"Searching..."})]}),!O&&z&&b.length===0&&c.jsxs("div",{className:"no-results",children:[c.jsx(Q,{name:"disc",size:48,color:"var(--color-text-secondary)"}),c.jsxs("p",{children:['No movies found for "',d,'"']})]}),!O&&b.length>0&&c.jsx("div",{className:"results-grid",children:b.map(k=>c.jsxs(Ce,{className:"movie-card",onClick:()=>E(k),children:[c.jsx("div",{className:"movie-poster",children:k.poster_path?c.jsx("img",{src:uc(k.poster_path,"w185")||"",alt:k.title}):c.jsx("div",{className:"no-poster",children:c.jsx(Q,{name:"disc",size:32})})}),c.jsxs("div",{className:"movie-info",children:[c.jsx("h3",{className:"movie-title",children:k.title}),c.jsx("span",{className:"movie-year",children:k.release_date?.split("-")[0]||"Unknown"})]})]},k.id))}),!O&&!z&&c.jsxs("div",{className:"search-hint",children:[c.jsx(Q,{name:"disc",size:48,color:"var(--color-accent)"}),c.jsx("p",{children:"Type a movie title to search"})]})]})]}),c.jsx("style",{children:Gv})]})}const Gv=`
  .movie-search-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 300;
    padding: var(--spacing-md);
  }

  .movie-search-modal {
    background: var(--color-card);
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    width: 100%;
    max-width: 500px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @media (min-width: 640px) {
    .movie-search-overlay {
      align-items: center;
    }
    .movie-search-modal {
      border-radius: var(--radius-xl);
      max-height: 70vh;
    }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--card-border);
  }

  .modal-header h2 {
    font-size: var(--font-lg);
    font-weight: 700;
  }

  .close-btn {
    background: transparent;
    border: none;
    padding: var(--spacing-xs);
    cursor: pointer;
    color: var(--color-text);
  }

  .search-input-container {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    border-bottom: 1px solid var(--card-border);
    color: var(--color-text-secondary);
  }

  .search-input-container .search-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: var(--font-md);
    color: var(--color-text);
    outline: none;
  }

  .results-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-md);
  }

  .loading, .no-results, .search-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    padding: var(--spacing-xxl);
    color: var(--color-text-secondary);
    text-align: center;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  @media (min-width: 400px) {
    .results-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .movie-card {
    cursor: pointer;
    padding: 0 !important;
    overflow: hidden;
  }

  .movie-poster {
    aspect-ratio: 2/3;
    background: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .movie-poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .no-poster {
    color: var(--color-text-secondary);
  }

  .movie-info {
    padding: var(--spacing-sm);
  }

  .movie-title {
    font-size: var(--font-sm);
    font-weight: 600;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .movie-year {
    font-size: var(--font-xs);
    color: var(--color-text-secondary);
  }

  .config-warning {
    padding: var(--spacing-xl);
    text-align: center;
  }

  .config-warning h3 {
    margin: var(--spacing-md) 0;
    color: var(--color-text);
  }

  .config-warning p {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
  }

  .config-warning ol {
    text-align: left;
    padding-left: var(--spacing-xl);
    color: var(--color-text-secondary);
    line-height: 1.8;
  }

  .config-warning code {
    background: var(--color-background);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: var(--font-sm);
  }
`;function zh({collection:r,fields:o,existingItem:d,onClose:f,onSuccess:b}){const{createItem:p,updateItem:O}=Vt(),T=!!d,[z,x]=U.useState(d?.fieldValues||{}),[L,E]=U.useState([]),[k,K]=U.useState(!1),[q,W]=U.useState(null),[te,ie]=U.useState(!1),[be,I]=U.useState(!1),[he,Se]=U.useState(!1),P=r.type==="dvds",G=$o(),X=async(m,A)=>{if(x(B=>({...B,Name:m.title,Year:m.release_date?.split("-")[0]||""})),A)try{const ee=await(await fetch(A)).blob(),ce=new File([ee],`${m.title.replace(/[^a-z0-9]/gi,"_")}_poster.jpg`,{type:"image/jpeg"});E([ce])}catch(B){console.error("Failed to fetch poster:",B)}ie(!1)},le=U.useCallback(async m=>{if(!(!P||!G||!m.trim())){I(!0);try{const A=await Fo(m);if(A.length>0){const B=A[0],ee=uc(B.poster_path,"w500");if(B.release_date&&x(ce=>ce.Year?ce:{...ce,Year:B.release_date.split("-")[0]}),ee){const v=await(await fetch(ee)).blob(),D=new File([v],`${B.title.replace(/[^a-z0-9]/gi,"_")}_poster.jpg`,{type:"image/jpeg"});E(R=>R.length===0?[D]:R),Se(!0)}}}catch(A){console.error("Auto-fetch poster failed:",A)}finally{I(!1)}}},[P,G]),re=(m,A)=>{x(B=>({...B,[m]:A}))},pe=m=>{he&&Se(!1),x(A=>({...A,Name:m}))},ge=()=>{P&&z.Name&&!he&&L.length===0&&le(z.Name)},V=m=>{const A=m.target.files;A&&E(B=>[...B,...Array.from(A)])},J=m=>{E(A=>A.filter((B,ee)=>ee!==m))},H=async m=>{m.preventDefault(),K(!0),W(null);try{T?await O({...d,fieldValues:z},L.length>0?L:void 0):await p(r.id,z,L),b()}catch(A){W(A instanceof Error?A.message:"Failed to save item")}finally{K(!1)}};return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"form-header",children:[c.jsx("button",{className:"back-btn",onClick:f,children:c.jsx(Q,{name:"x",size:28})}),c.jsx("h1",{className:"heading",children:T?"Edit Item":"Add Item"}),c.jsx("div",{style:{width:40}})]}),P&&!T&&c.jsxs(Ce,{className:"movie-search-card",onClick:()=>ie(!0),children:[c.jsxs("div",{className:"movie-search-content",children:[c.jsx(Q,{name:"search",size:24,color:"var(--color-dvds)"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Search Movie Database"}),c.jsx("p",{children:"Find movie covers and auto-fill details"})]})]}),c.jsx(Q,{name:"chevron-right",size:20,color:"var(--color-text-secondary)"})]}),te&&c.jsx(Nh,{onSelect:X,onClose:()=>ie(!1)}),c.jsxs("form",{onSubmit:H,children:[o.map(m=>c.jsxs(Ce,{className:"form-section",children:[c.jsx(Rv,{field:m,value:z[m.name]||"",onChange:m.name==="Name"&&P?pe:A=>re(m.name,A),onBlur:m.name==="Name"&&P?ge:void 0}),m.name==="Name"&&P&&be&&c.jsxs("div",{className:"poster-fetching",children:[c.jsx("div",{className:"spinner small"}),c.jsx("span",{children:"Finding movie poster..."})]})]},m.id)),c.jsxs(Ce,{className:"form-section",children:[c.jsx("label",{className:"form-label",children:"Photos"}),T&&d.photos.length>0&&c.jsx("div",{className:"photo-grid",children:d.photos.map(m=>c.jsx("div",{className:"photo-thumb",children:c.jsx(sc,{src:m.url,alt:""})},m.id))}),L.length>0&&c.jsx("div",{className:"photo-grid",children:L.map((m,A)=>c.jsxs("div",{className:"photo-thumb",children:[c.jsx("img",{src:URL.createObjectURL(m),alt:""}),c.jsx("button",{type:"button",className:"photo-remove",onClick:()=>J(A),children:c.jsx(Q,{name:"x",size:16})})]},A))}),c.jsxs("label",{className:"add-photo-btn",children:[c.jsx(Q,{name:"camera",size:20}),"Add Photos",c.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:V,style:{display:"none"}})]})]}),q&&c.jsx("p",{className:"form-error",children:q}),c.jsx(Gt,{type:"submit",disabled:k,children:k?"Saving...":T?"Save Changes":"Add Item"})]})]}),c.jsx("style",{children:`
        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-text);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .form-label {
          display: block;
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .photo-thumb {
          aspect-ratio: 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
        }

        .photo-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-remove {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .add-photo-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md);
          border: 2px dashed var(--color-text-secondary);
          border-radius: var(--radius-md);
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .add-photo-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .form-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        form .btn {
          width: 100%;
          margin-bottom: var(--spacing-lg);
        }

        .movie-search-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          cursor: pointer;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05));
          border: 2px solid rgba(139, 92, 246, 0.3);
        }

        .movie-search-card:hover {
          border-color: rgba(139, 92, 246, 0.5);
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.08));
        }

        .movie-search-content {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .movie-search-content h3 {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .movie-search-content p {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .poster-fetching {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-sm);
          padding: var(--spacing-sm);
          background: rgba(92, 77, 115, 0.1);
          border-radius: 6px;
          font-size: var(--font-sm);
          color: var(--color-dvds);
        }

        .spinner.small {
          width: 16px;
          height: 16px;
          border-width: 2px;
          border-color: rgba(92, 77, 115, 0.2);
          border-top-color: var(--color-dvds);
        }
      `})]})}const wh=Yl("Share",{web:()=>bh(()=>import("./web-CCQHQeyz.js"),[]).then(r=>new r.ShareWeb)});function Vv({item:r,collection:o,fields:d,onBack:f}){const{getItem:b,deleteItem:p,removePhotoFromItem:O,addPhotosToItem:T}=Vt(),z=b(r.id)||r,[x,L]=U.useState(!1),[E,k]=U.useState(!1),[K,q]=U.useState(0),[W,te]=U.useState(!1),[ie,be]=U.useState(!1),[I,he]=U.useState(!1),Se=U.useRef(null),P=ra(z),G=ic(z),X=o.type==="dvds",le=$o(),re=async()=>{confirm(`Delete "${P}"?`)&&(await p(z.id),f())},pe=async()=>{let H=`Item: ${P}
`;H+=`Collection: ${o.name}

`;for(const m of d){const A=z.fieldValues[m.name];A&&m.name!=="Name"&&(m.type==="currency"?H+=`${m.name}: $${parseFloat(A).toFixed(2)}
`:H+=`${m.name}: ${A}
`)}H+=`
- Shared from Treasure Tracking`;try{await wh.share({title:P,text:H})}catch{}},ge=async H=>{confirm("Delete this photo?")&&(await O(z.id,H),z.photos.length<=1&&te(!1))},V=async H=>{const m=H.target.files;if(!(!m||m.length===0)){he(!0);try{await T(z.id,Array.from(m))}catch(A){console.error("Failed to add photo:",A)}finally{he(!1),Se.current&&(Se.current.value="")}}},J=async(H,m)=>{if(!m){be(!1);return}be(!1),he(!0);try{const B=await(await fetch(m)).blob(),ee=new File([B],`${H.title.replace(/[^a-z0-9]/gi,"_")}_poster.jpg`,{type:"image/jpeg"});await T(z.id,[ee])}catch(A){console.error("Failed to fetch poster:",A)}finally{he(!1)}};return x?c.jsx(zh,{collection:o,fields:d,existingItem:z,onClose:()=>L(!1),onSuccess:()=>L(!1)}):W&&z.photos.length>0?c.jsxs("div",{className:"fullscreen-photo",children:[c.jsxs("header",{className:"photo-header",children:[c.jsx("button",{className:"photo-close",onClick:()=>te(!1),children:c.jsx(Q,{name:"x",size:24,color:"white"})}),c.jsxs("span",{className:"photo-counter",children:[K+1," / ",z.photos.length]}),c.jsx("button",{className:"photo-delete",onClick:()=>ge(z.photos[K].id),children:c.jsx(Q,{name:"trash",size:24,color:"white"})})]}),c.jsx(sc,{src:z.photos[K].url,alt:"",className:"fullscreen-img"}),z.photos.length>1&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"photo-nav prev",onClick:()=>q(H=>H>0?H-1:z.photos.length-1),children:c.jsx(Q,{name:"chevron-left",size:32,color:"white"})}),c.jsx("button",{className:"photo-nav next",onClick:()=>q(H=>H<z.photos.length-1?H+1:0),children:c.jsx(Q,{name:"chevron-right",size:32,color:"white"})})]}),c.jsx("style",{children:`
          .fullscreen-photo {
            position: fixed;
            inset: 0;
            background: black;
            z-index: 300;
            display: flex;
            flex-direction: column;
          }

          .photo-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--spacing-md);
            padding-top: calc(var(--spacing-md) + env(safe-area-inset-top, 0px));
          }

          .photo-close, .photo-delete {
            background: transparent;
            border: none;
            padding: var(--spacing-sm);
            cursor: pointer;
          }

          .photo-counter {
            color: white;
            font-size: var(--font-sm);
          }

          .fullscreen-img {
            flex: 1;
            object-fit: contain;
            max-width: 90vw;
            max-height: 70vh;
            margin: auto;
          }

          .photo-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            border: none;
            padding: var(--spacing-md);
            cursor: pointer;
          }

          .photo-nav.prev { left: var(--spacing-sm); }
          .photo-nav.next { right: var(--spacing-sm); }
        `})]}):c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"detail-header",children:[c.jsx("button",{className:"back-btn",onClick:f,children:c.jsx(Q,{name:"chevron-left",size:32})}),c.jsx("h1",{className:"heading",style:{flex:1,textAlign:"center"},children:P}),c.jsxs("div",{className:"header-actions",children:[c.jsx("button",{className:"header-btn",onClick:()=>k(!E),children:c.jsx(Q,{name:"more-vertical",size:24})}),E&&c.jsxs("div",{className:"dropdown-menu",children:[c.jsxs("button",{onClick:pe,className:"menu-item",children:[c.jsx(Q,{name:"share",size:20}),"Share"]}),c.jsxs("button",{onClick:()=>{k(!1),L(!0)},className:"menu-item",children:[c.jsx(Q,{name:"edit",size:20}),"Edit"]}),c.jsx("hr",{className:"menu-divider"}),c.jsxs("button",{onClick:re,className:"menu-item danger",children:[c.jsx(Q,{name:"trash",size:20}),"Delete"]})]})]})]}),ie&&c.jsx(Nh,{onSelect:J,onClose:()=>be(!1)}),z.photos.length>0&&c.jsxs("div",{className:"photo-carousel",children:[c.jsx("div",{className:"photo-track",children:z.photos.map((H,m)=>c.jsx("div",{className:"carousel-photo-wrapper",onClick:()=>{q(m),te(!0)},children:c.jsx(sc,{src:H.url,alt:"",className:"carousel-photo"})},H.id))}),c.jsx("p",{className:"photo-hint caption",children:"Tap photo to view full screen • Tap trash to delete"})]}),c.jsxs("div",{className:"photo-actions",children:[X&&le&&c.jsxs("button",{className:"photo-action-btn",onClick:()=>be(!0),disabled:I,children:[c.jsx(Q,{name:"search",size:20}),"Search Movie Poster"]}),c.jsxs("label",{className:"photo-action-btn",children:[c.jsx(Q,{name:"camera",size:20}),I?"Uploading...":"Add Photo",c.jsx("input",{ref:Se,type:"file",accept:"image/*",onChange:V,disabled:I,style:{display:"none"}})]})]}),c.jsxs(Ce,{className:"item-fields",children:[d.map(H=>{const m=z.fieldValues[H.name];return m?c.jsxs("div",{className:"field-row",children:[c.jsx("span",{className:"field-label",children:H.name}),H.type==="condition"&&G?c.jsx(xh,{condition:G}):H.type==="currency"?c.jsxs("span",{className:"field-value",children:["$",parseFloat(m).toFixed(2)]}):c.jsx("span",{className:"field-value",children:m})]},H.id):null}),c.jsx("hr",{className:"divider"}),c.jsxs("p",{className:"caption",children:["Added ",new Date(z.addedAt).toLocaleDateString()]})]})]}),c.jsx("style",{children:`
        .detail-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
          position: relative;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-text);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .header-actions {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--color-card);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 160px;
          z-index: 100;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          width: 100%;
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          font-size: var(--font-md);
        }

        .menu-item.danger {
          color: var(--color-error);
        }

        .menu-divider {
          margin: 0;
          border: none;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .photo-carousel {
          margin-bottom: var(--spacing-lg);
        }

        .photo-track {
          display: flex;
          gap: var(--spacing-sm);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: var(--spacing-sm);
        }

        .carousel-photo-wrapper {
          flex: 0 0 auto;
          width: 100%;
          max-width: 300px;
          height: 200px;
          border-radius: var(--radius-lg);
          scroll-snap-align: center;
          cursor: pointer;
          overflow: hidden;
          background: var(--color-background);
        }

        .carousel-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-hint {
          text-align: center;
          margin-top: var(--spacing-xs);
        }

        .photo-actions {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
        }

        .photo-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md);
          background: var(--color-card);
          border: 2px dashed var(--color-text-secondary);
          border-radius: var(--radius-md);
          color: var(--color-text-secondary);
          font-size: var(--font-sm);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .photo-action-btn:hover:not(:disabled) {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .photo-action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .item-fields {
          padding: var(--spacing-lg);
        }

        .field-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: var(--spacing-md);
        }

        .field-label {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
        }

        .field-value {
          font-size: var(--font-md);
          color: var(--color-text);
        }

        .divider {
          margin: var(--spacing-md) 0;
          border: none;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
      `})]})}function Qv({collection:r,onClose:o,onSuccess:d}){const{updateCollection:f}=Vt(),b=fc(r.type),p=rc(r.type),O=r.customFields||p,[T,z]=U.useState(r.name),[x,L]=U.useState(r.notes||""),[E,k]=U.useState(new Set(O.map(I=>I.id))),[K,q]=U.useState(!1),[W,te]=U.useState(null),ie=I=>{if(I.required)return;const he=new Set(E);he.has(I.id)?he.delete(I.id):he.add(I.id),k(he)},be=async()=>{if(!T.trim()){te("Please enter a collection name");return}q(!0),te(null);try{const I=p.filter(Se=>E.has(Se.id)),he={...r,name:T.trim(),notes:x,customFields:I};await f(he),d()}catch(I){te(I instanceof Error?I.message:"Failed to save changes")}finally{q(!1)}};return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"form-header",children:[c.jsx("button",{className:"cancel-btn",onClick:o,children:"Cancel"}),c.jsx("h1",{className:"heading",children:"Edit Collection"}),c.jsx("button",{className:"save-btn",onClick:be,disabled:K,children:K?"Saving...":"Save"})]}),c.jsxs(Ce,{className:"form-section",children:[c.jsxs("div",{className:"collection-type-badge",children:[c.jsx("div",{className:"type-icon",style:{backgroundColor:b.color},children:c.jsx(Q,{name:b.icon,size:20,color:"white"})}),c.jsx("span",{children:b.displayName})]}),c.jsx("label",{className:"form-label",children:"Collection Name"}),c.jsx("input",{type:"text",className:"input",value:T,onChange:I=>z(I.target.value)}),c.jsx("label",{className:"form-label",style:{marginTop:"var(--spacing-md)"},children:"Notes (Optional)"}),c.jsx("textarea",{className:"input textarea",value:x,onChange:I=>L(I.target.value),rows:2})]}),c.jsxs(Ce,{className:"form-section",children:[c.jsx("h3",{className:"section-title",children:"Customize Fields"}),c.jsx("p",{className:"section-desc",children:"Choose which fields to include in this collection"}),c.jsx("div",{className:"fields-list",children:p.map(I=>{const he=E.has(I.id),Se=I.required;return c.jsxs("button",{className:`field-option ${he?"selected":""} ${Se?"required":""}`,onClick:()=>ie(I),disabled:Se,children:[c.jsx("div",{className:"field-checkbox",children:he?c.jsx(Q,{name:"check-circle",size:22,color:"var(--color-accent)"}):c.jsx(Q,{name:"circle",size:22,color:"var(--color-text-secondary)"})}),c.jsxs("div",{className:"field-info",children:[c.jsx("span",{className:"field-name",children:I.name}),c.jsx("span",{className:"field-type",children:Xv(I.type)})]}),Se&&c.jsx("span",{className:"required-badge",children:"Required"})]},I.id)})}),c.jsx("p",{className:"fields-hint caption",children:"Required fields cannot be removed"})]}),W&&c.jsx("p",{className:"form-error",children:W})]}),c.jsx("style",{children:`
        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .cancel-btn, .save-btn {
          background: transparent;
          border: none;
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .cancel-btn {
          color: var(--color-text-secondary);
        }

        .save-btn {
          color: var(--color-accent);
        }

        .save-btn:disabled {
          opacity: 0.5;
        }

        .form-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .collection-type-badge {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
          padding: var(--spacing-sm);
          background: rgba(0, 0, 0, 0.05);
          border-radius: var(--radius-md);
          width: fit-content;
        }

        .type-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-label {
          display: block;
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .textarea {
          resize: vertical;
          min-height: 60px;
        }

        .section-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-xs);
        }

        .section-desc {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .fields-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .field-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          transition: background var(--transition-fast);
        }

        .field-option:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.05);
        }

        .field-option:disabled {
          cursor: default;
        }

        .field-checkbox {
          flex-shrink: 0;
        }

        .field-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .field-name {
          font-size: var(--font-md);
          color: var(--color-text);
          font-weight: 500;
        }

        .field-type {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
        }

        .required-badge {
          font-size: var(--font-xs);
          color: var(--color-warning);
          background: rgba(230, 115, 102, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }

        .fields-hint {
          margin-top: var(--spacing-md);
          text-align: center;
        }

        .form-error {
          color: var(--color-error);
          font-size: var(--font-sm);
          text-align: center;
        }
      `})]})}function Xv(r){switch(r){case"text":return"Text";case"longText":return"Long Text";case"number":return"Number";case"currency":return"Currency ($)";case"date":return"Year";case"condition":return"Condition Picker";case"picker":return"Options Picker";default:return r}}function Qo(r){const o=r.toLowerCase();return o.startsWith("the ")?r.slice(4):o.startsWith("a ")?r.slice(2):o.startsWith("an ")?r.slice(3):r}function Zv({collection:r,onBack:o,onHome:d}){const{getItemsForCollection:f,deleteCollection:b,collectionValue:p,updateItem:O}=Vt(),[T,z]=U.useState(!1),[x,L]=U.useState(!1),[E,k]=U.useState(null),[K,q]=U.useState(""),[W,te]=U.useState("name"),[ie,be]=U.useState(!1),[I,he]=U.useState(!1),[Se,P]=U.useState({current:0,total:0,currentTitle:""}),[G,X]=U.useState(0),le=U.useRef(null),re=U.useRef(null),pe=U.useRef({}),ge=r.type==="dvds",V=$o();U.useEffect(()=>{if(!ie)return;const Y=ue=>{le.current&&!le.current.contains(ue.target)&&be(!1)};return document.addEventListener("mousedown",Y),()=>document.removeEventListener("mousedown",Y)},[ie]),U.useEffect(()=>{!E&&!T&&!x&&G>0&&setTimeout(()=>{window.scrollTo(0,G)},0)},[E,T,x,G]);const J=fc(r.type),H=rc(r.type,r.customFields),m=f(r.id),A=p(r.id),B=U.useMemo(()=>{let Y=m;if(K){const ue=K.toLowerCase();Y=Y.filter(we=>ra(we).toLowerCase().includes(ue)||Object.values(we.fieldValues).some(Fe=>Fe.toLowerCase().includes(ue)))}return Y=[...Y].sort((ue,we)=>{switch(W){case"name":return Qo(ra(ue)).localeCompare(Qo(ra(we)));case"date":return new Date(we.addedAt).getTime()-new Date(ue.addedAt).getTime();case"condition":{const He=ic(ue),Fe=ic(we);return!He&&!Fe?0:He?Fe?He.localeCompare(Fe):-1:1}case"value":{const He=Bn(ue)||0;return(Bn(we)||0)-He}default:return 0}}),Y},[m,K,W]),ee=W==="name"&&B.length>10&&!K,ce=U.useMemo(()=>{if(!ee)return null;const Y={};return B.forEach(ue=>{const He=Qo(ra(ue)).charAt(0).toUpperCase(),Fe=/[A-Z]/.test(He)?He:"#";Y[Fe]||(Y[Fe]=[]),Y[Fe].push(ue)}),Y},[B,ee]),v=U.useMemo(()=>ce?Object.keys(ce).sort((Y,ue)=>Y==="#"?1:ue==="#"?-1:Y.localeCompare(ue)):[],[ce]),D=Y=>{const ue=pe.current[Y];ue&&ue.scrollIntoView({behavior:"smooth",block:"start"})},R=U.useMemo(()=>m.filter(Y=>Y.photos.length===0),[m]),F=U.useCallback(async()=>{if(!(!ge||!V||R.length===0)){he(!0),P({current:0,total:R.length,currentTitle:""});for(let Y=0;Y<R.length;Y++){const ue=R[Y],we=ra(ue);P({current:Y+1,total:R.length,currentTitle:we});try{const He=await Fo(we);if(He.length>0){const Fe=He[0],el=uc(Fe.poster_path,"w500");if(el){const Qt=await(await fetch(el)).blob(),Gl=new File([Qt],`${Fe.title.replace(/[^a-z0-9]/gi,"_")}_poster.jpg`,{type:"image/jpeg"});await O(ue,[Gl])}}}catch(He){console.error(`Failed to fetch poster for "${we}":`,He)}await new Promise(He=>setTimeout(He,300))}he(!1),P({current:0,total:0,currentTitle:""})}},[ge,V,R,O]),se=async()=>{confirm(`Delete "${r.name}" and all its items?`)&&(await b(r.id),o())},me=Y=>{X(window.scrollY),k(Y)};return x?c.jsx(Qv,{collection:r,onClose:()=>L(!1),onSuccess:()=>L(!1)}):T?c.jsx(zh,{collection:r,fields:H,onClose:()=>z(!1),onSuccess:()=>z(!1)}):E?c.jsx(Vv,{item:E,collection:r,fields:H,onBack:()=>k(null)}):c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"detail-header",children:[c.jsxs("div",{className:"header-left",children:[d&&c.jsx("button",{className:"home-btn",onClick:d,children:c.jsx(Q,{name:"home",size:28})}),c.jsx("button",{className:"back-btn",onClick:o,children:c.jsx(Q,{name:"chevron-left",size:32})})]}),c.jsx("h1",{className:"heading",children:r.name}),c.jsxs("div",{className:"header-actions",ref:le,children:[c.jsx("button",{className:"header-btn",onClick:()=>z(!0),children:c.jsx(Q,{name:"plus-circle",size:24})}),c.jsx("button",{className:"header-btn",onClick:()=>be(!ie),children:c.jsx(Q,{name:"more-horizontal",size:24})}),ie&&c.jsxs("div",{className:"dropdown-menu",children:[c.jsxs("button",{onClick:()=>{be(!1),L(!0)},className:"menu-item",children:[c.jsx(Q,{name:"edit",size:20}),"Edit Collection"]}),c.jsx("hr",{className:"menu-divider"}),c.jsxs("button",{onClick:se,className:"menu-item danger",children:[c.jsx(Q,{name:"trash",size:20}),"Delete Collection"]})]})]})]}),c.jsxs(Ce,{className:"collection-stats",children:[c.jsx("div",{className:"stats-icon",style:{background:`linear-gradient(135deg, ${J.color}, ${J.color}B3)`},children:c.jsx(Q,{name:J.icon,size:24,color:"white"})}),c.jsxs("div",{className:"stats-info",children:[c.jsxs("span",{className:"stats-count",children:[m.length," items"]}),A>0&&c.jsxs("span",{className:"stats-value",children:["$",Math.round(A)," total value"]})]})]}),ge&&V&&R.length>0&&!I&&c.jsxs(Ce,{className:"fetch-posters-card",onClick:F,children:[c.jsxs("div",{className:"fetch-posters-content",children:[c.jsx(Q,{name:"image",size:24,color:"var(--color-dvds)"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Fetch Missing Posters"}),c.jsxs("p",{children:[R.length," movie",R.length!==1?"s":""," without cover art"]})]})]}),c.jsx(Q,{name:"chevron-right",size:20,color:"var(--color-text-secondary)"})]}),I&&c.jsxs(Ce,{className:"fetch-progress-card",children:[c.jsxs("div",{className:"fetch-progress-content",children:[c.jsx("div",{className:"spinner small"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Fetching Posters..."}),c.jsxs("p",{children:[Se.current," of ",Se.total,": ",Se.currentTitle]})]})]}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Se.current/Se.total*100}%`}})})]}),m.length>0&&c.jsxs("div",{className:`search-input-wrapper ${ee?"with-index":""}`,children:[c.jsx(Q,{name:"search",size:18}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search items...",value:K,onChange:Y=>q(Y.target.value)})]}),m.length>0&&c.jsxs("div",{className:`sort-bar ${ee?"with-index":""}`,children:[c.jsxs("div",{className:"sort-controls",children:[c.jsx("span",{className:"sort-label",children:"Sort:"}),c.jsxs("select",{className:"sort-select",value:W,onChange:Y=>te(Y.target.value),children:[c.jsx("option",{value:"date",children:"Date Added"}),c.jsx("option",{value:"name",children:"Name"}),c.jsx("option",{value:"condition",children:"Condition"}),c.jsx("option",{value:"value",children:"Value"})]})]}),c.jsxs("span",{className:"items-count",children:[B.length," items"]})]}),B.length===0?c.jsxs(Ce,{className:"empty-state",children:[c.jsx(Q,{name:"archive",size:50,className:"empty-state-icon"}),c.jsx("h3",{children:m.length===0?"No items yet":"No matching items"}),c.jsx("p",{className:"caption",children:m.length===0?"Add your first item to this collection":"Try a different search term"}),m.length===0&&c.jsxs(Gt,{onClick:()=>z(!0),children:[c.jsx(Q,{name:"plus",size:20}),"Add Item"]})]}):ee&&ce?c.jsxs("div",{className:"items-with-index",children:[c.jsx("div",{className:"items-list",ref:re,children:v.map(Y=>c.jsxs("div",{ref:ue=>{pe.current[Y]=ue},className:"letter-section",children:[c.jsx("div",{className:"letter-header",children:Y}),ce[Y].map(ue=>c.jsx(vh,{item:ue,fields:H,onClick:()=>me(ue)},ue.id))]},Y))}),c.jsx("div",{className:"alphabet-index",children:v.map(Y=>c.jsx("button",{className:"index-letter",onClick:()=>D(Y),children:Y},Y))})]}):c.jsx("div",{className:"items-list",children:B.map(Y=>c.jsx(vh,{item:Y,fields:H,onClick:()=>me(Y)},Y.id))}),m.length>0&&c.jsx("button",{className:"fab",onClick:()=>z(!0),children:c.jsx(Q,{name:"plus",size:28,color:"white"})})]}),c.jsx("style",{children:`
        .detail-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
          position: relative;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .home-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-accent);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-text);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-text);
        }

        .header-actions {
          display: flex;
          align-items: center;
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--color-card);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 180px;
          z-index: 100;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          width: 100%;
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          font-size: var(--font-md);
        }

        .menu-item.danger {
          color: var(--color-error);
        }

        .menu-divider {
          margin: 0;
          border: none;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .collection-stats {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .stats-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stats-info {
          display: flex;
          flex-direction: column;
        }

        .stats-count {
          font-size: var(--font-lg);
          font-weight: 600;
          color: var(--color-text);
        }

        .stats-value {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .fetch-posters-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          cursor: pointer;
          background: linear-gradient(135deg, rgba(92, 77, 115, 0.1), rgba(92, 77, 115, 0.05));
          border: 2px solid rgba(92, 77, 115, 0.3);
        }

        .fetch-posters-card:hover {
          border-color: rgba(92, 77, 115, 0.5);
          background: linear-gradient(135deg, rgba(92, 77, 115, 0.15), rgba(92, 77, 115, 0.08));
        }

        .fetch-posters-content {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .fetch-posters-content h3,
        .fetch-progress-content h3 {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .fetch-posters-content p,
        .fetch-progress-content p {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .fetch-progress-card {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
          background: linear-gradient(135deg, rgba(92, 77, 115, 0.1), rgba(92, 77, 115, 0.05));
          border: 2px solid rgba(92, 77, 115, 0.3);
        }

        .fetch-progress-content {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(92, 77, 115, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--color-dvds);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .spinner.small {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(92, 77, 115, 0.2);
          border-top-color: var(--color-dvds);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--color-card);
          border-radius: var(--radius-md);
          border: var(--card-border);
          margin-bottom: var(--spacing-sm);
        }

        .search-input-wrapper.with-index {
          margin-right: 28px;
        }

        .search-input-wrapper svg {
          color: var(--color-text-secondary);
        }

        .search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: var(--font-md);
          color: var(--color-text);
        }

        .search-input:focus {
          outline: none;
        }

        .sort-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-sm) 0;
          margin-bottom: var(--spacing-sm);
        }

        .sort-bar.with-index {
          margin-right: 28px;
        }

        .sort-controls {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          min-width: 0;
        }

        .sort-label {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .sort-select {
          padding: var(--spacing-xs) var(--spacing-sm);
          background: transparent;
          border: none;
          font-size: var(--font-sm);
          color: var(--color-text);
          font-weight: 500;
          cursor: pointer;
        }

        .items-count {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          flex-shrink: 0;
        }

        .items-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          padding-bottom: 80px;
        }

        .items-with-index {
          display: flex;
          position: relative;
        }

        .items-with-index .items-list {
          flex: 1;
          padding-right: 28px;
        }

        .letter-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .letter-header {
          font-size: var(--font-sm);
          font-weight: 700;
          color: var(--color-text);
          padding: var(--spacing-sm) var(--spacing-xs);
          position: sticky;
          top: 0;
          background: var(--color-background);
          z-index: 5;
        }

        .alphabet-index {
          position: fixed;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          z-index: 9999;
          background: var(--color-card);
          border-radius: 12px;
          padding: 6px 4px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
          border: 2px solid var(--color-primary);
          -webkit-transform: translateY(-50%);
          -webkit-backface-visibility: hidden;
        }

        .index-letter {
          width: 22px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text);
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        .index-letter:active {
          background: var(--color-primary);
          color: white;
          border-radius: 4px;
        }

        .fab {
          position: fixed;
          bottom: calc(var(--spacing-lg) + env(safe-area-inset-bottom, 0px));
          right: var(--spacing-lg);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-icon-teal));
          border: none;
          box-shadow: 0 4px 12px rgba(51, 166, 140, 0.4);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast);
        }

        .fab:active {
          transform: scale(0.95);
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-xxl);
          text-align: center;
          gap: var(--spacing-md);
        }

        .empty-state h3 {
          color: var(--color-text-secondary);
        }
      `})]})}const ph="treasureTracking_appearance";function Eh(){const[r,o]=U.useState(()=>{const p=localStorage.getItem(ph);return p==="light"||p==="dark"||p==="system"?p:"light"}),[d,f]=U.useState("light"),b=U.useCallback(p=>{o(p),localStorage.setItem(ph,p)},[]);return U.useEffect(()=>{const p=O=>{document.documentElement.setAttribute("data-theme",O),f(O);const T=document.querySelector('meta[name="theme-color"]');T&&T.setAttribute("content",O==="dark"?"rgb(20, 26, 31)":"rgb(51, 89, 115)")};if(r==="system"){const O=window.matchMedia("(prefers-color-scheme: dark)");p(O.matches?"dark":"light");const T=z=>{p(z.matches?"dark":"light")};return O.addEventListener("change",T),()=>O.removeEventListener("change",T)}else p(r)},[r]),{mode:r,setMode:b,resolvedTheme:d,isDark:d==="dark"}}function Kv({onClose:r}){const{mode:o,setMode:d}=Eh(),{user:f,signOut:b}=Jo(),p=[{value:"system",label:"System",icon:"monitor"},{value:"light",label:"Light",icon:"sun"},{value:"dark",label:"Dark",icon:"moon"}],O=async()=>{confirm("Sign out of your account?")&&await b()};return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"settings-header",children:[c.jsx("div",{style:{width:40}}),c.jsx("h1",{className:"heading",children:"Settings"}),c.jsx("button",{className:"done-btn",onClick:r,children:"Done"})]}),c.jsxs(Ce,{className:"settings-section",children:[c.jsx("h2",{className:"section-title",children:"Appearance"}),c.jsx("div",{className:"appearance-options",children:p.map(T=>c.jsxs("button",{className:`appearance-option ${o===T.value?"selected":""}`,onClick:()=>d(T.value),children:[c.jsx(Q,{name:T.icon,size:20,color:o===T.value?"var(--color-accent)":"var(--color-text-secondary)"}),c.jsx("span",{children:T.label}),c.jsx("div",{className:"check-placeholder",children:o===T.value&&c.jsx(Q,{name:"check",size:18,color:"var(--color-accent)"})})]},T.value))})]}),f&&c.jsxs(Ce,{className:"settings-section",children:[c.jsx("h2",{className:"section-title",children:"Account"}),c.jsxs("div",{className:"account-info",children:[f.photoURL&&c.jsx("img",{src:f.photoURL,alt:"",className:"account-avatar"}),c.jsxs("div",{className:"account-details",children:[c.jsx("span",{className:"account-name",children:f.displayName||"User"}),c.jsx("span",{className:"account-email",children:f.email})]})]}),c.jsx(Gt,{variant:"secondary",onClick:O,children:"Sign Out"})]}),c.jsxs(Ce,{className:"settings-section",children:[c.jsx("h2",{className:"section-title",children:"About"}),c.jsxs("div",{className:"about-row",children:[c.jsx("span",{children:"Version"}),c.jsx("span",{className:"about-value",children:"1.0.0"})]}),c.jsxs("div",{className:"about-row",children:[c.jsx("span",{children:"App"}),c.jsx("span",{className:"about-value",children:"Treasure Tracking"})]})]})]}),c.jsx("style",{children:`
        .settings-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .done-btn {
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .settings-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .section-title {
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-md);
        }

        .appearance-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .appearance-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: var(--radius-md);
          transition: background var(--transition-fast);
        }

        .appearance-option:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .appearance-option span {
          flex: 1;
          text-align: left;
          color: var(--color-text);
        }

        .appearance-option.selected {
          background: rgba(51, 166, 140, 0.1);
        }

        .check-placeholder {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .account-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .account-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }

        .account-details {
          display: flex;
          flex-direction: column;
        }

        .account-name {
          font-weight: 600;
          color: var(--color-text);
        }

        .account-email {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .about-row {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-sm) 0;
          color: var(--color-text);
        }

        .about-value {
          color: var(--color-text-secondary);
        }

        .btn-secondary {
          width: 100%;
        }
      `})]})}function Jv({onClose:r}){const{collections:o,items:d}=Vt(),[f,b]=U.useState(""),p=U.useMemo(()=>{if(!f.trim())return[];const O=f.toLowerCase();return d.filter(T=>ra(T).toLowerCase().includes(O)?!0:Object.values(T.fieldValues).some(x=>x.toLowerCase().includes(O))).map(T=>{const z=o.find(L=>L.id===T.collectionId),x=z?fc(z.type):null;return{item:T,collectionName:z?.name||"Unknown",collectionColor:x?.color||"#666"}}).slice(0,50)},[f,d,o]);return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx(Q,{name:"search",size:20}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search all items...",value:f,onChange:O=>b(O.target.value),autoFocus:!0}),f&&c.jsx("button",{className:"clear-btn",onClick:()=>b(""),children:c.jsx(Q,{name:"x",size:18})})]}),c.jsx("button",{className:"cancel-btn",onClick:r,children:"Cancel"})]}),f.trim()?p.length===0?c.jsxs("div",{className:"no-results",children:[c.jsx(Q,{name:"search",size:48,className:"empty-state-icon"}),c.jsx("p",{children:"No results found"}),c.jsx("p",{className:"caption",children:"Try a different search term"})]}):c.jsxs("div",{className:"results-list",children:[c.jsxs("p",{className:"results-count",children:[p.length," ",p.length===1?"result":"results"]}),p.map(O=>c.jsxs(Ce,{className:"result-card",children:[c.jsx("div",{className:"result-indicator",style:{backgroundColor:O.collectionColor}}),c.jsxs("div",{className:"result-content",children:[c.jsx("h3",{className:"result-name",children:ra(O.item)}),c.jsx("p",{className:"result-collection",children:O.collectionName})]}),c.jsx(Q,{name:"chevron-right",size:20,color:"var(--color-text-secondary)"})]},O.item.id))]}):c.jsxs("div",{className:"search-hint",children:[c.jsx(Q,{name:"search",size:48,className:"empty-state-icon"}),c.jsx("p",{children:"Search across all your collections"})]})]}),c.jsx("style",{children:`
        .search-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) 0;
        }

        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--color-card);
          border-radius: var(--radius-md);
          border: var(--card-border);
        }

        .search-input-wrapper svg {
          color: var(--color-text-secondary);
        }

        .search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: var(--font-md);
          color: var(--color-text);
        }

        .search-input:focus {
          outline: none;
        }

        .clear-btn {
          background: transparent;
          border: none;
          padding: 4px;
          cursor: pointer;
          color: var(--color-text-secondary);
        }

        .cancel-btn {
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .no-results, .search-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-xxl);
          text-align: center;
          color: var(--color-text-secondary);
        }

        .results-count {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .results-list {
          padding-bottom: var(--spacing-lg);
        }

        .result-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
          cursor: pointer;
        }

        .result-indicator {
          width: 4px;
          height: 40px;
          border-radius: 2px;
        }

        .result-content {
          flex: 1;
        }

        .result-name {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
        }

        .result-collection {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }
      `})]})}function Fv({onClose:r,onCSVImport:o}){const{collections:d,items:f}=Vt(),[b,p]=U.useState(!1),[O,T]=U.useState(null),z=async()=>{try{const E=await Ut().getAllData(),k={exportDate:new Date().toISOString(),version:"1.0.0",collections:E.collections,items:E.items},K=JSON.stringify(k,null,2),q=new Blob([K],{type:"application/json"});try{await wh.share({title:"Treasure Tracking Export",text:`Exported ${d.length} collections with ${f.length} items`,url:URL.createObjectURL(q)})}catch{const W=URL.createObjectURL(q),te=document.createElement("a");te.href=W,te.download=`treasure-tracking-export-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(W)}}catch(L){T(L instanceof Error?L.message:"Export failed")}},x=async L=>{const E=L.target.files?.[0];if(E){p(!0),T(null);try{const k=await E.text(),K=JSON.parse(k);if(!K.collections||!Array.isArray(K.collections))throw new Error("Invalid export file: missing collections");if(!K.items||!Array.isArray(K.items))throw new Error("Invalid export file: missing items");const q=Ut();for(const W of K.collections)await q.createCollection(W);for(const W of K.items)await q.createItem(W);alert(`Imported ${K.collections.length} collections and ${K.items.length} items`),r()}catch(k){T(k instanceof Error?k.message:"Import failed")}finally{p(!1)}}};return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"export-header",children:[c.jsx("div",{style:{width:40}}),c.jsx("h1",{className:"heading",children:"Import/Export"}),c.jsx("button",{className:"done-btn",onClick:r,children:"Done"})]}),c.jsxs(Ce,{className:"export-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsx(Q,{name:"share",size:24,color:"var(--color-accent)"}),c.jsxs("div",{children:[c.jsx("h3",{className:"section-title",children:"Export Data"}),c.jsx("p",{className:"section-desc",children:"Save your data as a JSON file"})]})]}),c.jsxs("p",{className:"section-stats",children:[d.length," collections, ",f.length," items"]}),c.jsx(Gt,{onClick:z,children:"Export JSON"})]}),c.jsxs(Ce,{className:"export-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsx(Q,{name:"upload-download",size:24,color:"var(--color-primary)"}),c.jsxs("div",{children:[c.jsx("h3",{className:"section-title",children:"Import Data"}),c.jsx("p",{className:"section-desc",children:"Load data from a JSON file"})]})]}),c.jsxs("label",{className:"import-btn",children:[b?"Importing...":"Select JSON File",c.jsx("input",{type:"file",accept:".json",onChange:x,disabled:b,style:{display:"none"}})]})]}),c.jsxs(Ce,{className:"export-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsx(Q,{name:"layers",size:24,color:"var(--color-secondary)"}),c.jsxs("div",{children:[c.jsx("h3",{className:"section-title",children:"Import CSV"}),c.jsx("p",{className:"section-desc",children:"Bulk import items from a spreadsheet"})]})]}),o?c.jsx(Gt,{onClick:o,children:"Import CSV"}):c.jsx("p",{className:"csv-note caption",children:"CSV import requires selecting a collection first."})]}),O&&c.jsx("p",{className:"export-error",children:O})]}),c.jsx("style",{children:`
        .export-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .done-btn {
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .export-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .section-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
        }

        .section-desc {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
        }

        .section-stats {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .import-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: var(--spacing-md);
          background: rgba(51, 89, 115, 0.1);
          color: var(--color-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .import-btn:hover {
          background: rgba(51, 89, 115, 0.15);
        }

        .csv-note {
          text-align: center;
        }

        .export-error {
          color: var(--color-error);
          text-align: center;
          padding: var(--spacing-md);
        }

        .btn {
          width: 100%;
        }
      `})]})}function $v({onClose:r}){const{collections:o,createItem:d}=Vt(),[f,b]=U.useState("select"),[p,O]=U.useState(null),[T,z]=U.useState(null),[x,L]=U.useState({}),[E,k]=U.useState(!1),[K,q]=U.useState(0),[W,te]=U.useState(null),ie=P=>{const G=P.trim().split(`
`),X=be(G[0]),le=G.slice(1).map(re=>be(re));return{headers:X,rows:le}},be=P=>{const G=[];let X="",le=!1;for(let re=0;re<P.length;re++){const pe=P[re];pe==='"'?le=!le:pe===","&&!le?(G.push(X.trim()),X=""):X+=pe}return G.push(X.trim()),G},I=async P=>{const G=P.target.files?.[0];if(G)try{const X=await G.text(),le=ie(X);if(z(le),b("map"),p){const re=rc(p.type),pe={},ge={Name:["name","title","item","movie","film","album","book"],Year:["year","release","released","date"],Genre:["genre","category","type","color"],Director:["director","directed by"],Author:["author","writer","by"],Condition:["condition","state","quality"],Value:["value","price","cost","worth"]};for(const V of re){let J=le.headers.find(H=>H.toLowerCase()===V.name.toLowerCase());if(!J&&ge[V.name]){for(const H of ge[V.name])if(J=le.headers.find(m=>m.toLowerCase()===H.toLowerCase()),J)break}J&&(pe[V.name]=J)}L(pe)}}catch{te("Failed to parse CSV file")}},he=async()=>{if(!p||!T)return;if(Object.entries(x).filter(([,X])=>X&&X.trim()!=="").length===0){te("Please match at least one column to a field");return}k(!0),te(null);let G=0;try{for(let X=0;X<T.rows.length;X++){const le=T.rows[X],re={};for(const[pe,ge]of Object.entries(x)){if(!ge)continue;const V=T.headers.indexOf(ge);V>=0&&le[V]&&(re[pe]=le[V])}Object.keys(re).length>0&&(await d(p.id,re),G++,G%10===0&&q(G))}console.log("[CSV Import] Imported count:",G),q(G),b("done")}catch(X){console.error("[CSV Import] Error:",X),te(X instanceof Error?X.message:"Import failed")}finally{k(!1)}},Se=p?rc(p.type):[];return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"csv-header",children:[c.jsx("button",{className:"back-btn",onClick:r,children:c.jsx(Q,{name:"chevron-left",size:32})}),c.jsx("h1",{className:"heading",children:"Import CSV"}),c.jsx("div",{style:{width:40}})]}),f==="select"&&c.jsxs(c.Fragment,{children:[c.jsxs(Ce,{className:"csv-section",children:[c.jsx("h3",{className:"section-title",children:"1. Select Collection"}),c.jsx("p",{className:"section-desc",children:"Choose which collection to import items into"}),c.jsx("div",{className:"collection-list",children:o.length===0?c.jsx("p",{className:"no-collections",children:"No collections yet. Create one first."}):o.map(P=>c.jsx("button",{className:`collection-option ${p?.id===P.id?"selected":""}`,onClick:()=>O(P),children:P.name},P.id))})]}),p&&c.jsxs(Ce,{className:"csv-section",children:[c.jsx("h3",{className:"section-title",children:"2. Select CSV File"}),c.jsx("p",{className:"section-desc",children:"Choose a CSV file to import"}),c.jsxs("label",{className:"file-btn",children:["Select CSV File",c.jsx("input",{type:"file",accept:".csv",onChange:I,style:{display:"none"}})]})]})]}),f==="map"&&T&&c.jsxs(c.Fragment,{children:[Object.keys(x).length>0&&c.jsxs(Ce,{className:"csv-section auto-mapped-notice",children:[c.jsx(Q,{name:"check-circle",size:20,color:"var(--color-success)"}),c.jsxs("span",{children:["Auto-matched ",Object.keys(x).length," column",Object.keys(x).length!==1?"s":"","! Review below or just click Import."]})]}),c.jsxs(Ce,{className:"csv-section",children:[c.jsx("h3",{className:"section-title",children:"Column Mapping"}),c.jsx("p",{className:"section-desc",children:'Your CSV columns are matched to collection fields. Adjust if needed, or leave as "Skip" to ignore a field.'}),c.jsx("div",{className:"mapping-list",children:Se.map(P=>{const G=x[P.name],X=G?T.headers.indexOf(G):-1,le=X>=0&&T.rows[0]?T.rows[0][X]:null;return c.jsxs("div",{className:"mapping-row",children:[c.jsxs("div",{className:"field-info-col",children:[c.jsx("span",{className:"field-name",children:P.name}),le&&c.jsxs("span",{className:"sample-value",children:['e.g. "',le,'"']})]}),c.jsxs("select",{className:"column-select",value:x[P.name]||"",onChange:re=>L({...x,[P.name]:re.target.value}),children:[c.jsx("option",{value:"",children:"-- Skip --"}),T.headers.map(re=>c.jsx("option",{value:re,children:re},re))]})]},P.id)})})]}),c.jsxs(Ce,{className:"csv-section",children:[c.jsxs("h3",{className:"section-title",children:["Preview (",T.rows.length," items)"]}),c.jsx("p",{className:"section-desc",children:"First few rows from your CSV file"}),c.jsxs("div",{className:"preview-table",children:[c.jsxs("div",{className:"preview-row preview-header",children:[T.headers.slice(0,3).map((P,G)=>c.jsx("span",{className:"preview-cell",children:P},G)),T.headers.length>3&&c.jsx("span",{className:"preview-cell",children:"..."})]}),T.rows.slice(0,3).map((P,G)=>c.jsxs("div",{className:"preview-row",children:[P.slice(0,3).map((X,le)=>c.jsx("span",{className:"preview-cell",children:X||"-"},le)),P.length>3&&c.jsx("span",{className:"preview-cell",children:"..."})]},G)),T.rows.length>3&&c.jsxs("p",{className:"preview-more",children:["+ ",T.rows.length-3," more items"]})]})]}),c.jsx(Gt,{onClick:he,disabled:E,className:"import-btn",children:E?`Importing... ${K} of ${T.rows.length}`:`Import ${T.rows.length} Items to ${p?.name}`}),E&&c.jsx("p",{className:"import-progress-hint",children:"Please wait, this may take a moment for large files..."}),!E&&c.jsx("button",{className:"back-link",onClick:()=>{b("select"),z(null),L({})},children:"← Start over with different file"})]}),f==="done"&&c.jsxs(Ce,{className:"csv-section done-section",children:[c.jsx(Q,{name:"check-circle",size:48,color:"var(--color-success)"}),c.jsx("h3",{className:"done-title",children:"Import Complete!"}),c.jsxs("p",{className:"done-desc",children:["Successfully imported ",K," items"]}),c.jsx(Gt,{onClick:r,children:"Done"})]}),W&&c.jsx("p",{className:"csv-error",children:W})]}),c.jsx("style",{children:`
        .csv-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .back-btn {
          background: transparent;
          border: none;
          padding: var(--spacing-md);
          cursor: pointer;
          color: var(--color-text);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .csv-section {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .section-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-xs);
        }

        .section-desc {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .collection-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .collection-option {
          padding: var(--spacing-md);
          background: transparent;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: left;
          cursor: pointer;
          font-size: var(--font-md);
          color: var(--color-text);
          transition: all var(--transition-fast);
        }

        .collection-option.selected {
          border-color: var(--color-accent);
          background: rgba(51, 166, 140, 0.1);
        }

        .no-collections {
          color: var(--color-text-secondary);
          text-align: center;
          padding: var(--spacing-lg);
        }

        .file-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: var(--spacing-md);
          background: var(--color-accent);
          color: white;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
        }

        .mapping-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .auto-mapped-notice {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) var(--spacing-lg);
          background: rgba(51, 166, 140, 0.1);
          border: 1px solid var(--color-success);
        }

        .auto-mapped-notice span {
          color: var(--color-text);
          font-size: var(--font-sm);
        }

        .mapping-row {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid var(--color-border);
        }

        .mapping-row:last-child {
          border-bottom: none;
        }

        .field-info-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .field-name {
          font-weight: 600;
          color: var(--color-text);
        }

        .sample-value {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
          font-style: italic;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 120px;
        }

        .column-select {
          flex: 1;
          padding: var(--spacing-sm) var(--spacing-md);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-card);
          color: var(--color-text);
          font-size: var(--font-md);
        }

        .preview-table {
          background: rgba(0, 0, 0, 0.05);
          border-radius: var(--radius-sm);
          padding: var(--spacing-sm);
          overflow: hidden;
        }

        .preview-row {
          display: flex;
          gap: var(--spacing-sm);
          padding: var(--spacing-xs) 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .preview-row.preview-header {
          font-weight: 600;
          color: var(--color-text);
          border-bottom: 2px solid var(--color-border);
        }

        .preview-row:last-child {
          border-bottom: none;
        }

        .preview-cell {
          flex: 1;
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .preview-more {
          font-size: var(--font-xs);
          color: var(--color-text-secondary);
          text-align: center;
          margin-top: var(--spacing-sm);
        }

        .done-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: var(--spacing-md);
        }

        .done-title {
          font-size: var(--font-lg);
          color: var(--color-text);
        }

        .done-desc {
          color: var(--color-text-secondary);
        }

        .csv-error {
          color: var(--color-error);
          text-align: center;
          padding: var(--spacing-md);
        }

        .import-btn {
          width: 100%;
          margin-bottom: var(--spacing-sm);
        }

        .import-progress-hint {
          text-align: center;
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          font-style: italic;
        }

        .back-link {
          display: block;
          width: 100%;
          text-align: center;
          background: transparent;
          border: none;
          color: var(--color-text-secondary);
          font-size: var(--font-sm);
          padding: var(--spacing-md);
          cursor: pointer;
        }

        .back-link:hover {
          color: var(--color-text);
        }
      `})]})}function Wv({onClose:r}){const o=[{icon:"layers",title:"Creating Collections",content:'Tap "New" to create a collection. Choose from 9 types (Coins, Stamps, Cards, etc.) or select "Other" for a custom collection. Each type has pre-defined fields specific to that collectible.'},{icon:"plus",title:"Adding Items",content:"Open a collection and tap the + button to add items. Fill in the details and optionally add photos. All items are automatically synced to your Google Drive."},{icon:"camera",title:"Photos",content:"Add multiple photos to each item. Tap a photo to view it full screen. You can delete photos from the full screen view."},{icon:"search",title:"Searching",content:"Use the search icon on the home screen to search across all your collections. The search looks through item names and all field values."},{icon:"upload-download",title:"Import & Export",content:"Export your data as JSON for backup. Import data from JSON files or CSV spreadsheets to quickly add items."},{icon:"sun",title:"Dark Mode",content:"Go to Settings to switch between Light, Dark, or System appearance modes."}];return c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"help-header",children:[c.jsx("div",{style:{width:40}}),c.jsx("h1",{className:"heading",children:"Help"}),c.jsx("button",{className:"done-btn",onClick:r,children:"Done"})]}),o.map((d,f)=>c.jsxs(Ce,{className:"help-topic",children:[c.jsxs("div",{className:"topic-header",children:[c.jsx(Q,{name:d.icon,size:24,color:"var(--color-accent)"}),c.jsx("h3",{className:"topic-title",children:d.title})]}),c.jsx("p",{className:"topic-content",children:d.content})]},f)),c.jsx("p",{className:"help-footer caption",children:"Your data is stored securely in your Google Drive's app data folder. Only this app can access it."})]}),c.jsx("style",{children:`
        .help-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .done-btn {
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-size: var(--font-md);
          font-weight: 600;
          cursor: pointer;
        }

        .help-topic {
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .topic-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
        }

        .topic-title {
          font-size: var(--font-md);
          font-weight: 600;
          color: var(--color-text);
        }

        .topic-content {
          font-size: var(--font-sm);
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .help-footer {
          text-align: center;
          padding: var(--spacing-lg);
        }
      `})]})}const Iv="/treasure-tracking/treasure-icon.png";function Pv(){const{collections:r,totalItems:o,totalEstimatedValue:d,itemCount:f}=Vt(),[b,p]=U.useState(!1),[O,T]=U.useState(!1),[z,x]=U.useState(!1),[L,E]=U.useState(!1),[k,K]=U.useState(!1),[q,W]=U.useState(!1),[te,ie]=U.useState(null);return te?c.jsx(Zv,{collection:te,onBack:()=>ie(null),onHome:()=>ie(null)}):b?c.jsx(Uv,{onClose:()=>p(!1),onSuccess:()=>p(!1)}):O?c.jsx(Kv,{onClose:()=>T(!1)}):z?c.jsx(Jv,{onClose:()=>x(!1)}):L?c.jsx(Fv,{onClose:()=>E(!1),onCSVImport:()=>{E(!1),K(!0)}}):k?c.jsx($v,{onClose:()=>K(!1)}):q?c.jsx(Wv,{onClose:()=>W(!1)}):c.jsxs("div",{className:"adaptive-background",children:[c.jsxs("div",{className:"container",children:[c.jsxs("header",{className:"home-header",children:[c.jsx("button",{className:"header-btn",onClick:()=>T(!0),children:c.jsx(Q,{name:"settings",size:24})}),o>0&&c.jsx("button",{className:"header-btn",onClick:()=>x(!0),children:c.jsx(Q,{name:"search",size:24})})]}),c.jsxs("section",{className:"hero",children:[c.jsx("div",{className:"app-icon-wrapper",children:c.jsx("img",{src:Iv,alt:"Treasure Tracking",className:"app-icon"})}),c.jsx("h1",{className:"title",children:"Treasure Tracking"}),c.jsx("p",{className:"subheading",children:"Track & organize your treasures"})]}),r.length>0&&c.jsxs(Ce,{className:"stats-card",children:[c.jsx(qo,{icon:"layers",value:String(r.length),label:"Collections",color:"var(--color-primary)"}),c.jsx(qo,{icon:"archive",value:String(o),label:"Items",color:"var(--color-accent)"}),d>0&&c.jsx(qo,{icon:"dollar-sign",value:`$${Math.round(d)}`,label:"Value",color:"var(--color-success)"})]}),c.jsxs("section",{className:"collections-section",children:[c.jsx("h2",{className:"heading",children:"My Collections"}),r.length===0?c.jsxs(Ce,{className:"empty-state",children:[c.jsx(Q,{name:"archive",size:50,className:"empty-state-icon"}),c.jsx("h3",{children:"No collections yet"}),c.jsx("p",{className:"caption",children:"Start by creating your first collection"}),c.jsxs(Gt,{onClick:()=>p(!0),children:[c.jsx(Q,{name:"plus-circle",size:20}),"Create Collection"]})]}):c.jsx("div",{className:"grid-2",children:r.map(be=>c.jsx(_v,{collection:be,itemCount:f(be.id),onClick:()=>ie(be)},be.id))})]}),c.jsxs("section",{className:"actions-section",children:[c.jsx(Go,{icon:"plus-circle",title:"New",color:"var(--color-secondary)",onClick:()=>p(!0)}),c.jsx(Go,{icon:"help-circle",title:"Help",color:"var(--color-accent)",onClick:()=>W(!0)}),c.jsx(Go,{icon:"upload-download",title:`Import/
Export`,color:"var(--color-primary)",onClick:()=>E(!0)})]})]}),c.jsx("style",{children:`
        .home-header {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .header-btn {
          background: var(--color-card);
          border: 1px solid rgba(89, 60, 31, 0.2);
          border-radius: 8px;
          padding: var(--spacing-sm);
          cursor: pointer;
          color: var(--color-primary);
          transition: all var(--transition-fast);
          box-shadow: 0 2px 4px rgba(89, 60, 31, 0.1);
        }

        .header-btn:hover {
          background: var(--color-background);
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        [data-theme="dark"] .header-btn {
          background: var(--color-card);
          border: 1px solid rgba(184, 142, 74, 0.3);
          color: var(--color-accent);
        }

        .hero {
          text-align: center;
          padding: var(--spacing-xl) 0 var(--spacing-lg);
        }

        .app-icon-wrapper {
          margin-bottom: var(--spacing-lg);
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .app-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -6px;
          background: linear-gradient(135deg, var(--color-accent), var(--color-secondary));
          border-radius: 20px;
          opacity: 0.4;
        }

        .app-icon-wrapper::after {
          content: '';
          position: absolute;
          inset: -12px;
          border: 2px solid var(--color-accent);
          border-radius: 24px;
          opacity: 0.3;
        }

        .app-icon {
          display: block;
          width: 90px;
          height: 90px;
          border-radius: 16px;
          box-shadow:
            0 4px 12px rgba(89, 60, 31, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          border: 3px solid var(--color-accent);
          position: relative;
          z-index: 1;
        }

        [data-theme="dark"] .app-icon {
          border: 3px solid var(--color-accent);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        .stats-card {
          display: flex;
          padding: var(--spacing-xl) var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          background: var(--color-card);
          border-top: 3px solid var(--color-accent);
        }

        [data-theme="dark"] .stats-card {
          background: var(--color-card);
        }

        .collections-section {
          margin-bottom: var(--spacing-xl);
        }

        .collections-section .heading {
          margin-bottom: var(--spacing-md);
          font-size: 1.35rem;
          letter-spacing: -0.3px;
        }

        .actions-section {
          display: flex;
          gap: var(--spacing-md);
          padding-bottom: var(--spacing-xl);
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-xxl);
          text-align: center;
          gap: var(--spacing-md);
          background: linear-gradient(135deg, rgba(51, 166, 140, 0.05), rgba(230, 115, 102, 0.05));
        }

        .empty-state h3 {
          color: var(--color-text);
          font-weight: 600;
        }
      `})]})}function ep(){const{user:r,loading:o,isAuthenticated:d,error:f}=Jo(),{initialize:b,loading:p,error:O}=Vt();return Eh(),U.useEffect(()=>{d&&r&&(console.log("[App] User authenticated, initializing storage..."),b(r.id))},[d,r,b]),console.log("[App] State:",{authLoading:o,isAuthenticated:d,dataLoading:p,authError:f,dataError:O}),f||O?c.jsxs("div",{style:{padding:20,textAlign:"center"},children:[c.jsx("h2",{children:"Error"}),c.jsx("p",{children:f||O}),c.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]}):o?c.jsx(nc,{fullScreen:!0}):d?p?c.jsx(nc,{fullScreen:!0}):c.jsx(Pv,{}):c.jsx(jv,{})}function tp(){return c.jsx(Mv,{children:c.jsx(ep,{})})}"serviceWorker"in navigator&&(navigator.serviceWorker.ready.then(r=>{r.update(),setInterval(()=>{r.update()},3e4)}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()}));iv.createRoot(document.getElementById("root")).render(c.jsx(U.StrictMode,{children:c.jsx(tp,{})}));export{Ko as W};
