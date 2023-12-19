# Tooltip <Tag text="v-tooltip" />

::: tip
This page covers the Tooltip directive. For advanced tooltips with slots, consider using the [Tooltip component](/components/tooltip).
:::

Tooltips display informative text when users hover over, focus on, or tap an
element. Elements uses [Floating UI](https://github.com/floating-ui/floating-ui) for
tooltips.

The tooltip directive allows you to easily add a tooltip to any element.

<Snippet :code="example" />

## Syntax

The directive can be used in two ways. The first way is to pass a string to the
directive. This string will be used as the tooltip text. In this case the
tooltip uses the props inherited from the [global configuration](/getting-started/installation#configuration).

```ts
v-tooltip="'My tooltip text'"
```

The second way is to pass an object to the directive. This object should contain
a `text` property with the tooltip text. The object can also contain any of the
[tooltip props](/components/tooltip#props).

```ts
v-tooltip="{ text: 'My tooltip text', placement: 'right', delay: 1000 }"
```

## Reactivity

All directive arguments are reactive.

<Snippet :code="reactive" />

<script lang="ts" setup>
const example = `
<EButton v-tooltip="{ text: 'Howdy!' }">Tooltip</EButton>
`

const syntax = `
<template>
  <EButton>Button</EButton>
</template>`

const reactive = `
<template>
  <EButton v-tooltip="{ text: counter, placement }">Tooltip</EButton>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      placement: 'top'
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++;
      this.placement = this.placement === 'top' ? 'bottom' : 'top';
    }, 1000)
  }
}
<\/script>
`
</script>
