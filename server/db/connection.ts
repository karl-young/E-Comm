import knex from 'knex'
import config from './knexfile.js'

type Environment = 'production' | 'development' | 'test'
const env = (process.env.NODE_ENV || 'development') as Environment

const connection = knex(config[env])

export default connection
export function getAllProducts() {
  throw new Error('Function not implemented.')
}

export function getProductById(arg0: number) {
  throw new Error('Function not implemented.')
}

