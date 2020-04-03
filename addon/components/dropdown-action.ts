import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { tryInvoke } from '@ember/utils';
export default class DropdownActionComponent extends Component {
    bubbles: boolean = true;

    click() {
        //@ts-ignore
        const ddActions = this.dd.actions;
        tryInvoke(this, 'action', [event]);

        if(ddActions) {
            scheduleOnce('afterRender', ddActions, 'close');
        }

        return this.bubbles;
    }
}
