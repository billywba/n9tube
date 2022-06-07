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

current_connected_users = [];

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  current_connected_users.push({ username: socket.id });
  socket.emit("room:user_join", current_connected_users);

  io.emit("room:user_join", current_connected_users);
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
