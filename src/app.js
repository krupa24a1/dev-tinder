const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("test handler response");
})

app.use("/hello", (req, res) => {
    res.send("hello hello hello...");
})

app.listen(7777, () => {
    console.log('Listening on port 7777');
})