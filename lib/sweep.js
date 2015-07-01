"use strict";

var fs = require("fs");
var findFiles = require("./file_finder.js");

module.exports = function (dir, filterFn) {
  var struct = {};
  findFiles(dir, filterFn, struct);

  Object.keys(struct).forEach(function (subdir) {
    struct[subdir].forEach(function (filename) {
      fs.exists(filename, function (exists) {
        if (exists) {
          fs.unlink(filename, function (error) {
            console.error("An error occurred: " + error);
          });
        }
      });
    });
  });
};
