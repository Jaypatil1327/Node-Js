const socketIo = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const server = app.listen(3000, () => {
  console.log("server is listening");
});
const io = socketIo(server);
