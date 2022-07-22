import EmberRouter from '@ember/routing/router';
import config from 'test-app/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('test', function () {
        this.route('two', { path: '/:two' }, function () {
            this.route('three', { path: '/:three' });
        });
    });
});
