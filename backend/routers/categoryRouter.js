import express from 'express'
import postgresClient from '../config/db.js';
const router = express.Router()

// Create Category
router.post('/add', async (req, res) => {
    try {
        const text = "INSERT INTO categories (cat_name, img_url, title) VALUES ($1, $2, $3) RETURNING *"
        const values = [req.body.cat_name, req.body.img_url, req.body.title]
        const { rows } = await postgresClient.query(text, values)
        return res.status(201).json({ createdCategory: rows[0] })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error. message })
    }
})

// Get Category
router.get('/', async (req, res) => {
    try {
        const text = "SELECT * FROM categories ORDER BY id ASC"
        const { rows } = await postgresClient.query(text)
        return res.status(200).json(rows)
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })   
    }
})

 

export default router;