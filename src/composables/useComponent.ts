import { computed, ExtractPropTypes, PropType } from 'vue';
import { ComponentName } from '~/common/enums';
import {
  ComponentConfiguration as _ComponentConfiguration,
  ComponentInstance,
  ComposableConfiguration,
  ExtractProps,
} from '~/common/types';
import { useElements } from '~/composables/useElements';

/**
 * Returns the current component instance and merged props.
 */
export function useComponent<T extends _ComponentConfiguration>(
  configuration: Omit<T, 'slots'>,
  props: ExtractPropTypes<T['props']>,
): ComponentInstance<T> {
  const { uuid } = useElements();

  const merge = (a: Record<string, unknown>, b: Record<string, unknown>) =>
    Object.assign(
      {},
      a,
      ...Object.entries(b).map(([k, v]) => (v === undefined ? {} : { [k]: v })),
    );

  const gc = getGlobalConfiguration<T>(configuration.name);

  return {
    id: computed(() =>
      'id' in props && props.id ? (props.id as string) : uuid(),
    ),
    name: gc.name,
    props: computed(() => merge(gc.props, props) as ExtractProps<T['props']>),
    emits: configuration.emits,
    style: merge(configuration.style, gc.style || {}),
    slots: {} as never, // Slots have no actual implementation.
  };
}

/**
 * Returns component global configuration.
 *
 * @param name
 */
export function getGlobalConfiguration<T extends _ComponentConfiguration>(
  name: ComponentName,
): T {
  const { config } = useElements();

  const component = config.value.components[name] as T;

  if (!component) {
    throw new Error(`Component '${name}' does not exist in configuration.`);
  }

  return component;
}

export const configuration = {
  props: {
    id: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: {},
} as const;

export type ComponentSlots = Record<string, never>;
export type ComponentConfiguration = ComposableConfiguration<
  typeof configuration,
  ComponentSlots
>;
