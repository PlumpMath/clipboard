Elm.Native.Electron = Elm.Native.Electron || {};
Elm.Native.Electron.Clipboard = Elm.Native.Electron.Clipboard || {};
Elm.Native.Electron.Clipboard.make = function (localRuntime) {

  localRuntime.Native.Electron = localRuntime.Native.Electron || {};
  localRuntime.Native.Electron.Clipboard = localRuntime.Native.Electron.Clipboard || {};

  if (localRuntime.Native.Electron.Clipboard.values) {
    return localRuntime.Native.Electron.Clipboard.values;
  }

  if (Elm.Native.Electron.Clipboard.values) {
    return localRuntime.Native.Electron.Clipboard.values = Elm.Native.Electron.Clipboard.values;
  }

  var Task = Elm.Native.Task.make(localRuntime);
  var Utils = Elm.Native.Utils.make(localRuntime);

  var electron;
  try {
    electron = require('electron');
  } catch (error) {
    throw Error('Electron.Clipboard can only be used in electron, and only in version >= 0.35.2');
  }

  var clipboard = electron.clipboard;

  // readText : () -> Task x String
  function readText() {
    return Task.asyncFunction(function (callback) {
      callback(Task.succeed(clipboard.readText()))
    });
  }

  // writeText : String -> Task x ()
  function writeText(text) {
    return Task.asyncFunction(function (callback) {
      clipboard.writeText(text);
      callback(Task.succeed(Utils.Tuple0));
    });
  }

  // readHtml : () -> Task x String
  function readHtml() {
    return Task.asyncFunction(function (callback) {
      callback(Task.succeed(clipboard.readHtml()));
    });
  }

  // writeHtml : String -> Task x ()
  function writeHtml(markup) {
    return Task.asyncFunction(function (callback) {
      clipboard.writeHtml(markup);
      callback(Task.succeed(Utils.Tuple0));
    });
  }

  // readImage : () -> Task x Electron.NativeImage.NativeImage
  // Not yet included in API until we can publish these and create a module
  // dependency on Electron.NativeImage
  function readImage() {
    return Task.asyncFunction(function (callback) {
      callback(Task.succeed(clipboard.readImage()));
    });
  }

  // writeImage : Electron.NativeImage.NativeImage -> Task x ()
  // Not yet included in API until we can publish these and create a module
  // dependency on Electron.NativeImage
  function writeImage(image) {
    return Task.asyncFunction(function (callback) {
      clipboard.writeImage(image);
      callback(Task.succeed(Utils.Tuple0));
    });
  }

  // clear : () -> Task x ()
  function clear() {
    return Task.asyncFunction(function (callback) {
      clipboard.clear();
      callback(Task.succeed(Utils.Tuple0));
    });
  }

  // availableFormats : () -> Task x (List String)
  function availableFormats() {
    return Task.asyncFunction(function (callback) {
      var formats = clipboard.availableFormats();
      callback(Task.succeed(Utils.list(formats)));
    });
  }

  localRuntime.Native.Electron.Clipboard.values = {
    readText: readText,
    writeText: writeText,
    readHtml: readHtml,
    writeHtml: writeHtml,
    clear: clear,
    availableFormats: availableFormats
  };

  return localRuntime.Native.Electron.Clipboard.values;
};
