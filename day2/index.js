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
    console.log("operation", operation);
    value = Number(value);

    if (operation === "forward") position += value;
    if (operation === "down") depth += value;
    if (operation === "up") depth -= value;
  }
  return position * depth;
};

module.exports = { part1 };
