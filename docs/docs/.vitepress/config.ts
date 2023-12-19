import { defineConfig } from 'vitepress';
import { version } from '../../../package.json';

export default defineConfig({
  lang: 'en-US',
  title: 'Larmbox Elements',
  description: 'Vue 3 Component Library by Larmbox',

  lastUpdated: true,
  base: '/elements/',

  themeConfig: {
    logo: '/elements-logo.svg',
    nav: [
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
    ],

    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/getting-started/introduction' },
            { text: 'Installation', link: '/getting-started/installation' },
            // { text: 'Nuxt', link: '/getting-started/nuxt' },
            { text: 'Composable', link: '/getting-started/composable' },
          ],
        },
        {
          text: 'Theme',
          collapsed: false,
          items: [
            { text: 'Themes', link: '/theme/themes' },
            { text: 'Variants', link: '/theme/variants' },
            { text: 'CSS Variables', link: '/theme/css-variables' },
          ],
        },
        {
          text: 'Components',
          collapsed: false,
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
          collapsed: false,
          items: [
            { text: 'Modal', link: '/directives/modal' },
            { text: 'Tooltip', link: '/directives/tooltip' },
          ],
        },
        {
          text: 'Migrations',
          collapsed: false,
          items: [],
        },
      ],
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
});
