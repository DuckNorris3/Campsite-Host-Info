/* eslint-disable no-console */
const express = require('express');

const app = express();
const db = require('../db/index.js');

app.use(express.static('./client/dist'));

app.get('/i', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/api/sites/:siteId', (req, res) => {
  console.log('receiving a get request');

  db.readSites(req.params.siteId, (err, result) => {
    if (err) throw err;
    console.log('sending the results');
    res.send(result);
  });
});

app.get('/api/sites/:siteId/recommend', (req, res) => {
  console.log(`receiving a get request for recommendations for site: ${req.params.siteId}`);

  db.siteRecommend(req.params.siteId, (err, result) => {
    if (err) throw err;
    console.log('sending the results');
    res.send(result);
  });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './client/dist/' });
});

module.exports = app;
