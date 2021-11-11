'use strict';

// For details on Pinterest events:
// https://help.pinterest.com/en/business/article/add-event-codes
module.exports = function (settings) {
  pintrk('track', 'pagevisit', settings, function (didInit, error) {
    if (!didInit) {
      turbine.logger.log('pintrk pagevisit event error: ' + error);
    } else {
      turbine.logger.log('Sent pagevisit event: ' + JSON.stringify(settings));
    }
  });
};
