const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("connection requested!");
  const responseBody = "hello";

  socket.on("data", (data) => {
    const request = data.toString();
    const urlMatch = request.match("^GET (S+)/");

    if (urlMatch) {
      const path = urlMatch[1];
      if (path == "/") {
        sendResponse(socket, "welcome to homepage", 200);
      } else if (path == "/about") {
        sendResponse(socket, "welcome to about page", 200);
      } else {
        sendResponse(socket, "404 not found", 404);
      }
    }
  });
  const response = [
    "HTTP/1.1 200 OK",
    "Content-Type: text/plain",
    "Content-Length: " + responseBody.length,
    "",
    responseBody,
  ].join("\r\n");

  socket.write(response);
  socket.end();
});

server.listen(4000, () => {
  console.log("connection established.");
});

function sendResponse(socket, body, statusCode) {
  // const response = `HTTP/1.1 ${statusCode} OK
  //   Content-Type:image/jpeg
  //   Content-Length: ${body.length}

  //   ${body}
  //   `;

  const response = [
    `HTTP/1.1 ${statusCode} OK`,
    `Content-Type: text/plain`,
    `Content-length: ${body.length}`,
    "",
    body,
  ].join("\r\n");

  socket.write(response);
  socket.end();
}
