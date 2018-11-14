const { runGameOfLife } = require('../src/engine');

test("'Blinker' pattern returns to initial state after 2 generations", async () => {
  const blinker = [
    [1,1], [2,1], [3,1]
  ];

  const result = runGameOfLife(blinker, 2);

  expect(result).toEqual(expect.arrayContaining(blinker));
});
