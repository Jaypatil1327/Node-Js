const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page");
  } else if (url === "/projects") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Project Page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("sever is listening");
});
