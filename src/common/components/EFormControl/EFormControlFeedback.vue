<template>
  <div
    v-if="!feedback && useSlot"
    :class="[
      css.element('feedback', name),
      css.modifier(feedbackType, css.element('feedback', name, false)),
    ]"
  >
    <slot />
  </div>
  <span
    v-else-if="feedback"
    :class="[
      css.element('feedback', name),
      css.modifier(feedbackType, css.element('feedback', name, false)),
    ]"
    v-text="feedback"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { inputProps, useContextUtil } from '~/composables/component';
import { getComponentMeta } from '~/composables/component/use-component';

export default defineComponent({
  name: 'EFormControlFeedback',
  props: {
    useSlot: {
      type: Boolean,
    },
    feedback: inputProps.feedback,
    feedbackType: inputProps.feedbackType,
  },
  setup(_props, _context) {
    return {
      name: getComponentMeta(ComponentName.EFormControl).name,
      ...useContextUtil(),
    };
  },
});
</script>
