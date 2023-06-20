module.exports = function() {
  const fs = require("fs");
  const extsRaw = fs.readFileSync(`${__dirname}/src/exts.csv`, { encoding: "utf8" });
  let extsArray = extsRaw.split("\n");

  let map = new Map();

  for (let i = 0; i < extsArray.length; i++) {
    let cols = extsArray[i].split(",");

    if (cols.length < 2) {
      continue;
    }

    map.set(cols[0].trim(), {
      category: cols[1].trim(),
      ...(typeof cols[2] === "string" && { origin: cols[2].trim() } ),
      ...(typeof cols[3] === "string" && { resourceURL: cols[3].trim() } ),
      ...(typeof cols[4] === "string" && { description: cols[4].trim() } )
    });

  }
  return map;
};
