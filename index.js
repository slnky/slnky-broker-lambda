var request = require('request');
var url = "https://slnky.ulive.sh/hooks/aws";

exports.handler = function (event, context) {
  if (!event) {
    return context.done("event not set");
  } else {
    request({
      url: url,
      method: "POST",
      json: true,
      body: event
    }, function (error, response, body) {
      if (response.statusCode == 200) {
        context.done(null, "event posted");
      } else {
        console.log(response.statusCode);
        context.done("post failed");
      }
    });
  }
};
