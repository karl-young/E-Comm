/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  try {
    return knex.schema.createTable('Users', function (table) {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.timestamps(true, true)
    })
  } catch (error) {
    console.error('Error creating users table: ', error)
    throw error
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  try {
    return knex.schema.dropTableIfExists('Users')
  } catch (error) {
    console.error('Error dropping users table: ', error)
    throw error
  }
}
