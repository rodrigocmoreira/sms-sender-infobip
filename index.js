'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const poc = require(`${process.cwd()}/lib/poc`);
const config = require('./lib/config');
const pkg = require(`${process.cwd()}/package.json`);
const winston = require('winston');
const app = express();

process.title = pkg.name;

app.use(bodyParser.json());
poc.routes(app);

const server = app.listen(process.env.PORT || config.get('PORT'), () => {
  winston.info('%s - Version: %s', pkg.name, pkg.version);
  winston.info('Express server listening on port: %s', server.address().port);
}).on('close', function() {
  db.close();
  winston.info('Shutdown the application server');
});

module.exports = app;
