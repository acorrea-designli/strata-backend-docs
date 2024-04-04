# Create Organization

The organization can be created using the following mutation.


``` graphql
mutation NewOrganization($data: NewOrganizationInput!) {
  newOrganization(data: $data) {
    uuid
    createdAt
    updatedAt
    subscriberFirstName
    subscriberLastName
    subscriberTitle
    subscriberEmail
    subscriberPhone
    organizationName
    organizationDescription
    address
    city {
      name
    }
    organizationType {
      name
    }
    organizationOnboardings {
      items {
        user {
          email
        }
        createdAt
        onboardingStep {
          name
        }
        updatedAt
        uuid
      }
    }
  }
}
```

``` json
{
  "data": {
    "address": "",
    "organizationDescription": "",
    "organizationName": "",
    "subscriberEmail": "",
    "subscriberFirstName": "",
    "subscriberLastName": "",
    "subscriberPhone": "",
    "subscriberTitle": "",
    "user": {
      "uuid": ""
    },
    "city": {
      "uuid": ""
    },
    "organizationType": {
      "uuid": ""
    },
  }
}
```

:::info
Note that the `city` uuid, `organizationType` uuid and `user` uuid are required fields.
:::