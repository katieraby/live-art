const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socketio')(server);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
console.log('express and socket.io are listening on port 8080');

io.sockets.on('connection', (socket) => {
  socket.emit('init', {});
});

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = 4010;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// module.exports = {
//   app,
//   io,
// };
