require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

// Connect to DB
mongoose.connect(process.env.DBURL, { useNewUrlParser: true }, () =>
  console.log("connected to DataBase!")
);

// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
