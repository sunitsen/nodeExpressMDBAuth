const express = require("express");
const app = express();

// This route handles product IDs that are exactly 3 digits long
app.get("/products/:id([0-9]{3})", (req, res) => {
    res.send(`<h2>ID = ${req.params.id}</h2>`);
});

// This route handles product titles that are exactly 3 letters long (case-insensitive)
app.get("/products/:title([a-zA-Z]{3})", (req, res) => {
    res.send(`<h2>Title = ${req.params.title}</h2>`);
});

// This route handles all other requests and returns a 404 error
app.use("*", (req, res) => {
    res.status(404).send({
        message: "not a valid route"
    });
});

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});
