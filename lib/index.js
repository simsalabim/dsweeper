"use strict";

var filterFn  = require("./filter.js");
var watchDir = require("./dir_watcher.js");

module.exports = function (dir) {
  watchDir(dir, filterFn);
};
