"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[718],{9315:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=e(4848),i=e(8453);const a={},r="Organization types",s={id:"docs/Organization/organizationType",title:"Organization types",description:"We can fetch the list of organization types using the following query.",source:"@site/docs/docs/Organization/organizationType.md",sourceDirName:"docs/Organization",slug:"/docs/Organization/organizationType",permalink:"/strata-backend-docs/docs/Organization/organizationType",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Get Organization",permalink:"/strata-backend-docs/docs/Organization/get"},next:{title:"Product",permalink:"/strata-backend-docs/category/product"}},c={},d=[];function p(n){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"organization-types",children:"Organization types"}),"\n",(0,o.jsx)(t.p,{children:"We can fetch the list of organization types using the following query."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"query FindAllOrganizationTypes {\n  findAllOrganizationTypes {\n    hasNextPage\n    totalCount\n    items {\n      uuid\n      createdAt\n      updatedAt\n      name\n      description\n    }\n  }\n}A\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"The organization type uuid is needed when creating a new organization."})})]})}function u(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>s});var o=e(6540);const i={},a=o.createContext(i);function r(n){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(a.Provider,{value:t},n.children)}}}]);