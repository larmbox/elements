<template>
  <EFormControl
    field
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
    <EFormControlLabel
      :for="id"
      :aria="ariaLabelledby"
      :label="props.label"
      :use-slot="hasSlot('label')"
    >
      <slot name="label" :id="id" />
    </EFormControlLabel>

    <EFormControlDescription
      :description="props.description"
      :use-slot="hasSlot('description')"
      :aria="ariaDescribedby"
    >
      <slot name="description" />
    </EFormControlDescription>

    <div :class="css.element('inner')">
      <div :class="css.element('element')">
        <input
          :id="id"
          :invalid="props.feedback && props.feedbackType === 'error'"
          :value="modelValue || props.value"
          :placeholder="first(props.placeholder, props.label)"
          :aria-labelledby="props.label ? ariaLabelledby : undefined"
          :aria-describedby="
            props.description || props.hint ? ariaDescribedby : undefined
          "
          @input="onInput"
          v-bind="{
            ...bindProps({
              include: [
                'min',
                'max',
                'step',
                'autofocus',
                'autocomplete',
                'type',
                'name',
                'disabled',
                'readonly',
              ],
            }),
            ...bindAttrs({
              include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
            }),
          }"
        />
      </div>
    </div>

    <EFormControlFeedback
      :feedback="props.feedback"
      :feedback-type="props.feedbackType"
      :use-slot="hasSlot('feedback')"
    >
      <slot name="feedback" />
    </EFormControlFeedback>

    <EFormControlHint
      :hint="props.hint"
      :use-slot="hasSlot('hint')"
      :aria="!props.description ? ariaDescribedby : undefined"
    >
      <slot name="hint" />
    </EFormControlHint>
  </EFormControl>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EInputComponent } from '.';

import EFormControl from '~/common/components/EFormControl/EFormControl.vue';
import EFormControlDescription from '~/common/components/EFormControl/EFormControlDescription.vue';
import EFormControlFeedback from '~/common/components/EFormControl/EFormControlFeedback.vue';
import EFormControlHint from '~/common/components/EFormControl/EFormControlHint.vue';
import EFormControlLabel from '~/common/components/EFormControl/EFormControlLabel.vue';

import { props, style } from './EInput';

import { ComponentName } from '~/common/enums';
import {
  useBlock,
  useComponent,
  useContextUtil,
  useInput,
  useSize,
  useVariantWithOutline,
} from '~/composables/component';
import { _useElements } from '~/composables/use-elements/use-elements';

export default defineComponent({
  name: ComponentName.EInput,
  props,
  emits: ['update:modelValue', 'input'],
  components: {
    EFormControl,
    EFormControlLabel,
    EFormControlHint,
    EFormControlDescription,
    EFormControlFeedback,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const component = useComponent<EInputComponent>(
      ComponentName.EInput,
      props
    );

    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, style);

    const { blockClass } = useBlock(component);
    const { feedbackClass, highlightClass, ariaDescribedby, ariaLabelledby } =
      useInput(component);
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariantWithOutline(component);

    const onInput = (event: InputEvent | Event) => {
      emit('input', event);
      emit('update:modelValue', (event.target as HTMLInputElement).value);
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

      onInput,
    };
  },
});
</script>
