import express from 'express'
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../db/db'
import * as utils from '../../utils'

const router = express.Router()

// GET /api/products - get all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await getAllProducts()

    const page = Number(req.query.page) || 1
    const pageSize = Number(req.query.pageSize) || 10
    const paginatedProducts = utils.paginate(products, page, pageSize)

    res.json(paginatedProducts)
  } catch (error: any) {
    utils.handleError(res, 500, 'Error getting products')
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
    utils.handleError(res, 500, 'Error getting single product')
  }
})

// POST /api/products - create new product
router.post('/api/products', async (req, res) => {
  try {
    const product = req.body
    const newProduct = await createProduct(product)
    res.json(newProduct)
  } catch (error: any) {
    utils.handleError(res, 500, 'Error creating product')
  }
})

// PUT /api/products/:id - update product by id
router.put('/api/products/:id', async (req, res) => {
  try {
    const product = req.body
    const updatedProduct = await updateProduct(Number(req.params.id), product)
    res.json(updatedProduct)
  } catch (error: any) {
    utils.handleError(res, 500, 'Error updating product')
  }
})
// DELETE /api/products/:id - delete product by id
router.delete('/api/products/:id', async (req, res) => {
  try {
    const deletedProduct = await deleteProduct(Number(req.params.id))
    res.json(deletedProduct)
  } catch (error: any) {
    utils.handleError(res, 500, 'Error deleting product')
  }
})
export default router
