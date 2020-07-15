require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.redirect("https://lishugupta.ml");
});

// Connect to DB
mongoose.connect(
  "mongodb+srv://lishugupta652:lishugupta652@firstcluster-76qkd.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DataBase!")
);

// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
