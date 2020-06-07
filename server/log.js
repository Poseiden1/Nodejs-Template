// Import modules
const app = require('./../app.js');
const mysql = require('mysql');
const filename = 'log.js';

// Console Output
console.log(("::: Initalized "+ filename).gray);

function ClientConnect(socketId) {
    console.log('Client connected: '.brightGreen + socketId);
}

function ClientDisconnect(socketId) {
    console.log('Client disconnected: '.brightGreen + socketId);
}

// Export Modules
module.exports = {
    ClientConnect,
    ClientDisconnect
}