# Get Organization subscription

We can list the subscriptions from the organization by using the `findAllOrganizations` query and filtering by the `uuid` of the organization, specifically the `organizationProducts` field.

``` graphql
query FindAllOrganizations($options: FilterDto) {
  findAllOrganizations(options: $options) {
    items {
      uuid
      organizationProducts {
        items {
          uuid
          createdAt
          updatedAt
          product {
            uuid
            createdAt
            updatedAt
            name
            description
            displayName
            stripeID
          }
          contract {
            uuid
            createdAt
            updatedAt
            basePrice
            discount
            finalPrice
            term
            details
            stripeID
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
        "field": "uuid",
        "type": "Eq",
        "value": "", // organization uuid
      }
    ]
  }
}
```
