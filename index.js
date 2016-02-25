var request = require('request');
require('dotenv').config();
var host = process.env.SLNKY_HOST || "https://slnky.ulive.sh";
var url = host + "/hooks/aws";

exports.handler = function (event, context) {
  console.log("URL: "+url);
  if (!event) {
    return context.done("event not set");
  } else {
    request({
      url: url,
      method: "POST",
      json: true,
      body: event
    }, function (error, response, body) {
      if (error) {
        context.done(error);
      } else if (response.statusCode == 200) {
        context.done(null, "event posted");
      } else {
        console.log(response.statusCode);
        context.done("post failed: unknown");
      }
    });
  }
};
