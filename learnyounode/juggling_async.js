var http = require('http')                                      // 1
var bl = require('bl')                                          // 2
var results = []                                                // 3
var count = 0                                                   // 4

function printResults () {                                      // 5
      for (var i = 0; i < 3; i++)                               // 6
              console.log(results[i])                           // 7
}

function httpGet (index) {                                      // 8
    http.get(process.argv[2 + index], function (response) {     // 9
        response.pipe(bl(function (err, data) {                 // 10
            if (err)                                            // 11
                return console.error(err)                       // 12

            results[index] = data.toString()                    // 13
            count++                                             // 14

            if (count == 3)                                     // 15
                printResults()                                  // 16
        }))                                                     
    })
}

for (var i = 0; i < 3; i++)                                     // 17
  httpGet(i)                                                    // 18

// 1. This declares a var called 'http' that holds the imported 'http' module.
// 2. This declares a var called 'bl' that holds the imported 'bl' module. Again, bl is not a core module, but rather installed by npm.
// 3. This declares a var called 'results' that holds an empty array for now.
// 4. This declares a var called 'count' that holds the number zero for now.
// 5. This defines a named function called 'printResults' that takes no inputs... but does the following:
// 6. This is a for loop that loops through three items.
// 7. Each time the loop is run, it logs that item in the 'results' array to the console. 
// 8. This defines a named function called 'httpGet' that takes one param. That param is an index, to reference a specific item in an array.
/* 9. This calls the 'get' method from within the 'http' module and takes two params. The two params it takes are the third command line
      argument, plus the index the parent function took as a param. The second param that 'http.get' takes is a callback function that in-turn
      takes one param, a Node Stream object. */
/* 10. This takes the response of the earlier callback function and pipes it into the 'bl' module. The 'bl' module takes another callback
       function as a param. This one is the conventional type, that takes 'err' and 'data' as inputs. */
// 11. If there's an error...
// 12. This logs the error to the console and haults the function, by virtue of the return.
/* 13. This is the line that actually adds things to the 'results' array. It 'fills' the array by referencing a specific item, based on the
       index that the parent function takes as an input. It then assigns that item a value of the data from the earlier callback funtion, turned
       into a string. */
// 14. This adds 1 to the 'count' var.
// 15. If the value of the 'count' var is equal to 3...
// 16. This calls the earlier defined 'printResults' function... which will then log everything in the results array to the console. 
// 17. This is another for loop that will iterate over three items.
/* 18. This calls the 'httpGet' function each time the loop is run and feeds it 'i' as an argument. This argument is passed to the function
       and 'feeds' the 'index' param as an argument... if that makes sense. */
