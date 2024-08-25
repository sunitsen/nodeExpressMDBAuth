require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`server is runing http://localhost${PORT}`)
})

app.get("/", (req,res) =>{
    res.send("Hello i am home route")
})