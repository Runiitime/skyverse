const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    default: ''
  },
  last_name: {
    type: String,
    default: ''
  }
})

UserSchema.methods.checkUserExists = async function(params) {
  let errors = []
  let user = this.model('User')
  let result = false

  if('login' in params) {
    field = 'login'
    result = await user.findOne({login: params.login})

    if(result) {
      errors.push("Пользователь с таким логином существует")
    }
  }

  if('email' in params) {
    field = 'email'
    result = await user.findOne({email: params.email})
    
    if(result) {
      errors.push("Пользователь с таким email существует")
    }
  }

  if(errors.length > 0) return {exists: true, errors}

  return {exists: false}
}

const UserModel = model('User', UserSchema)

module.exports = [
  UserSchema,
  UserModel
]