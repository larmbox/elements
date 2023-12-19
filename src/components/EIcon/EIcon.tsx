import { PropType, defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { ComponentConfiguration } from '~/common/types';
import {
  ComponentSlots,
  configuration as component,
  useComponent,
} from '~/composables/useComponent';
import { useContext } from '~/composables/useContext';
import { _useElements } from '~/composables/useElements';

const configuration = {
  name: ComponentName.EIcon,
  props: {
    ...component.props,
    className: {
      type: String as PropType<string>,
      default: undefined,
    },
    prefix: {
      type: String as PropType<string>,
      _preset: true,
    },
    type: {
      type: String as PropType<'inline' | 'class' | 'svg' | 'sprite'>,
      _preset: true,
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      _preset: true,
      _verbose: false,
    },
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    sprite: {
      type: String as PropType<string>,
      default: undefined,
    },
    width: {
      type: String as PropType<string>,
      _preset: true,
    },
    height: {
      type: String as PropType<string>,
      _preset: true,
    },
  },
  emits: {
    ...component.emits,
  },
  style: {},
} as const;

type EIcon = ComponentConfiguration<typeof configuration, ComponentSlots>;

const EIcon = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_) {
    const component = useComponent<EIcon>(configuration, _);
    const { css, attrs, render } = useContext(component);
    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, component.style);

    const props = component.props;

    render(() =>
      props.value.type === 'inline' ? (
        <props.value.tag
          id={component.id.value}
          class={[css.base, props.value.className]}
          aria-hidden={true}
          {...attrs}
        >
          {props.value.prefix}
          {props.value.icon}
        </props.value.tag>
      ) : props.value.type === 'class' ? (
        <props.value.tag
          id={component.id.value}
          class={[
            css.base,
            props.value.className,
            `${props.value.prefix}${props.value.icon}`,
          ]}
          aria-hidden={true}
          {...attrs}
        />
      ) : (
        <svg
          id={component.id.value}
          fill="currentColor"
          class={[css.base, props.value.className]}
          aria-hidden={true}
          width={props.value.width}
          height={props.value.height}
          {...attrs}
        >
          {props.value.type === 'svg' && props.value.sprite ? (
            <use
              href={`${props.value.sprite}#${props.value.prefix}${props.value.icon}`}
            />
          ) : (
            <image href={`${props.value.prefix}${props.value.icon}`} />
          )}
        </svg>
      ),
    );
  },
});

export { EIcon, configuration };
