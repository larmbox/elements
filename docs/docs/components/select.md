# Select <Tag text="<ESelect>" />

The select component represents an input control that provides a menu of options.

<Snippet :code="example" />

## Variant

Use the `variant` prop to change the element theming according to your configured [variants](/theme/variants).

<Snippet :code="variants" class="wrap" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="wrap" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="wrap" />

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

<Snippet :code="disabled" class="wrap" />

## Disabled Option

A disabled option cannot be selected.

<Snippet :code="disabledOption" />

## Feedback

Use the `feedback` prop to add validation or other form errors to your select
field. The `feedback` prop controls the `invalid` attribute on the select element.

<Snippet :code="feedback" />

## Component Reference

<ComponentReference src="ESelect" />

<script lang="ts" setup>
const example = `<template>
  <ESelect
    v-model="selected"
    label="Select"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
    :hint="\`You selected \${selected}.\`"
  />
</template>

<script>
export default {
  data() {
    return {
      selected: 'apple'
    }
  }
}
<\/script>
`

const variants = `
<template>
  <ESelect
    variant="primary" 
    label="Primary"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
  />
  <ESelect
    variant="secondary" 
    label="Secondary"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
  />
</template>
`

const highlight = `
<template>
  <ESelect
    highlight
    variant="primary" 
    label="Primary"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
  />
  <ESelect
    highlight
    variant="secondary" 
    label="Secondary"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
  />
</template>
`

const highlightFeedback = `
<template>
  <ESelect
    feedback="Check this field!"
    label="Feedback"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
  />
  <ESelect
    :highlight="false"
    feedback="Check this field!"
    label="Override"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
  />
</template>
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
<template>
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
      <span style="color: var(--primary-color)" v-text="'Description'" />
    </template>
    <template #hint>
      <span style="color: var(--primary-color)" v-text="'Hint'" />
    </template>
  </ESelect>
</template>
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
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
    disabled
  />
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

const disabledOption = `
<ESelect 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana', disabled: true },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`

const feedback = `
<ESelect
  feedback="Check this field!"
  label="Feedback"
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`
</script>
