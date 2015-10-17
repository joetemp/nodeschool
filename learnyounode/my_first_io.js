var fs = require('fs')                               		// This imports the fs lib.

var contents = fs.readFileSync(process.argv[2])     		// This declares a var called 'contents' and puts in it the third arg given to this program by calling the readFileSync module within the fs lib. 
var lines = contents.toString().split('\n').length - 1		// This takes 'contents' and weeds out all the new line chars, then counts them and subtracts one... since there is always one additional \n

console.log(lines)                                    		// This obviously just logs the count of lines in the file.
