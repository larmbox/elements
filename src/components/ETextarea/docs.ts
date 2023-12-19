import { config } from '~/common/config';
import {
  block,
  component,
  disabled,
  inputField as input,
  variant,
} from '~/common/docs';
import { Documentation } from '~/common/types';
import { ETextarea, configuration } from './ETextarea';

const defaults = config.components.ETextarea.props;

export const documentation: Documentation<ETextarea> = {
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
    rows: {
      type: ['number'],
      description: 'The number of rows to display.',
    },
    cols: {
      type: ['number'],
      description: 'The number of columns to display.',
    },
    resize: {
      type: ['string'],
      default: defaults.resize,
      description:
        'The resize property specifies whether or not the textarea element is resizable by the user.',
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
