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
        <select
          :id="id"
          :invalid="props.feedback && props.feedbackType === 'error'"
          :value="modelValue || props.value"
          :aria-labelledby="props.label ? ariaLabelledby : undefined"
          :aria-describedby="
            props.description || props.hint ? ariaDescribedby : undefined
          "
          @input="onInput"
          v-bind="{
            ...bindProps({
              include: ['autofocus', 'disabled', 'name'],
            }),
            ...bindAttrs({
              include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
            }),
          }"
        >
          <option
            v-if="props.placeholder"
            :selected="true"
            disabled
            :value="'_'"
            v-text="props.placeholder"
          />
          <option
            v-for="({ value, label }, i) in props.options || []"
            :key="i"
            :value="value || ''"
            v-text="label"
          />
        </select>
        <EIcon :icon="options.icon" :class="css.element('icon')" />
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
import { ESelectComponent } from '..';

import EFormControl from '~/common/components/EFormControl/EFormControl.vue';
import EFormControlDescription from '~/common/components/EFormControl/EFormControlDescription.vue';
import EFormControlFeedback from '~/common/components/EFormControl/EFormControlFeedback.vue';
import EFormControlHint from '~/common/components/EFormControl/EFormControlHint.vue';
import EFormControlLabel from '~/common/components/EFormControl/EFormControlLabel.vue';

import { EIcon } from '~/components';

import { props, style } from './ESelect';

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
  name: ComponentName.ESelect,
  props,
  emits: ['input', 'update:modelValue'],
  components: {
    EIcon,
    EFormControl,
    EFormControlLabel,
    EFormControlHint,
    EFormControlDescription,
    EFormControlFeedback,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const component = useComponent<ESelectComponent>(
      ComponentName.ESelect,
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
    const { variantClass } = useVariant(component);

    const onInput = (event: Event) => {
      const target = event.target as HTMLSelectElement;

      // Disabled <option> elements are skipped in selectedIndex.
      // Subtract the number of disabled elements from the calculated index.
      let disabled = 0;
      for (const value of Object.values(target.options)) {
        if (value.disabled) disabled++;
      }

      const index = target.options.selectedIndex - disabled;

      // Use the option value from props, as only strings are valid for the
      // <option> value attribute.
      const value = component.props.value.options[index].value;

      emit('input', event);
      emit('update:modelValue', value);
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
