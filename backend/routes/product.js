const router = require("express").Router();
const Product = require("../models/Product.js");
router.post("/", async (req, res) => {
  const { productName } = req.body;
  try {
    const newCategory = new Product({
      productName,
    });
    const product = await newCategory.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
