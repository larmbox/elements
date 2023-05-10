import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';
import type { Props as ESwitchProps } from './ESwitch';

export interface ESwitchOptions {
  uncheckedIcon: string;
  checkedIcon: string;
}

export type ESwitchComponent = Component<
  ComponentName.ESwitch,
  ESwitchOptions,
  ESwitchProps
>;

export { default } from './ESwitch.vue';
