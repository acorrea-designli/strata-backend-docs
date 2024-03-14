---
sidebar_position: 1
---

# Get Product and inputs

We can get all products with their respective inputs, input types and input values. This is useful to get all the information about a product and its inputs.

```graphql
query GetAllProductsAndInputs {
  findAllProducts {
    items {
      displayName
      description
      name
      uuid
      inputs {
        items {
          name
          uuid
          description
          fieldType {
            name
            uuid
            description
          }
          fieldValues {
            items {
              value
              description
              uuid
            }
          }
        }
      }
    }
  }
}
```
:::note
Wee will need the `product` and `user` uuid later to set the product to the user.
:::

:::note
Wee will need the `fieldValues` uuid to set the input values that the user choose.
:::

:::tip
This query doesnt have all the fields that a product has, but we can add them if we need them.
:::