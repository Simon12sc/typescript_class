const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/about") {
    res.writeHead(200);
    res.end("about page");
  }
});

server.listen(4000, () => {
  console.log("server is established.");
});
