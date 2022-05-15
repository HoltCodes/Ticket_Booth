const UserController = require('../controllers/user.controller')
const User = require('../models/user.model')

module.exports = (app) => {

  app.get('/api/users', UserController.findAllUsers)
  app.post('/api/users/register', UserController.register)
  app.post('/api/users/login', UserController.login)
  app.post('/api/users/logout', UserController.logout)
  app.put('/api/users/update/:id', UserController.updateOneUser)
  app.get('/api/users/security', UserController.getUserLoggedIn)
}