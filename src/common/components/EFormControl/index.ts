import { ExtractPropTypes } from 'vue';
import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';

export interface EFormControlOptions {}

export type EFormControlComponent = Component<
  ComponentName.EFormControl,
  EFormControlOptions,
  ExtractPropTypes<Record<never, never>>
>;

export { default } from './EFormControl.vue';
