const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const verifyToken = require('../middleware/auth')
const { admin } = require('../middleware/authMiddleware.js')

router.route('/trash').get(verifyToken, admin, userController.getTrashUsers)
//[PUT] /api/users/profile
//[GET] /api/users/profile
router
  .route('/profile')
  .get(verifyToken, userController.getUserProfile)
  .put(verifyToken, userController.updateUserProfile)
router
  .route('/:id/restore')
  .patch(verifyToken, admin, userController.restoreUser)
router.route('/:id/force').delete(verifyToken, admin, userController.forceUser)
//[PUT] /api/users/profile
//[GET] /api/users/profile
router.route('/').get(verifyToken, admin, userController.getUsers)
router
  .route('/:id')
  .delete(verifyToken, admin, userController.deleteUser)
  .get(verifyToken, admin, userController.getUserById)
  .put(verifyToken, admin, userController.updateUser)

module.exports = router
