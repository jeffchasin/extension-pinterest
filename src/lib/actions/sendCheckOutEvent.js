'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'checkout', settings);
  turbine.logger.log('Send event: pintrk("track", "checkout" ' + JSON.stringify(settings) + ')');
};
