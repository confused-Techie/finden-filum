/**
 * This script will take JSON content, and automatically inject it into the CSV as needed.
 * The JSON content should be an array of objects with the following keys:
 * - ext: The file extension
 * - desc: A description of the extension
 * - cat: The category of the extension
 */

const data = require("./rawfile.json");

const fs = require("fs");

const exts = fs.readFileSync("./src/exts.csv", { encoding: "utf8" }).split("\n");

const addOneDigit = (text) => {
  for (let i = 0; i < exts.length; i++) {
    if (exts[i+1].length > 1 && exts[i+1].split(",")[0].length > 1) {
      exts.splice(i, 0, text);
      return;
    }
  }
};

const addTwoDigit = (text) => {
  for (let i = 0; i < exts.length; i++) {
    if (exts[i+1].length > 1 && exts[i+1].split(",")[0].length > 2) {
      exts.splice(i, 0, text);
      return;
    }
  }
};

const addThreeDigit = (text) => {
  for (let i = 0; i < exts.length; i++) {
    if (exts[i+1].length > 1 && exts[i+1].split(",")[0].length > 3) {
      exts.splice(i, 0, text);
      return;
    }
  }
};

const addFourDigit = (text) => {
  for (let i = 0; i < exts.length; i++) {
    if (exts[i+1].length > 1 && exts[i+1].split(",")[0].length > 4) {
      exts.splice(i, 0, text);
      return;
    }
  }
};

const addMoreDigit = (text) => {
  exts.push(text);
};

const createText = (ext, desc, cat) => {
  return `${ext},${cat},${desc.replace(",","").replace(":","")}`;
};

// Now to loop through user data
for (let i = 0; i < data.length; i++) {
  let currentText = createText(data[i].ext, data[i].desc, data[i].cat)
  switch(data[i].ext.length) {
    case 1:
      addOneDigit(currentText);
      break;
    case 2:
      addTwoDigit(currentText);
      break;
    case 3:
      addThreeDigit(currentText);
      break;
    case 4:
      addFourDigit(currentText);
      break;
    default:
      addMoreDigit(currentText);
      break;
  }
}

fs.writeFileSync("./src/exts.csv", exts.join("\n"));
