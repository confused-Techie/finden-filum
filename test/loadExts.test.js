const { describe, it } = require("node:test");
const assert = require("node:assert");

const map = require("../src/loadExts.js")();
const CATEGORIES = [
  "media", "text", "executable", "archive",
  "video", "audio", "image", "source code", "data", "office", "configure",
  "version control", "template",
  "script"
];

let repeatCache = [];

map.forEach((value, key) => {

  describe("ensure map is valid", () => {

    it("category is valid", () => {
      let cats = value.category.split(":");

      for (let i = 0; i < cats.length; i++) {
        try {
          assert.strictEqual(CATEGORIES.includes(cats[i]), true);
        } catch(err) {
          console.error(`Expected: ${cats[i]} to be within Categories`);
          throw err;
        }
      }
    });

    it("has no repeating keys", () => {
      assert.strictEqual(repeatCache.includes(key), false);

      repeatCache.push(key);
    });

  });

});
