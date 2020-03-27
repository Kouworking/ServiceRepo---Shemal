/* eslint-disable no-console */
const Faker = require('faker');
const gridSave = require('./index');

const getimage = (num) => {
  let string = '';
  let arr = [];
  for (let i = 0; i <= 6; i += 1) {
    let randNo = Math.round((Math.random() * 640), 0);
    string = `https://i.picsum.photos/id/${randNo}/299/175.jpg`;
    arr.push(string);
  }
  return arr;
};

const seed = () => {
  for (let i = 1; i <= 7; i += 1) {
    let name = Faker.random.words();
    let location = Faker.address.stateAbbr();
    const randomNumber = Math.round(Math.random() * 45, 0);

    gridSave.save({
      PropertyID: i,
      PropertyName: name,
      PropertyLocation: location,
      PropertyAllocation: randomNumber,
      PropertyImages: getimage(i)
    });
  }
};

seed();

