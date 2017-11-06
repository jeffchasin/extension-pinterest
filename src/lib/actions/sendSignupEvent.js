'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'signup', settings);
  turbine.logger.log('Send event: pintrk("track", "signup" ' + JSON.stringify(settings) + ')');
};
