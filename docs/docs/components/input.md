# Input <Tag text="<EInput>" />

The input element is used to create interactive controls for web-based forms in order to accept data from the user.

<Snippet :code="example" />

## Size

The input component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="grid-3" />

## Variant

Use the `variant` prop to change the input theming according to your configured [themes](/configuration/themes/).

<Snippet :code="variants" class="grid-4" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="grid-4" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="gap" />

## Label

Use the `label`, `description` and `hint` props to describe your input field.

<Snippet :code="label" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the input component is displayed as an inline element. By adding the `block` prop, the input field will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled input field cannot be interacted with.

<Snippet :code="disabled" class="gap" />

## Readonly

Readonly differs from [Disabled](#disabled) by still allowing selecting the text already present in the input field.

<Snippet :code="readonly" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your input field. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Type

You can use all native browser HTML5 input types. Default is `text`. Elements does **not** perform input validation for the selected type.

<Snippet :code="type" class="grid-3" />

## Component Reference

<ComponentMeta src="EInput" />

<script lang="ts" setup>
const example = `<EInput label="Input" hint="Please enter something here." />`

const sizes = `
<EInput size="sm" placeholder="Small" />
<EInput size="md" placeholder="Default" />
<EInput size="lg" placeholder="Large" />
`

const variants = `
<EInput variant="primary" placeholder="Primary" />
<EInput variant="secondary" placeholder="Secondary" />
<EInput variant="error" placeholder="Error" />
<EInput variant="success" placeholder="Success"/>
`

const highlight = `
<EInput highlight variant="primary" placeholder="Primary" />
<EInput highlight variant="secondary" placeholder="Secondary" />
<EInput highlight variant="error" placeholder="Error" />
<EInput highlight variant="success" placeholder="Success"/>
`

const highlightFeedback = `
<EInput feedback="Error!" placeholder="Feedback" />
<EInput :highlight="false" feedback="Error!" placeholder="Override" />
`

const label = `
<EInput 
  label="Label"
  description="Description"
  hint="Hint"
  placeholder="Placeholder"
/>
`

const labelsSlots = `
<EInput placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #hint>
    <span style="color: purple" v-text="'Hint'" />
  </template>
</EInput>
`

const block = `
<EInput block label="Block" />
`

const disabled = `
<EInput disabled placeholder="Placeholder" />
<EInput disabled value="Value" placeholder="Placeholder" />
`

const readonly = `
<template>
  <EInput v-model="text" readonly />
</template>

<script>
export default {
  data() {
    return {
      text: "Value"
    }
  }
}
<\/script>
`

const feedback = `
<EInput label="Input" block feedback="Bad!" margin />
<EInput label="Input" block feedback="Good!" feedback-type="success" />
`

const type = `
<EInput block label="text" type="text" />
<EInput block label="number" type="number" />
<EInput block label="email" type="email" />
<EInput block label="tel" type="tel" />
<EInput block label="password" type="password" />
<EInput block label="search" type="search" />
<EInput block label="url" type="url" />
<EInput block label="date" type="date" />
<EInput block label="time" type="time" />
<EInput block label="range" type="range" />
<EInput block label="color" type="color" />
`
</script>
