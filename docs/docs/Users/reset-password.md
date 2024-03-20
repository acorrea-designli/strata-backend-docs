---
sidebar_position: 2
---

# Reset Password

## Step 1: Request a reset password token

To reset the password of a user, you can use the `resetPassword` method. This method will update the password of the user.

:::warning

Since the SMTP server is not yet implemented, the `resetPassword` method will not send an email to the user. Instead, it will return the token that the user can use to reset the password.

:::

``` graphql
mutation ResetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
```

``` json
{
  "data": {
    "email": "test@test.com"
  }
}
```

## Step 2: Reset the password

After you have the token, you can use the `changePassword` method to reset the password of the user.

``` graphql
mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data)
}
```

``` json
{
  "data": {
    "password": "",
    "token": ""
  }
}
```