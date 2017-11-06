'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'viewcategory', settings);
  turbine.logger.log('Send event: pintrk("track", "viewcategory" '
   + JSON.stringify(settings) + ')');
};
