const express = require('express');
const app = express();


// get method
// https://www.postman.com/


app.get("/", (req, res) => {
    res.send("i am a get request at get route");
    res.end();
})

app.post("/post", (req, res) => {
    res.send("i am a get request at post route");
    res.end();
})

app.put("/put", (req, res) => {
    res.send("i am a get request at put route");
    res.end();
})

app.delete("/delete", (req, res) => {
    res.send("i am a get request at delete route");
    res.end();
})

module.exports = app;

