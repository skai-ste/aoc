const { readInput } = require("../helpers");

const part1 = (fileName) => {
  const file = readInput(__dirname, fileName).map((item) => parseInt(item));

  let count = 0;
  for (let i = 1; i < file.length; i++) {
    let measurement = file[i];
    let prevMeasurement = file[i - 1];
    if (measurement > prevMeasurement) {
      count += 1;
    }
  }
  return count;
};

const part2 = (fileName) => {
  const file = readInput(__dirname, fileName).map((item) => parseInt(item));

  let count = 0;
  for (let i = 0; i < file.length - 3; i++) {
    let measurement = file[i + 1] + file[i + 2] + file[i + 3];
    let prevMeasurement = file[i] + file[i + 1] + file[i + 2];
    if (measurement > prevMeasurement) {
      count += 1;
    }
  }
  return count;
};

module.exports = { part1, part2 };
