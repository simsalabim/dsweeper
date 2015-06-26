"use strict";

var fs = require("fs");

module.exports = function (dir, filterFn) {
  return fs.watch(dir, function (event, filename) {
    var fullPath = dir + "/" + filename;
    console.log("fullpath " + fullPath);

    if (event === "rename" && filterFn(filename) && fs.existsSync(fullPath)) {
      console.log("Deleteing " + fullPath);

      fs.unlinkSync(fullPath);
    }
  });
};
