const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/api/test", (req, res) => {
  res.send("test");
});

server.listen(3001, () => {
  console.log("Server starting on *:3001");
});
