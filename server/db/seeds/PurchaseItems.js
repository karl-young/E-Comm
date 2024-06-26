/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('PurchaseItems').del()
  await knex('PurchaseItems').insert([
    {
      id: 1,
      order_id: 1,
      product_id: 1,
      quantity: 2,
      price: 100.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      order_id: 2,
      product_id: 2,
      quantity: 1,
      price: 30.0,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}
