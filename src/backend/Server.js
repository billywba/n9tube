var http = require("http").createServer().listen(9999, "0.0.0.0");
const { Server } = require("socket.io");
const io = new Server(http);

io.on("connection", (socket) => {
  console.log("a user connected");
});
