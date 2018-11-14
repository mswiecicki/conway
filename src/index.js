const { runGameOfLife } = require('./engine.js');

let generations = 3;
let initial = [ [2, 1], [2, 2], [2, 3] ];

console.dir(runGameOfLife(initial, generations));

console.log(`The script uses approximately ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3)} MB`);
