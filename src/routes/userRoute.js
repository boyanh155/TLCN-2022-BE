const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const verifyToken = require('../middleware/auth')
const { admin } = require('../middleware/authMiddleware.js')

//[PUT] /api/users/profile
//[GET] /api/users/profile
router
  .route('/profile')
  .get(verifyToken, userController.getUserProfile)
  .put(verifyToken, userController.updateUserProfile)

//[PUT] /api/users/profile
//[GET] /api/users/profile
router.route('/').get(verifyToken, admin, userController.getUsers)

module.exports = router