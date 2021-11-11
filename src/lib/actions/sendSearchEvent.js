'use strict';

// For details on Pinterest events:
// https://help.pinterest.com/en/business/article/add-event-codes
module.exports = function (settings) {
  pintrk('track', 'search', settings, function (didInit, error) {
    if (!didInit) {
      turbine.logger.log('pintrk search event error: ' + error);
    } else {
      turbine.logger.log('Sent search event: ' + JSON.stringify(settings));
    }
  });
};
