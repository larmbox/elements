# Switch <Tag text="<ESwitch>" />

The switch works just like a [checkbox](/components/checkbox) but has a different appearance.

<Snippet :code="example" />

## Variant

Use the `variant` prop to change the element theming according to your configured [variants](/theme/variants).

<Snippet :code="variants" class="wrap" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" class="wrap" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" class="wrap" />

## Icons

Set the `icon-checked` and `icon-unchecked` props to add icons to your switch.

<Snippet :code="icons" class="wrap" />

## Labels

Use the `label`, and `description` props to describe your switch.

<Snippet :code="labels" class="wrap" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" class="wrap" />

## Block

By default the checkbox component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" class="wrap" />

## Disabled

A disabled switch cannot be interacted with.

<Snippet :code="disabled" class="wrap" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your switch input. Elements provides variants for error and success feedback types.

<Snippet :code="feedback" class="wrap" />

## Component Reference

<ComponentReference src="ESwitch" />

<script lang="ts" setup>
const example = `<ESwitch label="Switch" />`

const variants = `
<ESwitch variant="primary" label="Primary" checked />
<ESwitch variant="secondary" label="Secondary" checked />
`

const icons = `
<ESwitch icon-checked="check" checked />
<ESwitch icon-unchecked="arrow-right-short" icon-checked="arrow-left-short" />
`


const highlight = `
<ESwitch highlight variant="primary" label="Primary" />
<ESwitch highlight variant="secondary" label="Secondary" />
`

const highlightFeedback = `
<ESwitch feedback="Error!" label="Feedback" />
<ESwitch :highlight="false" feedback="Error!" label="Override" />
`

const labels = `
<ESwitch 
  label="Label"
  description="Description"
/>
`

const labelsSlots = `
<ESwitch placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: var(--primary-color)" v-text="'Description'" />
  </template>
</ESwitch>
`

const block = `
<ESwitch block label="Block" />
<ESwitch block label="Block 2" />
`

const disabled = `
<ESwitch disabled label="Disabled" />
<ESwitch checked disabled label="Disabled" />`

const feedback = `
<ESwitch label="Switch" block feedback="Error!" />
`
</script>
