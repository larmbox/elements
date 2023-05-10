import { computed, ComputedRef, ExtractPropTypes, useAttrs } from 'vue';
import {
  BindOptions,
  ComponentInstance,
  GenericComponent,
  GenericProps,
} from '~/common/types';
import { useElements } from '~/composables/use-elements/use-elements';

export const componentProps = {
  id: {
    type: String,
  },
};

export type ComponentProps = ExtractPropTypes<typeof componentProps>;

export interface Binds<T extends GenericComponent> {
  props?: (keyof T['props'])[];
  events?: string[];
}

export function useComponent<T extends GenericComponent>(
  name: T['name'],
  props: Partial<T['props']>
): ComponentInstance<T> {
  return getComponentInstance<T>(name, props);
}

/**
 * Returns the current component instance and merged props.
 */
export function getComponentInstance<T extends GenericComponent>(
  name: T['name'],
  props: T['props']
): ComponentInstance<T> {
  const { uuid } = useElements();
  const attrs = useAttrs();

  const merge = (a: T['props'], b: T['props']) =>
    Object.assign(
      {},
      a,
      ...Object.entries(b).map(([k, v]) => (v === undefined ? {} : { [k]: v }))
    );

  const meta = getComponentMeta<T>(name);

  const mergedProps = computed(() => merge(meta.props, props));

  const bind = (
    bindings: Record<string, unknown>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: BindOptions<any>
  ): GenericProps => {
    bindings = Object.assign({}, bindings);
    if (!options || (!options.include && !options.exclude)) {
      return bindings;
    }

    const isIncluded = (key: keyof typeof bindings, arr: string[]) => {
      if (typeof bindings[key] === 'function') {
        if (key.startsWith('on')) {
          key = key.substring(2);
          key = key.charAt(0).toLowerCase() + key.slice(1);
        }
      }

      if (arr.includes(key)) return true;
      return false;
    };

    if (options.include) {
      for (const key of Object.keys(bindings)) {
        if (!isIncluded(key, options.include)) delete bindings[key];
      }
    }

    if (options.exclude) {
      for (const key of Object.keys(bindings)) {
        if (isIncluded(key, options.exclude)) delete bindings[key];
      }
    }

    return bindings;
  };

  const bindProps = (options?: BindOptions<keyof T['props']>) => {
    return bind(mergedProps.value, options);
  };

  const bindAttrs = (options?: BindOptions<string>) => {
    return bind(attrs, options);
  };

  return {
    props: mergedProps,
    id: computed(() => props.id || uuid()),
    name: meta.name,
    options: meta.options,
    bindProps,
    bindAttrs,
  };
}

/**
 * Returns component global configuration.
 *
 * @param name
 */
export function getComponentMeta<T extends GenericComponent>(
  name: T['name']
): T & { props: ComputedRef<GenericProps> } {
  const { config } = useElements();

  const component = config.value.components[name] as unknown as T & {
    props: ComputedRef<GenericProps>;
  };

  if (!component) {
    throw new Error(`Component '${name}' does not exist in configuration.`);
  }

  return component;
}
