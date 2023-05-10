import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';
import type { Props as ETooltipProps } from './ETooltip';

export interface ETooltipOptions {}

export type ETooltipComponent = Component<
  ComponentName.ETooltip,
  ETooltipOptions,
  ETooltipProps
>;

export { default } from './ETooltip.vue';
