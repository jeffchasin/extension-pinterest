'use strict';

// For details on Pinterest events:
// https://help.pinterest.com/en/business/article/add-event-codes
module.exports = function (settings) {
  pintrk('track', 'lead', settings, function (didInit, error) {
    if (!didInit) {
      turbine.logger.log('pintrk lead event error: ' + error);
    } else {
      turbine.logger.log('Sent lead event: ' + JSON.stringify(settings));
    }
  });
};
