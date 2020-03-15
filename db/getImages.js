/* eslint-disable no-console */
const request = require('request');

// API to get random images from Lorem Picsum
// let test = '';
// const image = (callback) => {
//   request('https://picsum.photos/v2/list?page=2&limit=1', (error, response, body) => {
//     if (error) {
//       callback(error, null);
//     }
//     console.log("Pics Received");
//     callback(null, JSON.parse(body)[0].url);
//   });
// };

// image((err, result) => {
//   if (err) throw err;
//   return result;
// });


const image = () => {
  return request('https://picsum.photos/v2/list?page=2&limit=1', (error, response, body) => {
    if (error) {
      return error;
    }
    console.log("Pics Received");
    return (JSON.parse(body)[0].url);
  });
};

image();
