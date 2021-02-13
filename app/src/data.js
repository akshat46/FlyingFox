import config from './config.json';

const data = {
  colorField: {
    main: [
      {
        name: 'Dark',
        default: config.main.dark['dark-base'],
      },
      {
        name: 'Light',
        default: config.main.light['light-base'],
      },
      {
        name: 'Accent',
        default: config.main.other['accent'],
      },
      {
        name: 'Red',
        default: config.main.other['red'],
      },
      {
        name: 'Yellow',
        default: config.main.other['yellow'],
      },
      {
        name: 'Green',
        default: config.main.other['green'],
      },
    ],
    private: [
      {
        name: 'Dark',
        default: config.private.dark['dark-base'],
      },
      {
        name: 'Light',
        default: config.private.light['light-base'],
      },
      {
        name: 'Accent',
        default: config.private.other['accent'],
      },
      {
        name: 'Red',
        default: config.private.other['red'],
      },
      {
        name: 'Yellow',
        default: config.private.other['yellow'],
      },
      {
        name: 'Green',
        default: config.private.other['green'],
      },
    ],
  },
  numberFields: {
    sidebar: [
      {
        name: 'Width',
        default: config.main['sidebar-width'],
      },
      {
        name: 'Collapsed Width',
        default: config.main['sidebar-collapsed-width'],
        subtext:
          'If changed, the --collapsed-width variable in TST CSS should also be changed.',
      },
    ],
  },
  dropdown: {
    sidebar: {
      name: 'Type',
      default: 0,
      values: ['Static', 'Hover'],
    },
  },
  syntaxHighlight: (dark, darkPalette, light, accent, yellow, green, red) => ({
    hljs: {
      display: 'block',
      overflow: 'auto',
      'scrollbar-color': `${darkPalette[0]} ${darkPalette[2]}`,
      'scrollbar-width': 'thin',
      'max-height': '65vh',
      background: dark,
      color: light,
    },
    'hljs-name': {
      fontWeight: 'bold',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-code': {
      fontStyle: 'italic',
      color: darkPalette[4],
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-tag': {
      color: '#62c8f3',
    },
    'hljs-variable': {
      color: accent,
    },
    'hljs-template-variable': {
      color: accent,
    },
    'hljs-selector-id': {
      color: accent,
    },
    'hljs-selector-class': {
      color: accent,
    },
    'hljs-string': {
      color: green,
    },
    'hljs-bullet': {
      color: red,
    },
    'hljs-type': {
      color: yellow,
    },
    'hljs-title': {
      color: yellow,
    },
    'hljs-section': {
      color: yellow,
    },
    'hljs-attribute': {
      color: yellow,
    },
    'hljs-quote': {
      color: yellow,
    },
    'hljs-built_in': {
      color: yellow,
    },
    'hljs-builtin-name': {
      color: yellow,
    },
    'hljs-number': {
      color: red,
    },
    'hljs-symbol': {
      color: red,
    },
    'hljs-keyword': {
      color: 'rgba(#fcc28c8c, 0.8)',
    },
    'hljs-selector-tag': {
      color: 'rgba(#fcc28c8c, 0.8)',
    },
    'hljs-literal': {
      color: 'rgba(#fcc28c8c, 0.8)',
    },
    'hljs-comment': {
      color: darkPalette[4],
    },
    'hljs-deletion': {
      color: darkPalette[3],
      backgroundColor: red,
    },
    'hljs-regexp': {
      color: 'rgba(#c6b4f0, 0.8)',
    },
    'hljs-link': {
      color: 'rgba(#c6b4f0, 0.8)',
    },
    'hljs-meta': {
      color: `rgba(${red}, 0.8)`,
    },
    'hljs-addition': {
      backgroundColor: '#a2fca2',
      color: darkPalette[3],
    },
  }),
  configColors: (
    dark,
    darkPalette,
    light,
    lightPalette,
    accent,
    yellow,
    green,
    red,
    mask
  ) => `
  --dark-0: ${darkPalette[0]};
  --dark-base: ${dark};
  --dark-1: ${darkPalette[1]};
  --dark-2: ${darkPalette[2]};
  --dark-3: ${darkPalette[3]};
  --dark-4: ${darkPalette[4]};
  --light-0: ${lightPalette[0]};
  --light-base: ${light};
  --light-1: ${lightPalette[1]};
  --light-2: ${lightPalette[2]};
  --light-3: ${lightPalette[3]};
  --light-4: ${lightPalette[4]};
  --accent: ${accent};
  --yellow: ${yellow};
  --green: ${green};
  --red: ${red};
  --extension-icon-mask: grayscale(85%) ${mask}`,
  configMain: (sidebarWidth, sidebarCollapsedWidth) => `
  /* expanded width of the sidebar. 
    used for userChrome-static, and hover */
  --sidebar-width: ${sidebarWidth}px; 
  /* initial width of the sidebar. 
    advised not to change since tst css relies on this value*/
  --sidebar-collapsed-width: ${sidebarCollapsedWidth}px;`,
  configSidebarType: type => {
    switch (type) {
      case 0:
        return '@import "userChrome-static.css";\n';
      case 1:
        return '@import "userChrome-hover.css";\n';
      case 2:
        return '@import "userChrome-overlay.css";\n';
      default:
        break;
    }
  },
  configDividers: dividerWidth => `--dividers: ${dividerWidth}px;`,
  includeExtensionIcons: "@import 'icons/extension-icons.css';\n",
  includeHideTabline: "@import 'hide-tabline.css';\n",
  includeWindowControls: hideTabline =>
    hideTabline
      ? "@import 'window-controls/wc-without-tabline.css';\n"
      : "@import 'window-controls/wc-with-tabline.css';\n",
  includeWindowControlsWindowsPatch:
    "@import 'window-controls/wc-wt-windowspatch.css';\n",
  configUnset: `
  --tl-animation-duration: 200ms;
  /*--tl-tab-background-gradient: */
  /* uncomment and add gradient value for selected tab gradient*/
  
  /******WINDOW CONTROL PLACEMENT VARS******/
  /* larger value moves window controls down,*/
  /* can be negative(moves controls up) */
  /* 55px if tabline visible, -25px if tabline hidden */
  --wc-vertical-shift: 15px;
  --wc-left-space: 10px; /* add space to the left of window controls*/
  --wc-right-space: 15px; /* add space to the right of window controls*/
  /* left-space shifts window-controls */
  /* if you want to shift them to the left: positive value */
  /* and if you want to shift them to the right: smaller or negative value */
  /* right-space shifts rest of the navbar (forward,backward,urlbar,etc.) to the right */
  /* if you want to increase/decrease space between window-controls and navbars: */
  /* set positive/negative value for right-space*/
    `,
  configTST: collapsedWidth => `
:root{
    --tab-border-radius: 7px; /* border radius of tabs */
    --animation-duration: 200ms; /* duration of different animations [0s: turn all animations off] */
    --spacing: 14px; /* spacing between tabs. [<15px: compact tabs] */
    --distance-from-edge: 10px; /* distance between tabs, and left-right edges of sidebar*/
    --hover-text-spacing: 0.1; /* should be left alone. with hover sidebar, if text is visible in collapsed status, increase this */

    --ease-in: cubic-bezier(0.32, 0, 0.67, 0);
    --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

    --collapsed-width: ${collapsedWidth}px;
}

/************UNCUSTOMIZED CSS************/
#tabbar-container #tabbar{
   margin-bottom: 15px !important;
}

:root, #background{
    background:  var(--dark-base) !important;
}

#all-tabs{
   margin: 10px var(--distance-from-edge);
}

tab-item:not(.collapsed) {
    margin-top: var(--spacing);
    border-radius: var(--tab-border-radius);
    border: none !important;
    padding-top: 9px;
    padding-bottom: 10px;
}

tab-item.collapsed{
    height: 0;
    margin: 0 !important;
    padding: 0 !important;
}

tab-item:not([data-level="0"]):not(.pinned){
    border-left: dashed 2px var(--light-4) !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-top: calc(var(--spacing)/2);
}

tab-item tab-favicon{
    left: 0;
    filter: var(--extension-icon-mask);
    transition: left calc(var(--animation-duration)*2) var(--ease-out);
}

.highlighter {
    display: none !important;
}

tab-item .label {
    color: var(--light-2) !important;
    padding-bottom: 2px;
}


tab-item .twisty:before{
   background: var(--light-3) !important;
}

tab-item.active .label {
    color: var(--light-0) !important;
}

tab-item.active {
    background: var(--dark-3) !important;
}


tab-item:not(.active).highlighted{
    background: var(--dark-1) !important;
}

tab-item:not(active):hover {
    background: var(--dark-1);
}

tab-item:hover tab-closebox {
    right: 10px;
    opacity: 1;
}

tab-item:not(pinned) tab-closebox {
    position: absolute;
    margin-top: 2px;
    height: 20px;
    width: 20px;
    right: -30px;
    border-radius: 50%;
    padding-top: 2px;
    padding-left: 2px;
    background: var(--light-4);
    transition   : all var(--animation-duration) var(--ease-out);
}

.sound-button:after {
    background: var(--light-3) !important;
    margin-top: 2px;
}

.counter{
    color: var(--light-4) !important;
    background: var(--dark-2) !important;
    border-radius: 7px;
    margin: 2px 2px 0px 0px;
    padding: 0 4px;
    padding-bottom: 2px;
    order: -2 !important;
}

.counter:before, .counter:after{ content: ""}

/********LEFT CONTENT TAB(static)*************/

:root.left tab-item{
    padding-left: 0;
}

:root.left tab-item tab-favicon {    
    transform: scale(120%);
    margin-right: 5px;
}

:root.left tab-item .label {
    transform: translateX(10px);
    transition   : all var(--animation-duration) var(--ease-out);
}

:root.left tab-item:not(.pinned):hover tab-favicon {
    left: -35px;
}

:root.left tab-item[data-child-ids]:not(.pinned):hover tab-favicon {
    left: -40px;
}

:root.left tab-item:hover .label,
:root.left .label {
    transform: translateX(-25px);
}

:root.left tab-item[data-child-ids] .twisty{
    margin-right: 5px;
}

/********RIGHT CONTENT TAB(hover)*************/

:root.right tab-item:not(.active) tab-favicon{
    margin-right: calc(var(--collapsed-width)*-0.1) !important;
}

:root.right tab-item tab-favicon {
    transform: scale(120%) translateX(calc(var(--collapsed-width)*-0.1));
    order: 1000;
    transition: all var(--animation-duration) var(--ease-in-out);
    margin-left: calc(var(--collapsed-width)*var(--hover-text-spacing)) !important;
}

:root.right tab-item.active:not(:hover) tab-favicon {
    filter: grayscale(10%) opacity(80%);
    transform: scale(120%);
}

:root.right tab-item:not(.pinned):hover tab-favicon {
    left: -30px;
    margin-left: 25px;
}

:root.right tab-item.active:not(.pinned):hover tab-favicon {
    left: -20px !important;
    margin-left: 15px;
}

:root.right tab-item.pinned tab-favicon {
    transform: scale(120%);
}

:root.right tab-item .label {
    margin-left: 10px;
    margin-right: calc(var(--collapsed-width)*0.3) !important;
}

:root.right tab-item:not(pinned):hover tab-closebox{
    right: calc(var(--collapsed-width)*0.3);
}

:root.right tab-item:not([data-level="0"]):not(.pinned){
    border: none !important;
    border-right: dashed 2px var(--light-4) !important;
    border-radius: var(--tab-border-radius);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

:root.right tab-item.active:not([data-level="0"]):not(.pinned){
   margin-right: 5px !important;
}

:root.right .sound-button{
    order: -1 !important;
}

:root.right tab-item.active.pinned {
    position: relative;
    left: 190px !important;
}

:root.right tab-item.active.pinned tab-favicon {
    transform: scale(130%) !important;
    margin-left: 7px;
}

/***********************************/

.tab
    .favicon
    .favicon-default::before {
    filter: var(--extension-icon-mask); // change for light theme
}

.tab[data-current-favicon-uri="undefined"]
    .favicon
    .favicon-default::before{
    background: url("chrome://branding/content/identity-icons-brand.svg") no-repeat center !important;
    mask: none !important;
}

/***********NEW TAB BUTTON**********/

.newtab-button-box {
    border: none !important;
    margin: 0 50px;
}

.newtab-button {
    border: none !important;
    border-radius: 8px;
    padding: 8px 0 !important;
    margin: 0 5px;
}

.newtab-button::before{
   background: var(--light-3) !important;
}

.newtab-action-selector-anchor {
    border: none !important;
    margin-right: 10px;
    margin-top: 3px;
}

.newtab-button:hover {
    background: var(--dark-1);
}

/**********PINNED TAB***************/

tab-item.pinned {
    margin: 5px !important;
    padding: 5px !important;
    transition   : all 0.1s var(--ease-out);
}

/***********************************/

#all-tabs {
    border: none !important;
}
`,
  paletteProfiles: {
    dark: [2, 8, 4, 8, 4],
    light: [-12, -16, -4, -4, -4],
  },
};

export default data;
