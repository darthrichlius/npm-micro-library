# Setting Up Your NPM Registry Account

To publish a package on npm, you first need to create an account on the [npmjs.com](https://www.npmjs.com/) website and also on the [npm registry](https://registry.npmjs.org/).

## Difference Between NPM and NPM Registry

### NPM Website Account

Creating an account on the [npmjs.com](https://www.npmjs.com/) website allows you to **manage your user profile**, **publish packages to the npm registry** (our current goal), and **manage access to private packages**.

### What Is NPM Registry?

The npm registry is where all publicly available npm packages are stored and distributed from.

In other words, to publish a (public) package on npm that will be available to anyone on the internet, you first need to register as a "publisher".

## How to Create an Account in the NPM Registry?

Use the `npm adduser` command.

> This command is used to create your auth token and npm RC.

```bash
> npm adduser
Username: your-username
Password: your-password
Email: (this IS public) your-email@example.com
```

> Note: At the time of writing (April 2024), NPM seems to have implemented a more straightforward approach where they use your npm account data to create your registry account. The command will prompt a browser tab opening for you to authenticate. Once done, your account will be registered.

## Additional Commands

### Check Your Information

This command will ensure your account has been correctly registered.

```bash
# Display your current username
> npm whoami
```

### Update Your Information

```bash
# Update your email
> npm profile set email your-new-email@example.com
# Update your name
> npm profile set name "Your New Name"  # update your name
```
