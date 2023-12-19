# Installation

Elements is available as an [npm package](https://www.npmjs.com/package/@larmbox/elements).

::: code-group

```bash [npm]
npm install @larmbox/elements
```

```bash [pnpm]
pnpm add @larmbox/elements
```

```bash [yarn]
yarn add @larmbox/elements
```

::::

Add Elements to your entry file:

```ts
import { createApp } from 'vue';
import {
  createElements,
  EButton,
  // ... Import all components you would like to use here.
} from '@larmbox/elements';

createApp(App)
  .use(
    createElements({
      components: [
        EButton,
        // ... Add all components you would like to use here.
      ],
    })
  )
  .mount('#app');
```

## Stylesheet

Import the `elements.scss` file:

```scss
@import '@larmbox/elements/dist/theme/elements';
```

:::tip
Unless you intend to use all components, you should not import the full
stylesheet. See below how to import only the necessary stylesheets.
:::

To only import the required stylesheets:

```scss
// The 'elements-base' stylesheet is always required:
@import '@larmbox/elements/dist/theme/elements-base';

// Import any additional component styles:
// @import '@larmbox/elements/dist/components/[component-name]/[component-name]';
@import '@larmbox/elements/dist/components/EButton/EButton';
// ...
```

## Configuration

The global configuration allows you to override the default configuration of
Elements. You can override the name of each component and change every
individual default value of a prop of a component.

The global configuration also allows you to change the prefix of all class names
and CSS variables, as well as the initial theme.

The global configuration is passed to the `createElements` function as an
argument:

```ts
createApp(App)
  .use(
    createElements({
      components: [EButton],
      config: {
        // Add configuration here.
        prefix: '', // Prefix for all class names and CSS variables.
        theme: 'default',
        components: {
          EButton: {
            // Name of the component. Affects the class attribute and CSS
            // variable names.
            name: 'EButton',
            props: {
              // Default props for all EButton components.
              variant: 'green',
              // ... Any prop.
            },
          },
          // ... Add configuration for all components here.
        },
      },
    })
  )
  .mount('#app');
```
