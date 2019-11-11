// Endpoint Routers
const {AuthRouter} = require('./routers/auth_router');
const {ConversationRouter} = require('./routers/conversation_router');

// Adds routes to server, directing HTTP requests to the appropriate endpoint
const apiRouter = (app) => {
  app.use('/auth', AuthRouter);
  app.use('/conversations', ConversationRouter);
}

// Exporting apiRouter
module.exports = {
  apiRouter
}