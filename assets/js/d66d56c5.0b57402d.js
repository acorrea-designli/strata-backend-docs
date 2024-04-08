"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[718],{9315:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=e(4848),o=e(8453);const a={},r="Organization types",s={id:"docs/Organization/organizationType",title:"Organization types",description:"We can fetch the list of organization types using the following query.",source:"@site/docs/docs/Organization/organizationType.md",sourceDirName:"docs/Organization",slug:"/docs/Organization/organizationType",permalink:"/strata-backend-docs/docs/Organization/organizationType",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Get Organization",permalink:"/strata-backend-docs/docs/Organization/get"},next:{title:"Update Organization",permalink:"/strata-backend-docs/docs/Organization/set"}},c={},d=[];function p(n){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"organization-types",children:"Organization types"}),"\n",(0,i.jsx)(t.p,{children:"We can fetch the list of organization types using the following query."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"query FindAllOrganizationTypes {\n  findAllOrganizationTypes {\n    hasNextPage\n    totalCount\n    items {\n      uuid\n      createdAt\n      updatedAt\n      name\n      description\n    }\n  }\n}A\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"The organization type uuid is needed when creating a new organization."})})]})}function l(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>s});var i=e(6540);const o={},a=i.createContext(o);function r(n){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);