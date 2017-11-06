'use strict';

var window = require('@adobe/reactor-window');
var loadScript = require('@adobe/reactor-load-script');
var extensionSettings = turbine.getExtensionSettings();
var pintrk;

if (!window.pintrk) {
  window.pintrk = function () {
    window.pintrk.queue.push(Array.prototype.slice.call(arguments));
  };
  window.pintrk.queue = [];
  window.pintrk.version = '3.0';
}

loadScript('https://s.pinimg.com/ct/core.js').then(function() {
  window.pintrk('load', extensionSettings.tagid);
  window.pintrk('page');
  turbine.logger.log('Pinterest Base Code successfully loaded.');
}, function() {
  turbine.logger.error('Pinterest Base Code could not be loaded.');
});

module.exports = pintrk;
