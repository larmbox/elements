import { ComponentName } from '../../common/enums';
import { Component } from '../../common/types';
import type { Props as ETextareaProps } from './ETextarea';
export interface ETextareaOptions {
}
export type ETextareaComponent = Component<ComponentName.ETextarea, ETextareaOptions, ETextareaProps>;
export { default } from './ETextarea.vue';
