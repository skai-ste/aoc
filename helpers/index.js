const fs = require("fs");
const path = require("path");

const readInput = (directory, fileName, splitBy = "\n") => {
  const file = fs
    .readFileSync(path.resolve(directory, fileName))
    .toString("utf8")
    .split(splitBy);

  return file;
};

module.exports = { readInput };
