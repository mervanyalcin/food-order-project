import express from "express";
import multer from "multer";
import postgresClient from "../config/db.js";
const router = express.Router();

// Create Category 
router.post("/add", async (req, res) => {
  try {
    const { catName, catImg } = req.body;
    console.log(catImg);
    console.log(catName);
    const text = `INSERT INTO categories (cat_name, img_url) SELECT '${catName}', '${catImg}'`;

    const { rows } = await postgresClient.query(text);
    return res.status(201).json({ createdCategory: rows[0] });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});


// Get Category
router.post("/get", async (req, res) => {
  try {
    const text = "SELECT * FROM categories ORDER BY id ASC";
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});



// Create multer object
// const imageUpload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "images/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, new Date().valueOf() + "_" + file.originalname);
//     },
//   }),
// });
// Create Category With Picture Upload
// router.post("/add", imageUpload.single("image"), async (req, res) => {
//   try {
//     const { filename } = req.file;
//     const { catName } = req.body;
//     console.log(filename);
//     console.log(catName);
//     const text = `INSERT INTO categories (cat_name, img_url) SELECT '${catName}', '${filename}'`;

//     const { rows } = await postgresClient.query(text);
//     return res.status(201).json({ createdCategory: rows[0] });
//   } catch (error) {
//     console.log("Error occured", error.message);
//     return res.status(400).json({ message: error.message });
//   }
// });
// const data = new FormData();
// const fileName = Date.now() + catImg.name;
// data.append("name", fileName);
// data.append("image", catImg);
// data.append("catName", catName)
// const response = await axios.post("/category/add", data, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });




export default router;
