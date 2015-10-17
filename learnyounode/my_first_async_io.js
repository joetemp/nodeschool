// What the hell is going on here? 'contents' is never defined and is that a fucntion inside a variable?

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    var lines = contents.toString().split('\n').length - 1
	console.log(lines)
})

