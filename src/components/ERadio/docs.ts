import { config } from '~/common/config';
import { block, component, disabled, input, variant } from '~/common/docs';
import { Documentation } from '~/common/types';
import { ERadio, configuration } from './ERadio';

const defaults = config.components.ERadio.props;

export const documentation: Documentation<ERadio> = {
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
    checked: {
      type: ['boolean'],
      description: 'The checked state of the switch input.',
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
