import express from "express";
import multer from "multer";
import postgresClient from "../config/db.js";
const router = express.Router();

// Create Category
router.post("/add", async (req, res) => {
  try {
    const {  name, img } = req.body;
    console.log(name, img);
    const text = `INSERT INTO categories (name, img) SELECT '${name}', '${img}'`;
    const { rows } = await postgresClient.query(text);
    return res.status(200).json({ createdCategory: rows[0] });
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

// Set Category
router.post("/set", async (req, res) => {
  try {
    const { id, name, img } = req.body;
    const text = `UPDATE categories SET "name" = '${name}', "img" = '${img}' WHERE id = ${id}`;
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

// Delete Category
router.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    const text = `DELETE FROM categories WHERE id = ${id}`;
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
//     const { name } = req.body;
//     console.log(filename);
//     console.log(name);
//     const text = `INSERT INTO categories (name, img_url) SELECT '${name}', '${filename}'`;

//     const { rows } = await postgresClient.query(text);
//     return res.status(201).json({ createdCategory: rows[0] });
//   } catch (error) {
//     console.log("Error occured", error.message);
//     return res.status(400).json({ message: error.message });
//   }
// });
// const data = new FormData();
// const fileName = Date.now() + img.name;
// data.append("name", fileName);
// data.append("image", img);
// data.append("name", name)
// const response = await axios.post("/category/add", data, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });

export default router;
