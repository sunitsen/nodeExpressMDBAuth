const express = require("express");
const app = express();
const PORT = 3001;

    // "/userId/:id/userAge/:age"
app.get("/", (req,res) =>{
    // http://localhost:3001/userId/101/userAge/25
    //    const id = req.params.id;
    //    const age = req.params.age;

   const id = req.header("id")
   const name = req.header("name")

    res.send(`User id is ${id} and age is ${name}`)
})

app.listen(PORT, () =>{
 console.log(`Server is runing at http://localhost:${PORT}`)
})

// express js bangla tutorial 7 : http request with route parameter and header 