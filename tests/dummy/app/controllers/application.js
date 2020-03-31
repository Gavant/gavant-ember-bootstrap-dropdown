import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @action
    test(event) {
        //eslint-disable-next-line no-console
        event.preventDefault();
        console.log('action fired!');
    }
}
