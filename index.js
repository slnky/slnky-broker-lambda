require('dotenv').config();
var request = require('request');

exports.handler = function (event, context) {
  if (!event) {
    return context.done("event not set");
  } else {
    request({
      url: process.env.BROKER_URL,
      method: "POST",
      json: true,
      body: event
    }, function (error, response, body) {
      if (response.statusCode == 200) {
        context.done(null, "event posted");
      } else {
        context.done("post failed");
      }
    });
  }
};
