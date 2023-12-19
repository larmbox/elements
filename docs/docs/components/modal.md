# Modal <Tag text="<EModal>" />

A modal is a dialog box/popup window that is displayed on top of the current
page.

A modal can be opened by adding the `v-modal-open` [directive](/directives/modal) to an element or by
using the `modal.open` method of the [useElements](/getting-started/composable) composable.

<Snippet :code="example" />

## Size

The modal component allows a `size` prop. Elements provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" class="wrap" />

## Data

Additional data can be passed to the modal. This data is available in the `data`
property of all [slots](#slots). The data can be any type of value.

<Snippet :code="data" />

## Stacking

It is possible to open multiple modals. The previous modal is automatically hidden when another modal is opened. When the new modal is closed, the previous will automatically open.

<Snippet :code="stacking" />

## Accessibility

The `aria-labelledby` attribute is automatically set to the modal header element
and `aria-describedby` attribute to the modal body element.

Opening a modal automatically moves the focus to inside the modal. Focus is
trapped inside the modal until it is closed. When the modal is closed, Elements
tries to restore focus to the element focused prior to opening the modal.

## Component Reference

<ComponentReference src="EModal" />

<script lang="ts" setup>
import {ref} from 'vue';

const example = `
<template>
  <EButton v-modal-open="{ name: 'my-modal' }">Open Modal</EButton>

  <EModal id="my-modal" title="Hello world!" description="This modal has a title and description, and also a footer with a button.">
    <p><b >Example modal:</b> This modal has a title and description, and also a footer with a button.</p>
    <template #footer-left="{ close }">
      <a @click="close">Cancel</a>
    </template>
      <template #footer-right="{ close }">
      <EButton @click="close">Close me!</EButton>
    </template>
  </EModal>
</template>
`

const sizes = `
<template>
  <EButton v-modal-open="{ name: 'sm' }">Small</EButton>
  <EButton v-modal-open="{ name: 'md' }">Default</EButton>
  <EButton v-modal-open="{ name: 'lg' }">Large</EButton>

  <EModal v-for="size in ['sm', 'md', 'lg']" :size="size" :key="size" :id="size" :title="size">
    <p>This modal is size <strong>{{ size }}</strong>.</p>
  </EModal>
</template>
`


const data = `
<template>
  <EButton v-modal-open="{ name: 'modal-with-data', data: { title: 'Title' } }">Open Modal</EButton>

  <EModal id="modal-with-data" title="Title">
    <template #title="{ data }">
      <span v-text="data.title"></span>
    </template>
    <template #default="{ data }">
      <span>data: </span>
      <span v-text="data"></span>
    </template>
  </EModal>
</template>
`

const stacking = `<EButton v-modal-open="'stack-1'">Open Modal 1</EButton>

<EModal id="stack-1" title="Modal 1">
  <EButton v-modal-open="'stack-2'">Open Modal 2</EButton>
</EModal>

<EModal id="stack-2" title="Modal 2">
  <EButton v-modal-open="'stack-3'">Open Modal 3</EButton>
</EModal>

<EModal id="stack-3" title="🦙">
  <EButton v-modal-close>Close</EButton>
  <EButton v-modal-close-all>Close All</EButton>
</EModal>
`

</script>
