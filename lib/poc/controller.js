'use strict';

const services = require('./services');

const controller = (() => {
  const send = (req, res) => {
    services.send(req, res);
  };

  return {
    send
  }
})();

module.exports = controller;
