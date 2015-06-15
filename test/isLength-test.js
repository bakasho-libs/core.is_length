var test = require("tape"),
    isLength = require("../src/index");

test("isLength", function(t) {

    var zero = 0,
        negNum = -100,
        n1 = 1000000;

    t.equal(isLength(zero), true, "zero returns true");
    t.equal(isLength(n1), true, "positive integers return true");

    t.equal(isLength(negNum), false, "negative integers return false");
    t.equal(isLength(Math.pow(2, 53)), false, "returns false for integers exceeding MAX_SAFE_INTEGER");

    t.equal(isLength(undefined), false, "undefined returns false");
    t.equal(isLength(null), false, "null returns false");
    t.equal(isLength(NaN), false, "NaN returns false");
    t.equal(isLength(true), false, "boolean returns false");
    t.equal(isLength("string"), false, "string returns false");
    t.equal(isLength(/re/), false, "regexp returns false");
    t.equal(isLength([]), false, "array returns false");
    t.equal(isLength({}), false, "object returns false");
    t.equal(isLength(function() {}), false, "function returns false");

    t.end();

});
