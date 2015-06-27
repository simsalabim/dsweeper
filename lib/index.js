"use strict";

var chokidar = require("chokidar");
var filterFn  = require("./filter.js");
var sweep = require("./sweep.js");

module.exports = function (dir) {
  chokidar.watch(dir).on("add", function () {
    sweep(dir, filterFn);
  }).on("change", function () {
    sweep(dir, filterFn);
  });
};
