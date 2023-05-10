import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';
import type { Props as ESelectProps } from './ESelect';

export interface ESelectOptions {
  icon: string;
}

export type ESelectComponent = Component<
  ComponentName.ESelect,
  ESelectOptions,
  ESelectProps
>;

export { default } from './ESelect.vue';
