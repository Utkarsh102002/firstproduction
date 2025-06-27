require("dotenv").config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/name", (req, res) => {
  const userName = req.query.name; // `name` parameter ko request se nikala
  res.send(`Hello, ${userName}! Welcome to our site.`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
