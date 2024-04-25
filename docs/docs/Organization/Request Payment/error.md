# Error handling

Since all the stripe integration is handled by webhooks and background jobs, the error handling will be tied to the integration status. The stripe related errors can be found in two entities, `agreements` and `payments`.

## Agreements

The Stripe errors related to agreements occur when the susbscription cant be created, this can happen when the billing information is invalid. When this happens, the organization status will be set to `signed` and the agreement status will be set to `invalid-data`. The error message will be stored in the `agreement.message` field.

To correct this error, the user must update the billing information and request the payment again.

```graphql
mutation UpdateBillingInfo($data: UpdateBillingInfoInput!) {
  updateBillingInfo(data: $data) {
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
```
```json
{
  "data": {
    "uuid": "", // Organization billing information uuid
	... // fields to update, normally email
  }
}
```

## Payments

The Stripe errors related to payments normally occur when the subscription is past due, the payment method is invalid or the payment is declined. When this happens, the `payment.status` will be set to `OVERDUE`, `FAILED` or `CANCELED`. The error message will be stored in the `payment.message` field.

To correct this error, the user must contact the organization and request the payment over the Stripe customer portal.


