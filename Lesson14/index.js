const express = require("express");
const app = express();
const PORT = 3001;
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post("/user", (req, res) =>{
  
  const name = req.body.name;
  const age = req.body.age;
  res.send(` ${name} and age is : ${age}`);

})

app.listen(PORT, () =>{
  console.log(`Server is running at http://localhost:${PORT}`)
})
