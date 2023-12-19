# Modal <Tag text="v-modal-open" /> <Tag text="v-modal-close" /> <Tag text="v-modal-close-all" />

The modal directive allows you to open and close modals from any element.

## v-modal-open

Pass the id of the modal you want to open to the `v-modal-open` directive.

```vue
<button v-modal-open="'my-modal'">Open Modal</button>
```

## v-modal-close

Closes the currently active (last in stack) modal. You can also provide the id of the modal you want to close.

```vue
<button v-modal-close>Close Modal</button>
<button v-modal-close="'my-modal'">Close Modal</button>
```

## v-modal-close-all

Closes all modals.

```vue
<button v-modal-close-all>Close</button>
```

<script lang="ts" setup>
import {ref} from 'vue';

const example = `<EButton v-modal-open="'Hello'">Open Modal</EButton>

<EModal id="Hello" title="Hello world!" description="A modal is a dialog box/popup window that is displayed on top of the current page." :closeable="false">
  <p><b>Example modal:</b> This modal has a title and description, and also a footer with a button.</p>
  <template #footer-right="{ close }">
    <EButton @click="close">Close me!</EButton>
  </template>
</EModal>`

const sizes = `
<EButton v-modal-open="'Hello-sm'">Small</EButton>
<EButton v-modal-open="'Hello-md'">Default</EButton>
<EButton v-modal-open="'Hello-lg'">Large</EButton>

<EModal v-for="size in ['sm', 'md', 'lg']" :size="size" :key="size" :id="\`Hello-\${size}\`" title="Hello world!" close-on-backdrop>
  <p>This modal is size {{ size }}!</p>
</EModal>`


const data = `<EButton v-modal-open="{ name: 'modal-with-data', data: { hello: 'world' } }">Open Modal</EButton>

<EModal id="modal-with-data" title="Modal with data" v-slot="{ data }">
  {{ data }}
</EModal>`

const stacking = `<EButton v-modal-open="'stack-1'">Open Modal 1</EButton>

<EModal id="stack-1" title="Modal 1">
  <EButton v-modal-open="'stack-2'">Open Modal 2</EButton>
</EModal>

<EModal id="stack-2" title="Modal 2">
  <EButton v-modal-open="'stack-3'">Open Modal 3</EButton>
</EModal>

<EModal id="stack-3" title="🦙" no-body />`

</script>
