import { ComputedRef, Ref } from 'vue';
import { EButtonComponent, ECheckboxComponent, EIconComponent, EInputComponent, ELoadingComponent, EModalComponent, ERadioComponent, ESelectComponent, ESwitchComponent, ETextareaComponent, EThemeProviderComponent, ETooltipComponent } from '../components';
import { EFormControlComponent } from './components/EFormControl';
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export type GenericProps = Record<string, any>;
export type GenericComponent = Component<keyof Components, unknown, GenericProps>;
export interface Component<TName extends keyof Components, TOptions, TProps extends Record<string, unknown>> {
    name: TName;
    options: TOptions;
    props: TProps;
}
export interface Components<IsCustomizeable extends boolean = false> {
    EButton: ComponentMap<EButtonComponent, IsCustomizeable>;
    ECheckbox: ComponentMap<ECheckboxComponent, IsCustomizeable>;
    EIcon: ComponentMap<EIconComponent, IsCustomizeable>;
    EInput: ComponentMap<EInputComponent, IsCustomizeable>;
    ELoading: ComponentMap<ELoadingComponent, IsCustomizeable>;
    EModal: ComponentMap<EModalComponent, IsCustomizeable>;
    ERadio: ComponentMap<ERadioComponent, IsCustomizeable>;
    ESelect: ComponentMap<ESelectComponent, IsCustomizeable>;
    ESwitch: ComponentMap<ESwitchComponent, IsCustomizeable>;
    ETextarea: ComponentMap<ETextareaComponent, IsCustomizeable>;
    EThemeProvider: ComponentMap<EThemeProviderComponent, IsCustomizeable>;
    ETooltip: ComponentMap<ETooltipComponent, IsCustomizeable>;
    EFormControl: ComponentMap<EFormControlComponent, IsCustomizeable>;
}
type ComponentMap<T extends GenericComponent, TBool extends boolean> = TBool extends true ? Omit<Partial<T>, 'name'> & {
    name: string;
} : T;
export type BindOptions<T> = {
    include: T[];
    exclude?: never;
} | {
    include?: never;
    exclude: T[];
};
export interface ComponentInstance<T extends GenericComponent> {
    id: ComputedRef<string>;
    props: Ref<T['props']>;
    name: T['name'];
    options: T['options'];
    bindProps: (options?: BindOptions<keyof T['props']>) => GenericProps;
    bindAttrs: (options?: BindOptions<string>) => GenericProps;
}
export interface ComponentDocs<T extends GenericComponent> {
    name: string;
    description: string;
    props: {
        name: keyof T['props'];
        type: string;
        default?: unknown;
        description: string;
        since?: string;
        deprecated?: true;
        nuxt?: true;
        gc?: true;
    }[];
    slots: {
        name: string;
        description: string;
        properties?: {
            name: string;
            type: string;
            description?: string;
        }[];
        since?: string;
        deprecated?: true;
        nuxt?: true;
    }[];
    events: {
        name: string;
        description: string;
        arguments?: {
            name: string;
            type: string;
            description?: string;
        }[];
        since?: string;
        deprecated?: true;
    }[];
}
export {};
