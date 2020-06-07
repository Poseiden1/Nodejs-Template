// Import modules
const app = require('./../app.js');
const mysql = require('mysql');
const log = require('./log.js');
const filename = 'connection.js';


// Console Output
console.log(("::: Initalized "+ filename).gray);

app.io.on('connection', function(socket) {
    // Client connected
    log.ClientConnect(socket.id);

    socket.on('disconnect', function() {
        // Client disconnected
        log.ClientDisconnect(socket.id);
    })
});