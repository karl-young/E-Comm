/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Users').del()
  await knex('Users').insert([
    {
      id: 1,
      name: 'Dave',
      email: 'Dave12@example.com',
      password: 'password',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'Sarah',
      email: 'Sarah53@example.com',
      password: '1234987',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: 'Karl',
      email: 'Karl71@example.com',
      password: 'hnfgiua8',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}
