import { Component, ComponentDocs } from '~/common/types';
import { ComponentProps } from '~/composables/component';

/**
 * Base component props.
 * All components inherit these props.
 */
const props: ComponentDocs<Component<never, never, ComponentProps>>['props'] = [
  {
    name: 'id',
    type: 'string',
    description: 'ID attribute to set on the root element.',
  },
];

export { props };
