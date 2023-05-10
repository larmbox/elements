# Global Configuration

`createElements` allows you to pass options to Elements.

```ts
createApp(App)
  .use(
    createElements({
      components: [EButton],
      config: {
        // LConfig - Add options here.
      },
    })
  )
  .mount('#app');
```

## Default configuration

@[code{3-25}](../../src/utils/default-config.ts)
