// Import modules
const {
    db,
    io,
} = require('./../app.js');
const log = require('./log.js');
const path = require('path');

// Console Output
const filename = path.basename(__filename);
console.log(("::: Initalized "+ filename).gray);

io.on('connection', function(socket) {
    // Client connected
    log.ClientConnect(socket.id);

    socket.on('disconnect', function() {
        // Client disconnected
        log.ClientDisconnect(socket.id);
    });

});
