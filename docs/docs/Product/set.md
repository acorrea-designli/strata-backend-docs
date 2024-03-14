---
sidebar_position: 2
---

# User selections

To simplify this process, we have a mutation that sets a product to a user and other mutation that sets the input values that the user choose.

## Set Product to User

We can set a product to a user with the following mutation.

```graphql
mutation SetUserProduct($data: SetProductInput!) {
  setUserProduct(data: $data) {
    uuid
    createdAt
    updatedAt
  }
}
```

```json
{
  "data": {
    "productUUID": "",
    "userUUID": ""
  }
}
```
:::warning
We can add multiple products to a user. But a user can only have one product of each type.
:::

:::note
This mutation will return the `UserSelectedProductValue` type.
:::



## Set Input Values to User

We can set the input values that the user choose with the following mutation.

```graphql
mutation SetUserProductFieldValue($data: SetInputValueInput!) {
  setUserProductFieldValue(data: $data) {
    uuid
  }
}
```

```json
{
  "data": {
	"userSelectedProductUUID": "",
	"inputValueUUID": ""
  }
}
```
:::warning
The backend doesn't check if the registered `fieldValue` amount are the actual amount of the `fieldType` that the product can have.
For example, if a product has a `fieldType` of `select` and the `fieldValue` amount is 2, the backend will accept it, even if `select` `fieldType` can have 1 `fieldValue` at most.
:::

:::note
This mutation will return the `UserSelectedProductValue` type.
:::
