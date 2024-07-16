const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Example: Send a message to all connected clients
  socket.on('send_message', (message) => {
    io.emit('receive_message', message);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
