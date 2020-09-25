const express = require('express');
const app = express();
const PORT = process.env.port || 3003;

app.get('/', (req, res) => {
  res.send('Campsite-Host-Info Server Test');
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));