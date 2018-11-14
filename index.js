const encodeCoords = ([x, y]) => `${x}#${y}`;
const decodeCoords = coords => coords.split('#').map(v => Number(v));
const neighbours = ([x, y]) => [
  [x-1, y+1], [x, y+1], [x+1, y+1],
  [x-1, y],             [x+1, y],
  [x-1, y-1], [x, y-1], [x+1, y-1],
];
const incrementValue = (obj, key) => obj[key] = obj[key] ? obj[key] + 1 : 1;
const removeDuplicates = arr => Array.from(new Set(arr));

const mapLiveCells = prevGen => {
  const coordsMap = {};
  prevGen
    .map(encodeCoords)
    .forEach(coords => {
      coordsMap[coords] = 1;
    });
  return coordsMap;
};

const mapNeighbours = (liveCells, currentCoordsMap) => {
  const coordsMap = {...currentCoordsMap};
  liveCells
    .map(neighbours)
    .forEach(neighboursCoords =>
      neighboursCoords
        .map(encodeCoords)
        .forEach(coords => incrementValue(coordsMap, coords))
    );
  return coordsMap;
};

const generateNewborns = coordsMap =>
  Object.entries(coordsMap)
    .filter(([k, v]) => v === 3)
    .map(([key]) => decodeCoords(key));

const determineSurvivors = (liveCells, coordsMap) =>
  liveCells
    .map(encodeCoords)
    .filter(coords => coordsMap[coords] === 3 || coordsMap[coords] === 4)
    .map(decodeCoords);

const removeDuplicateCells = cells =>
  removeDuplicates(cells.map(encodeCoords)).map(decodeCoords);

const runGeneration = prevGen => {
  const liveCellsCoordsMap = mapLiveCells(prevGen);
  const completeCoordsMap = mapNeighbours(prevGen, liveCellsCoordsMap);
  const newborns = generateNewborns(completeCoordsMap);
  const survivors = determineSurvivors(prevGen, completeCoordsMap);
  return removeDuplicateCells([...newborns, ...survivors]);
};

const gen0 = [ [1,1], [2, 1], [2, 2], [1, 2] ];
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
