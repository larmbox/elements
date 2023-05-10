<template>
  <EFormControl
    :class="[
      css.base(),
      blockClass,
      feedbackClass,
      highlightClass,
      sizeClass,
      variantClass,
    ]"
    v-bind="{
      ...bindAttrs({
        exclude: ['blur', 'change', 'focus', 'focusin', 'focusout'],
      }),
    }"
  >
    <div :class="css.element('inner')">
      <div>
        <input
          :id="id"
          type="checkbox"
          :invalid="props.feedback && props.feedbackType === 'error'"
          :checked="modelValue || props.checked"
          :aria-labelledby="props.label ? ariaLabelledby : undefined"
          :aria-describedby="props.description ? ariaDescribedby : undefined"
          @input="onInput"
          v-bind="{
            ...bindProps({
              include: ['autofocus', 'disabled', 'name', 'value'],
            }),
            ...bindAttrs({
              include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
            }),
          }"
        />
        <div :class="css.element('box')">
          <EIcon
            v-if="props.indeterminate"
            :icon="options.iconIndeterminate"
            :class="css.element('icon')"
          />
          <EIcon
            v-else
            :icon="options.iconChecked"
            :class="css.element('icon')"
          />
        </div>
        <EFormControlLabel
          :for="id"
          :label="props.label"
          :use-slot="hasSlot('label')"
          :aria="ariaLabelledby"
        >
          <slot name="label" :id="id" />
        </EFormControlLabel>
      </div>
      <div v-if="hasLabels" :class="css.element('context')">
        <EFormControlDescription
          :description="props.description"
          :use-slot="hasSlot('description')"
          :aria="ariaDescribedby"
        >
          <slot name="description" />
        </EFormControlDescription>
        <EFormControlFeedback
          :feedback="props.feedback"
          :feedback-type="props.feedbackType"
          :use-slot="hasSlot('feedback')"
        >
          <slot name="feedback" />
        </EFormControlFeedback>
      </div>
    </div>
  </EFormControl>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ECheckboxComponent } from '..';

import EFormControl from '~/common/components/EFormControl/EFormControl.vue';
import EFormControlDescription from '~/common/components/EFormControl/EFormControlDescription.vue';
import EFormControlFeedback from '~/common/components/EFormControl/EFormControlFeedback.vue';
import EFormControlLabel from '~/common/components/EFormControl/EFormControlLabel.vue';
import EIcon from '~/components/EIcon';

import { props, style } from './ECheckbox';

import { ComponentName } from '~/common/enums';
import {
  useBlock,
  useComponent,
  useContextUtil,
  useInput,
  useSize,
  useVariant,
} from '~/composables/component';
import { _useElements } from '~/composables/use-elements/use-elements';

export default defineComponent({
  name: ComponentName.ECheckbox,
  props,
  emits: ['input', 'update:modelValue'],
  components: {
    EFormControl,
    EFormControlLabel,
    EFormControlDescription,
    EFormControlFeedback,
    EIcon,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const component = useComponent<ECheckboxComponent>(
      ComponentName.ECheckbox,
      props
    );

    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, style);

    const { blockClass } = useBlock(component);
    const {
      ariaDescribedby,
      ariaLabelledby,
      feedbackClass,
      highlightClass,
      hasLabels,
    } = useInput(component);
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariant(component);

    const onInput = (event: Event) => {
      emit('input', event);
      emit('update:modelValue', (event.target as HTMLInputElement).checked);
    };

    return {
      ...component,
      ...useContextUtil(component),

      blockClass,
      feedbackClass,
      highlightClass,
      sizeClass,
      variantClass,

      ariaDescribedby,
      ariaLabelledby,
      hasLabels,

      onInput,
    };
  },
});
</script>
