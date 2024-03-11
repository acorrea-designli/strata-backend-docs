---
sidebar_position: 2
---

# State

We can return all states since there are few of them.

``` graphql
query FindAllStates {
    findAllStates(options: null) {
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