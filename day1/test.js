const test = require("ava");

const { solve } = require("./"); //require something in current directory

test("checks example", (t) => {
  t.is(solve("test-input.txt"), 7);
  // t.pass(); //test is passing
});

// test("bar", async (t) => {
//   const bar = Promise.resolve("bar");
//   t.is(await bar, "bar"); //bar === bar
// });
