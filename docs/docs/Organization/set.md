# Update Organization

This mutation allows to update an organization.

``` graphql
mutation UpdateOrganization($data: UpdateOrganizationInput!) {
  updateOrganization(data: $data) {
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
    "uuid": "",
	... // Organization fields to update
  }
}
```