var isUndefined = require("@nathanfaucett/is_undefined");


module.exports = arrayReduceRight;


function arrayReduceRight(array, callback, initialValue) {
    var length = array.length,
        value = initialValue,
        i;

    if (isUndefined(value)) {
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
