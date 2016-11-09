var inputs = process.argv.slice(2);
var result = inputs.map(input => input[0])
                    .reduce((string, char) => string + char);
console.log(`[${process.argv.slice(2)}] becomes "${result}"`);
