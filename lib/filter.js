"use strict";

module.exports = function (filename) {
  return filename.match(/\w*\._\w*/) !== null;
};
