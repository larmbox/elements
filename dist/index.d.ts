export { ComponentName as Component } from './common/enums';
export * from './components';
export { useElements } from './composables/useElements';
export { useFocusTrap } from './composables/useFocusTrap';
export { useRouteObserver } from './composables/useRouteObserver';
export { default as createElements } from './create-elements';
export { default as version } from './version';
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        EButton: (typeof import('./components'))['EButton'];
        ECheckbox: (typeof import('./components'))['ECheckbox'];
        EFormDescription: (typeof import('./components'))['EFormDescription'];
        EFormFeedback: (typeof import('./components'))['EFormFeedback'];
        EFormHint: (typeof import('./components'))['EFormHint'];
        EFormInput: (typeof import('./components'))['EFormInput'];
        EFormInputField: (typeof import('./components'))['EFormInputField'];
        EFormLabel: (typeof import('./components'))['EFormLabel'];
        EIcon: (typeof import('./components'))['EIcon'];
        EInput: (typeof import('./components'))['EInput'];
        ELoading: (typeof import('./components'))['ELoading'];
        EModal: (typeof import('./components'))['EModal'];
        ERadio: (typeof import('./components'))['ERadio'];
        ESelect: (typeof import('./components'))['ESelect'];
        ESwitch: (typeof import('./components'))['ESwitch'];
        ETextarea: (typeof import('./components'))['ETextarea'];
        EThemeProvider: (typeof import('./components'))['EThemeProvider'];
        ETooltip: (typeof import('./components'))['ETooltip'];
    }
    interface ComponentCustomProperties {
        vTooltip: (typeof import('./directives'))['EVTooltip'];
        vModalClose: (typeof import('./directives'))['EVModalClose'];
        vModalCloseAll: (typeof import('./directives'))['EVModalCloseAll'];
        vModalOpen: (typeof import('./directives'))['EVModalOpen'];
    }
}
