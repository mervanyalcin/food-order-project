const router = require("express").Router();
const Category = require("../models/Category.js");

// create a post
router.post("/", async (req, res) => {
  const { categoryImg, categoryName, createdBy } = req.body;
  try {
    const newCategory = new Category({
      categoryName,
      createdBy,
      categoryImg,
    });
    const category = await newCategory.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
