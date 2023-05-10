import { Component, ComponentDocs } from '~/common/types';
import { InputFieldProps } from '~/composables/component/use-input';
import * as input from '../EInput/docs';

/**
 * Base props, slots and events for an input field component.
 * Extends the EInput attributes for use in field-type input elements.
 */

const props: ComponentDocs<Component<never, never, InputFieldProps>>['props'] =
  [
    ...input.props,
    {
      name: 'autocomplete',
      type: 'boolean',
      description: 'Sets the autocomplete attribute value.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'If no placeholder is set, the label will be used instead.',
    },
    {
      name: 'hint',
      type: 'string',
      description: 'The hint text to display.',
    },
    {
      name: 'value',
      type: 'string | number | boolean',
      description: 'The value attribute.',
    },
    { name: 'modelValue', type: 'string | number | boolean', description: '' },
    {
      name: 'readonly',
      type: 'boolean',
      default: 'false',
      description: 'Sets the input to readonly.',
    },
  ];

const slots: ComponentDocs<Component<never, never, InputFieldProps>>['slots'] =
  [
    ...input.slots,
    {
      name: 'hint',
      description: 'A secondary description describing the input element.',
    },
  ];

const events: ComponentDocs<
  Component<never, never, InputFieldProps>
>['events'] = input.events;

export { props, slots, events };
