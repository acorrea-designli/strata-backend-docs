"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8010],{580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(4848),a=t(8453);const s={},i="Error handling",o={id:"docs/Organization/Request Payment/error",title:"Error handling",description:"Since all the stripe integration is handled by webhooks and background jobs, the error handling will be tied to the integration status. The stripe related errors can be found in two entities, agreements and payments.",source:"@site/docs/docs/Organization/Request Payment/error.md",sourceDirName:"docs/Organization/Request Payment",slug:"/docs/Organization/Request Payment/error",permalink:"/strata-backend-docs/docs/Organization/Request Payment/error",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Request Payment",permalink:"/strata-backend-docs/category/request-payment"},next:{title:"Get Organization Payment",permalink:"/strata-backend-docs/docs/Organization/Request Payment/get"}},d={},c=[{value:"Agreements",id:"agreements",level:2},{value:"Payments",id:"payments",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"error-handling",children:"Error handling"}),"\n",(0,r.jsxs)(n.p,{children:["Since all the stripe integration is handled by webhooks and background jobs, the error handling will be tied to the integration status. The stripe related errors can be found in two entities, ",(0,r.jsx)(n.code,{children:"agreements"})," and ",(0,r.jsx)(n.code,{children:"payments"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"agreements",children:"Agreements"}),"\n",(0,r.jsxs)(n.p,{children:["The Stripe errors related to agreements occur when the susbscription cant be created, this can happen when the billing information is invalid. When this happens, the organization status will be set to ",(0,r.jsx)(n.code,{children:"signed"})," and the agreement status will be set to ",(0,r.jsx)(n.code,{children:"invalid-data"}),". The error message will be stored in the ",(0,r.jsx)(n.code,{children:"agreement.message"})," field."]}),"\n",(0,r.jsx)(n.p,{children:"To correct this error, the user must update the billing information and request the payment again."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"mutation UpdateBillingInfo($data: UpdateBillingInfoInput!) {\n  updateBillingInfo(data: $data) {\n    uuid\n    createdAt\n    updatedAt\n    firstName\n    lastName\n    fullName\n    email\n    phone\n    address\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "uuid": "", // Organization billing information uuid\n\t... // fields to update, normally email\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"payments",children:"Payments"}),"\n",(0,r.jsxs)(n.p,{children:["The Stripe errors related to payments normally occur when the subscription is past due, the payment method is invalid or the payment is declined. When this happens, the ",(0,r.jsx)(n.code,{children:"payment.status"})," will be set to ",(0,r.jsx)(n.code,{children:"OVERDUE"}),", ",(0,r.jsx)(n.code,{children:"FAILED"})," or ",(0,r.jsx)(n.code,{children:"CANCELED"}),". The error message will be stored in the ",(0,r.jsx)(n.code,{children:"payment.message"})," field."]}),"\n",(0,r.jsx)(n.p,{children:"To correct this error, the user must contact the organization and request the payment over the Stripe customer portal."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);