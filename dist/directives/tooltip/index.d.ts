import { DirectiveBinding, VNode } from 'vue';
import { Props } from '../../components/ETooltip/ETooltip';
export interface TooltipOptions extends Props {
    text: string | null | undefined;
}
type BaseType = string | number | boolean;
declare const TooltipDirective: () => {
    name: string;
    directive: {
        updated(element: HTMLElement, binding: DirectiveBinding<TooltipOptions | BaseType>, _vnode: VNode): void;
        mounted(element: HTMLElement, binding: DirectiveBinding<TooltipOptions | BaseType>, _vnode: VNode): void;
        unmounted(el: HTMLElement, _binding: DirectiveBinding<TooltipOptions | BaseType>, _vnode: VNode): void;
    };
};
export { TooltipDirective };
