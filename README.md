array-reduce_right
=======

applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.


```javascript
var arrayReduceRight = require("@nathanfaucett/array-reduce_right");


arrayReduceRight([0, 1, 2, 3, 4], function(currentValue, value) {
    return currentValue + value;
}) === 10;
```
