"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3391],{7734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(4848),i=n(8453);const r={sidebar_position:1},s="Introduction",a={id:"architecture/intro",title:"Introduction",description:"The backend consist of a REST and a GraphQL API, both of them are hosted on AWS Lambda. The REST API is used for interoperability with other services, while the GraphQL API is used for the communication with the frontend.",source:"@site/docs/architecture/intro.md",sourceDirName:"architecture",slug:"/architecture/intro",permalink:"/strata-backend-docs/architecture/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"architectureSidebar",next:{title:"Components and connectors",permalink:"/strata-backend-docs/architecture/c&c"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"The backend consist of a REST and a GraphQL API, both of them are hosted on AWS Lambda. The REST API is used for interoperability with other services, while the GraphQL API is used for the communication with the frontend."}),"\n",(0,o.jsxs)(t.p,{children:["Both APIs are generated using the ",(0,o.jsx)(t.code,{children:"Backend Engine"})," template, which is a template that generates a REST and a GraphQL API using the ",(0,o.jsx)(t.a,{href:"./erd",children:"Entity Relationship Diagram"}),"."]}),"\n",(0,o.jsxs)(t.admonition,{title:"pluralization",type:"warning",children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Backend Engine"})," template generates the endpoints based on a .xlsx file, and the pluralization of the endpoints is based on the entity name. For this reason, there are some endpoints that has a wrong pluralization, like ",(0,o.jsx)(t.code,{children:"citys"})," instead of ",(0,o.jsx)(t.code,{children:"cities"}),"."]}),(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"There are some solutions to fix this issue, but they are not implemented yet."}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);