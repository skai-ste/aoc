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

const markNumber = (number, table) => {
  for (let i = 0; i < table.length; i++) {
    let row = table[i];

    for (let j = 0; j < row.length; j++) {
      if (number === row[j]) {
        row[j] = "x";
      }
    }
  }
  return table;
};

const checkTableRows = (table) => {
  // return true if one of the rows is filled with true values
  for (let i = 0; i < table.length; i++) {
    let row = table[i];
    let count = 0;
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "x") {
        count += 1;
      }
    }
    if (count === row.length) {
      return true;
    }
  }
  return false;
};

const checkTableColumns = (table) => {
  // return true if one of the columns is filled with true values
  for (let i = 0; i < table[0].length; i++) {
    let column = table.map((row) => row[i]);
    let count = 0;
    for (let j = 0; j < column.length; j++) {
      if (column[j] === "x") {
        count += 1;
      }
    }
    if (count === column.length) {
      return true;
    }
  }
  return false;
};

const sumUnmarkedNumbers = (table) => {
  let sum = 0;
  for (let i = 0; i < table.length; i++) {
    let row = table[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] !== "x") {
        sum += Number(row[j]);
      }
    }
  }
  return sum;
};

const part1 = (fileName) => {
  const file = readInput(__dirname, fileName, "\n\n");

  const numbers = file[0].split(","); // getting Array of numbers to pass for tables

  const tables = [];
  for (let i = 1; i < file.length; i++) {
    tables.push(getTable(file[i]));
  }

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    for (let j = 0; j < tables.length; j++) {
      let table = tables[j];
      markNumber(number, table);
      if (checkTableRows(table) || checkTableColumns(table)) {
        const sum = sumUnmarkedNumbers(table);
        return sum * number;
      }
    }
  }
  return;
};

module.exports = { part1 };
