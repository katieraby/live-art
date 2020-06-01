const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socketio')(server);

app.use(express.static(__dirname + '/public'));
console.log('express and socket.io are listening on port 8080');

io.sockets.on('connect', (socket) => {
  socket.emit('init', {});
});

module.exports = {
  app,
  io,
};
