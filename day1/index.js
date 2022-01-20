const fs = require("fs");

const part1 = (fileName) => {
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

const part2 = (fileName) => {
  const file = fs
    .readFileSync(__dirname + "/" + fileName)
    .toString("utf8")
    .split("\n");

  let count = 0;
  for (let i = 0; i < file.length - 3; i++) {
    let measurement =
      parseInt(file[i + 1]) + parseInt(file[i + 2]) + parseInt(file[i + 3]);
    let prevMeasurement =
      parseInt(file[i]) + parseInt(file[i + 1]) + parseInt(file[i + 2]);
    if (measurement > prevMeasurement) {
      count += 1;
    }
  }
  return count;
};

module.exports = { part1, part2 };
