module.exports = arrayReduceRight;


function arrayReduceRight(array, callback, initialValue) {
    var length = array.length,
        value = initialValue,
        i;

    if (value === undefined) {
        i = length - 1;
        value = array[i];
    } else {
        i = length;
    }

    while (i--) {
        value = callback(value, array[i], i, array);
    }

    return value;
}
