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


  // socket.on("videoTextInput", (videoTextInput) => {
  //   io.emit("vidSearchInput", videoTextInput);
  // })

  // watch button now clicked, server listening for video event which holds video url from client
  socket.on("video", (url) => {
    // broadcast the url back to all clients connected to the socket
    io.emit("videourl", url)
  })

  socket.on("start", (isStart) => {
    console.log("received:" + isStart);
    io.emit("onstart", isStart)
  })

  socket.on("ready", (isReady) => {
    io.emit("onready", isReady)
  })

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
