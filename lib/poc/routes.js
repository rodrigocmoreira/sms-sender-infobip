'use strict';

const controller = require('./controller');

module.exports = (app) => {
  app.post('/send', controller.send);
};
