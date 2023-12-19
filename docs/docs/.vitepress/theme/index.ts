import { getHighlighterCore } from 'shikiji';
import json from 'shikiji/langs/json.mjs';
import vue from 'shikiji/langs/vue.mjs';
import dark from 'shikiji/themes/github-dark.mjs';
import light from 'shikiji/themes/github-light.mjs';
import { getWasmInlined } from 'shikiji/wasm';
import { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { createVuelr } from 'vuelr';
import {
  EButton,
  ECheckbox,
  EIcon,
  EInput,
  ELoading,
  EModal,
  ERadio,
  ESelect,
  ESwitch,
  ETextarea,
  EThemeProvider,
  ETooltip,
  createElements,
  useElements,
} from '../../../../src';
import ComponentReference from '../components/ComponentReference.vue';
import GlobalCSSVariables from '../components/GlobalCSSVariables.vue';
import Snippet from '../components/Snippet.vue';
import Tag from '../components/Tag.vue';
import './custom.scss';

export default {
  ...DefaultTheme,
  async enhanceApp(context: EnhanceAppContext) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(context);

    context.app.use(createVuelr({ debug: true })).use(
      createElements({
        components: [
          EButton,
          EInput,
          ESelect,
          ETooltip,
          EIcon,
          ELoading,
          EModal,
          ETextarea,
          ECheckbox,
          ERadio,
          ESwitch,
          EThemeProvider,
        ],
        config: {
          components: {
            EModal: {
              props: {},
              style: {
                'z-index': 100,
              },
            },
            ETooltip: {
              style: {
                'z-index': 200,
              },
            },
            EIcon: {
              props: {
                type: 'svg',
                sprite: '/elements/bootstrap-icons.svg',
              },
            },
          },
        },
      }),
    );

    const {
      theming: { registerTheme },
    } = useElements();

    registerTheme({
      name: 'default',
      variables: {
        'background-color': 'var(--vp-c-bg)',
        'border-color': 'var(--vp-c-border)',
        'text-color': 'var(--vp-c-text-1)',
        'text-color--light': 'var(--vp-c-text-2)',
        'placeholder-color': 'var(--vp-c-text-3)',

        'secondary-color': '#5fc426',
        'secondary-background-color': 'var(--secondary-color)',
        'secondary-background-color--hover': '#55b520',
        'secondary-background-color--focus':
          'var(--secondary-background-color)',
        'secondary-background-color--active':
          'var(--secondary-background-color)',
        'secondary-background-color--disabled': '#bdffb8',
        'secondary-border-color': '#55b520',
        'secondary-border-color--hover': '#52ac20',
        'secondary-border-color--focus': 'var(--secondary-border-color)',
        'secondary-border-color--active': 'var(--secondary-border-color)',
        'secondary-border-color--disabled': '#bfffc3',
        'secondary-box-shadow-color': '#30df2a36',
        'secondary-contrast-color': 'var(--contrast-color)',
        'secondary-contrast-color--disabled': '#04200c',

        'green-color': '#0d801f',
        'green-background-color': 'var(--green-color)',
        'green-background-color--hover': '#0b6819',
        'green-background-color--focus': 'var(--green-background-color)',
        'green-background-color--active': 'var(--green-background-color)',
        'green-background-color--disabled': '#adc9f3',
        'green-border-color': '#0b6819',
        'green-border-color--hover': '#0b4a09',
        'green-border-color--focus': 'var(--green-border-color)',
        'green-border-color--active': 'var(--green-border-color)',
        'green-border-color--disabled': '#adc9f3',
        'green-box-shadow-color': '#31df2b35',
        'green-contrast-color': '#fff',
        'green-contrast-color--disabled': 'green',
      },
    });

    registerTheme({
      name: 'dark',
      variables: {
        'background-color--disabled': 'var(--vp-c-bg-elv)',
        'ETooltip-background-color': 'var(--vp-c-bg)',
      },
    });

    const shiki = await getHighlighterCore({
      themes: [light, dark],
      langs: [vue, json],
      loadWasm: getWasmInlined,
    });
    context.app.provide('shiki', shiki);

    context.app.component('Tag', Tag);
    context.app.component('Snippet', Snippet);
    context.app.component('ComponentReference', ComponentReference);
    context.app.component('GlobalCSSVariables', GlobalCSSVariables);

    if (typeof document !== 'undefined') {
      const element = document.getElementsByTagName('html')[0];

      const observer = new MutationObserver((event) => {
        const {
          theming: { setTheme },
        } = useElements();

        const target = event[0].target as HTMLElement;
        setTheme(target.classList.contains('dark') ? 'dark' : 'default');
      });

      observer.observe(element, {
        attributes: true,
        attributeFilter: ['class'],
        childList: false,
        characterData: false,
      });
    }
  },
};
