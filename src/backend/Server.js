const express = require("express");
const app = express();
const http = require("http");
const httpServer = http.createServer(app);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

app.get("/api/test", (req, res) => {
  res.send("test");
});

let currentConnectedUsers = [];

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  currentConnectedUsers.push({ username: socket.id });

  // When a new user joins, update the viewer list for everyone
  io.emit("room:update_viewer_list", currentConnectedUsers);

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
    currentConnectedUsers = currentConnectedUsers.filter(
      (conn) => conn.username != socket.id
    );
    // TODO: Change from room:user_join to room:update_viewers
    io.emit("room:user_join", currentConnectedUsers);
    console.log(currentConnectedUsers);
  });
});

httpServer.listen(3001, () => {
  console.log("listening on *:3001");
});
