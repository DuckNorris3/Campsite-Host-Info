const express = require('express');
const app = express();
const PORT = process.env.port || 3003;
const db = require('../db/index.js');

app.use(express.static('./client/dist'));

app.get('/api/sites', (req, res) => {
  console.log('receiving a get request');
  debugger;
  db.readSites((err, result) => {
    if (err) throw err;
    console.log('sending the results');
    res.send(result);
  })
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));