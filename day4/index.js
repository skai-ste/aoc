const { readInput } = require("../helpers");

const getTable = (line) => {
  let rows = line.split("\n");
  let table = [];
  for (let i = 0; i < rows.length; i++) {
    // trim cleans white space from begging and end of string
    let row = rows[i].trim().split(/\s+/); // splits string by multiple spaces /s - white space + operator which says it is one or more
    table.push(row);
  }
  return table;
};

const part1 = (fileName) => {
  const file = readInput(__dirname, fileName, "\n\n");

  const numbers = file[0].split(","); // getting Array of numbers to pass for tables

  const tables = [];
  for (let i = 1; i < file.length; i++) {
    tables.push(getTable(file[i]));
  }

  return 0;
};

module.exports = { part1 };
