import Em from 'ember';
import FormGroupComponent from './group';
import ControlMixin from 'ember-idx-forms/mixins/control';
import Utils from 'ember-idx-forms/utils/utils';

/*
Form Input

Syntax:
{{em-text property="property name" rows=4}}
 */
export default FormGroupComponent.extend({
  controlView: Em.TextArea.extend(ControlMixin, {
    attributeBindings: ['placeholder'],
    placeholder: Em.computed.alias('parentView.placeholder'),
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),
    rows: Em.computed.alias('parentView.rows')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  rows: 4,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return Utils.getFormsColsClass(this.get('form.form_layout_columns'), "right", "false");
//      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});
