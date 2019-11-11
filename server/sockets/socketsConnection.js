const socket = require('socket.io');

const socketConnection = (server, app) => {
  const io = socket(server);

  io.on('connection', socket => {
    console.log('New client connected');
    
    socket.on('join-room', (data) => {
      console.log(data)
    })

    socket.on('disconnect', () => {
      console.log('Client disconnected')
    })
  })
};

module.exports = {
  socketConnection
};