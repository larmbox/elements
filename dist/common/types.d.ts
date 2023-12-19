import { ComputedRef, ExtractPropTypes, PropType } from 'vue';
import type { EButton, ECheckbox, EFormDescription, EFormFeedback, EFormHint, EFormInput, EFormInputField, EFormLabel, EIcon, EInput, ELoading, EModal, ERadio, ESelect, ESwitch, ETextarea, EThemeProvider, ETooltip } from '../components';
import { ComponentName } from './enums';
import { InferPropType, RequiredKeys } from './types.internal';
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export type Booleanish = boolean | 'true' | 'false';
type TypeObj<T> = {
    [K in keyof T]: T[K] extends number ? number : T[K] extends string ? string : T[K];
};
type Prop<T = any> = {
    type: PropType<T>;
    default?: boolean;
    required?: boolean;
    _preset?: true;
    _verbose?: boolean;
    validator?(value: unknown): boolean;
};
type Slot = {
    properties: Record<string, unknown>;
};
type Emit = (...args: any[]) => unknown;
type Style = string | number;
type Props = Record<string, Prop>;
type Emits = Record<string, Emit>;
type Styles = Record<string, Style>;
type Slots = Record<string, Slot>;
type AllProperties = {
    style: Styles;
    props: Props;
    emits: Emits;
};
type Configureable<T extends ComponentConfiguration, B extends boolean> = (B extends true ? Omit<Partial<T>, 'name' | 'props' | 'style'> & {
    /**
     * The name of the component.
     * This should not be changed if you are using compiled CSS.
     */
    name: string;
} : Omit<T, 'emits' | 'slots' | 'props' | 'style'>) & {
    props: ExtractProps<T['props']>;
    style?: Partial<TypeObj<T['style']>>;
};
export type ComponentConfiguration<T = AllProperties, S = Slots> = T & {
    name: ComponentName;
    slots: S;
};
export type ComposableConfiguration<T = AllProperties, S = Slots> = Omit<ComponentConfiguration<T, S>, 'style' | 'name'>;
export interface Components<U extends boolean = false> {
    EButton: Configureable<EButton, U>;
    ECheckbox: Configureable<ECheckbox, U>;
    EIcon: Configureable<EIcon, U>;
    EInput: Configureable<EInput, U>;
    ELoading: Configureable<ELoading, U>;
    EModal: Configureable<EModal, U>;
    ERadio: Configureable<ERadio, U>;
    ESelect: Configureable<ESelect, U>;
    ESwitch: Configureable<ESwitch, U>;
    ETextarea: Configureable<ETextarea, U>;
    EThemeProvider: Configureable<EThemeProvider, U>;
    ETooltip: Configureable<ETooltip, U>;
    EFormLabel: Configureable<EFormLabel, U>;
    EFormInput: Configureable<EFormInput, U>;
    EFormInputField: Configureable<EFormInputField, U>;
    EFormDescription: Configureable<EFormDescription, U>;
    EFormHint: Configureable<EFormHint, U>;
    EFormFeedback: Configureable<EFormFeedback, U>;
}
export interface ComponentInstance<T extends ComponentConfiguration> {
    id: ComputedRef<string>;
    name: T['name'];
    props: ComputedRef<ExtractProps<T['props']>>;
    emits: T['emits'];
    slots: T['slots'];
    style: T['style'];
}
export type ExtractProps<T> = ExtractPropTypes<Omit<{
    [K in keyof T]: T[K] extends {
        _preset: true;
    } ? Omit<T[K], 'required' | 'default'> & {
        required: true;
    } : Omit<T[K], 'required' | 'default'> & {
        required: false;
    };
}, '_preset'>>;
interface DocumentationLabels {
    since?: string;
    deprecated?: true;
    nuxt?: true;
}
type NestedPropDocumentation<T extends Prop> = {
    id: string;
    name: string;
    description: string;
    literal?: 'string' | 'number' | 'boolean';
    props: Required<InferPropType<T['type']> extends Array<string | number> ? {
        [K in InferPropType<T['type']>[number]]: DocumentationLabels & {
            description: string;
        };
    } : InferPropType<T['type']> extends Array<any> ? {
        [K in keyof Exclude<InferPropType<T['type']>[number], boolean | string | number | false | true | null>]: DocumentationLabels & {
            type: string[];
            description: string;
        } & (K extends RequiredKeys<InferPropType<T['type']>[number]> ? {
            required: true;
        } : {});
    } : {
        [K in keyof Exclude<InferPropType<T['type']>, boolean | string | number | false | true | null>]: DocumentationLabels & {
            type: string[];
            description: string;
        } & (K extends RequiredKeys<Exclude<InferPropType<T['type']>, boolean | string | number | false | true | null>> ? {
            required: true;
        } : {});
    }>;
};
export type PropDocumentation<T extends Prop> = {
    type: string[];
    description: string;
} & (T['required'] extends true ? {
    required: true;
} : {}) & DocumentationLabels & (T['_verbose'] extends true ? {
    nested: NestedPropDocumentation<T>;
} : T['_verbose'] extends false ? {} : T['type'] extends PropType<Array<any>> | PropType<Record<any, any>> ? {
    nested: NestedPropDocumentation<T>;
} : {}) & (T['_preset'] extends true ? {
    default: InferPropType<T['type']>;
} : {});
interface SlotDocumentation<T extends Slot> extends DocumentationLabels {
    description: string;
    properties: {
        [K in keyof T['properties']]: {
            type: string[];
            description: string;
        };
    };
}
interface EmitDocumentation extends DocumentationLabels {
    description: string;
    properties: {
        [key: string]: {
            type: string[];
            description: string;
        };
    };
}
export interface Documentation<T extends ComponentConfiguration> {
    props: {
        [K in keyof T['props']]: PropDocumentation<T['props'][K]>;
    };
    slots: {
        [K in keyof T['slots']]: SlotDocumentation<T['slots'][K]>;
    };
    emits: {
        [K in keyof T['emits']]: EmitDocumentation;
    };
    style: T['style'];
}
export type ComposableDocumentation<T extends ComposableConfiguration> = {
    props: {
        [K in keyof T['props']]: Omit<PropDocumentation<T['props'][K]>, 'default'>;
    };
    slots: {
        [K in keyof T['slots']]: SlotDocumentation<T['slots'][K]>;
    };
    emits: {
        [K in keyof T['emits']]: EmitDocumentation;
    };
};
export {};
