import express from 'express'
import multer from "multer";
import postgresClient from '../config/db.js';
const router = express.Router()

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
router.post('/add', imageUpload.single("image"), async (req, res) => {
    try {
        const { filename } = req.file;
        const filepath = req.file.path;
        const text = `
        INSERT INTO products (product_name, main_category, img_url, description, price) 
        SELECT '${req.body.product_name}', categories.cat_name, '${filename}', '${req.body.description}', '${req.body.price}' 
        FROM categories WHERE categories.cat_name = '${req.body.main_category}'`
        
        const aaaa = await postgresClient.query(text)
        return res.status(201).json({ createdCategory: {filename, filepath, aaaa} })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error. message })
    }
})

// Get Product
router.get('/:productDetail', async (req, res) => {
    try {
        const { productDetail } = req.params

        const text = `SELECT * FROM products WHERE main_category = '${productDetail}' `
        const { rows } = await postgresClient.query(text)
        return res.status(200).json(rows)
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })   
    }
})

 

export default router;