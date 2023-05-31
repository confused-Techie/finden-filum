// The const below serves as our lookup table for all lengths modules
const supports = {
  1: "./single_char_exts.js",
  2: "./double_char_exts.js",
  3: "./triple_char_exts.js",
  4: "./quadruple_char_exts.js",
  5: "./above_char_exts.js"
};

const supportAbove = 5;

/**
 * @function ff
 * @desc Returns information on the file type passed, based soley on the extension
 * of the file. By default returning it's category.
 * @param {string} value - The filename or path to inspect of the specific file.
 * @param {object} [opts] - Options to pass
 * @param {boolean} [opts.extension] - Returns the text of the extension only if true.
 * @param {boolean} [opts.full] - Returns the full object for the extension if true.
 */
module.exports = function (value, opts = {}) {

  let fileNameArray = value.split(".");
  let ext = fileNameArray[fileNameArray.length -1]; // will return the last instance of `.${text}`

  if (opts.extension) {
    return ext;
  }

  let idx;

  if (ext.length >= supportAbove) {
    idx = supportAbove;
  }
  // ensure we support this length
  if (!supports[ext.length]) {
    return undefined;
  } else {
    idx = ext.length;
  }

  // Now require the hash map based on length
  let extension = require(supports[idx]).get(ext);

  if (typeof extension === "undefined") {
    return undefined;
  }

  if (opts.full) {
    return extension;
  }


  return extension.category;
};
