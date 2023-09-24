# Icon <Tag text="<EIcon>" />

The icon component provides allows you to easily use an icon library.

Elements does not include a default icon library. This page uses the [Bootstrap Icons](https://icons.getbootstrap.com/) library to display example icons.

<Snippet :code="example" />

## Size

The icons automatically inherit the font size of the parent container.

<Snippet :code="sizes" class="gap" />

## SVG

Instead of font-based icons, you can reference SVG files. Set the `type` prop
to `svg` and provide the `href` prop, linking to an SVG file.

<Snippet :code="svg" />

### Sprite

Instead of using a separate SVG file for each icon, you can use SVG sprites by
adding the `sprite` prop:

<Snippet :code="sprite" />

::: tip
Check the page source to see how this method differs from the icon-based method.
:::

::: warning
Browsers apply the same-origin policy on `<use>` elements and do not load
cross-origin URLs in the `href` attribute.
:::

## Example Configuration

Below are some configurations for popular icon libraries.

### Bootstrap Icons

Import in your .scss file:

```scss
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css');
```

Set [global configuration](/configuration/global-configuration) for Icon:

```ts
EIcon: {
  config: { tag: 'i', type: 'class', prefix: 'bi-', className: '' }
}
```

### Material Icons

Import in your .scss file:

```scss
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
```

Set [global configuration](/configuration/global-configuration) for Icon:

```ts
EIcon: {
  config: { tag: 'span', type: 'inline', prefix: '', className: 'material-icons' }
}
```

## Component Reference

<ComponentMeta src="EIcon" />

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
<EIcon type="svg" icon="/elements/test-icon.svg" />
`

const sprite = `
<EIcon type="svg" sprite="/elements/bootstrap-icons.svg" prefix="" icon="box" />
`

</script>
