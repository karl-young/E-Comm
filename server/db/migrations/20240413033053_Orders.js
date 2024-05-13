/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  try {
    return knex.schema.createTable('Orders', function (table) {
      table.increments('id').primary()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('Users')
        .onDelete('CASCADE')
      table.decimal('total_price').notNullable()
      table.string('status').notNullable().defaultTo('pending')
      table.timestamps(true, true)
    })
  } catch (error) {
    console.error('Error creating orders table: ', error)
    throw error
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  try {
    return knex.schema.dropTableIfExists('Orders')
  } catch (error) {
    console.error('Error dropping orders table: ', error)
    throw error
  }
}
