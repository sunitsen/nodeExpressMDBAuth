const http = require('http');
const fs = require("fs");
const PORT = 3000;
const hostName = '127.0.0.1';

// routing based on url (its create a server)
const server = http.createServer((req, res) => {

  const handelpageRequest = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  if (req.url === "/") {
    handelpageRequest(200, "./views/index.html");
  }
  else if (req.url === "/about") {
    handelpageRequest(200, "./views/about.html");
  }
  else if (req.url === "/contact") {
    handelpageRequest(200, "./views/contact.html");
  }
  else {
    handelpageRequest(400, "./views/error.html");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`http://${hostName}:${PORT}`);
})

