import { useSlots } from 'vue';
import { ComponentInstance, GenericComponent } from '~/common/types';
import { _useElements } from '~/composables/use-elements/use-elements';

export function useContextUtil<T extends ComponentInstance<GenericComponent>>(
  component?: T
) {
  const slots = useSlots();
  const { config } = _useElements();

  /**
   * Returns the first non-null or non-undefined argument.
   *
   * @param args
   */
  const first = <R>(...args: R[]): R | undefined => {
    return args.find(
      (arg) => !!arg || typeof arg === 'boolean' || typeof arg === 'number'
    );
  };

  type CSSDictionary = Record<string, boolean | undefined>;

  /**
   *
   * @param suffix
   * @param name
   */
  const element = <T extends string | CSSDictionary = string>(
    suffix: T,
    name?: string,
    usePrefix = true
  ): T => {
    return prefix(suffix, '-', name, usePrefix);
  };

  /**
   *
   * @param suffix
   * @param name
   */
  const modifier = <T extends string | CSSDictionary = string>(
    suffix: T,
    name?: string,
    usePrefix = true
  ): T => {
    return prefix(suffix, '--', name, usePrefix);
  };

  /**
   *
   * @param suffix
   * @param name
   */
  const base = <T extends string | CSSDictionary = string>(
    suffix?: T,
    name?: string,
    usePrefix = true
  ): T => {
    return prefix(suffix || '', '', name, usePrefix) as T;
  };

  /**
   *
   * @param suffix
   * @param delimiter
   * @param name
   */
  const prefix = <T extends string | CSSDictionary = string>(
    suffix: T,
    delimiter = '',
    name?: string,
    usePrefix = true
  ): T => {
    const n = (k: string) => {
      return `${usePrefix ? config.value.prefix : ''}${
        name || component?.name
      }${delimiter}${k}`;
    };

    const result: Record<string, boolean> = {};
    if (typeof suffix === 'string') return n(suffix) as T;
    Object.entries(suffix).forEach(
      ([key, value]) => (result[n(key)] = value || false)
    );
    return result as T;
  };

  /**
   * Returns true if the component has been provided a slot with name.
   *
   * @param name Name of slot to search for.
   */
  const hasSlot = (name: string): boolean => {
    return !!slots[name];
  };

  return {
    hasSlot,
    first,
    css: {
      modifier,
      element,
      base,
    },
  };
}
