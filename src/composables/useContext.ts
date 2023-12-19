import { Comment, VNode, getCurrentInstance, useAttrs, useSlots } from 'vue';
import { ComponentConfiguration, ComponentInstance } from '~/common/types';
import { _useElements } from '~/composables/useElements';

export function useContext<T extends ComponentInstance<ComponentConfiguration>>(
  component?: T,
) {
  const attrs = useAttrs();
  const slots = useSlots();
  const { config } = _useElements();

  const vm = getCurrentInstance() as unknown as { render: () => void };

  const render = (render: () => VNode) => {
    vm.render = render;
  };

  /**
   * Returns the first non-null or non-undefined argument.
   *
   * @param args
   */
  const first = <R>(...args: R[]): R | undefined => {
    return args.find((arg) => arg !== undefined);
  };

  /**
   *
   * @param suffix
   * @param delimiter
   * @param name
   */
  const _prefix = <T extends string | CSSDictionary = string>(
    suffix: T,
    delimiter = '',
    name?: string,
    usePrefix = true,
  ): T => {
    const n = (k: string) => {
      return `${usePrefix ? config.value.prefix : ''}${
        name || component?.name
      }${delimiter}${k}`;
    };

    const result: Record<string, boolean> = {};
    if (typeof suffix === 'string') return n(suffix) as T;
    Object.entries(suffix).forEach(
      ([key, value]) => (result[n(key)] = value || false),
    );
    return result as T;
  };

  /**
   * Returns true if the component has been provided a slot with name.
   *
   * @param name Name of slot to search for.
   * @param empty If true, returns true even if the slot is empty.
   */
  const _slot = (name: keyof T['slots'], empty = true): boolean => {
    const slot = slots[name as string];
    if (slot) {
      const children = slot({}); // Important: pass empty props to slot.
      if (empty && children.length) return true;
      for (const child of children) {
        if (child.type !== Comment) return true;
      }
    }

    return false;
  };

  const slot = {
    /**
     * Returns true if the component has been provided a slot with name, even if
     * it is empty or only contains a comment.
     * This is useful if the slot content has been "v-if'ed" away, but you still
     * want to know if the slot has been provided.
     *
     * @param name The name of the slot to search for.
     */
    exists: (name: keyof T['slots']) => _slot(name),

    /**
     * Returns true if the component has been provided a slot with name and has
     * content other than a comment.
     *
     * @param name The name of the slot to search for.
     */
    active: (name: keyof T['slots']) => _slot(name, false),

    /**
     * Returns the content of the slot with name.
     * Partial because we cannot force the user to provide a slot.
     */
    node: slots as Partial<{
      [K in keyof T['slots']]: (args: T['slots'][K]['properties']) => VNode[];
    }>,
  };

  type CSSDictionary = Record<string, boolean | undefined>;

  const css = {
    /**
     *
     * @param suffix
     * @param name
     */
    element: <T extends string | CSSDictionary = string>(
      suffix: T,
      name?: string,
      usePrefix = true,
    ): T => {
      return _prefix(suffix, '-', name, usePrefix);
    },

    /**
     *
     * @param suffix
     * @param name
     */
    modifier: <T extends string | CSSDictionary = string>(
      suffix: T,
      name?: string,
      usePrefix = true,
    ): T => {
      return _prefix(suffix, '--', name, usePrefix);
    },

    /**
     *
     * @param suffix
     * @param name
     */
    base: _prefix('', '', undefined, false),
  };

  return {
    attrs,
    slot,
    css,

    first,
    render,
  };
}
