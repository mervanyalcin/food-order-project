import express from 'express'
import pg from 'pg'
import postgresClient from '../config/db.js';
const router = express.Router()

// INSERT INTO products (product_name,main_category, img_url, description, price) 
// SELECT 'Margarita Pizza', categories.cat_name, 'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/pizza-margherita-tarifi-yemekcom.jpg', 'Monza Sos, Mozarella, Fesleğen', '119.90' 
// FROM categories WHERE cat_name = 'pizza'


// Create Product
router.post('/add', async (req, res) => {
    try {
        const text = `
        INSERT INTO products (product_name, main_category, img_url, description, price) 
        SELECT '${req.body.product_name}', categories.cat_name, '${req.body.img_url}', '${req.body.description}', '${req.body.price}' 
        FROM categories WHERE categories.cat_name = '${req.body.main_category}'`
        
        const aaaa = await postgresClient.query(text)
        return res.status(201).json({ createdCategory: {aaaa} })
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