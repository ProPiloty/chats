// Endpoint Routers
const {AuthRouter} = require('./routers/auth_router');

// Adds routes to server, directing HTTP requests to the appropriate endpoint
const apiRouter = (app) => {
  app.use('/auth', AuthRouter);
}

// Exporting apiRouter
module.exports = {
  apiRouter
}