(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4031],{97449:(C,T,t)=>{var s=t(85373),e=t(75821),h=e(s);C.exports=h},29884:(C,T,t)=>{var s=t(97449),e=t(91522);function h(c,D){var P=-1,l=e(c)?Array(c.length):[];return s(c,function(r,j,U){l[++P]=D(r,j,U)}),l}C.exports=h},4191:(C,T,t)=>{var s=t(87864),e=t(86386),h=t(45353),c=t(29884),D=t(74565),P=t(52689),l=t(48126),r=t(82388),j=t(82261);function U(m,f,V){f.length?f=s(f,function(B){return j(B)?function(z){return e(z,B.length===1?B[0]:B)}:B}):f=[r];var w=-1;f=s(f,P(h));var G=c(m,function(B,z,W){var k=s(f,function(y){return y(B)});return{criteria:k,index:++w,value:B}});return D(G,function(B,z){return l(B,z,V)})}C.exports=U},74565:C=>{function T(t,s){var e=t.length;for(t.sort(s);e--;)t[e]=t[e].value;return t}C.exports=T},64958:(C,T,t)=>{var s=t(91662);function e(h,c){if(h!==c){var D=h!==void 0,P=h===null,l=h===h,r=s(h),j=c!==void 0,U=c===null,m=c===c,f=s(c);if(!U&&!f&&!r&&h>c||r&&j&&m&&!U&&!f||P&&j&&m||!D&&m||!l)return 1;if(!P&&!r&&!f&&h<c||f&&D&&l&&!P&&!r||U&&D&&l||!j&&l||!m)return-1}return 0}C.exports=e},48126:(C,T,t)=>{var s=t(64958);function e(h,c,D){for(var P=-1,l=h.criteria,r=c.criteria,j=l.length,U=D.length;++P<j;){var m=s(l[P],r[P]);if(m){if(P>=U)return m;var f=D[P];return m*(f=="desc"?-1:1)}}return h.index-c.index}C.exports=e},75821:(C,T,t)=>{var s=t(91522);function e(h,c){return function(D,P){if(D==null)return D;if(!s(D))return h(D,P);for(var l=D.length,r=c?l:-1,j=Object(D);(c?r--:++r<l)&&P(j[r],r,j)!==!1;);return D}}C.exports=e},45635:(C,T,t)=>{var s=t(87212),e=t(4191),h=t(39226),c=t(3956),D=h(function(P,l){if(P==null)return[];var r=l.length;return r>1&&c(P,l[0],l[1])?l=[]:r>2&&c(l[0],l[1],l[2])&&(l=[l[0]]),e(P,s(l,1),[])});C.exports=D},34031:(C,T,t)=>{"use strict";t.r(T),t.d(T,{SettingsPage:()=>as,makeUniqueRoutes:()=>ht});var s=t(92132),e=t(21272),h=t(58805),c=t(5239),D=t(11196),P=t(88353),l=t(7981),r=t(94061),j=t(61485),U=t(99248),m=t(30893),f=t(12081),V=t(12408),w=t(48653),G=t(24093),B=t(7537),z=t(67030),W=t(85963),k=t(7153),y=t(83997),Mt=t(10229),ut=t(74447),Pt=t(19307),Dt=t(33468),pt=t(37789),Ot=t(76547),xt=t(52358),nt=t(98915),Ct=t(1844),at=t(42455),ft=t(38413),Lt=t(55356),vt=t(4198),ot=t(90151),Z=t(68074),it=t(64871),L=t(15067),At=t(14718),S=t(54894),X=t(17703),jt=t(71389),F=t(57072),Rt=t(45635),et=t(82437),dt=t(59157),Bt=t(41156),It=t(32091),Tt=t(29404),Ut=t(87419),yt=t(63996),Kt=t(41231),Wt=t(5194),St=t(70603),zt=t(99576),Ft=t(54514),lt=t(14595),rt=t(63891),_t=t(95267),Nt=t(28484),$t=t(92803),os=t(15126),is=t(63299),es=t(67014),ds=t(59080),ls=t(79275),rs=t(61535),gs=t(5790),cs=t(12083),ms=t(35223),Es=t(5409),hs=t(74930),Ms=t(2600),us=t(48940),Ps=t(41286),Ds=t(51187),ps=t(56336),Os=t(39404),xs=t(58692),Cs=t(54257),fs=t(501),Ls=t(57646),vs=t(23120),As=t(44414),js=t(25962),Rs=t(14664),Bs=t(42588),Is=t(90325),Ts=t(62785),Us=t(87443),ys=t(41032),Ks=t(22957),Ws=t(93179),Ss=t(73055),zs=t(15747),Fs=t(85306),_s=t(77965),Ns=t(26509),$s=t(84624),Vs=t(71210),Gs=t(32058),Zs=t(81185),Xs=t(82261),Hs=t(55151),Qs=t(79077);const Vt=n=>n.map(a=>{const o=a.links.map(M=>({...M,isDisplayed:!1}));return{...a,links:o}}),Gt=()=>{const[{isLoading:n,menu:a},o]=e.useState({isLoading:!0,menu:[]}),{allPermissions:M}=(0,L.r5)(),{shouldUpdateStrapi:g}=(0,L.Xe)(),{settings:E}=(0,L.vD)(),p=(0,et.d4)(dt.s),O=e.useMemo(()=>(0,F.y)(),[]),{admin:i,global:d}=(0,F.p)(O,async()=>(await t.e(281).then(t.bind(t,40281))).SETTINGS_LINKS_EE(),{combine(x,v){return{admin:[...v.admin,...x.admin],global:[...x.global,...v.global]}},defaultValue:{admin:[],global:[]}}),u=e.useCallback(x=>{if(!x.id)throw new Error("The settings menu item must have an id attribute.");return{...x,permissions:p.settings?.[x.id]?.main??[]}},[p.settings]);return e.useEffect(()=>{const x=async()=>{const Y=await(J=>Promise.all(J.reduce((K,N,$)=>{const tt=N.links.map(async(st,b)=>({hasPermission:await(0,L.v$)(M,st.permissions),sectionIndex:$,linkIndex:b}));return[...K,...tt]},[])))(I);o(J=>({...J,isLoading:!1,menu:I.map((K,N)=>({...K,links:K.links.map(($,tt)=>{const st=Y.find(b=>b.sectionIndex===N&&b.linkIndex===tt);return{...$,isDisplayed:Boolean(st?.hasPermission)}})}))}))},{global:v,...R}=E,I=Vt([{...v,links:Rt([...v.links,...d.map(u)],A=>A.id).map(A=>({...A,hasNotification:A.id==="000-application-infos"&&g}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:i.map(u)},...Object.values(R)]);x()},[i,d,M,E,g,u]),{isLoading:n,menu:a.map(x=>({...x,links:x.links.filter(v=>v.isDisplayed)}))}},Zt=(0,rt.default)(h.I)`
  right: 15px;
  position: absolute;
`,Xt=({menu:n})=>{const{formatMessage:a}=(0,S.A)(),{trackUsage:o}=(0,L.z1)(),{pathname:M}=(0,X.zy)(),E=n.filter(i=>!i.links.every(d=>d.isDisplayed===!1)).map(i=>({...i,title:i.intlLabel,links:i.links.map(d=>({...d,title:d.intlLabel,name:d.id}))})),p=a({id:"global.settings",defaultMessage:"Settings"}),O=i=>()=>{o("willNavigate",{from:M,to:i})};return(0,s.jsxs)(Bt.C,{ariaLabel:p,children:[(0,s.jsx)(It.X,{label:p}),(0,s.jsx)(Tt.w,{children:E.map(i=>(0,s.jsx)(Ut.L,{label:a(i.intlLabel),children:i.links.map(d=>(0,s.jsxs)(yt.u,{as:jt.NavLink,withBullet:d.hasNotification,to:d.to,onClick:O(d.to),children:[a(d.intlLabel),d?.lockIcon&&(0,s.jsx)(Zt,{width:`${15/16}rem`,height:`${15/16}rem`,as:Kt.A})]},d.id))},i.id))})]})},Ht=[{async Component(){const{ProtectedListPage:n}=await t.e(9447).then(t.bind(t,39447));return n},to:"/settings/roles",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(6103),t.e(6064),t.e(5437)]).then(t.bind(t,95437));return n},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(6103),t.e(6064),t.e(5437)]).then(t.bind(t,95437));return n},to:"/settings/roles/new",exact:!0},{async Component(){const{ProtectedEditPage:n}=await Promise.all([t.e(6064),t.e(2190)]).then(t.bind(t,2190));return n},to:"/settings/roles/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(7001).then(t.bind(t,27001));return n},to:"/settings/users",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(7415).then(t.bind(t,47415));return n},to:"/settings/users/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await t.e(512).then(t.bind(t,60512));return n},to:"/settings/webhooks/create",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(9996).then(t.bind(t,39996)).then(a=>a.b);return n},to:"/settings/webhooks/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(364).then(t.bind(t,80364));return n},to:"/settings/webhooks",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(9309).then(t.bind(t,49309));return n},to:"/settings/api-tokens",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(6103),t.e(9877),t.e(9291)]).then(t.bind(t,99291));return n},to:"/settings/api-tokens/create",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(6103),t.e(9877),t.e(7736)]).then(t.bind(t,27736));return n},to:"/settings/api-tokens/:id",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(6103),t.e(9877),t.e(3779)]).then(t.bind(t,3779));return n},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(9414).then(t.bind(t,89414));return n},to:"/settings/transfer-tokens",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(6103),t.e(9877),t.e(6075)]).then(t.bind(t,96075));return n},to:"/settings/transfer-tokens/:id",exact:!0},{async Component(){const{PurchaseAuditLogs:n}=await t.e(9281).then(t.bind(t,89281));return n},to:"/settings/purchase-audit-logs",exact:!0},{async Component(){const{PurchaseReviewWorkflows:n}=await t.e(6792).then(t.bind(t,6792));return n},to:"/settings/purchase-review-workflows",exact:!0},{async Component(){const{PurchaseSingleSignOn:n}=await t.e(1844).then(t.bind(t,31844));return n},to:"/settings/purchase-single-sign-on",exact:!0}],_=750,H=100,gt=["image/jpeg","image/png","image/svg+xml"],Qt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},ct={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},mt=async n=>{if(!gt.includes(n.type))throw new Q("File format",Qt);const o=await new Promise(p=>{const O=new FileReader;O.onload=()=>{const i=new Image;i.onload=()=>{p({width:i.width,height:i.height})},i.src=O.result},O.readAsDataURL(n)});if(!(o.width<=_&&o.height<=_))throw new Q("File sizing",ct);const g={ext:n.name.split(".").pop(),size:n.size/1e3,name:n.name,url:URL.createObjectURL(n),rawFile:n,width:o.width,height:o.height};if(!(g.size<=H))throw new Q("File sizing",ct);return g};class Q extends Error{displayMessage;constructor(a,o,M){super(a,M),this.displayMessage=o}}const[Jt,q]=(0,_t.q)("LogoInput"),Et=({canUpdate:n,customLogo:a,defaultLogo:o,hint:M,label:g,onChangeLogo:E})=>{const[p,O]=e.useState(),[i,d]=e.useState(),{formatMessage:u}=(0,S.A)(),x=()=>{O(void 0),d(void 0)};return(0,s.jsxs)(Jt,{setLocalImage:O,localImage:p,goToStep:d,onClose:x,children:[(0,s.jsx)(c.Z,{label:g,selectedSlide:0,hint:M,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:a?.name||"logo.png",actions:(0,s.jsxs)(D.O,{children:[(0,s.jsx)(P.K,{disabled:!n,onClick:()=>d("upload"),label:u({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:(0,s.jsx)(Wt.A,{})}),a?.url&&(0,s.jsx)(P.K,{disabled:!n,onClick:()=>E(null),label:u({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:(0,s.jsx)(St.A,{})})]}),children:(0,s.jsx)(l.o,{label:u({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:(0,s.jsx)(r.a,{maxHeight:"40%",maxWidth:"40%",as:"img",src:a?.url||o,alt:u({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),i?(0,s.jsxs)(j.k,{labelledBy:"modal",onClose:x,children:[(0,s.jsx)(U.r,{children:(0,s.jsx)(m.o,{fontWeight:"bold",as:"h2",id:"modal",children:u(i==="upload"?{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"}:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"})})}),i==="upload"?(0,s.jsx)(Yt,{}):(0,s.jsx)(qt,{onChangeLogo:E})]}):null]})},Yt=()=>{const{formatMessage:n}=(0,S.A)();return(0,s.jsxs)(f.f,{label:n({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple",children:[(0,s.jsxs)(r.a,{paddingLeft:8,paddingRight:8,children:[(0,s.jsxs)(V.t,{children:[(0,s.jsx)(V.o,{children:n({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),(0,s.jsx)(V.o,{children:n({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]}),(0,s.jsx)(w.c,{})]}),(0,s.jsxs)(G.T,{children:[(0,s.jsx)(G.K,{children:(0,s.jsx)(wt,{})}),(0,s.jsx)(G.K,{children:(0,s.jsx)(bt,{})})]})]})},bt=()=>{const{formatMessage:n}=(0,S.A)(),[a,o]=e.useState(""),[M,g]=e.useState(),{setLocalImage:E,goToStep:p,onClose:O}=q("URLForm"),i=u=>{o(u.target.value)},d=async u=>{u.preventDefault();const v=new FormData(u.target).get("logo-url");if(v)try{const R=await Nt.A.get(v.toString(),{responseType:"blob",timeout:8e3}),I=new File([R.data],R.config.url??"",{type:R.headers["content-type"]}),A=await mt(I);E(A),p("pending")}catch(R){if(R instanceof $t.pe)g(n({id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"}));else if(R instanceof Q)g(n(R.displayMessage,{size:H,dimension:_}));else throw R}};return(0,s.jsxs)("form",{onSubmit:d,children:[(0,s.jsx)(r.a,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(B.k,{label:n({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:M,onChange:i,value:a,name:"logo-url"})}),(0,s.jsx)(z.j,{startActions:(0,s.jsx)(W.$,{onClick:O,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(W.$,{type:"submit",children:n({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})})]})},wt=()=>{const{formatMessage:n}=(0,S.A)(),[a,o]=e.useState(!1),[M,g]=e.useState(),E=e.useRef(null),p=e.useId(),{setLocalImage:O,goToStep:i,onClose:d}=q("ComputerForm"),u=()=>o(!0),x=()=>o(!1),v=I=>{I.preventDefault(),E.current.click()},R=async()=>{if(x(),!E.current.files)return;const[I]=E.current.files;try{const A=await mt(I);O(A),i("pending")}catch(A){if(A instanceof Q)g(n(A.displayMessage,{size:H,dimension:_})),E.current.focus();else throw A}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("form",{children:(0,s.jsx)(r.a,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(k.D,{name:p,error:M,children:(0,s.jsxs)(y.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(y.s,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:a?"primary100":"neutral100",borderColor:a?"primary500":M?"danger600":"neutral300",borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:u,onDragLeave:x,children:[(0,s.jsx)(h.I,{color:"primary600",width:(0,L.a8)(60),height:(0,L.a8)(60),as:zt.A,"aria-hidden":!0}),(0,s.jsx)(r.a,{paddingTop:3,paddingBottom:5,children:(0,s.jsx)(m.o,{variant:"delta",as:"label",htmlFor:p,children:n({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),(0,s.jsx)(kt,{accept:gt.join(", "),type:"file",name:"files",tabIndex:-1,onChange:R,ref:E,id:p}),(0,s.jsx)(W.$,{type:"button",onClick:v,children:n({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),(0,s.jsx)(r.a,{paddingTop:6,children:(0,s.jsx)(m.o,{variant:"pi",textColor:"neutral600",children:n({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:H,dimension:_})})})]}),(0,s.jsx)(Mt.b,{})]})})})}),(0,s.jsx)(z.j,{startActions:(0,s.jsx)(W.$,{onClick:d,variant:"tertiary",children:n({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})})]})},kt=(0,rt.default)(ut.T)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,qt=({onChangeLogo:n})=>{const{formatMessage:a}=(0,S.A)(),{localImage:o,setLocalImage:M,goToStep:g,onClose:E}=q("PendingLogoDialog"),p=()=>{M(void 0),g("upload")},O=()=>{o&&n(o),E()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.a,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[(0,s.jsxs)(y.s,{justifyContent:"space-between",paddingBottom:6,children:[(0,s.jsxs)(y.s,{direction:"column",alignItems:"flex-start",children:[(0,s.jsx)(m.o,{variant:"pi",fontWeight:"bold",children:a({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),(0,s.jsx)(m.o,{variant:"pi",textColor:"neutral500",children:a({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),(0,s.jsx)(W.$,{onClick:p,variant:"secondary",children:a({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),(0,s.jsx)(r.a,{maxWidth:(0,L.a8)(180),children:o?.url?(0,s.jsx)(ts,{asset:o}):null})]}),(0,s.jsx)(z.j,{startActions:(0,s.jsx)(W.$,{onClick:E,variant:"tertiary",children:a({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(W.$,{onClick:O,children:a({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})})]})},ts=({asset:n})=>{const{formatMessage:a}=(0,S.A)();return(0,s.jsxs)(Pt.Z,{children:[(0,s.jsx)(Dt.a,{children:(0,s.jsx)(pt.P,{size:"S",src:n.url})}),(0,s.jsxs)(Ot.b,{children:[(0,s.jsxs)(xt.W,{children:[(0,s.jsx)(nt.Z,{children:n.name}),(0,s.jsx)(nt.j,{children:`${n.ext?.toUpperCase()} - ${n.width}\u2715${n.height}`})]}),(0,s.jsx)(Ct.S,{children:a({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})},ss=()=>null,ns=()=>{const{trackUsage:n}=(0,L.z1)(),{formatMessage:a}=(0,S.A)(),{logos:o,updateProjectSettings:M}=(0,F.u)("ApplicationInfoPage"),[g,E]=e.useState({menu:o.menu,auth:o.auth}),{settings:p}=(0,et.d4)(dt.s),{communityEdition:O,latestStrapiReleaseTag:i,nodeVersion:d,shouldUpdateStrapi:u,strapiVersion:x}=(0,L.Xe)(),v=(0,F.p)(ss,async()=>(await t.e(2794).then(t.bind(t,22794))).AdminSeatInfoEE),{allowedActions:{canRead:R,canUpdate:I}}=(0,L.ec)(p?p["project-settings"]:{});(0,L.L4)();const A=K=>{K.preventDefault(),M({authLogo:g.auth.custom??null,menuLogo:g.menu.custom??null})},Y=K=>N=>{N===null&&n("didClickResetLogo",{logo:K}),E($=>({...$,[K]:{...$[K],custom:N}}))};if(e.useEffect(()=>{E({menu:o.menu,auth:o.auth})},[o]),!v)return null;const J=g.auth.custom===o.auth.custom&&g.menu.custom===o.menu.custom;return(0,s.jsxs)(at.P,{children:[(0,s.jsx)(L.x7,{name:a({id:"Settings.application.header",defaultMessage:"Application"})}),(0,s.jsx)(ft.g,{children:(0,s.jsxs)("form",{onSubmit:A,children:[(0,s.jsx)(Lt.Q,{title:a({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:a({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:I&&(0,s.jsx)(W.$,{disabled:J,type:"submit",startIcon:(0,s.jsx)(Ft.A,{}),children:a({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(vt.s,{children:(0,s.jsxs)(y.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(y.s,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(m.o,{variant:"delta",as:"h3",children:a({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(ot.x,{gap:5,as:"dl",children:[(0,s.jsxs)(Z.E,{col:6,s:12,children:[(0,s.jsx)(m.o,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})}),(0,s.jsxs)(y.s,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsxs)(m.o,{children:["v",x]}),u&&(0,s.jsx)(it.N,{href:`https://github.com/strapi/strapi/releases/tag/${i}`,endIcon:(0,s.jsx)(lt.A,{}),children:a({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})})]})]}),(0,s.jsxs)(Z.E,{col:6,s:12,children:[(0,s.jsx)(m.o,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.edition-title",defaultMessage:"current plan"})}),(0,s.jsxs)(y.s,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsx)(m.o,{children:a({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:O})}),(0,s.jsx)(it.N,{href:"https://strapi.io/pricing-self-hosted",endIcon:(0,s.jsx)(lt.A,{}),children:a({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})})]})]}),(0,s.jsxs)(Z.E,{col:6,s:12,children:[(0,s.jsx)(m.o,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.node-version",defaultMessage:"node version"})}),(0,s.jsx)(m.o,{as:"dd",children:d})]}),(0,s.jsx)(v,{})]})]}),R&&(0,s.jsxs)(r.a,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(m.o,{variant:"delta",as:"h3",children:a({id:"Settings.application.customization",defaultMessage:"Customization"})}),(0,s.jsx)(m.o,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:_,size:H})}),(0,s.jsxs)(ot.x,{paddingTop:4,gap:4,children:[(0,s.jsx)(Z.E,{col:6,s:12,children:(0,s.jsx)(Et,{canUpdate:I,customLogo:g.menu.custom,defaultLogo:g.menu.default,hint:a({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:a({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:Y("menu")})}),(0,s.jsx)(Z.E,{col:6,s:12,children:(0,s.jsx)(Et,{canUpdate:I,customLogo:g.auth.custom,defaultLogo:g.auth.default,hint:a({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:a({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:Y("auth")})})]})]})]})})]})})]})},as=()=>{const{settingId:n}=(0,X.g)(),{settings:a}=(0,L.vD)(),{formatMessage:o}=(0,S.A)(),{isLoading:M,menu:g}=Gt(),E=(0,F.p)(Ht,async()=>(await t.e(1437).then(t.bind(t,31437))).ROUTES_EE,{combine(i,d){return[...i,...d]},defaultValue:[]}),p=e.useMemo(()=>ht(E).map(({to:i,Component:d,exact:u})=>(0,F.d)(d,i,u)),[E]),O=Object.values(a).flatMap(i=>{const{links:d}=i;return d.map(u=>(0,F.d)(u.Component,u.to,u.exact||!1))});return M?(0,s.jsx)(L.Bl,{}):n?(0,s.jsxs)(at.P,{sideNav:(0,s.jsx)(Xt,{menu:g}),children:[(0,s.jsx)(At.m,{title:o({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(X.dO,{children:[(0,s.jsx)(X.qh,{path:"/settings/application-infos",component:ns,exact:!0}),p,O]})]}):(0,s.jsx)(X.rd,{to:"/settings/application-infos"})},ht=n=>n.filter((a,o,M)=>M.findIndex(g=>g.to===a.to)===o)}}]);
