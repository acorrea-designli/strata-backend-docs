# Price Quote

To set the price of a subscription, we can use the `quotePrice` mutation after creating an organization. 

:::tip
When a Price Quote is created, the `OrganizationOnboardingStep` will be updated to `price quoted`.
:::

```graphql
mutation QuotePrice($data: CreatePriceQuoteInput!) {
  quotePrice(data: $data) {
    uuid
    createdAt
    updatedAt
    basePrice
    discount
    finalPrice
    term
    details
  }
}

```

```json
{
  "data": {
    "basePrice": , // base price of the subscription
    "discount": , // % discount on the subscription E.g. 10, 20, 30
    "details": "",
    "term": 1, // term of the subscription in years
    "organization": {
      "uuid": "" // organization uuid
    },
    "user": {
      "uuid": "" // user updating company
    },
    "products": [ // list of products related to the subscription
      {
        "uuid": ""
      },
      ... 
    ]
  }
}
```

:::note
The producs array should contain the uuid of the [products](../../Product/get.md) related to the subscription. 
:::