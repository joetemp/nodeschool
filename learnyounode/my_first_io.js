//This program basically outputs the number of lines in this file to the terminal. Nice.

var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

/*
var fs = require('fs');

var filename = process.argv[2]
var buf = fs.readFileSync(filename)
var str = buf.toString();
var count = str.split('\n').length

console.log(count - 1)
*/
