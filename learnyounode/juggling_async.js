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

// 1.
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
// 10.
// 11.
// 12.
// 13.
// 14.
// 15.
// 16.
// 17.
// 18.
