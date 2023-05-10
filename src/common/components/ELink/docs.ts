import { Component, ComponentDocs } from '~/common/types';
import { LinkProps } from '~/composables/component';

/**
 * Base props, slots and events for an components that have link functionality.
 *
 * Some properties are Nuxt specifc.
 * @see https://nuxtjs.org/docs/features/nuxt-components/#the-nuxtlink-component
 */

const props: ComponentDocs<Component<never, never, LinkProps>>['props'] = [
  { name: 'activeClass', type: 'string', description: '' },
  { name: 'exactActiveClass', type: 'string', description: '' },
  { name: 'exact', type: 'boolean', default: false, description: '' },
  {
    name: 'replace',
    type: 'boolean',
    default: false,
    description:
      'Programmatically navigate to a new URL by replacing the current entry in the history stack.',
  },
  {
    name: 'to',
    type: 'string',
    description: 'Denotes the target route of the link.',
  },
  {
    name: 'prefetch',
    type: 'boolean',
    default: true,
    description: 'Enables link prefetching.',
    nuxt: true,
  },
  {
    name: 'noPrefetch',
    type: 'boolean',
    default: false,
    description: 'Disables link prefetching.',
    nuxt: true,
  },
  {
    name: 'href',
    type: 'string',
    description: `The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.`,
  },
  { name: 'target', type: 'string', description: 'The target attribute.' },
  { name: 'rel', type: 'string', description: 'The rel attribute.' },
];

export { props };
