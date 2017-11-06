'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'search', settings);
  turbine.logger.log('Send event: pintrk("track", "search" ' + JSON.stringify(settings) + ')');
};
