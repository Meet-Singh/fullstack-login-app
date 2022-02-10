const express = require("express");
const userConstant = require("../constants/userConstants");

const routes = express.Router();

routes.get("/login", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (userConstant.length > 0) {
    let count = 0;
    const userDetails = userConstant.filter((user) => {
      if (
        password &&
        username &&
        user.username === username.toLowerCase() &&
        password === user.password &&
        count === 0
      ) {
        count++;
        return user;
      }
    });

    if (userDetails.length > 0 && userDetails[0]) {
      res.json({ message: "User data found", data: userDetails });
      return;
    }

    res
      .status(400)
      .json({ message: "No user found or Invalid Credentials", data: [] });
  } else {
    res.status(400).json({ message: "No user found", data: [] });
  }
});

routes.post("/register", (req, res) => {
  const { username, password, retryPassword, email } = req.body;

  if (userConstant.length > 0) {
    let count = 0;
    const userDetails = userConstant.filter((user) => {
      if (
        password &&
        username &&
        user.username === username.toLowerCase() &&
        password === user.password &&
        count === 0
      ) {
        count++;
        return user;
      }
    });

    if (userDetails.length > 0) {
      res.status(400).json({ message: "User already exist", error: true });
      return;
    }
  }

  if (username && username.trim() !== "") {
    if (password && retryPassword && retryPassword === password) {
      userConstant.push({
        ...userConstant,
        username: username.toLowerCase(),
        email: email ? email.toLowerCase() : "",
        password: password,
      });
      res.json({ message: "User Registered", data: true });
      return;
    }

    res.status(400).json({ message: "Password Does not match", error: true });
  }

  res.status(400).json({ message: "User details are invalid", error: true });
});

module.exports = routes;
