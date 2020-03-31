import LinkComponent from '@ember/routing/link-component';
import { scheduleOnce } from '@ember/runloop';

export default class DropdownLinkComponent extends LinkComponent {
    classNames = ['dropdown-link'];
    classNameBindings = ['itemClass'];
    itemClass = 'dropdown-item';

    click() {
        const ddActions = this.dd.actions;
        if(ddActions) {
            scheduleOnce('afterRender', ddActions, 'close');
        }
    }
}
