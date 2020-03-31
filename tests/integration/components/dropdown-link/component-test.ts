import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import 'qunit-dom';

module('Integration | Component | dropdown-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DropdownLink @text="Foobar" @route="test"></DropdownLink>`);

    assert.dom(this.element).hasText('Foobar');

    // Template block usage:
    await render(hbs`
        <DropdownLink @route="test">
            template block text
        </DropdownLink>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
