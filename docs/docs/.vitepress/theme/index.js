import DefaultTheme from 'vitepress/theme';
import ComponentMeta from '../components/ComponentMeta.vue';
import Playground from '../components/Playground.vue';
import Snippet from '../components/Snippet.vue';
import Tag from '../components/Tag.vue';
import './custom.scss';

import {
  createElements,
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
  ETooltip,
  useElements
} from '~/';

import { createVuelr, Vuelr } from 'vuelr';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    ctx.app.use(createVuelr({ components: [Vuelr] })).use(
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
        ],
        config: {
          prefix: 'e-',
          components: {
            EFormControl: {
              name: 'ee99ff',
            },
            ECheckbox: {
              name: 'dd106f',
            },
            EIcon: {
              name: 'f601dd',
              props: {
                href: '/elements/bootstrap-icons.svg',
                tag: 'i',
                type: 'href',
                prefix: 'bi-',
                className: 'icon',
              },
            },
          },
        },
      })
    );

    const {
      theming: { registerTheme, createPalette },
    } = useElements();

    registerTheme({
      name: 'dark',
      variables: {
        'border-color': '#262c34',
        'background-color': '#181b20',
        'background-color--disabled': '#1f2228',
        'text-color': '#adbac7',
        'text-color--light': '#93a7bb',
        'placeholder-color': '#93a7bb',
        'border-width': '2px',
        ...createPalette('secondary', '#2b6286'),
      },
    });

    // register your custom global components
    ctx.app.component('Snippet', Snippet)
    ctx.app.component('ComponentMeta', ComponentMeta)
    ctx.app.component('Tag', Tag)
    ctx.app.component('Playground', Playground)


    if (typeof document !== 'undefined') {
      const element = document.getElementsByTagName('html')[0];

      const observer = new MutationObserver(function (event) {
        const {
          theming: { setTheme },
        } = useElements();

        const target = event[0].target;
        setTheme(target.classList.contains('dark') ? 'dark' : 'light');
      });

      observer.observe(element, {
        attributes: true,
        attributeFilter: ['class'],
        childList: false,
        characterData: false,
      });
    }
  }


}
