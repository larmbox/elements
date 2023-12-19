# Input <Tag text="<EInput>" />

The input element is used to create interactive controls for web-based forms in order to accept data from the user.

<Snippet :code="example" />

## Variant

Use the `variant` prop to change the input theming according to your configured [variants](/theme/variants).

<Snippet :code="variants" class="wrap" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="wrap" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="wrap" />

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

<Snippet :code="disabled" class="wrap" />

## Readonly

Readonly differs from [Disabled](#disabled) by still allowing selecting the text already present in the input field.

<Snippet :code="readonly" />

## Feedback

Use the `feedback` prop to add validation or other form errors to your input field.
The `feedback` prop controls the `invalid` attribute on the input element.

<Snippet :code="feedback" />

## Type

You can use all native browser HTML5 input types. Default is `text`. Elements does **not** perform input validation for the selected type.

<Snippet :code="type" class="wrap" />

## Component Reference

<ComponentReference src="EInput" />

<script lang="ts" setup>
const example = `<EInput label="Input" hint="Please enter something here." />`

const variants = `
<template>
  <EInput variant="primary" placeholder="Primary" />
  <EInput variant="secondary" placeholder="Secondary" />
</template>
`

const highlight = `
<EInput highlight variant="primary" label="Highlighted" />
`

const highlightFeedback = `
<template>
  <EInput feedback="Error!" placeholder="Feedback" />
  <EInput :highlight="false" feedback="Error!" placeholder="Override" />
</template>
`

const label = `
<EInput 
  label="Label"
  description="Description"
  hint="Hint"
  placeholder="Placeholder"
  required
/>
`

const labelsSlots = `
<template>
  <EInput placeholder="Placeholder" required>
    <template #label="{ id }">
      <label :for="id">Label</label>
    </template>
    <template #description>
      <span style="color: var(--primary-color)" v-text="'Description'" />
    </template>
    <template #hint>
      <span style="color: var(--primary-color)" v-text="'Hint'" />
    </template>
  </EInput>
</template>
`

const block = `
<EInput block label="Block" />
`

const disabled = `
<template>
  <EInput disabled placeholder="Placeholder" />
  <EInput disabled value="Value" placeholder="Placeholder" />
</template>
`

const readonly = `
<template>
  <EInput v-model="text" label="Readonly" readonly />
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
<EInput label="Input" feedback="Double-check this field!" />
`

const type = `
<template>
  <EInput label="text" type="text" />
  <EInput label="number" type="number" />
  <EInput label="email" type="email" />
  <EInput label="tel" type="tel" />
  <EInput label="password" type="password" />
  <EInput label="search" type="search" />
  <EInput label="url" type="url" />
  <EInput label="date" type="date" />
  <EInput label="time" type="time" />
  <EInput label="range" type="range" />
  <EInput label="color" type="color" />
</template>
`
</script>
