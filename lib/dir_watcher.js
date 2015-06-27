"use strict";

var fs = require("fs");

module.exports = function (dir, filterFn) {
  return fs.watch(dir, function (event, filename) {
    var fullPath = dir + "/" + filename;

    if (event === "rename" && filterFn(filename) && fs.existsSync(fullPath)) {
      console.log("Deleting " + fullPath);

      fs.unlinkSync(fullPath);
    }
  });
};
