/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('orders', function (table) {
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
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('orders')
}
