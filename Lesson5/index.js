const http = require("http");
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) =>{
    res.writeHead(202, {'Content-type':'text/html'});
    res.write("<h1>Hello i am from server</h1>")
    res.end();
})
myServer.listen(port, hostname, ()=>{
    console.log(`server is runding at http://${hostname}:${port}`);
})