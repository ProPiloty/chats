// Packages
const express = require('express');

// Middleware


// Controllers
const auth_ctrl = require('./../../controllers/auth_controller');

// Express Router
const AuthRouter = express.Router();

// Endpoint Routes
AuthRouter.post('/register', auth_ctrl.register); // Registers a new user
AuthRouter.post('/login', auth_ctrl.login); // Logs the user in
AuthRouter.get('/logout', auth_ctrl.logout); // Logs the user out 

// Exports Router
module.exports = {
  AuthRouter
}