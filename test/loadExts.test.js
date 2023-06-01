const { describe, it } = require("node:test");
const assert = require("node:assert");

const map = require("../src/loadExts.js")();
const CATEGORIES = ["source code", "version control", "text", "configuration", "definition"];

map.forEach((value, key) => {

  describe("ensure map is valid", () => {

    it("key is lowercase", () => {
      assert.strictEqual(key, key.toLowerCase());
    });

    it("category is valid", () => {
      assert.strictEqual(CATEGORIES.includes(value.category), true);
    });

  });

});
