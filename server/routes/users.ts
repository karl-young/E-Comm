import express from 'express'

// export type User = {
//   id: number
//   name: string
//   email: string
//   password: string
//   role: string
//   created_at: string
//   updated_at: string
// }

const router = express.Router()

// POST /api/users/register - create user

router.post('/api/users/register', async (req, res) => {
  try {
  } catch (error: any) {
    res.status(500).send('Error creating user')
    console.error(error.message)
  }
})

// POST /api/users/login - login user
router.post('/api/users/login', async (req, res) => {
  try {
  } catch (error: any) {
    res.status(500).send('Error logging in user')
    console.error(error.message)
  }
})

// GET /api/users/:id - get user by id
router.get('/api/users/:id', async (req, res) => {
  try {
  } catch (error: any) {
    res.status(500).send('Error getting single user')
    console.error(error.message)
  }
})

// PUT /api/users/:id - update user by id
router.put('/api/users/:id', async (req, res) => {
  try {
  } catch (error: any) {
    res.status(500).send('Error updating user')
    console.error(error.message)
  }
})

// DELETE /api/users/:id - delete user by id
router.delete('/api/users/:id', async (req, res) => {
  try {
  } catch (error: any) {
    res.status(500).send('Error deleting user')
    console.error(error.message)
  }
})

export default router
