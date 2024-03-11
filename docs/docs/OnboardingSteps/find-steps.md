---
sidebar_position: 1
---

# Find all steps

The onboarding steps uuid can be found in the following query.

``` graphql
query getAllOnboardingSteps {
    findAllOnboardingSteps {
        items {
            name
            uuid
            description
        }
    }
}
```
:::info

Currently there are 5 steps in the onboarding process. The steps are as follows:

	- products selector
	- credentials
	- subscription
	- payment
	- users

:::

:::warning

A new step may be added in the future, to handle the users onboarding process finalization.

:::