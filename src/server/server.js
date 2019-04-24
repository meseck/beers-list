const express = require('express');
const app = express();
const request = require('request');

app.get('/beers', (req, res) => {
  const url = 'https://sandbox-api.brewerydb.com/v2';
  const endpoint = '/beers';
  const apiKey = '4c036f77b4a036aedb2085ef6a64cc0f&format=json';
  const pageNumber = '1';

  const options = {
    method: 'GET',
    url: `${url}${endpoint}/?key=${apiKey}&p=${pageNumber}`,
  };

  return request(options, (err, response, body) => {
    res.send(JSON.parse(body));
  });
});

const server = app.listen(3001, function() {
  console.log('Listening on port ' + server.address().port);
});