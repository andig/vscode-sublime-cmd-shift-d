
# Cmd-Shift-D Sublime Key Binding for VS Code

This extension provides the missing Cmd-Shift-D (or Ctrl-Shift-D) keybinding from Sublime Text to VS Code.

It supplements the [vscode-sublime-keybindings plugin](https://github.com/Microsoft/vscode-sublime-keybindings) which is missing the shortcut (see related discussion in [issue #100](https://github.com/Microsoft/vscode-sublime-keybindings/issues/100) and [pr #105](https://github.com/Microsoft/vscode-sublime-keybindings/pull/105)).

**NOTE** VSCode has meanwhile implemented this feature as part of https://github.com/microsoft/vscode/issues/2075. This repository has now been archived.

## Cmd-Shift-D

This plugin replaces the default VS Code behaviour for Cmd-Shift-D which triggers the `editor.action.copyLinesDownAction` command with a custom `editor.sublimeDuplicate` command. This includes:

- duplicate inline instead of duplicating the entire line if the initial selection is not a multi-line selection
- handling multi-selection

**NOTE**

If `Cmd-Shift-D` doesn't work for you (i.e. unexpectedly always behaves like `copyLinesDownAction`) make to delete the default key binding by going to `Preferences: Open Key Bindings`.

## License
[MIT](license.txt)
