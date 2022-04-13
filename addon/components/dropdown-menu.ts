//@ts-ignore
import { setComponentTemplate } from '@ember/component';

//@ts-ignore see: https://github.com/cibernox/ember-basic-dropdown/issues/542
import BasicDropdown from 'ember-basic-dropdown/components/basic-dropdown';

//@ts-ignore dont think TS can properly read template imports so this might always need an ignore
// import layout from 'ember-basic-dropdown/components/basic-dropdown/template';

export default class DropdownMenuComponent extends BasicDropdown {}

// export default setComponentTemplate(layout, DropdownMenuComponent);
