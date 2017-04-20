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
| `gg`  | Go to the first item in the tree (same as `Home` or `Fn+Up`)  |
| `G`  | Go to the last item in the tree (same as `End` or `Fn+Down`)  |
| `meta+j`  | macOS users: Move list items down (same as `⌘ ↓`) |
| `meta+k`  | macOS users: Move list items up (same as `⌘ ↑`)  |


# How

You can use this in several ways

- **Chrome Extension**: Download it from the Chrome Store [here](https://chrome.google.com/webstore/detail/checkvist-extended-comman/fofahggocngkjhdjmpplnaebognbkfmo) or clone the repo, zip it, and drag it into `chrome://extensions`.

- **Bookmark**: Go to the [master](https://github.com/NicoSantangelo/checkvist-extended-commands) branch too see how to do this!

- **Native app**: If you're bundling [Checkvist](https://checkvist.com) as a "native" app using a tool like [nativefier](https://github.com/jiahaog/nativefier), you can add the code like this:

```bash
nativefier 'https://checkvist.com' -n Checkvist --inject checkvist-extended-commands/commands.js
```
