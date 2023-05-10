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
      :label="props.label"
      :use-slot="hasSlot('label')"
      :aria="ariaLabelledby"
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
      <textarea
        :id="id"
        :invalid="props.feedback && props.feedbackType === 'error'"
        :value="modelValue || props.value"
        :placeholder="first(props.placeholder, props.label)"
        :aria-labelledby="props.label ? ariaLabelledby : undefined"
        :aria-describedby="
          props.description || props.hint ? ariaDescribedby : undefined
        "
        :style="`resize: ${props.resize}`"
        @input="onInput"
        v-bind="{
          ...bindProps({
            include: [
              'autofocus',
              'autocomplete',
              'disabled',
              'name',
              'readonly',
              'rows',
              'cols',
            ],
          }),
          ...bindAttrs({
            include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
          }),
        }"
      />
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
import { ETextareaComponent } from '..';

import EFormControl from '~/common/components/EFormControl/EFormControl.vue';
import EFormControlDescription from '~/common/components/EFormControl/EFormControlDescription.vue';
import EFormControlFeedback from '~/common/components/EFormControl/EFormControlFeedback.vue';
import EFormControlHint from '~/common/components/EFormControl/EFormControlHint.vue';
import EFormControlLabel from '~/common/components/EFormControl/EFormControlLabel.vue';

import { ComponentName } from '~/common/enums';
import { props, style } from './ETextarea';

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
  name: ComponentName.ETextarea,
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
    const component = useComponent<ETextareaComponent>(
      ComponentName.ETextarea,
      props
    );

    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, style);

    const { blockClass } = useBlock(component);
    const { feedbackClass, ariaLabelledby, ariaDescribedby, highlightClass } =
      useInput(component);
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariant(component);

    const onInput = (event: Event) => {
      emit('input', event);
      emit('update:modelValue', (event.target as HTMLTextAreaElement).value);
    };

    return {
      ...component,
      ...useContextUtil(component),

      blockClass,
      feedbackClass,
      highlightClass,
      sizeClass,
      variantClass,

      ariaLabelledby,
      ariaDescribedby,

      onInput,
    };
  },
});
</script>
