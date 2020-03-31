import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';
import { tryInvoke } from '@ember/utils';

export default class DropdownActionComponent extends Component {
    tagName = 'button';
    classNames = ['dropdown-action'];
    classNameBindings = ['itemClass'];
    attributeBindings = ['type', 'disabled'];
    itemClass = 'dropdown-item';
    type = 'button';
    bubbles = true;

    click() {
        const ddActions = this.dd.actions;
        tryInvoke(this, 'action', [event]);

        if(ddActions) {
            scheduleOnce('afterRender', ddActions, 'close');
        }

        return this.bubbles;
    }
}
