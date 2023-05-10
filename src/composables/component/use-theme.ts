import { ref, watch } from 'vue';
import { ComponentName } from '~/common/enums';
import { createPalette } from '~/common/utility/palette';
import { Config } from '~/create-elements';
import { useUtil } from './use-util';

export interface Theme {
  name: string;
  variables: Record<string, string | number>;
}

const GLOBAL_THEME_ID = 'global';

export const useTheme = (config: Config) => {
  const { isClient } = useUtil();

  const name = config.prefix;
  const PROVIDER_PREFIX = name + ComponentName.EThemeProvider;

  /**
   * Adds the `config.prefix` to variables. If componentName is defined,
   * variables are additionally prefixed with the component name.
   *
   * @param variables Object of variables to prefix.
   * @param componentName Optional component name prefix.
   */
  const prefix = (variables: Theme['variables'], componentName?: string) => {
    const defaults: Theme['variables'] = {};

    // eslint-disable-next-line prefer-const
    for (let [_key, value] of Object.entries(variables)) {
      let key = '--';
      if (name) key += `${name}`;
      if (componentName) key += `${componentName}-`;
      key += _key;
      if (name && typeof value === 'string' && value.includes('var(--')) {
        value = value.replaceAll('var(--', `var(--${name}`);
      }
      defaults[key] = value;
    }

    return defaults;
  };

  /**
   * Contains names of registered component styles.
   * Used to prevent registration of components multiple times.
   */
  const components = ref<Record<string, Theme['variables']>>({});

  /**
   * The currently active theme.
   */
  const theme = ref<string>('default');

  /**
   * Array of registered themes.
   */
  const themes = ref<Theme[]>([]);

  const providers = ref<{ id: string; content: string }[]>([
    { id: GLOBAL_THEME_ID, content: '' },
  ]);

  /**
   * Sets the active Elements theme.
   *
   * @param name Name of theme.
   */
  const setTheme = (name: string) => {
    theme.value = name;
    render();
  };

  /**
   * Registers a new Elements theme.
   *
   * @param theme The theme to register.
   */
  const registerTheme = ({ name, variables }: Theme) => {
    const index = themes.value.findIndex(({ name: _ }) => _ === name);
    if (index !== -1) {
      // Theme with this name already exists, replace it.
      if (name === config.theme) {
        // Replacing the default theme - include the common variables.
        variables = { ...common, ...variables };
      }
      themes.value[index] = { name, variables: prefix(variables) };
    } else {
      // Theme with this name does not exist, add it.
      themes.value.push({ name, variables: prefix(variables) });
    }
  };

  /**
   * Fires on theme change.
   */
  if (isClient()) {
    watch(
      () => theme.value,
      () => {
        // Update the html data-theme attribute.
        const html = document.getElementsByTagName('html')[0];
        if (html) {
          html.setAttribute('data-theme', theme.value);
        }
      }
    );
  }

  /**
   * Registers a new component style.
   *
   * @param name Name of the component.
   * @param variables Variables to set.
   */
  const registerComponentStyle = (
    name: string,
    variables: Theme['variables']
  ) => {
    if (!components.value[name]) {
      components.value[name] = prefix(variables, name);
      render();
    }
  };

  const render = (id = GLOBAL_THEME_ID) => {
    const currentTheme = themes.value.find(({ name }) => name === theme.value);
    const defaultTheme = themes.value.find(({ name }) => name === config.theme);

    // Apply the default theme variables. These include the Elements predefined
    // common variables.
    let variables = defaultTheme?.variables || {};

    // Iterate each registered component's variables.
    for (const component of Object.values(components.value)) {
      variables = { ...variables, ...component };
    }

    // Add user defined variables.
    variables = { ...variables, ...currentTheme?.variables };

    const variablesAsString = () => {
      const selector = id === GLOBAL_THEME_ID ? `:root` : `#${id}`;
      const str = Object.entries(variables)
        .map(([key, value]) => {
          return `${key}:${value}`;
        })
        .join(';');
      return `${selector}{${str}}`;
    };

    const index = providers.value.findIndex((provider) => provider.id === id);
    if (index !== -1) providers.value[index].content = variablesAsString();
    else providers.value.push({ id, content: variablesAsString() });
  };

  /**
   * Removes a theme provider from DOM. This function only works on client.
   *
   * @param id Provider id to destroy.
   */
  const destroy = (id = GLOBAL_THEME_ID) => {
    if (isClient()) {
      const element = document.getElementById(`${PROVIDER_PREFIX}${id}`);
      if (element) element.remove();
    }
  };

  /**
   * Fires after changes have been made to the provider.
   */
  if (isClient()) {
    watch(
      () => providers.value,
      () => {
        for (const { id, content } of providers.value) {
          let style = document.getElementById(`${PROVIDER_PREFIX}--${id}`);
          const head = document.getElementsByTagName('head')[0];

          if (!style) {
            style = document.createElement('style');
            style.id = `${PROVIDER_PREFIX}--${id}`;
            head.appendChild(style);
          }

          style.innerHTML = content;
        }
      },
      { deep: true }
    );
  }

  // Initially register the Elements predefined common variables.
  registerTheme({ name: config.theme, variables: common });

  return {
    theme,
    providers,

    createPalette,
    destroy,
    registerComponentStyle,
    registerTheme,
    setTheme,
  };
};

/**
 * Default CSS variables.
 * Override by registering a new theme.
 *
 * Variables missing from registered themes are inherited from the variables
 * below.
 */
const spacing = 1; // Default spacing.
const common = {
  spacing: `${spacing}rem`,
  'spacing-xs': `${spacing * 0.5}rem`,
  'spacing-sm': `${spacing * 0.75}rem`,
  'spacing-md': `${spacing}rem`,
  'spacing-lg': `${spacing * 1.25}rem`,
  'spacing-xl': `${spacing * 1.5}rem`,

  'font-weight-light': 300,
  'font-weight-normal': 400,
  'font-weight-medium': 500,
  'font-weight-semibold': 600,
  'font-weight-bold': 700,

  'border-radius': '6px',
  'border-width': '1px',

  text: '1rem',
  'text-sm': '0.875rem',
  'text-md': 'var(--text)',
  'text-lg': '1.125rem',

  'line-height': 1.25,
  'line-height-sm': 1.25,
  'line-height-md': 'var(--line-height)',
  'line-height-lg': 1.25,

  'focus-shadow-size': '4px',
  'transition-time': '.1s',
  'transition-type': 'linear',
  'border-color': '#dadada',
  'border-color--disabled': 'var(--border-color)',

  'z-index-base': 400,
  'z-index-modal': 401,
  'z-index-tooltip': 402,

  'placeholder-color': 'gray',
  'placeholder-color--hover': 'var(--placeholder-color)',
  'placeholder-color--focus': 'var(--placeholder-color)',
  'placeholder-color--disabled': 'var(--placeholder-color)',
  'text-color': '#2c3e50',
  'text-color--hover': 'var(--text-color)',
  'text-color--focus': 'var(--text-color)',
  'text-color--disabled': 'var(--text-color)',
  'text-color--light': '#6c7782',
  'contrast-color': '#fff',
  'contrast-color--hover': 'var(--contrast-color)',
  'contrast-color--focus': 'var(--contrast-color)',
  'contrast-color--disabled': 'var(--contrast-color)',
  'background-color': '#fff',
  'background-color--hover': 'var(--background-color)',
  'background-color--focus': 'var(--background-color)',
  'background-color--disabled': '#f4f4f4',
  'body-background-color': 'var(--background-color)',

  ...createPalette('primary', '#0969da'),
  ...createPalette('secondary', '#1f2225'),
  ...createPalette('success', '#1d9e64'),
  ...createPalette('error', '#cb2960'),
};
