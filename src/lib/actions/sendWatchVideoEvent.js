'use strict';

// For details on Pinterest events:
// https://help.pinterest.com/en/business/article/add-event-codes
module.exports = function (settings) {
  pintrk('track', 'watchvideo', settings, function (didInit, error) {
    if (!didInit) {
      turbine.logger.log('pintrk watchvideo event error: ' + error);
    } else {
      turbine.logger.log('Sent watchvideo event: ' + JSON.stringify(settings));
    }
  });
};
