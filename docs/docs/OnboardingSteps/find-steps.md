---
sidebar_position: 1
---

# Find all steps

The onboarding steps uuid can be found in the following query.

``` graphql
query FindAllOnboardingSteps($options: FilterDto) {
  findAllOnboardingSteps(options: $options) {
    items {
      uuid
      name
      description
    }
  }
}
```
:::info

Currently there are 6 steps in the onboarding process. The steps are as follows:

	- created
	- price quoted
	- pending signature
	- signed
	- pending payment
	- completed

:::