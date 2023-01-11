import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import Component from '@glimmer/component';

export interface DropdownLinkArgs {
    route: string;
    model?: any;
    models?: any[];
    query?: object;
    replace?: boolean;
    currentWhen?: boolean;
    activeClass?: string;
    dd: {
        actions: {
            close: () => void;
        };
    };
}

interface DropdownLinkSignature {
    Args: DropdownLinkArgs;
    Blocks: {
        default: [];
    };
    Element: HTMLAnchorElement;
}

export default class DropdownLinkComponent extends Component<DropdownLinkSignature> {
    /**
     * ember's <LinkTo> complains if you pass it a @models arg value that is not an array
     * but we dont want to require passing in that arg if the route needs no models so
     * just default it to an empty array
     */
    get models() {
        return this.args.models ?? [];
    }

    /**
     * The CSS class that is applied when the LinkTo's route is considered active
     * or the `currentWhen` arg evaluates to true. Can be removed entirely by
     * passing in an empty string
     */
    get activeClass() {
        return this.args.activeClass ?? 'active';
    }

    /**
     * Handles anchor tag onclick events
     * @memberof DropdownLinkComponent
     */
    @action
    onClick() {
        scheduleOnce('afterRender', this.args.dd.actions, 'close');
    }
}
