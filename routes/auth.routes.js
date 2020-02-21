const {Router} = require('express')
const router = Router()
const AuthMiddleware = require('../middleware/auth')
const {validationResult} = require("express-validator")
const User = require('../models/User')

router.post('/reg', AuthMiddleware.register, (req, res) => {
  
  res.status(200).json({ status: 200, message: "All ok!" })
})

router.post('/login', AuthMiddleware.login, (req, res) => {})

router.post('/reset_password', AuthMiddleware.reset, (req, res) => {})

module.exports = router