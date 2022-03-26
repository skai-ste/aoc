const { readInput } = require("../helpers");

const part1 = (fileName) => {
  const file = readInput(__dirname, fileName);

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
