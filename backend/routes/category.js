const router = require("express").Router();
const Category = require("../models/Category.js");

// create a category
router.post("/add", async (req, res) => {
  try {
    const newUser = new Category(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
