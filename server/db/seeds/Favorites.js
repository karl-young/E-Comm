/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Favorites').del()
  await knex('Favorites').insert([
    { user_id: 1, product_id: 3 },
    { user_id: 1, product_id: 2 },
  ])

  await knex('Favorites').insert([
    { user_id: 2, product_id: 3 },
    { user_id: 2, product_id: 1 },
  ])
}
