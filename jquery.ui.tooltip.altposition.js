/*
 * Alter Position jQuery UI Tooltip
 * https://anseki.github.io/jquery-ui-tooltip-altposition/
 *
 * Copyright (c) 2018 anseki
 * Licensed under the MIT license.
 */

;(function($, undefined) {
'use strict';

$.widget('ui.tooltip', $.ui.tooltip, {
  _open: function() {
    var jq = this.element,
      altPosition = this.options.altPosition,
      orgPos, res;
    if (altPosition && (
        altPosition.tagName && jq.get(0).nodeName.toLowerCase() === altPosition.tagName ||
        altPosition.minOuterWidth && jq.outerWidth() >= altPosition.minOuterWidth ||
        altPosition.maxOuterWidth && jq.outerWidth() <= altPosition.maxOuterWidth ||
        altPosition.minOuterHeight && jq.outerHeight() >= altPosition.minOuterHeight ||
        altPosition.maxOuterHeight && jq.outerHeight() <= altPosition.maxOuterHeight ||
        altPosition.callback && altPosition.callback.call(this)
        )) {
      orgPos = this.options.position; // Save
      this.options.position = altPosition.position;
    }
    res = this._superApply(arguments);
    if (orgPos) { this.options.position = orgPos; } // Restore
    return res;
  }
});

})(jQuery);
