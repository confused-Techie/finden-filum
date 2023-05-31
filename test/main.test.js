const { describe, it } = require("node:test");
const assert = require("node:assert");

const ff = require("../src/main.js");

describe("works as export", () => {
  it("ff", () => {

    assert.strictEqual(typeof ff, "function");
    assert.strictEqual(ff("hello.h"), "source code");

  });
});
