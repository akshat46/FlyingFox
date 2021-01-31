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
        default: config.private['dark-base'],
      },
      {
        name: 'Light',
        default: config.private['light-base'],
      },
      {
        name: 'Accent',
        default: config.private['accent'],
      },
      {
        name: 'Red',
        default: config.private['red'],
      },
      {
        name: 'Yellow',
        default: config.private['yellow'],
      },
      {
        name: 'Green',
        default: config.private['green'],
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
        subtext: 'Only used with hover sidebar.',
      },
    ],
  },
  dropdown: {
    sidebar: {
      name: 'Type',
      default: 0,
      values: ['Static', 'Hover', 'Overlay'],
    },
  },
  syntaxHighlight: (dark, darkPalette, light, accent, yellow, green, red) => ({
    hljs: {
      display: 'block',
      overflow: 'auto',
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
    red
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
  --red: ${red};`,
  configMain: (sidebarWidth, sidebarCollapsedWidth) => `
  --sidebar-width: ${sidebarWidth}; 
  --sidebar-collapsed-width: ${sidebarCollapsedWidth}; 
  --extension-icon-mask: grayscale(100%) invert(75%) sepia(8%) saturate(862%) hue-rotate(173deg) brightness(88%);`,
  configSidebarType: type => {
    switch (type) {
      case 0:
        return '@import "userChrome-static.css";\n';
      case 1:
        return '@import "userChrome-hover.css";\n';
      case 2:
        return '@import "userChrome-overlay.css";\n';
    }
  },
  paletteProfiles: {
    dark: [2, 8, 4, 8, 4],
    light: [-12, -16, -4, -4, -4],
  },
};

export default data;
