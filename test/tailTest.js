const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


// Test code
const words = ['test', 'blah', 'foo'];
assertArraysEqual(tail(words),['blah', 'foo']);

const nestedNumbers = [1,5,6,[5,6,7],22];
assertArraysEqual(tail(nestedNumbers),[5,6,[5,6,7],22]);

const numbers = [1,5,6,22,100];
assertArraysEqual(tail(numbers),[5,6,22,100]);
