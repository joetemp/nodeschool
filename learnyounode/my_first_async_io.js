var fs = require('fs')												// This imports the fs lib.

var file = process.argv[2]											/* This declares a variable called 'file' that holds the third 
																	   arg given to this program.*/

fs.readFile(file, function (err, contents) {						/* This calls the readFile module within the fs lib. It give it a 
																	   file for its first arg, and a newly created callback function 
																	   as its second arg. The callback function takes two args, like 
																	   all callback functions. Provided there is not an error, readFile 
																	   will CALL BACK with the contents of the file and they will be 
																	   routed into the var. */
	// fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1			/* This takes what readFile routed to 'contents' and turns it into a string. 
																	   Then weeds out all the newlines, counts them and subtracts one. */

	console.log(lines)												// This prints it all to the console.
})

