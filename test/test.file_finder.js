var expect = require("chai").expect;

var findFiles = require("../lib/file_finder.js");

describe("finding files that match given patterns", function() {

  it("should find *.sweep files recursively", function() {
    var filter = function(filename) {
      return filename.match(/.*\.sweep/) !== null;
    };

    var expected = {
      "./test/fixtures/find_me": ["./test/fixtures/find_me/four.sweep"],
      "./test/fixtures/find_me/and_me": ["./test/fixtures/find_me/and_me/six.sweep"]
    };

    var struct = {};
    findFiles("./test/fixtures/find_me", filter, struct);
    expect(struct).to.eql(expected);
  });

  it("should find *.png files recursively", function() {
    var filter = function(filename) {
      return filename.match(/.*\.png/) !== null;
    };

    var expected = {
      "./test/fixtures/find_me": ["./test/fixtures/find_me/three.png"],
      "./test/fixtures/find_me/and_me": []
    };

    var struct = {};
    findFiles("./test/fixtures/find_me", filter, struct);

    expect(struct).to.eql(expected);
  });
});
