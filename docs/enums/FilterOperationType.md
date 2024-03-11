
# FilterOperationType

The `FilterOperationType` enum is used to filter the data in the database. Since the filter uses the module `@chax-at/prisma-filter`, the filter type is the same as the one used in the module.

:::note Extracted from the `@chax-at/prisma-filter` [documentation](https://github.com/chax-at/prisma-filter/blob/main/README.md)

## Filter types

* `Eq`, `Ne` checks for strict (in)equality. Used for numbers and booleans.
* `EqString`, `NeString` string (in)equality check for strings. Does not convert numbers or booleans unlike `Eq` and `Ne`.
* `Lt`, `Lte`, `Gt`, `Gte` is used to filter numbers by checking whether they are greater/less than (or equal to) the value
* `Contains` is transformed into a Prisma `contains`, used to filter for strings. Use `%` as a wildcard, e.g. `%Max%` to find partial matches.
* `IContains` is like `Contains` but case-insensitive
* `StartsWith`, `EndsWith`, `Search` match the corresponding [Prisma operation](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators). Prefix these filters with `I` if you want to filter case-insensitive (e.g. `IStartsWith`)
* `In` checks whether the value is in the given numbers array. Use `InStrings` for string arrays.
* `InStrings` checks whether value is in the given string array.
* `NotIn` checks whether the value is NOT in the given numbers array. Use `NotInStrings` for string arrays.
* `NotInStrings` checks whether value is NOT in the given string array.
* `EqNull`, `NeNull` checks whether the value is null or not null. Must be used instead of `Eq`, `Ne` because otherwise `null` would be treated as string
* `ArrayContains`, `ArrayStartsWith`, `ArrayEndsWith` can be used on [Prisma arrays](https://www.prisma.io/docs/orm/reference/prisma-client-reference#array_contains)


## Filter value types
Since the filter is transferred via query parameters, everything will be converted into a string. This library will
automatically convert the filter value following these rules:
* If the filter type is `Eq`, `Ne` and the value is 'true' or 'false', then it's converted into a boolean
  * Use `EqString`, `NeString` if you want to filter strings and don't convert it
* If the filter type is not `Like` or `...String` and the value is a number (or a number array for `In`), then it's converted into a number (or a number array)
* Otherwise, the value is treated as a string

For string filters, the `Like` or `Ilike` filter types are recommended since usually a partial search is required.
But if you want to use a different filter for strings, make sure to use the `...String` variant of it, otherwise
<a href="https://twitter.com/racheltrue/status/1365461618977476610">Rachel True</a> can't filter by her name.

:::

