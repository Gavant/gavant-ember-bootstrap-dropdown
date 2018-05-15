import BasicDropdownTrigger from 'ember-basic-dropdown/components/basic-dropdown/trigger';

export default BasicDropdownTrigger.extend({
    tagName: 'button',
    classNameBindings: ['triggerClass'],
    triggerClass: 'dropdown-toggle'
});
