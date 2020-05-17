# Flying Fox

An opinionated set of configurations for firefox.

![FlyinfFox](https://github.com/akshat46/FlyingFox/blob/master/img/screenshot.png)

Has custom CSS for following extensions: 
1. [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/)
2. [Humble New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/humble-new-tab/)

## Installation
1. Copy userChrome.css in the Chrome directory in your Firefox profile directory. To find your profile directory, go to about:support.
2. Go to about:config and set toolkit.legacyUserProfileCustomizations.stylesheets to true.
3. Paste contents of `hntp.css` and paste them in text field under "Advanced" tab of HNTP configurations. 
4. To show pinned-style links instead of folders in hntp: 
  1. Uncheck "Show top-level folders" under Settings tab. 
  2. Only keep the *pinned* urls under bookmarks under "other bookmarks" in firefox. 
  ![Bookmarks](https://github.com/akshat46/FlyingFox/blob/master/img/bookmarks.png)
  3. On hntp, drag and arrange the bookmarks so that "Other Bookmarks" has a column to itself. 
4. Go to extensions page > treestyletab > preferences.
5. Paste contents of `treeStyleTab.css` to the textfield under "Advanced" section. *(Make sure you have "vertigo" theme selected. The CSS doesn't act as desired under any other theme.)*

## Optional
1. Background of sidebar is changed based on firefox theme. You set my theme with [Firefox Color here](https://color.firefox.com/?theme=XQAAAAIfAQAAAAAAAABBqYhm849SCia2CaaEGccwS-xNKlhWuMf61H-qemtFQ7JmIThKEJYbO6BYtxXFN3QVwfgIyLdrYygaud86UIpkiO8YN31rNYQT4wbIyYwCNHU7jaUMww6R7XMYKHXDUCvMW7_0AiLugqKwZ2mhpvOqQw__PRrGb_w5dNZqMUkPfE4UsOjehwu76ZgYlAyi-kcs2o76aC30rqSaUf9RJtUHhA_oQODqn_yh5tM).

## Configuration
All the css have variables at the top to change colors.
