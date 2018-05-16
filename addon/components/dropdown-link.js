import LinkComponent from '@ember/routing/link-component';
import { get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default LinkComponent.extend({
    classNames: ['dropdown-link'],
    classNameBindings: ['itemClass'],
    itemClass: 'dropdown-item',

    click() {
        const ddActions = get(this, 'dd.actions');

        this._super(...arguments);

        if(ddActions) {
            scheduleOnce('afterRender', ddActions, 'close');
        }
    }
});
