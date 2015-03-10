import Em from 'ember';
import InFormMixin from 'ember-idx-forms/mixins/in_form';
import Utils from 'ember-idx-forms/utils/utils';

/*
Form Submit Button

Syntax:
{{em-form-submit text="Submit"}}
 */
export default Em.Component.extend(InFormMixin, {
  classes: 'btn btn-default',
  classNames: ['form-group'],
  text: 'Submit',
  type: 'submit',
  attributeBindings: ['disabled'],
  horiClass: 'col-sm-offset-2 col-sm-10',
  horiClassCalc: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return Utils.getFormsColsClass(this.get('form.form_layout_columns'), "right", "true");
//      return this.get('horiClass');
    }
  }).property('form.form_layout'),
  disabled: (function() {
    if (!Em.isNone(this.get('model.isValid'))) {
      return !this.get('model.isValid');
    } else {
      return false;
    }
  }).property('model.isValid')
});
