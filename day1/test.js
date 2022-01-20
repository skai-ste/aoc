const test = require("ava");

const { solve } = require("./"); // require something in current directory

test("checks example", (t) => {
  t.is(solve("test-input.txt"), 7);
});

test("checks full data", (t) => {
  t.is(solve("input.txt"), 1581);
});
