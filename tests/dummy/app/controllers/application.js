import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        test() {
            //eslint-disable-next-line no-console
            console.log('action fired!');
        }
    }
});
