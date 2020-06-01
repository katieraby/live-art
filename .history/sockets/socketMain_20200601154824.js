const io = require('../servers').io;

// initGame();

io.sockets.on('connect', (socket) => {
  socket.emit('init', {});
});

//run at the beginning of a new game
// function initGame() {
//   for (let i = 0; i < 500; i++) {
//     orbs.push(new Orb());
//   }
// }

module.exports = io;
