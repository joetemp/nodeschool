var net = require('net')                            // 1

function zeroFill(i) {                              // 2
    return (i < 10 ? '0' : '') + i                  // 3
}

function now () {                                   // 4
    var d = new Date()                              // 5
    return d.getFullYear() + '-'                    // 6
        + zeroFill(d.getMonth() + 1) + '-'          // 7
        + zeroFill(d.getDate()) + ' '               // 8
        + zeroFill(d.getHours()) + ':'              // 9
        + zeroFill(d.getMinutes())                  // 10
}

var server = net.createServer(function (socket) {   // 11  
    socket.end(now() + '\n')                        // 12
})

server.listen(Number(process.argv[2]))              // 13

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
