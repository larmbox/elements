import { PropType, defineComponent } from 'vue';
import { ComponentName } from '~/common/enums';
import { Booleanish, ComponentConfiguration } from '~/common/types';
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
import {
  InputSlots,
  configuration as input,
  useInput,
} from '~/composables/useInput';
import {
  VariantSlots,
  configuration as variant,
} from '~/composables/useVariant';
import { EFormDescription } from '../EFormDescription';
import { EFormFeedback } from '../EFormFeedback';
import { EFormInput } from '../EFormInput';
import { EFormLabel } from '../EFormLabel';
import { EIcon } from '../EIcon';

const configuration = {
  name: ComponentName.ESwitch,
  props: {
    ...block.props,
    ...component.props,
    ...disabled.props,
    ...input.props,
    ...variant.props,
    variant: {
      ...variant.props.variant,
      _preset: true,
    },
    iconChecked: {
      type: String as PropType<string>,
      default: undefined,
    },
    iconUnchecked: {
      type: String as PropType<string>,
      default: undefined,
    },
    checked: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    value: {
      type: [String, Boolean, Number, Object] as PropType<Booleanish>,
      default: undefined,
    },
    modelValue: {
      type: [String, Boolean, Number, Object] as PropType<Booleanish>,
      default: undefined,
    },
  },
  emits: {
    ...block.emits,
    ...component.emits,
    ...disabled.emits,
    ...input.emits,
    ...variant.emits,
  },
  style: {
    size: '1.5rem',
    'toggle-background-color': 'var(--border-color)',
    'line-height': 'var(--line-height)',

    'focus-shadow-size': 'var(--focus-shadow-size)',

    'border-radius': 'var(--border-radius)',
    'border-width': 'var(--border-width)',
    'border-color': 'var(--border-color)',
    'border-color--disabled': 'var(--border-color--disabled)',

    'background-color': 'var(--background-color)',
    'background-color--disabled': 'var(--background-color--disabled)',
  },
} as const;

type ESwitch = ComponentConfiguration<
  typeof configuration,
  BlockSlots & ComponentSlots & DisabledSlots & InputSlots & VariantSlots
>;

const ESwitch = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_, { emit }) {
    const component = useComponent<ESwitch>(configuration, _);
    const { css, attrs, slot, first, render } = useContext(component);
    const {
      ariaDescribedby,
      ariaErrormessage,
      ariaInvalid,
      ariaLabelledby,
      ariaRequired,
      hasContext,
    } = useInput(component);
    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, component.style);

    const props = component.props;

    const onInput = (event: Event) => {
      emit('input', event);
      emit('update:modelValue', (event.target as HTMLInputElement).checked);
    };

    render(() => (
      <EFormInput
        feedback={!!props.value.feedback}
        highlight={props.value.highlight}
        class={[
          css.base,
          css.modifier({
            block: props.value.block,
            [props.value.variant]: true,
          }),
        ]}
      >
        <div class={css.element('inner')}>
          <div>
            <input
              id={component.id.value}
              type="checkbox"
              checked={first(props.value.modelValue, props.value.checked)}
              aria-labelledby={ariaLabelledby.value}
              aria-describedby={ariaDescribedby.value}
              disabled={props.value.disabled}
              value={props.value.value}
              name={props.value.name}
              autofocus={props.value.autofocus}
              required={props.value.required}
              aria-required={ariaRequired.value}
              aria-invalid={ariaInvalid.value}
              aria-errormessage={ariaErrormessage.value}
              onInput={onInput}
              {...attrs}
            />
            <div class={css.element('target')}>
              <div class={css.element('inner-target')}>
                {props.value.iconChecked && (
                  <EIcon
                    icon={props.value.iconChecked}
                    class={[css.element('icon'), css.element('icon--checked')]}
                  />
                )}
                {props.value.iconUnchecked && (
                  <EIcon
                    icon={props.value.iconUnchecked}
                    class={[
                      css.element('icon'),
                      css.element('icon--unchecked'),
                    ]}
                  />
                )}
              </div>
            </div>

            {(slot.active('label') || props.value.label) && (
              <EFormLabel
                for={component.id.value}
                text={props.value.label}
                aria={ariaLabelledby.value}
              >
                {slot.node.label?.({ id: component.id.value })}
              </EFormLabel>
            )}
          </div>
          {hasContext.value && (
            <div class={css.element('context')}>
              {(slot.active('description') || props.value.description) && (
                <EFormDescription
                  text={props.value.description}
                  aria={ariaDescribedby.value}
                >
                  {slot.node.description?.({})}
                </EFormDescription>
              )}

              {(slot.active('feedback') || props.value.feedback) && (
                <EFormFeedback
                  text={props.value.feedback}
                  aria={ariaErrormessage.value}
                >
                  {slot.node.feedback?.({})}
                </EFormFeedback>
              )}
            </div>
          )}
        </div>
      </EFormInput>
    ));
  },
});

export { ESwitch, configuration };
