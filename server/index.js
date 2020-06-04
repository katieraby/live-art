const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const index = "/index.html";

app.use(express.json());
app.use(express.static(__dirname + "../build"));

app.use((req, res) => res.sendFile(index, { root: "./build" }));

io.on("connection", (socket) => {
  socket.emit("messageFromServer", { data: "welcome to the io server" });
  socket.on("join", (msg) => {
    console.log(msg);
  });
  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawingFromServer", data);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT);
