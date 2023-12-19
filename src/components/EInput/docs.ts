import { config } from '~/common/config';
import {
  block,
  component,
  disabled,
  inputField as input,
  variant,
} from '~/common/docs';
import { Documentation } from '~/common/types';
import { EInput, configuration } from './EInput';

const defaults = config.components.EInput.props;

export const documentation: Documentation<EInput> = {
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
    min: {
      type: ['string', 'number'],
      description: 'The value of the input element.',
    },
    max: {
      type: ['string', 'number'],
      description: 'The value of the input element.',
    },
    step: {
      type: ['string', 'number'],
      description: 'The value of the input element.',
    },
    type: {
      type: ['string'],
      description: 'The value of the input element.',
    },
    placeholder: {
      type: ['string'],
      description: 'The value of the input element.',
    },
    readonly: {
      type: ['boolean'],
      description: 'The value of the input element.',
    },
    value: {
      type: ['string'],
      description: 'The value of the input element.',
    },
    modelValue: {
      type: ['string'],
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
