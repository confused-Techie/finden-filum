const { describe, it } = require("node:test");
const assert = require("node:assert");

const mapDef = [
  {
    file: "../src/single_char_exts.js",
    keyLength: 1
  },
  {
    file: "../src/triple_char_exts.js",
    keyLength: 3
  }
];

mapDef.forEach((element) => {

  let map = require(element.file);

  describe("ensure all values are valid", () => {

    it("all keys within map are lowercase", () => {

      map.forEach((value, key) => {
        assert.strictEqual(key.length, element.keyLength);
      });
    });

    it("all object values are expected", () => {

      map.forEach((value, key) => {
        assert.strictEqual(typeof value.category, "string");
        assert.strictEqual(value.category.length > 0, true);
      });

    });

  });

});
