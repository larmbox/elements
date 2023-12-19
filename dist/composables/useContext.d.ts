import { VNode } from 'vue';
import { ComponentConfiguration, ComponentInstance } from '../common/types';
export declare function useContext<T extends ComponentInstance<ComponentConfiguration>>(component?: T): {
    attrs: {
        [x: string]: unknown;
    };
    slot: {
        /**
         * Returns true if the component has been provided a slot with name, even if
         * it is empty or only contains a comment.
         * This is useful if the slot content has been "v-if'ed" away, but you still
         * want to know if the slot has been provided.
         *
         * @param name The name of the slot to search for.
         */
        exists: (name: keyof T['slots']) => boolean;
        /**
         * Returns true if the component has been provided a slot with name and has
         * content other than a comment.
         *
         * @param name The name of the slot to search for.
         */
        active: (name: keyof T['slots']) => boolean;
        /**
         * Returns the content of the slot with name.
         * Partial because we cannot force the user to provide a slot.
         */
        node: Partial<{ [K in keyof T["slots"]]: (args: T["slots"][K]["properties"]) => VNode[]; }>;
    };
    css: {
        /**
         *
         * @param suffix
         * @param name
         */
        element: <T_1 extends string | Record<string, boolean | undefined> = string>(suffix: T_1, name?: string, usePrefix?: boolean) => T_1;
        /**
         *
         * @param suffix
         * @param name
         */
        modifier: <T_2 extends string | Record<string, boolean | undefined> = string>(suffix: T_2, name?: string, usePrefix?: boolean) => T_2;
        /**
         *
         * @param suffix
         * @param name
         */
        base: "";
    };
    first: <R>(...args: R[]) => R | undefined;
    render: (render: () => VNode) => void;
};
