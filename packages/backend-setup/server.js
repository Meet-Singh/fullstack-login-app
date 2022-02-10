const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "backend started" });
});

app.listen(4000);
