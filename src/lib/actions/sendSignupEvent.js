'use strict';

// For details on Pinterest events:
// https://help.pinterest.com/en/business/article/add-event-codes
module.exports = function (settings) {
  pintrk('track', 'signup', settings, function (didInit, error) {
    if (!didInit) {
      turbine.logger.log('pintrk signup event error: ' + error);
    } else {
      turbine.logger.log('Sent signup event: ' + JSON.stringify(settings));
    }
  });
};
