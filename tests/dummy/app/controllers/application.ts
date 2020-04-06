import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    /**
     * Button action
     * @param {Event} event
     * @memberof ApplicationController
     */
    @action
    test(event: Event) {
        //eslint-disable-next-line no-console
        event.preventDefault();
        console.log('action fired!');
    }
}
