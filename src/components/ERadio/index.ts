import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';
import type { Props as ERadioProps } from './ERadio';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ERadioOptions {}

export type ERadioComponent = Component<
  ComponentName.ERadio,
  ERadioOptions,
  ERadioProps
>;

export { default } from './ERadio.vue';
