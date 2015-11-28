module Electron.Clipboard where

{-| Interop for electron's clipboard module

# Read content
@docs readText, readHtml

# Modify content
@docs writeText, writeHtml, clear

# Get metadata
@docs availableFormats
-}

import Task
import Native.Electron.Clipboad

{-| Reads the content of the clipboard as "text/plain"
-}
readText : () -> Task.Task x String
readText = Native.Electron.Clipboard.readText


{-| Write a string to the clipboard as "text/plain"
-}
writeText : String -> Task.Task x ()
writeText = Native.Electron.Clipboad.writeText


{-| Read the contents of the clipboard as "text/html"
-}
readHtml : () -> Task.Task x String
readHtml = Native.Electron.Clipboard.readHtml


{-| Write a string to the clipboard as "text/html"
-}
writeHtml : String -> Task.Task x ()
writeHtml = Native.Electron.Clipboard.writeHtml


{-| Remove the contents of the clipboard
-}
clear : () -> Task x ()
clear = Native.Electron.Clipboad.clear


{-| Retrieve a list of string MIME types that the clipboard supports
-}
availableFormats : () -> Task (List String)
availableFormats = Native.Electron.Clipboard.availableFormats
