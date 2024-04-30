/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('Products').del()
  await knex('Products').insert([
    {
      id: 1,
      name: 'Pla silk green/blue',
      description:
        'Smooth and vibrant green/blue PLA filament for elegant 3D prints.',
      price: 50,
      quantity: 10,
      image_url: 'public/images/Pla-silk-greenblue.jpg',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'Pla matt black',
      description: 'Sleek matte black PLA filament for a professional finish',
      price: 30,
      quantity: 5,
      image_url: 'public/images/Pla-matt-black.jpg',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: 'Pla Hyper white',
      description:
        'Dazzling hyper white PLA filament for crisp and clean prints with intricate details.',
      price: 40,
      quantity: 15,
      image_url: 'public/images/Pla-hyper-white.jpg',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}
