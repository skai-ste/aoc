const fs = require('fs')

const file = fs.readFileSync('input.txt').toString('utf8');
console.log("file", file)

let horizontal = 0;
let depth = 0;

