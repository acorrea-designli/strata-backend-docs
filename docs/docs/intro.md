---
sidebar_position: 1
slug: /
---

# Getting Started

Currently, the API is hosted on AWS Lambda and can be accessed via the following URL:

```
https://argewg729i.execute-api.us-east-1.amazonaws.com/dev/graphql
```
It is a GraphQL API and can be accessed via a GraphQL client such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

:::warning

The API is currently in development and is subject to change.

:::

## Running the API Locally

To run the API locally, you will need to have the following installed:

- Node.js
- npm

As well as a postgres database.

Once you have the above installed, you can set up the API using the environment variables in the `.env.example` file. You can copy this file and rename it to `.env` and fill in the values.

After you have set up the environment variables, you can run the following commands to start the API:

```bash
npm install
npm run start:dev
```

This will start the API on `http://localhost:5000/graphql`.