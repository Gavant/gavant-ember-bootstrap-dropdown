import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import Component from '@glimmer/component';

export interface DropdownActionArgs {
    action?: (event: Event) => void;
    dd: {
        actions: {
            close: () => void;
        };
    };
}

interface DropdownActionSignature {
    Args: DropdownActionArgs;
    Blocks: {
        default: [];
    };
    Element: HTMLButtonElement;
}

export default class DropdownActionComponent extends Component<DropdownActionSignature> {
    /**
     * Handles action button click events
     * @param {Event} event
     * @memberof DropdownActionComponent
     */
    @action
    onClick(event: Event) {
        this.args.action?.(event);
        scheduleOnce('afterRender', this.args.dd.actions, 'close');
    }
}
