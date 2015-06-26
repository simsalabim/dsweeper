var fs = require("fs");

module.exports = function(path) {
  fs.rmdir(path, function(err) {
    if(err) throw err;
  });
}
