# Variants

Each variant is created from a number of CSS variables. To add a new variant,
add the following variables to your theme, replacing the variant-name with your
actual variant's name.

In this example we add a variant named `green` to the `default` theme:

```ts
const {
  theming: { registerTheme },
} = useElements();

registerTheme({
  name: 'default',
  variables: {
    'green-color': 'green',
    'green-background-color': 'var(--green-color)',
    'green-background-color--hover': '#2665c4',
    'green-background-color--focus': 'var(--green-background-color)',
    'green-background-color--active': 'var(--green-background-color)',
    'green-background-color--disabled': '#adc9f3',
    'green-border-color': '#2665c4',
    'green-border-color--hover': '#2057a8',
    'green-border-color--focus': 'var(--green-border-color)',
    'green-border-color--active': 'var(--green-border-color)',
    'green-border-color--disabled': '#adc9f3',
    'green-box-shadow-color': '#2b73df35',
    'green-contrast-color': '#fff',
    'green-contrast-color--disabled': 'red',
  },
});
```

To enable the variant, we must update the `$variants` variable in our `.scss` file:

```scss
$variants: ('primary', 'green');
```

You can now add `variant="green"` to supported components to apply the variant:

<EButton variant="green">Green</EButton>
