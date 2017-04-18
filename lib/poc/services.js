'use strict';

const request = require('request');
const config = require(`${process.cwd()}/lib/config`);
const winston = require('winston');

const services = (() => {
  const send = (req, res) => {
    const options = {
      url: config.get('INFOBIP_SEND_URL'),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Host: config.get('INFOBIP_HOST'),
        Authorization: config.get('INFOBIP_AUTH_KEY')
      },      
      body: {
        from: "pocSMS",
        to: req.body.phone,
        text: req.body.text
      },
      json: true
    };
    request(options, (err, response) => {
      if(err) {
        winston.error('Error on infobip send sms post: ', err);
        return res.status(500).end();
      }

      winston.info('Infobip response: ', response.body);
      return res.status(200).end();
    });
  };

  return {
    send
  }
})();

module.exports = services;
