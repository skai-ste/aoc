const fs = require("fs");

const solve = (fileName) => {
  // __dirname - get the current directory of the current file.
  const file = fs
    .readFileSync(__dirname + "/" + fileName)
    .toString("utf8")
    .split("\n");

  let count = 0;
  for (let i = 1; i < file.length; i++) {
    let measurement = parseInt(file[i]);
    let prevMeasurement = parseInt(file[i - 1]);
    if (measurement > prevMeasurement) {
      count += 1;
    }
  }
  return count;
};

module.exports = { solve };
