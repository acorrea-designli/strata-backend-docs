"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[910],{6609:(I,i,M)=>{M.r(i),M.d(i,{assets:()=>n,contentTitle:()=>N,default:()=>g,frontMatter:()=>D,metadata:()=>s,toc:()=>t});var e=M(4848),l=M(8453),d=M(4971);function j(I){const{children:i,title:M="Collapse"}=I;return(0,e.jsxs)(d.A,{children:[(0,e.jsx)("summary",{mdxType:"summary",children:M}),i]})}const D={},N="Docusign integration",s={id:"interoperability/docusign",title:"Docusign integration",description:"Overview",source:"@site/docs/interoperability/docusign.mdx",sourceDirName:"interoperability",slug:"/interoperability/docusign",permalink:"/strata-backend-docs/interoperability/docusign",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"interoperabilitySidebar"},n={},t=[{value:"Overview",id:"overview",level:2},{value:"Implementation considerations",id:"implementation-considerations",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Requirements for JWT Grant flow",id:"requirements-for-jwt-grant-flow",level:4},{value:"Docusign relevant endpoints",id:"docusign-relevant-endpoints",level:2},{value:"Strata-Docusign integration flow",id:"strata-docusign-integration-flow",level:2}];function c(I){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...I.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"docusign-integration",children:"Docusign integration"}),"\n",(0,e.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,e.jsx)(i.p,{children:"Docusign is a popular e-signature platform that allows you to send, sign, and manage documents digitally. This integration will allow us to send documents to Docusign for signature from within the platform."}),"\n",(0,e.jsx)(i.h2,{id:"implementation-considerations",children:"Implementation considerations"}),"\n",(0,e.jsx)(i.h3,{id:"authentication",children:"Authentication"}),"\n",(0,e.jsx)(i.p,{children:"Docusign uses OAuth 2.0 for authentication. It offers three different authentication flows: Authorization Code Grant, Implicit Grant, and JWT Grant. Since we are building a server-to-server integration, we will use the JWT Grant flow."}),"\n",(0,e.jsx)(i.h4,{id:"requirements-for-jwt-grant-flow",children:"Requirements for JWT Grant flow"}),"\n",(0,e.jsxs)(i.admonition,{type:"tip",children:[(0,e.jsxs)(i.mdxAdmonitionTitle,{children:["Docusign account type from ",(0,e.jsx)(i.a,{href:"https://developers.docusign.com/docs/esign-rest-api/sdks/node/auth/",children:"Docusign node sdk authentication"})]}),(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsx)(i.p,{children:"Every Node.js SDK (eSignature as well as others) includes two JWT Grant functions:"}),"\n"]}),(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"requestJWTUserToken"}),": This function uses the JWT Grant flow to request a token that will represent a specific user. This JWT Grant flow is used for all eSignature REST API methods and for most other DocuSign API methods as well."]}),"\n"]}),(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"requestJWTApplicationToken"}),": This function uses the JWT Grant flow to request a token that will represent the application itself (not a user). ",(0,e.jsx)(i.strong,{children:(0,e.jsx)(i.em,{children:"This JWT Grant flow is useful for specific DocuSign partners who are part of special DocuSign programs allowing them to manage accounts using the DocuSign Admin API"})}),"."]}),"\n"]}),(0,e.jsx)(i.p,{children:"As we can see, there are two types of Docusign accounts, one for users and one for applications. We have to discuss with the client which type of account they have and which type of account we will use to integrate with Docusign."})]}),"\n",(0,e.jsx)(j,{title:"Pre-requisites for JWT Grant flow",children:(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Integration key (client ID)"}),": This can be obtained in your developer account from the Apps and Keys page. See the DocuSign eSignature Admin Guide for more information."]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"RSA private key"}),": This is for the integration key you obtained above and can also be created on the Apps and Keys page. You only need the private key, and it can only be copied once. Make sure to retain it for your records.\nBase path: To use either JWT Grant function, you need to use an SDK ApiClient object. To create an ApiClient object, you need to provide a base path. Since the application\u2019s correct base path is not yet known, use placeholder values to indicate which system should be queried:"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{children:"https://demo.docusign.net/restapi # development\nhttps://www.docusign.net/restapi # production\n"})}),"\n",(0,e.jsx)(i.p,{children:"Note: This placeholder base path is used only for the ApiClient requestJWTUserToken, requestJWTApplicationToken, and getUserInfo functions. Once you make these calls, you should be able to get the correct base path and use it to make all other API calls."}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Impersonated User ID (UserID)"}),": This is a GUID identifying the DocuSign user that you will be impersonating with the access token. Your own User ID can be found at the top of the Apps and Keys page."]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"User IDs for other members of your account can be looked up on the Users page. Locate the user in the list; then use the Actions > Edit button to open the user\u2019s Profile page. The user\u2019s user ID is shown on the page as the User ID value."}),"\n",(0,e.jsxs)(i.p,{children:["User IDs can also be looked up programmatically by using the Users",":list"," method. It requires administrative permissions."]}),"\n",(0,e.jsx)(i.p,{children:"This parameter is not used for the requestJWTApplicationToken function."}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Scopes"}),": These represent the OAuth scopes (permissions) that are being requested. For eSignature REST API methods, use the signature scope. The impersonation scope is implied by the JWT Grant operation and does not need to be included. If the access token will be used for other DocuSign APIs, additional scopes may be required; see each API\u2019s authentication requirements."]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Parameter formats and additional parameters"})," are documented in Node.js SDK Reference."]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"The JWT Grant flow is used when you want to authenticate as an application, not as a user. The flow is as follows:"}),"\n"]})}),"\n",(0,e.jsx)(i.h2,{id:"docusign-relevant-endpoints",children:"Docusign relevant endpoints"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://developers.docusign.com/docs/esign-rest-api/reference/envelopes/envelopes/get/?explorer=true",children:"Get envelope"})}),"\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://developers.docusign.com/docs/esign-rest-api/reference/envelopes/envelopedocuments/list/?explorer=true",children:"Get documents of envelope"})}),"\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://developers.docusign.com/docs/esign-rest-api/reference/envelopes/envelopeformdata/get/?explorer=true",children:"Get fields of document"})}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"strata-docusign-integration-flow",children:"Strata-Docusign integration flow"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXMtYXNjaWkiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U3R5bGVUeXBlPSJ0ZXh0L2NzcyIgaGVpZ2h0PSIxMDYwcHgiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHN0eWxlPSJ3aWR0aDo4ODVweDtoZWlnaHQ6MTA2MHB4O2JhY2tncm91bmQ6I0ZGRkZGRjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg4NSAxMDYwIiB3aWR0aD0iODg1cHgiIHpvb21BbmRQYW49Im1hZ25pZnkiPjxkZWZzLz48Zz48cmVjdCBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjIzNS4wNjI1IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHdpZHRoPSIxMCIgeD0iMzA2LjUiIHk9IjM0NC4zNTk0Ii8+PHJlY3QgZmlsbD0iI0ZGRkZGRiIgaGVpZ2h0PSI4Ny4zOTg0IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHdpZHRoPSIxMCIgeD0iMzA2LjUiIHk9Ijg2Ny43NSIvPjxyZWN0IGZpbGw9IiNGRkZGRkYiIGhlaWdodD0iMTc2Ljc5NjkiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgd2lkdGg9IjEwIiB4PSI1MDAuNSIgeT0iMzczLjQ5MjIiLz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9Ijc1LjM5ODQiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjQwNS41IiB4PSI0NjMiIHk9IjM4OC40OTIyIi8+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNjIuNzk2OSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7IiB3aWR0aD0iNzMxLjUiIHg9IjEzNyIgeT0iNTk0LjQyMTkiLz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjEzMy42NjQxIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSI0OTQiIHg9IjU0IiB5PSI4MjkuNDg0NCIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1kYXNoYXJyYXk6NS4wLDUuMDsiIHgxPSIyOSIgeDI9IjI5IiB5MT0iODEuMjk2OSIgeTI9Ijk4MC4xNDg0Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLWRhc2hhcnJheTo1LjAsNS4wOyIgeDE9IjEwMCIgeDI9IjEwMCIgeTE9IjgxLjI5NjkiIHkyPSI5ODAuMTQ4NCIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1kYXNoYXJyYXk6NS4wLDUuMDsiIHgxPSIyMDQiIHgyPSIyMDQiIHkxPSI4MS4yOTY5IiB5Mj0iOTgwLjE0ODQiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtZGFzaGFycmF5OjUuMCw1LjA7IiB4MT0iMzExIiB4Mj0iMzExIiB5MT0iODEuMjk2OSIgeTI9Ijk4MC4xNDg0Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLWRhc2hhcnJheTo1LjAsNS4wOyIgeDE9IjUwNSIgeDI9IjUwNSIgeTE9IjgxLjI5NjkiIHkyPSI5ODAuMTQ4NCIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1kYXNoYXJyYXk6NS4wLDUuMDsiIHgxPSI4MjIuNSIgeDI9IjgyMi41IiB5MT0iODEuMjk2OSIgeTI9Ijk4MC4xNDg0Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNDMiIHg9IjUiIHk9Ijc3Ljk5NTEiPkFkbWluPC90ZXh0PjxlbGxpcHNlIGN4PSIyOS41IiBjeT0iMTMuNSIgZmlsbD0iI0UyRTJGMCIgcng9IjgiIHJ5PSI4IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48cGF0aCBkPSJNMjkuNSwyMS41IEwyOS41LDQ4LjUgTTE2LjUsMjkuNSBMNDIuNSwyOS41IE0yOS41LDQ4LjUgTDE2LjUsNjMuNSBNMjkuNSw0OC41IEw0Mi41LDYzLjUgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI0MyIgeD0iNSIgeT0iOTkyLjE0MzYiPkFkbWluPC90ZXh0PjxlbGxpcHNlIGN4PSIyOS41IiBjeT0iMTAwMy45NDUzIiBmaWxsPSIjRTJFMkYwIiByeD0iOCIgcnk9IjgiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjxwYXRoIGQ9Ik0yOS41LDEwMTEuOTQ1MyBMMjkuNSwxMDM4Ljk0NTMgTTE2LjUsMTAxOS45NDUzIEw0Mi41LDEwMTkuOTQ1MyBNMjkuNSwxMDM4Ljk0NTMgTDE2LjUsMTA1My45NDUzIE0yOS41LDEwMzguOTQ1MyBMNDIuNSwxMDUzLjk0NTMgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI2NyIgeD0iNjQiIHk9Ijc3Ljk5NTEiPlNhbGVzbWFuPC90ZXh0PjxlbGxpcHNlIGN4PSIxMDAuNSIgY3k9IjEzLjUiIGZpbGw9IiNFMkUyRjAiIHJ4PSI4IiByeT0iOCIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDowLjU7Ii8+PHBhdGggZD0iTTEwMC41LDIxLjUgTDEwMC41LDQ4LjUgTTg3LjUsMjkuNSBMMTEzLjUsMjkuNSBNMTAwLjUsNDguNSBMODcuNSw2My41IE0xMDAuNSw0OC41IEwxMTMuNSw2My41ICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDowLjU7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNjciIHg9IjY0IiB5PSI5OTIuMTQzNiI+U2FsZXNtYW48L3RleHQ+PGVsbGlwc2UgY3g9IjEwMC41IiBjeT0iMTAwMy45NDUzIiBmaWxsPSIjRTJFMkYwIiByeD0iOCIgcnk9IjgiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjxwYXRoIGQ9Ik0xMDAuNSwxMDExLjk0NTMgTDEwMC41LDEwMzguOTQ1MyBNODcuNSwxMDE5Ljk0NTMgTDExMy41LDEwMTkuOTQ1MyBNMTAwLjUsMTAzOC45NDUzIEw4Ny41LDEwNTMuOTQ1MyBNMTAwLjUsMTAzOC45NDUzIEwxMTMuNSwxMDUzLjk0NTMgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxMDgiIHg9IjE0NyIgeT0iNzcuOTk1MSI+U3RyYXRhQ3VzdG9tZXI8L3RleHQ+PGVsbGlwc2UgY3g9IjIwNCIgY3k9IjEzLjUiIGZpbGw9IiNFMkUyRjAiIHJ4PSI4IiByeT0iOCIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDowLjU7Ii8+PHBhdGggZD0iTTIwNCwyMS41IEwyMDQsNDguNSBNMTkxLDI5LjUgTDIxNywyOS41IE0yMDQsNDguNSBMMTkxLDYzLjUgTTIwNCw0OC41IEwyMTcsNjMuNSAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEwOCIgeD0iMTQ3IiB5PSI5OTIuMTQzNiI+U3RyYXRhQ3VzdG9tZXI8L3RleHQ+PGVsbGlwc2UgY3g9IjIwNCIgY3k9IjEwMDMuOTQ1MyIgZmlsbD0iI0UyRTJGMCIgcng9IjgiIHJ5PSI4IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48cGF0aCBkPSJNMjA0LDEwMTEuOTQ1MyBMMjA0LDEwMzguOTQ1MyBNMTkxLDEwMTkuOTQ1MyBMMjE3LDEwMTkuOTQ1MyBNMjA0LDEwMzguOTQ1MyBMMTkxLDEwNTMuOTQ1MyBNMjA0LDEwMzguOTQ1MyBMMjE3LDEwNTMuOTQ1MyAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjUzIiB4PSIyODIiIHk9Ijc3Ljk5NTEiPlN0cmF0YVVJPC90ZXh0PjxwYXRoIGQ9Ik0yOTEsMzcgTDI5MSw2MSBNMjkxLDQ5IEwzMDgsNDkgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48ZWxsaXBzZSBjeD0iMzIwIiBjeT0iNDkiIGZpbGw9IiNFMkUyRjAiIHJ4PSIxMiIgcnk9IjEyIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI1MyIgeD0iMjgyIiB5PSI5OTIuMTQzNiI+U3RyYXRhVUk8L3RleHQ+PHBhdGggZD0iTTI5MSw5OTkuNDQ1MyBMMjkxLDEwMjMuNDQ1MyBNMjkxLDEwMTEuNDQ1MyBMMzA4LDEwMTEuNDQ1MyAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjxlbGxpcHNlIGN4PSIzMjAiIGN5PSIxMDExLjQ0NTMiIGZpbGw9IiNFMkUyRjAiIHJ4PSIxMiIgcnk9IjEyIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI1OSIgeD0iNDczIiB5PSI3Ny45OTUxIj5TdHJhdGFCRTwvdGV4dD48ZWxsaXBzZSBjeD0iNTA1LjUiIGN5PSI0OSIgZmlsbD0iI0UyRTJGMCIgcng9IjEyIiByeT0iMTIiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIgeDE9IjQ5My41IiB4Mj0iNTE3LjUiIHkxPSI2MyIgeTI9IjYzIi8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNTkiIHg9IjQ3MyIgeT0iOTkyLjE0MzYiPlN0cmF0YUJFPC90ZXh0PjxlbGxpcHNlIGN4PSI1MDUuNSIgY3k9IjEwMTEuNDQ1MyIgZmlsbD0iI0UyRTJGMCIgcng9IjEyIiByeT0iMTIiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIgeDE9IjQ5My41IiB4Mj0iNTE3LjUiIHkxPSIxMDI1LjQ0NTMiIHkyPSIxMDI1LjQ0NTMiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI2NiIgeD0iNzg2LjUiIHk9Ijc3Ljk5NTEiPkRvY3VzaWduPC90ZXh0PjxwYXRoIGQ9Ik04MDIsMzcgTDgwMiw2MSBNODAyLDQ5IEw4MTksNDkgIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48ZWxsaXBzZSBjeD0iODMxIiBjeT0iNDkiIGZpbGw9IiNFMkUyRjAiIHJ4PSIxMiIgcnk9IjEyIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjAuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI2NiIgeD0iNzg2LjUiIHk9Ijk5Mi4xNDM2Ij5Eb2N1c2lnbjwvdGV4dD48cGF0aCBkPSJNODAyLDk5OS40NDUzIEw4MDIsMTAyMy40NDUzIE04MDIsMTAxMS40NDUzIEw4MTksMTAxMS40NDUzICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDowLjU7Ii8+PGVsbGlwc2UgY3g9IjgzMSIgY3k9IjEwMTEuNDQ1MyIgZmlsbD0iI0UyRTJGMCIgcng9IjEyIiByeT0iMTIiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MC41OyIvPjxyZWN0IGZpbGw9IiNGRkZGRkYiIGhlaWdodD0iMjM1LjA2MjUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgd2lkdGg9IjEwIiB4PSIzMDYuNSIgeT0iMzQ0LjM1OTQiLz48cmVjdCBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9Ijg3LjM5ODQiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgd2lkdGg9IjEwIiB4PSIzMDYuNSIgeT0iODY3Ljc1Ii8+PHJlY3QgZmlsbD0iI0ZGRkZGRiIgaGVpZ2h0PSIxNzYuNzk2OSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7IiB3aWR0aD0iMTAiIHg9IjUwMC41IiB5PSIzNzMuNDkyMiIvPjxyZWN0IGZpbGw9IiNFRUVFRUUiIGhlaWdodD0iMyIgc3R5bGU9InN0cm9rZTojRUVFRUVFO3N0cm9rZS13aWR0aDoxLjA7IiB3aWR0aD0iODc4LjUiIHg9IjAiIHk9IjExMS44NjMzIi8+PGxpbmUgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7IiB4MT0iMCIgeDI9Ijg3OC41IiB5MT0iMTExLjg2MzMiIHkyPSIxMTEuODYzMyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjAiIHgyPSI4NzguNSIgeTE9IjExNC44NjMzIiB5Mj0iMTE0Ljg2MzMiLz48cmVjdCBmaWxsPSIjRUVFRUVFIiBoZWlnaHQ9IjIzLjEzMjgiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4wOyIgd2lkdGg9IjEwOCIgeD0iMzg1LjI1IiB5PSIxMDEuMjk2OSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI4OSIgeD0iMzkxLjI1IiB5PSIxMTcuMzYzOCI+SW5pdGlhbGl6YXRpb248L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSIyOTkuNSwxNTEuNTYyNSwzMDkuNSwxNTUuNTYyNSwyOTkuNSwxNTkuNTYyNSwzMDMuNSwxNTUuNTYyNSIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7IiB4MT0iMjkuNSIgeDI9IjMwNS41IiB5MT0iMTU1LjU2MjUiIHkyPSIxNTUuNTYyNSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEwMyIgeD0iMzYuNSIgeT0iMTUwLjQ5NjYiPlJlcXVlc3QgYXBwIGluaXQ8L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSI0OTMuNSwxODAuNjk1Myw1MDMuNSwxODQuNjk1Myw0OTMuNSwxODguNjk1Myw0OTcuNSwxODQuNjk1MyIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7IiB4MT0iMzExLjUiIHgyPSI0OTkuNSIgeTE9IjE4NC42OTUzIiB5Mj0iMTg0LjY5NTMiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxMzYiIHg9IjMxOC41IiB5PSIxNzkuNjI5NCI+UmVxdWVzdCBjb25zZW50IFVSTDwvdGV4dD48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjMyMi41LDIwOS44MjgxLDMxMi41LDIxMy44MjgxLDMyMi41LDIxNy44MjgxLDMxOC41LDIxMy44MjgxIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIzMTYuNSIgeDI9IjUwNC41IiB5MT0iMjEzLjgyODEiIHkyPSIyMTMuODI4MSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEyNiIgeD0iMzI4LjUiIHk9IjIwOC43NjIyIj5SZXR1cm4gY29uc2VudCBVUkw8L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSI0MC41LDIzOC45NjA5LDMwLjUsMjQyLjk2MDksNDAuNSwyNDYuOTYwOSwzNi41LDI0Mi45NjA5IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIzNC41IiB4Mj0iMzEwLjUiIHkxPSIyNDIuOTYwOSIgeTI9IjI0Mi45NjA5Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTM2IiB4PSI0Ni41IiB5PSIyMzcuODk1Ij5SZWRpcmVjdCBjb25zZW50IFVSTDwvdGV4dD48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjgxMC41LDI2OC4wOTM4LDgyMC41LDI3Mi4wOTM4LDgxMC41LDI3Ni4wOTM4LDgxNC41LDI3Mi4wOTM4IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIyOS41IiB4Mj0iODE2LjUiIHkxPSIyNzIuMDkzOCIgeTI9IjI3Mi4wOTM4Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTQ3IiB4PSIzNi41IiB5PSIyNjcuMDI3OCI+TG9naW4gYW5kIGdpdmUgY29uc2VudDwvdGV4dD48cmVjdCBmaWxsPSIjRUVFRUVFIiBoZWlnaHQ9IjMiIHN0eWxlPSJzdHJva2U6I0VFRUVFRTtzdHJva2Utd2lkdGg6MS4wOyIgd2lkdGg9Ijg3OC41IiB4PSIwIiB5PSIzMDAuNjYwMiIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjAiIHgyPSI4NzguNSIgeTE9IjMwMC42NjAyIiB5Mj0iMzAwLjY2MDIiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIwIiB4Mj0iODc4LjUiIHkxPSIzMDMuNjYwMiIgeTI9IjMwMy42NjAyIi8+PHJlY3QgZmlsbD0iI0VFRUVFRSIgaGVpZ2h0PSIyMy4xMzI4IiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMDsiIHdpZHRoPSIxMTIiIHg9IjM4My4yNSIgeT0iMjkwLjA5MzgiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iOTMiIHg9IjM4OS4yNSIgeT0iMzA2LjE2MDYiPlJlZ3VsYXIgZmxvdzwvdGV4dD48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjI5NC41LDM0MC4zNTk0LDMwNC41LDM0NC4zNTk0LDI5NC41LDM0OC4zNTk0LDI5OC41LDM0NC4zNTk0IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIxMDAuNSIgeDI9IjMwMC41IiB5MT0iMzQ0LjM1OTQiIHkyPSIzNDQuMzU5NCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE4NyIgeD0iMTA3LjUiIHk9IjMzOS4yOTM1Ij5SZXF1ZXN0IERvY3VtZW50IHNpZ25hdHVyZTwvdGV4dD48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjQ4OC41LDM2OS40OTIyLDQ5OC41LDM3My40OTIyLDQ4OC41LDM3Ny40OTIyLDQ5Mi41LDM3My40OTIyIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIzMTYuNSIgeDI9IjQ5NC41IiB5MT0iMzczLjQ5MjIiIHkyPSIzNzMuNDkyMiIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEyOSIgeD0iMzIzLjUiIHk9IjM2OC40MjYzIj5SZXF1ZXN0IEUtc2lnbmF0dXJlPC90ZXh0PjxwYXRoIGQ9Ik00NjMsMzg4LjQ5MjIgTDYwNCwzODguNDkyMiBMNjA0LDM5NS42MjUgTDU5NCw0MDUuNjI1IEw0NjMsNDA1LjYyNSBMNDYzLDM4OC40OTIyICIgZmlsbD0iI0VFRUVFRSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSI3NS4zOTg0IiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSI0MDUuNSIgeD0iNDYzIiB5PSIzODguNDkyMiIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI5NiIgeD0iNDc4IiB5PSI0MDEuNTU5MSI+QXV0aCByZXF1ZXN0PC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iODEwLjUsNDIyLjc1NzgsODIwLjUsNDI2Ljc1NzgsODEwLjUsNDMwLjc1NzgsODE0LjUsNDI2Ljc1NzgiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjUxMC41IiB4Mj0iODE2LjUiIHkxPSI0MjYuNzU3OCIgeTI9IjQyNi43NTc4Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTE3IiB4PSI1MTcuNSIgeT0iNDIxLjY5MTkiPlJlcXVlc3QgSldUIHRva2VuPC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iNTIxLjUsNDUxLjg5MDYsNTExLjUsNDU1Ljg5MDYsNTIxLjUsNDU5Ljg5MDYsNTE3LjUsNDU1Ljg5MDYiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjUxNS41IiB4Mj0iODIxLjUiIHkxPSI0NTUuODkwNiIgeTI9IjQ1NS44OTA2Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTA3IiB4PSI1MjcuNSIgeT0iNDUwLjgyNDciPlJldHVybiBKV1QgdG9rZW48L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSI4MTAuNSw0ODguMDIzNCw4MjAuNSw0OTIuMDIzNCw4MTAuNSw0OTYuMDIzNCw4MTQuNSw0OTIuMDIzNCIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7IiB4MT0iNTEwLjUiIHgyPSI4MTYuNSIgeTE9IjQ5Mi4wMjM0IiB5Mj0iNDkyLjAyMzQiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyODgiIHg9IjUxNy41IiB5PSI0ODYuOTU3NSI+UmVxdWVzdCBkb2N1bWVudCBzaWduYXR1cmUgdXNpbmcgSldUIHRva2VuPC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iNTIxLjUsNTE3LjE1NjMsNTExLjUsNTIxLjE1NjMsNTIxLjUsNTI1LjE1NjMsNTE3LjUsNTIxLjE1NjMiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjUxNS41IiB4Mj0iODIxLjUiIHkxPSI1MjEuMTU2MyIgeTI9IjUyMS4xNTYzIi8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMjI1IiB4PSI1MjcuNSIgeT0iNTE2LjA5MDMiPlVwZGF0ZSBkb2N1bWVudCBzdGF0dXMgW0NyZWF0ZWRdPC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iMzI3LjUsNTQ2LjI4OTEsMzE3LjUsNTUwLjI4OTEsMzI3LjUsNTU0LjI4OTEsMzIzLjUsNTUwLjI4OTEiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wO3N0cm9rZS1kYXNoYXJyYXk6Mi4wLDIuMDsiIHgxPSIzMjEuNSIgeDI9IjUwNC41IiB5MT0iNTUwLjI4OTEiIHkyPSI1NTAuMjg5MSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE3IiB4PSIzMzMuNSIgeT0iNTQ1LjIyMzEiPk9rPC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iMTExLjUsNTc1LjQyMTksMTAxLjUsNTc5LjQyMTksMTExLjUsNTgzLjQyMTksMTA3LjUsNTc5LjQyMTkiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wO3N0cm9rZS1kYXNoYXJyYXk6Mi4wLDIuMDsiIHgxPSIxMDUuNSIgeDI9IjMxMC41IiB5MT0iNTc5LjQyMTkiIHkyPSI1NzkuNDIxOSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE3IiB4PSIxMTcuNSIgeT0iNTc0LjM1NiI+T2s8L3RleHQ+PHBhdGggZD0iTTEzNyw1OTQuNDIxOSBMMzk4LDU5NC40MjE5IEwzOTgsNjAxLjU1NDcgTDM4OCw2MTEuNTU0NyBMMTM3LDYxMS41NTQ3IEwxMzcsNTk0LjQyMTkgIiBmaWxsPSIjRUVFRUVFIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiLz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjE2Mi43OTY5IiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiIHdpZHRoPSI3MzEuNSIgeD0iMTM3IiB5PSI1OTQuNDIxOSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyMTYiIHg9IjE1MiIgeT0iNjA3LjQ4ODgiPkRvY3VzaWduIHNpZ25hdHVyZSBzdW1tYXJ5PC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iMjE1LDYyOC42ODc1LDIwNSw2MzIuNjg3NSwyMTUsNjM2LjY4NzUsMjExLDYzMi42ODc1IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIyMDkiIHgyPSI4MjEuNSIgeTE9IjYzMi42ODc1IiB5Mj0iNjMyLjY4NzUiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyNjgiIHg9IjIyMSIgeT0iNjI3LjYyMTYiPlNlbmQgZG9jdW1lbnQgc2lnbmF0dXJlIHJlcXVlc3QgW2VtYWlsXTwvdGV4dD48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjUxNi41LDY1Ny44MjAzLDUwNi41LDY2MS44MjAzLDUxNi41LDY2NS44MjAzLDUxMi41LDY2MS44MjAzIiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSI1MTAuNSIgeDI9IjgyMS41IiB5MT0iNjYxLjgyMDMiIHkyPSI2NjEuODIwMyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjIyMyIgeD0iNTIyLjUiIHk9IjY1Ni43NTQ0Ij5VcGRhdGUgZG9jdW1lbnQgc3RhdHVzIFtTZW5kZWRdPC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iODEwLjUsNjg2Ljk1MzEsODIwLjUsNjkwLjk1MzEsODEwLjUsNjk0Ljk1MzEsODE0LjUsNjkwLjk1MzEiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjIwNCIgeDI9IjgxNi41IiB5MT0iNjkwLjk1MzEiIHkyPSI2OTAuOTUzMSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9Ijk3IiB4PSIyMTEiIHk9IjY4NS44ODcyIj5TaWduIGRvY3VtZW50PC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iMjE1LDcxNi4wODU5LDIwNSw3MjAuMDg1OSwyMTUsNzI0LjA4NTksMjExLDcyMC4wODU5IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIyMDkiIHgyPSI4MjEuNSIgeTE9IjcyMC4wODU5IiB5Mj0iNzIwLjA4NTkiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyMjEiIHg9IjIyMSIgeT0iNzE1LjAyIj5SZXR1cm4gc2lnbmVkIGRvY3VtZW50IFtlbWFpbC91aV08L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSI1MTYuNSw3NDUuMjE4OCw1MDYuNSw3NDkuMjE4OCw1MTYuNSw3NTMuMjE4OCw1MTIuNSw3NDkuMjE4OCIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7IiB4MT0iNTEwLjUiIHgyPSI4MjEuNSIgeTE9Ijc0OS4yMTg4IiB5Mj0iNzQ5LjIxODgiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyMTgiIHg9IjUyMi41IiB5PSI3NDQuMTUyOCI+VXBkYXRlIGRvY3VtZW50IHN0YXR1cyBbU2lnbmVkXTwvdGV4dD48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjgxMC41LDc4MS4zNTE2LDgyMC41LDc4NS4zNTE2LDgxMC41LDc4OS4zNTE2LDgxNC41LDc4NS4zNTE2IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSI1MDUuNSIgeDI9IjgxNi41IiB5MT0iNzg1LjM1MTYiIHkyPSI3ODUuMzUxNiIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE5MSIgeD0iNTEyLjUiIHk9Ijc4MC4yODU2Ij5SZXF1ZXN0IGRvY3VtZW50IGRhdGEgZmllbGRzPC90ZXh0Pjxwb2x5Z29uIGZpbGw9IiMxODE4MTgiIHBvaW50cz0iNTE2LjUsODEwLjQ4NDQsNTA2LjUsODE0LjQ4NDQsNTE2LjUsODE4LjQ4NDQsNTEyLjUsODE0LjQ4NDQiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjUxMC41IiB4Mj0iODIxLjUiIHkxPSI4MTQuNDg0NCIgeTI9IjgxNC40ODQ0Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTgxIiB4PSI1MjIuNSIgeT0iODA5LjQxODUiPlJldHVybiBkb2N1bWVudCBkYXRhIGZpZWxkczwvdGV4dD48cGF0aCBkPSJNNTQsODI5LjQ4NDQgTDEzMSw4MjkuNDg0NCBMMTMxLDgzNi42MTcyIEwxMjEsODQ2LjYxNzIgTDU0LDg0Ni42MTcyIEw1NCw4MjkuNDg0NCAiIGZpbGw9IiNFRUVFRUUiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMTMzLjY2NDEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjQ5NCIgeD0iNTQiIHk9IjgyOS40ODQ0Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjMyIiB4PSI2OSIgeT0iODQyLjU1MTMiPmxvb3A8L3RleHQ+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE2MCIgeD0iMTQ2IiB5PSI4NDEuNjk0OCI+W0NoZWNrIGRvY3VtZW50IHN0YXR1c108L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSIyOTQuNSw4NjMuNzUsMzA0LjUsODY3Ljc1LDI5NC41LDg3MS43NSwyOTguNSw4NjcuNzUiIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzE4MTgxODtzdHJva2Utd2lkdGg6MS4wOyIgeDE9IjEwMC41IiB4Mj0iMzAwLjUiIHkxPSI4NjcuNzUiIHkyPSI4NjcuNzUiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxNjUiIHg9IjEwNy41IiB5PSI4NjIuNjg0MSI+UmVxdWVzdCBkb2N1bWVudCBzdGF0dXM8L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSI0OTMuNSw4OTIuODgyOCw1MDMuNSw4OTYuODgyOCw0OTMuNSw5MDAuODgyOCw0OTcuNSw4OTYuODgyOCIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7IiB4MT0iMzE2LjUiIHgyPSI0OTkuNSIgeTE9Ijg5Ni44ODI4IiB5Mj0iODk2Ljg4MjgiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxNjUiIHg9IjMyMy41IiB5PSI4OTEuODE2OSI+UmVxdWVzdCBkb2N1bWVudCBzdGF0dXM8L3RleHQ+PHBvbHlnb24gZmlsbD0iIzE4MTgxOCIgcG9pbnRzPSIzMjcuNSw5MjIuMDE1NiwzMTcuNSw5MjYuMDE1NiwzMjcuNSw5MzAuMDE1NiwzMjMuNSw5MjYuMDE1NiIgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMTgxODE4O3N0cm9rZS13aWR0aDoxLjA7IiB4MT0iMzIxLjUiIHgyPSI1MDQuNSIgeTE9IjkyNi4wMTU2IiB5Mj0iOTI2LjAxNTYiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxNTUiIHg9IjMzMy41IiB5PSI5MjAuOTQ5NyI+UmV0dXJuIGRvY3VtZW50IHN0YXR1czwvdGV4dD48cG9seWdvbiBmaWxsPSIjMTgxODE4IiBwb2ludHM9IjExMS41LDk1MS4xNDg0LDEwMS41LDk1NS4xNDg0LDExMS41LDk1OS4xNDg0LDEwNy41LDk1NS4xNDg0IiBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMxODE4MTg7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIxMDUuNSIgeDI9IjMxMC41IiB5MT0iOTU1LjE0ODQiIHkyPSI5NTUuMTQ4NCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE1NSIgeD0iMTE3LjUiIHk9Ijk1MC4wODI1Ij5SZXR1cm4gZG9jdW1lbnQgc3RhdHVzPC90ZXh0PjwhLS1TUkM9W2JMSDFSaThtNDNvcGh6V0ZlRHdIZzBHS0xRc0dBYTVIM3VZMzZvXzE4aDVKbndQZ05yeXhuMzZHNDlMUlJDX0VwZXBOT09iSDZZU3k1bjlPelJyWTZQS3ZRdlA2Q3lEY2paR2c5bXNWb2FoRXo0LXpsdHUxYWFRT2k5eEU4LTk5OVJPS2dHR09aXzU1MllETzlkd1A0S2hZVTBuR0RTTlhPcUNybVlMek1JZURpZzkwdUllMG1iZDRKVVNIYm9YUGtsd3VOWXVXZDV1cDZnamIxXzE0TU1kbUEydXE5UFU0WlJ2V1A4R0JiUmVqOVpjY3VhVzFOSGJTS2NlcGZkNk5nVV9BTmlZbnN3N2RwN3FkSnlvU0hsOXZZb0NwNUFGakRweVZ0Z25ycm0zRk1qYTI5elJpS1B5Z083MlVLTkdMMjV5X3RqNmUwcWFPWENGaHBiTU80S1VJMF9JSnlmUEhUMFlQZGg1cURyaU50MWtBelNQTGJ4WVBRTkJ4VjdsTXpvQlhqbURtUWtTSGlfSmUtY3d3cUl4dkVocjZNSEhWc1pudHF6cVhFaG9INFF2U0JidDZ3dGwwM1VMQ1BEaXhaTmxNdzNqcWtxbnp2VGIyUFFfNi1ZeHpDUHM5RktieGlFOWtUSE5IcmV5NF9kU2E3MUYzZFEyQ2J6MHhTUHFMYTJiTHU2bkZvVTVRWmZscXRqVk5XaFNkT0QzXy1EZUQtdHVfRHowclVKRUNqejFUNHJlemxKeTBdLS0+PC9nPjwvc3ZnPg==",alt:"plantuml"})})]})}function g(I={}){const{wrapper:i}={...(0,l.R)(),...I.components};return i?(0,e.jsx)(i,{...I,children:(0,e.jsx)(c,{...I})}):c(I)}},4971:(I,i,M)=>{M.d(i,{A:()=>Z});var e=M(6540),l=M(4164),d=M(3427),j=M(2303),D=M(1422);const N={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var s=M(4848);function n(I){return!!I&&("SUMMARY"===I.tagName||n(I.parentElement))}function t(I,i){return!!I&&(I===i||t(I.parentElement,i))}function c(I){let{summary:i,children:M,...c}=I;(0,d.A)().collectAnchor(c.id);const g=(0,j.A)(),T=(0,e.useRef)(null),{collapsed:a,setCollapsed:Z}=(0,D.u)({initialState:!c.open}),[x,u]=(0,e.useState)(c.open),o=e.isValidElement(i)?i:(0,s.jsx)("summary",{children:i??"Details"});return(0,s.jsxs)("details",{...c,ref:T,open:x,"data-collapsed":a,className:(0,l.A)(N.details,g&&N.isBrowser,c.className),onMouseDown:I=>{n(I.target)&&I.detail>1&&I.preventDefault()},onClick:I=>{I.stopPropagation();const i=I.target;n(i)&&t(i,T.current)&&(I.preventDefault(),a?(Z(!1),u(!0)):Z(!0))},children:[o,(0,s.jsx)(D.N,{lazy:!1,collapsed:a,disableSSRStyle:!0,onCollapseTransitionEnd:I=>{Z(I),u(!I)},children:(0,s.jsx)("div",{className:N.collapsibleContent,children:M})})]})}const g={details:"details_b_Ee"},T="alert alert--info";function a(I){let{...i}=I;return(0,s.jsx)(c,{...i,className:(0,l.A)(T,g.details,i.className)})}function Z(I){const i=e.Children.toArray(I.children),M=i.find((I=>e.isValidElement(I)&&"summary"===I.type)),l=(0,s.jsx)(s.Fragment,{children:i.filter((I=>I!==M))});return(0,s.jsx)(a,{...I,summary:M,children:l})}},8453:(I,i,M)=>{M.d(i,{R:()=>j,x:()=>D});var e=M(6540);const l={},d=e.createContext(l);function j(I){const i=e.useContext(d);return e.useMemo((function(){return"function"==typeof I?I(i):{...i,...I}}),[i,I])}function D(I){let i;return i=I.disableParentContext?"function"==typeof I.components?I.components(l):I.components||l:j(I.components),e.createElement(d.Provider,{value:i},I.children)}}}]);