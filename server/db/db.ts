import db from './connection'
import { Product } from '../../models/models'

export async function getAllProducts(): Promise<Product[]> {
  const products = await db('products').select('*')

  return products
}

export async function getProductById(id: number): Promise<Product> {
  const product = await db('products').where('id', id).first()

  return product
}
