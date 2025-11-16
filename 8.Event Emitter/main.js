const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

const myEmitter = new EventEmitter();
const currPath = path.basename(__dirname);

// console.log(currPath);

myEmitter.on("dir", () => {
  console.log(currPath, "Emitter");
});

myEmitter.emit("dir");
