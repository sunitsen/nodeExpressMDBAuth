const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
    // Adding current time to the request object
    req.currentTime = new Date(Date.now());
    next();
}

// Applying the middleware to all routes
app.use(myMiddleWare);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong!");
});

// Home route
app.get("/", (req, res) => {
    console.log("I am Home");
    res.send("<h1>I am from home route</h1>");
});

// About route
app.get("/about", (req, res) => {
    console.log("I am about at " + req.currentTime);
    res.send("<h1>I am from about route</h1>");
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
