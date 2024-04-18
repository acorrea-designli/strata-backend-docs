# Get Organization Payment

We can check the payment status of an organization by using the `findOrganization` query and filtering by the `uuid` of the organization, specifically the `organizationProducts` field.

All subscriptions statuses are defined in the *[subscription status enum](../../../enums/subscriptions-status.md)*.

``` graphql
query FindOrganizationPayments($options: FilterDto) {
  findAllOrganizations(options: $options) {
    items {
      organizationProducts {
        items {
          payment {
            uuid
            createdAt
            updatedAt
            status           // subscription status
            message          // payment message if any
            nextPaymentDate  // next invoice date
            lastPaymentDate  // last payment received date
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
