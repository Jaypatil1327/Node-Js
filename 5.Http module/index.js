const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  console.log("res send");
  res.end("Welcome to NodeJs");
});

server.listen(3000, () => {
  console.log("Server is now running");
});
