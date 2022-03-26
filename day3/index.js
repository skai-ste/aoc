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

const mostCommonValue = (column) => {
  const numberOfOnes = Array.from(column.matchAll("1")).length; //returns how many 1ns
  return numberOfOnes >= column.length / 2 ? "1" : "0";
};

const leastCommonValue = (column) => {
  return mostCommonValue(column) === "0" ? "1" : "0";
};

const getRating = (rating, columnIndex, isOxygen) => {
  const column = rating.map((row) => row[columnIndex]).join("");
  let common;

  if (isOxygen) {
    common = leastCommonValue(column);
  } else {
    common = mostCommonValue(column);
  }

  if (rating.length > 1) {
    rating = rating.filter((number) => number[columnIndex] === common);
  }

  return rating;
};

const part2 = (fileName) => {
  const file = readInput(__dirname, fileName);

  let oxygenGeneratorRating = Array.from(file);
  let co2ScrubberRating = Array.from(file);

  for (let columnIndex = 0; columnIndex < file[0].length; columnIndex++) {
    oxygenGeneratorRating = getRating(oxygenGeneratorRating, columnIndex, true);
    co2ScrubberRating = getRating(co2ScrubberRating, columnIndex, false);
  }

  return (
    parseInt(oxygenGeneratorRating[0], 2) * parseInt(co2ScrubberRating[0], 2)
  );
};
module.exports = { part1, part2 };
