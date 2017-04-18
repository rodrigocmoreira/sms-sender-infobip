'use strict';
const nconf = require('nconf');

nconf.argv()
  .env()
  .file(`${process.cwd()}/conf/sms-sender-infobip.json`)
  .defaults({
    "URL": "http://localhost",
    "PORT": 3000
  });

module.exports = nconf;
