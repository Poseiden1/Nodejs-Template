// Import modules
const app = require('./../app.js');
const mysql = require('mysql');
const filename = 'chat.js';

// Console Output
console.log(("::: Initalized "+ filename).gray);

app.io.on('connection', function(socket) {
    // Client connects
    console.log("New Client ".brightGreen + socket.id)
});