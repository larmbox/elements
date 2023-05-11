import { ComponentName } from '../../common/enums';
import { Component } from '../../common/types';
import type { Props as EModalProps } from './EModal';
export interface EModalOptions {
    closeIcon: string;
}
export type EModalComponent = Component<ComponentName.EModal, EModalOptions, EModalProps>;
export { default } from './EModal.vue';
