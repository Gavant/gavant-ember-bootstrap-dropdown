import LinkComponent from '@ember/routing/link-component';
import { scheduleOnce } from '@ember/runloop';

export default class DropdownLinkComponent extends LinkComponent {
    click() {
        //@ts-ignore
        const ddActions = this.dd.actions;
        if(ddActions) {
            scheduleOnce('afterRender', ddActions, 'close');
        }
    }
}
