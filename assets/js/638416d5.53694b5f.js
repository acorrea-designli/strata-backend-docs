"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[790],{5796:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=e(4848),a=e(8453);const i={},o="Create Organization",s={id:"docs/Organization/create",title:"Create Organization",description:"The organization can be created using the following mutation.",source:"@site/docs/docs/Organization/create.md",sourceDirName:"docs/Organization",slug:"/docs/Organization/create",permalink:"/strata-backend-docs/docs/Organization/create",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Send agreement",permalink:"/strata-backend-docs/docs/Organization/Agreement/send"},next:{title:"Get Organization",permalink:"/strata-backend-docs/docs/Organization/get"}},c={},d=[];function u(n){const r={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"create-organization",children:"Create Organization"}),"\n",(0,t.jsx)(r.p,{children:"The organization can be created using the following mutation."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"mutation NewOrganization($data: NewOrganizationInput!) {\r\n  newOrganization(data: $data) {\r\n    uuid\r\n    createdAt\r\n    updatedAt\r\n    subscriberFirstName\r\n    subscriberLastName\r\n    subscriberTitle\r\n    subscriberEmail\r\n    subscriberPhone\r\n    organizationName\r\n    organizationDescription\r\n    address\r\n    city {\r\n      name\r\n    }\r\n    organizationType {\r\n      name\r\n    }\r\n    organizationOnboardings {\r\n      items {\r\n        user {\r\n          email\r\n        }\r\n        createdAt\r\n        onboardingStep {\r\n          name\r\n        }\r\n        updatedAt\r\n        uuid\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "address": "",\r\n    "organizationDescription": "",\r\n    "organizationName": "",\r\n    "subscriberEmail": "",\r\n    "subscriberFirstName": "",\r\n    "subscriberLastName": "",\r\n    "subscriberPhone": "",\r\n    "subscriberTitle": "",\r\n    "user": {\r\n      "uuid": ""\r\n    },\r\n    "city": {\r\n      "uuid": ""\r\n    },\r\n    "organizationType": {\r\n      "uuid": ""\r\n    },\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["Note that the ",(0,t.jsx)(r.code,{children:"city"})," uuid, ",(0,t.jsx)(r.code,{children:"organizationType"})," uuid and ",(0,t.jsx)(r.code,{children:"user"})," uuid are required fields."]})})]})}function l(n={}){const{wrapper:r}={...(0,a.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>o,x:()=>s});var t=e(6540);const a={},i=t.createContext(a);function o(n){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function s(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(i.Provider,{value:r},n.children)}}}]);