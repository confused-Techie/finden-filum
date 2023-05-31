const fs = require("fs");
const exts = require("./loadExts.js");

module.exports = function (value, opts = {}) {
  let fileNameArray = value.split(".");
  let ext = fileNameArray[fileNameArray.length -1];

  if (opts.extension) {
    return ext;
  }

  let extension = exts.get(ext);

  if (typeof extension === "undefined") {
    return undefined;
  }

  if (opts.full) {
    return extension;
  }

  return extension.category;
}
