// Import modules
const app = require('./../app.js');
const mysql = require('mysql');
const filename = 'log.js';

// Console Output
console.log(("::: Initalized "+ filename).gray);

function ClientConnect(socketId) {
    console.log(`${getCurrentTime()} ` + 'Client connected '.brightGreen + `{ ${socketId} }`);
    app.fs.appendFile('./log.txt', `${getCurrentTime()} Client connected { ${socketId} }\n`, function(err) {
        if (err)
            throw err;
    });
}

function ClientDisconnect(socketId) {
    console.log(`${getCurrentTime()} ` + 'Client disconnected '.brightGreen + `{ ${socketId} }`);
    app.fs.appendFile('./log.txt', `${getCurrentTime()} Client disconnected { ${socketId} }\n`, function(err) {
        if (err)
            throw err;
    });
}

function getCurrentTime() {
    let date = new Date();
    let day = date.toISOString().slice(0,10);
    let time = date.toISOString().slice(11,19)
    return `[${day} ${time}]`;
}

// Export Modules
module.exports = {
    ClientConnect,
    ClientDisconnect
}