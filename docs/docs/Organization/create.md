# Create Organization

The organization can be created using the following mutation.


``` graphql
mutation CreateOrganization {
    createOrganization(data: $data
        
    ) {
        uuid
        createdAt
        updatedAt
        name
        address
        phone
        mobile
        extension
        description
    }
}
```

``` json
{
    "data": {
        "city": { 
            "uuid": "" 
        },
        "profile": { 
            "uuid": "" 
        },
        "name": "",
        "address": "",
        "phone": "",
        "mobile": "",
        "extension": "",
        "description": ""
    }
}
```

:::info
Note that the `city` uuid and `profile` uuid are required fields.
:::