"use strict";

var fs = require("fs");
var sweep = require("./sweep.js");

module.exports = function (dir) {
  sweep(dir);

  fs.watchFile(dir, function () {
    sweep(dir);
  });
};
