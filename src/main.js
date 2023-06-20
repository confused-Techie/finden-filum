const exts = require("./loadExts.js")();
const ExtObj = require("./extObj.js");

/**
 * @function ff
 * @desc Returns information on the file type passed, based soley on the extension
 * of the file. By default returning it's category.
 * @param {string} value - The filename or path to inspect of the specific file.
 * @param {object} [opts] - Options to pass
 * @param {boolean} [opts.extension] - Returns the text of the extension only if true.
 * @param {boolean} [opts.map] - Returns the full hashmap for every known extension if true.
 */
module.exports = function (value, opts = {}) {
  let fileNameArray = value.split(".");
  let ext = fileNameArray[fileNameArray.length -1];

  if (opts.extension) {
    return ext;
  }

  if (opts.map) {
    return exts;
  }

  let extension = exts.get(ext);

  if (typeof extension === "undefined") {
    return undefined;
  }

  return new ExtObj(extension, ext);
}
