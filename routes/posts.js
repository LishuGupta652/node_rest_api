const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// POSTING A POST
router.post("/", async (req, res) => {
  console.log(req.body.title);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  // post
  //   .save()
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.json({ message: err });
  //   });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC POST

module.exports = router;
