/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();
const db = require('../db/index.js');

app.use(cors());
app.use(express.static('./client/dist'));

app.get('/i', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/api/sites/:siteId', (req, res) => {
  console.log('receiving a get request');

  db.readSites(req.params.siteId, (err, result) => {
    if (err) {
      console.error('error occurred when receiving querying with site id:', req.params.siteId, err);
      res.status(404).send("Sorry can't find what you are looking for.");
      return;
    }
    console.log('sending the results');
    res.send(result);
  });
});

app.get('/api/sites/:siteId/recommend', (req, res) => {
  console.log(`receiving a get request for recommendations for site: ${req.params.siteId}`);

  db.siteRecommend(req.params.siteId, (err, result) => {
    if (err) {
      console.error('error occurred when receiving querying for recommended with site id:', req.params.siteId, err);
      res.status(404).send("Sorry can't find what you are looking for.");
      return;
    }
    console.log('sending the results');
    res.send(result);
  });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './client/dist/' });
});

module.exports = app;
