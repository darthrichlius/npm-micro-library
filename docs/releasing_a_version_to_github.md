# Releasing a Version to GitHub

## KNOWLEDGE

### What is a release?

A release is a **packaged version of software** that is made available to users. It typically includes new features, bug fixes, and other improvements. Releases are **usually identified by a version number** and can be **associated with a Git tag** for easy reference.

### What is a tag?

A tag in Git is a label that is attached to a specific commit. It allows developers to easily reference a particular point in the Git history, which can be useful for tracking releases or other important events.

### Why adding tags?

Tags are used to mark a specific commit in Git with a meaningful name, making it easy to reference that commit later. The purpose of adding a tag is to create a permanent marker for a specific version of your codebase. This can be useful in a number of scenarios, such as when you need to release a new version of your software or when you need to roll back to a previous version.

**Real World Use Case**

For example, let's say you're working on a software project and you've just finished implementing a new feature. You test the feature and it works as expected, so you commit your changes to Git. At this point, you might decide to tag the commit with a version number, such as v1.0.0. Later on, if you discover a bug in the feature, you can easily roll back to the tagged commit to investigate the issue.

### When to use tag?

Tags mark specific points in Git history, corresponding to releases or project milestones. The tagging process typically involves:

- Pushing changes to the remote repository.
- Creating a tag based on the commit hash or version number.
- Pushing the tag to the remote repository.
- Creating a release on GitHub based on the tag.

**Real world scenario**

For example, after completing version 1.0 of your project, you would commit changes, push them to the remote repository, create a tag like "v1.0," push the tag to the remote repository, and then create a GitHub release based on the "v1.0" tag.

This ensures proper synchronization between tags and releases, allowing easy reference to specific project versions in the future.

### How to name a tag?

It's best to adhere to [semantic versioning (semver) guidelines](https://semver.org) for tag names, offering a clear and consistent identification of software versions. Yet, there's no strict requirement to follow this approach, and tags can be named as per project requirements.

Common conventions include using version numbers (e.g., "v1.0.0"), dates (e.g., "2023-03-14"), or descriptive names (e.g., "initial-release"). Ultimately, the choice depends on the project's specific needs and conventions.

### What is the difference between a tag and a release?

**Tag**

A tag can be seen as a technical requirement that allows developers to reference a specific commit or lifecycle milestone.

**Release**

A release is more focused on providing a packaged version of the software to users, along with relevant documentation and other information.

**Relation between the two**

A release can be associated with a specific Git tag, which allows developers to easily reference the exact commit that corresponds to the release.

## PROCEDURE

Once you have pushed your work to the remote Git repository, it is time to add a tag to reference the release in the Git history. An analogy regarding lifecycle is that "everything behind is part of the release referenced by this tag".

### Tagging your release

#### Method 1: Straightforward method

**Adding the tag locally**

```sh
> git tag <your_version_tag>
```

**Pushing the tag to the remote server**

```sh
> git push --tags
```

**Inherent problem**

While this procedure is straightforward, it has some **drawbacks**.

The major problem is that there is **no description that explains the purpose of our tag**. By default, the description will be the latest commit message, which is not very informative. For example, if the latest commit message is "fix the color of the button", the description is not very helpful and can even be considered misleading.

#### Method 2: Adding a tag with a description

A better practice is to bind a message to your tag.

This can be done by adding a `-m` option:

```sh
> git tag -m "<description>" <your_version_tag>
```

Alternatively, you can use the `-a` option to open an editor where you could add a more exhaustive message:

```sh
> git tag -a <your_version_tag>
```

**Then push your tag(s)**

```sh
> git push --tags
```

### Creating a release on GitHub

Once your tag has been pushed, you can now create a release on Github.

1. The release description should be more descriptive than the tag one. It's part of the project's documentation, meaning it must be clear, precise, and as concise as possible.
2. A good practice would be to add some commit references (link) or issue (link) to point to a specific quoted feature or fix.
3. You can also add some external links to let users learn more about a specific topic. By doing so, you keep your report clear, precise, and concise.

#### "What's next?" and "Roadmap"

- I personally recommend adding a **"What's next?" section** to immediately captivate the user and provide a promise.
- You can also provide a **link towards the roadmap** of the project.
