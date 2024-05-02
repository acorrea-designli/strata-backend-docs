# Get stats

This query returns the statistics of the application.

:::warning
This query returns mock data.
:::

```graphql
query GetStats {
  getStats {
    items {
      name
      value
    }
  }
}
```