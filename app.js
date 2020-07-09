// Import libaries
const express = require('express');
const socket = require('socket.io');
const mysql = require('mysql');
const fs = require('fs');
const colors = require('colors');
const path = require('path');
const port = 3000;

// App Setup
var app = express().use(express.static('client/'));
var server = app.listen(port,function() {
    console.log('::: Started Server at Port: '.gray + port.toString().gray);
});

// SQL Database
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tanasia"
})

// Socket Setup
var io = socket(server);

// Export Modules
module.exports = {
    db,
    io,
};

// Require Modules
require('./server/connection.js');
require('./server/log.js');