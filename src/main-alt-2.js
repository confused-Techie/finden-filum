const extLoader = require("./loadExts2.js");

module.exports = function (value, opts = {}) {
  let fileNameArray = value.split(".");
  let ext = fileNameArray[fileNameArray.length -1];

  if (opts.extension) {
    return ext;
  }

  let extension = extLoader.get(ext);

  if (typeof extension === "undefined") {
    return undefined;
  }

  if (opts.full) {
    return extension;
  }

  return extension.category;
}
