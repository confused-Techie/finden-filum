const fs = require("fs");

let extsRaw = fs.readFileSync("./src/exts.csv", { encoding: "utf8" });

let extsArray = extsRaw.split("\n");

let map = new Map();

for (let i = 0; i < extsArray.length; i++) {
  let cols = extsArray[i].split(",");

  if (cols.length < 3) {
    continue;
  }
  map.set(cols[0].trim(), {
    category: cols[1].trim(),
    origin: cols[2].trim()
  });
}

//return map;

module.exports = map;
