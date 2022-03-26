const fs = require("fs");
const path = require("path");

const readInput = (directory, fileName) => {
  const file = fs
    .readFileSync(path.resolve(directory, fileName))
    .toString("utf8")
    .split("\n");

  return file;
};

module.exports = { readInput };
