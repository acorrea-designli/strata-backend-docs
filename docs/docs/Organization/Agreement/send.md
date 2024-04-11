# Send agreement

To send an agreement, the organizations needs to be in the `price quoted` status.

:::tip
To test this behavior, all the emails (the user email, and the organization email) must be valid.

Both emails can be the same, but to diffrerentiate them, the user name and the organization name should be different. This way, when the agreement is sent, the user will receive the email with a _readonly_ copy of the agreement, and the organization will receive the email with the agreement to sign.
:::

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

:::note Price change
If the organization is in the `pending signature` status, and the price has changed, the agreement will be automatically sent again, and the status wont change as long as the agreement is sent.
:::

## Status change
This flow will take the organization from the `price quoted` status to the `pending payment` status.

- `pending signature`: when the agreement is sent.
- `signed`: when the agreement is signed.

Aditionaly, the agreement status will change according to the *[docusign status enum](../../../enums/docusign-state.md)*

:::warning Status update time
The status update is subject to the DocuSign status, so this update can take from 30 to 120 seconds to be reflected in the API.
:::
