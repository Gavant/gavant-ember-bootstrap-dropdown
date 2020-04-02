import LinkComponent from '@ember/routing/link-component';
import { scheduleOnce } from '@ember/runloop';

//TODO needs to be converted to a Glimmer component
//probably would implement it similar to https://github.com/Gavant/gavant-ember-button-link/blob/master/addon/components/button-link.hbs
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
