import colors from './colors.json';

const data = {
  colorField: {
    main: [
      {
        name: 'Dark',
        default: colors.main.dark['--dark-base'],
      },
      {
        name: 'Light',
        default: colors.main.light['--light-base'],
      },
      {
        name: 'Accent',
        default: colors.main.other['--accent'],
      },
      {
        name: 'Red',
        default: colors.main.other['--red'],
      },
      {
        name: 'Yellow',
        default: colors.main.other['--yellow'],
      },
      {
        name: 'Green',
        default: colors.main.other['--green'],
      },
    ],
    private: [
      {
        name: 'Dark',
        default: colors.private['--dark-base'],
      },
      {
        name: 'Light',
        default: colors.private['--light-base'],
      },
      {
        name: 'Accent',
        default: colors.private['--accent'],
      },
      {
        name: 'Red',
        default: colors.private['--red'],
      },
      {
        name: 'Yellow',
        default: colors.private['--yellow'],
      },
      {
        name: 'Green',
        default: colors.private['--green'],
      },
    ],
  },
  sidebarWidths: [
    {
      name: 'Width',
      default: colors.main['--sidebar-width'],
    },
    {
      name: 'Initial Width',
      default: colors.main['--initial-width'],
      subtext: 'Only used with hover sidebar.',
    },
  ],
};

export default data;
