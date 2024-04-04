# Get Organization

An organization can be fetched using the following query.

``` graphql
query FindAllOrganizations($options: FilterDto) {
  findAllOrganizations(options: $options) {
    items {
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
        uuid
      }
      organizationType {
        uuid
        name
      }
      organizationOnboardings {
        items {
          uuid
          createdAt
          updatedAt
          user {
            email
            uuid
          }
	  onboardingStep {
            name
          }
        }
      }
    }
  }
}
```

``` json
{
  "options": {
    "filter": [
      {
        "type": "Eq",
        "field": "uuid",
        "value": "" // Organization uuid
      }
    ],
    "limit": 1,
    "offset": 0
  }
}
```

:::info
The organizationOnboadings contains the steps that the organization has completed, the user that has been involved in each step as well as the date and time the step was completed.
:::

### List organizations by steps

Organizations can be fetched by the steps they have completed using the following query.

``` graphql
query FindAllOnboardingSteps($options: FilterDto) {
  findAllOnboardingSteps(options: $options) {
    items {
      uuid
      createdAt
      updatedAt
      name
      description
      organizationOnboardings {
        items {
          uuid
          createdAt
          updatedAt
          organization {
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
            organizationType {
              name
            }
          }
          user {
            email
          }
        }
        totalCount
        hasNextPage
      }
    }
  }
}
```

``` json
{
  "options": {
    "filter": [
      {
        "field": "name", // we can filter by step name or uuid
        "type": "Eq", 
        "value": "" // Step name
      }
    ],
    "limit": 100,
    "offset": 0
  }
}
```
