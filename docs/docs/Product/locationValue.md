---
sidebar_position: 3
---

# Represented Regions

When the user fills the `location` input, wee should show the regions that the user can choose. when the finish selecting all regions, we can use the following mutation to set the regions to the user organization.

```graphql
mutation Mutation($data: SetLocationsInput!) {
  setOrganizationRepresentativeRegions(data: $data) {
    uuid
    createdAt
    updatedAt
    organization {
      name
      uuid
    }
    city {
      name
      uuid
    }
    county {
      uuid
      name
    }
    country {
      uuid
      name
    }
    state {
      uuid
      name
    }
  }
}
```
```json
{
  "data": {
    "userUUID": "",
    "locations": [
      {
        "locationUUID": "",
        "type": ""
      },
      {
        "locationUUID": "",
        "type": ""
      },
      {
        "locationUUID": "",
        "type": ""
      },
      {
        "locationUUID": "",
        "type": ""
      }
    ]
  }
}
```

:::note
The locationUUID is the uuid of the location that the user selected. Doesn't matter if it is a city, county, country or state as long as the type is the same as the location [type](../../enums/LocationType).
:::

:::tip
We can list the locations using the queries that are in the [Location](/category/Location/) section.
:::

