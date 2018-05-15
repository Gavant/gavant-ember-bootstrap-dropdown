import Component from '@ember/component';
import { get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { tryInvoke } from '@ember/utils';

export default Component.extend({
    tagName: 'button',
    classNames: ['dropdown-action'],
    classNameBindings: ['itemClass'],
    attributeBindings: ['type', 'disabled'],
    itemClass: 'dropdown-link',
    type: 'button',
    bubbles: true,

    click() {
        this._super(...arguments);
        const ddActions = get(this, 'dd.actions');
        tryInvoke(this, 'action', [event]);
        if(ddActions) {
            scheduleOnce('afterRender', ddActions, 'close');
        }
    }
});
