require("dotenv").config();
const express = require("express");
const app = express();

// Middleware
app.use("/posts", (req, res, next) => {
  console.log("this is the middleware running");
  next();
});
// Router
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/posts", (req, res) => {
  res.send("we are on posts ");
});

// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
