import express from 'express'
import * as db from '../db/connection'
import { getAllProducts, getProductById } from '../db/db'
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
router.get('/api/products/:id', async (req, res) => {
  try {
    const product = await db.getProductById(Number(req.params.id))
    if (product === null) {
      res.status(404).send('Product not found')
    } else {
      res.json(product)
    }
  } catch (error: any) {
    res.status(500).send('Error getting product')
    console.error(error.message)
  }
})

// POST /api/products - create new product

// PUT /api/products/:id - update product by id

// DELETE /api/products/:id - delete product by id

export default router
