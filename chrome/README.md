# UserChrome Configs

This configuration changes the sidebar behavior. There are three options.

## Options

|File Name|Description|Screenshot|
|---|---|---|
|`userChrome-hover`|Takes up the least space, expands when hovered.|![userChrome-hover](https://github.com/akshat46/FlyingFox/blob/master/img/userChrome-hover.png)|
|`userChrome-overlay`|Permanently expanded, hides page content behind it. Best used with a quick [shortcut to toggle tst](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox)|![userChrome-overlay](https://github.com/akshat46/FlyingFox/blob/master/img/userChrome-overlay.png)|
|`userChrome-static`|Permanently expanded, does not hide page content behind it. Resizes webpage whenever toggled.|![userChrome-static](https://github.com/akshat46/FlyingFox/blob/master/img/userChrome-static.png)|

## Installation

1. Based on the above table, chose whichever `userChrome-*.css` you want.

2. Copy the chosen `userChrome-*.css` and `vars.css`, and paste them in the Chrome directory in your Firefox profile directory. To find your profile directory, go to `about:support`. *Alternative if you are on linux you can create symlink to whichever `userChrome` you want in your Chrome directory, and modify your copy of `vars.css` in case you decide to update with any new changes.*

3. *(Optional)* Change values in `vars.css` according to your liking.

4. Go to `about:config` and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.

5. Follow instructions for each extension in readme under their respective directories.
