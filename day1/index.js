const fs = require("fs");

const solve = (fileName) => {
  // __dirname - get the current directory of the current file.
  const file = fs
    .readFileSync(__dirname + "/" + fileName)
    .toString("utf8")
    .split("\n");

  return fileName;
};

module.exports = { solve };
