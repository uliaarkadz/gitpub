const express = require("express");
const drinks = require("./models/drinks.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index.ejs", { drinks });
});

//************************* */
app.listen(3000, () => {
  console.log("server is running");
});
