---
sidebar_position: 3
---

# County

## Filter by state 

We can filter the counties by state

``` graphql
query FindAllCountiesOfState($options: FilterDto) {
    findAllStates(options: $options) {
        items {
            uuid
            createdAt
            updatedAt
            name
            description
            countys {
                items {
                    uuid
                    name
                    description
                }
                totalCount
                hasNextPage
            }
        }
    }
}
```

``` json
{
  "options": {
    "filter": [
      {
        "field": "",
        "type": "",
        "value": ""
      }
    ],
    "limit": 100,
    "offset": 0
  }
}

```

For example, we can use the following options to filter the cities of Alaska.

``` json
{
  "options": {
    "filter": [
      {
        "field": "name",
        "type": "Eq",
        "value": "Alaska"
      }
    ],
    "limit": 100,
    "offset": 0
  }
}

```

:::info

other fields can be used to filter the states, like `uuid` and `description`.

:::

:::info

The filter type can be found in the [FilterOperationType](../../enums/FilterOperationType) documentation.

:::

:::warning

The cities and counties are paginated, so we need to check if there are more pages to load.

:::

## Find county by name

Another option is to filter by city name.

``` graphql
query FindAllCounties($options: FilterDto) {
  findAllCountys(options: $options) {
    items {
      name
      description
      uuid
    }
  }
}

```

``` json
{
  "options": {
    "filter": [
      {
        "field": "",
        "type": "",
        "value": ""
      }
    ],
    "limit": 100,
    "offset": 0,
    "order": [
      {
        "dir": "asc",
        "field": "name"
      }
    ]
  }
}
```

For example, we can filter counties with names like "z".

``` json
{
  "options": {
    "filter": [
      {
        "field": "name",
        "type": "Like",
        "value": "z"
      }
    ],
    "limit": 100,
    "offset": 0,
    "order": [
      {
        "dir": "asc",
        "field": "name"
      }
    ]
  }
}
```
