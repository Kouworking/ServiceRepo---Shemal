const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/grid');

const gridSchema = mongoose.Schema({
  PropertyID: Number,
  PropertyName: String,
  PropertyLocation: String,
  PropertyAllocation: Number,
  PropertyImages: [Number],
  SimilarProperty: [Number]
});

const Grid = mongoose.model('Grid', gridSchema);

// Sample object to pass
// const obj = {
//   PropertyID: 1,
//   PropertyName: 'Test',
//   PropertyLocation: 'NY',
//   PropertyAllocation: 2,
//   PropertyImages: ['url1', 'url2'],
//   SimilarProperty: [2]
// };

const save = (obj) => {
  Grid.create(obj, (err, result) => {
    if (err) { throw err; }
  });
};
save();
module.exports.save = save;
