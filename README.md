# Flying Fox

An opinionated set of configurations for firefox.

![FlyinfFox](https://github.com/akshat46/FlyingFox/blob/master/img/demo.gif)

*^ with [Material Fox](https://github.com/muckSponge/MaterialFox), [github-moonlight userstyle](https://github.com/brettm12345/github-moonlight)*

Has custom CSS for following extensions:

1. [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/)

2. [Humble New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/humble-new-tab/)

## Installation

Follow instructions in each section's `README` under their respective directories.

- `chrome`: Firefox UI changes such as sidebar behavior, hide tab row, etc.

- `hntp`: New tab page UI.

- `treestyletab`: Tab behavior for tst and my entire tst config.

### Known Issues: 

1. **Sidebar wont collapse:** Firefox should be restarted ***completely*** after making any changes to `userChrome.css`. If you do not see any changes you might have to log out and log back in. (Alternatively, if you are on Linux, run `killall firefox` in terminal). 

2. **Top bar tabs still showing up/minimize-close buttons disappeared:** Make sure you have the following setup in your "Customize Toolbar" page: (*Title Bar: on; Toolbars: None Selected*)
![Customization](https://github.com/akshat46/FlyingFox/blob/master/img/customization.png)

3. **White area above the sidebar:** In `userChrome.css` change change menu-bar height to `--menubar-height : 0px;`. 

## Optional

1. Background of sidebar is changed based on firefox theme. You can set my theme with [Firefox Color here](https://color.firefox.com/?theme=XQAAAAIfAQAAAAAAAABBqYhm849SCia2CaaEGccwS-xNKlhWuMf61H-qemtFQ7JmIThKEJYbO6BYtxXFN3QVwfgIyLdrYygaud86UIpkiO8YN31rNYQT4wbIyYwCNHU7jaUMww6R7XMYKHXDUCvMW7_0AiLugqKwZ2mhpvOqQw__PRrGb_w5dNZqMUkPfE4UsOjehwu76ZgYlAyi-kcs2o76aC30rqSaUf9RJtUHhA_oQODqn_yh5tM). Setting the background color same as your title bar would give a nice look.

## Configuration

All the css have variables at the top to change colors.
