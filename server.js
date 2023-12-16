const express = require("express");
const drinks = require("./models/drinks.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index.ejs", { drinks });
});

app.get("/drinks/:id", (req, res) => {
  const id = req.params.id;
  const drink = drinks[id];
  res.render("show.ejs", { drink });
});
//************************* */
app.listen(3000, () => {
  console.log("server is running");
});
