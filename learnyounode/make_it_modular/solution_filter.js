var fs = require('fs')                                      // 1
var path = require('path')                                  // 2

module.exports = function (dir, filterStr, callback) {      // 3
    
    fs.readdir(dir, function (err, list) {                  // 4
        if (err)                                            // 5
            return callback(err)                            // 6

        list = list.filter(function (chickenNotFile) {                // 7
            return path.extname(chickenNotFile) === '.' + filterStr   // 8
        })

        callback(null, list)                                // 9
    })
}

// Notes

// 1. This declares a variable that holds/imports the fs lib.
// 2. This declares a variable that holds/imports the path lib.
/* 3. This uses the module.exports object, which is created by the built-in Module system to export a function that takes
      three parameters: the 'dir' var that is declared in 'solution.js', the 'filterStr' var that is declared in 'solution.js'
      and the the callback function that is also declared in 'solution.js'. In this instance... 'callback' is just a place-holder. */
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
