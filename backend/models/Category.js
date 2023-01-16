const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    createdBy: {
      type: String,
      default: "",
    },
    categoryName: {
      type: String,
      default: "",
    },
    categoryImg: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Category", CategorySchema);
