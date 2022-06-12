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

// Stores socket id of current connected clients
let currentConnectedUsers = [];

io.on("connection", (socket) => {
  // New client joined, log and update array
  console.log(`User connected: ${socket.id}`);
  currentConnectedUsers.push({ username: socket.id });

  // Update the viewer list for every client
  io.emit("room:update_viewer_list", currentConnectedUsers);

  // Client disconnects
  socket.on("disconnect", () => {
    // Remove and removed socket id from array
    console.log(`${socket.id} disconnected`);
    currentConnectedUsers = currentConnectedUsers.filter(
      (conn) => conn.username != socket.id
    );

    // Update viewer list with array of current clients
    io.emit("room:update_viewer_list", currentConnectedUsers);
    console.log(currentConnectedUsers);
  });
});

// Start server
httpServer.listen(3001, () => {
  console.log("Sever starting on port 3001");
});
