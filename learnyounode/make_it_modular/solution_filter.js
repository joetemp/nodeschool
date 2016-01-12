var fs = require('fs')                                      // 1
var path = require('path')                                  // 2

module.exports = function (dir, filterStr, callback) {      // 3
    
    fs.readdir(dir, function (err, list) {                  // 4
        if (err)                                            // 5
            return callback(err)                            // 6

        list = list.filter(function (file) {                // 7
            return path.extname(file) === '.' + filterStr   // 8
        })

        callback(null, list)                                // 9
    })
}

// Notes

// 1. 
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
