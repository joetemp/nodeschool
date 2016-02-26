var http = require ('http')                         // 1 

http.get(process.argv[2], function (response) {     // 2
    response.setEncoding('utf8')                    // 3
    response.on('data', console.log)                // 4
    response.on('error', console.error)             // 5
})

// Notes
// 1. This imports the 'http' module.
// 2. This calls the 'get' method from within the 'http' module and takes two parameters. The first parameter is the third command line argument.
//    The second parameter is a callback function, though it doesn't look like a conventional Node callback. That's because the 'response' is a 
//    'Node Stream object'. Node Streams are basically objects that emit events.
// 3. This uses the 'setEncoding' method to encode the reponse to 'utf8'
// 4. This is how you listen to events. This just means that as soon as data is emitted, it'll be logged to the console. 
// 5. Likewise, as soon as an error is emitted, it'll be logged to the console.
