# Icon <Tag text="<EIcon>" />

The icon component provides allows you to easily use an icon library.

:::tip
Elements does not include any default icons. This page uses the [Bootstrap
Icons](https://icons.getbootstrap.com/) library to display example icons.
:::

<Snippet :code="example" />

## Size

The icons automatically inherit the font size of the parent container.

<Snippet :code="sizes" class="wrap" />

## SVG

Instead of font-based icons, you can reference SVG files. Set the `type` prop
to `svg` and provide the `href` prop, linking to an SVG file.

:::warning
This method has some limitations. Unlike [sprites](#sprite) and
[font-based](#font-based) icons, SVG icons cannot be colored using CSS.
:::

<Snippet :code="svg" />

### Sprite

Instead of using a separate SVG file for each icon, you can use SVG sprites by
adding the `sprite` prop:

<Snippet :code="sprite" />

::: warning
Browsers apply the same-origin policy on `<use>` elements and do not load
cross-origin URLs in the `href` attribute.
:::

## Font-based

You can use any icon library that provides a font-based icon set. See the [example
configurations](#example-configuration) for some popular icon libraries.

### Example Configuration

Below are configurations to make some popular icon libraries work with
Elements. The following configurations are made in the [global
configuration](/getting-started/installation#configuration). You can also set
the props directly on the `EIcon` component.

#### Bootstrap Icons

Import in your `.scss` file:

```scss
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css');
```

Add the following entry for `EIcon` in the [global configuration](/getting-started/installation#configuration):

```ts
EIcon: {
  config: {
    tag: 'i',
    type: 'class',
    prefix: 'bi-',
    className: ''
  }
}
```

#### Material Icons

Import in your `.scss` file:

```scss
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
```

Add the following entry for `EIcon` in the [global configuration](/getting-started/installation#configuration):

```ts
EIcon: {
  config: {
    tag: 'span',
    type: 'inline',
    prefix: '',
    className: 'material-icons'
  }
}
```

## Component Reference

<ComponentReference src="EIcon" />

<script lang="ts" setup>
import {ref} from 'vue';

const example = `
<EIcon icon="box" />
`

const sizes = `
<EIcon icon="box" />
<EIcon style="font-size: 2rem" icon="box" />
<EIcon style="font-size: 4rem" icon="box" />
`

const svg = `
<EIcon type="svg" icon="/elements/box.svg" sprite="" />
`

const sprite = `
<EIcon type="svg" sprite="/elements/bootstrap-icons.svg" prefix="" icon="box" />
`

</script>
