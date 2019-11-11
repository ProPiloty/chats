// Packages
const express = require('express');

// Middleware

// Controllers
const convo_ctrl = require('./../../controllers/conversation_controller');

// Express Router
const ConversationRouter = express.Router();

// Endpoint Routes
ConversationRouter.get('/all', convo_ctrl.getAllConversations);

// Exports Router
module.exports = {
  ConversationRouter
}