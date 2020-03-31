import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';
import { tryInvoke } from '@ember/utils';

export default class DropdownActionComponent extends Component {
    tagName: string = 'button';
    classNameBindings: string[] = ['itemClass'];
    attributeBindings: string[] = ['type', 'disabled'];
    itemClass: string = 'dropdown-item';
    type: string = 'button';
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
