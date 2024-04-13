/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.integer('price').notNullable()
    table.integer('quantity').notNullable()
    table.string('image_url')
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('products')
}
