const express = require("express");
const app = express();
const PORT = 3001;

// http://localhost:3001/?id=101&age=32&name=sunit
app.get("/", (req,res) =>{
  const id = req.query.id;
  const age = req.query.age;
  const name = req.query.name;

    res.send(`Student id is : ${id} and age ${age} and name is : ${name}`)
    
})

app.listen(PORT, () =>{
 console.log(`Server is runing at http://localhost:${PORT}`)
})