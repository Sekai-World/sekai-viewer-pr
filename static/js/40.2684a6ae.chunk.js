(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[40],{316:function(e,t,n){"use strict";var r=n(2),a=n(3),o=n(0),i=(n(4),n(5)),c=n(6),s=n(10),l=44,u=o.forwardRef((function(e,t){var n=e.classes,c=e.className,u=e.color,p=void 0===u?"primary":u,f=e.disableShrink,d=void 0!==f&&f,m=e.size,h=void 0===m?40:m,v=e.style,b=e.thickness,y=void 0===b?3.6:b,g=e.value,O=void 0===g?0:g,j=e.variant,k=void 0===j?"indeterminate":j,x=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),E={},w={},S={};if("determinate"===k||"static"===k){var D=2*Math.PI*((l-y)/2);E.strokeDasharray=D.toFixed(3),S["aria-valuenow"]=Math.round(O),E.strokeDashoffset="".concat(((100-O)/100*D).toFixed(3),"px"),w.transform="rotate(-90deg)"}return o.createElement("div",Object(r.a)({className:Object(i.a)(n.root,c,"inherit"!==p&&n["color".concat(Object(s.a)(p))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[k]),style:Object(r.a)({width:h,height:h},w,v),ref:t,role:"progressbar"},S,x),o.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},o.createElement("circle",{className:Object(i.a)(n.circle,d&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[k]),style:E,cx:l,cy:l,r:(l-y)/2,fill:"none",strokeWidth:y})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(u)},363:function(e,t,n){var r=n(463);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},380:function(e,t,n){"use strict";var r=n(2),a=n(3),o=n(0),i=(n(4),n(5)),c=n(10),s=n(6),l=n(108),u=n(11),p=n(89),f=o.forwardRef((function(e,t){var n=e.classes,s=e.className,f=e.color,d=void 0===f?"primary":f,m=e.component,h=void 0===m?"a":m,v=e.onBlur,b=e.onFocus,y=e.TypographyClasses,g=e.underline,O=void 0===g?"hover":g,j=e.variant,k=void 0===j?"inherit":j,x=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),E=Object(l.a)(),w=E.isFocusVisible,S=E.onBlurVisible,D=E.ref,N=o.useState(!1),P=N[0],V=N[1],M=Object(u.a)(t,D);return o.createElement(p.a,Object(r.a)({className:Object(i.a)(n.root,n["underline".concat(Object(c.a)(O))],s,P&&n.focusVisible,"button"===h&&n.button),classes:y,color:d,component:h,onBlur:function(e){P&&(S(),V(!1)),v&&v(e)},onFocus:function(e){w(e)&&V(!0),b&&b(e)},ref:M,variant:k},x))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},385:function(e,t,n){"use strict";var r=n(2),a=n(3),o=n(0),i=(n(4),n(5)),c=n(6),s=n(14),l=Object(s.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=o.forwardRef((function(e,t){var n=e.alt,c=e.children,s=e.classes,u=e.className,p=e.component,f=void 0===p?"div":p,d=e.imgProps,m=e.sizes,h=e.src,v=e.srcSet,b=e.variant,y=void 0===b?"circle":b,g=Object(a.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,j=function(e){var t=e.src,n=e.srcSet,r=o.useState(!1),a=r[0],i=r[1];return o.useEffect((function(){if(t||n){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),a}({src:h,srcSet:v}),k=h||v,x=k&&"error"!==j;return O=x?o.createElement("img",Object(r.a)({alt:n,src:h,srcSet:v,sizes:m,className:s.img},d)):null!=c?c:k&&n?n[0]:o.createElement(l,{className:s.fallback}),o.createElement(f,Object(r.a)({className:Object(i.a)(s.root,s.system,s[y],u,!x&&s.colorDefault),ref:t},g),O)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},390:function(e,t,n){"use strict";var r=n(0),a=n(14);t.a=Object(a.a)(r.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew")},463:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},492:function(e,t,n){e.exports={parse:n(493),stringify:n(496)}},493:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,a=n(494),o=Object.create?Object.create(null):{};function i(e,t,n,r,a){var o=t.indexOf("<",r),i=t.slice(r,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!a&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,c=[],s=-1,l=[],u={},p=!1;return e.replace(r,(function(r,o){if(p){if(r!=="</"+n.name+">")return;p=!1}var f,d="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),h=o+r.length,v=e.charAt(h);d&&!m&&(s++,"tag"===(n=a(r)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!v||"<"===v||i(n.children,e,s,h,t.ignoreWhitespace),u[n.tagName]=n,0===s&&c.push(n),(f=l[s-1])&&f.children.push(n),l[s]=n),(m||!d||n.voidElement)&&(m||s--,!p&&"<"!==v&&v&&i(f=-1===s?c:l[s].children,e,s,h,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},494:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,a=n(495);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return o=!0,void n++;o?0===n?((a[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,o=!1})),i}},495:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},496:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(363),a=n.n(r),o=n(148),i=n.n(o),c=n(72),s=n.n(c),l=n(0),u=n.n(l),p=n(492),f=n.n(p),d=n(55),m=n(63);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t){if(!e)return"";var n="",r=g(e),o=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"===typeof e)n+="".concat(e);else if(u.a.isValidElement(e)){var c=Object.keys(e.props).length,s=o.indexOf(e.type)>-1,l=e.props.children;if(!l&&s&&0===c)n+="<".concat(e.type,"/>");else if(l||s&&0===c)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(s&&1===c&&"string"===typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=O(l,t);n+="<".concat(r,">").concat(p,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if("object"===i()(e)){var f=e.format,d=a()(e,["format"]),h=Object.keys(d);if(1===h.length){var v=f?"".concat(h[0],", ").concat(f):h[0];n+="{{".concat(v,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function j(e,t,n,r,a){if(""===t)return[];var o=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(o.join("|")).test(t);if(!e&&!c)return[t];var s={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(b(t)?e(y(t)):"object"!==i()(t)||u.a.isValidElement(t)||Object.assign(s,t))}))}(e);var l=n.services.interpolator.interpolate(t,v(v({},s),a),n.language),p=f.a.parse("<0>".concat(l,"</0>"));function d(e,t,n){var r=y(e),a=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.a.isValidElement(e)}))}(r)&&0===a.length?r:a}function m(e,t,n,r,a){e.dummy&&(e.children=t),n.push(u.a.cloneElement(e,v(v({},e.props),{},{key:r}),a?void 0:t))}function h(t,n,a){var s=g(t);return g(n).reduce((function(t,n,l){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var f=s[parseInt(n.name,10)];!f&&1===a.length&&a[0][n.name]&&(f=a[0][n.name]),f||(f={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=v({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},f):f,g=u.a.isValidElement(y),O=g&&b(n,!0)&&!n.voidElement,j=c&&"object"===i()(y)&&y.dummy&&!g,k="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(b(y)||O){m(y,d(y,n,a),t,l)}else if(j){var x=h(s,n.children,a);t.push(u.a.cloneElement(y,v(v({},y.props),{},{key:l}),x))}else if(Number.isNaN(parseFloat(n.name))){if(k)m(y,d(y,n,a),t,l,n.voidElement);else if(r.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var E=h(s,n.children,a);t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},E))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var w=h(s,n.children,a);t.push("<".concat(n.name,">").concat(w,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&p?t.push(u.a.cloneElement(y,v(v({},y.props),{},{key:l}),p)):t.push(u.a.cloneElement(y,v(v({},y.props),{},{key:l})));else{var S=n.children[0]?p:null;S&&t.push(S)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(h([{dummy:!0,children:e}],p,g(e||[]))[0])}function k(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,i=e.tOptions,c=void 0===i?{}:i,s=e.values,p=e.defaults,f=e.components,h=e.ns,b=e.i18n,y=e.t,g=a()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),k=Object(l.useContext)(d.a)||{},x=k.i18n,E=k.defaultNS,w=b||x||Object(d.d)();if(!w)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=y||w.t.bind(w)||function(e){return e},D=v(v({},Object(d.c)()),w.options&&w.options.react),N=h||S.ns||E||w.options&&w.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var P=p||O(t,D)||D.transEmptyNodeValue||o,V=D.hashTransKey,M=o||(V?V(P):P),C=s?c.interpolation:{interpolation:v(v({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},z=v(v(v(v({},c),{},{count:n},s),C),{},{defaultValue:P,ns:N}),F=j(f||t,M?S(M,z):P,w,D,z),A=void 0!==r?r:D.defaultTransParent;return A?u.a.createElement(A,g,F):F}},617:function(e,t,n){"use strict";var r=n(0),a=n(14);t.a=Object(a.a)(r.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub")},735:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n(59))&&r.__esModule?r:{default:r}).default)("M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41M2 21.6H5.5V2.41H2V21.6Z");t.default=a}}]);