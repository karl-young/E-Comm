/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  try {
    return knex.schema.createTable('PurchaseItems', function (table) {
      table.increments('id').primary()
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('Orders')
        .onDelete('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('Products')
        .onDelete('CASCADE')
      table.integer('quantity').notNullable()
      table.decimal('price').notNullable()
      table.timestamps(true, true)
    })
  } catch (error) {
    console.error('Error creating purchase items table: ', error)
    throw error
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('PurchaseItems')
}
