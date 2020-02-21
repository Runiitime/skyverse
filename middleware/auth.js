const {check} = require("express-validator")

const register = [
  check('email', 'Некорректный email').isEmail(),
  check('email', 'Вы не ввели email').isEmpty(),
  check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
  check('password', 'Вы не ввели пароль').isEmpty(),
  check('login', 'Вы не ввели логин').isEmpty()
]

const login = [
  check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
  check('password', 'Вы не ввели пароль').isEmpty(),
  check('login', 'Вы не ввели логин').isEmpty()
]

const reset = [
  check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
  check('password', 'Вы не ввели пароль').isEmpty(),
  check('reset_password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
  check('reset_password', 'Вы не ввели пароль').isEmpty(),
]

module.exports = {
  register,
  login,
  reset
};