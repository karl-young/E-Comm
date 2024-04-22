import { Response } from 'express'
import { Product, User } from './models/models'

// Utility function for pagination
export function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  return items.slice(startIndex, endIndex)
}

// Utility function for sorting products by price
export function sortByPrice(
  products: Product[],
  ascending: boolean
): Product[] {
  return products.sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  )
}

// Utility function for error handling
export function handleError(
  res: Response,
  statusCode: number,
  message: string,
  error?: Error
): void {
  if (error) {
    console.error(error.message)
  }
  res.status(statusCode).json({ error: message })
}

// Utility function for formatting price
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

// Utility function for validating email address
export function isValidEmail(email: string): boolean {
  // Regular expression for validating email addresses
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Test the provided email against the regex pattern
  return emailRegex.test(email)
}

// Utility function for checking if a user is an admin
export function isAdmin(user: User): boolean {
  return user.role === 'admin'
}
