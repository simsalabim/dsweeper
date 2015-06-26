"use strict";

var fs = require("fs");
var findFiles = require("./file_finder.js");
var filter  = require("./filter.js");
var watchDirectory = require("./dir_watcher.js");

module.exports = function (dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  var struct = {};
  findFiles(dir, filter, struct);

  var count = Object.keys(struct).reduce(function (sum, dir) {
    return sum + struct[dir].length;
  }, 0);
  console.log(count + " AppleDouble files found.");

  Object.keys(struct).forEach(function (subdir) {
    struct[subdir].forEach(function (filename) {
      fs.unlinkSync(filename);
    });

    watchDirectory(subdir, filter);
  });
};
