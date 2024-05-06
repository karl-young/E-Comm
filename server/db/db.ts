import db from './connection.ts'
import { Product } from '../../models/models.ts'

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  const products = await db('products').select('*')

  return products
}

// Get product by id
export async function getProductById(id: number): Promise<Product> {
  const product = await db('products').where('id', id).first()

  return product
}

// Add product
export async function createProduct(product: Product): Promise<Product> {
  const newProduct = await db('products').insert(product).returning('*')

  return getProductById(newProduct[0])
}
// Update product
export async function updateProduct(
  id: number,
  product: Product
): Promise<Product[]> {
  return await db('products').where('id', id).update(product).returning('*')
}

// Delete product

export async function deleteProduct(id: number): Promise<Product> {
  return await db('products').where('id', id).del()
}
