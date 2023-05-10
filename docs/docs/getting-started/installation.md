# Installation

Elements is available as an [npm package](https://www.npmjs.com/package/@larmbox/elements).

<CodeGroup>
  <CodeGroupItem title="npm" active>

```bash
npm install @larmbox/elements
```

  </CodeGroupItem>
  <CodeGroupItem title="Yarn">
  
```bash
yarn add @larmbox/elements
```

  </CodeGroupItem>
</CodeGroup>

Add Elements to your entry file:

```ts
import { createApp } from 'vue';
import {
  createElements,
  EButton /* Add all components you would like to use here. */,
} from '@larmbox/elements';

createApp(App)
  .use(
    createElements({
      components: [
        EButton /* Add all components you would like to use here. */,
      ],
    })
  )
  .mount('#app');
```

## Stylesheet

Import the `elements.scss` file with Sass:

```scss
@import '@larmbox/elements/dist/theme/elements';
```

:::warning
You probably do not want to import the full stylesheet if you do not intend to use all components. See below how to import only the necessary stylesheets.
:::

To only import the required stylesheets:

```scss
// The 'elements-base' stylesheet is always required:
@import '@larmbox/elements/dist/theme/elements-base';

// Import any additional component styles:
// @import '@larmbox/elements/dist/components/[component-name]/[component-name]';
@import '@larmbox/elements/dist/components/button/button';
// ...
```
