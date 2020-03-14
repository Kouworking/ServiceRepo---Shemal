//const seed = require('./index');
const Faker = require('faker');

const name = Faker.random.words();
const location = Faker.address.stateAbbr();
const randomNumber = Faker.random.number();
const image = Faker.image.nature();

const obj = {
  PropertyID: 2,
  PropertyName: name,
  PropertyLocation: location,
  PropertyAllocation: randomNumber,
  PropertyImages: [image, image]
};
console.log(obj);
//seed.save(obj);
