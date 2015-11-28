# Electron.Clipboard

Interop for electron's `clipboard` module

## Documentation

### `readText : () -> Task x String`
Reads the content of the clipboard as `"text/plain"`
[electron docs](https://github.com/atom/electron/blob/master/docs/api/clipboard.md#clipboardreadtexttype)

### `writeText : String -> Task x ()`
Write a string to the clipboard as "text/plain"
[electron docs](https://github.com/atom/electron/blob/master/docs/api/clipboard.md#clipboardwritetexttext-type)

### `readHtml : () -> Task x String`
Read the contents of the clipboard as `"text/html"`
[electron docs](https://github.com/atom/electron/blob/master/docs/api/clipboard.md#clipboardreadhtmltype)

### `writeHtml : String -> Task x ()`
Write a string to the clipboard as `"text/html"`
[electron docs](https://github.com/atom/electron/blob/master/docs/api/clipboard.md#clipboardwritehtmlmarkup-type)

### `clear : () -> Task x ()`
Remove the contents of the clipboard
[electron docs](https://github.com/atom/electron/blob/master/docs/api/clipboard.md#clipboardcleartype)

### `availableFormats : () -> Task x (List String)`
Retrieve a list of string MIME types that the clipboard supports
[electron docs](https://github.com/atom/electron/blob/master/docs/api/clipboard.md#clipboardavailableformatstype)

## Contributing

Any suggestions accepted! Submit issues, PRs, send an email or get in touch on twitter at @luke_dot_js or on the elmlang Slack at @luke. I'll be working on even more electron interop coming up so if you have ideas for that process as a whole feel free to get in touch with those as well. Thanks!
