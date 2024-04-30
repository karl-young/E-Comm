/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Orders').del()
  await knex('Orders').insert([
    { id: 1, user_id: 1, total_price: 100.0, status: 'completed' },
    { id: 2, user_id: 2, total_price: 30.0, status: 'pending' },
  ])
}
