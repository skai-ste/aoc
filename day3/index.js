const fs = require("fs");

const part1 = (fileName) => {
  const file = fs
    .readFileSync(__dirname + "/" + fileName)
    .toString("utf8")
    .split("\n");

  let grid = [];

  for (let columnIndex = 0; columnIndex < file[0].length; columnIndex++) {
    let column = [];
    for (let rowIndex = 0; rowIndex < file.length; rowIndex++) {
      let line = file[rowIndex];
      let digit = line[columnIndex];
      column.push(digit);
    }
    grid.push(column);
  }

  let gamaRate = [];
  let epsilonRate = [];

  for (let i = 0; i < grid.length; i++) {
    let column = grid[i];
    let one = 0;
    let zero = 0;
    for (let j = 0; j < column.length; j++) {
      if (Number(column[j]) === 0) {
        zero += 1;
      }
      if (Number(column[j]) === 1) {
        one += 1;
      }
    }
    if (one > zero) {
      gamaRate.push("1");
      epsilonRate.push("0");
    } else {
      gamaRate.push("0");
      epsilonRate.push("1");
    }
  }

  return parseInt(gamaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2);
};

module.exports = { part1 };
