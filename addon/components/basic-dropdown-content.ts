//@ts-ignore
import { setComponentTemplate } from '@ember/component';

//@ts-ignore see: https://github.com/cibernox/ember-basic-dropdown/issues/542
import BasicDropdownContent from 'ember-basic-dropdown/components/basic-dropdown-content';

//@ts-ignore dont think TS can properly read template imports so this might always need an ignore
// import layout from 'ember-basic-dropdown/templates/components/basic-dropdown-content';

export default class BasicDropdownContentComponent extends BasicDropdownContent {}

// export default setComponentTemplate(layout, BasicDropdownContentComponent);
