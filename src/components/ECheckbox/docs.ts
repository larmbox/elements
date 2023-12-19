import { config } from '~/common/config';
import { block, component, disabled, input, variant } from '~/common/docs';
import { Documentation } from '~/common/types';
import { ECheckbox, configuration } from './ECheckbox';

const defaults = config.components.ECheckbox.props;

export const documentation: Documentation<ECheckbox> = {
  props: {
    ...block.props,
    ...component.props,
    ...disabled.props,
    ...input.props,
    ...variant.props,
    variant: {
      ...variant.props.variant,
      default: defaults.variant,
    },
    indeterminate: {
      type: ['boolean'],
      description: 'The indeterminate state of the checkbox input.',
    },
    checked: {
      type: ['boolean'],
      description: 'The checked state of the radio input.',
    },
    iconChecked: {
      type: ['boolean'],
      default: defaults.iconChecked,
      description: 'The checked state of the radio input.',
    },
    iconIndeterminate: {
      type: ['boolean'],
      default: defaults.iconIndeterminate,
      description: 'The checked state of the radio input.',
    },
    value: {
      type: ['string'],
      description: 'The value of the input element.',
    },
    modelValue: {
      type: ['boolean'],
      description: 'The value of the input element.',
    },
  },
  slots: {
    ...block.slots,
    ...component.slots,
    ...disabled.slots,
    ...variant.slots,
    ...input.slots,
  },
  emits: {
    ...block.emits,
    ...component.emits,
    ...disabled.emits,
    ...variant.emits,
    ...input.emits,
  },
  style: configuration.style,
};
