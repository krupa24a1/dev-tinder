const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({
        firstName: "Krupa Mani",
        lastName: "M"
    })
})

app.post("/user", (req, res) => {
    res.send("User created successfully!");
})

app.patch("/user", (req, res) => {
    res.send("User updated successfully!");
})

app.delete("/user", (req, res) => {
    res.send("User deleted successfully");
})

app.listen(7777, () => {
    console.log('Listening on port 7777');
})