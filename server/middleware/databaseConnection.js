const massive = require('massive');

const {CONNECTION_STRING} = process.env;

const databaseConnection = (app) => {
  massive(CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('Database connected!');
  });
};


module.exports = {
  databaseConnection
};