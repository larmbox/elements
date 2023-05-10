# Icon <Tag text="<EIcon>" />

The icon component provides allows you to easily use a **font-based** icon library.

Elements does not include a default icon font library. This page uses the [Bootstrap Icons](https://icons.getbootstrap.com/) library to display example icons.

<Snippet :code="example" />

## Size

The icons automatically inherit the font size of the parent container.

<Snippet :code="sizes" class="gap" />

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

</script>
