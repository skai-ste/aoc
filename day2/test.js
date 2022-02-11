const test = require("ava");

const { part1, part2 } = require("."); // require something in current directory

test("checks example part1", (t) => {
  t.is(part1("test-input.txt"), 150);
});

test("checks full data part1", (t) => {
  t.is(part1("input.txt"), 1893605);
});

test("checks example part2", (t) => {
  t.is(part2("test-input.txt"), 900);
});

test("checks full data part2", (t) => {
  t.is(part2("input.txt"), 2120734350);
});
