import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { action } from '@ember/object';

export interface DropdownActionArgs {
    disabled?: boolean;
    action?: (event: Event) => void;
    dd: {
        actions: {
            close: () => void;
        }
    }
}

export default class DropdownActionComponent extends Component<DropdownActionArgs> {
    /**
     * The property path to use for a disabled button
     * @readonly
     * @type {boolean}
     * @memberof DropdownActionComponent
     */
    get disabled(): boolean {
        return this.args.disabled || false;
    }

    /**
     * Handles action button click events
     * @param {Event} event
     * @memberof DropdownActionComponent
     */
    @action
    onClick(event: Event) {
        this.args.action?.(event);

        if(event) {
            scheduleOnce('afterRender', this.args.dd.actions, 'close');
        }
    }
}
