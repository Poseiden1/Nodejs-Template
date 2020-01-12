// Import libaries
const express = require('express');
const socket = require('socket.io');
const colors = require('colors');
const port = 3000;

// App Setup
var app = express().use(express.static('../client'));
var server = app.listen(port,function() {
    console.log('Started Server at Port:' + port);
});

// Socket Setup
var io = socket(server);

// Socket connects
io.on('connection', function(socket) {
    console.log("New Client:" , socket.id);
});