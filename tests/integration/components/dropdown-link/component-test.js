import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | dropdown-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{dropdown-link "Foobar" "test"}}`);

    assert.equal(this.element.textContent.trim(), 'Foobar');

    // Template block usage:
    await render(hbs`
      {{#dropdown-link "test"}}
        template block text
      {{/dropdown-link}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
