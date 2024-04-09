# Update Price Quote

This mutation allows to update the price quote of a subscription.

```graphql
mutation UpdatePriceQuote($data: UpdatePriceQuoteInput!) {
  updatePriceQuote(data: $data) {
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
    "uuid": "",
    ... // fields to update
  }
}
```