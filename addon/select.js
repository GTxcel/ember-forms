import Em from 'ember';
import FormGroupComponent from './group';
import ControlMixin from 'ember-idx-forms/mixins/control';
import Utils from 'ember-idx-forms/utils/utils';

/*
 Form Select

 Syntax:
 {{em-select property="property name"
 content=array_of_options
 optionValuePath=keyForValue
 optionLabelPath=keyForLabel
 prompt="Optional default prompt"}}
 */
export default FormGroupComponent.extend({
  v_icons: false,
  controlView: Em.Select.extend(ControlMixin, {
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),
    content: Em.computed.alias('parentView.content'),
    optionValuePath: Em.computed.alias('parentView.optionValuePath'),
    optionLabelPath: Em.computed.alias('parentView.optionLabelPath'),
    prompt: Em.computed.alias('parentView.prompt'),
    multiple: Em.computed.alias('parentView.multiple'),
    value: Em.computed.alias('parentView.value'),
    selection: Em.computed.alias('parentView.selection')
  }),
  property: void 0,
  content: void 0,
  optionValuePath: void 0,
  optionLabelPath: void 0,
  prompt: void 0,
  value: void 0,
  selection: void 0,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return Utils.getFormsColsClass(this.get('form.form_layout_columns'), "left", "false");
//      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});
