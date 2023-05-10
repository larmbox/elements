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
          <div :class="css.element('inner-box')">
            <EIcon :icon="options.checkedIcon" :class="css.element('icon')" />
            <EIcon :icon="options.uncheckedIcon" :class="css.element('icon')" />
          </div>
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
import {
  useBlock,
  useComponent,
  useInput,
  useSize,
  useVariant,
} from '~/composables/component';
import { ESwitchComponent } from '..';

import { props, style } from './ESwitch';

import EFormControl from '~/common/components/EFormControl/EFormControl.vue';
import EFormControlDescription from '~/common/components/EFormControl/EFormControlDescription.vue';
import EFormControlFeedback from '~/common/components/EFormControl/EFormControlFeedback.vue';
import EFormControlLabel from '~/common/components/EFormControl/EFormControlLabel.vue';
import { ComponentName } from '~/common/enums';
import { EIcon } from '~/components';
import { useContextUtil } from '~/composables/component/use-context-util';
import { _useElements } from '~/composables/use-elements/use-elements';

export default defineComponent({
  name: ComponentName.ESwitch,
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
    const component = useComponent<ESwitchComponent>(
      ComponentName.ESwitch,
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
