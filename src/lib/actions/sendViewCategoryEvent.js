'use strict';

// For details on Pinterest events:
// https://help.pinterest.com/en/business/article/add-event-codes
module.exports = function (settings) {
  pintrk('track', 'viewcategory', settings, function (didInit, error) {
    if (!didInit) {
      turbine.logger.log('pintrk viewcategory event error: ' + error);
    } else {
      turbine.logger.log('Sent viewcategory event: ' + JSON.stringify(settings));
    }
  });
};
