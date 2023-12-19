import { Directive } from 'vue';
type Element = HTMLElement & {
    _click: () => void;
};
declare const EVModalOpen: Directive<Element, string | {
    name: string;
    data?: unknown;
}>;
declare const EVModalClose: Directive<Element, string>;
declare const EVModalCloseAll: Directive<Element, void>;
export { EVModalClose, EVModalCloseAll, EVModalOpen };
