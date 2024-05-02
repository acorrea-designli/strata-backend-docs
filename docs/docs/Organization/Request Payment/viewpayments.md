# View Payments

To get the list of payments made by the organization, you can use the following query.

```graphql
query GetSubscriptionPayments($data: GetSubscriptionPaymentsInput!) {
  getSubscriptionPayments(data: $data) {
    items {
      id
      amount
      amount_received
      created
      currency
      description
      receipt_email
      customer
      invoice
      last_payment_error
      latest_charge
      canceled_at
      cancellation_reason
    }
    has_more
  }
}
```
```json
{
  "data": {
    "organization": {
      "uuid": "" // organization uuid
    },
    "limit": 1, // number of payments to be fetched
    "strarting_after": null // optional id of the last payment fetched
  }
}
```