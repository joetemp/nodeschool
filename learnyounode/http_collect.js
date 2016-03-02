var http = require('http')                          // 1
var bl = require('bl')                              // 2

http.get(process.argv[2], function (response) {     // 3
    response.pipe(bl(function (err, data) {         // 4
        if (err)                                    // 5
            return console.error(err)               // 6
        data = data.toString()                      // 7
        console.log(data.length)                    // 8
        console.log(data)                           // 9
    }))  
})

// 1. This creates a variable called 'http' that holds the imported 'http' module.
/* 2. This creates a variable called 'bl' that holds the imported 'bl' module. BTW, this is not a core module. This was installed manually prior
      to the exercise using npm. */
/* 3. This calls the 'get' method within the 'http' module and it takes two parameters. The first, is the third command line argument. The 
      second param is a callback function that takes a Node Stream object as a param. */
// 4. This takes the reponse and pipes it into the 'bl' module. Once there, bl takes a callback function as a parameter.
// 5. If there's an error...
// 6. This logs the error to the console and haults the function with the return.
// 7. This takes the now data, which was the repsonse piped into bl, and changes it's value to a string. 
// 8. This logs the length of data... which is now a string, to the console. The length is in characters. 
// 9. This logs data... which is now a string, to the console. 
