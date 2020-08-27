# Tree Style Tab Configs

This configuration changes the sidebar style. There are two ways to install:

### 1. Import settings

Follow these steps if you do not have, or want to keep your old configurations for hntp.

1. Go to extensions page > treestyletab > preferences.

2. Scroll all the way down to "Import" and select treestyletab/config.json file.

### 2. Manual Installation

Follow these steps if you have want to keep your configurations for hntp.

***This section may be missing some small configurations. Will add them soon***

1. Go to extensions page (ctrl+shift+a) > treestyletab > preferences.

2. Make sure you have ~~"vertigo"~~(deprecated) "Plain" theme selected. The CSS doesn't act as desired under any other theme.

3. Make sure you have "Right Side" selected for the setting "Style of contents for the sidebar position".

4. Scroll all the way down to an expandable menu named "All Configs" > Click on the small black triangle to expand the menu if it isn't already > Uncheck the checkboxes `autoAttach` and `syncParentTabAndOpenerTab` (*This disables the branching functionality of tst*).

5. Paste contents of `treestyletab/custom.css` to the textfield under "Advanced" section.

## A few notes

- ~~This configuration asthetically breaks the "Bookmarks" sidebar. Will try to fix it in future updates.~~ Fixed.

- I have turned the "tree" functionality of treestyle tab off and only using it as a vertical tab list (as seen in **Manual Installation #4**). I have also disabled the dropdown button that shows up next to a tab with child nodes. And so it's pretty much broken for branching functionality as of right now. Will fix it later.
