
module.exports = function average(...value) {
    let sum = 0;
    value.forEach(item => {sum += item});

    return sum/value.length;
};
