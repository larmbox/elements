import { computed, PropType } from 'vue';
import {
  ComponentConfiguration,
  ComponentInstance,
  ComposableConfiguration,
} from '~/common/types';
import { useElements } from '~/composables/useElements';
import { useContext } from './useContext';

export function useInput(component: ComponentInstance<ComponentConfiguration>) {
  const { uuid } = useElements();
  const { slot } = useContext(component);

  const hasContext = computed(() => {
    const { feedback, description } = component.props.value;
    return (
      !!feedback ||
      !!description ||
      slot.exists('feedback') ||
      slot.exists('description')
    );
  });

  const ariaRequired = computed(() => {
    const { required, ariaRequired } = component.props.value;
    return required || ariaRequired;
  });

  const ariaInvalid = computed(() => {
    const { ariaInvalid, feedback } = component.props.value;
    if (ariaInvalid) {
      return ariaInvalid;
    } else if (feedback) {
      return true;
    } else if (slot.exists('feedback')) {
      return true;
    }

    return undefined;
  });

  const ariaLabelledby = computed(() => {
    const { ariaLabelledby, label } = component.props.value;
    if (ariaLabelledby) return ariaLabelledby;
    if (label || slot.exists('label')) return uuid();
    return undefined;
  });

  const ariaDescribedby = computed(() => {
    const { ariaDescribedby, description } = component.props.value;
    if (ariaDescribedby) return ariaDescribedby;
    if (description || slot.exists('description')) return uuid();
    return undefined;
  });

  const ariaErrormessage = computed(() => {
    const { ariaErrormessage, feedback } = component.props.value;
    if (ariaErrormessage) return ariaErrormessage;
    if (feedback || slot.exists('feedback')) return uuid();
    return undefined;
  });

  return {
    hasContext,
    ariaLabelledby,
    ariaDescribedby,
    ariaErrormessage,
    ariaRequired,
    ariaInvalid,
  };
}

export const configuration = {
  props: {
    label: {
      type: String as PropType<string>,
      default: undefined,
    },
    autofocus: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    description: {
      type: String as PropType<string>,
      default: undefined,
    },
    name: {
      type: String as PropType<string>,
      default: undefined,
    },
    required: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    ariaInvalid: {
      type: [Boolean, String] as PropType<boolean | boolean>,
      default: undefined,
    },
    ariaRequired: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    ariaLabelledby: {
      type: String as PropType<string>,
      default: undefined,
    },
    ariaDescribedby: {
      type: String as PropType<string>,
      default: undefined,
    },
    ariaErrormessage: {
      type: String as PropType<string>,
      default: undefined,
    },
    feedback: {
      type: String as PropType<string>,
      default: undefined,
    },
    highlight: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    'update:modelValue': (value: unknown) => true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    input: (event: Event) => true,
  },
} as const;

export const field = {
  props: {
    ...configuration.props,
    hint: {
      type: String as PropType<string>,
      default: undefined,
    },
    autocomplete: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: {
    ...configuration.emits,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    'update:modelValue': (value: unknown) => true,
  },
} as const;

export type InputSlots = {
  label: {
    properties: {
      id: string;
    };
  };
  description: {
    properties: Record<string, never>;
  };
  feedback: {
    properties: Record<string, never>;
  };
};
export type InputFieldSlots = InputSlots & {
  hint: {
    properties: { id: string };
  };
};
export type InputConfiguration = ComposableConfiguration<
  typeof configuration,
  InputSlots
>;
export type InputFieldConfiguration = ComposableConfiguration<
  typeof field,
  InputFieldSlots
>;
