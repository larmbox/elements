# Button <Tag text="<EButton>" />

The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.

<Snippet code="<EButton>Button</EButton>" />

## Variant

Use the `variant` prop to change the button theming according to your configured [variants](/theme/variants).

<Snippet :code="variants" class="wrap" />

## Block

By default the button component is displayed as an inline element. By adding the `block` prop, the button will span the whole container width.

<Snippet code="<EButton block>Block</EButton>" />

## Disabled

Set the `disabled` prop to disable button default functionality.

<Snippet code="<EButton disabled>Disabled</EButton>" />

## Icons

Use the `icon-left` and `icon-right` props to add an icon according to your [EIcon](/components/icon) settings. If your button has no text, use the `icon` prop instead.

<Snippet :code="icon" class="wrap" />

Icons are automatically scaled to button size.

## Loading

Add the `loading` prop to show the [Loading](/components/loading) component inside the button. **Note:** The Loading component's variant is set to `inherit`, inheriting the text color of the button.

<Snippet :code="loading" />

The button will maintain its width when changed from non-loading to loading:

<Snippet :code="loading2" />

## Component Reference

<ComponentReference src="EButton" />

<script lang="ts" setup>
import {ref} from 'vue';

const variants = `
<EButton variant="primary">Primary</EButton>
<EButton variant="secondary">Secondary</EButton>
`

const icon = `
<EButton icon-left="box">Text</EButton>
<EButton icon-right="mailbox">Text</EButton>
<EButton icon="bounding-box-circles"></EButton>
`

const loading = `
<template>
  <EButton :loading="loading">Loading</EButton>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
<\/script>
`

const loading2 = `
<template>
  <EButton 
    :loading="loading"
    @click="loading = !loading"
  >
    Click to toggle loading state!
  </EButton>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
<\/script>
`
</script>
