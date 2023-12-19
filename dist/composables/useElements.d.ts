import { CreateOptions } from '../create-elements';
export declare function _useElements(options?: CreateOptions, teardown?: boolean): {
    config: import("vue").Ref<{
        theme: string;
        prefix: string;
        components: {
            EButton: {
                name: import("..").Component.EButton;
                props: {
                    readonly variant: string;
                    readonly tag: keyof HTMLElementTagNameMap;
                    readonly replace?: boolean | undefined;
                    readonly type?: "button" | "reset" | "submit" | undefined;
                    readonly exact?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly loading?: boolean | undefined;
                    readonly rel?: string | undefined;
                    readonly target?: string | undefined;
                    readonly append?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly icon?: string | undefined;
                    readonly href?: string | undefined;
                    readonly to?: string | Record<string, unknown> | undefined;
                    readonly iconLeft?: string | undefined;
                    readonly iconRight?: string | undefined;
                    readonly activeClass?: string | undefined;
                    readonly exactActiveClass?: string | undefined;
                    readonly prefetch?: boolean | undefined;
                    readonly noPrefetch?: boolean | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'font-weight'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                } | undefined;
            };
            ECheckbox: {
                name: import("..").Component.ECheckbox;
                props: {
                    readonly variant: string;
                    readonly iconIndeterminate: string;
                    readonly iconChecked: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: import("../common/types").Booleanish | undefined;
                    readonly label?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly checked?: boolean | undefined;
                    readonly indeterminate?: boolean | undefined;
                    readonly modelValue?: import("../common/types").Booleanish | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: {
                    readonly size?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            EIcon: {
                name: import("..").Component.EIcon;
                props: {
                    readonly type: "inline" | "svg" | "class" | "sprite";
                    readonly height: string;
                    readonly width: string;
                    readonly prefix: string;
                    readonly tag: keyof HTMLElementTagNameMap;
                    readonly id?: string | undefined;
                    readonly className?: string | undefined;
                    readonly icon?: string | undefined;
                    readonly sprite?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EInput: {
                name: import("..").Component.EInput;
                props: {
                    readonly variant: string;
                    readonly max?: string | number | undefined;
                    readonly required?: boolean | undefined;
                    readonly type?: string | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly min?: string | number | undefined;
                    readonly value?: string | number | boolean | null | undefined;
                    readonly label?: string | undefined;
                    readonly autocomplete?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly readonly?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly step?: string | number | undefined;
                    readonly placeholder?: string | undefined;
                    readonly modelValue?: string | number | boolean | null | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly hint?: string | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'text-color--disabled'?: string | undefined;
                    readonly 'placeholder-color'?: string | undefined;
                    readonly 'placeholder-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ELoading: {
                name: import("..").Component.ELoading;
                props: {
                    readonly role: string;
                    readonly id?: string | undefined;
                    readonly label?: string | undefined;
                };
                style?: {
                    readonly 'border-width'?: string | undefined;
                    readonly 'animation-time'?: string | undefined;
                } | undefined;
            };
            EModal: {
                name: import("..").Component.EModal;
                props: {
                    readonly transitionDuration: number;
                    readonly size: string;
                    readonly closeable: ("outside" | "escape" | "route")[];
                    readonly closeButton: false | {
                        title?: string | undefined;
                        ariaLabel?: string | undefined;
                        icon: string;
                    };
                    readonly id?: string | undefined;
                    readonly title?: string | undefined;
                    readonly description?: string | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly rejectCloseClass?: string | null | undefined;
                };
                style?: {
                    readonly 'border-radius'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'body-color'?: string | undefined;
                    readonly size?: string | undefined;
                    readonly 'size-sm'?: string | undefined;
                    readonly 'size-lg'?: string | undefined;
                    readonly 'z-index'?: number | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'reject-close'?: string | undefined;
                    readonly 'transition-time'?: string | undefined;
                    readonly 'title-font-size'?: string | undefined;
                    readonly 'description-text-color'?: string | undefined;
                    readonly 'description-font-size'?: string | undefined;
                } | undefined;
            };
            ERadio: {
                name: import("..").Component.ERadio;
                props: {
                    readonly variant: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: import("../common/types").Booleanish | undefined;
                    readonly label?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly checked?: boolean | undefined;
                    readonly modelValue?: import("../common/types").Booleanish | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: {
                    readonly size?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ESelect: {
                name: import("..").Component.ESelect;
                props: {
                    readonly variant: string;
                    readonly options: {
                        label?: string | undefined;
                        value: string | number | boolean | null;
                        disabled?: boolean | undefined;
                    }[];
                    readonly icon: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: string | number | boolean | null | undefined;
                    readonly label?: string | undefined;
                    readonly autocomplete?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly modelValue?: string | number | boolean | null | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly hint?: string | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'text-color--disabled'?: string | undefined;
                    readonly 'placeholder-color'?: string | undefined;
                    readonly 'placeholder-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ESwitch: {
                name: import("..").Component.ESwitch;
                props: {
                    readonly variant: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: import("../common/types").Booleanish | undefined;
                    readonly label?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly checked?: boolean | undefined;
                    readonly iconChecked?: string | undefined;
                    readonly modelValue?: import("../common/types").Booleanish | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly iconUnchecked?: string | undefined;
                };
                style?: {
                    readonly size?: string | undefined;
                    readonly 'toggle-background-color'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ETextarea: {
                name: import("..").Component.ETextarea;
                props: {
                    readonly variant: string;
                    readonly resize: "both" | "none" | "horizontal" | "vertical";
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: string | number | undefined;
                    readonly label?: string | undefined;
                    readonly autocomplete?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly readonly?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly placeholder?: string | undefined;
                    readonly cols?: number | undefined;
                    readonly modelValue?: string | number | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly hint?: string | undefined;
                    readonly rows?: number | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'text-color--disabled'?: string | undefined;
                    readonly 'placeholder-color'?: string | undefined;
                    readonly 'placeholder-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            EThemeProvider: {
                name: import("..").Component.EThemeProvider;
                props: {
                    readonly id?: string | undefined;
                    readonly global?: boolean | undefined;
                    readonly theme?: {
                        name: string;
                        variables: Record<string, string>;
                    } | undefined;
                    readonly destroyDelay?: number | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            ETooltip: {
                name: import("..").Component.ETooltip;
                props: {
                    readonly offset: number;
                    readonly padding: number | {
                        left?: number | undefined;
                        top?: number | undefined;
                        bottom?: number | undefined;
                        right?: number | undefined;
                    };
                    readonly flip: boolean;
                    readonly placement: import("@floating-ui/utils").Placement;
                    readonly delay: number | {
                        show: number;
                        hide: number;
                    };
                    readonly triggers: ("focus" | "hover")[];
                    readonly arrow: false | {
                        size: number;
                    };
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly binding?: any;
                };
                style?: {
                    readonly 'max-width'?: string | undefined;
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'box-shadow'?: string | undefined;
                    readonly 'z-index'?: number | undefined;
                } | undefined;
            };
            EFormLabel: {
                name: import("..").Component.EFormLabel;
                props: {
                    readonly required?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly for?: string | undefined;
                    readonly useSlot?: boolean | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormInput: {
                name: import("..").Component.EFormInput;
                props: {
                    readonly feedback?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormInputField: {
                name: import("..").Component.EFormInputField;
                props: {
                    readonly feedback?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormDescription: {
                name: import("..").Component.EFormDescription;
                props: {
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly useSlot?: boolean | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormHint: {
                name: import("..").Component.EFormHint;
                props: {
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormFeedback: {
                name: import("..").Component.EFormFeedback;
                props: {
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
        };
    }>;
    uuid: () => string;
    modal: {
        close: (id?: string | undefined, keep?: boolean) => void;
        closeAll: () => void;
        stack: import("vue").Ref<{
            id: string;
            data: unknown;
            idle: boolean;
        }[]>;
        open: (id: string, data?: unknown, restore?: boolean) => void;
    };
    theming: {
        theme: import("vue").Ref<string>;
        providers: import("vue").Ref<{
            id: string;
            content: string;
        }[]>;
        components: import("vue").Ref<Record<string, Record<string, string | number>>>;
        destroy: (id?: string) => void;
        render: (id?: string, override?: string | undefined) => void;
        registerComponentStyle: (name: string, variables: Record<string, string | number>) => void;
        registerTheme: ({ name, variables }: import("./useTheme").Theme) => void;
        setTheme: (name: string) => void;
    };
};
export declare function useElements(): {
    config: import("vue").Ref<{
        theme: string;
        prefix: string;
        components: {
            EButton: {
                name: import("..").Component.EButton;
                props: {
                    readonly variant: string;
                    readonly tag: keyof HTMLElementTagNameMap;
                    readonly replace?: boolean | undefined;
                    readonly type?: "button" | "reset" | "submit" | undefined;
                    readonly exact?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly loading?: boolean | undefined;
                    readonly rel?: string | undefined;
                    readonly target?: string | undefined;
                    readonly append?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly icon?: string | undefined;
                    readonly href?: string | undefined;
                    readonly to?: string | Record<string, unknown> | undefined;
                    readonly iconLeft?: string | undefined;
                    readonly iconRight?: string | undefined;
                    readonly activeClass?: string | undefined;
                    readonly exactActiveClass?: string | undefined;
                    readonly prefetch?: boolean | undefined;
                    readonly noPrefetch?: boolean | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'font-weight'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                } | undefined;
            };
            ECheckbox: {
                name: import("..").Component.ECheckbox;
                props: {
                    readonly variant: string;
                    readonly iconIndeterminate: string;
                    readonly iconChecked: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: import("../common/types").Booleanish | undefined;
                    readonly label?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly checked?: boolean | undefined;
                    readonly indeterminate?: boolean | undefined;
                    readonly modelValue?: import("../common/types").Booleanish | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: {
                    readonly size?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            EIcon: {
                name: import("..").Component.EIcon;
                props: {
                    readonly type: "inline" | "svg" | "class" | "sprite";
                    readonly height: string;
                    readonly width: string;
                    readonly prefix: string;
                    readonly tag: keyof HTMLElementTagNameMap;
                    readonly id?: string | undefined;
                    readonly className?: string | undefined;
                    readonly icon?: string | undefined;
                    readonly sprite?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EInput: {
                name: import("..").Component.EInput;
                props: {
                    readonly variant: string;
                    readonly max?: string | number | undefined;
                    readonly required?: boolean | undefined;
                    readonly type?: string | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly min?: string | number | undefined;
                    readonly value?: string | number | boolean | null | undefined;
                    readonly label?: string | undefined;
                    readonly autocomplete?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly readonly?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly step?: string | number | undefined;
                    readonly placeholder?: string | undefined;
                    readonly modelValue?: string | number | boolean | null | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly hint?: string | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'text-color--disabled'?: string | undefined;
                    readonly 'placeholder-color'?: string | undefined;
                    readonly 'placeholder-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ELoading: {
                name: import("..").Component.ELoading;
                props: {
                    readonly role: string;
                    readonly id?: string | undefined;
                    readonly label?: string | undefined;
                };
                style?: {
                    readonly 'border-width'?: string | undefined;
                    readonly 'animation-time'?: string | undefined;
                } | undefined;
            };
            EModal: {
                name: import("..").Component.EModal;
                props: {
                    readonly transitionDuration: number;
                    readonly size: string;
                    readonly closeable: ("outside" | "escape" | "route")[];
                    readonly closeButton: false | {
                        title?: string | undefined;
                        ariaLabel?: string | undefined;
                        icon: string;
                    };
                    readonly id?: string | undefined;
                    readonly title?: string | undefined;
                    readonly description?: string | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly rejectCloseClass?: string | null | undefined;
                };
                style?: {
                    readonly 'border-radius'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'body-color'?: string | undefined;
                    readonly size?: string | undefined;
                    readonly 'size-sm'?: string | undefined;
                    readonly 'size-lg'?: string | undefined;
                    readonly 'z-index'?: number | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'reject-close'?: string | undefined;
                    readonly 'transition-time'?: string | undefined;
                    readonly 'title-font-size'?: string | undefined;
                    readonly 'description-text-color'?: string | undefined;
                    readonly 'description-font-size'?: string | undefined;
                } | undefined;
            };
            ERadio: {
                name: import("..").Component.ERadio;
                props: {
                    readonly variant: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: import("../common/types").Booleanish | undefined;
                    readonly label?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly checked?: boolean | undefined;
                    readonly modelValue?: import("../common/types").Booleanish | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: {
                    readonly size?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ESelect: {
                name: import("..").Component.ESelect;
                props: {
                    readonly variant: string;
                    readonly options: {
                        label?: string | undefined;
                        value: string | number | boolean | null;
                        disabled?: boolean | undefined;
                    }[];
                    readonly icon: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: string | number | boolean | null | undefined;
                    readonly label?: string | undefined;
                    readonly autocomplete?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly modelValue?: string | number | boolean | null | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly hint?: string | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'text-color--disabled'?: string | undefined;
                    readonly 'placeholder-color'?: string | undefined;
                    readonly 'placeholder-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ESwitch: {
                name: import("..").Component.ESwitch;
                props: {
                    readonly variant: string;
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: import("../common/types").Booleanish | undefined;
                    readonly label?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly checked?: boolean | undefined;
                    readonly iconChecked?: string | undefined;
                    readonly modelValue?: import("../common/types").Booleanish | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly iconUnchecked?: string | undefined;
                };
                style?: {
                    readonly size?: string | undefined;
                    readonly 'toggle-background-color'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            ETextarea: {
                name: import("..").Component.ETextarea;
                props: {
                    readonly variant: string;
                    readonly resize: "both" | "none" | "horizontal" | "vertical";
                    readonly required?: boolean | undefined;
                    readonly block?: boolean | undefined;
                    readonly feedback?: string | undefined;
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly value?: string | number | undefined;
                    readonly label?: string | undefined;
                    readonly autocomplete?: string | undefined;
                    readonly ariaInvalid?: boolean | undefined;
                    readonly ariaRequired?: boolean | undefined;
                    readonly autofocus?: boolean | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly readonly?: boolean | undefined;
                    readonly description?: string | undefined;
                    readonly placeholder?: string | undefined;
                    readonly cols?: number | undefined;
                    readonly modelValue?: string | number | undefined;
                    readonly ariaLabelledby?: string | undefined;
                    readonly ariaDescribedby?: string | undefined;
                    readonly ariaErrormessage?: string | undefined;
                    readonly highlight?: boolean | undefined;
                    readonly hint?: string | undefined;
                    readonly rows?: number | undefined;
                };
                style?: {
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'line-height'?: string | undefined;
                    readonly 'focus-shadow-size'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'border-width'?: string | undefined;
                    readonly 'border-color'?: string | undefined;
                    readonly 'border-color--disabled'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'text-color--disabled'?: string | undefined;
                    readonly 'placeholder-color'?: string | undefined;
                    readonly 'placeholder-color--disabled'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'background-color--disabled'?: string | undefined;
                } | undefined;
            };
            EThemeProvider: {
                name: import("..").Component.EThemeProvider;
                props: {
                    readonly id?: string | undefined;
                    readonly global?: boolean | undefined;
                    readonly theme?: {
                        name: string;
                        variables: Record<string, string>;
                    } | undefined;
                    readonly destroyDelay?: number | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            ETooltip: {
                name: import("..").Component.ETooltip;
                props: {
                    readonly offset: number;
                    readonly padding: number | {
                        left?: number | undefined;
                        top?: number | undefined;
                        bottom?: number | undefined;
                        right?: number | undefined;
                    };
                    readonly flip: boolean;
                    readonly placement: import("@floating-ui/utils").Placement;
                    readonly delay: number | {
                        show: number;
                        hide: number;
                    };
                    readonly triggers: ("focus" | "hover")[];
                    readonly arrow: false | {
                        size: number;
                    };
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly disabled?: boolean | undefined;
                    readonly binding?: any;
                };
                style?: {
                    readonly 'max-width'?: string | undefined;
                    readonly 'padding-x'?: string | undefined;
                    readonly 'padding-y'?: string | undefined;
                    readonly 'border-radius'?: string | undefined;
                    readonly 'font-size'?: string | undefined;
                    readonly 'text-color'?: string | undefined;
                    readonly 'background-color'?: string | undefined;
                    readonly 'box-shadow'?: string | undefined;
                    readonly 'z-index'?: number | undefined;
                } | undefined;
            };
            EFormLabel: {
                name: import("..").Component.EFormLabel;
                props: {
                    readonly required?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly for?: string | undefined;
                    readonly useSlot?: boolean | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormInput: {
                name: import("..").Component.EFormInput;
                props: {
                    readonly feedback?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormInputField: {
                name: import("..").Component.EFormInputField;
                props: {
                    readonly feedback?: boolean | undefined;
                    readonly id?: string | undefined;
                    readonly highlight?: boolean | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormDescription: {
                name: import("..").Component.EFormDescription;
                props: {
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly useSlot?: boolean | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormHint: {
                name: import("..").Component.EFormHint;
                props: {
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
            EFormFeedback: {
                name: import("..").Component.EFormFeedback;
                props: {
                    readonly id?: string | undefined;
                    readonly text?: string | undefined;
                    readonly aria?: string | undefined;
                };
                style?: Partial<{}> | undefined;
            };
        };
    }>;
    uuid: () => string;
    modal: {
        open: (id: string, data?: unknown, restore?: boolean) => void;
        close: (id?: string | undefined, keep?: boolean) => void;
        closeAll: () => void;
    };
    theming: {
        theme: import("vue").Ref<string>;
        setTheme: (name: string) => void;
        registerTheme: ({ name, variables }: import("./useTheme").Theme) => void;
        providers: import("vue").Ref<{
            id: string;
            content: string;
        }[]>;
    };
};
