import express from "express";
import multer from "multer";
import postgresClient from "../config/db.js";
const router = express.Router();

// Create multer object
const imageUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    },
  }),
});

// Create Product
router.post("/add", async (req, res) => {
  try {
    // @ts-ignore
    const { name, mainCategory, description, price, img } = req.body;
    // @ts-ignore 
    const text = `
        INSERT INTO products ("name", "maincategory", "img", "description", "price")
        SELECT '${name}', categories.name, '${img}', '${description}', '${price}'
        FROM categories WHERE categories.name = '${mainCategory}'`;

    // const text = `
    //         INSERT INTO products ("name", "maincategory", "img", "description", "price")
    //         SELECT 'name', 'mainCategory', 'img', 'descr', 'price'
    //         FROM categories WHERE categories.id = '37'; `;

    const aaaa = await postgresClient.query(text);
    return res.status(201).json({ createdCategory: { aaaa } });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

// Get Product
router.post("/get", async (req, res) => {
  try {
    const {} = req.body;
    const text = "SELECT * FROM products ORDER BY id ASC";
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

// Get Product
router.get("/get/:category", async (req, res) => {
  try {
    console.log(req.params.category);
    const text = `SELECT * FROM products WHERE maincategory = '${req.params.category}' ORDER BY name ASC`;
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

// Get Product
router.get("/:productDetail", async (req, res) => {
  try {
    const { productDetail } = req.params;

    const text = `SELECT * FROM products WHERE main_category = '${productDetail}' `;
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

export default router;
