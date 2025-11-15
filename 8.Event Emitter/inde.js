const eventEmitter = require("events");
const myEvent = new eventEmitter();

myEvent.on("Greet", (name) => {
  console.log(`Hello ${name}`);
});

myEvent.emit("Greet", "Jayesh");
