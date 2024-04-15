import db from './connection'

export async function getAllProducts() {
  const products = await db('products').select('*')

  return products
}
