const express = require('express');
const session = require('express-session');

const {SESSION_SECRET} = process.env;

const provider = (app) => {
  app.use(express.json());
  app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  }));
};

module.exports = {
  provider
};