require('dotenv').config();
const express = require('express');
const {provider} = require('./middleware/provider');
const {databaseConnection} = require('./middleware/databaseConnection');
const {apiRouter} = require('./routes/apiRouter');
const {socketConnection} = require('./sockets/socketsConnection');

const {
  SERVER_PORT
} = process.env;

// express initialization
const app = express();

// top level middleware
provider(app);

// massive db connection
databaseConnection(app);

// routes
apiRouter(app);

// server
const server = app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port: ${SERVER_PORT}`);
});

// sockets
socketConnection(server, app);