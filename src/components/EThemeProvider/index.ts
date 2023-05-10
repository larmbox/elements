import { ComponentName } from '~/common/enums';
import { Component } from '~/common/types';
import type { Props as EThemeProviderProps } from './EThemeProvider';

export interface EThemeProviderOptions {}

export type EThemeProviderComponent = Component<
  ComponentName.EThemeProvider,
  EThemeProviderOptions,
  EThemeProviderProps
>;

export { default } from './EThemeProvider.vue';
