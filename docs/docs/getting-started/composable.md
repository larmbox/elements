# useElements Composable

Elements exposes some methods through a composable.

This can be used to interact with Elements within your component setup function, or in your own composables.

To import useElements:

```ts
import { useElements } from '@larmbox/elements';
```

You can then use it to access various functions and properties:

```vue
<script lang="ts">
import { useElements } from '@larmbox/elements';

export default defineComponent({
  setup() {
    const { setTheme, modal } = useElements();

    setTheme('dark');
  },
});
</script>
```
