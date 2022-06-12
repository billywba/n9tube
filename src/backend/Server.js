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

httpServer.listen(3001, () => {
  console.log("listening on *:3001");
});
