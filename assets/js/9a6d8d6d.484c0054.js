"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[841],{4330:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),a=t(8453);const o={},s="Get Organization",r={id:"docs/Organization/get",title:"Get Organization",description:"An organization can be fetched using the following query.",source:"@site/docs/docs/Organization/get.md",sourceDirName:"docs/Organization",slug:"/docs/Organization/get",permalink:"/strata-backend-docs/docs/Organization/get",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Create Organization",permalink:"/strata-backend-docs/docs/Organization/create"},next:{title:"Organization types",permalink:"/strata-backend-docs/docs/Organization/organizationType"}},d={},c=[{value:"List organizations by steps",id:"list-organizations-by-steps",level:3}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"get-organization",children:"Get Organization"}),"\n",(0,i.jsx)(e.p,{children:"An organization can be fetched using the following query."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-graphql",children:"query FindAllOrganizations($options: FilterDto) {\n  findAllOrganizations(options: $options) {\n    items {\n      uuid\n      createdAt\n      updatedAt\n      subscriberFirstName\n      subscriberLastName\n      subscriberTitle\n      subscriberEmail\n      subscriberPhone\n      organizationName\n      organizationDescription\n      address\n      city {\n        name\n        uuid\n      }\n      organizationType {\n        uuid\n        name\n      }\n      organizationOnboardings {\n        items {\n          uuid\n          createdAt\n          updatedAt\n          user {\n            email\n            uuid\n          }\n\t  onboardingStep {\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "options": {\n    "filter": [\n      {\n        "type": "Eq",\n        "field": "uuid",\n        "value": "" // Organization uuid\n      }\n    ],\n    "limit": 1,\n    "offset": 0\n  }\n}\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"The organizationOnboadings contains the steps that the organization has completed, the user that has been involved in each step as well as the date and time the step was completed."})}),"\n",(0,i.jsx)(e.h3,{id:"list-organizations-by-steps",children:"List organizations by steps"}),"\n",(0,i.jsx)(e.p,{children:"Organizations can be fetched by the steps they have completed using the following query."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-graphql",children:"query FindAllOnboardingSteps($options: FilterDto) {\n  findAllOnboardingSteps(options: $options) {\n    items {\n      uuid\n      createdAt\n      updatedAt\n      name\n      description\n      organizationOnboardings {\n        items {\n          uuid\n          createdAt\n          updatedAt\n          organization {\n            uuid\n            createdAt\n            updatedAt\n            subscriberFirstName\n            subscriberLastName\n            subscriberTitle\n            subscriberEmail\n            subscriberPhone\n            organizationName\n            organizationDescription\n            address\n            organizationType {\n              name\n            }\n          }\n          user {\n            email\n          }\n        }\n        totalCount\n        hasNextPage\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "options": {\n    "filter": [\n      {\n        "field": "name", // we can filter by step name or uuid\n        "type": "Eq", \n        "value": "" // Step name\n      }\n    ],\n    "limit": 100,\n    "offset": 0\n  }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);