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
import {
  InputFieldSlots,
  field as input,
  useInput,
} from '~/composables/useInput';
import {
  VariantSlots,
  configuration as variant,
} from '~/composables/useVariant';
import { EFormDescription } from '../EFormDescription';
import { EFormFeedback } from '../EFormFeedback';
import { EFormHint } from '../EFormHint';
import { EFormInputField } from '../EFormInputField';
import { EFormLabel } from '../EFormLabel';
import { EIcon } from '../EIcon';

const configuration = {
  name: ComponentName.ESelect,
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
    options: {
      type: Array as PropType<
        {
          label?: string;
          value: string | number | boolean | null;
          disabled?: boolean;
        }[]
      >,
      _preset: true,
    },
    icon: {
      type: String as PropType<string>,
      _preset: true,
    },
    value: {
      type: [String, Boolean, Number, Object] as PropType<
        string | boolean | number | null
      >,
      default: undefined,
    },
    modelValue: {
      type: [String, Boolean, Number, Object] as PropType<
        string | boolean | number | null
      >,
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
    'padding-x': 'calc(var(--spacing) * 0.75)',
    'padding-y': 'calc(var(--spacing) * 0.25)',
    'font-size': 'var(--font-size-md)',
    'line-height': 'var(--line-height)',

    'focus-shadow-size': 'var(--focus-shadow-size)',

    'border-radius': 'var(--border-radius)',
    'border-width': 'var(--border-width)',
    'border-color': 'var(--border-color)',
    'border-color--disabled': 'var(--border-color--disabled)',

    'text-color': 'var(--text-color)',
    'text-color--disabled': 'var(--text-color--disabled)',

    'placeholder-color': 'var(--placeholder-color)',
    'placeholder-color--disabled': 'var(--placeholder-color--disabled)',

    'background-color': 'var(--background-color)',
    'background-color--disabled': 'var(--background-color--disabled)',
  },
} as const;

type ESelect = ComponentConfiguration<
  typeof configuration,
  BlockSlots & ComponentSlots & DisabledSlots & InputFieldSlots & VariantSlots
>;

const ESelect = defineComponent({
  name: configuration.name,
  props: configuration.props,
  emits: configuration.emits,
  inheritAttrs: false,
  setup(_, { emit }) {
    const component = useComponent<ESelect>(configuration, _);
    const { css, attrs, slot, render, first } = useContext(component);
    const {
      ariaDescribedby,
      ariaErrormessage,
      ariaInvalid,
      ariaLabelledby,
      ariaRequired,
    } = useInput(component);
    const {
      theming: { registerComponentStyle },
    } = _useElements();

    registerComponentStyle(component.name, component.style);

    const props = component.props;

    const onInput = (event: Event) => {
      const target = event.target as HTMLSelectElement;

      // Disabled <option> elements are skipped in selectedIndex.
      // Subtract the number of disabled elements from the calculated index.
      let disabled = 0;
      for (const value of Object.values(target.options)) {
        if (value.disabled) disabled++;
      }

      const index = target.options.selectedIndex - disabled;

      // Use the option value from props, as only strings are valid for the
      // <option> value attribute.
      const value = props.value.options[index].value;

      emit('input', event);
      emit('update:modelValue', value);
    };

    /**
     * Convert undefined to undefined, null to '', and everything else to
     * itself. This is necessary because the <option> value attribute only
     * accepts strings.
     *
     * @param value Value to convert.
     */
    const toValue = (value: unknown) => {
      if (value === undefined) return undefined;
      if (value === null) return '';
      return value;
    };

    render(() => (
      <EFormInputField
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
        {(slot.active('label') || props.value.label) && (
          <EFormLabel
            for={component.id.value}
            text={props.value.label}
            aria={ariaLabelledby.value}
            required={props.value.required}
          >
            {slot.node.label?.({ id: component.id.value })}
          </EFormLabel>
        )}

        {(slot.active('description') || props.value.description) && (
          <EFormDescription
            text={props.value.description}
            aria={ariaDescribedby.value}
          >
            {slot.node.description?.({})}
          </EFormDescription>
        )}

        <div class={css.element('inner')}>
          <div>
            <select
              id={component.id.value}
              class={css.element('target')}
              disabled={props.value.disabled}
              value={first(props.value.modelValue, props.value.value)}
              name={props.value.name}
              autofocus={props.value.autofocus}
              required={props.value.required}
              aria-labelledby={ariaLabelledby.value}
              aria-describedby={ariaDescribedby.value}
              aria-required={ariaRequired.value}
              aria-invalid={ariaInvalid.value}
              aria-errormessage={ariaErrormessage.value}
              onInput={onInput}
              {...attrs}
            >
              {(props.value.options || []).map(
                ({ value, label, disabled }, i) => {
                  const selected =
                    first(props.value.modelValue, props.value.value) ===
                    toValue(value);
                  return (
                    <option
                      key={i}
                      value={toValue(value)}
                      disabled={disabled}
                      selected={selected}
                    >
                      {label}
                    </option>
                  );
                },
              )}
            </select>
            <EIcon icon={props.value.icon} class={css.element('icon')} />
          </div>
        </div>

        {(slot.active('feedback') || props.value.feedback) && (
          <EFormFeedback
            text={props.value.feedback}
            aria={ariaErrormessage.value}
          >
            {slot.node.feedback?.({})}
          </EFormFeedback>
        )}

        {(slot.active('hint') || props.value.hint) && (
          <EFormHint text={props.value.hint}>
            {slot.node.hint?.({ id: component.id.value })}
          </EFormHint>
        )}
      </EFormInputField>
    ));
  },
});

export { ESelect, configuration };
