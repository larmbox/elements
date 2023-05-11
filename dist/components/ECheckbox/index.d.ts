import { ComponentName } from '../../common/enums';
import { Component } from '../../common/types';
import type { Props as ECheckboxProps } from './ECheckbox';
export interface ECheckboxOptions {
    iconChecked: string;
    iconIndeterminate: string;
}
export type ECheckboxComponent = Component<ComponentName.ECheckbox, ECheckboxOptions, ECheckboxProps>;
export { default } from './ECheckbox.vue';
