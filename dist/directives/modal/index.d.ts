import { DirectiveBinding } from 'vue';
import { Props } from '../../components/EModal/EModal';
export interface ModalOptions extends Props {
    name: string;
    data?: any;
}
declare const OpenModalDirective: () => {
    name: string;
    directive: {
        mounted(element: HTMLElement, binding: DirectiveBinding<ModalOptions | string>, _vnode: any): void;
    };
};
declare const CloseModalDirective: () => {
    name: string;
    directive: {
        mounted(element: HTMLElement, binding: DirectiveBinding, _vnode: any): void;
    };
};
export { OpenModalDirective, CloseModalDirective };
