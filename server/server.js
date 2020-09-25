const express = require('express');
const app = express();
const PORT = process.env.port || 3003;

app.use(express.static('./client/dist'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));