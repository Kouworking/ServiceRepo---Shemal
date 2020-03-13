/* eslint-disable no-console */
const request = require('request');

// API to get random images from Lorem Picsum
request('https://picsum.photos/v2/list?page=2&limit=100', (error, response, body) => {
  if (error) {
    throw error;
  }
  console.log("something")
//  console.log(JSON.parse(body));
});


exports.request = request;
