const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user",userRouter);

app.get("/", (req, res) => {
    res.send("i am a get request at Home route");
})

app.use((req, res) => {
    res.send("<h1>404!</h1>");
})

module.exports = app;


