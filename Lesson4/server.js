const http = require("http");
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) =>{
    res.end("hello i am server hi");
})
myServer.listen(port, hostname, ()=>{
    console.log(`server is runding at ${port},${hostname}`);
})