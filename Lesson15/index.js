const express = require("express");
const app = express();
const PORT = 3001;
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/register", (req, res) => {
  const fullname = req.body.fullname;
  const age = req.body.age;
  res.send(`<h1>your name is ${fullname} and age is ${age}</h1/>`);

})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
