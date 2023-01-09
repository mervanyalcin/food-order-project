const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

dotenv.config();
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGOOSE, () => {
      console.log("Connected to mongoDB");
    });
  } catch (err) {
    console.log(err);
  }
};
//middleware
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(morgan("common"));
app.use(cors())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded succesfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.use("/category", categoryRoutes);
app.use("/product", productRoutes);


app.listen(5000, () => {
  connect();
  console.log("Server is running on port ");
});
