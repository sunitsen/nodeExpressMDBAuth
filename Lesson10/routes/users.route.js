const express = require('express');
const router = express.Router();


router.get("/login", (req, res) => {
    res.send("i am a get request at login route");
})

router.get("/register", (req, res) => {
    res.send("i am a get request at regester route");
})





module.exports = router;