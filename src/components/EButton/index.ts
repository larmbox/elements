import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';
import type { Props as EButtonProps } from './EButton';

export interface EButtonOptions {}

export type EButtonComponent = Component<
  ComponentName.EButton,
  EButtonOptions,
  EButtonProps
>;

export { default } from './EButton.vue';
