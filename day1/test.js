const test = require("ava");

const { part1, part2 } = require("./"); // require something in current directory

test("checks example part1", (t) => {
  t.is(part1("test-input.txt"), 7);
});

test("checks full data part1", (t) => {
  t.is(part1("input.txt"), 1581);
});

test("checks example part2", (t) => {
  t.is(part2("test-input.txt"), 5);
});

test("checks full data part2", (t) => {
  t.is(part2("input.txt"), 1618);
});
