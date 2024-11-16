const _ = require('lodash')
const first = array=>array[0];
const reverse = array=>array.reverse();
const toUpper = str=>str.toUpperCase();
const result = _.flowRight(toUpper,first,reverse)
console.log(result(['apple','orange','banana']));