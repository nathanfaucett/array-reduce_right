var tape = require("tape"),
    arrayReduceRight = require("..");


tape("arrayReduceRight(array, callback[, initialValue]) applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value", function(assert) {
    assert.equals(
        arrayReduceRight([0, 1, 2, 3, 4], function(currentValue, value) {
            return currentValue + value;
        }),
        10
    );
    assert.end();
});
