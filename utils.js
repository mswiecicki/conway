const encodeCoords = ([x, y]) => `${x}#${y}`;
const decodeCoords = coords => coords.split('#').map(v => Number(v));
const neighbours = ([x, y]) => [
  [x-1, y+1], [x, y+1], [x+1, y+1],
  [x-1, y],             [x+1, y],
  [x-1, y-1], [x, y-1], [x+1, y-1],
];
const incrementValue = (obj, key) => obj[key] = obj[key] ? obj[key] + 1 : 1;
const removeDuplicates = arr => Array.from(new Set(arr));

module.exports = {
  encodeCoords,
  decodeCoords,
  incrementValue,
  neighbours,
  removeDuplicates,
};
