# Subscriptions Status

All the posible states of a subscription:

- PROCESSING: Initial state of a subscription, when the subscription invoice is being generated.
- PENDING: Subscription is waiting for payment.
- PAID: Subscription has been paid.
- OVERDUE: Subscription has not been paid and is past due (14 days).
- FAILED: Subscription payment has failed, or an error occurred during the payment process. The error message will be displayed in the `Message` field of the `Payment` entity.