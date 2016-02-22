var fs = require('fs')                                      // 1
var path = require('path')                                  // 2

fs.readdir(process.argv[2], function (err, list) {          // 3
    list.forEach(function (file) {                          // 4
        if (path.extname(file) === '.' + process.argv[3])   // 5
	    console.log(file)                               // 6
    })
})

// Notes

// 1. This delcares a variable that holds/imports the fs lib.
// 2. This declares a variable that holds/imports the path lib. 
/* 3. This calls the readdir module within the fs lib. It takes the third command line argument as its first parameter. It takes a newly  
      created callback function as it's second param. As with all callback functions, this one has two parameters. The first one is there to 
      catch errors. Provided there are no errors, readdir will CALL BACK with a list of files. That list will be routed into the var 'list'.
      The var 'list' is totally arbitrary and can be anything you like. */
// 4. This runs a forEach loop over the list of files that readdir returned. The loop contains a function that takes each file as a param.
// 5. If the path extensiton of the given as an arg is equal to the path extension given as the fourth command like arg...
// 6. It's printed to the console.
