/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  try {
    return knex.schema.createTable('Favorites', function (table) {
      table.increments('id').primary()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('Users')
        .onDelete('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('Products')
        .onDelete('CASCADE')
      table.timestamps(true, true)
    })
  } catch (error) {
    console.error('Error creating favorites table: ', error)
    throw error
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('Favorites')
}
