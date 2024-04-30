/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Products').del()
  await knex('Products').insert([
    {
      id: 1,
      name: 'Pla silk green/blue',
      description:
        "Experience the silky smooth finish of this vibrant green/blue PLA filament. With its unique sheen and excellent printability, this filament is perfect for adding a touch of elegance to your 3D printed creations. Whether you're crafting intricate models or functional prototypes, this filament delivers exceptional results every time.",
      price: 100,
      quantity: 10,
      image_url: 'public/images/Pla-silk-greenblue.jpg',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'Pla matt black',
      description:
        'Achieve a sleek and professional look with PLA Matt Black filament. Designed for a matte finish, this filament produces prints with a refined appearance and deep black color. Ideal for projects that demand a sophisticated touch.',
      price: 200,
      quantity: 5,
      image_url: 'public/images/Pla-matt-black.jpg',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: 'Pla Hyper white',
      description:
        ' Elevate your 3D printing projects to new heights with this dazzling hyper white PLA filament. Engineered for brightness and clarity, this filament produces stunningly crisp and clean prints with every layer. From intricate jewelry designs to mechanical parts, this filament showcases intricate details and sharp edges, making it the ultimate choice for professional-grade prints.',
      price: 300,
      quantity: 15,
      image_url: 'public/images/Pla-hyper-white.jpg',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}
