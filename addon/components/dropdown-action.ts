import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { action } from '@ember/object';

export interface DropdownActionArgs {
    action?: (event: Event) => void;
    dd: {
        actions: {
            close: () => void;
        };
    };
}

export default class DropdownActionComponent extends Component<DropdownActionArgs> {
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
