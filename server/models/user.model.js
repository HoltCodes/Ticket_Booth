const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({

  username: {
    type: String,
    required: [true, 'A Username is Required'],
    minlength: [3, 'A Username must be at lease 3 characters']
  },

  firstName: {
    type: String,
    minlength: [2, 'A First Name must be at least 2 characters']
  },

  lastName: {
    type: String,
    minlength: [2, 'A Last Name must be at least 2 characters']
  },

  email: {
    type: String,
    required: [true, 'An Email Address is Required'],
    minlength: [7, 'Must be a valid Email']
  },

  password: {
    type: String,
    required: [true, 'A Password is Required'],
    minlength: [8, 'Passwords Must be at Least 8 Characters']
  },

}, { timestamps: true })


//-- Virtual and Pre For Validating -- 
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)

UserSchema.pre('validate', function (next) { 
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords Must Match')
        console.log('Passwords Do Not Match')
    }
    next()
})

UserSchema.pre('save', function (next) {
    console.log('You are at Pre-Save now')
    bcrypt.hash(this.password, 8)
        .then((hashedPw) => {
            this.password = hashedPw
            next()
        })
        .catch(err => console.log(err))
})

const User = mongoose.model('User', UserSchema)
module.exports = User