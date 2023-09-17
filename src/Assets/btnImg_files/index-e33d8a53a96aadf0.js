(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8290)}])},290:function(e,i,t){"use strict";var n=t(6224);i.Z={register:e=>n.b.post("/auth/register",e),requestDemo:e=>n.b.post("/request_demo",e),report:e=>n.b.post("/public/report",e)}},6224:function(e,i,t){"use strict";t.d(i,{L:function(){return l},b:function(){return r}});var n=t(1529),s=t(6154);let r=s.Z.create({baseURL:n.Z.baseURL});r.interceptors.request.use(function(e){let i=void 0===window?"":localStorage.getItem("access_token");return e.headers={...e.headers,Authorization:"Bearer ".concat(i)},e}),r.interceptors.response.use(function(e){return e.data},async function(e){var i;return(null==e?void 0:e.response)&&(null==e?void 0:null===(i=e.response)||void 0===i?void 0:i.data)?Promise.reject(e.response.data):Promise.reject({message:"Some unusual error occured, please try again"})});let l=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if((null==e?void 0:e.fields)&&(e=e.fields),!e)return"";if(i){let n=Object.keys(e||{});if(n.includes(i))return e[i]}return t&&(null==e?void 0:e.message)?null==e?void 0:e.message:""}},8290:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return eu}});var n=t(5893),s=t(7294),r=t(8327),l=t(4344),a=t(5771),o=t(7516),c=t(5117),m=t(9876),d=t(7841),x=t(4523),h=t(2445),u=t(917),p=t(6817);function g(){let{classes:e}=y();return(0,n.jsx)("div",{className:e.wrap,children:(0,n.jsx)("div",{className:e.box,children:(0,n.jsx)("div",{children:(0,n.jsxs)(r.Z,{aic:!0,mobileStyle:{display:"block"},children:[(0,n.jsx)(r.Z.Fr,{fR:3,className:"".concat(e.desktopImage," image"),children:(0,n.jsx)("img",{src:"/images/webcustomization.webp",style:{width:"100%"},alt:""})}),(0,n.jsx)(r.Z.Gap,{w:50}),(0,n.jsx)(r.Z.Fr,{fR:2,aS:"center",children:(0,n.jsxs)(x.x,{className:"content",children:[(0,n.jsxs)(c.x,{className:"section-title",color:"#913FFF",pb:"10px",children:[(0,n.jsx)("img",{src:"/svg/order_management_icon.svg ",style:{paddingRight:"10px"}}),"Sales & Analytics"]}),(0,n.jsx)(c.x,{className:"section-title",children:"Receive Orders directly from your website!"}),(0,n.jsx)(c.x,{className:"section-subtitle",mt:"sm",children:"Promote your website, Educate your customers. Trust me! Your Customers are smarter than you think!"})]})}),(0,n.jsx)(r.Z.Fr,{fR:3,className:e.mobileonlyImage,children:(0,n.jsx)("img",{src:"/images/mobile/analytics.webp",style:{width:"100%"},alt:""})})]})})})})}let y=(0,p.k)(e=>({wrap:{width:"1200px",maxWidth:"90vw",margin:"0 auto",marginBottom:"6rem",...o.ZP.mobileOnly({marginBottom:"4rem"})},mobileonlyImage:{...o.ZP.showOnMobileOnly},desktopImage:{...o.ZP.hideOnMobile},box:{".section-title":{fontWeight:600,fontSize:22,lineHeight:"140%"},...o.ZP.mobileOnly({".section-title":{fontSize:18,textAlign:"center"},".section-subtitle":{fontSize:12,textAlign:"center"},".content":{marginTop:0,marginBottom:30}})}}));var j=t(8763),b=t(4768),f=t(290),w=t(6224),v=t(6036),F=t(61),k=t(2615),S=t(8903),z=t(3991);function B(e){let{open:i,onClose:t}=e,[l,a]=(0,s.useState)(!1),o=(0,S.c)({initialValues:{name:"",phone_number:"",message:""},validate:{name:e=>b.U.required(e),phone_number:e=>b.U.phone(e)}}),m=async e=>{a(!0);try{await f.Z.requestDemo(e),o.reset(),null==t||t(),j.Z.succces("Success","Your request has been received, we will contact you as soon as possible")}catch(n){let i=(0,w.L)(n);i&&j.Z.error("Error",i)}a(!1)};return(0,n.jsxs)(v.u,{withCloseButton:!1,centered:!0,styles:{modal:{padding:"0px !important",borderRadius:6,position:"relative"}},size:"lg",opened:i,onClose:()=>null==t?void 0:t(),children:[(0,n.jsx)("div",{onClick:()=>null==t?void 0:t(),style:{width:24,height:24,borderRadius:24,background:"#fff",position:"absolute",right:-8,top:-8,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},children:(0,n.jsx)(z.kLi,{color:"#E20BC3",size:18,strokeWidth:3})}),(0,n.jsx)("form",{onSubmit:o.onSubmit(m),children:(0,n.jsxs)(x.x,{p:"lg",children:[(0,n.jsx)(c.x,{weight:600,mb:"xs",children:"Request a demo"}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(r.Z.Fr,{children:(0,n.jsx)(F.o,{styles:{error:{fontSize:10,marginBottom:8},description:{fontSize:10}},withAsterisk:!0,label:"Full Name",placeholder:"eg: Ram Bahadur",...o.getInputProps("name")})}),(0,n.jsx)(r.Z.Gap,{}),(0,n.jsx)(r.Z.Fr,{children:(0,n.jsx)(F.o,{styles:{error:{fontSize:10,marginBottom:8},description:{fontSize:10}},withAsterisk:!0,label:"Phone Number",placeholder:"eg: 9800000000",...o.getInputProps("phone_number")})})]}),(0,n.jsx)(k.g,{mt:"lg",styles:{error:{fontSize:10,marginBottom:8},description:{fontSize:10}},label:"Message",placeholder:"eg: anything you want us to know",...o.getInputProps("message")}),(0,n.jsx)(r.Z,{jcfe:!0,children:(0,n.jsx)(d.z,{type:"submit",loading:l,mt:"md",children:"Submit"})})]})})]})}var N=t(4065);function P(e){let{open:i,onClose:t}=e,s=(0,N.a)("(max-width: 767px)",!1);return(0,n.jsxs)(v.u,{withCloseButton:!1,centered:!0,closeOnClickOutside:!1,styles:{modal:{padding:"0px !important",borderRadius:12,position:"relative"},body:{marginBottom:-9}},size:s?"xl":"70%",opened:i,onClose(){},children:[(0,n.jsx)("div",{onClick:()=>null==t?void 0:t(),style:{width:24,height:24,borderRadius:24,background:"#fff",position:"absolute",right:-8,top:-8,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},children:(0,n.jsx)(z.kLi,{color:"#E20BC3",size:18,strokeWidth:3})}),(0,n.jsx)("iframe",{style:{width:"100%",height:s?440:"50vh",border:0,borderRadius:8},src:"https://www.youtube.com/embed/Ky-4p7qKoEw?autoplay=1",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})}var Z=t(9834),C=t(1885),R=t(8485),O=t(1664),W=t.n(O);let D={number:1,name:"Free",for:"For Learners",monthlyQuaterlyBilling:0,monthlyAnnuallylyBilling:0,features:["Upto 15 products","Basic Analytics","5 Basic Plugins","Order Management","Inventory Management","Basic Website Customization","Default Blanxer Website Theme"],buttonText:"Start for Free"},T={number:2,name:"Premium",for:"For Small Businesses and Influencers ",monthlyQuaterlyBilling:1167,monthlyAnnuallylyBilling:875,quaterlyBilling:3499,yearlybilling:10500,features:["Unlimited products","5 Staff Store","Custom Domain Integration","Website Customization","SMS Plugin","Online Payment Integration","Blanxer Pay","Website SEO","Customers Data Management","Bulk Upload & Media Manager","All available Plugin Integrations","Custom Favicon Icon","Customer Support","Discounts Codes (Releasing soon)","Advanced Analytics (Releasing soon)","Custom Checkout Fields (Releasing soon)","Product Reviews and Ratings (Releasing soon)"],buttonText:"Get Started"},A={number:3,name:"Platinum",for:"Big D2C Brands, and growing businesses",monthlyQuaterlyBilling:3267,monthlyAnnuallylyBilling:2450,quaterlyBilling:9800,yearlybilling:29400,features:["Everything in Premium","10 Staff Store account","1 Dedicated Expert for Store Management","99% website uptime guaranteed Customer Support "],buttonText:"Get Started"};function I(e){let{classes:i}=U({number:"".concat(e.tierlist.number)});return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(m.k,{className:"".concat(i.singleCol," ").concat(i.border),sx:{position:"relative",borderRadius:"1rem",width:"100%",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderTopRightRadius:"".concat(2===e.tierlist.number?"0px":""),borderTopLeftRadius:"".concat(2===e.tierlist.number?"0px":"")},direction:"column",px:"20px",py:"20px",gap:"2rem",children:[2===e.tierlist.number?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m.k,{py:"0.6rem",justify:"center",bg:"#8D28FF",sx:{position:"absolute",borderTopRightRadius:"18px",borderTopLeftRadius:"18px",top:"-45px",left:"-2px",right:"-2px"},children:(0,n.jsx)(c.x,{color:"white",fw:"600",transform:"capitalize",children:"Most Popular\uD83D\uDD25"})})}):"",(0,n.jsxs)(m.k,{direction:"column",h:"220px",w:"100%",justify:"space-between",children:[(0,n.jsxs)(m.k,{direction:"column",gap:"0.5rem",justify:"space-between",children:[(0,n.jsx)(c.x,{fw:"700",align:"center",children:e.tierlist.name}),(0,n.jsx)(c.x,{align:"center",children:e.tierlist.for}),e.yearly?(0,n.jsxs)(m.k,{align:"center",justify:"center",direction:"column",children:["Free"!=e.tierlist.name?(0,n.jsxs)(c.x,{color:"gray",td:"line-through",children:["NPR ",e.tierlist.monthlyQuaterlyBilling]}):"",(0,n.jsxs)(c.x,{fw:"700",fz:"2rem",children:["NPR ",e.tierlist.monthlyAnnuallylyBilling," /mo"]}),"Free"!=e.tierlist.name?(0,n.jsxs)(c.x,{children:["Rs ",e.tierlist.yearlybilling," Yearly Billing"]}):""]}):(0,n.jsxs)(m.k,{align:"center",justify:"center",direction:"column",children:[(0,n.jsxs)(c.x,{fw:"700",fz:"2rem",children:["NPR ",e.tierlist.monthlyQuaterlyBilling," /mo"]}),"Free"!=e.tierlist.name?(0,n.jsxs)(c.x,{children:["Rs ",e.tierlist.quaterlyBilling," Quarterly Billing"]}):""]})]}),(0,n.jsx)(m.k,{justify:"center",gap:"1rem",children:(0,n.jsx)(W(),{href:"/register",children:(0,n.jsx)(d.z,{radius:"xl",size:"md",children:(0,n.jsx)(c.x,{children:e.tierlist.buttonText})})})})]}),(0,n.jsx)(m.k,{direction:"column",gap:"0.5rem",justify:"start",align:"start",children:e.tierlist.features.map(e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(m.k,{columnGap:6,align:"center",children:[(0,n.jsx)(Z.A,{children:(0,n.jsx)(R.Z,{size:18,color:"#913FFF"})}),(0,n.jsx)(c.x,{size:14,children:e})]})}))})]})})}let _=()=>{let[e,i]=(0,s.useState)(!1),{classes:t}=U({number:"1"});return(0,n.jsx)("div",{id:"pricingcontainer",className:t.wrap,children:(0,n.jsxs)(m.k,{direction:"column",justify:"center",align:"center",children:[(0,n.jsxs)(m.k,{py:"2rem",direction:"column",gap:"1rem",sx:{maxWidth:"660px"},children:[(0,n.jsxs)(c.x,{fw:700,align:"center",className:t.tagline,children:["Premium plan for your business starting as low as"," ",(0,n.jsx)("span",{style:{color:"#913FFF"},children:"NPR 29/day"}),"."]}),(0,n.jsx)(c.x,{align:"center",children:"Save 25% on our yearly subscription as an early adopter with our discount offer"})]}),(0,n.jsxs)(m.k,{className:"".concat(t.yearlyEdit," ").concat(t.changeTime),align:"center",gap:"1rem",children:[(0,n.jsxs)(m.k,{direction:"column",align:"center",children:[(0,n.jsx)(c.x,{className:t.changeText,fz:"30px",fw:700,align:"center",children:"Quaterly"}),(0,n.jsx)(c.x,{children:"(3 months)"})]}),(0,n.jsx)(C.r,{checked:e,onChange:e=>i(e.currentTarget.checked),size:"xl"}),(0,n.jsxs)(m.k,{align:"center",className:t.yearly,gap:"xs",children:[(0,n.jsxs)(m.k,{direction:"column",align:"center",children:[(0,n.jsx)(c.x,{className:t.changeText,fz:"30px",fw:700,align:"center",children:"Yearly"}),(0,n.jsx)(c.x,{children:"(12 months)"})]}),(0,n.jsx)(m.k,{justify:"center",children:(0,n.jsx)(d.z,{variant:"outline",radius:"xl",children:(0,n.jsx)(c.x,{className:t.offerText,children:"25% OFF"})})})]})]}),(0,n.jsxs)(x.x,{className:t.block,sx:{width:"100%",display:"flex",paddingTop:"2rem",paddingBottom:"2rem",flexDirection:"column",gap:"2rem"},children:[(0,n.jsx)(I,{tierlist:D,yearly:e}),(0,n.jsx)(I,{tierlist:T,yearly:e}),(0,n.jsx)(I,{tierlist:A,yearly:e})]})]})})},U=(0,p.k)((e,i)=>{let{number:t}=i;return{offerText:{...o.ZP.mobileOnly({fontSize:"16px"})},yearly:{...o.ZP.mobileOnly({flexDirection:"column"})},changeText:{...o.ZP.mobileOnly({fontSize:"20px"})},changeTime:{paddingBottom:"4rem",...o.ZP.mobileOnly({paddingBottom:"0rem",gap:"0.9rem"})},wrap:{width:"1200px",maxWidth:"90vw",margin:"0 auto"},block:{"@media (min-width: 40em)":{display:"flex",flexDirection:"row",gap:"md",justify:"start",align:"center",wrap:"wrap"}},yearlyEdit:{"@media (min-width: 40em)":{display:"flex",flexDirection:"row"}},tagline:{fontSize:"36px",...o.ZP.mobileOnly({fontSize:"28px",fontWeight:600})},singleCol:{"@media (min-width: 60em)":{flexBasis:"33.33%"},...o.ZP.mobileOnly({marginBottom:"1"===t?"2rem":""})},border:{"@media (min-width: 40em)":{border:"2"===t?"2px solid #8D28FF":""}}}}),E=["Your business doesn’t have a website","You use excel or google sheet for order management","You’ll have to ask for payment to every customer manually","You don’t have Real time sales and revenue insights","Your customer won’t be able to track their orders"],M=["You can Build a Fully Functional e-commerce Website","Proper Order Management with SMS Order Confirmation & Tracking","You can receive Online Payments from your Website","You can track Real time sales and revenue insights","Your customer will be able to track their orders"],Y=()=>(0,n.jsx)("img",{src:"/wrong_emoji.svg",alt:""}),q=()=>(0,n.jsx)("img",{src:"/svg/right_emoji.svg",alt:""}),G=(0,p.k)(e=>({taglineContainer:{maxWidth:"900px"},tagline:{fontSize:"36px",...o.ZP.mobileOnly({fontSize:"28px",fontWeight:600})},block:{marginTop:"2rem",marginBottom:"2rem",["@media (min-width: ".concat(o.Il,"px)")]:{display:"flex",flexDirection:"row",gap:"1rem"},"@media (max-width: 40em)":{display:"flex",flexDirection:"column",gap:"2rem"}},singleCol:{"@media (min-width: 40em)":{width:"50%"},"@media (max-width: 40em)":{width:"100%"}}})),H=()=>{let{classes:e}=G();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(h.W,{id:"whycontainer",size:"xl",py:"4rem",sx:{width:"100%",margin:"auto",marginBottom:"1rem"},children:(0,n.jsxs)(m.k,{justify:"center",align:"center",direction:"column",children:[(0,n.jsx)(m.k,{justify:"center",py:"2rem",className:e.taglineContainer,children:(0,n.jsx)(c.x,{align:"center",fw:"700",className:e.tagline,children:"Why should you use Blanxer for your e-commerce business?"})}),(0,n.jsxs)(x.x,{className:e.block,children:[(0,n.jsx)(L,{bg:"#FFF6F6"}),(0,n.jsx)(Q,{bg:"#F4FFF4"})]})]})})})},L=e=>{let{classes:i}=G();return(0,n.jsxs)(h.W,{size:"lg",className:i.singleCol,sx:{display:"flex",padding:"1rem",background:e.bg,flexDirection:"column",borderRadius:"1rem",gap:"1.5rem"},children:[(0,n.jsx)(Z.A,{children:(0,n.jsx)(K,{})}),(0,n.jsx)(c.x,{fw:"700",fz:"1rem",children:"Without Blanxer.com,"}),(0,n.jsx)(m.k,{direction:"column",gap:"0.8rem",children:E.map(e=>(0,n.jsxs)(m.k,{children:[(0,n.jsx)(Z.A,{children:(0,n.jsx)(Y,{})}),(0,n.jsx)(c.x,{size:"md",children:e})]}))})]})},Q=e=>{let{classes:i}=G();return(0,n.jsxs)(h.W,{size:"lg",className:i.singleCol,sx:{display:"flex",padding:"1rem",background:e.bg,flexDirection:"column",borderRadius:"1rem",gap:"1.5rem"},children:[(0,n.jsx)(Z.A,{children:(0,n.jsx)(V,{})}),(0,n.jsx)(c.x,{fw:"700",fz:"1rem",children:"With Blanxer.com,"}),(0,n.jsx)(m.k,{direction:"column",gap:"0.8rem",children:M.map(e=>(0,n.jsxs)(m.k,{gap:"0.4rem",children:[(0,n.jsx)(Z.A,{children:(0,n.jsx)(q,{})}),(0,n.jsx)(c.x,{size:"md",children:e})]}))})]})};function V(){return(0,n.jsx)("img",{src:"/svg/happy_emoji.svg",alt:"happy_emoji"})}function K(){return(0,n.jsx)("img",{src:"/svg/sad_emoji.svg",alt:"sadEmoji"})}let X=()=>{let{classes:e}=$();return(0,n.jsx)("div",{className:e.wrap,children:(0,n.jsx)("div",{className:e.box,children:(0,n.jsxs)(r.Z,{aic:!0,mobileStyle:{display:"block"},children:[(0,n.jsx)(r.Z.Fr,{className:e.desktopImage,fR:3,children:(0,n.jsx)("img",{src:"/images/Editor.webp",style:{width:"100%"},alt:""})}),(0,n.jsx)(r.Z.Gap,{w:50}),(0,n.jsx)(r.Z.Fr,{aS:"center",fR:2,children:(0,n.jsxs)(x.x,{className:"content",children:[(0,n.jsxs)(c.x,{className:"section-title",color:"#913FFF",pb:"10px",children:[(0,n.jsx)("img",{src:"/svg/order_management_icon.svg ",style:{paddingRight:"10px"}}),"Website Customization"]}),(0,n.jsx)(c.x,{className:"section-title",children:"Customize your website how ever you want."}),(0,n.jsx)(c.x,{className:"section-subtitle",mt:"sm",children:"Impress us with your web design skills and make us shine brighter than a brand new pair of shoes! \uD83E\uDD79"})]})}),(0,n.jsx)(r.Z.Fr,{className:e.mobileonlyImage,fR:3,children:(0,n.jsx)("img",{src:"/svg/mobile/editor.svg",style:{width:"100%"},alt:""})})]})})})},$=(0,p.k)(e=>({wrap:{width:"1200px",maxWidth:"90vw",margin:"0 auto",marginBottom:"6rem",...o.ZP.mobileOnly({marginBottom:"4rem"})},mobileonlyImage:{...o.ZP.showOnMobileOnly},desktopImage:{...o.ZP.hideOnMobile},box:{".section-title":{fontWeight:600,fontSize:22,lineHeight:"140%"},...o.ZP.mobileOnly({".section-title":{fontSize:18,textAlign:"center"},".section-subtitle":{fontSize:12,textAlign:"center"},".content":{marginTop:30,marginBottom:30}})}}));var J=t(442);function ee(){let{classes:e}=ei();return(0,n.jsx)("div",{className:e.wrap,children:(0,n.jsx)("div",{className:e.box,children:(0,n.jsxs)(r.Z,{aic:!0,mobileStyle:{display:"block"},children:[(0,n.jsx)(r.Z.Fr,{fR:2,aS:"center",children:(0,n.jsxs)(x.x,{className:"content",children:[(0,n.jsxs)(c.x,{className:"section-title",color:"#913FFF",pb:"10px",children:[(0,n.jsx)("img",{src:"/svg/order_management_icon.svg ",style:{paddingRight:"10px"}}),"Domain Name"]}),(0,n.jsx)(c.x,{className:"section-title",children:"Connect your Own Domain!"}),(0,n.jsx)(c.x,{className:"section-subtitle",mt:"sm",children:"Your website is like a house, and your domain is the address. If you didn’t get it."}),(0,n.jsxs)(c.x,{fw:"600",className:"section-subtitle",mt:"sm",children:["Go do some ",(0,n.jsx)("span",{style:{color:"#913FFF"},children:"Research"}),"\uD83D\uDE1C"]})]})}),(0,n.jsx)(r.Z.Gap,{w:50}),(0,n.jsx)(r.Z.Fr,{fR:3,style:{width:"120%"},children:(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{media:"(min-width: 1060px)",srcSet:"/images/domain.webp"}),(0,n.jsx)("source",{srcSet:"/svg/mobile/domain.svg"}),(0,n.jsx)("img",{className:"laptop",src:"/images/domain.webp",alt:"",width:"100%"})]})})]})})})}let ei=(0,p.k)(e=>({wrap:{width:"1200px",maxWidth:"90vw",margin:"0 auto",marginBottom:"4em",...o.ZP.mobileOnly({marginBottom:"4rem"})},box:{".section-title":{fontWeight:600,fontSize:22,lineHeight:"140%"},...o.ZP.mobileOnly({".section-title":{fontSize:18,textAlign:"center"},".section-subtitle":{fontSize:12,textAlign:"center"},".content":{}})}})),et=()=>{let{classes:e}=en();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:e.wrap,id:"featurescontainer",children:[(0,n.jsx)(c.x,{className:e.tagline,fw:"700",align:"center",children:"We have Everything you need!"}),(0,n.jsx)("div",{className:e.box,children:(0,n.jsxs)(r.Z,{aic:!0,mobileStyle:{display:"block"},children:[(0,n.jsx)(r.Z.Fr,{aS:"center",fR:2,children:(0,n.jsxs)(x.x,{className:"content",children:[(0,n.jsxs)(c.x,{className:"section-title",color:"#913FFF",pb:"10px",children:[(0,n.jsx)("img",{src:"/svg/ResponseTimeIcon.svg ",style:{paddingRight:"10px"}}),"Super Fast Response Time"]}),(0,n.jsx)(c.x,{className:"section-title",children:"Blanxer is all about speed and performance."}),(0,n.jsx)(c.x,{className:"section-subtitle",mt:"sm",children:"Seeing your website performance will make your jaw drop and your eyes pop!\uD83D\uDE80"})]})}),(0,n.jsx)(r.Z.Gap,{w:50}),(0,n.jsx)(r.Z.Fr,{fR:3,children:(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{media:"(min-width: 1060px)",srcSet:"/images/Response.webp"}),(0,n.jsx)("source",{srcSet:"/svg/mobile/response.svg"}),(0,n.jsx)("img",{style:{width:"100%"},src:"/images/Response.webp",alt:""})]})})]})})]})})},en=(0,p.k)(e=>({tagline:{fontSize:"36px",marginBottom:"6rem",...o.ZP.mobileOnly({marginBottom:"3rem",fontSize:"28px",fontWeight:600})},wrap:{width:"1200px",maxWidth:"90vw",margin:"0 auto",marginBottom:"6rem",...o.ZP.mobileOnly({marginBottom:"0rem"})},box:{".section-title":{fontWeight:600,fontSize:22,lineHeight:"140%"},...o.ZP.mobileOnly({".section-title":{fontSize:18,textAlign:"center"},".section-subtitle":{fontSize:12,textAlign:"center"},".content":{marginTop:30,marginBottom:30}})}})),es=()=>{let{classes:e}=er();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:e.wrap,children:(0,n.jsx)("div",{className:e.box,children:(0,n.jsxs)(r.Z,{aic:!0,mobileStyle:{display:"block"},children:[(0,n.jsx)(r.Z.Fr,{aS:"center",fR:2,children:(0,n.jsxs)(x.x,{className:"content",children:[(0,n.jsxs)(c.x,{className:"section-title",color:"#913FFF",pb:"10px",children:[(0,n.jsx)("img",{src:"/svg/order_management_icon.svg ",style:{paddingRight:"10px"}}),"Online Payment"]}),(0,n.jsx)(c.x,{className:"section-title",children:"Online Payment Gateway Integration"}),(0,n.jsx)(c.x,{className:"section-subtitle",mt:"sm",children:"Integrate your own payment gateways and receive payment directly through your website."})]})}),(0,n.jsx)(r.Z.Gap,{w:50}),(0,n.jsx)(r.Z.Fr,{fR:3,children:(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{media:"(min-width: 1060px)",srcSet:"/images/online_payment.webp"}),(0,n.jsx)("source",{srcSet:"/svg/mobile/onlinepayment.svg"}),(0,n.jsx)("img",{src:"/images/online_payment.webp",alt:"",width:"100%"})]})})]})})})})},er=(0,p.k)(e=>({wrap:{width:"1200px",maxWidth:"90vw",margin:"0 auto",marginBottom:"6rem",...o.ZP.mobileOnly({marginBottom:"4rem"})},box:{".section-title":{fontWeight:600,fontSize:22,lineHeight:"140%"},...o.ZP.mobileOnly({".section-title":{fontSize:18,textAlign:"center"},".section-subtitle":{fontSize:12,textAlign:"center"},".content":{marginTop:30,marginBottom:30}})}}));var el=t(4418);let ea=(0,p.k)(e=>({main:{},button:{...o.ZP.mobileOnly({height:"42px"})}}));function eo(){let{classes:e}=ea();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{id:"faqcontainer",className:e.main,children:(0,n.jsxs)(h.W,{py:"2rem",children:[(0,n.jsxs)(m.k,{direction:"column",justify:"center",align:"center",py:"2rem",children:[(0,n.jsx)(c.x,{fw:"700",fz:"2rem",children:"FAQs"}),(0,n.jsx)(c.x,{align:"center",children:"Hi, if you have any questions not answered in the FAQ, please email us at"}),(0,n.jsx)(c.x,{align:"center",color:"#237BFF",children:"contact@blanxer.com"})]}),(0,n.jsxs)(el.U,{variant:"separated",defaultValue:"customization",disableChevronRotation:!0,children:[(0,n.jsxs)(el.U.Item,{value:"upgrade",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsx)(c.x,{fw:"500",fz:"1rem",children:"Can I upgrade my plan later on?"})}),(0,n.jsxs)(el.U.Panel,{children:["Yes, you can choose to upgrade your Blanxer plan by going to the Account details section in Blanxer. You can upgrade your existing plan to the Premium or Platinum for the desired duration.",(0,n.jsx)("br",{}),"You can also reach out to us on support@blanxer.com if you need any help with this."]})]}),(0,n.jsxs)(el.U.Item,{value:"domain",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsx)(c.x,{fw:"500",fz:"1rem",children:"Can I use my own domain with Blanxer?"})}),(0,n.jsx)(el.U.Panel,{children:"Yes, you can connect your domain name with Blanxer. If you don’t have a custom domain yet, You can purchase premium domain names by paying additional fees seamlessly connect it with your store."})]}),(0,n.jsxs)(el.U.Item,{value:"payments",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsx)(c.x,{fw:"500",fz:"1rem",children:"Can I accept online payments?"})}),(0,n.jsx)(el.U.Panel,{children:"Yes, you can accept online payments from your customers with Blanxer Pay. Blanxer also allows you to integrate with other payment providers."})]}),(0,n.jsxs)(el.U.Item,{value:"blnaxer-pay",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsx)(c.x,{fw:"500",fz:"1rem",children:"What is Blanxer Pay?"})}),(0,n.jsx)(el.U.Panel,{children:"With Blanxer Pay, you can start accepting online payments in seconds. We offer multiple payment methods for your customers, such as Fonepay, eSewa, and CyberSource. After your customers make a payment, we receive it and settle with you within 24 hours."})]}),(0,n.jsxs)(el.U.Item,{value:"payment-service",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsx)(c.x,{fw:"500",fz:"1rem",children:"What is the payment service fee for using Blanxer Pay to receive customer payments?"})}),(0,n.jsx)(el.U.Panel,{children:"If you use Blanxer Pay to receive payments from customers, there will be a 3% flat payment service fee charged by Blanxer. The remaining amount received will be deposited into your bank account."})]}),(0,n.jsxs)(el.U.Item,{value:"merchant",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsx)(c.x,{fw:"500",fz:"1rem",children:"Can I use my own Merchant Key for eSewa and Fonepay?"})}),(0,n.jsx)(el.U.Panel,{children:"Yes, you can use your own key and receive payments directly to your company bank account. If you want to use your own merchant key, simply add it in the payment method field during the setup process."})]}),(0,n.jsxs)(el.U.Item,{value:"subscription",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsxs)(c.x,{fw:"500",fz:"1rem",children:[" ","What happens once the subscription plan ends?"]})}),(0,n.jsx)(el.U.Panel,{children:"Your premium version will be reverted to the free version, and all the changes you made while using the premium version will be saved. Therefore, when you pay to upgrade again, you will be able to resume the premium version from where you left off."})]}),(0,n.jsxs)(el.U.Item,{value:"SMS-order",bg:"white",children:[(0,n.jsx)(el.U.Control,{children:(0,n.jsxs)(c.x,{fw:"500",fz:"1rem",children:[" ","What does SMS Order Conformation with tracking link Integration mean?"]})}),(0,n.jsx)(el.U.Panel,{children:"When a customer orders a product from your website, they will receive a confirmation text message containing a tracking link. The link will allow them to track their order status and find out whether their product has been dispatched or not."})]})]}),(0,n.jsx)(m.k,{justify:"center",pt:"2rem",children:(0,n.jsx)(W(),{href:"/faq",children:(0,n.jsx)(d.z,{className:e.button,px:"2rem",radius:"xl",sx:{height:"60px"},variant:"filled",children:"Show More"})})})]})})})}let ec=(0,p.k)(e=>({tagline:{...o.ZP.mobileOnly({fontSize:"28px",fontWeight:600})}})),em=()=>{let{classes:e}=ec();return(0,n.jsxs)(x.x,{className:"wrap",children:[(0,n.jsxs)(c.x,{align:"center",fw:"700",color:"#000000",fz:"36px",className:e.tagline,children:["Some of the Coolest Websites ",(0,n.jsx)("br",{}),"built with Blanxer"]}),(0,n.jsx)(c.x,{my:"xs",color:"#9B1DFF",align:"center",children:"Design a cool website and tag us on socials to get featured here!"}),(0,n.jsxs)(x.x,{sx:{marginTop:36,marginBottom:24,display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[(0,n.jsx)("a",{href:"https://equiper.com.np",target:"_blank",rel:"noreferrer noopeaner",children:(0,n.jsx)("img",{style:{width:"100%"},src:"https://blanxer.s3.ap-south-1.amazonaws.com/files/website/1.png",alt:""})}),(0,n.jsx)("a",{href:"https://ingconepal.com",target:"_blank",rel:"noreferrer noopeaner",children:(0,n.jsx)("img",{style:{width:"100%"},src:"https://blanxer.s3.ap-south-1.amazonaws.com/files/website/2.png",alt:""})}),(0,n.jsx)("a",{href:"https://nouranepal.com",target:"_blank",rel:"noreferrer noopeaner",children:(0,n.jsx)("img",{style:{width:"100%"},src:"https://blanxer.s3.ap-south-1.amazonaws.com/files/website/3.png",alt:""})})]})]})},ed=(0,u.F4)({"from, 0%, 100%, to":{top:0},"20%":{top:0},"25%":{top:"-50px"},"40%":{top:"-50px"},"50%":{top:"-100px"},"70%":{top:"-100px"},"75%":{top:"-150px"},"95%":{top:"-150px"}}),ex=(0,p.k)(e=>({main:{},inner:{border:"0px solid #ddd",height:"50px",lineHeight:"50px",fontSize:"50px",textTransform:"uppercase",overflow:"hidden",...o.ZP.mobileOnly({fontSize:"36px"})},innerspan:{position:"relative",animation:"".concat(ed," 10s infinite ease")},domainSection:{marginTop:64,".desktop":{...o.ZP.hideOnMobile},".mobile":{...o.ZP.showOnMobileOnly}},gradientText:{background:"linear-gradient(93.01deg, #FF5872 6.02%, #E20BC3 51.25%, #883FFF 94.63%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},hero:{marginTop:24,color:"#454545",".tagline":{fontSize:60,fontWeight:600,textAlign:"center","&.second":{marginTop:44},...o.ZP.mobileOnly({fontSize:35,"&.second":{fontSize:20}})},".tagdesc":{fontWeight:400,textAlign:"center",maxWidth:800,margin:"12px auto",...o.ZP.mobileOnly({fontSize:13})},".image":{width:"100%",maxWidth:"960px",textAlign:"center",marginTop:28,"img.laptop":{width:"100%",maxWidth:"90vw"},video:{width:"1024px",maxWidth:"90vw"}}},buttonGroup:{...o.ZP.mobileOnly({width:"80%",flexDirection:"column"})},button:{height:"60px",...o.ZP.mobileOnly({width:"100%",height:"48px"})}}));var eh=function(){let{classes:e}=ex(),[i,t]=(0,s.useState)(!1),[o,u]=(0,s.useState)(!1);return(0,n.jsxs)("div",{className:e.main,children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)("section",{className:e.hero,children:(0,n.jsxs)("div",{className:"wrap",children:[(0,n.jsxs)("h1",{className:"tagline",children:[(0,n.jsx)(c.x,{style:{fontWeight:"600",color:"#000000",lineHeight:"130%"},children:"The Platform to"}),(0,n.jsx)("div",{className:e.inner,children:(0,n.jsxs)("span",{className:"".concat(e.innerspan," "),children:[(0,n.jsx)("span",{style:{color:"#4DAF00"},children:"Start"}),"\uD83D\uDD25",(0,n.jsx)("br",{}),(0,n.jsx)("span",{style:{color:"#0091BF"},children:"Manage"}),"⚡️",(0,n.jsx)("br",{}),(0,n.jsx)("span",{style:{color:"#FF8515"},children:"Scale"}),"\uD83D\uDE80",(0,n.jsx)("br",{}),(0,n.jsx)("span",{style:{color:"#C03AFF"},children:"Automate"}),"\uD83E\uDD29",(0,n.jsx)("br",{})]})}),(0,n.jsx)(c.x,{style:{color:"#000000",lineHeight:"130%"},children:"your Online Business"})]}),(0,n.jsx)(c.x,{className:"tagdesc",color:"black",sx:{fontSize:"20px"},children:"Blanxer is the platform to run a successful online business in Nepal."}),(0,n.jsx)(m.k,{justify:"center",children:(0,n.jsxs)(m.k,{gap:"1rem",mt:40,mb:40,className:e.buttonGroup,children:[(0,n.jsx)(W(),{href:"/register",children:(0,n.jsx)(d.z,{px:"2rem",style:{borderRadius:"37px",color:"black",background:"linear-gradient(270deg, #FDA9FF 3.47%, #D3B3FF 93.75%)"},className:e.button,children:(0,n.jsx)(c.x,{sx:{lineHeight:"24px"},size:"md",children:"Start For Free"})})}),(0,n.jsx)(d.z,{px:"2rem",variant:"outline",onClick:()=>t(!0),style:{borderRadius:"37px"},className:e.button,children:(0,n.jsxs)(r.Z,{aic:!0,children:[(0,n.jsx)(x.x,{children:(0,n.jsx)("img",{style:{width:18},src:"/svg/tv.svg",alt:""})}),(0,n.jsx)(c.x,{sx:{lineHeight:"24px",color:"#303030"},size:"md",ml:8,children:"Watch a video"})]})})]})}),(0,n.jsx)(h.W,{size:1100,sx:{textAlign:"center"},children:(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{media:"(min-width: 1060px)",srcSet:"/images/laptop_dashboard.webp"}),(0,n.jsx)("source",{srcSet:"/images/mobile/LandingFormobile.webp"}),(0,n.jsx)("img",{className:"laptop",src:"/images/laptop_dashboard.webp",alt:"",width:"100%"})]})})]})}),(0,n.jsx)(H,{}),(0,n.jsx)(et,{}),(0,n.jsx)(X,{}),(0,n.jsx)(es,{}),(0,n.jsx)(g,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(em,{}),(0,n.jsx)(_,{}),(0,n.jsx)(eo,{}),(0,n.jsx)(J.Z,{}),(0,n.jsx)(P,{open:i,onClose:()=>t(!1)}),(0,n.jsx)(B,{open:o,onClose:()=>u(!1)}),(0,n.jsx)(l.Z,{})]})};function eu(){return(0,n.jsx)(eh,{})}},442:function(e,i,t){"use strict";var n=t(5893),s=t(7516),r=t(5117),l=t(9876),a=t(7841),o=t(6817),c=t(1664),m=t.n(c);t(7294);let d=()=>{let{classes:e}=x();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:e.wrap,children:(0,n.jsxs)("div",{className:e.box,children:[(0,n.jsx)(r.x,{className:"section-title",align:"center",children:"We’re not just a e-commerce platform, we are your growth partner."}),(0,n.jsx)(l.k,{justify:"center",children:(0,n.jsx)(m(),{href:"/register",children:(0,n.jsx)(a.z,{className:e.button,style:{width:"max-content",color:"black",borderRadius:"37px",padding:"0.5rem 1.5rem",background:"linear-gradient(270deg, #FDA9FF 3.47%, #D3B3FF 93.75%)"},children:(0,n.jsx)(r.x,{sx:{fontSize:"15px",lineHeight:"22px"},children:"Start For Free"})})})})]})})})};i.Z=d;let x=(0,o.k)(e=>({wrap:{width:"100%",maxWidth:"1060px",margin:"0 auto"},box:{display:"flex",gap:"1rem",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"2rem",background:"#F8F3FF",borderRadius:52,padding:"4rem 8rem",".section-title":{fontWeight:600,fontSize:32,lineHeight:"140%"},...s.ZP.mobileOnly({padding:"48px 24px",".section-title":{fontSize:18,textAlign:"center"},".section-subtitle":{fontSize:12,textAlign:"center"},".content":{marginTop:30}})},button:{height:"60px",...s.ZP.mobileOnly({height:"42px"})}}))},1529:function(e,i,t){"use strict";i.Z={baseURL:"https://api.blanxer.com",baseURLDev:"https://api-dev.blanxer.com",baseURLLocal:"http://localhost:7778",mainURLS:["blanxer.com","blanxer.vercel.app"],localStorage:{cart:"cart_items"},business_categories:[{id:1,label:"General"},{id:2,label:"Fashion, Shoes & Accessories"},{id:3,label:"Beauty & Cosmetics"},{id:4,label:"Pharma & Medical Care"},{id:21,label:"Plants & Nursary"},{id:5,label:"Jwellery, Golds & Gems"},{id:6,label:"Mobile, Computers & Other Accessories"},{id:7,label:"Gym & Sports"},{id:8,label:"Hardware & Construction Tools"},{id:9,label:"Transportation, Taxi, Travel & Tourism"},{id:10,label:"Fruits & Vegetables"},{id:11,label:"Grocery"},{id:12,label:"Restaurants & Hotels"},{id:13,label:"Books & Stationery"},{id:14,label:"Bakery & Cake Shops"},{id:15,label:"Home Decoration & Electronic Appliances"},{id:16,label:"Meat & Fish"},{id:17,label:"Vehical & Vehical Accessories"},{id:18,label:"Local & Online Service"},{id:19,label:"Insurance & Finance Services"},{id:20,label:"Educational Institutions, Schools & Teachers"}]}},8763:function(e,i,t){"use strict";var n=t(4922);i.Z={succces(e,i){(0,n.c0)({title:e,message:i,color:"green"})},error(e,i){(0,n.c0)({title:e,message:i,color:"red"})}}},4768:function(e,i,t){"use strict";t.d(i,{U:function(){return s}});let n={phone:/^[0-9]{10}$/,user_name:/[A-Za-z0-9]+/,email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},s={email:(e,i)=>n.email.test(e)?null:null!=i?i:"Invalid email address",phone:(e,i)=>n.phone.test(e)?null:null!=i?i:"Invalid phone number",required:(e,i)=>(null==e?void 0:e.length)>0?null:null!=i?i:"This field is required",requiredNum:(e,i)=>e?null:null!=i?i:"This field is required",match:(e,i,t)=>e==i?null:t}}},function(e){e.O(0,[584,191,343,911,154,7,418,383,365,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);