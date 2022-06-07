const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  io.emit("room:user_join", socket.id);
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
