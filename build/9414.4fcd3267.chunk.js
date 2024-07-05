"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9414],{89414:(x,f,t)=>{t.d(f,{ProtectedListView:()=>rt});var s=t(92132),l=t(21272),h=t(38413),I=t(55356),d=t(25815),D=t(4198),_=t(15067),E=t(5194),a=t(5409),M=t(54894),e=t(17703),B=t(57072),K=t(66742),C=t(99831),W=t(22185),u=t(15126),$=t(63299),F=t(67014),V=t(59080),G=t(79275),Y=t(14718),p=t(82437),Q=t(61535),H=t(5790),J=t(12083),X=t(35223),n=t(74930),r=t(2600),P=t(48940),O=t(41286),m=t(51187),T=t(56336),i=t(39404),v=t(58692),A=t(54257),y=t(501),Z=t(57646),w=t(23120),b=t(44414),q=t(25962),tt=t(14664),o=t(42588),st=t(90325),S=t(62785),Ot=t(87443),mt=t(41032),At=t(22957),ft=t(93179),ct=t(73055),gt=t(15747),Lt=t(85306),Ct=t(77965),vt=t(26509),Rt=t(84624),Ut=t(71210),ht=t(32058),It=t(81185),Bt=t(82261);const ot=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],_t=()=>{(0,_.L4)();const{formatMessage:c}=(0,M.A)(),R=(0,_.hN)(),dt=(0,B.j)(L=>L.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:Et,allowedActions:{canCreate:k,canDelete:it,canUpdate:lt,canRead:U}}=(0,_.ec)(dt),{push:at}=(0,e.W6)(),{trackUsage:j}=(0,_.z1)(),{_unstableFormatAPIError:N}=(0,_.wq)();l.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]),(0,B.b)(()=>{j("willAccessTokenList",{tokenType:C.T})});const Mt=ot.map(L=>({...L,metadatas:{...L.metadatas,label:c(L.metadatas.label)}})),{data:g=[],isLoading:Tt,error:z}=(0,K.c)(void 0,{skip:!U});l.useEffect(()=>{g&&j("didAccessTokenList",{number:g.length,tokenType:C.T})},[j,g]),l.useEffect(()=>{z&&R({type:"warning",message:N(z)})},[z,N,R]);const[Dt]=(0,K.d)(),Pt=async L=>{try{const nt=await Dt(L);"error"in nt&&R({type:"warning",message:N(nt.error)})}catch{R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},et=Tt||Et;return(0,s.jsxs)(h.g,{"aria-busy":et,children:[(0,s.jsx)(_.x7,{name:"Transfer Tokens"}),(0,s.jsx)(I.Q,{title:c({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:c({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:k?(0,s.jsx)(d.z,{"data-testid":"create-transfer-token-button",startIcon:(0,s.jsx)(E.A,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:C.T}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,s.jsxs)(D.s,{children:[!U&&(0,s.jsx)(_.UW,{}),U&&g.length>0&&(0,s.jsx)(W.T,{permissions:{canRead:U,canDelete:it,canUpdate:lt},headers:Mt,contentType:"trasfer-tokens",isLoading:et,onConfirmDelete:Pt,tokens:g,tokenType:C.T}),U&&k&&g.length===0&&(0,s.jsx)(_.R1,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,s.jsx)(d.z,{variant:"secondary",startIcon:(0,s.jsx)(E.A,{}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),U&&!k&&g.length===0&&(0,s.jsx)(_.R1,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},rt=()=>{const c=(0,B.j)(R=>R.admin_app.permissions.settings?.["transfer-tokens"].main);return(0,s.jsx)(_.kz,{permissions:c,children:(0,s.jsx)(_t,{})})}},22185:(x,f,t)=>{t.d(f,{T:()=>V});var s=t(92132),l=t(21272),h=t(25641),I=t(90361),d=t(33363),D=t(30893),_=t(83997),E=t(94061),a=t(88353),M=t(21610),e=t(15067),B=t(50612),K=t(83925),C=t(41909),W=t(54894),u=t(17703),$=t(71389),F=t(63891);const V=({permissions:n,headers:r=[],contentType:P,isLoading:O=!1,tokens:m=[],onConfirmDelete:T,tokenType:i})=>{const{canDelete:v,canUpdate:A,canRead:y}=n;return(0,s.jsx)(e.Ee,{headers:r,contentType:P,rows:m,withBulkActions:v||A||y,isLoading:O,onConfirmDelete:T,children:(0,s.jsx)(G,{tokenType:i,permissions:n,onConfirmDelete:T})})},G=({tokenType:n,permissions:r,rows:P=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:T,canUpdate:i,canRead:v}=r,[{query:A}]=(0,e.sq)(),{formatMessage:y}=(0,W.A)(),[,Z]=A&&A.sort?A.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,u.W6)(),{trackUsage:q}=(0,e.z1)(),tt=[...P].sort((o,st)=>{const S=o.name.localeCompare(st.name);return Z==="DESC"?-S:S});return(0,s.jsx)(h.N,{children:tt.map(o=>(0,s.jsxs)(I.Tr,{...(0,e.qM)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${o.id}`)},condition:i}),children:[(0,s.jsx)(d.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:o.name})}),(0,s.jsx)(d.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",ellipsis:!0,children:o.description})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(o.createdAt)})})}),(0,s.jsx)(d.Td,{children:o.lastUsedAt&&(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(o.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,s.jsx)(d.Td,{children:(0,s.jsxs)(_.s,{justifyContent:"end",children:[i&&(0,s.jsx)(X,{tokenName:o.name,tokenId:o.id}),!i&&v&&(0,s.jsx)(J,{tokenName:o.name,tokenId:o.id}),T&&(0,s.jsx)(H,{tokenName:o.name,onClickDelete:()=>m?.(o.id),tokenType:n})]})})]},o.id))})},Y={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},p=({tokenName:n,tokenId:r,buttonType:P="edit",children:O})=>{const{formatMessage:m}=(0,W.A)(),{location:{pathname:T}}=(0,u.W6)();return(0,s.jsx)(Q,{forwardedAs:$.NavLink,to:`${T}/${r}`,title:m(Y[P],{target:n}),children:O})},Q=(0,F.default)(M.N)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,H=({tokenName:n,onClickDelete:r,tokenType:P})=>{const{formatMessage:O}=(0,W.A)(),{trackUsage:m}=(0,e.z1)(),[T,i]=l.useState(!1),v=()=>{i(!1),m("willDeleteToken",{tokenType:P}),r()};return(0,s.jsxs)(E.a,{paddingLeft:1,onClick:A=>A.stopPropagation(),children:[(0,s.jsx)(a.K,{onClick:()=>{i(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(B.A,{})}),(0,s.jsx)(e.TM,{onToggleDialog:()=>i(!1),onConfirm:v,isOpen:T})]})},J=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,buttonType:"read",children:(0,s.jsx)(K.A,{})}),X=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,children:(0,s.jsx)(C.A,{width:12})})},99831:(x,f,t)=>{t.d(f,{A:()=>s,T:()=>l});const s="api-token",l="transfer-token"},66742:(x,f,t)=>{t.d(f,{a:()=>d,b:()=>_,c:()=>h,d:()=>D,u:()=>I});var s=t(57072);const l=s.n.injectEndpoints({endpoints:E=>({getTransferTokens:E.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:a=>a.data,providesTags:(a,M)=>[...a?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:E.query({query:a=>`/admin/transfer/tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:E.mutation({query:a=>({url:"/admin/transfer/tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:E.mutation({query:a=>({url:`/admin/transfer/tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:E.mutation({query:({id:a,...M})=>({url:`/admin/transfer/tokens/${a}`,method:"PUT",data:M}),transformResponse:a=>a.data,invalidatesTags:(a,M,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:h,useGetTransferTokenQuery:I,useCreateTransferTokenMutation:d,useDeleteTransferTokenMutation:D,useUpdateTransferTokenMutation:_}=l}}]);
