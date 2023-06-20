const { describe, it } = require("node:test");
const assert = require("node:assert");

const ff = require("../src/main.js");
const extObj = require("../src/extObj.js");

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

  it("returns a valid extObj", () => {
    let ext = ff("hello.h");

    assert.strictEqual(ext instanceof extObj, true);
    assert.strictEqual(typeof ext.contains === "function", true);
    assert.strictEqual(typeof ext.getCategories === "function", true);
    assert.strictEqual(typeof ext.getFull === "function", true);
    assert.strictEqual(typeof ext.toString === "function", true);
    assert.strictEqual(typeof ext.extension === "string", true);
  });

});
