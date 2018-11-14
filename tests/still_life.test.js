const { runGeneration } = require('../src/engine');

test("'Block' pattern does not change between generations", async () => {
  const block = [
    [1,1], [2,1],
    [1,2], [2,2]
  ];

  const result = runGeneration(block);

  expect(result).toEqual(expect.arrayContaining(block));
});

test("'Beehive' pattern does not change between generations", async () => {
  const beehive = [
          [2,1], [3,1],
    [1,2],              [4,2],
          [2,3], [3,3]
  ];

  const result = runGeneration(beehive);

  expect(result).toEqual(expect.arrayContaining(beehive));
});

test("'Loaf' pattern does not change between generations", async () => {
  const loaf = [
          [2,1], [3,1],
    [1,2],              [4,2],
          [2,3],        [4,3],
                 [3,4]
  ];

  const result = runGeneration(loaf);

  expect(result).toEqual(expect.arrayContaining(loaf));
});

test("'Boat' pattern does not change between generations", async () => {
  const boat = [
    [1,1], [2,1],
    [1,2],        [3,2],
           [2,3],
  ];

  const result = runGeneration(boat);

  expect(result).toEqual(expect.arrayContaining(boat));
});

test("'Tub' pattern does not change between generations", async () => {
  const tub = [
           [2,1],
    [1,2],        [3,2],
           [2,3]
  ];

  const result = runGeneration(tub);

  expect(result).toEqual(expect.arrayContaining(tub));
});
