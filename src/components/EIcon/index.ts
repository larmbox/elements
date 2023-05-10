import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';
import type { Props as EIconProps } from './EIcon';

export interface EIconOptions {}

export type EIconComponent = Component<
  ComponentName.EIcon,
  EIconOptions,
  EIconProps
>;

export { default } from './EIcon.vue';
