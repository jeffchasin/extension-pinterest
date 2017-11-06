'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'pagevisit', settings);
  turbine.logger.log('Send event: pintrk("track", "pagevisit" ' + JSON.stringify(settings) + ')');
};
