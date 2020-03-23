const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/FindID', (req, res) => {
  console.log('Get request');
  db.findObjByID(1, (err, item) => {
    if (err) throw err;
    res.send(item);
  });
});

app.get('/getAllImages', (req, res) => {
  console.log('Get All request');
  db.findAllObj((err, item) => {
    if (err) throw err;
    res.send(item);
  });
});


app.listen(2729, () => console.log('Listening'));
