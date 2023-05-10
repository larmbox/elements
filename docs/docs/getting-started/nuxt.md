# Nuxt

Elements supports Nuxt.js `>3.0.0`.

Add `plugins/elements.ts` to you project with the following content:

```ts
import { defineNuxtPlugin } from '#app';
import {
  createElements,
  EButton /* Add all components you would like to use here. */,
} from '@larmbox/elements';

const Elements = createElements({
  components: [EButton /* Add all components you would like to use here. */],
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Elements);
});
```

Stylesheets are loaded [just like in Vue](/getting-started/introduction#stylesheet).
