const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
  console.log('Get request');
});


app.listen(2729, () => console.log('Listening'));
