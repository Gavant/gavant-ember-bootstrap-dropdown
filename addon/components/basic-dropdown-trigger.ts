//@ts-ignore
import { setComponentTemplate } from '@ember/component';

//@ts-ignore see: https://github.com/cibernox/ember-basic-dropdown/issues/542
import BasicDropdownTrigger from 'ember-basic-dropdown/components/basic-dropdown-trigger';

//@ts-ignore dont think TS can properly read template imports so this might always need an ignore
// import layout from 'ember-basic-dropdown/templates/components/basic-dropdown-trigger';

export default class DropdownTriggerComponent extends BasicDropdownTrigger {}

// export default setComponentTemplate(layout, DropdownTriggerComponent);
