import express from 'express'
import { getAllProducts, getProductById } from '../db/db'
const router = express.Router()

// GET /api/products - get all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await getAllProducts()

    res.json(products)
  } catch (error: any) {
    res.status(500).send('Error getting products')
    console.error(error.message)
  }
})

// Get /api/products/:id - get product by id
router.get('/api/products/:id', async (req, res) => {
  try {
    const product = await getProductById(Number(req.params.id))
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
router.post('/api/products', async (req, res) => {
  try {
    const product = req.body
    const newProduct = await createProduct(product)
    res.json(newProduct)
  } catch (error: any) {
    res.status(500).send('Error creating product')
    console.error(error.message)
  }
})

// PUT /api/products/:id - update product by id

// DELETE /api/products/:id - delete product by id

export default router

