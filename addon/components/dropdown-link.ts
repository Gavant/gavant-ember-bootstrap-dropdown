import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { action } from '@ember/object';

export interface DropdownLinkArgs {
    dd: {
        actions: {
            close: () => void;
        }
    }
}

export default class DropdownLinkComponent extends Component<DropdownLinkArgs> {
    /**
     * Handles anchor tag onclick events
     * @memberof DropdownLinkComponent
     */
    @action
    onClick() {
        scheduleOnce('afterRender', this.args.dd.actions, 'close');
    }
}
