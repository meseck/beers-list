const express = require('express');
const request = require('request');
const proxy = require('express-http-proxy');
const app = express();

const url = 'https://sandbox-api.brewerydb.com';
const endpoint = '/v2/beers';
const apiKey = '4c036f77b4a036aedb2085ef6a64cc0f';
const format = 'json';

app.use(
  '/beers/:page',
  proxy(url, {
    proxyReqPathResolver: req => {
      const pageNumber = req.params.page;
      const path = `${endpoint}/?key=${apiKey}&format=${format}&p=${pageNumber}`;
      return path;
    },
  })
);

const server = app.listen(3001, function() {
  console.log('Listening on port ' + server.address().port);
});
