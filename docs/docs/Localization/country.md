---
sidebar_position: 1
---


# Country

There should be only one country in the database, so we can use the following query to get the country uuid.

``` graphql
query FindAllCountries {
    findAllCountrys(options: null) {
        hasNextPage
        totalCount
        items {
            uuid
            createdAt
            updatedAt
            name
            description
        }
    }
}

```