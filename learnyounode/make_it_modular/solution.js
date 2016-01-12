var filterFn = require('./solution_filter.js')              // 1
var dir = process.argv[2]                                   // 2
var filterStr = process.argv[3]                             // 3

filterFn(dir, filterStr, function (err, list) {             // 4
    if (err)                                                // 5
        return console.error('There was an error:', err)    // 6

    list.forEach(function (file) {                          // 7
        console.log(file)                                   // 8
    })
})

// Notes

// 1.
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
