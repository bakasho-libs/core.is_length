// see: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer
var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

module.exports = isLength;

function isLength(value) {

    return ((typeof(value) === "number") &&
        (value > -1) &&
        (value % 1 === 0) &&
        (value <= MAX_SAFE_INTEGER));

}
