const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 9090;

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("Socket connection on!!!", socket.id);

  socket.on("write", function (data) {
    // io.sockets.emit("write", data);
    socket.broadcast.emit("write", data);
  });

  socket.on("grafica", function (data) {
    // io.sockets.emit("write", data);
    socket.broadcast.emit("grafica", data);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
