---
sidebar_position: 2
---

# Update user step 

And the following mutation can be used to persist the onboarding step.

``` graphql
mutation SetUserOnboardingStep($data: UpdateUserInput!) {
    updateUser(data: $data) {
        uuid
        email
        onboardingStep {
            name
            description
            uuid
        }
    }
}
```

``` json
{
  "data": {
    "uuid": "",
    "onboardingStep": {
      "uuid": ""
    }
  }
}
```
:::info

When a user is created, the onboarding step is automatically set to the `credentials` step.

:::