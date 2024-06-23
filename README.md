[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

# openred UI Framework

- [Welcome!](#welcome)
- [Installation](#installation)
- [Project Resources](#project-resources)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Copyright](#copyright)

## Welcome!

The openred UI (ORUI) Framework is a collection of React UI components for quickly building user interfaces for the openred project.

This repository started as a fork from [OpenSearch OUI](https://github.com/opensearch-project/oui). As we stated here https://github.com/openred-security/openred-orui/issues/1 we really want to thanks and give credit to its original creators. 

> Just to make it clear, from the first commit, our intention is not to hide OpenSearch or rename the project. We are proud to use OpenSearch components and enhance, adapt, and prepare them to better fit the openred use case.
> 
> openred will always remain a full, complete, and open source project in every possible aspect. This is not only because we must respect the license of the project we integrate but also because openred genuinely believes in the foundational values and community of open source.

You should check out our [living style guide][docs], which contains many examples of components in the ORUI framework aesthetic, and how to use them in your products. We also have a [FAQ](FAQ.md) that covers common usage questions.


### Goals

The primary goal of this library is to provide reusable UI components that can be used in any
openred web project. As React components, they remove CSS from the process of building UIs.
As a single source of truth, the framework allows our designers to make changes to our aesthetic
directly in the code. And unit test coverage for the UI components allows us to deliver a stable
"API for user interfaces".

## Installation

To install the openred UI Framework into an existing project, use the `yarn` CLI (`npm` is not supported).

```
yarn add @openred-security/orui
```

Note that ORUI has [several `peerDependencies` requirements](package.json) that will also need to be installed if starting with a blank project. You can read more about other ways to [consume ORUI][consuming].

## Project Resources

* [FAQ](FAQ.md)
* [Contributing to OpenSearch](CONTRIBUTING.md)
* [Maintainer Responsibilities](RESPONSIBILITIES.md)
* [Release Management](RELEASING.md)
* [Organization Admins](ADMINS.md)
* [Repo Maintainers](MAINTAINERS.md)
* [Security](SECURITY.md)

## Code of Conduct

This project has adopted the [Contributor Covenant](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [Apache v2.0 License](LICENSE.txt).

## Copyright

Copyright openred Contributors. See [NOTICE](NOTICE.txt) for details.

This product includes software, including OUI source code, developed by OpenSearch (http://www.opensearch.org).

[consuming]: wiki/consuming.md
[docs]: https://oui.opensearch.org
