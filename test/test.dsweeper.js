var expect = require("chai").expect;
var exec = require("child_process").exec;

var touch = require("./support/touch");
var mkdir = require("./support/mkdir");
var rmdir = require("./support/rmdir");

var filter = require("../lib/filter.js");
var findFiles = require("../lib/file_finder.js");

var path = __dirname + "/fixtures/sweep_me";

describe("Dsweeper", function() {
  before(function(done) {
    exec("bin/dsweeper -d -p " + path, function(error, stdout, stderr) {});

    touch(path + "/._one");
    touch(path + "/t._wo");
    touch(path + "/and_me/th._ree");
    mkdir(path + "/second");
    touch(path + "/second/w._orld");

    setTimeout(function() {
      done();
    }, 1800);
  });

  after(function(done) {
    exec("kill `pgrep -f dsweeper`", function(err, stdout, stderr){});
    rmdir(path + "/second");
    done();
  });

  it("should not let garbage in", function() {
    var struct =  {};
    findFiles(path, filter, struct);

    var badFilesCount = 0;
    Object.keys(struct).forEach(function(subdir) {
      badFilesCount += struct[subdir].length;
    });

    expect(badFilesCount).to.equal(0);
  });
});
