"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Getting Started","href":"/strata-backend-docs/","docId":"docs/intro","unlisted":false},{"type":"link","label":"Authenticating with the API","href":"/strata-backend-docs/docs/authentication","docId":"docs/authentication","unlisted":false},{"type":"category","label":"Step persistance","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Find all steps","href":"/strata-backend-docs/docs/OnboardingSteps/find-steps","docId":"docs/OnboardingSteps/find-steps","unlisted":false},{"type":"link","label":"Update user step","href":"/strata-backend-docs/docs/OnboardingSteps/set-step","docId":"docs/OnboardingSteps/set-step","unlisted":false}],"href":"/strata-backend-docs/category/step-persistance"},{"type":"category","label":"Users","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SignUp","href":"/strata-backend-docs/docs/Users/signup","docId":"docs/Users/signup","unlisted":false}],"href":"/strata-backend-docs/category/users"},{"type":"category","label":"Localization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Country","href":"/strata-backend-docs/docs/Localization/country","docId":"docs/Localization/country","unlisted":false},{"type":"link","label":"State","href":"/strata-backend-docs/docs/Localization/state","docId":"docs/Localization/state","unlisted":false},{"type":"link","label":"County","href":"/strata-backend-docs/docs/Localization/county","docId":"docs/Localization/county","unlisted":false},{"type":"link","label":"City","href":"/strata-backend-docs/docs/Localization/city","docId":"docs/Localization/city","unlisted":false}],"href":"/strata-backend-docs/category/localization"},{"type":"category","label":"Organization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create Organization","href":"/strata-backend-docs/docs/Organization/create","docId":"docs/Organization/create","unlisted":false}],"href":"/strata-backend-docs/category/organization"}],"enumsSidebar":[{"type":"link","label":"FilterOperationType","href":"/strata-backend-docs/enums/FilterOperationType","docId":"enums/FilterOperationType","unlisted":false}],"architectureSidebar":[{"type":"link","label":"Introduction","href":"/strata-backend-docs/architecture/intro","docId":"architecture/intro","unlisted":false},{"type":"link","label":"ERD","href":"/strata-backend-docs/architecture/erd","docId":"architecture/erd","unlisted":false}]},"docs":{"architecture/erd":{"id":"architecture/erd","title":"ERD","description":"The ERD (Entity-Relationship Diagram) is a visual representation of the database schema. It shows the tables and the relationships between them.","sidebar":"architectureSidebar"},"architecture/intro":{"id":"architecture/intro","title":"Introduction","description":"The backend consist of a REST and a GraphQL API, both of them are hosted on AWS Lambda. The REST API is used for interoperability with other services, while the GraphQL API is used for the communication with the frontend.","sidebar":"architectureSidebar"},"docs/authentication":{"id":"docs/authentication","title":"JWT","description":"For now, we will use the following bearer token to authenticate all requests.","sidebar":"docsSidebar"},"docs/intro":{"id":"docs/intro","title":"Getting Started","description":"Currently, the API is hosted on AWS Lambda and can be accessed via the following URL:","sidebar":"docsSidebar"},"docs/Localization/city":{"id":"docs/Localization/city","title":"City","description":"Filter by state and county","sidebar":"docsSidebar"},"docs/Localization/country":{"id":"docs/Localization/country","title":"Country","description":"There should be only one country in the database, so we can use the following query to get the country uuid.","sidebar":"docsSidebar"},"docs/Localization/county":{"id":"docs/Localization/county","title":"County","description":"Filter by state","sidebar":"docsSidebar"},"docs/Localization/state":{"id":"docs/Localization/state","title":"State","description":"We can return all states since there are few of them.","sidebar":"docsSidebar"},"docs/OnboardingSteps/find-steps":{"id":"docs/OnboardingSteps/find-steps","title":"Find all steps","description":"The onboarding steps uuid can be found in the following query.","sidebar":"docsSidebar"},"docs/OnboardingSteps/set-step":{"id":"docs/OnboardingSteps/set-step","title":"Update user step","description":"And the following mutation can be used to persist the onboarding step.","sidebar":"docsSidebar"},"docs/Organization/create":{"id":"docs/Organization/create","title":"Create Organization","description":"The organization can be created using the following mutation.","sidebar":"docsSidebar"},"docs/Users/signup":{"id":"docs/Users/signup","title":"SignUp","description":"To sign up a new user, you can use the signup method. This method will create a new user, profile and set the onboarding step to the \\"credentials\\" step.","sidebar":"docsSidebar"},"enums/FilterOperationType":{"id":"enums/FilterOperationType","title":"FilterOperationType","description":"The FilterOperationType enum is used to filter the data in the database. Since the filter uses the module @chax-at/prisma-filter, the filter type is the same as the one used in the module.","sidebar":"enumsSidebar"}}}')}}]);