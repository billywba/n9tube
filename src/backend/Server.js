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
  io.emit("room:user_join", current_connected_users);

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
    current_connected_users = current_connected_users.filter(
      (conn) => conn.username != socket.id
    );
    // TODO: Change from room:user_join to room:update_viewers
    io.emit("room:user_join", current_connected_users);
    console.log(current_connected_users);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
