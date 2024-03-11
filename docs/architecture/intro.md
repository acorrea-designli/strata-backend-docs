---
sidebar_position: 1
---

# Introduction

The backend consist of a REST and a GraphQL API, both of them are hosted on AWS Lambda. The REST API is used for interoperability with other services, while the GraphQL API is used for the communication with the frontend.

Both APIs are generated using the `Backend Engine` template, which is a template that generates a REST and a GraphQL API using the [Entity Relationship Diagram](./erd).

:::warning pluralization
The `Backend Engine` template generates the endpoints based on a .xlsx file, and the pluralization of the endpoints is based on the entity name. For this reason, there are some endpoints that has a wrong pluralization, like `citys` instead of `cities`.

> There are some solutions to fix this issue, but they are not implemented yet.
:::