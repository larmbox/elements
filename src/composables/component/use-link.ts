import { ExtractPropTypes } from 'vue';

export function useLink(): Record<never, never> {
  return {};
}

export const linkProps = {
  activeClass: {
    type: String,
  },
  exactActiveClass: {
    type: String,
  },
  append: {
    type: Boolean,
    default: undefined,
  },
  exact: {
    type: Boolean,
    default: undefined,
  },
  replace: {
    type: Boolean,
    default: undefined,
  },
  to: {
    type: [String, Object],
  },
  prefetch: {
    type: Boolean,
    default: undefined,
  },
  noPrefetch: {
    type: Boolean,
    default: undefined,
  },
  href: {
    type: String,
  },
  target: {
    type: String,
  },
  rel: {
    type: String,
  },
};

export type LinkProps = ExtractPropTypes<typeof linkProps>;
