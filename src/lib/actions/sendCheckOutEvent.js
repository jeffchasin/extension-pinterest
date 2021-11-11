'use strict';

// For details on Pinterest events:
// https://help.pinterest.com/en/business/article/add-event-codes
module.exports = function (settings) {
  pintrk('track', 'checkout', settings, function (didInit, error) {
    if (!didInit) {
      turbine.logger.log('pintrk checkout error: ' + error);
    } else {
      turbine.logger.log('Sent checkout event: ' + JSON.stringify(settings));
    }
  });
};
