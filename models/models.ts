// product model
export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  quantity: number
  image_url: string
}

// user model
export type User = {
  id: number
  name: string
  email: string
  password: string
  role: string
  created_at: string
  updated_at: string
}

// order model
export type Order = {
  id: number
  user_id: number
  total_price: number
  status: string
  created_at: string
  updated_at: string
}

// purchase item model
export type PurchaseItem = {
  id: number
  order_id: number
  product_id: number
  quantity: number
  price: number
  created_at: string
  updated_at: string
}
