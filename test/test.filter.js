var expect = require("chai").expect;

var filter = require("../lib/filter.js");

describe("filtering function", function() {
  it("should detect AppleDouble files correctly", function() {
    expect(filter("._whatever")).to.be.true
    expect(filter("._whatever.png")).to.be.true
    expect(filter("named._whatever.png")).to.be.true
    expect(filter("(named this way)._whatever.png")).to.be.true

    expect(filter("(named this way).whatever")).to.be.false
    expect(filter(".whatever")).to.be.false
  });
});
