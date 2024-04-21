# How to Publish Your Package to the NPM Registry

Once you are satisfied with your code, you can publish your package to the NPM registry.

## REQUIREMENTS

- An active account on GitHub, NPM website, and NPM registry
- NPM configuration on your local machine

> Tips: Check `cat ~/.npmrc` to verify your information and ensure that there is a line about your authToken

If you don't have an NPM registry account, [read this quick step-by-step guide](./setting_up_npm_registry_account.md).

## PROCEDURE

**Step1: Navigate to your project root folder**

```sh
> cd /path/to/your/project/root
```

**Step2: (Optional) Ensure you are at the root of your package**

The command below should return "Yes" if you are in the same directory as your `package.json` file.

```sh
> [ -f package.json ] && echo "Yes" || echo "No"
```

**Step 3: Publish your package**

```sh
> npm publish
```

## VERIFY

Now it is time to make sure your package has been correctly published to NPM registry.
There are two complementary methods to achieve that.

### Method 1: Verify from CLI

```sh
> npm info <your_package>
```

### Method 2: Verify from NPM Registry website

In your browser, tap the corresponding address

```
https://npm.im/<your_package>
```

This should bring you to the official page of your NPM Package 🎉

## TESTING YOUR LIBRARY

Now it's time to ensure your package runs and works as expected **in the real-world context of a developer using it**.

### Procedure

**Step1: Create a folder from which you could test your package**

```sh
> mkdir -p /path/to/test/my/package
> cd /path/to/test/my/package
```

**Step2: Install your package**

```sh
npm install <your_package>
```

**Step3: Create a sandbox test script**

Create an index file to test your library.<br/>

#### Example

In this example, we will be testing the library[random-fantasy-names](https://npm.im/random-fantasy-names).

```sh
# Make sure to install the exact version to reduce the risk of this tutorial being outdated at the time you are reading it
> npm install random-fantasy-names@0.1.0
> touch index.js
```

Open your favorite IDE and add this code

```javascript
var starWarsNames = require("random-fantasy-names");

// Print all the available names
console.log(starWarsNames.all);

// Print 5 distinct names
console.log(starWarsNames.random());
console.log(starWarsNames.random());
console.log(starWarsNames.random());
console.log(starWarsNames.random());
console.log(starWarsNames.random());
```

Run your file to ensure it works!

```sh
> node index.js
```

At this stage, your console should have printed:

- A comprehensive list of fictional Star Wars character names
- 5 random names

## TAKEAWAY

- If you have any questions, don't hesitate to contact me following my social links or through my email at [hello@rdieud.com](email:hello@rdieud.com)
- If you find any typos or encounter any issues with this tutorial, please feel free to [contact me](email:hello@rdieud.com) or [create an issue on GitHub](https://github.com/darthrichlius/npm-micro-library/issues) so I could fix it.
