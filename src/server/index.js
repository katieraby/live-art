const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const path = require("path");
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

io.on("connection", (socket) => {
  console.log(socket);
  socket.emit("messageFromServer", { data: "welcome to the io server" });
  socket.on("join", (data) => {
    socket.broadcast.emit("paymentPointer", data);
  });
  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawingFromServer", data);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT);
