const fs = require("fs");

const part1 = (fileName) => {
  const file = fs
    .readFileSync(__dirname + "/" + fileName)
    .toString("utf8")
    .split("\n");

  let state = { gamaRate: "", epsilonRate: "" };

  for (let columnIndex = 0; columnIndex < file[0].length; columnIndex++) {
    const column = file.map((row) => row[columnIndex]).join("");

    const gamaRate =
      Array.from(column.matchAll("1")).length > column.length / 2;

    state.gamaRate += Number(gamaRate);
    state.epsilonRate += Number(!gamaRate);
  }
  return parseInt(state.gamaRate, 2) * parseInt(state.epsilonRate, 2);
};

module.exports = { part1 };
