# Query Agreement and Billing

To query an agreement and its billing, you can use the following query.

```graphql
query OrganizationAgreement($options: FilterDto) {
  findAllOrganizations(options: $options) {
    items {
      organizationProducts {
        items {
          agreement {
            uuid
            createdAt
            updatedAt
            documentID
            status
          }
          billingInfo {
            uuid
            createdAt
            updatedAt
            firstName
            lastName
            fullName
            email
            phone
            address
          }
        }
      }
      uuid
    }
  }
}
```

```json
{
  "options": {
    "filter": [
      {
        "field": "uuid",
        "type": "Eq", 
        "value": "" // Organization UUID
      }
    ]
  }
}
```

The organization products can have duplicated agreements and billing information since we are querying a facts table that contains all the products that the organization has.

:::tip
Its safe to assume that the first item of the array the only one that is valid. So we can filter the first item like this:


```graphql
query Items($options: FilterDto, $organizationProductsOptions: FilterDto) {
  findAllOrganizations(options: $options) {
    items {
      organizationProducts(options: $organizationProductsOptions) {
        items {
          agreement {
            uuid
            createdAt
            updatedAt
            documentID
            status
          }
          billingInfo {
            uuid
            createdAt
            updatedAt
            firstName
            lastName
            fullName
            email
            phone
            address
          }
        }
      }
    }
  }
}
```

```json
{
  "options": {
    "filter": [
      {
        "field": "uuid",
        "type": "Eq",
        "value": "" // Organization UUID
      }
    ]
  },
  "organizationProductsOptions": {
    "limit": 1,
    "offset": 0
  }
}
```
:::