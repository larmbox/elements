import { CreateOptions } from '../../create-elements';
export declare function _useElements(options?: CreateOptions, teardown?: boolean): {
    config: import("vue").Ref<{
        theme: string;
        prefix: string;
        components: {
            EButton: {
                name: import("../..").Component.EButton;
                options: import("../../components/EButton").EButtonOptions;
                props: {
                    replace?: boolean | undefined;
                    type?: string | undefined;
                    exact?: boolean | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    outline?: boolean | undefined;
                    loading?: boolean | undefined;
                    target?: string | undefined;
                    append?: boolean | undefined;
                    disabled?: boolean | undefined;
                    icon?: string | undefined;
                    href?: string | undefined;
                    rel?: string | undefined;
                    to?: string | Record<string, any> | undefined;
                    iconLeft?: string | undefined;
                    iconRight?: string | undefined;
                    activeClass?: string | undefined;
                    exactActiveClass?: string | undefined;
                    prefetch?: boolean | undefined;
                    noPrefetch?: boolean | undefined;
                    size: string;
                    tag: string;
                    variant: string;
                };
            };
            ECheckbox: {
                name: import("../..").Component.ECheckbox;
                options: {
                    iconChecked: string;
                    iconIndeterminate: string;
                };
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | boolean | undefined;
                    label?: string | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    description?: string | undefined;
                    checked?: boolean | undefined;
                    indeterminate?: boolean | undefined;
                    modelValue?: string | number | boolean | undefined;
                    highlight?: boolean | undefined;
                    size: string;
                    variant: string;
                    feedbackType: string;
                };
            };
            EIcon: {
                name: import("../..").Component.EIcon;
                options: import("../../components/EIcon").EIconOptions;
                props: {
                    type?: string | undefined;
                    id?: string | undefined;
                    i?: string | undefined;
                    className?: string | undefined;
                    prefix?: string | undefined;
                    tag?: string | undefined;
                    icon?: string | undefined;
                };
            };
            EInput: {
                name: import("../..").Component.EInput;
                options: import("../../components/EInput").EInputOptions;
                props: {
                    max?: number | undefined;
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | undefined;
                    label?: string | undefined;
                    autocomplete?: boolean | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    readonly?: boolean | undefined;
                    description?: string | undefined;
                    step?: number | undefined;
                    placeholder?: string | undefined;
                    min?: number | undefined;
                    modelValue?: string | number | undefined;
                    highlight?: boolean | undefined;
                    hint?: string | undefined;
                    type: string;
                    size: string;
                    variant: string;
                    feedbackType: string;
                };
            };
            ELoading: {
                name: import("../..").Component.ELoading;
                options: import("../../components/ELoading").ELoadingOptions;
                props: {
                    id?: string | undefined;
                    loading?: boolean | undefined;
                    label?: string | undefined;
                    role?: string | undefined;
                    size: string;
                    mode: string;
                    variant: string;
                };
            };
            EModal: {
                name: import("../..").Component.EModal;
                options: {
                    closeIcon: string;
                };
                props: {
                    id?: string | undefined;
                    title?: string | undefined;
                    size: string;
                    description?: string | undefined;
                    closeOnBackdrop?: boolean | undefined;
                    closeable?: boolean | undefined;
                    closeOnRouteChange?: boolean | undefined;
                };
            };
            ERadio: {
                name: import("../..").Component.ERadio;
                options: import("../../components/ERadio").ERadioOptions;
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | boolean | undefined;
                    label?: string | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    description?: string | undefined;
                    checked?: boolean | undefined;
                    feedbackType: string;
                    modelValue?: string | number | boolean | undefined;
                    highlight?: boolean | undefined;
                    size: string;
                    variant: string;
                };
            };
            ESelect: {
                name: import("../..").Component.ESelect;
                options: {
                    icon: string;
                };
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | undefined;
                    label?: string | undefined;
                    autocomplete?: boolean | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    readonly?: boolean | undefined;
                    description?: string | undefined;
                    placeholder?: string | undefined;
                    feedbackType: string;
                    modelValue?: string | number | undefined;
                    highlight?: boolean | undefined;
                    hint?: string | undefined;
                    options: {
                        label: string;
                        value: unknown;
                    }[];
                    size: string;
                    variant: string;
                };
            };
            ESwitch: {
                name: import("../..").Component.ESwitch;
                options: {
                    uncheckedIcon: string;
                    checkedIcon: string;
                };
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | boolean | undefined;
                    label?: string | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    description?: string | undefined;
                    checked?: boolean | undefined;
                    feedbackType: string;
                    modelValue?: string | number | boolean | undefined;
                    highlight?: boolean | undefined;
                    size: string;
                    variant: string;
                };
            };
            ETextarea: {
                name: import("../..").Component.ETextarea;
                options: import("../../components/ETextarea").ETextareaOptions;
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | undefined;
                    label?: string | undefined;
                    autocomplete?: boolean | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    size: string;
                    readonly?: boolean | undefined;
                    description?: string | undefined;
                    placeholder?: string | undefined;
                    cols?: number | undefined;
                    variant: string;
                    feedbackType: string;
                    modelValue?: string | number | undefined;
                    highlight?: boolean | undefined;
                    hint?: string | undefined;
                    rows?: number | undefined;
                    resize?: "both" | "none" | "horizontal" | "vertical" | undefined;
                };
            };
            EThemeProvider: {
                name: import("../..").Component.EThemeProvider;
                options: import("../../components/EThemeProvider").EThemeProviderOptions;
                props: {
                    global?: boolean | undefined;
                    theme?: {
                        name: string;
                        variables: Record<string, string>;
                    } | undefined;
                    destroyDelay?: number | undefined;
                };
            };
            ETooltip: {
                name: import("../..").Component.ETooltip;
                options: import("../../components/ETooltip").ETooltipOptions;
                props: {
                    interactive?: boolean | undefined;
                    offset?: [number, number] | undefined;
                    id?: string | undefined;
                    disabled?: boolean | undefined;
                    placement?: import("@popperjs/core").Placement | undefined;
                    delay?: number | undefined;
                    trigger?: "click" | "hover" | undefined;
                    arrow?: {
                        padding: number;
                    } | undefined;
                    disableTouch?: boolean | undefined;
                    variant: string;
                };
            };
            EFormControl: {
                name: import("../..").Component.EFormControl;
                options: import("../../common/components/EFormControl").EFormControlOptions;
                props: import("vue").ExtractPropTypes<Record<never, never>>;
            };
        };
    }>;
    uuid: () => string;
    modal: {
        close: (id?: string | undefined, keep?: boolean) => void;
        closeAll: () => void;
        open: (id: string, data?: any, restore?: boolean) => void;
    };
    theming: {
        theme: import("vue").Ref<string>;
        providers: import("vue").Ref<{
            id: string;
            content: string;
        }[]>;
        createPalette: typeof import("../../common/utility/palette").createPalette;
        destroy: (id?: string) => void;
        registerComponentStyle: (name: string, variables: Record<string, string | number>) => void;
        registerTheme: ({ name, variables }: import("../component/use-theme").Theme) => void;
        setTheme: (name: string) => void;
    };
};
export declare function useElements(): {
    config: import("vue").Ref<{
        theme: string;
        prefix: string;
        components: {
            EButton: {
                name: import("../..").Component.EButton;
                options: import("../../components/EButton").EButtonOptions;
                props: {
                    replace?: boolean | undefined;
                    type?: string | undefined;
                    exact?: boolean | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    outline?: boolean | undefined;
                    loading?: boolean | undefined;
                    target?: string | undefined;
                    append?: boolean | undefined;
                    disabled?: boolean | undefined;
                    icon?: string | undefined;
                    href?: string | undefined;
                    rel?: string | undefined;
                    to?: string | Record<string, any> | undefined;
                    iconLeft?: string | undefined;
                    iconRight?: string | undefined;
                    activeClass?: string | undefined;
                    exactActiveClass?: string | undefined;
                    prefetch?: boolean | undefined;
                    noPrefetch?: boolean | undefined;
                    size: string;
                    tag: string;
                    variant: string;
                };
            };
            ECheckbox: {
                name: import("../..").Component.ECheckbox;
                options: {
                    iconChecked: string;
                    iconIndeterminate: string;
                };
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | boolean | undefined;
                    label?: string | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    description?: string | undefined;
                    checked?: boolean | undefined;
                    indeterminate?: boolean | undefined;
                    modelValue?: string | number | boolean | undefined;
                    highlight?: boolean | undefined;
                    size: string;
                    variant: string;
                    feedbackType: string;
                };
            };
            EIcon: {
                name: import("../..").Component.EIcon;
                options: import("../../components/EIcon").EIconOptions;
                props: {
                    type?: string | undefined;
                    id?: string | undefined;
                    i?: string | undefined;
                    className?: string | undefined;
                    prefix?: string | undefined;
                    tag?: string | undefined;
                    icon?: string | undefined;
                };
            };
            EInput: {
                name: import("../..").Component.EInput;
                options: import("../../components/EInput").EInputOptions;
                props: {
                    max?: number | undefined;
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | undefined;
                    label?: string | undefined;
                    autocomplete?: boolean | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    readonly?: boolean | undefined;
                    description?: string | undefined;
                    step?: number | undefined;
                    placeholder?: string | undefined;
                    min?: number | undefined;
                    modelValue?: string | number | undefined;
                    highlight?: boolean | undefined;
                    hint?: string | undefined;
                    type: string;
                    size: string;
                    variant: string;
                    feedbackType: string;
                };
            };
            ELoading: {
                name: import("../..").Component.ELoading;
                options: import("../../components/ELoading").ELoadingOptions;
                props: {
                    id?: string | undefined;
                    loading?: boolean | undefined;
                    label?: string | undefined;
                    role?: string | undefined;
                    size: string;
                    mode: string;
                    variant: string;
                };
            };
            EModal: {
                name: import("../..").Component.EModal;
                options: {
                    closeIcon: string;
                };
                props: {
                    id?: string | undefined;
                    title?: string | undefined;
                    size: string;
                    description?: string | undefined;
                    closeOnBackdrop?: boolean | undefined;
                    closeable?: boolean | undefined;
                    closeOnRouteChange?: boolean | undefined;
                };
            };
            ERadio: {
                name: import("../..").Component.ERadio;
                options: import("../../components/ERadio").ERadioOptions;
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | boolean | undefined;
                    label?: string | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    description?: string | undefined;
                    checked?: boolean | undefined;
                    feedbackType: string;
                    modelValue?: string | number | boolean | undefined;
                    highlight?: boolean | undefined;
                    size: string;
                    variant: string;
                };
            };
            ESelect: {
                name: import("../..").Component.ESelect;
                options: {
                    icon: string;
                };
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | undefined;
                    label?: string | undefined;
                    autocomplete?: boolean | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    readonly?: boolean | undefined;
                    description?: string | undefined;
                    placeholder?: string | undefined;
                    feedbackType: string;
                    modelValue?: string | number | undefined;
                    highlight?: boolean | undefined;
                    hint?: string | undefined;
                    options: {
                        label: string;
                        value: unknown;
                    }[];
                    size: string;
                    variant: string;
                };
            };
            ESwitch: {
                name: import("../..").Component.ESwitch;
                options: {
                    uncheckedIcon: string;
                    checkedIcon: string;
                };
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | boolean | undefined;
                    label?: string | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    description?: string | undefined;
                    checked?: boolean | undefined;
                    feedbackType: string;
                    modelValue?: string | number | boolean | undefined;
                    highlight?: boolean | undefined;
                    size: string;
                    variant: string;
                };
            };
            ETextarea: {
                name: import("../..").Component.ETextarea;
                options: import("../../components/ETextarea").ETextareaOptions;
                props: {
                    feedback?: string | undefined;
                    id?: string | undefined;
                    block?: boolean | undefined;
                    name?: string | undefined;
                    value?: string | number | undefined;
                    label?: string | undefined;
                    autocomplete?: boolean | undefined;
                    autofocus?: boolean | undefined;
                    disabled?: boolean | undefined;
                    size: string;
                    readonly?: boolean | undefined;
                    description?: string | undefined;
                    placeholder?: string | undefined;
                    cols?: number | undefined;
                    variant: string;
                    feedbackType: string;
                    modelValue?: string | number | undefined;
                    highlight?: boolean | undefined;
                    hint?: string | undefined;
                    rows?: number | undefined;
                    resize?: "both" | "none" | "horizontal" | "vertical" | undefined;
                };
            };
            EThemeProvider: {
                name: import("../..").Component.EThemeProvider;
                options: import("../../components/EThemeProvider").EThemeProviderOptions;
                props: {
                    global?: boolean | undefined;
                    theme?: {
                        name: string;
                        variables: Record<string, string>;
                    } | undefined;
                    destroyDelay?: number | undefined;
                };
            };
            ETooltip: {
                name: import("../..").Component.ETooltip;
                options: import("../../components/ETooltip").ETooltipOptions;
                props: {
                    interactive?: boolean | undefined;
                    offset?: [number, number] | undefined;
                    id?: string | undefined;
                    disabled?: boolean | undefined;
                    placement?: import("@popperjs/core").Placement | undefined;
                    delay?: number | undefined;
                    trigger?: "click" | "hover" | undefined;
                    arrow?: {
                        padding: number;
                    } | undefined;
                    disableTouch?: boolean | undefined;
                    variant: string;
                };
            };
            EFormControl: {
                name: import("../..").Component.EFormControl;
                options: import("../../common/components/EFormControl").EFormControlOptions;
                props: import("vue").ExtractPropTypes<Record<never, never>>;
            };
        };
    }>;
    uuid: () => string;
    theming: {
        theme: import("vue").Ref<string>;
        setTheme: (name: string) => void;
        registerTheme: ({ name, variables }: import("../component/use-theme").Theme) => void;
        createPalette: typeof import("../../common/utility/palette").createPalette;
    };
    modal: {
        open: (id: string, data?: any, restore?: boolean) => void;
        close: (id?: string | undefined, keep?: boolean) => void;
        closeAll: () => void;
    };
};
