const express = require('express');
const app = express();
const PORT = process.env.port || 3003;
const db = require('../db/index.js');

app.use(express.static('./client/dist'));

app.get('/api/sites/:siteId', (req, res) => {
  console.log('receiving a get request');

  db.readSites(req.params.siteId, (err, result) => {
    if (err) throw err;
    console.log('sending the results');
    res.send(result);
  })
})

app.get('/api/sites/:siteId/recommend', (req, res) => {
  console.log(`receiving a get request for recommendations for site: ${req.params.siteId}`);

  db.siteRecommend(req.params.siteId, (err, result) => {
    if (err) throw err;
    console.log('sending the results');
    res.send(result);
  })
})

app.get('*', (req, res) => {
  res.sendFile('index.html', {root:'./client/dist/'});
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));