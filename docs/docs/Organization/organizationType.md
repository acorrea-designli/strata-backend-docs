# Organization types

We can fetch the list of organization types using the following query.

```graphql
query FindAllOrganizationTypes {
  findAllOrganizationTypes {
    hasNextPage
    totalCount
    items {
      uuid
      createdAt
      updatedAt
      name
      description
    }
  }
}A
```

:::info
The organization type uuid is needed when creating a new organization.
:::
