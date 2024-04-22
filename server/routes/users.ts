import express from 'express'
import * as utils from '../../lib/utils'

const router = express.Router()

// POST /api/users/register - create user

router.post('/api/users/register', async (req, res) => {
  try {
  } catch (error: any) {
    utils.handleError(res, 500, 'Error registering user')
  }
})

// POST /api/users/login - login user
router.post('/api/users/login', async (req, res) => {
  try {
  } catch (error: any) {
    utils.handleError(res, 500, 'Error logging in user')
  }
})

// GET /api/users/:id - get user by id
router.get('/api/users/:id', async (req, res) => {
  try {
  } catch (error: any) {
    utils.handleError(res, 500, 'Error getting single user')
  }
})

// PUT /api/users/:id - update user by id
router.put('/api/users/:id', async (req, res) => {
  try {
  } catch (error: any) {
    utils.handleError(res, 500, 'Error updating user')
  }
})

// DELETE /api/users/:id - delete user by id
router.delete('/api/users/:id', async (req, res) => {
  try {
  } catch (error: any) {
    utils.handleError(res, 500, 'Error deleting user')
  }
})

export default router
