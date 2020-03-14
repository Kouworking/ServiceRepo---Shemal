/* eslint-disable no-console */
const request = require('request');

// API to get random images from Lorem Picsum
let image = (callback) => {
  request('https://picsum.photos/v2/list?page=2&limit=100', (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    console.log("Pics Received");
    callback(null, JSON.parse(body));
  //  console.log(JSON.parse(body));
  });
};
exports.image = image;
