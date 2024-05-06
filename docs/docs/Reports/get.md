# Download reports

To download csv reports, the following rest endpoint can be used.

```http
GET /reports?filter=all
```

The `filter` query parameter is required and should one of the following values:

- `all`
- `ready for renewal`
- `pending price`
- `price quoted`
- `pending signature`
- `signed`
- `pending payment`
- `completed`