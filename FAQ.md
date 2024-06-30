# Frequently Asked Questions

Here are our responses to questions we expect to get frequently.

## What is the openred UI Framework?

The openred UI Framework (OUI) is a design library used by the openred Security Project to build React applications that need to share our branding and aesthetics. It distributes UI React components and static assets for use in building web layouts.

This repository started as a fork from [OpenSearch OUI](https://github.com/opensearch-project/oui). As we stated here https://github.com/openred-security/openred-orui/issues/1 we really want to thanks and give credit to its original creators. 

## Can I use ORUI?

Yes, but be aware of the [license](https://github.com/openred-security/openred-orui/blob/main/LICENSE.txt) as always. The roadmap and priorities are directed by usage within the OpenSearch project.

## What is the versioning, releases and upgrade strategy?

We use [semver](https://semver.org/) for versioning and use that to denote breaking changes in ORUI upgrades. We consider API changes in our prop names or existing component functionality to be a reason for a breaking change, but do not consider renaming of CSS selectors, mixins, or other style changes to be breaking.

Traditionally releases are made weekly against whatever is in main and you can upgrade from NPM as you see fit.

## Can I contribute to OUI

Yes! We accept PRs regularly similar to our other openred repos. You can find documentation around creating and submitting new components in [CONTRIBUTING.md](CONTRIBUTING.md).

## What about reporting bugs and feature requests?

Bug reports and feature requests are welcome!

## Further development

Given the current scope and size of the project, we will focus on maintaining a single theme—the official one—in both dark and light modes. Additionally, we will strive to eliminate custom themes from Elasticsearch and OpenSearch to ensure a more streamlined and cohesive user experience.