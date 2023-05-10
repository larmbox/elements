# Select <Tag text="<ESelect>" />

The select component represents an input control that provides a menu of options.

<Snippet :code="example" />

## Size

The select component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="grid-3" />

## Variant

Use the `variant` prop to change the input theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="grid-4" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="grid-4" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="gap" />

## Labels

Use the `label`, `description` and `hint` props to describe your select fields.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the select component is displayed as an inline element. By adding the `block` prop, the select element will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled select field cannot be interacted with.

<Snippet :code="disabled" class="gap" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your select field. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="ESelect" />

<script lang="ts" setup>
const example = `<template>
  <ESelect
    v-model="selected"
    label="Select"
    placeholder="A"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
    :hint="selected ? \`You selected \${selected}.\` : \`Please select something.\`"
  />
</template>

<script>
export default {
  data() {
    return {
      selected: null
    }
  }
}
<\/script>
`

const sizes = `<template>
  <ESelect size="sm" :options="options" label="Small" />
  <ESelect size="md" :options="options" label="Default" />
  <ESelect size="lg" :options="options" label="Large" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cranberry', value: 'cranberry' }
      ]
    }
  }
}
<\/script>
`

const variants = `
<ESelect variant="primary" placeholder="Primary" />
<ESelect variant="secondary" placeholder="Secondary" />
<ESelect variant="error" placeholder="Error" />
<ESelect variant="success" placeholder="Success"/>
`

const highlight = `
<ESelect highlight variant="primary" placeholder="Primary" />
<ESelect highlight variant="secondary" placeholder="Secondary" />
<ESelect highlight variant="error" placeholder="Error" />
<ESelect highlight variant="success" placeholder="Success"/>
`

const highlightFeedback = `
<ESelect feedback="Error!" placeholder="Feedback" />
<ESelect :highlight="false" feedback="Error!" placeholder="Override" />
`

const labels = `
<ESelect 
  label="Label"
  description="Description"
  hint="Hint"
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`

const labelsSlots = `
<ESelect 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #hint>
    <span style="color: purple" v-text="'Hint'" />
  </template>
</ESelect>
`

const block = `
<ESelect 
  block
  label="Block" 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`

const disabled = `
<template>
<ESelect 
  v-model="selected" 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
  disabled
/>
</template>

<script>
export default {
  data() {
    return {
      selected: "cranberry"
    }
  }
}
<\/script>
`

const feedback = `
<ESelect label="Select" block feedback="Error!" />
<ESelect label="Select" block feedback="Success!" feedback-type="success" />
`
</script>
