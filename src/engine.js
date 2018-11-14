const {
  appendNeighbours,
  encodeCoords,
  decodeCoords,
  incrementValue,
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
      if (liveNeighbours === 3) newborns.add(encodedCoords);
      return newborns;
    }, new Set());

const determineSurvivors = (prevGen, coordsMap) =>
  prevGen
    .reduce((survivors, coords) => {
      const encoded = encodeCoords(coords);
      if (coordsMap[encoded] === 3 || coordsMap[encoded] === 4) survivors.add(encoded);
      return survivors;
    }, new Set());

const mergeSets = (s1, s2) => {
  s2.forEach(value => s1.add(value));
  return s1;
};

const runGeneration = prevGen => {
  const coordsMap = generateCoordsMap(prevGen);
  const newborns = generateNewborns(coordsMap);
  const survivors = determineSurvivors(prevGen, coordsMap);
  return Array.from(mergeSets(survivors, newborns)).map(decodeCoords);
};

const runGameOfLife = (initialState, generations) => {
  let currentGen = initialState;
  while (generations--) {
    currentGen = runGeneration(currentGen);
  }

  return currentGen;
};

module.exports = {
  runGameOfLife,
  runGeneration,
};
