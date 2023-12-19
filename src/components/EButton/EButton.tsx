import { PropType, defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { ComponentConfiguration } from '~/common/types';
import { BlockSlots, configuration as block } from '~/composables/useBlock';
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
import { LinkSlots, configuration as link } from '~/composables/useLink';
import {
  VariantSlots,
  configuration as variant,
} from '~/composables/useVariant';
import { EIcon } from '../EIcon';
import { ELoading } from '../ELoading';

const configuration = {
  name: ComponentName.EButton,
  props: {
    ...component.props,
    ...block.props,
    ...disabled.props,
    ...link.props,
    ...variant.props,
    variant: {
      ...variant.props.variant,
      _preset: true,
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      _preset: true,
      _verbose: false,
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
    },
    icon: {
      type: String as PropType<string>,
    },
    iconLeft: {
      type: String as PropType<string>,
    },
    iconRight: {
      type: String as PropType<string>,
    },
    loading: {
      type: Boolean as PropType<boolean>,
    },
  },
  emits: {
    ...block.emits,
    ...component.emits,
    ...disabled.emits,
    ...link.emits,
    ...variant.emits,
  },
  style: {
    'padding-x': 'calc(var(--spacing) * 0.75)',
    'padding-y': 'calc(var(--spacing) * 0.25)',

    'border-width': 'var(--border-width)',
    'border-radius': 'var(--border-radius)',

    'font-size': 'var(--font-size-md)',
    'font-weight': 'var(--font-weight-normal)',
    'line-height': 'var(--line-height)',
  },
} as const;

type EButton = ComponentConfiguration<
  typeof configuration,
  {
    default: {
      properties: Record<string, never>;
    };
  } & BlockSlots &
    ComponentSlots &
    DisabledSlots &
    LinkSlots &
    VariantSlots
>;

const EButton = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  components: { EIcon, ELoading },
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<EButton>(configuration, _);
    const { css, attrs, slot, render } = useContext(component);
    const {
      theming: { registerComponentStyle },
    } = _useElements();

    const props = component.props;

    registerComponentStyle(component.name, component.style);

    render(() => (
      <props.value.tag
        id={component.id.value}
        type={props.value.type}
        to={props.value.to}
        replace={props.value.replace}
        href={props.value.href}
        target={props.value.target}
        rel={props.value.rel}
        disabled={props.value.disabled ? 'true' : undefined}
        active-class={props.value.activeClass}
        exact-active-class={props.value.exactActiveClass}
        exact={props.value.exact}
        pre-fetch={props.value.prefetch}
        no-prefetch={props.value.noPrefetch}
        class={[
          css.base,
          css.modifier({
            block: props.value.block,
            [props.value.variant]: true,
            loading: props.value.loading,
            'icon-left': !!props.value.iconLeft || !!props.value.icon,
            'icon-right': !!props.value.iconRight,
          }),
        ]}
        {...attrs}
      >
        {props.value.loading && <ELoading />}
        <div class={css.element('content')}>
          {props.value.icon && <EIcon icon={props.value.icon} />}
          {props.value.iconLeft && <EIcon icon={props.value.iconLeft} />}
          {slot.node.default?.({})}
          {props.value.iconRight && <EIcon icon={props.value.iconRight} />}
        </div>
      </props.value.tag>
    ));
  },
});

export { EButton, configuration };
