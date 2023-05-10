import { computed, ComputedRef, ExtractPropTypes, PropType } from 'vue';
import { ComponentName } from '~/common/enums';
import { Component, ComponentInstance } from '~/common/types';
import { useElements } from '~/composables/use-elements/use-elements';
import { useContextUtil } from './use-context-util';

export function useInput(
  component: ComponentInstance<
    Component<ComponentName, unknown, InputProps | InputFieldProps>
  >
): {
  feedbackClass: ComputedRef<string | undefined>;
  highlightClass: ComputedRef<'highlight' | undefined>;
  hasLabels: ComputedRef<boolean>;
  ariaLabelledby: string;
  ariaDescribedby: string;
} {
  const { uuid } = useElements();
  const { hasSlot, css } = useContextUtil(component);

  const feedbackClass = computed(() =>
    component.props.value.feedbackType && component.props.value.feedback
      ? css.modifier(`feedback-${component.props.value.feedbackType}`)
      : undefined
  );

  const highlightClass = computed(() => {
    if (component.props.value.highlight === false) {
      return undefined;
    }
    if (component.props.value.highlight || component.props.value.feedback) {
      return css.modifier('highlight');
    }
    return undefined;
  });

  const hasLabels = computed(() => {
    const { feedback, label, description } = component.props.value;
    return (
      !!feedback ||
      !!label ||
      !!description ||
      !!('hint' in component.props.value && component.props.value.hint) ||
      hasSlot('feedback') ||
      hasSlot('label') ||
      hasSlot('description') ||
      hasSlot('hint')
    );
  });

  return {
    feedbackClass,
    highlightClass,
    hasLabels,
    ariaLabelledby: uuid(),
    ariaDescribedby: uuid(),
  };
}

export const inputProps = {
  label: {
    type: String,
  },
  autofocus: {
    type: Boolean,
    default: undefined,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
  },
  feedback: {
    type: String,
  },
  feedbackType: {
    type: String,
    default: 'error',
  },
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined,
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
  },
  highlight: {
    type: Boolean,
    required: false,
    default: undefined,
  },
};

export const inputFieldProps = {
  ...inputProps,
  placeholder: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: undefined,
  },
  hint: {
    type: String,
  },
  autocomplete: {
    type: Boolean,
    default: undefined,
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>,
  },
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputFieldProps = ExtractPropTypes<typeof inputFieldProps>;
