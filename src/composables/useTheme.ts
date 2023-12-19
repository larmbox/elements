import { ref, watch } from 'vue';
import { isClient } from '~/common/environment';
import { Config } from '~/create-elements';

export interface Theme {
  name: string;
  variables: Record<string, string | number>;
}

const GLOBAL_THEME_ID = 'ElementsTheme';

export function useTheme(config: Config) {
  const name = config.prefix;
  const PROVIDER_PREFIX = name;

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
  const theme = ref<string>(config.theme || 'default');

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
    // Check if theme exists.
    if (!themes.value.find(({ name: _ }) => _ === name)) {
      throw new Error(`Theme '${name}' has not been registered.`);
    }

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
      },
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
    variables: Theme['variables'],
  ) => {
    if (!components.value[name]) {
      components.value[name] = prefix(variables, name);
      render();
    }
  };

  const render = (id = GLOBAL_THEME_ID, override?: string) => {
    const currentTheme = override
      ? themes.value.find(({ name }) => name === override)
      : themes.value.find(({ name }) => name === theme.value);
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
          let style = document.getElementById(`${PROVIDER_PREFIX}__${id}`);
          const head = document.getElementsByTagName('head')[0];

          if (!style) {
            style = document.createElement('style');
            style.id = `${PROVIDER_PREFIX}__${id}`;
            head.appendChild(style);
          }

          style.innerHTML = content;
        }
      },
      { deep: true },
    );
  }

  // Initially register the Elements predefined common variables.
  registerTheme({ name: config.theme, variables: common });

  return {
    theme,
    providers,
    components,

    destroy,
    render,
    registerComponentStyle,
    registerTheme,
    setTheme,
  };
}

/**
 * Default CSS variables.
 * Override by registering a new theme.
 *
 * Variables missing from registered themes are inherited from the variables
 * below.
 */
const spacing = 1; // Default spacing.
export const common = {
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

  'font-size': '1rem',
  'font-size-sm': '0.875rem',
  'font-size-md': 'var(--font-size)',
  'font-size-lg': '1.125rem',

  'line-height': 1.65,

  'box-shadow': '0 0 1px 1px rgba(0, 0, 0, 0.05)',
  'focus-shadow-size': '4px',

  'transition-time': '.1s',
  'transition-type': 'linear',

  'border-radius': '0.25rem',
  'border-width': '1px',

  'border-color': '#dadada',
  'border-color--hover': 'var(--border-color)',
  'border-color--focus': 'var(--border-color)',
  'border-color--disabled': 'var(--border-color)',

  'placeholder-color': 'gray',
  'placeholder-color--hover': 'var(--placeholder-color)',
  'placeholder-color--focus': 'var(--placeholder-color)',
  'placeholder-color--disabled': 'var(--placeholder-color)',

  'text-color': '#2c3e50',
  'text-color--light': '#6c7782',
  'text-color--hover': 'var(--text-color)',
  'text-color--focus': 'var(--text-color)',
  'text-color--disabled': 'var(--text-color--light)',

  'contrast-color': '#fff',
  'contrast-color--hover': 'var(--contrast-color)',
  'contrast-color--focus': 'var(--contrast-color)',
  'contrast-color--disabled': 'var(--contrast-color)',

  'background-color': '#fff',
  'background-color--hover': '#f2f2f2',
  'background-color--focus': 'var(--background-color)',
  'background-color--active': 'var(--background-color)',
  'background-color--disabled': '#f4f4f4',

  'body-color': 'var(--background-color)',

  'primary-color': '#2c4bff',
  'primary-color--hover': '#2665c4',
  'primary-color--focus': 'var(--primary-color)',
  'primary-color--active': 'var(--primary-color)',
  'primary-color--disabled': '#70aaff',
  'primary-background-color': 'var(--primary-color)',
  'primary-background-color--hover': 'var(--primary-color--hover)',
  'primary-background-color--focus': 'var(--primary-color--focus)',
  'primary-background-color--active': 'var(--primary-color--active)',
  'primary-background-color--disabled': 'var(--primary-color--disabled)',
  'primary-border-color': 'var(--primary-color--hover)',
  'primary-border-color--hover': '#2057a8',
  'primary-border-color--focus': 'var(--primary-border-color)',
  'primary-border-color--active': 'var(--primary-border-color)',
  'primary-border-color--disabled': '#91bdff',
  'primary-box-shadow-color': '#2b73df35',
  'primary-contrast-color': 'var(--contrast-color)',
  'primary-contrast-color--disabled': 'var(--primary-contrast-color)',

  // The feedback color is used for input error messages.
  'feedback-color': '#b22454',
  'feedback-color--hover': '#991f48',
  'feedback-color--focus': 'var(--feedback-color)',
  'feedback-color--active': 'var(--feedback-color)',
  'feedback-color--disabled': '#70aaff',
  'feedback-background-color': 'var(--feedback-color)',
  'feedback-background-color--hover': 'var(--feedback-color--hover)',
  'feedback-background-color--focus': 'var(--feedback-color--focus)',
  'feedback-background-color--active': 'var(--feedback-color--active)',
  'feedback-background-color--disabled': 'var(--feedback-color--disabled)',
  'feedback-border-color': 'var(--feedback-color--hover)',
  'feedback-border-color--hover': '#801a3d',
  'feedback-border-color--focus': 'var(--feedback-border-color)',
  'feedback-border-color--active': 'var(--feedback-border-color)',
  'feedback-border-color--disabled': '#adc9f3',
  'feedback-box-shadow-color': '#df2b2b36',
  'feedback-contrast-color': 'var(--contrast-color)',
  'feedback-contrast-color--disabled': 'var(--feedback-contrast-color)',
};
