
exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return Math.min(array);
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return Math.max(array);
}
};

exports.avg = function avg(array) {
    let sum = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    }
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return result = sum / array.length;
};
