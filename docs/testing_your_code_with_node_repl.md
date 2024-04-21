# How to Quickly Test Your Code in Node REPL Mode

## Step 1: Start Node in REPL Mode

The REPL mode is useful for printing the return of a function without too much boilerplate.

> **Attention:** Variables declared during REPL only live during the REPL session lifecycle. <br/>If you launch a REPL session again, you will have to start everything over.

```sh
> node
```

## Step2: Test your implementation

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
