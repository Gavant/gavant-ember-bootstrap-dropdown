// Easily allow apps, which are not yet using strict mode templates, to consume your Glint types, by importing this file.
// Add all your components, helpers and modifiers to the template registry here, so apps don't have to do this.
import BasicDropdown from 'ember-basic-dropdown/components/basic-dropdown';

// See https://typed-ember.gitbook.io/glint/using-glint/ember/authoring-addons
import DropdownAction from 'components/dropdown-action';
import DropdownLink from 'components/dropdown-link';

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        DropdownAction: typeof DropdownAction;
        DropdownLink: typeof DropdownLink;
        DropdownMenu: typeof BasicDropdown;
    }
}
