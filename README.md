# How to Write an Open Source JavaScript Library

This code is related to a tutorial by the renowned **Kent C. Dodds** on "How to Write an Open Source JavaScript Library".
Kent demonstrates how to create and deploy a "**micro-library**" from start to finish.

This tutorial uses a micro-library as a foundation to demonstrate the principles of **creating and publishing a properly designed library to NPM**. By starting with a simple example, we can better understand the underlying concepts while still applying them to larger libraries or frameworks.

> **Make sure to follow the steps through the git commit log.**

## PROJECT SCOPE

- Pushing the library to NPM
- Adding unit test suite (Karma, Mocha, and Chai)
- Seting up continuous integration
- Using modern JavaScript ES6 "or ES2015" (Babel)
- Using a bundler (Webpack)
- Isomorphic distribution for Browser and NodeJS compatibility

## PREREQUESITES

- Basic knowledge of `Javascript`
- Basic understanding of **Javascript libraries, transcompilers and bundlers** (Mocha, Chai, Babel, Webpack, ...)
- Basic understanding of `NodeJS`
- Basic understanding of `npm`
- Active Github & NPM account
- Active NPM REGISTRY account ([Check how to quickly set up you npm registry account](./docs/setting_up_npm_registry_account.md))
- Valid `npm` configuration (author, license, ...) ([Check how to quickly set up you npm configuration on your local machine](./docs/setting_up_npm_configuration.md))

## MICRO-LIBRARY 101

### What is a micro-library?

A micro-library is a small, focused library that performs a specific task or set of related tasks. It is typically designed to be lightweight, easy to use, and have minimal dependencies. Micro-libraries are often used in modern software development to promote modularity, reusability, and maintainability.

### Micro-library pros & cons

#### Benefits

##### Small in size, easy to reason about

- **Modularity**: Micro-libraries are designed to be modular, which means they perform a **single task or set of related tasks**. This makes it easier to understand, test, and maintain the library.
- **Easy to learn**: Micro-libraries are usually smaller and simpler than larger libraries or frameworks, which can make them easier to learn and use.

##### Small in size, easy to test

- **Easy to test**: Micro-libraries have a smaller codebase and fewer dependencies, which makes them easier to test. This can lead to better code quality, fewer bugs, and more reliable software.

##### Reduced Overhead

- **Reduced dependencies**: Micro-libraries typically have minimal dependencies, which can reduce the risk of conflicts and compatibility issues with other libraries or frameworks.

##### Portability

- **Reusability**: Micro-libraries can be easily reused across different projects, which can save time and effort in development.

#### Drawbacks

- **Increased complexity**: Using multiple micro-libraries can increase the complexity of a project, as developers need to manage and integrate multiple libraries.
- **Fragmentation**: The use of multiple micro-libraries can lead to fragmentation, where different libraries are used for similar tasks, leading to inconsistency and duplication of effort.
- **Lack of features**: Micro-libraries are focused on a specific task, which means they may lack features or functionality compared to larger libraries or frameworks.
- **Maintenance**: Micro-libraries may not be actively maintained or supported, which can lead to compatibility issues or security vulnerabilities.
- **Versioning management**: Micro-libraries may have their own versioning scheme and release cycle, which can be different from the versioning scheme and release cycle of other libraries or frameworks used in the project. This can lead to compatibility issues and challenges in managing dependencies.
