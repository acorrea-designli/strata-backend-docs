# User management

## Change password

```graphql
mutation Mutation($data: SetNewPasswordInput!) {
  setNewPassword(data: $data)
}
```

```json
{
  "data": {
    "user": {
      "uuid": "" // user uuid
    },
    "password": "" // new password
  }
}
```

## Set user active/inactive

```graphql
mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    uuid
    updatedAt
    email
    isActive
  }
}
```

```json
{
  "data": {
    "isActive": // boolean
    "uuid": "" // user uuid
  }
}
```

## Set user Role

To set a user role, you need to provide the user uuid and the role uuid.

### Roles query

```graphql
query AllRoles {
  findAllRoles {
    items {
      uuid
      name
    }
  }
}
```

### Update user role

```graphql
mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    uuid
    email
    role {
      name
    }
    updatedAt
  }
}
```

```json
{
  "data": {
    "role": {
      "uuid": "" // role uuid
    },
	"uuid": "" // user uuid
  }
}
```