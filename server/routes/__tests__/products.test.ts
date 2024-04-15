import { describe, it, expect, vi, beforeEach } from 'vitest'
import request from 'supertest'
import server from '../../server'
import * as db from '../../db/db'

vi.mock('../../db')

beforeEach(async () => {
  vi.resetAllMocks()
})

describe('Products', () => {
  it('GET /api/products - get all products', async () => {
    vi.mocked(db.getAllProducts).mockResolvedValue([
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        quantity: 10,
        image_url: 'https://example.com/image1.jpg',
      },
    ])

    const response = await request(server).get('/api/products')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        quantity: 10,
        image_url: 'https://example.com/image1.jpg',
      },
    ])
  })
})
