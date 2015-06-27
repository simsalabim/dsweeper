"use strict";

var fs = require("fs");

module.exports = function findFiles(dir, filterFn, struct) {
  if (!fs.existsSync(dir)) {
    return;
  }

  var files = fs.readdirSync(dir);

  var candidates = files.filter(filterFn)
    .map(function (filename) {
      return dir + "/" + filename;
    });

  struct[dir] = [];
  candidates.forEach(function (filename) {
    struct[dir].push(filename);
  });

  var subdirs = files.filter(function (filename) {
    return fs.statSync(dir + "/" + filename).isDirectory();
  }).map(function (subdir) {
    return dir + "/" + subdir;
  });

  subdirs.forEach(function (subdir) {
    findFiles(subdir, filterFn, struct);
  });

  return struct;
};
