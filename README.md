# Checkvist extended commands

# What

It adds four new commands to [Checkvist](https://checkvist.com)

| Command  | Action |
| ------------- | ------------- |
| `l`  | Expand node (same as `→`)  |
| `L`  | Focus the list item (same as `Shift →`)  |
| `h`  | Collapse node (same as `←`)  |
| `H`  | Un-focus the list item (same as `Shift ←`)  |


# How

You can use this in several ways

- **Chrome Extension**: Download it from the Chrome Store [here]() or clone the repo, zip it, and drag it into `chrome://extensions`.

- **Bookmark**: Add the code from [commands.min.js](https://raw.githubusercontent.com/NicoSantangelo/checkvist-extended-commands/master/commands.min.js) as a bookmark URL like this:

```
javascript:CODE_FROM_commands.min.js_HERE
```

- **Native app**: If you're bundling [Checkvist](https://checkvist.com) as a "native" app using a tool like [nativefier](https://github.com/jiahaog/nativefier), you can add the code like this:

```bash
nativefier 'https://checkvist.com' -n Checkvist --inject checkvist-extended-commands/commands.js
```

