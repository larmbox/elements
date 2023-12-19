import { config } from '~/common/config';
import {
  block,
  component,
  disabled,
  inputField as input,
  variant,
} from '~/common/docs';
import { Documentation } from '~/common/types';
import { ESelect, configuration } from './ESelect';

const defaults = config.components.ESelect.props;

export const documentation: Documentation<ESelect> = {
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
    options: {
      type: ['Array<[Option](#option)>'],
      default: defaults.options,
      description:
        'The available options. Options are rendered as `<option>` elements.',
      nested: {
        id: 'option',
        name: 'Option',
        description: 'The available options.',
        props: {
          label: {
            type: ['string'],
            description:
              'The label of the option. If not set, value will be used instead.',
          },
          value: {
            type: ['string', 'number', 'boolean', 'null'],
            required: true,
            description:
              'The value of the option. Adds the value attribute to the option element. The emitted value always matches the type of the value prop, but the attribute set on the option element will always be a string. If the value is `null`, the value attribute is set to an empty string.',
          },
          disabled: {
            type: ['boolean'],
            description: 'Disables the option, making it unselectable.',
          },
        },
      },
    },
    icon: {
      type: ['string'],
      default: defaults.icon,
      description: 'The icon to display in the select.',
    },
    value: {
      type: ['string'],
      description: 'The value of the input element.',
    },
    modelValue: {
      type: ['string', 'number', 'boolean', 'null'],
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
