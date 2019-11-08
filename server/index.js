require('dotenv').config();
const express = require('express');
const {provider} = require('./middleware/provider');
const {databaseConnection} = require('./middleware/databaseConnection');
const {socketConnection} = require('./sockets/socketsConnection');

const {
  SERVER_PORT
} = process.env;

// controllers

// express
const app = express();

// top level middleware
provider(app);

// massive db connection
databaseConnection(app);

// routes

// server
const server = app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port: ${SERVER_PORT}`);
});

// sockets
socketConnection(server, app);