var fs = require("fs");

module.exports = function(path) {
  fs.mkdir(path, function(err) {
    if(err) throw err;
  });
}
