const { describe, it } = require("node:test");
const assert = require("node:assert");

const map = require("../src/loadExts.js")();
const CATEGORIES = [
  "source code", "version control", "text", "configuration", "definition",
  "script", "data", "template", "archive", "na"
];

let repeatCache = [];

map.forEach((value, key) => {

  describe("ensure map is valid", () => {

    it("category is valid", () => {
      assert.strictEqual(CATEGORIES.includes(value.category), true);
    });

    it("has no repeating keys", () => {
      assert.strictEqual(repeatCache.includes(key), false);

      repeatCache.push(key);
    });

  });

});
