const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

app.use(express.static('build'));

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

io.on('connection', (socket) => {
  let room = '';
  socket.on('join', (data) => {
    room = data.room;
    socket.join(data.room);
    if (data.paymentPointer) {
      io.in(data.room).emit('paymentPointer', {
        paymentPointer: data.paymentPointer,
        username: data.username,
        bio: data.bio,
      });
    }
  });

  socket.on('drawing', (data) => {
    socket.in(data.room).broadcast.emit('drawingFromServer', data);
  });

  socket.on('clear', (data) => {
    socket.in(data.room).emit('clearCanvas');
  });

  socket.on('disconnect', () => {
    console.log('disconnect in server');
    io.in(room).emit('paymentPointerDisconnect', { paymentPointer: '' });
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT);

console.log(`server listening on ${PORT}`);
