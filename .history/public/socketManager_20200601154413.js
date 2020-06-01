let socket = io.connect('http://localhost:8080');

socket.on('init', () => {
  console.log(connected);
});
