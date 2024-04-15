import express from 'express'
import * as db from '../db/connection'

const router = express.Router()

// GET /api/products - get all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await db.getAllProducts()

    res.json(products)
  } catch (error: any) {
    res.status(500).send('Error getting products')
    console.error(error.message)
  }
})

// Get /api/products/:id - get product by id

// POST /api/products - create new product

// PUT /api/products/:id - update product by id

// DELETE /api/products/:id - delete product by id

export default router
