const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo', { useNewUrlParser: true })
// .then(() => console.log('Connected')).
// catch(err => console.log('Caught', err.stack))
///localhost/gridmm, useUnifiedTopology: true
const gridSchema = mongoose.Schema({
  PropertyID: Number,
  PropertyName: String,
  PropertyLocation: String,
  PropertyAllocation: Number,
  PropertyImages: [],
  SimilarProperty: {}
});

const Grid = mongoose.model('Grid', gridSchema);

const save = (obj) => {
  Grid.create(obj, (err, result) => {
    if (err) { throw err; }
  });
};

const findObjByID = (id, callback) => {
  Grid.find({ PropertyID: `${id}` }, (err, item) => {
    if (err) {
      callback(err, null);
    }
    callback(null, item[0]);
  });
};

const findAllObj = (callback) => {
  Grid.find({}, (err, item) => {
    if (err) {
      callback(err, null);
    }
    // Returns an array with all items
    callback(null, item);
  });
};

module.exports = {
  findObjByID,
  save,
  findAllObj
};
