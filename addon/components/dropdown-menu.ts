import { setComponentTemplate } from '@ember/component';
//@ts-ignore see: https://github.com/cibernox/ember-basic-dropdown/issues/542
import BasicDropdown from 'ember-basic-dropdown/components/basic-dropdown';
//@ts-ignore dont think TS can properly read template imports so this might always need an ignore
import layout from 'ember-basic-dropdown/templates/components/basic-dropdown';

class DropdownMenuComponent extends BasicDropdown {
    //simply extends basic-dropdown as-is for now
    //to provide component naming convention consistent
    //with the other components (dropdown-link, dropdown-action)
    //but could extend/override with new functionality in the future
}

export default setComponentTemplate(layout, DropdownMenuComponent);
