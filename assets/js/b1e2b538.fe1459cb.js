"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[635],{1824:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=e(4848),r=e(8453);const s={sidebar_position:1},c="Country",a={id:"docs/Location/country",title:"Country",description:"There should be only one country in the database, so we can use the following query to get the country uuid.",source:"@site/docs/docs/Location/country.md",sourceDirName:"docs/Location",slug:"/docs/Location/country",permalink:"/strata-backend-docs/docs/Location/country",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Location",permalink:"/strata-backend-docs/category/location"},next:{title:"State",permalink:"/strata-backend-docs/docs/Location/state"}},i={},u=[];function d(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"country",children:"Country"}),"\n",(0,o.jsx)(t.p,{children:"There should be only one country in the database, so we can use the following query to get the country uuid."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"query FindAllCountries {\r\n    findAllCountrys(options: null) {\r\n        hasNextPage\r\n        totalCount\r\n        items {\r\n            uuid\r\n            createdAt\r\n            updatedAt\r\n            name\r\n            description\r\n        }\r\n    }\r\n}\r\n\n"})})]})}function l(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>a});var o=e(6540);const r={},s=o.createContext(r);function c(n){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(s.Provider,{value:t},n.children)}}}]);