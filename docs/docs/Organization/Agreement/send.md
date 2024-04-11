# Send agreement

To send an agreement, the organizations needs to be in the `price quoted` status.

```graphql
mutation SendAgreement($data: SendAgreementInput!) {
  sendAgreement(data: $data)
}
```

```json
{
  "data": {
    "user": {
      "uuid": "" // the UUID of the user that is sending the agreement
    },
    "organization": {
      "uuid": "" // the UUID of the organization wich the agreement is being sent
    }
  }
}
```

After sending the agreement, the organization will be in the `pending signature` status.

:::note
If the organization is in the `pending signature` status, and the price has changed, the agreement will be automatically sent again, and the status wont change as long as the agreement is sent.
:::