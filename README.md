gavant-ember-bootstrap-dropdown
==============================================================================

Dropdown menus built on ember-basic-dropdown, and styled by Bootstrap 4.

Installation
------------------------------------------------------------------------------

```
ember install gavant-ember-bootstrap-dropdown
```
([ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown) will be installed along with the addon)

Usage
------------------------------------------------------------------------------

#### Styles

This addon assumes that the project already has [Bootstrap 4](https://github.com/twbs/bootstrap#quick-start) installed, as by default, it applies CSS classes
that are compatible with bootstrap's components. However, these classes can be customized if needed.

To use the addon styles, you must use SASS:
```
ember install ember-cli-sass
```

Upon addon installation, imports statement will be added to your `app.scss`:

```scss
@import "ember-basic-dropdown";
@import "node_modules/animate.css/source/zooming_entrances/zoomIn";
@import "node_modules/animate.css/source/zooming_exits/zoomOut";
@import "gavant-ember-bootstrap-dropdown";
```

### Components

#### `{{dropdown-menu}}`
[TODO]

#### `{{dropdown-link}}`
[TODO]

#### `{{dropdown-action}}`
[TODO]

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
