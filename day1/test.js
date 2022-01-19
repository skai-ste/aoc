const test = require("ava");

const { something } = require("./"); //require something in current directory

test("checks example", (t) => {
  t.is(something(3), 3);
  // t.pass(); //test is passing
});

// test("bar", async (t) => {
//   const bar = Promise.resolve("bar");
//   t.is(await bar, "bar"); //bar === bar
// });
