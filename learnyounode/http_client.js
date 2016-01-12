var http = require ('http')                         // 1 

http.get(process.argv[2], function (response) {     // 2
    response.setEncoding('utf8')                    // 3
    response.on('data', console.log)                // 4
    response.on('error', console.error)             // 5
})

// Notes
// 1.
// 2.
// 3.
// 4.
// 5.
