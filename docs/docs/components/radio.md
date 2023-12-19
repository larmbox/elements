# Radio <Tag text="<ERadio>" />

Radio inputs are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.

<Snippet :code="example" class="wrap" />

## Variant

Use the `variant` prop to change the input theming according to your configured [variants](/theme/variants).

<Snippet :code="variants" class="wrap" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="wrap" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="wrap" />

## Labels

Use the `label`, and `description` props to describe your radio input.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the radio component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" class="wrap" />

## Disabled

A disabled radio cannot be interacted with.

<Snippet :code="disabled" class="wrap" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your radio input. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" class="wrap" />

## Component Reference

<ComponentReference src="ERadio" />

<script lang="ts" setup>
const example = `
<ERadio name="fruit" value="apple" label="Apple" checked />
<ERadio name="fruit" value="banana" label="Banana" />`

const variants = `
<ERadio variant="primary" label="Primary" checked />
<ERadio variant="secondary" label="Secondary" checked />
`

const highlight = `
<ERadio highlight variant="primary" label="Primary" />
<ERadio highlight variant="secondary" label="Secondary" />
`

const highlightFeedback = `
<ERadio feedback="Error!" label="Feedback" />
<ERadio :highlight="false" feedback="Error!" label="Override" />
`

const labels = `
<ERadio 
  label="Label"
  description="Description"
/>
`

const labelsSlots = `
<ERadio>
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: var(--primary-color)" v-text="'Description'" />
  </template>
</ERadio>
`

const block = `
<ERadio block label="Block" />
<ERadio block label="Block 2" />
`

const disabled = `
<ERadio disabled label="Disabled" />
<ERadio disabled checked label="Disabled" />`

const feedback = `
<ERadio label="Radio" feedback="This has to be set." />
`
</script>
