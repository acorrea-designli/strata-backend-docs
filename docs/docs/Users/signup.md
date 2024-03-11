---
sidebar_position: 1
---

# SignUp

To sign up a new user, you can use the `signup` method. This method will create a new user, profile and set the onboarding step to the "credentials" step.

``` graphql
mutation SignUp($data: SignInInput!) {
    signUp(data: $data) {
        uuid
        createdAt
        updatedAt
        email
        profiles {
            items {
                uuid
            }
        }
    }
}
```

``` json
{
  "data": {
    "email": "",
    "firstName": "",
    "lastName": "",
    "password": ""
  }
}
```