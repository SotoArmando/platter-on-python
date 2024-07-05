"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2190],{2190:(Q,C,s)=>{s.d(C,{ProtectedEditPage:()=>Z});var t=s(92132),B=s(21272),E=s(94061),M=s(83997),m=s(30893),h=s(85963),I=s(90151),A=s(68074),R=s(7537),g=s(5287),c=s(38413),U=s(55356),T=s(4198),W=s(21610),o=s(15067),K=s(46270),f=s(61535),p=s(54894),j=s(17703),Y=s(71389),x=s(12083),e=s(57072),$=s(37519),G=s(46064),ns=s(15126),is=s(63299),Es=s(67014),rs=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ms=s(5790),Ps=s(35223),Ds=s(5409),Os=s(74930),ms=s(2600),hs=s(48940),As=s(41286),Rs=s(51187),gs=s(56336),vs=s(39404),Ls=s(58692),Cs=s(54257),Bs=s(501),Is=s(57646),cs=s(23120),Us=s(44414),Ts=s(25962),Ws=s(14664),Ks=s(42588),fs=s(90325),js=s(62785),xs=s(87443),us=s(41032),ys=s(22957),ps=s(93179),Ss=s(73055),Ns=s(15747),zs=s(85306),Fs=s(77965),Vs=s(26509),Qs=s(84624),Ys=s(71210),$s=s(32058),Gs=s(81185),Hs=s(82261),Js=s(412),Xs=s(94710);const H=({disabled:n,role:a,values:D,errors:_,onChange:r,onBlur:v})=>{const{formatMessage:i}=(0,p.A)();return(0,t.jsx)(E.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(E.a,{children:[(0,t.jsx)(E.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:a?a.name:i({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:a?a.description:i({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:i({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(I.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.k,{disabled:n,name:"name",error:_.name&&i({id:_.name}),label:i({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:v,required:!0,value:D.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.T,{disabled:n,label:i({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&i({id:_.name}),onChange:r,onBlur:v,children:D.description||""})})]})]})})},J=x.Ik().shape({name:x.Yj().required(o.iW.required),description:x.Yj().optional()}),X=()=>{const n=(0,o.hN)(),{formatMessage:a}=(0,p.A)(),_=(0,j.W5)("/settings/roles/:id")?.params.id,r=B.useRef(null),{lockApp:v,unlockApp:i}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:N}=(0,o.wq)(),{isLoading:k,data:z}=(0,e.A)({role:_??""}),{roles:w,isLoading:F,refetch:q}=(0,$.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(u,L)=>{try{v();const{permissionsToSend:O,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await _s({id:_,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?L.setErrors(N(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&O){const l=await as({id:d.data.id,permissions:O});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?L.setErrors(N(l.error)):n({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{i()}},V=!F&&P.code==="strapi-super-admin";return(0,t.jsxs)(c.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:J,validateOnChange:!1,children:({handleSubmit:u,values:L,errors:O,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(U.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.N,{as:Y.NavLink,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(H,{disabled:V,errors:O,values:L,onChange:y,onBlur:d,role:P}),!k&&!F&&!ts&&z?(0,t.jsx)(E.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(G.P,{isFormDisabled:V,permissions:ss,ref:r,layout:z})}):(0,t.jsx)(E.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},Z=()=>{const n=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:D,canUpdate:_}}=(0,o.ec)(n);return a?(0,t.jsx)(o.Bl,{}):!D&&!_?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(X,{})}},37519:(Q,C,s)=>{s.d(C,{u:()=>m});var t=s(21272),B=s(15067),E=s(54894),M=s(57072);const m=(h={},I)=>{const{locale:A}=(0,E.A)(),R=(0,B.QM)(A,{sensitivity:"base"}),{data:g,error:c,isError:U,isLoading:T,refetch:W}=(0,M.z)(h,I);return{roles:t.useMemo(()=>[...g??[]].sort((K,f)=>R.compare(K.name,f.name)),[g,R]),error:c,isError:U,isLoading:T,refetch:W}}}}]);
