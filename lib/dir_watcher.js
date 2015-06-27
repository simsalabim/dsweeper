"use strict";

var chokidar = require("chokidar");
var sweep = require("./sweep.js");

module.exports = function (dir, filterFn) {
  chokidar.watch(dir).on("add", function () {
    sweep(dir, filterFn);
  }).on("change", function () {
    sweep(dir, filterFn);
  });
};
