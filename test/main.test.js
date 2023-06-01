const { describe, it } = require("node:test");
const assert = require("node:assert");

const ff = require("../src/main.js");

describe("works as expected", () => {

  it("is exported properly", () => {
    assert.strictEqual(typeof ff, "function");
    assert.strictEqual(typeof ff("hello.h").category, "string");
  });

  it("returns extension when asked", () => {
    assert.strictEqual(ff("hello.h", {extension:true}), "h");
    assert.strictEqual(ff(".hello", {extension:true}), "hello");
    assert.strictEqual(ff("he.l.o", {extension:true}), "o");
    assert.strictEqual(ff("hello.", {extension:true}), "");
  });

});
