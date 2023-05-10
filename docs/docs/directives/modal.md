# Modal <Tag text="v-modal" />

::: tip
This page covers the Modal directive. For advanced modals, consider using the [Modal Component](/components/modal).
:::

A modal is a dialog box/popup window that is displayed on top of the current page.

<Snippet :code="example" />

## Size

The modal component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="gap" />

## Data

Additional data can be passed to the modal:

<Snippet :code="data" />

Or `modal.open('modal-with-data', { hello: 'world' })` if you use the [useElements composable](/getting-started/composable).

## Stacking

It is possible to open multiple modals. The previous modal is automatically hidden when another modal is opened. When the new modal is closed, the previous will automatically open.

<Snippet :code="stacking" />

## Prevent closing

Prevent the user from closing the modal by setting the `closeable` prop to `false`.

## Close with backdrop

Allow the user to close the modal by setting the `close-on-backdrop` prop to `true`.

## Accessibility

Opening a modal automatically traps the tab focus inside the modal. When the modal is closed, Elements tries to restore focus to the element focused prior to opening the modal.

The `aria-labelledby` attribute is automatically set to the modal header element and `aria-describedby` attribute to the modal body element.

<script lang="ts" setup>
import {ref} from 'vue';

const example = `<EButton v-open-modal="'Hello'">Open Modal</EButton>

<EModal id="Hello" title="Hello world!" description="A modal is a dialog box/popup window that is displayed on top of the current page." :closeable="false">
  <p><b>Example modal:</b> This modal has a title and description, and also a footer with a button.</p>
  <template #footer-right="{ close }">
    <EButton @click="close">Close me!</EButton>
  </template>
</EModal>`

const sizes = `
<EButton v-open-modal="'Hello-sm'">Small</EButton>
<EButton v-open-modal="'Hello-md'">Default</EButton>
<EButton v-open-modal="'Hello-lg'">Large</EButton>

<EModal v-for="size in ['sm', 'md', 'lg']" :size="size" :key="size" :id="\`Hello-\${size}\`" title="Hello world!" close-on-backdrop>
  <p>This modal is size {{ size }}!</p>
</EModal>`


const data = `<EButton v-open-modal="{ name: 'modal-with-data', data: { hello: 'world' } }">Open Modal</EButton>

<EModal id="modal-with-data" title="Modal with data" v-slot="{ data }">
  {{ data }}
</EModal>`

const stacking = `<EButton v-open-modal="'stack-1'">Open Modal 1</EButton>

<EModal id="stack-1" title="Modal 1">
  <EButton v-open-modal="'stack-2'">Open Modal 2</EButton>
</EModal>

<EModal id="stack-2" title="Modal 2">
  <EButton v-open-modal="'stack-3'">Open Modal 3</EButton>
</EModal>

<EModal id="stack-3" title="🦙" no-body />`

</script>
