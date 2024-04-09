---
sidebar_position: 1
---

# Get Products

We can get all registered products in the system by using the `findAllProducts` query.

```graphql
query FindAllProducts {
  findAllProducts {
    items {
      uuid
      createdAt
      updatedAt
      name
      description
      displayName
      stripeID
    }
  }
}
```