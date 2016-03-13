var request = require('request');
require('dotenv').config();
var host = process.env.SLNKY_HOST || "https://slnky.ulive.sh";
var url = host + "/hooks/aws";

exports.handler = function (event, context) {
  if (!event) {
    return context.done("event not set");
  } else {
    request({
      url: url,
      method: "POST",
      json: true,
      body: {event: event}
    }, function (error, response, body) {
      if (error) {
        context.done(error);
      } else if (response.statusCode == 200) {
        context.done(null, "event posted");
      } else {
        context.done("unknown error: "+response.statusCode+": "+JSON.stringify(body));
      }
    });
  }
};
