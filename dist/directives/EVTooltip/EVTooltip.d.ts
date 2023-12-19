import { App, Directive, Ref } from 'vue';
import { ComponentConfiguration, ExtractProps } from '../../common/types';
import { ETooltip } from '../../components';
type Binding = Partial<ExtractProps<ComponentConfiguration<ETooltip>['props']>> | string;
declare const EVTooltip: Directive<HTMLElement & {
    binding: Ref<Binding>;
    app: App<Element>;
}, Binding>;
export { EVTooltip };
