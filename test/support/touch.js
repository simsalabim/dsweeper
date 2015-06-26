var fs = require("fs");

module.exports = function(path) {
  fs.writeFile(path, "", function(err) {
    if(err) throw err
  });
}
