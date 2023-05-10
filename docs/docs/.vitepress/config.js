import { resolve } from 'path';
import { version } from '../../../package.json';


console.log(resolve(__dirname, '..', '..', '..', 'src'))

export default {
  lang: 'en-US',
  title: 'Larmbox Elements',
  description: 'Vue 3 Component Library by Larmbox',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  base: '/elements/',

  alias: {
    '~': resolve(__dirname, '..', '..', '..', 'src'),
  },

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    logo: 'https://cdn.larmbox.com/assets/labox-logo.svg',
    nav: nav(),

    sidebar: {
      '/': sidebarGuide(),
    },

    editLink: {
      pattern: 'https://github.com/larmbox/elements/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/larmbox/elements' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Larmbox',
    },
  },
};

function nav() {
  return [
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/larmbox/elements/blob/master/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/larmbox/elements/blob/master/.github/contributing.md',
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: 'Getting Started',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/getting-started/introduction' },
        { text: 'Installation', link: '/getting-started/installation' },
        { text: 'Nuxt', link: '/getting-started/nuxt' },
        { text: 'Composable', link: '/getting-started/composable' },
        { text: 'Playground', link: '/getting-started/playground' },
      ],
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Theme Provider', link: '/theme/theme-provider' },
        { text: 'CSS Variables', link: '/theme/css-variables' },
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      items: [
        { text: 'Button', link: '/components/button' },
        { text: 'Checkbox', link: '/components/checkbox' },
        { text: 'Icon', link: '/components/icon' },
        { text: 'Input', link: '/components/input' },
        { text: 'Loading', link: '/components/loading' },
        { text: 'Modal', link: '/components/modal' },
        { text: 'Radio', link: '/components/radio' },
        { text: 'Select', link: '/components/select' },
        { text: 'Switch', link: '/components/switch' },
        { text: 'Textarea', link: '/components/textarea' },
        { text: 'Tooltip', link: '/components/tooltip' },
      ],
    },
    {
      text: 'Directives',
      collapsible: true,
      items: [
        { text: 'Modal', link: '/directives/modal' },
        { text: 'Tooltip', link: '/directives/tooltip' },
      ],
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [

      ],
    },
  ];
}
