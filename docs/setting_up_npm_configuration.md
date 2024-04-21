# Setting up your NPM Configuration

Before publishing your repository, make sure to properly set your npm configure .

## PROCEDURE

### Configuration Setup

The operation will be attach to a `npmrc` file we will talk about later.

#### Set up your Author Info

```bash
> npm set init-author-name '<your_name>'
```

```bash
> npm set init-author-email '<your_email@domain.tld>'
```

```bash
> npm set init-author-url '<your_website>'
```

#### Set up the default License

By default you can set a License information that will be automatically bound to your profile.

```bash
> npm set init-license 'MIT'
```

### Configuration Check

now check your information are properly saved and are correct. If not, feel free to update.

```bash
> cat ~/.npmrc
```

### Next

Once your npm is properly configured, you should now add

## ADDITIONNAL INFORMATION

- If you have any questions, don't hesitate to contact me following my social links or through my email at [hello@rdieud.com](email:hello@rdieud.com)
- If you find any typos or encounter any issues with this tutorial, please feel free to [contact me](email:hello@rdieud.com) or [create an issue on GitHub](https://github.com/darthrichlius/npm-micro-library/issues) so I could fix it.
