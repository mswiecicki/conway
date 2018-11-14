const {
  appendNeighbours,
  encodeCoords,
  decodeCoords,
  incrementValue,
  removeDuplicates,
} = require('./utils.js');

const generateCoordsMap = prevGen => {
  const coordsMap = {};
  prevGen.forEach(cellCoords =>
    appendNeighbours(cellCoords)
      .forEach(coords =>
        incrementValue(coordsMap, encodeCoords(coords))
      )
  );
  return coordsMap;
};

const generateNewborns = coordsMap =>
  Object.entries(coordsMap)
    .reduce((newborns, [encodedCoords, liveNeighbours]) => {
      if (liveNeighbours === 3) newborns.push(decodeCoords(encodedCoords));
      return newborns;
    }, []);

const determineSurvivors = (prevGen, coordsMap) =>
  prevGen
    .reduce((survivors, coords) => {
      const liveNeighbours = coordsMap[encodeCoords(coords)];
      if (liveNeighbours === 3 || liveNeighbours === 4) survivors.push(coords);
      return survivors;
    }, []);

const removeDuplicateCells = cells =>
  removeDuplicates(cells.map(encodeCoords)).map(decodeCoords);

const runGeneration = prevGen => {
  const coordsMap = generateCoordsMap(prevGen);
  const newborns = generateNewborns(coordsMap);
  const survivors = determineSurvivors(prevGen, coordsMap);
  return removeDuplicateCells([...newborns, ...survivors]);
};

const gen0 = [ [2, 1], [2, 2], [2, 3] ];
const gen1 = runGeneration(gen0);
const gen2 = runGeneration(gen1);
const gen3 = runGeneration(gen2);
const gen4 = runGeneration(gen3);
const gen5 = runGeneration(gen4);

console.dir(gen0);
console.dir(gen1);
console.dir(gen2);
console.dir(gen3);
console.dir(gen4);
console.dir(gen5);

console.log(`The script uses approximately ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3)} MB`);
