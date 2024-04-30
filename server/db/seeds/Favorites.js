/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('Favorites').del();
  await knex('Favorites').insert([
    { id: 1, user_id: 1, product_id: 3, created_at: new Date(), updated_at: new Date() },
    { id: 2, user_id: 1, product_id: 2, created_at: new Date(), updated_at: new Date() },
    { id: 3, user_id: 2, product_id: 3, created_at: new Date(), updated_at: new Date() },
    { id: 4, user_id: 2, product_id: 1, created_at: new Date(), updated_at: new Date() },
  ]);
};