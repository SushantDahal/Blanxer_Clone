(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{1310:function(e,t,r){"use strict";r.d(t,{O:function(){return y}});var o=r(7294),n=r(8495),a=r(6817);let l={xs:12,sm:18,md:24,lg:34,xl:42};var i=(0,a.k)((e,{size:t,color:r,transitionDuration:o})=>{let n=e.fn.size({size:t,sizes:l}),a=r||("dark"===e.colorScheme?e.white:e.black);return{root:{borderRadius:e.radius.sm,width:`calc(${n}px + ${e.spacing.xs}px)`,height:`calc(${n}px + ${e.spacing.xs}px)`,padding:`calc(${e.spacing.xs}px / 2)`,cursor:"pointer"},burger:{position:"relative",userSelect:"none",boxSizing:"border-box","&, &::before, &::after":{display:"block",width:n,height:Math.ceil(n/12),backgroundColor:a,outline:"1px solid transparent",transitionProperty:"background-color, transform",transitionDuration:`${o}ms`,"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}},"&::before, &::after":{position:"absolute",content:'""',left:0},"&::before":{top:-(n/3*1)},"&::after":{top:n/3},"&[data-opened]":{backgroundColor:"transparent","&::before":{transform:`translateY(${n/3}px) rotate(45deg)`},"&::after":{transform:`translateY(-${n/3}px) rotate(-45deg)`}}}}}),c=r(4736),s=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&f(e,r,t[r]);return e},g=(e,t)=>{var r={};for(var o in e)d.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&u)for(var o of u(e))0>t.indexOf(o)&&p.call(e,o)&&(r[o]=e[o]);return r};let b={size:"md",transitionDuration:300},y=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Burger",b,e),{className:a,opened:l,color:s,size:u,classNames:d,styles:p,transitionDuration:f}=r,y=g(r,["className","opened","color","size","classNames","styles","transitionDuration"]),{classes:v,cx:h}=i({color:s,size:u,transitionDuration:f},{classNames:d,styles:p,name:"Burger"});return o.createElement(c.k,m({className:h(v.root,a),ref:t},y),o.createElement("div",{"data-opened":l||void 0,className:v.burger}))});y.displayName="@mantine/core/Burger"},2445:function(e,t,r){"use strict";r.d(t,{W:function(){return g}});var o=r(7294),n=r(8495),a=(0,r(6817).k)((e,{fluid:t,size:r,sizes:o})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:t?"100%":e.fn.size({size:r,sizes:o}),marginLeft:"auto",marginRight:"auto"}})),l=r(4523),i=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&d(e,r,t[r]);return e},f=(e,t)=>{var r={};for(var o in e)s.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>t.indexOf(o)&&u.call(e,o)&&(r[o]=e[o]);return r};let m={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},g=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Container",m,e),{className:i,fluid:c,size:s,unstyled:u,sizes:d}=r,g=f(r,["className","fluid","size","unstyled","sizes"]),{classes:b,cx:y}=a({fluid:c,size:s,sizes:d},{unstyled:u,name:"Container"});return o.createElement(l.x,p({className:y(b.root,i),ref:t},g))});g.displayName="@mantine/core/Container"},9876:function(e,t,r){"use strict";r.d(t,{k:function(){return w}});var o=r(7294),n=r(8495),a=r(7818);let l={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"default",property:"alignItems"},justify:{type:"default",property:"justifyContent"},wrap:{type:"default",property:"flexWrap"},direction:{type:"default",property:"flexDirection"}};var i=r(4523),c=r(1686),s=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&g(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&g(e,r,t[r]);return e},y=(e,t)=>u(e,d(t)),v=(e,t)=>{var r={};for(var o in e)f.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&p)for(var o of p(e))0>t.indexOf(o)&&m.call(e,o)&&(r[o]=e[o]);return r};let h={},w=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Flex",h,e),{gap:s,rowGap:u,columnGap:d,align:p,justify:f,wrap:m,direction:g,sx:w}=r,O=v(r,["gap","rowGap","columnGap","align","justify","wrap","direction","sx"]);return o.createElement(i.x,y(b({},O),{sx:[{display:"flex"},e=>(0,c.M)({gap:s,rowGap:u,columnGap:d,align:p,justify:f,wrap:m,direction:g},e,l),...(0,a.R)(w)],ref:t}))});w.displayName="@mantine/core/Flex"},6991:function(e,t,r){"use strict";r.d(t,{v:function(){return eF}});var o=r(7294),n=r(8523),a=r(5851),l=r(7048),i=r(8495),c=r(8216);let s={context:"Menu component was not found in the tree",children:"Menu.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"},[u,d]=(0,c.R)(s.context);var p=r(6817),f=(0,p.k)(e=>({divider:{margin:`calc(${e.spacing.xs}px / 2) -5px`,borderTop:`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]}`}})),m=r(4523),g=Object.defineProperty,b=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&h(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&h(e,r,t[r]);return e},O=(e,t)=>{var r={};for(var o in e)y.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&b)for(var o of b(e))0>t.indexOf(o)&&v.call(e,o)&&(r[o]=e[o]);return r};let x={},j=(0,o.forwardRef)((e,t)=>{let r=(0,i.N4)("MenuDivider",x,e),{children:n,className:a}=r,l=O(r,["children","className"]),{classNames:c,styles:s,unstyled:u}=d(),{classes:p,cx:g}=f(null,{name:"Menu",classNames:c,styles:s,unstyled:u});return o.createElement(m.x,w({className:g(p.divider,a),ref:t},l))});function k(e,t){return r=>{null==e||e(r),null==t||t(r)}}j.displayName="@mantine/core/MenuDivider";var E=r(5944),P=Object.defineProperty,S=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&C(e,r,t[r]);if(S)for(var r of S(t))I.call(t,r)&&C(e,r,t[r]);return e},M=(e,t)=>{var r={};for(var o in e)D.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&S)for(var o of S(e))0>t.indexOf(o)&&I.call(e,o)&&(r[o]=e[o]);return r};let R={};function z(e){let t=(0,i.N4)("MenuDropdown",R,e),{children:r,onMouseEnter:n,onMouseLeave:a}=t,l=M(t,["children","onMouseEnter","onMouseLeave"]),c=(0,o.useRef)(),s=d(),u=e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),c.current.querySelectorAll("[data-menu-item]")[0].focus())},p=k(n,()=>"hover"===s.trigger&&s.openDropdown()),f=k(a,()=>"hover"===s.trigger&&s.closeDropdown());return o.createElement(E.J.Dropdown,N({onMouseEnter:p,onMouseLeave:f,role:"menu","aria-orientation":"vertical"},l),o.createElement("div",{tabIndex:-1,"data-menu-dropdown":!0,"data-autofocus":!0,onKeyDown:u,ref:c,style:{outline:0}},r))}z.displayName="@mantine/core/MenuDropdown";var _=r(6650),L=r(8427),A=r(4731),T=Object.defineProperty,$=Object.defineProperties,F=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,H=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&q(e,r,t[r]);if(W)for(var r of W(t))G.call(t,r)&&q(e,r,t[r]);return e},J=(e,t)=>$(e,F(t)),U=(0,p.k)((e,{color:t,radius:r})=>({item:J(H({},e.fn.fontStyles()),{WebkitTapHighlightColor:"transparent",fontSize:e.fontSizes.sm,border:0,backgroundColor:"transparent",outline:0,width:"100%",textAlign:"left",textDecoration:"none",boxSizing:"border-box",padding:`${e.spacing.xs}px ${e.spacing.sm}px`,cursor:"pointer",borderRadius:e.fn.radius(r),color:t?e.fn.variant({variant:"filled",primaryFallback:!1,color:t}).background:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"flex",alignItems:"center","&:disabled":{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5],pointerEvents:"none",userSelect:"none"},"&[data-hovered]":{backgroundColor:t?e.fn.variant({variant:"light",color:t}).background:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[3],.35):e.colors.gray[1]}}),itemLabel:{flex:1},itemIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:e.spacing.xs},itemRightSection:{}})),V=Object.defineProperty,K=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,ee=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,et=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&ee(e,r,t[r]);if(Y)for(var r of Y(t))X.call(t,r)&&ee(e,r,t[r]);return e},er=(e,t)=>K(e,Z(t)),eo=(e,t)=>{var r={};for(var o in e)Q.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&Y)for(var o of Y(e))0>t.indexOf(o)&&X.call(e,o)&&(r[o]=e[o]);return r};let en={},ea=(0,o.forwardRef)((e,t)=>{let r=(0,i.N4)("MenuItem",en,e),{children:n,className:a,color:l,closeMenuOnClick:c,icon:s,rightSection:u}=r,p=eo(r,["children","className","color","closeMenuOnClick","icon","rightSection"]),f=d(),{classes:g,cx:b,theme:y}=U({radius:f.radius,color:l},{name:"Menu",classNames:f.classNames,styles:f.styles,unstyled:f.unstyled}),v=(0,o.useRef)(),h=f.getItemIndex(v.current),w=k(p.onMouseLeave,()=>f.setHovered(-1)),O=k(p.onMouseEnter,()=>f.setHovered(f.getItemIndex(v.current))),x=k(p.onClick,()=>{"boolean"==typeof c?c&&f.closeDropdownImmediately():f.closeOnItemClick&&f.closeDropdownImmediately()}),j=k(p.onFocus,()=>f.setHovered(f.getItemIndex(v.current)));return o.createElement(m.x,er(et({component:"button",type:"button"},p),{tabIndex:-1,onFocus:j,className:b(g.item,a),ref:(0,A.Y)(v,t),role:"menuitem","data-menu-item":!0,"data-hovered":f.hovered===h||void 0,onMouseEnter:O,onMouseLeave:w,onClick:x,onKeyDown:(0,_.R)({siblingSelector:"[data-menu-item]",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:f.loop,dir:y.dir,orientation:"vertical",onKeyDown:p.onKeydown})}),s&&o.createElement("div",{className:g.itemIcon},s),n&&o.createElement("div",{className:g.itemLabel},n),u&&o.createElement("div",{className:g.itemRightSection},u))});ea.displayName="@mantine/core/MenuItem";let el=(0,L.F)(ea);var ei=(0,p.k)(e=>({label:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],fontWeight:500,fontSize:e.fontSizes.xs,padding:`calc(${e.spacing.xs}px / 2) ${e.spacing.sm}px`,cursor:"default"}})),ec=r(5117),es=Object.defineProperty,eu=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,ep=Object.prototype.propertyIsEnumerable,ef=(e,t,r)=>t in e?es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,em=(e,t)=>{for(var r in t||(t={}))ed.call(t,r)&&ef(e,r,t[r]);if(eu)for(var r of eu(t))ep.call(t,r)&&ef(e,r,t[r]);return e},eg=(e,t)=>{var r={};for(var o in e)ed.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&eu)for(var o of eu(e))0>t.indexOf(o)&&ep.call(e,o)&&(r[o]=e[o]);return r};let eb={},ey=(0,o.forwardRef)((e,t)=>{let r=(0,i.N4)("MenuLabel",eb,e),{children:n,className:a}=r,l=eg(r,["children","className"]),{classNames:c,styles:s,unstyled:u}=d(),{classes:p,cx:f}=ei(null,{name:"Menu",classNames:c,styles:s,unstyled:u});return o.createElement(ec.x,em({className:f(p.label,a),ref:t},l),n)});ey.displayName="@mantine/core/MenuLabel";var ev=r(4241),eh=Object.defineProperty,ew=Object.getOwnPropertySymbols,eO=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,ej=(e,t,r)=>t in e?eh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ek=(e,t)=>{for(var r in t||(t={}))eO.call(t,r)&&ej(e,r,t[r]);if(ew)for(var r of ew(t))ex.call(t,r)&&ej(e,r,t[r]);return e},eE=(e,t)=>{var r={};for(var o in e)eO.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&ew)for(var o of ew(e))0>t.indexOf(o)&&ex.call(e,o)&&(r[o]=e[o]);return r};let eP={refProp:"ref"},eS=(0,o.forwardRef)((e,t)=>{let r=(0,i.N4)("MenuTarget",eP,e),{children:n,refProp:a}=r,l=eE(r,["children","refProp"]);if(!(0,ev.k)(n))throw Error(s.children);let c=d(),u=k(n.props.onClick,()=>"click"===c.trigger&&c.toggleDropdown()),p=k(n.props.onMouseEnter,()=>"hover"===c.trigger&&c.openDropdown()),f=k(n.props.onMouseLeave,()=>"hover"===c.trigger&&c.closeDropdown());return o.createElement(E.J.Target,ek({refProp:a,popupType:"menu",ref:t},l),(0,o.cloneElement)(n,{onClick:u,onMouseEnter:p,onMouseLeave:f,"data-expanded":!!c.opened||void 0}))});eS.displayName="@mantine/core/MenuTarget";var eD=(0,p.k)({dropdown:{padding:4}}),eI=Object.defineProperty,eC=Object.defineProperties,eN=Object.getOwnPropertyDescriptors,eM=Object.getOwnPropertySymbols,eR=Object.prototype.hasOwnProperty,ez=Object.prototype.propertyIsEnumerable,e_=(e,t,r)=>t in e?eI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eL=(e,t)=>{for(var r in t||(t={}))eR.call(t,r)&&e_(e,r,t[r]);if(eM)for(var r of eM(t))ez.call(t,r)&&e_(e,r,t[r]);return e},eA=(e,t)=>eC(e,eN(t)),eT=(e,t)=>{var r={};for(var o in e)eR.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&eM)for(var o of eM(e))0>t.indexOf(o)&&ez.call(e,o)&&(r[o]=e[o]);return r};let e$={closeOnItemClick:!0,loop:!0,trigger:"click",openDelay:0,closeDelay:100};function eF(e){let t=(0,i.N4)("Menu",e$,e),{children:r,onOpen:c,onClose:s,opened:d,defaultOpened:p,onChange:f,closeOnItemClick:m,loop:g,closeOnEscape:b,trigger:y,openDelay:v,closeDelay:h,classNames:w,styles:O,unstyled:x,radius:j}=t,k=eT(t,["children","onOpen","onClose","opened","defaultOpened","onChange","closeOnItemClick","loop","closeOnEscape","trigger","openDelay","closeDelay","classNames","styles","unstyled","radius"]),{classes:P,cx:S}=eD(),[D,{setHovered:I,resetHovered:C}]=function(){let[e,t]=(0,o.useState)(-1),r=()=>t(-1);return[e,{setHovered:t,resetHovered:r}]}(),[N,M]=(0,a.C)({value:d,defaultValue:p,finalValue:!1,onChange:f}),R=()=>{M(!1),N&&(null==s||s())},z=()=>{M(!0),N||null==c||c()},_=()=>N?R():z(),{openDropdown:L,closeDropdown:A}=function({open:e,close:t,openDelay:r,closeDelay:n}){let a=(0,o.useRef)(-1),l=(0,o.useRef)(-1),i=()=>{window.clearTimeout(a.current),window.clearTimeout(l.current)},c=()=>{i(),0===r?e():a.current=window.setTimeout(e,r)},s=()=>{i(),0===n?t():l.current=window.setTimeout(t,n)};return(0,o.useEffect)(()=>i,[]),{openDropdown:c,closeDropdown:s}}({open:z,close:R,closeDelay:h,openDelay:v}),T=e=>{var t;return e?Array.from((null==(t=(0,n.p)(e,"[data-menu-dropdown]"))?void 0:t.querySelectorAll("[data-menu-item]"))||[]).findIndex(t=>t===e):null};return(0,l.l)(()=>{C()},[N]),o.createElement(u,{value:{opened:N,toggleDropdown:_,getItemIndex:T,hovered:D,setHovered:I,closeOnItemClick:m,closeDropdown:"click"===y?R:A,openDropdown:"click"===y?z:L,closeDropdownImmediately:R,loop:g,trigger:y,radius:j,classNames:w,styles:O,unstyled:x}},o.createElement(E.J,eA(eL({},k),{radius:j,opened:N,onChange:M,defaultOpened:p,trapFocus:"click"===y,closeOnEscape:b&&"click"===y,__staticSelector:"Menu",classNames:eA(eL({},w),{dropdown:S(P.dropdown,null==w?void 0:w.dropdown)}),styles:O,unstyled:x,onClose:R,onOpen:z}),r))}eF.displayName="@mantine/core/Menu",eF.Item=el,eF.Label=ey,eF.Dropdown=z,eF.Target=eS,eF.Divider=j},6650:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});var o=r(8523);function n({parentSelector:e,siblingSelector:t,onKeyDown:r,loop:n=!0,activateOnFocus:a=!1,dir:l="rtl",orientation:i}){return c=>{var s;null==r||r(c);let u=Array.from((null==(s=(0,o.p)(c.currentTarget,e))?void 0:s.querySelectorAll(t))||[]).filter(t=>{var r;return r=c.currentTarget,(0,o.p)(r,e)===(0,o.p)(t,e)}),d=u.findIndex(e=>c.currentTarget===e),p=function(e,t,r){for(let o=e+1;o<t.length;o+=1)if(!t[o].disabled)return o;if(r){for(let n=0;n<t.length;n+=1)if(!t[n].disabled)return n}return e}(d,u,n),f=function(e,t,r){for(let o=e-1;o>=0;o-=1)if(!t[o].disabled)return o;if(r){for(let n=t.length-1;n>-1;n-=1)if(!t[n].disabled)return n}return e}(d,u,n),m="rtl"===l?f:p,g="rtl"===l?p:f;switch(c.key){case"ArrowRight":"horizontal"===i&&(c.stopPropagation(),c.preventDefault(),u[m].focus(),a&&u[m].click());break;case"ArrowLeft":"horizontal"===i&&(c.stopPropagation(),c.preventDefault(),u[g].focus(),a&&u[g].click());break;case"ArrowUp":"vertical"===i&&(c.stopPropagation(),c.preventDefault(),u[f].focus(),a&&u[f].click());break;case"ArrowDown":"vertical"===i&&(c.stopPropagation(),c.preventDefault(),u[p].focus(),a&&u[p].click());break;case"Home":c.stopPropagation(),c.preventDefault(),u[0].disabled||u[0].focus();break;case"End":{c.stopPropagation(),c.preventDefault();let b=u.length-1;u[b].disabled||u[b].focus()}}}}},8523:function(e,t,r){"use strict";function o(e,t){let r=e;for(;(r=r.parentElement)&&!r.matches(t););return r}r.d(t,{p:function(){return o}})},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return u.ImageLoaderProps}}),t.default=function(e){let t,r;var n,{src:a,sizes:b,unoptimized:v=!1,priority:h=!1,loading:w,className:O,quality:x,width:j,height:k,fill:E,style:P,onLoad:S,onLoadingComplete:D,placeholder:I="empty",blurDataURL:C,layout:N,objectFit:M,objectPosition:R,lazyBoundary:z,lazyRoot:_}=e,L=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=i.useContext(d.ImageConfigContext),T=i.useMemo(()=>{let e=f||A||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:r})},[A]),$=L,F=$.loader||p.default;if(delete $.loader,"__next_img_default"in F){if("custom"===T.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=F;F=e=>{let{config:t}=e,r=l(e,["config"]);return W(r)}}if(N){"fill"===N&&(E=!0);let B={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];B&&(P=o({},P,B));let G={responsive:"100vw",fill:"100vw"}[N];G&&!b&&(b=G)}let q="",H=g(j),J=g(k);if("object"==typeof(n=a)&&(m(n)||void 0!==n.src)){let U=m(a)?a.default:a;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,r=U.blurHeight,C=C||U.blurDataURL,q=U.src,!E){if(H||J){if(H&&!J){let V=H/U.width;J=Math.round(U.height*V)}else if(!H&&J){let K=J/U.height;H=Math.round(U.width*K)}}else H=U.width,J=U.height}}let Z=!h&&("lazy"===w||void 0===w);((a="string"==typeof a?a:q).startsWith("data:")||a.startsWith("blob:"))&&(v=!0,Z=!1),T.unoptimized&&(v=!0);let[Y,Q]=i.useState(!1),[X,ee]=i.useState(!1),et=g(x),er=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},X?{}:{color:"transparent"},P),eo="blur"===I&&C&&!Y?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:H,heightInt:J,blurWidth:t,blurHeight:r,blurDataURL:C}),'")')}:{},en=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:a,sizes:l,loader:i}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:s}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let a=/(^|\s)(1?\d?\d)vw/g,l=[];for(let i;i=a.exec(r);i)l.push(parseInt(i[2]));if(l.length){let c=.01*Math.min(...l);return{widths:n.filter(e=>e>=o[0]*c),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,l),u=c.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:c.map((e,o)=>"".concat(i({config:t,src:r,quality:a,width:e})," ").concat("w"===s?e:o+1).concat(s)).join(", "),src:i({config:t,src:r,quality:a,width:c[u]})}}({config:T,src:a,unoptimized:v,width:H,quality:et,sizes:b,loader:F}),ea=a,el={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:$.crossOrigin},ei=i.useRef(S);i.useEffect(()=>{ei.current=S},[S]);let ec=i.useRef(D);i.useEffect(()=>{ec.current=D},[D]);let es=o({isLazy:Z,imgAttributes:en,heightInt:J,widthInt:H,qualityInt:et,className:O,imgStyle:er,blurStyle:eo,loading:w,config:T,fill:E,unoptimized:v,placeholder:I,loader:F,srcString:ea,onLoadRef:ei,onLoadingCompleteRef:ec,setBlurComplete:Q,setShowAltText:ee},$);return i.default.createElement(i.default.Fragment,null,i.default.createElement(y,Object.assign({},es)),h?i.default.createElement(c.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},el))):null)};var o=r(6495).Z,n=r(2648).Z,a=r(1598).Z,l=r(7273).Z,i=a(r(7294)),c=n(r(3121)),s=r(2675),u=r(139),d=r(8730);r(7238);var p=n(r(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function b(e,t,r,n,a,l,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&l(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,c=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>c,persist(){},preventDefault(){i=!0,t.preventDefault()},stopPropagation(){c=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let y=e=>{var{imgAttributes:t,heightInt:r,widthInt:n,qualityInt:a,className:c,imgStyle:s,blurStyle:u,isLazy:d,fill:p,placeholder:f,loading:m,srcString:g,config:y,unoptimized:v,loader:h,onLoadRef:w,onLoadingCompleteRef:O,setBlurComplete:x,setShowAltText:j,onLoad:k,onError:E}=e,P=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=d?"lazy":m,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},P,t,{width:n,height:r,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:m,style:o({},s,u),ref:i.useCallback(e=>{e&&(E&&(e.src=e.src),e.complete&&b(e,g,f,w,O,x,v))},[g,f,w,O,x,E,v]),onLoad(e){let t=e.currentTarget;b(t,g,f,w,O,x,v)},onError(e){j(!0),"blur"===f&&x(!0),E&&E(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:a}=e,l=o||t,i=n||r,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5675:function(e,t,r){e.exports=r(9749)}}]);