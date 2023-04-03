const express = require('express')
 const AuthController = require('../Controllers/auth_controller')
 const Middleware = require('../Middlewares/auth_middleware')
 const router = express.Router()

 
  router.post('/register', AuthController.registration)
  router.post('/login', AuthController.login)
  router.get('/users', Middleware.authMiddleware, AuthController.getAllUsers)






  module.exports = router

