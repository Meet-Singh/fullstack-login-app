const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "backend started" });
});

app.get("/login", (req, res) => {
  res.status(200).json({ message: "Login Page" });
});

app.listen(4000);
