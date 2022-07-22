import { render } from '@ember/test-helpers';

import { setupRenderingTest } from 'ember-qunit';

import 'qunit-dom';

import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | dropdown-link', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        // Template block usage:
        await render(hbs`
            <DropdownLink @route="test">
                template block text
            </DropdownLink>
        `);

        assert.dom(this.element as Element).hasText('template block text');
    });
});
