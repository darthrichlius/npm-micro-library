# How to Quickly Test Your Code in Node REPL Mode

## PROCEDURE

### Step 1: Start Node in REPL Mode

The REPL mode is useful for printing the return of a function without too much boilerplate.

> **Attention:** Variables declared during REPL only live during the REPL session lifecycle. <br/>If you launch a REPL session again, you will have to start everything over.

```sh
> node
```

### Step2: Test your implementation

**Import the module**

```sh
# Don't forget to press ENTER
var lib = require('./src/index.js')
```

**Test the `lib.all` property**

```sh
# Don't forget to press ENTER
lib.all
```

**Test the `lib.random()` method**

```sh
# Each successive call should provide a different value
lib.random();
# Each successive call should provide a different value
lib.random();
```

**Quit the REPL Mode**

```sh
.exit
```

## ADDITIONNAL INFORMATION

- If you have any questions, don't hesitate to contact me following my social links or through my email at [hello@rdieud.com](email:hello@rdieud.com)
- If you find any typos or encounter any issues with this tutorial, please feel free to [contact me](email:hello@rdieud.com) or [create an issue on GitHub](https://github.com/darthrichlius/npm-micro-library/issues) so I could fix it.
