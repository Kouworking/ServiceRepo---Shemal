/* eslint-disable no-console */
const request = require('request');
const Faker = require('faker');
const getImage = require('./getImages');

const image = () => {
  request('https://picsum.photos/v2/list?page=2&limit=1', (error, response, body) => {
    if (error) {
      return error;
    }
    console.log('Pics Received');
    console.log(JSON.parse(body));
    return JSON.parse(body);

  //  console.log(JSON.parse(body));
  });
};

const name = Faker.random.words();
const location = Faker.address.stateAbbr();
const randomNumber = Math.round(Math.random() * 30, 0);
const getimage = image();

const obj = {
  PropertyID: 3,
  PropertyName: name,
  PropertyLocation: location,
  PropertyAllocation: randomNumber,
  PropertyImages: [getimage]
};
console.log(obj);
