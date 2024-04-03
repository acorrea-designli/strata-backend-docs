---
sidebar_position: 2
sidebar_label: Authenticating with the API
---

# Logging in

To get access to the api private enpoints, we will need to authenticate with the api. This is done by making a Query to the `login` endpoint with the `username` and `password`

``` graphql

query Login($data: LogInInput!) {
  login(data: $data) {
    access_token
    refresh_token
    id_token
    token_type
  }
}
```

``` json
{
  "data": {
    "email": "",
    "password": ""
  }
}
```

this will return a response with the `access_token`, `refresh_token`, `id_token` and `token_type` which will be used to make requests to the api.

Or making a POST request to the `/auth` endpoint with the `username` and `password`

``` json
{
  "email": "",
  "password": ""
}

```


# Refreshing the token

The `refresh_token` can be used to get a new `access_token` and `id_token` when the `access_token` expires. This is done by making a Query to the `refreshToken` endpoint with the `refresh_token`

``` graphql
query RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    access_token
    refresh_token
    id_token
    token_type
  }
}
```

``` json
{
  "refreshToken": ""
}
```

Or making a POST request to the `/auth/token` endpoint with the `refresh_token`

``` json
{
  "refreshToken": ""
}

```

# Making requests

To make requests to the api, you will need to include the `access_token` in the `Authorization` header of the request. The `access_token` should be prefixed with `Bearer` and a space
