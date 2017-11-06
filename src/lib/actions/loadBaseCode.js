'use strict';

module.exports = function(settings) {
  var pintrk = require('../helpers/getPintrkBase');

  pintrk();
  logger.log('Load base code: pintrk( ' + JSON.stringify(settings) + ')');
};
