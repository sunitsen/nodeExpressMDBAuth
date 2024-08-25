const express = require("express");
const app = express();
const PORT = 3000;
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/circle", (req,res) =>{
    res.sendFile(__dirname + "/circle.html");
})

app.get("/triangel", (req,res) =>{
    res.sendFile(__dirname + "/triangel.html");
})



app.post("/circle", (req,res) =>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h1> Area of : ${area}</h1>`)
  
  })
  
app.post("/triangel", (req,res) =>{
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`<h1> Area of : ${area}</h1>`)

})


app.listen(PORT, () => {
    console.log(`Welcome, the host link is http://localhost:${PORT}`)
});
