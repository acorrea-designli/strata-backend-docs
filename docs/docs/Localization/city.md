---
sidebar_position: 4
---

# City

## Filter by state and county

We cannot return all cities, so we need to filter by state and county optionaly.

``` graphql
query FindAllCitiesOfState($options: FilterDto) {
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
                    createdAt
                    updatedAt
                    name
                    description
                    citys {
                        items {
                            name
                            uuid
                        }
                        totalCount
                        hasNextPage
                    }
                }
                totalCount
                hasNextPage
            }
        }
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

## Find city by name

Another option is to filter by city name.

``` graphql
query FindAllCities($options: FilterDto) {
    findAllCitys(options: $options) {
        hasNextPage
        totalCount
        items {
            uuid
            createdAt
            updatedAt
            name
            description
            county {
                name
            }
        }
    }
}
```

For example, we can filter cities with names like "new y"

``` json
{
  "options": {
    "filter": [
      {
        "field": "name",
        "type": "Like",
        "value": "new y"
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
