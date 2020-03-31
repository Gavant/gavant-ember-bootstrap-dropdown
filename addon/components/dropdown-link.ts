import LinkComponent from '@ember/routing/link-component';
import { scheduleOnce } from '@ember/runloop';

export default class DropdownLinkComponent extends LinkComponent {
    classNameBindings: string[] = ['itemClass'];
    itemClass: string = 'dropdown-item';

    click() {
        //@ts-ignore
        const ddActions = this.dd.actions;
        if(ddActions) {
            scheduleOnce('afterRender', ddActions, 'close');
        }
    }
}
