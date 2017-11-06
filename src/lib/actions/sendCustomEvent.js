'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'custom', settings);
  turbine.logger.log('Send event: pintrk("track", "custom" ' + JSON.stringify(settings) + ')');
};
