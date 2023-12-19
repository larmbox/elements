import {
  Middleware,
  Padding,
  Placement,
  Side,
  UseFloatingReturn,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/vue';
import {
  PropType,
  Ref,
  Teleport,
  Transition,
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue';
import { ComponentName } from '~/common/enums';
import { ELEMENTS_TELEPORT_TARGET } from '~/common/init';
import { ComponentConfiguration } from '~/common/types';
import {
  ComponentSlots,
  configuration as component,
  useComponent,
} from '~/composables/useComponent';
import { useContext } from '~/composables/useContext';
import {
  DisabledSlots,
  configuration as disabled,
} from '~/composables/useDisabled';
import { _useElements } from '~/composables/useElements';

const configuration = {
  name: ComponentName.ETooltip,
  props: {
    ...component.props,
    ...disabled.props,
    placement: {
      type: String as PropType<Placement>,
      _preset: true,
    },
    delay: {
      type: [Number, Object] as PropType<
        number | { show: number; hide: number }
      >,
      default: undefined,
      _preset: true,
    },
    flip: {
      type: Boolean as PropType<boolean>,
      default: undefined,
      _preset: true,
    },
    triggers: {
      type: Array as PropType<('focus' | 'hover')[]>,
      default: undefined,
      _preset: true,
      _verbose: false,
    },
    padding: {
      type: [Number, Object] as PropType<Padding>,
      default: undefined,
      _preset: true,
    },
    offset: {
      type: Number as PropType<number>,
      _preset: true,
    },
    arrow: {
      type: [Object, Boolean] as PropType<{ size: number } | false>,
      default: undefined,
      _preset: true,
      _verbose: true,
    },
    text: {
      type: String as PropType<string>,
      default: undefined,
    },
    /**
     * Binding is a copy of props, but reactive. Used by directive.
     * Do not use this directly.
     *
     * TODO: Exclude this from emitted declarations.
     */
    binding: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Object as PropType<Ref<any>>,
      default: undefined,
      _verbose: false,
    },
  },
  emits: {},
  style: {
    'max-width': '24rem',

    'padding-x': 'calc(var(--spacing) * 0.75)',
    'padding-y': 'calc(var(--spacing) * 0.4375)',

    'border-radius': 'var(--border-radius)',

    'font-size': 'var(--font-size-md)',

    'text-color': 'var(--text-color)',
    'background-color': 'var(--background-color)',
    'box-shadow': 'var(--box-shadow)',

    'z-index': 15,
  },
} as const;

type ETooltip = ComponentConfiguration<
  typeof configuration,
  {
    reference: {
      properties: {
        id: string;
      };
    };
    content: {
      properties: Record<string, never>;
    };
  } & ComponentSlots &
    DisabledSlots
>;

const TELEPORT_TARGET = ELEMENTS_TELEPORT_TARGET;

const ETooltip = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<ETooltip>(configuration, _);
    const { css, attrs, slot, render } = useContext(component);
    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, component.style);

    const props = computed(() => {
      if (component.props.value.binding) {
        // Merge the binding value with the props value.
        return {
          ...component.props.value,
          ...component.props.value.binding.value,
        };
      }
      return component.props.value;
    });

    const reference = ref(null);
    const floating = ref(null);
    const sparrow = ref(null);

    const active = ref(false);
    const side = ref<Side>('top');

    const listeners: Record<string, AbortController | null> = {
      focusin: null,
      focusout: null,
      mouseenter: null,
      mouseleave: null,
    } as const;

    const timeout: {
      show: NodeJS.Timeout[];
      hide: NodeJS.Timeout[];
    } = {
      show: [],
      hide: [],
    };

    const middleware = computed(() => {
      const middleware: Middleware[] = [
        offset(props.value.offset),
        shift({ padding: props.value.padding }),
      ];

      if (props.value.flip) middleware.push(flip());
      if (props.value.arrow) middleware.push(arrow({ element: sparrow }));

      return middleware;
    });

    const placement = computed(() => {
      return props.value.placement;
    });

    /**
     * Attach the floating element to the reference element.
     */
    const setup = (): UseFloatingReturn => {
      const context = useFloating(reference, floating, {
        placement,
        middleware,
        whileElementsMounted: autoUpdate,
      });

      return context;
    };

    onMounted(() => {
      const reference = document.getElementById(component.id.value);
      if (!reference) return;

      // Create event listeners.
      listeners.focusin = new AbortController();
      listeners.focusout = new AbortController();
      listeners.mouseenter = new AbortController();
      listeners.mouseleave = new AbortController();

      if (props.value.triggers.includes('focus')) {
        reference.addEventListener('focusin', show, {
          signal: listeners.focusin.signal,
        });

        reference.addEventListener('focusout', hide, {
          signal: listeners.focusout.signal,
        });
      }

      if (props.value.triggers.includes('hover')) {
        reference.addEventListener('mouseenter', show, {
          signal: listeners.mouseenter.signal,
        });

        reference.addEventListener('mouseleave', hide, {
          signal: listeners.mouseleave.signal,
        });
      }
    });

    onUnmounted(() => {
      // Remove event listeners.
      listeners.focusin?.abort();
      listeners.focusout?.abort();
      listeners.mouseenter?.abort();
      listeners.mouseleave?.abort();
    });

    /**
     * Shows the tooltip.
     */
    const show = () => {
      const delay =
        typeof props.value.delay === 'number'
          ? props.value.delay
          : props.value.delay.show;

      for (const to of timeout.hide) clearTimeout(to);
      timeout.hide = [];

      if (delay) {
        timeout.show.push(
          setTimeout(() => {
            active.value = true;
          }, delay),
        );
      } else {
        active.value = true;
      }
    };

    /**
     * Hides the tooltip.
     */
    const hide = () => {
      const delay =
        typeof props.value.delay === 'number'
          ? props.value.delay
          : props.value.delay.hide;

      for (const to of timeout.show) clearTimeout(to);
      timeout.show = [];

      if (delay) {
        timeout.hide.push(
          setTimeout(() => {
            active.value = false;
          }, delay),
        );
      } else {
        active.value = false;
      }
    };

    const context = setup();

    watch(
      () => props.value,
      () => {
        context.update();
      },
    );

    const arrowStyle = computed(() => {
      const size = props.value.arrow !== false ? props.value.arrow?.size : 0;

      let left: number | undefined = undefined;
      let top: number | undefined = undefined;

      if (context.middlewareData.value.arrow?.x)
        left = context.middlewareData.value.arrow.x;
      if (context.middlewareData.value.arrow?.y)
        top = context.middlewareData.value.arrow.y;

      return {
        width: `${size}px`,
        height: `${size}px`,
        left: left ? `${left}px` : undefined,
        top: top ? `${top}px` : undefined,
        [side.value]: `${(size * -1) / 2}px`,
      };
    });

    watch(
      () => context.placement.value,
      () => {
        const values: Record<Side, Side> = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        };

        // Sets the side of the arrow, setting it to the opposite of the placement.
        const placement = context.placement.value.split('-')[0] as Side;
        if (placement && values[placement]) side.value = values[placement];
      },
      { immediate: true },
    );

    render(() => (
      <>
        <span
          id={component.id.value}
          ref={reference}
          class={css.element('trigger')}
          {...attrs}
        >
          {slot.node.reference?.({ id: component.id.value })}
        </span>
        <Teleport to={`#${TELEPORT_TARGET}`}>
          <Transition name={css.element('animation')} appear>
            {active.value && !props.value.disabled && (
              <div
                ref={floating}
                class={css.base}
                style={context.floatingStyles.value}
              >
                {props.value.binding ? (
                  <span>{props.value.text}</span>
                ) : (
                  slot.node.content?.({})
                )}
                {props.value.arrow !== false && (
                  <div
                    class={css.element('arrow')}
                    ref={sparrow}
                    style={arrowStyle.value}
                  />
                )}
              </div>
            )}
          </Transition>
        </Teleport>
      </>
    ));
  },
});

export { ETooltip, configuration };
