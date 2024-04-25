"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6982],{4492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(4848),a=n(8453);const r={},i="Update Price Quote",c={id:"docs/Organization/Quote Price/set",title:"Update Price Quote",description:"This mutation allows to update the price quote of a subscription.",source:"@site/docs/docs/Organization/Quote Price/set.md",sourceDirName:"docs/Organization/Quote Price",slug:"/docs/Organization/Quote Price/set",permalink:"/strata-backend-docs/docs/Organization/Quote Price/set",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Get Organization subscription",permalink:"/strata-backend-docs/docs/Organization/Quote Price/get"},next:{title:"Agreement",permalink:"/strata-backend-docs/category/agreement"}},s={},d=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"update-price-quote",children:"Update Price Quote"}),"\n",(0,o.jsx)(t.p,{children:"This mutation allows to update the price quote of a subscription."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"mutation UpdatePriceQuote($data: UpdatePriceQuoteInput!) {\n  updatePriceQuote(data: $data) {\n    uuid\n    createdAt\n    updatedAt\n    basePrice\n    discount\n    finalPrice\n    term\n    details\n  }\n}\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "uuid": "",\n    ... // fields to update\n  }\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);