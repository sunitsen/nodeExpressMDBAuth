const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');


app.use("/api/user", userRouter);

app.use("/regester", (req, res) => {
    // res.status(200).json({
    //     "name" : "sunit sen",
    //     "message": "this is message",
    //     statusCode: 200
    // });

    res.statusCode = 200;
    res.sendFile(__dirname + "/views/regester.html");
    // res.redirect("/login")
})
app.use("/login", (req, res) => {
    // res.send("hi i am login page");
    // res.cookie("name", "sunit");
    // res.cookie("age", "30");
    res.clearCookie("name");
    res.append("id", "12000");

    res.end();
})

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html");
    // res.redirect("/login")
})

app.use((req, res) => {
    res.send("<h1>404!</h1>");
})

module.exports = app;

