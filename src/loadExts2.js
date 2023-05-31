const fs = require("fs");

function get(ext) {

  let fd = fs.openSync("./src/exts.csv", "r");
  const bufferSize = 1024;
  let buffer = new Buffer(bufferSize);

  let leftOver = "";
  let read, line, idxStart, idx, returnObj;

  while((read = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
    leftOver += buffer.toString("utf8", 0, read);
    idxStart = 0;
    while ((idx = leftOver.indexOf("\n", idxStart)) !== -1) {
      line = leftOver.substring(idxStart, idx);

      let cols = line.split(",");
      if (cols.length > 3 && cols[0].trim() === ext) {
        returnObj =  {
          category: cols[1].trim(),
          origin: cols[2].trim()
        };
        break;
      }

      idxStart = idx + 1;
    }
    leftOver = leftOver.substring(idxStart);
  }
}

module.exports = { get };
