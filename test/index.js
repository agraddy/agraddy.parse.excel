var tap = require('agraddy.test.tap')(__filename);
var fs = require('fs');
var path = require('path');

var mod = require('../');

var actual;
var expected;

process.chdir('test');

// Simple excel file
actual = mod(getJSON('basic.json').data);
expected = getJSON('basic.json').expected;
console.log('actual');
console.log(actual);
console.log('expected');
console.log(expected);
tap.assert.deepEqual(actual, expected, 'Should be equal.');


function getJSON(input) {
	return require('./fixtures/' + input);
}

