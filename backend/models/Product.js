const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      default: "",
    },
  },
);


module.exports = mongoose.model("Product", productSchema);
