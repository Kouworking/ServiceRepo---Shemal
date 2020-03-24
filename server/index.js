const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/index');

const app = express();
app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/FindID', (req, res) => {
  db.findObjByID(1, (err, item) => {
    if (err) throw err;
    res.send(item);
  });
});

app.get('/getAllImages', (req, res) => {
  db.findAllObj((err, item) => {
    if (err) throw err;
    res.send(item);
  });
});


app.listen(2729, () => console.log('Listening'));
