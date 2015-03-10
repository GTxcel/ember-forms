var Utils;
export default Utils = {
  createBoundSwitchAccessor: function(switchValue, myProperty, myDefault) {
    if (myDefault == null) {
      myDefault = 'default';
    }
    return (function(key, value) {
      if (arguments.length === 2) {
        this.set(myProperty, (value ? switchValue : myDefault));
      }
      return this.get(myProperty) === switchValue;
    }).property(myProperty);
  },
  namelize: function(string) {
    return string.underscore().split('_').join(' ').capitalize();
  },
  /**
   *
   * @param layout two-column bootstrap format; integers passed as string: left:right
   * @param part "left": column from left side; "right": column from right side
   * @param addOffset "true": need offset as well as col; "false": only col
   * @returns column and/or offset class
   */
  getFormsColsClass: function(layout, part, addOffset) {
    addOffset = (typeof addOffset != "undefined" && addOffset == "true") ? true : false;
    var layout = layout.split(':');
    var col = 'col-sm-10';
    var offset = 'col-sm-offset-2';
    if (part == "left" ) {
      col = 'col-sm-'+layout[0];
      offset = 'col-sm-offset-'+layout[1];
    } else {
      col = 'col-sm-'+layout[1];
      offset = 'col-sm-offset-'+layout[0];
    }
    if (addOffset) {
      return offset + ' ' + col;
    } else {
      return col;
    }
  }
};
