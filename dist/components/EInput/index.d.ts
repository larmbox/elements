import { ComponentName } from '../../common/enums';
import { Component } from '../../common/types';
import type { Props as InputProps } from './EInput';
export interface EInputOptions {
}
export type EInputComponent = Component<ComponentName.EInput, EInputOptions, InputProps>;
export { default } from './EInput.vue';
