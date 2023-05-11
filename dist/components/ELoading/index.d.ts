import { ComponentName } from '../../common/enums';
import { Component } from '../../common/types';
import type { Props as ELoadingProps } from './ELoading';
export interface ELoadingOptions {
}
export type ELoadingComponent = Component<ComponentName.ELoading, ELoadingOptions, ELoadingProps>;
export { default } from './ELoading.vue';
