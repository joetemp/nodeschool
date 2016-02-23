var fs = require('fs')                                                // 1
var path = require('path')                                            // 2

module.exports = function (dir, filterStr, callback) {                // 3
    
    fs.readdir(dir, function (err, list) {                            // 4
        if (err)                                                      // 5
            return callback(err)                                      // 6

        list = list.filter(function (chickenNotFile) {                // 7
            return path.extname(chickenNotFile) === '.' + filterStr   // 8
        })

        callback(null, list)                                          // 9
    })
}

// Notes

// 1. This declares a variable that holds/imports the fs lib.
// 2. This declares a variable that holds/imports the path lib.
/* 3. This uses the module.exports object, which is created by the built-in Module system to export a function that takes
      three parameters: the 'dir' var that is declared in 'solution.js', the 'filterStr' var that is declared in 'solution.js'
      and the the callback function that is also declared in 'solution.js'. In this instance... 'callback' is just a place-holder. This
      just makes it clear that I intend to pass a callback function as a param. Namely... the callback function at #4 in solution.js*/
// 4. This uses the 'readdir' module in the 'fs' lib and takes two params, the 'dir' var we discussed earlier, as well as a callback function. The
//    callback function itself takes two params as all do, an error and a list.
// 5. If there's an error...
// 6. Stop the program and call solution.js back with that result so it can log the error message.
// 7. By default, 'list' or whatever you want to call it, is an array that  contains every file in the dir we told it to look in. This reassigns 
//    the contents of the 'list' var by using the built-in filter() method. Now, list will only contain files that pass the test implemented by 
//    the privided function. That function takes each file in the array as a param.
// 8. This returns only files that match the 'filterStr' var/param. It also adds a '.' so your command line args can be pretty.
// 9. This calls back solutions.js with a nice, pretty list for it to log to the console.
