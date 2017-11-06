'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'watchvideo', settings);
  turbine.logger.log('Send event: pintrk("track", "watchvideo" ' + JSON.stringify(settings) + ')');
};
