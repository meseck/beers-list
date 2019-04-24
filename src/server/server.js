const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.get('/beers/:page', (req, res) => {
  const url = 'https://sandbox-api.brewerydb.com/v2';
  const endpoint = '/beers';
  const apiKey = '4c036f77b4a036aedb2085ef6a64cc0f';
  const format = 'json';
  const pageNumber = req.params.page;

  const options = {
    method: 'GET',
    url: `${url}${endpoint}/?key=${apiKey}&format=${format}&p=${pageNumber}`,
  };

  return request(options, (err, response, body) => {
    res.send(body);
  });
});

const server = app.listen(3001, function() {
  console.log('Listening on port ' + server.address().port);
});