gavant-ember-bootstrap-dropdown
==============================================================================

Dropdown menus built on ember-basic-dropdown, and styled by Bootstrap 4.

Installation
------------------------------------------------------------------------------

```
ember install @gavant/ember-bootstrap-dropdown
```
**IMPORTANT:** [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown) will be installed along with the addon, and added to your app's package.json. However, if your app already has ember-basic-dropdown as a dependency via another addon, such as ember-power-select, this should be removed from your package.json via `yarn remove ember-basic-dropdown`.

Usage
------------------------------------------------------------------------------

#### Styles

This addon assumes that the project already has [Bootstrap 4](https://github.com/twbs/bootstrap#quick-start) installed, as by default, it applies CSS classes
that are compatible with bootstrap's components. However, these classes can be customized if needed.

To use the addon styles, you must use SASS:
```
ember install ember-cli-sass
```

Upon addon installation, an `@import` statement will be added to your `app.scss`:

```scss
@import "ember-basic-dropdown";
@import "gavant-ember-bootstrap-dropdown";
```
**IMPORTANT:** If your app already has ember-basic-dropdown as a dependency via another addon, such as ember-power-select, the `@import "ember-basic-dropdown";` line should be removed.

### Components

This addon is simply an extension of ember-basic-dropdown, so you can use the exact same [API](https://ember-basic-dropdown.com/docs/api-reference), with a couple additional components:

```hbs
{{#dropdown-menu as |dd|}}
    {{#dd.trigger class="btn btn-primary"}}Trigger{{/dd.trigger}}
    {{#dd.content}}
        {{#dropdown-action dd=dd action=(action "myAction")}}
            Dropdown Action
        {{/dropdown-action}}
        {{#dropdown-link "some.route" dd=dd}}
            Dropdown Link
        {{/dropdown-link}}
    {{/dd.content}}
{{/dropdown-menu}}
```

#### `{{dropdown-menu}}`

Just an alias of `{{basic-dropdown}}`, it maintains the exact same API. It may be extended with additional behaviors/functionality in the future, so its preferred to use this component for all dropdown menus.

#### `{{dropdown-link}}`

Extends `Ember.LinkComponent`, so provides the same API as `{{link-to}}`. It adds additional classes to style it correctly in a bootstrap dropdown, and its `dd` attribute MUST be passed the `{{#dropdown-menu as |dd|}}`'s yielded `dd` object (e.g. `{{#dropdown-link "route" dd=dd}}Foo{{/dropdown-link}}`), in order for the dropdown to close when clicked.

#### `{{dropdown-action}}`

A button element that adds additional classes to style it correctly in a bootstrap dropdown. Link `dropdown-link`, its `dd` attribute MUST be passed the `{{#dropdown-menu as |dd|}}`'s yielded `dd` object (e.g. `{{#dropdown-link "route" dd=dd}}Foo{{/dropdown-link}}`), in order for the dropdown to close when clicked.

Additionally, the component may be passed an action via its `action` attribute, which will be invoked on click, and the click event object will be sent up as an action param. You may also prevent action bubbling by passing in `bubbles=false`.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd gavant-ember-bootstrap-dropdown`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
