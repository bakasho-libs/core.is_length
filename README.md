[![Build Status](https://travis-ci.org/bakasho-libs/core.is_length.svg?branch=master)](https://travis-ci.org/bakasho-libs/core.is_length)

## core.is_length

Return a boolean indicating if a value is a valid length property value

```javascript

var isLength = require("core.is_length");

x = [];

isLength(x.length); // returns true
isLength(-4); // returns false
isLength(null); // returns false

```
