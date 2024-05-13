/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  try {
    return knex.schema.createTable('Products', function (table) {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.integer('price').notNullable()
      table.integer('quantity').notNullable()
      table.string('image_url')
      table.timestamps(true, true)
    })
  } catch (error) {
    console.error('Error creating products table: ', error)
    throw error
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  try {
    return knex.schema.dropTableIfExists('Products')
  } catch (error) {
    console.error('Error dropping products table: ', error)
    throw error
  }
}
