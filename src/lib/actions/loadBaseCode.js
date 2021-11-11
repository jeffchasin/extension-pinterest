'use strict';

// This action should be run Top of Page, globally
// loads Pinterest base code core.js if window.pintrk doesn't exist
// https://help.pinterest.com/en/business/article/install-the-base-code
var loadScript = require('@adobe/reactor-load-script');
var  scriptUrl = 'https://s.pinimg.com/ct/core.js';
var extensionSettings = turbine.getExtensionSettings();

module.exports = function() {
  if (!window.pintrk) {
    window.pintrk = function() {
      window.pintrk.queue.push(
        Array.prototype.slice.call(arguments)
      );
    };
    window.pintrk.queue = [];
    window.pintrk.version = '3.0';
    loadScript( scriptUrl).then(function() {
      turbine.logger.log('Base Code loaded');
    },
    function() {
      turbine.logger.error('Base Code could not be loaded');
    });
  }
  pintrk('load', extensionSettings.tagid);
};
