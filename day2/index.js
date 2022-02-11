const fs = require("fs");

const part1 = (fileName) => {
  const file = fs
    .readFileSync(__dirname + "/" + fileName)
    .toString("utf8")
    .split("\n"); //split by lines

  let position = 0;
  let depth = 0;

  for (let i = 0; i < file.length; i++) {
    let [operation, value] = file[i].split(" ");
    value = Number(value);

    if (operation === "forward") position += value;
    if (operation === "down") depth += value;
    if (operation === "up") depth -= value;
  }
  return position * depth;
};

const part2 = (fileName) => {
  const file = fs
    .readFileSync(__dirname + "/" + fileName)
    .toString("utf8")
    .split("\n"); //split by lines

  let position = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < file.length; i++) {
    let [operation, value] = file[i].split(" ");
    value = Number(value);

    if (operation === "forward") {
      position += value;
      depth += aim * value;
    }
    if (operation === "down") aim += value;
    if (operation === "up") aim -= value;
  }
  return position * depth;
};

module.exports = { part1, part2 };
