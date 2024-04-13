/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('favorites', function (table) {
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
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('favorites')
}
