# Checkvist extended commands

# What

It adds four new commands to [Checkvist](https://checkvist.com)

| Command  | Action |
| ------------- | ------------- |
| `l`  | Expand node (same as `→`)  |
| `L`  | Focus the list item (same as `Shift →`)  |
| `h`  | Collapse node (same as `←`)  |
| `H`  | Un-focus the list item (same as `Shift ←`)  |
| `o`  | Add below (same as `enter`)  |
| `O`  | Add above (same as `alt+enter`)  |
| `alt+g alt+g`  | Go to the first item in the tree (same as `Home` or `Fn+Up`). [Why not `gg`](#caveats)  |
| `G`  | Go to the last item in the tree (same as `End` or `Fn+Down`)  |


# How

You can use this in several ways

- **Chrome Extension**: Download it from the Chrome Store [here](https://chrome.google.com/webstore/detail/checkvist-extended-comman/fofahggocngkjhdjmpplnaebognbkfmo) or clone the repo, zip it, and drag it into `chrome://extensions`.

- **Bookmark**: Add the code from [commands.min.js](https://raw.githubusercontent.com/NicoSantangelo/checkvist-extended-commands/master/commands.min.js) as a bookmark URL like this:

```
javascript:CODE_FROM_commands.min.js_HERE
```

- **Native app**: If you're bundling [Checkvist](https://checkvist.com) as a "native" app using a tool like [nativefier](https://github.com/jiahaog/nativefier), you can add the code like this:

```bash
nativefier 'https://checkvist.com' -n Checkvist --inject checkvist-extended-commands/commands.js
```

# Caveats

Because many of the default VIM shortcuts are already used by [Checkvist](https://checkvist.com) I have to make a few concessions. The most noticiable is that I can't use `gg` (or any of it counterparts) to go to the first item on the tree, settling on `alt+g alt+g` which is much worse.

For a version that doesn't take much of this into account (it uses `gg` for example) check the [`daring`](https://github.com/NicoSantangelo/checkvist-extended-commands/tree/daring) branch
