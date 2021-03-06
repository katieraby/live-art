const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  socket.on('join', (msg) => {
    console.log(msg);
  });
});

const PORT = 8080;

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
