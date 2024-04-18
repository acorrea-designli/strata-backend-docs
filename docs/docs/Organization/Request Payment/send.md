# Request Payment

To handle the payments a Stripe subscription will be created using the `createSubscription` mutation. The organization must be in the `signed` status.

```graphql
mutation CreateSubscription($data: CreateSubscriptionInput!) {
  createSubscription(data: $data)
}
```

```json
{
  "data": {
    "user": {
      "uuid": "" // the UUID of the user that requested the payment
    },
    "organization": {
      "uuid": "" // the UUID of the organization that will be charged
    }
  }
}
```

## Status change
This flow will take the organization from the `signed` status to the `completed` status.

- `pending payment`: when the payment is requested.
- `completed`: when the payment is completed.

Aditionaly, the `Payment` entity will be created.

