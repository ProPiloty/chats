const socket = require('socket.io');

const socketConnection = (server, app) => {
  const io = socket();

  io.on('connection', socket => {
    console.log('Socket connected');
  })
};

module.exports = {
  socketConnection
};