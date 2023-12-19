# Themes

Elements allows you to customize the look and feel of your application by using
themes. A theme is a set of CSS variables that can be applied to your
application. You can use the default theme or create your own, or use a
combination of the default theme and your own theme.

A list of the default variables can be found on the
[CSS Variables](/theme/css-variables) page. Refer to the
[Variants](/theme/variants) page for more information on how to use variants.

## Creating a theme

Use the `theming.registerTheme` from the `useElements` composable to add a theme. In
this example we are creating a theme named `dark`:

```ts
const {
  theming: { registerTheme },
} = useElements();

registerTheme({
  name: 'dark',
  variables: {
    'border-color': '#262c34',
    'background-color': '#181b20',
    'background-color--disabled': '#1f2228',
    'text-color': '#c9d4df',
    'text-color--light': '#93a7bb',
    'placeholder-color': '#93a7bb',
  },
});
```

:::tip
You only need to register a subset of variables in your theme. The remaining
variables are inherited from the default theme.

The `theming.registerTheme` function does not override existing variables in the theme. There is no need to specify all variables in the theme.
:::

To swap to the new theme, use the `theming.setTheme` method from the
`useElements` composable.

```ts
const {
  theming: { setTheme },
} = useElements();

setTheme('dark');
```

## CSS only

You can also manually override the CSS variables in your own stylesheets:

```css
:root {
  --border-color: #262c34;
}
```
