var fs = require('fs')                                              // 1
var file = process.argv[2]                                          // 2

fs.readFile(file, function (err, contents) {                        // 3 
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1          // 4 
	console.log(lines)                                          // 5 
})

// Notes

// 1. This imports the fs lib.
// 2. This declares a variable called 'file' that holds the third arg given to this program.
/* 3. This calls the readFile module within the fs lib. It give it a file for its first arg, and a newly created callback function as its 
      second arg. The callback function takes two args, like all callback functions. Provided there is not an error, readFile will CALL BACK 
	  with the contents of the file and they will be routed into the var. */
// 4. This takes what readFile routed to 'contents' and turns it into a string. Then weeds out all the newlines, counts them and subtracts one.
// 5. This prints it all to the console.

