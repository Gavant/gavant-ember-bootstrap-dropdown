# gavant-ember-bootstrap-dropdown

Dropdown menus built on ember-basic-dropdown, and styled by Bootstrap 4.

## Compatibility

-   Ember.js v3.16 or above
-   Ember CLI v2.13 or above
-   Node.js v10 or above

```
ember install @gavant/ember-bootstrap-dropdown
```

**IMPORTANT:** [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown) will be installed along with the addon, and added to your app's package.json. However, if your app already has ember-basic-dropdown as a dependency via another addon, such as ember-power-select, this should be removed from your package.json via `yarn remove ember-basic-dropdown`.

## Usage

#### Styles

This addon assumes that the project already has [Bootstrap 4](https://github.com/twbs/bootstrap#quick-start) installed, as by default, it applies CSS classes
that are compatible with bootstrap's components. However, these classes can be customized if needed.

To use the addon styles, you must use SASS:

```
ember install ember-cli-sass
```

Upon addon installation, an `@import` statement will be added to your `app.scss`:

```scss
@import 'ember-basic-dropdown';
@import 'gavant-ember-bootstrap-dropdown';
```

**IMPORTANT:** If your app already has ember-basic-dropdown as a dependency via another addon, such as ember-power-select, the `@import "ember-basic-dropdown";` line should be removed.

### Components

This addon is simply an extension of ember-basic-dropdown, so you can use the exact same [API](https://ember-basic-dropdown.com/docs/api-reference), with a couple additional components:

```hbs
<DropdownMenu as |DD|>
    <DD.Trigger @class="btn btn-primary">
        Trigger
    </DD.Trigger>
    <DD.Content class="dropdown-menu">
        <DropdownAction @dd={{DD} @action={{this.myAction}}>
            Dropdown Action
        </DropdownAction>
        <DropdownLink @route="some.route" @dd={{DD}}>
            Dropdown Link
        </DropdownLink>
    </DD.Content>
</DropdownMenu>
```

#### `<DropdownMenu>`

Just an alias of `<BasicDropdown>`, it maintains the exact same API. It may be extended with additional behaviors/functionality in the future, so its preferred to use this component for all dropdown menus.

#### `<DropdownLink>`

Extends `Ember.LinkComponent`, so provides the same API as `<LinkTo>`. It adds additional classes to style it correctly in a bootstrap dropdown, and its `DD` attribute MUST be passed the `<DropdownMenu as |DD|>`'s yielded `DD` object (e.g. `<DropdownLink @route="route" @dd={{DD}}>Foo</DropdownLink>`), in order for the dropdown to close when clicked. The `<DropdownLink>` also uses [ember-link-action](https://github.com/Kuzirashi/ember-link-action) behind the scenes to allow for simultaneous action/linkto behavior.

#### `<DropdownAction>`

A button element that adds additional classes to style it correctly in a bootstrap dropdown. Link `dropdown-link`, its `DD` attribute MUST be passed the `<DropdownMenu as |DD|>`'s yielded `DD` object (e.g. `<DropdownLink @route="route" @dd={{DD}}>Foo</DropdownLink>`), in order for the dropdown to close when clicked.

Additionally, the component may be passed an action via its `@action` attribute, which will be invoked on click, and the click event object will be sent up as an action param. You may also prevent action bubbling by passing in `@bubbles={{false}}`.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
