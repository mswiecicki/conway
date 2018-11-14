const encodeCoords = ([x, y]) => `${x}#${y}`;
const decodeCoords = coords => coords.split('#').map(v => Number(v));
const appendNeighbours = ([x, y]) => [
  [x-1, y+1], [x, y+1], [x+1, y+1],
  [x-1, y],   [x, y],   [x+1, y],
  [x-1, y-1], [x, y-1], [x+1, y-1],
];
const incrementValue = (obj, key) => obj[key] = obj[key] ? obj[key] + 1 : 1;

module.exports = {
  appendNeighbours,
  encodeCoords,
  decodeCoords,
  incrementValue,
};
