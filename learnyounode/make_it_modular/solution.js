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

// 1. This declares a variable that holds/imports the solution_filter.js file/program
// 2. This declares a variable that holds the third command line argument, which is directory we'll be searching.
// 3. This declares a variable that holds the fourth command line argument, the file extension we'll be listing.
// 4. This is where we're actually calling/using the 'filterFn' program. It takes three params: the directory we'll be looking in, the file
//    extensions we're searching for and a callback function that takes two params: an error and a list.
// 5. If there is an error...
// 6. Exit and log the error message to the console.
// 7. This takes the list that solution_filter.js called back with and runs a function for each item. That function takes a file as a pram...
// 8. And logs it to the console each time it's run.
