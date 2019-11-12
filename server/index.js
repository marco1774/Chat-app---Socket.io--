const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  console.log("New User is connect");

  socket.on("disconnect", () => {
    console.log("user had left...");
  });
});

app.use(router);

const PORT = process.env.port || 5000;

server.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
