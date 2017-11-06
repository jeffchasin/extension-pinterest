'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk('track', 'addtocart', settings);
  turbine.logger.log('Send event: pintrk("track", "addtocart" ' + JSON.stringify(settings) + ')');
};
