'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'lead', settings);
  turbine.logger.log('Send event: pintrk("track", "lead" ' + JSON.stringify(settings) + ')');
};
