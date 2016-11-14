
var stuff = process.argv.slice(2);
var min = Math.min(...stuff);


console.log(`The minimum of [${stuff}] is ${min}`);
